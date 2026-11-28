import fs from 'node:fs/promises';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { setTimeout as pause } from 'node:timers/promises';
import { connect } from './cdp.mjs';
import { observe } from './observe.mjs';
import { stickChecks } from './stick-checks.mjs';

const help = `Usage: node tools/playtest/input/run.mjs --mode auto|norman|gps|sticks --url URL --out FILE [options]
  --port 9222                Local Chrome/ADB CDP port
  --emulate                  Desktop Chrome, 411 × 758 CSS px, DPR 2.625, coarse touch
  --expect-stamp STAMP       Require the supplied Explore page's an-commit value
  --destination SUBSTRING    GPS suggestion to select (mode gps only)
  --after-release            In Auto, expect the upgrade after both controls are released
  --hold-ms MS               Override the mode's bounded hold (1000–90000 ms)
  --help                     Show usage
`;
const { values: options } = parseArgs({ options: {
  mode: { type: 'string' }, url: { type: 'string' }, out: { type: 'string' }, port: { type: 'string', default: '9222' },
  emulate: { type: 'boolean' }, 'expect-stamp': { type: 'string' }, destination: { type: 'string' },
  'after-release': { type: 'boolean' }, 'hold-ms': { type: 'string' }, help: { type: 'boolean' },
} });
if (options.help) {
  console.log(help);
  process.exit(0);
}
const { mode, emulate, out } = options;
if (!['auto', 'norman', 'gps', 'sticks'].includes(mode) || !options.url || !out) throw Error(help);
const afterRelease = !!options['after-release'];
if (afterRelease && mode !== 'auto') throw Error('--after-release requires Auto');
const url = new URL(options.url);
if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.hash)
  throw Error('Pass a canonical HTTP(S) Explore URL without credentials or a fragment');
const town = url.pathname.split('/').findLast(segment => ['inverloch', 'moorooka', 'logan'].includes(segment));
if (['auto', 'norman'].includes(mode) && town !== 'inverloch') throw Error('Auto and Norman fixtures use Inverloch');
const destinations = { inverloch: 'Tennis Club & Oval', moorooka: 'Yeronga Park Caf', logan: 'The plane' };
const destination = options.destination || destinations[town];
if (options.destination && mode !== 'gps') throw Error('--destination requires --mode gps');
if (mode === 'gps' && !destination) throw Error('Supply --destination for this URL');
const port = Number(options.port);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw Error('Invalid CDP port');
const defaultHold = { auto: 23000, norman: 10500, gps: town === 'inverloch' ? 31000 : 5000, sticks: 30000 };
const holdMs = Number(options['hold-ms'] ?? defaultHold[mode]);
if (!Number.isInteger(holdMs) || holdMs < 1000 || holdMs > 90000) throw Error('Invalid hold duration');

await fs.mkdir(path.dirname(path.resolve(out)), { recursive: true });
const output = await fs.open(out, 'wx');
const report = { started: new Date().toISOString(), mode, url: url.href, emulate: !!emulate, holdMs, afterRelease,
  expectedStamp: options['expect-stamp'], destination: mode === 'gps' ? destination : undefined, dispatch: [] };
class Inconclusive extends Error {}
const requireFixture = (ok, message) => {
  if (!ok) throw new Inconclusive(message);
};
let browser, context, target, page, inContact = false;
const mark = name => page.evaluate(name => window.inputPlaytest.mark(name), name);
const detailAsset = (row, name) => new RegExp(`/detail-${name}(?:-lo)?\\.webp(?:[?#]|$)`, 'i').test(row.asset);

async function waitFor(fn, duration, interval = 120) {
  const deadline = performance.now() + duration;
  do {
    const value = await fn();
    if (value) return value;
    await pause(interval);
  } while (performance.now() < deadline);
  return null;
}

