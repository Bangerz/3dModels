import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {setTimeout as delay} from 'node:timers/promises';
import {parseArgs} from 'node:util';
import {connect, debugJson, device, emulate, launchDesktop} from './browser.mjs';
import {presentationSample, summarize, thermalSample} from './metrics.mjs';
import {beginReplay, occupyUte, readiness, readReplay, weatherEpoch} from './replay.mjs';
import {serveSite, sha256} from './site.mjs';

const {values: options} = parseArgs({options: {
  channel: {type: 'string', default: 'production'}, mode: {type: 'string', default: 'emulated'}, site: {type: 'string'}, out: {type: 'string'},
  label: {type: 'string'}, chrome: {type: 'string'}, adb: {type: 'string', default: 'adb'},
  three: {type: 'string'}, 'expect-host': {type: 'string'}, 'expect-model': {type: 'string'},
  'expect-map': {type: 'string'}, note: {type: 'string'}, smoke: {type: 'boolean'}, help: {type: 'boolean'},
}});
if (options.help) {
  console.log(`Usage: node run.mjs --mode emulated|physical --site BUILT_SITE --out RUN.json --label LABEL
  --channel production|beta selects the host, versioned renderer and map (default production).
  Emulated mode requires --chrome PATH (or an executable on PATH).
  Physical mode uses USB and --adb PATH (defaults to adb on PATH).
  --smoke runs 3 seconds of A'Beckett in emulated mode. Default: 171 seconds.
  --three FILE supplies the pinned Three.js file instead of fetching it.
  --expect-host HEX --expect-model HEX --expect-map HEX check original SHA-256 pins.
  --note TEXT records the session's conditions in the JSON report.`);
  process.exit(0);
}
const physical = options.mode === 'physical';
assert.ok(physical || options.mode === 'emulated', 'Mode must be emulated or physical');
assert.ok(options.site && options.out && options.label, 'Supply --site, --out and --label (see --help)');
assert.ok(physical || options.chrome, 'Emulation requires --chrome PATH');
assert.ok(!physical || !options.smoke, '--smoke is emulated only');

const source = await fs.readFile(new URL('inverloch-v44-traces.json', import.meta.url));
const traceSha256 = sha256(source);
assert.equal(traceSha256, 'd7bdf2112e9ed0ed273a87d0f48a6e7d53483b4f91c7b993250132c3895fd6dd', 'Original trace bytes changed');
const traces = JSON.parse(source);
const segments = [];
let end = 0, priorMetres = 0;
for (let cycle = 1; cycle <= (options.smoke ? 1 : 3); cycle++) {
  for (const [street, ms] of (options.smoke ? [['abeckett', 3000]] : [['abeckett', 40000], ['cuttriss', 17000]])) {
    const trace = traces[street];
    segments.push({street, cycle, begin: end, end: end + ms, trace, priorMetres});
    end += ms;
    priorMetres += trace.at(-1).distance;
  }
}

const report = {label: options.label, mode: options.mode, smoke: options.smoke ?? false, note: options.note,
  status: 'setup', traceSha256, weatherEpoch, plan: segments.map(({trace, priorMetres, ...segment}) => segment),
  pageErrors: [], sampleErrors: [], thermal: [], presentation: [], renders: [], rafs: [], progress: []};
const output = path.resolve(options.out);
await fs.mkdir(path.dirname(output), {recursive: true});
await fs.writeFile(output, JSON.stringify(report), {flag: 'wx'});
async function save() {
  const temp = `${output}.${process.pid}.tmp`;
  await fs.writeFile(temp, JSON.stringify(report));
  await fs.rename(temp, output);
}

const phone = physical ? device(options.adb) : null;
const signal = new AbortController();
const cancel = () => signal.abort(Error('Run interrupted'));
process.on('SIGINT', cancel);
process.on('SIGTERM', cancel);
let hosted, chrome, forward, reverse, browser, page, target, contextId;
async function sample(name, getter) {
  try { report[name].push(await getter(phone)); }
  catch (error) { report.sampleErrors.push({sensor: name, error: error.message}); }
}