function timing(data, start, end) {
  if (!(end > start)) return null;
  const frames = data.frames.slice(1).flatMap((frame, i) => {
    const before = data.frames[i];
    return before.at < end && frame.at > start ? [{ start: before.at, end: frame.at,
      wallMs: frame.at - before.at, displayMs: frame.displayAt - before.displayAt }] : [];
  });
  const moves = data.touches.filter(row => row.type === 'touchmove');
  const dispatchedInWindow = moves.filter(row => row.eventAt >= start && row.eventAt <= end);
  const receivedInWindow = moves.filter(row => row.at >= start && row.at <= end);
  const touchGaps = {};
  for (const stick of ['move', 'look']) {
    const rows = moves.filter(row => row.target === stick);
    touchGaps[stick] = rows.slice(1).reduce((max, row, i) => {
      const before = rows[i].at;
      const gapMs = row.at - before;
      return before < end && row.at > start && (!max || gapMs > max.gapMs)
        ? { start: before, end: row.at, gapMs } : max;
    }, null);
  }
  const overlap = row => row.at < end && row.at + row.duration > start;
  return { start, end, frameGaps: frames.length,
    maxCallbackGap: frames.reduce((max, row) => !max || row.wallMs > max.wallMs ? row : max, null),
    touchMovesReceived: receivedInWindow.length, touchMovesTimestamped: dispatchedInWindow.length, touchGaps,
    maxEventToCaptureMs: dispatchedInWindow.length ? Math.max(...dispatchedInWindow.map(row => row.at - row.eventAt)) : null,
    maxCaptureToBubbleMs: receivedInWindow.some(row => row.after != null)
      ? Math.max(...receivedInWindow.filter(row => row.after != null).map(row => row.after - row.at)) : null,
    longTasks: data.longTasks.filter(overlap), longFrames: data.longFrames.filter(overlap),
  };
}