try {
  hosted = await serveSite(options);
  report.hashes = hosted.hashes;
  if (phone) {
    const endpoint = 'tcp:' + hosted.port;
    await phone('reverse', '--no-rebind', endpoint, endpoint);
    reverse = endpoint;
    const port = Number(await phone('forward', '--no-rebind', 'tcp:0', 'localabstract:chrome_devtools_remote'));
    assert.ok(Number.isInteger(port) && port > 0, 'ADB did not allocate a DevTools port');
    forward = 'tcp:' + port;
    report.physicalDisplay = await phone('shell', 'wm', 'size');
    await sample('thermal', thermalSample);
  } else {
    chrome = await launchDesktop(options.chrome);
  }
  const port = chrome?.port ?? Number(forward.slice(4));
  const version = await debugJson(port, '/json/version');
  report.browser = version.Browser;
  browser = await connect(port, version.webSocketDebuggerUrl);
  if (phone) {
    try {
      contextId = (await browser.send('Target.createBrowserContext', {disposeOnDetach: true})).browserContextId;
      assert.ok(contextId, 'Chrome returned no context');
    } catch (error) {
      throw Error(`Android Chrome could not create a disposable benchmark context: ${error.message}`);
    }
  }
  target = (await browser.send('Target.createTarget', {url: 'about:blank', ...(contextId ? {browserContextId: contextId} : {})})).targetId;
  const tab = (await debugJson(port, '/json/list')).find(item => item.id === target);
  assert.ok(tab?.webSocketDebuggerUrl, 'Chrome did not expose the benchmark tab');
  page = await connect(port, tab.webSocketDebuggerUrl);
  report.pageErrors = page.errors;
  await page.send('Page.enable');
  await page.send('Runtime.enable');
  await page.send('Network.enable');
  await page.send('Network.setBypassServiceWorker', {bypass: true});
  if (!phone) await emulate(page, version.Browser.split('/').at(-1));
  await page.send('Emulation.setEmulatedMedia', {features: [{name: 'prefers-reduced-motion', value: 'no-preference'}]});
  await page.send('Page.bringToFront');
  const navigation = await page.send('Page.navigate', {url: hosted.url});
  if (navigation.errorText) throw Error(navigation.errorText);
  const deadline = Date.now() + 120000;
  let ready;
  do {
    await delay(350, undefined, {signal: signal.signal});
    ready = await page.evaluate(readiness);
    if (ready.visible && ready.stable && ready.native && !ready.loading) break;
    if (page.errors.length) throw Error(page.errors[0]);
  } while (Date.now() < deadline);
  assert.ok(ready.visible && ready.stable && ready.native && !ready.loading, `Explore did not settle: ${JSON.stringify(ready)}`);
  assert.ok(hosted.requests.some(request => request.path === hosted.expectedModelRequest && request.method === 'GET' && request.status === 200),
    `Expected versioned native model was never requested: ${hosted.expectedModelRequest}`);
  if (phone) await sample('presentation', presentationSample);
  report.state = await page.evaluate(occupyUte, {first: segments[0].trace[0], physical});
  assert.equal(report.state.reducedMotion, false, 'Replay requires full motion');
  await delay(1800, undefined, {signal: signal.signal});
  report.timing = await page.evaluate(beginReplay, {segments, clock: weatherEpoch, key: report.state.key});
  report.status = 'running';
  await save();
  console.log(`${report.label} started ${report.timing.durationMs / 1000}s, ${report.state.gpu}, ${report.state.quality}/${report.state.frameTarget}`);
  let nextThermal = 0, nextPresentation = 0, nextSave = Date.now() + 15000;
  const finishDeadline = Date.now() + report.timing.durationMs + 15000;
  for (;;) {
    const cursor = Object.fromEntries(['renders', 'rafs', 'progress'].map(key => [key, report[key].length]));
    const current = await page.evaluate(readReplay, cursor);
    for (const key of Object.keys(cursor)) report[key].push(...current[key]);
    const now = Date.now();
    // A slow optional device sample may span completion. Always read the final replay first.
    if (current.end === null && now >= finishDeadline) break;
    if (phone && now >= nextThermal) {
      nextThermal = now + 15000;
      await sample('thermal', thermalSample);
    }
    if (phone && now >= nextPresentation) {
      nextPresentation = now + 12000;
      await sample('presentation', presentationSample);
    }
    if (current.end !== null) {
      report.end = current.end;
      report.summary = summarize(report);
      if (current.error) throw Error(current.error);
      assert.equal(report.end, report.timing.durationMs, 'Replay ended early');
      assert.ok(report.summary.segments.every(segment => segment.renderCount > 0), 'Missing native scene samples in a street window');
      if (!options.smoke) assert.ok(Math.abs(report.summary.replayedMetres - priorMetres) < 1, 'Replay distance mismatch');
      assert.equal(report.pageErrors.length, 0, 'Chrome reported page exceptions');
      report.status = 'complete';
      break;
    }
    if (now >= nextSave) {
      nextSave = now + 15000;
      await save();
    }
    await delay(1000, undefined, {signal: signal.signal});
  }
  assert.equal(report.status, 'complete', 'Replay did not deliver a final result');
} catch (error) {
  report.status = 'failed';
  report.error = signal.signal.aborted ? signal.signal.reason.message : error.message;
  process.exitCode = 1;
} finally {
  async function cleanup(name, action) {
    try { await action(); }
    catch (error) { report.sampleErrors.push({cleanup: name, error: error.message}); }
  }
  page?.close();
  if (contextId) {
    await cleanup('browser context', () => browser.send('Target.disposeBrowserContext', {browserContextId: contextId}));
  } else if (target) await cleanup('tab', async () => {
    const {targetInfo} = await browser.send('Target.getTargetInfo', {targetId: target});
    if (targetInfo.url === 'about:blank' || targetInfo.url === hosted.url) {
      await browser.send('Target.closeTarget', {targetId: target});
    }
  });
  browser?.close();
  if (chrome) await cleanup('desktop Chrome', chrome.close);
  if (reverse) await cleanup('ADB reverse', () => phone('reverse', '--remove', reverse));
  if (forward) await cleanup('ADB forward', () => phone('forward', '--remove', forward));
  if (hosted) {
    hosted.server.closeAllConnections();
    await new Promise(resolve => hosted.server.close(resolve));
    report.requests = hosted.requests;
  }
  await save();
  console.log(`${report.label} ${report.status}. ${report.error ?? `${report.renders.length} native scene renders`}. ${output}`);
  process.removeListener('SIGINT', cancel);
  process.removeListener('SIGTERM', cancel);
}