function assess(data) {
  const { marks, models, buffers, terrain, touches, visibility } = data;
  const { moveForward, hasPair, hasMove, reset } = stickChecks(report.ready.centers);
  const start = marks['pair-deflected']?.at;
  const end = marks['hold-end']?.at;
  const selected = marks['gps-selected'];
  const active = marks['gps-active'];
  const reasons = [];
  const failed = (condition, message) => { if (!condition) reasons.push(message); };
  failed(touches.length > 0 && touches.every(row => row.trusted && row.type !== 'touchcancel'),
    'Missing, untrusted or canceled touch events');
  failed(!visibility.some(row => row.state !== 'visible' && row.at >= report.ready.at), 'Test page lost visibility');
  failed(report.pageErrors.length === 0, 'Page exception during run');
  if (mode === 'sticks') {
    for (const pass of ['initial', 'after-idle']) {
      for (const event of ['right-view-down', 'right-view-move', 'left-view-down', 'left-view-move',
        'look-down', 'look-move', 'simultaneous-view']) {
        const row = marks[`${pass}/${event}`];
        failed(row?.ids.join(',') === '1,2' && moveForward(row),
          `${pass}/${event}: expected both IDs and live forward input matching the Move knob`);
      }
      for (const event of ['move-only', 'right-view-up', 'left-view-up', 'look-up']) {
        failed(hasMove(marks[`${pass}/${event}`]), `${pass}/${event}: Move should be the only held stick`);
      }
      for (const event of ['before-simultaneous', 'released']) {
        failed(reset(marks[`${pass}/${event}`]), `${pass}/${event}: the sticks did not reset`);
      }
      failed(hasPair(marks[`${pass}/look-move`]), `${pass}: Look did not deflect independently`);
    }
    return { reasons };
  }
  const heldTouches = touches.filter(row => row.at >= start && row.at <= end);
  const heldFrames = data.frames.filter(row => row.at >= start && row.at <= end);
  failed(hasPair(marks['pair-deflected']) && hasPair(marks['hold-end']), 'The pair was not deflected at the hold checkpoints');
  failed(heldTouches.length >= 4 && heldTouches.every(row => row.ids.join(',') === '1,2'),
    'Both touch IDs did not persist across the hold');
  failed(heldFrames.length > 0 && heldFrames.every(hasPair), 'A sampled callback showed a released or centered stick during the hold');
  failed(hasMove(marks['look-up']), 'Lifting Look did not leave Move held');
  failed(reset(marks.released), 'The pair did not reset when released');
  const summary = { reasons, hold: timing(data, start, end) };
  if (mode === 'auto') {
    const queued = models.find(row => row.cur === 1 && (row.next === 2 || row.pendingQuality === 'medium'));
    const activeModel = models.find(row => row.at >= queued?.at && !row.next && !row.pendingQuality &&
      (row.cur === 2 || (row.cur === 1 && row.quality === 'medium')));
    const save = activeModel?.savedQuality ? JSON.parse(activeModel.savedQuality) : null;
    const oldBuffer = data.frames.findLast(row => row.cur === 1 && row.buffer && row.at < queued?.at)?.buffer;
    const newBuffer = activeModel?.buffer;
    summary.transition = { queued, activeModel, oldBuffer, newBuffer,
      path: activeModel ? (activeModel.cur === 1 ? 'in-place' : 'replacement') : null,
      activeBufferChanged: !!oldBuffer && !!newBuffer && oldBuffer.join(',') !== newBuffer.join(','),
      bufferChangesDuringHold: buffers.filter(row => row.at >= start && row.at <= end) };
    if (afterRelease) {
      const lift = touches.find(row => row.type === 'touchend' && row.at >= end && row.ids.length === 0);
      summary.gate = !!activeModel && !!lift && save?.q === 'medium';
      if (summary.gate) {
        failed(activeModel.at >= lift.at && heldFrames.every(row => row.cur === 1 && row.quality === 'low'),
          'Auto handed off before both fingers were lifted');
        failed(summary.transition.activeBufferChanged, 'Medium did not change the real drawing buffer');
        summary.transition.afterLastReleaseMs = activeModel.at - lift.at;
      }
    } else {
      summary.gate = queued?.at >= start && activeModel?.at <= end && save?.q === 'medium';
    }
    if (summary.gate && !afterRelease) {
      summary.transition.timing = {
        before: timing(data, start, queued.at),
        building: timing(data, queued.at, activeModel.at),
        handoff: timing(data, activeModel.at - 600, activeModel.at + 600),
        after: timing(data, activeModel.at, end),
      };
    }
    const rollback = models.find(row => activeModel && row.at > activeModel.at && row.at <= end &&
      (row.cur !== activeModel.cur || row.quality === 'low'));
    if (rollback) summary.transition.rollback = rollback;
  }
  if (mode === 'norman') {
    const placement = marks['norman-placement'];
    const rows = terrain.filter(row => detailAsset(row, 'norman'));
    const upload = rows.find(row => row.phase === 'upload' && row.at >= placement?.at && row.end <= end);
    const phases = rows.filter(row => row.job === upload?.job);
    summary.terrain = { placement, rows, cameraAfter: marks['norman-camera']?.camera };
    summary.gate = !!upload && phases.map(row => row.phase).join(',') === 'request,reply,upload' &&
      phases.every(row => row.at >= placement.at && row.ids.join(',') === '1,2') &&
      !phases.some(row => row.error);
    if (summary.gate) {
      summary.terrain.workerElapsedMs = phases[1].at - phases[0].at;
      summary.terrain.uploadCallMs = upload.end - upload.at;
      summary.terrain.timing = {
        before: timing(data, start, placement.at - 100),
        placementAndStreaming: timing(data, placement.at - 100, Math.min(upload.end + 600, end)),
        upload: timing(data, upload.at - 100, upload.end + 100),
        after: timing(data, upload.end + 600, end),
      };
    }
  }
  if (mode === 'gps') {
    summary.gate = !!selected && !!active && active.at <= end && data.route.points.length >= 4;
    summary.route = { label: data.route.label, metres: data.route.metres, points: data.route.points.length / 2,
      atActivation: data.routeAtActivation,
      activationMs: summary.gate ? active.at - selected.at : null, continuedHoldMs: selected ? end - selected.at : null };
    if (summary.gate) {
      failed(hasPair(selected) && hasPair(active), 'The pair was not deflected at route selection and activation');
      summary.route.timing = timing(data, selected.at - 400, active.at + 400);
      summary.route.before = timing(data, selected.at - 1100, selected.at - 100);
    }
    failed(hasPair(marks['initial-pair']) && hasMove(marks['initial-look-up']) && reset(marks['initial-released']),
      'The initial independent release check failed');
    failed(hasPair(marks['fresh-pair']) && reset(marks['fresh-released']), 'A fresh pair after GPS failed');
  }
  return summary;
}

try {
  browser = await connect(port);
  report.browser = { product: browser.version.Browser, userAgent: browser.version['User-Agent'] };
  context = (await browser.send('Target.createBrowserContext', { disposeOnDetach: true })).browserContextId;
  target = (await browser.send('Target.createTarget', { url: 'about:blank', browserContextId: context })).targetId;
  page = await browser.page(target);
  await page.send('Page.enable');
  await page.send('Runtime.enable');
  await page.send('Network.enable', { maxTotalBufferSize: 50000000, maxResourceBufferSize: 12000000 });
  if (emulate) {
    await page.send('Emulation.setDeviceMetricsOverride', { mobile: true, width: 411, height: 758, deviceScaleFactor: 2.625 });
    await page.send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
  }
  await page.send('Page.bringToFront');
  await page.send('Page.addScriptToEvaluateOnNewDocument', {
    source: `(${observe.toString()})(${JSON.stringify({ url: url.href, mode, destination })})`,
  });
  const navigation = await page.send('Page.navigate', { url: url.href }, 20000);
  requireFixture(!navigation.errorText, navigation.errorText);
  const ready = await waitFor(() => page.evaluate(() => window.inputPlaytest?.ready()).catch(() => null), 90000);
  requireFixture(ready, 'Walking view and both sticks never became ready at the supplied canonical URL');
  report.ready = ready;
  console.log('Ready', ready.stamp, ready.preset, 'model', ready.cur, 'buffer', ready.buffer);
  requireFixture(!options['expect-stamp'] || ready.stamp === options['expect-stamp'], 'Unexpected Explore stamp');
  requireFixture(await page.installStickReader(), 'The live Move and Look input vectors were unavailable');
  const point = (name, id, x = 0, y = 0) => ({ id, x: ready.centers[name].x + x, y: ready.centers[name].y + y });
  const move = point('move', 1, mode === 'gps' ? 4 : 3, -24);
  const right = point('look', 2, mode === 'gps' ? 16 : 8, mode === 'gps' ? 7 : 1);
  async function send(type, touchPoints) {
    inContact ||= touchPoints.length > 0;
    const start = performance.now();
    const entry = { type, touchPoints, nodeAt: start };
    report.dispatch.push(entry);
    try {
      await page.send('Input.dispatchTouchEvent', { type, touchPoints }, 8000);
      if (type === 'touchEnd' && touchPoints.length === 0) inContact = false;
    } catch (error) {
      entry.error = error.message;
      throw error;
    } finally {
      entry.ackMs = performance.now() - start;
    }
  }
  async function deflect(points, expected = points) {
    // Chrome can acknowledge a move before delivering the coalesced DOM event.
    const cursor = await page.evaluate(() => window.inputPlaytest.touches.length);
    await send('touchMove', points);
    const delivered = await waitFor(() => page.evaluate(({ cursor, expected }) => {
      const moved = window.inputPlaytest.touches.slice(cursor)
        .filter(row => row.type === 'touchmove' && row.after != null)
        .flatMap(row => row.changed);
      return expected.every(p => moved.some(t => t.id === p.id &&
        Math.abs(t.x - p.x) < 2 && Math.abs(t.y - p.y) < 2));
    }, { cursor, expected }), 4000, 60);
    if (!delivered) throw Error('Chrome did not deliver the expected touchmove before the checkpoint');
  }
  async function begin(label = 'pair-deflected') {
    await send('touchStart', [point('move', 1)]);
    await send('touchStart', [point('move', 1), point('look', 2)]);
    await deflect([move, right]);
    return mark(label);
  }
  async function liftSecond(second) {
    try { await send('touchEnd', [second]); }
    catch { await send('touchMove', [move]); }
    await pause(120);
  }
  async function release(name) {
    await send('touchEnd', []);
    await pause(120);
    await mark(name);
  }

  if (mode === 'sticks') {
    const view = await page.evaluate(() => [innerWidth, innerHeight]);
    for (const pass of ['initial', 'after-idle']) {
      if (pass === 'after-idle') await pause(holdMs);
      await send('touchStart', [point('move', 1)]);
      await deflect([move]);
      await mark(pass + '/move-only');
      const tests = [
        ['right-view', { id: 2, x: view[0] * 0.7, y: view[1] * 0.35 }],
        ['left-view', { id: 2, x: view[0] * 0.3, y: view[1] * 0.3 }],
        ['look', point('look', 2)],
      ];
      for (const [name, second] of tests) {
        await send('touchStart', [move, second]);
        await mark(`${pass}/${name}-down`);
        const shifted = { ...second, x: second.x + 20, y: second.y + 8 };
        await deflect([move, shifted], [shifted]);
        await mark(`${pass}/${name}-move`);
        await liftSecond(shifted);
        await mark(`${pass}/${name}-up`);
      }
      await release(pass + '/before-simultaneous');
      const viewPoint = tests[0][1];
      await send('touchStart', [point('move', 1), viewPoint]);
      await deflect([move, { ...viewPoint, x: viewPoint.x - 20 }]);
      await mark(pass + '/simultaneous-view');
      await release(pass + '/released');
    }
  } else {
    if (mode === 'auto') {
      requireFixture(ready.preset === 'auto' && ready.cur === 1 && !ready.next && !ready.initialStoredQuality,
        'Fresh Auto Low was unavailable before touch began');
    }
    if (mode === 'norman') {
      requireFixture(ready.preset === 'medium' && ready.cur === 1 && !ready.next, 'Fixed Medium did not open');
      await pause(4700);
      report.settled = await mark('town-settled');
      const terrain = await page.evaluate(() => window.inputPlaytest.terrain);
      requireFixture(terrain.some(row => detailAsset(row, 'town') && row.phase === 'upload'),
        'Town detail upload was not observed before moving to Norman Road');
      requireFixture(!terrain.some(row => detailAsset(row, 'norman')), 'Norman detail had already been requested');
    }
    if (mode === 'gps') {
      const graph = await waitFor(() => page.evaluate(() => window.anTownNow?.()?.gps?.netInfo?.()), 20000, 250);
      requireFixture(graph, 'GPS graph did not initialize');
      await page.evaluate(() => {
        navigator.wakeLock?.request('screen').then(lock => { window.inputPlaytest.wake = !lock.released; })
          .catch(error => { window.inputPlaytest.wakeError = String(error); });
      });
      await begin('initial-pair');
      await liftSecond(right);
      await mark('initial-look-up');
      await release('initial-released');
    }
    await begin();
    if (mode === 'gps') {
      report.routeChoice = await page.evaluate(() => window.inputPlaytest.openRoute());
      requireFixture(report.routeChoice.choice, 'First GPS route or requested destination unavailable');
    }
    const start = performance.now();
    let step = 0, positioned = false;
    while (performance.now() - start < holdMs) {
      const swing = ++step % 2 ? 1 : -1;
      await send('touchMove', [{ ...move, x: move.x + swing }, { ...right, y: right.y + swing }]);
      if (mode === 'norman' && !positioned && performance.now() - start >= 2700) {
        await page.evaluate(() => {
          window.inputPlaytest.mark('norman-placement');
          window.anTownNow().standAt(-1580.5, 388.1, -0.47, -0.14);
        });
        positioned = true;
      }
      await pause(mode === 'gps' ? 100 : 75);
    }
    await mark('hold-end');
    if (positioned) await mark('norman-camera');
    await liftSecond(right);
    await mark('look-up');
    await release('released');
    if (afterRelease) {
      await waitFor(() => page.evaluate(() => window.anTownNow?.()?.pair?.quality === 'medium'), 15000);
      await mark('after-release-observed');
    }
    if (mode === 'gps') {
      await begin('fresh-pair');
      await release('fresh-released');
    }
  }
} catch (error) {
  report.status = error instanceof Inconclusive ? 'inconclusive' : 'error';
  report.error = error.message;
} finally {
  if (inContact && page) {
    await page.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }, 3000)
      .catch(error => { report.releaseError = error.message; });
  }
  if (page) {
    report.data = await page.evaluate(() => window.inputPlaytest?.result()).catch(error => ({ collectionError: error.message }));
    report.environment = await page.evaluate(async () => ({
      url: location.href, viewport: [innerWidth, innerHeight], dpr: devicePixelRatio,
      coarse: matchMedia('(pointer: coarse)').matches, touchPoints: navigator.maxTouchPoints,
      memory: navigator.deviceMemory, saveData: navigator.connection?.saveData, userAgent: navigator.userAgent,
      device: await navigator.userAgentData?.getHighEntropyValues(['model', 'platformVersion', 'fullVersionList']),
    })).catch(error => ({ collectionError: error.message }));
    report.assets = await page.assets();
    report.pageErrors = page.errors;
    page.close();
  }
  if (target) await browser.send('Target.closeTarget', { targetId: target }).catch(() => {});
  if (context) {
    await browser.send('Target.disposeBrowserContext', { browserContextId: context })
      .catch(error => { report.cleanupError = error.message; });
  }
  browser?.close();
  if (!report.status) {
    try {
      report.summary = assess(report.data);
      report.status = report.summary.gate === false ? 'inconclusive' : report.summary.reasons.length ? 'failed' : 'passed';
    } catch (error) {
      report.status = 'error';
      report.error = error.message;
    }
  }
  if (report.cleanupError && report.status === 'passed') report.status = 'error';
  report.finished = new Date().toISOString();
  await output.writeFile(JSON.stringify(report, null, 2) + '\n');
  await output.close();
  console.log(report.status.toUpperCase(), path.resolve(out), report.error ?? report.cleanupError ?? '');
  process.exitCode = { passed: 0, failed: 1, error: 1, inconclusive: 2 }[report.status];
}
