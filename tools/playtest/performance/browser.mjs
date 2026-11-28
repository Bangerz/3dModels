import {execFile, spawn} from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {setTimeout as delay} from 'node:timers/promises';
import {promisify} from 'node:util';

const exec = promisify(execFile);

export function device(adb) {
  return async (...args) => (await exec(adb, ['-d', ...args], {
    windowsHide: true, timeout: 8000, maxBuffer: 2 ** 20,
  })).stdout.trim();
}

export async function launchDesktop(executable) {
  const temp = await fs.realpath(os.tmpdir());
  const profile = await fs.mkdtemp(path.join(temp, 'inverloch-playtest-'));
  const chrome = spawn(executable, [`--user-data-dir=${profile}`, '--headless', '--remote-debugging-port=0',
    '--enable-gpu', '--no-first-run', '--no-default-browser-check', '--disable-renderer-backgrounding',
    '--disable-background-timer-throttling', '--disable-backgrounding-occluded-windows',
    ...(process.platform === 'win32' ? ['--use-angle=d3d11', '--force_high_performance_gpu'] : []), 'about:blank'],
  {stdio: 'ignore', windowsHide: true});
  let launchError;
  chrome.on('error', error => { launchError = error; });
  const exited = new Promise(resolve => chrome.once('close', resolve));
  async function close() {
    if (chrome.exitCode === null) chrome.kill();
    await Promise.race([exited, delay(5000, undefined, {ref: false})]);
    if (path.dirname(profile) !== temp || !path.basename(profile).startsWith('inverloch-playtest-')) {
      throw Error('Unexpected Chrome profile path');
    }
    await fs.rm(profile, {recursive: true, force: true, maxRetries: 3});
  }
  try {
    for (let attempt = 0; attempt < 80; attempt++) {
      if (launchError) throw launchError;
      if (chrome.exitCode !== null) throw Error(`Chrome exited during startup (${chrome.exitCode})`);
      const data = await fs.readFile(path.join(profile, 'DevToolsActivePort'), 'utf8').catch(error => {
        if (error.code !== 'ENOENT') throw error;
        return '';
      });
      const port = Number(data.split('\n')[0]);
      if (port > 0) return {port, close};
      await delay(250);
    }
    throw Error('Chrome did not open a local DevTools port');
  } catch (error) {
    await close().catch(() => {});
    throw error;
  }
}

export async function debugJson(port, endpoint) {
  const response = await fetch(`http://127.0.0.1:${port}${endpoint}`, {signal: AbortSignal.timeout(10000)});
  if (!response.ok) throw Error(`DevTools HTTP ${response.status} at ${endpoint}`);
  return response.json();
}

export async function connect(port, address) {
  const url = new URL(address ?? `ws://127.0.0.1:${port}/devtools/browser`);
  url.hostname = '127.0.0.1';
  url.port = String(port);
  const socket = new WebSocket(url);
  const pending = new Map(), errors = [];
  let sequence = 0;
  socket.addEventListener('message', ({data}) => {
    const message = JSON.parse(data);
    const request = pending.get(message.id);
    if (request) {
      pending.delete(message.id);
      clearTimeout(request.timer);
      if (message.error) request.reject(Error(message.error.message));
      else request.resolve(message.result);
    } else if (message.method === 'Runtime.exceptionThrown') {
      const details = message.params.exceptionDetails;
      errors.push(details.exception?.description || details.text);
    }
  });
  socket.addEventListener('close', () => {
    for (const request of pending.values()) {
      clearTimeout(request.timer);
      request.reject(Error('DevTools socket closed'));
    }
    pending.clear();
  });
  try {
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(Error('DevTools connection timed out')), 10000);
      socket.addEventListener('open', () => { clearTimeout(timer); resolve(); }, {once: true});
      socket.addEventListener('error', () => { clearTimeout(timer); reject(Error('DevTools connection failed')); }, {once: true});
    });
  } catch (error) {
    socket.close();
    throw error;
  }
  function send(method, params = {}) {
    if (socket.readyState !== WebSocket.OPEN) throw Error('DevTools socket is unavailable');
    return new Promise((resolve, reject) => {
      const id = ++sequence;
      const timer = setTimeout(() => {
        pending.delete(id);
        reject(Error(`DevTools command timed out: ${method}`));
      }, 15000);
      pending.set(id, {resolve, reject, timer});
      socket.send(JSON.stringify({id, method, params}));
    });
  }
  async function evaluate(fn, args = null) {
    const {result, exceptionDetails} = await send('Runtime.evaluate', {
      expression: `(${fn.toString()})(${JSON.stringify(args)})`, awaitPromise: true, returnByValue: true,
    });
    if (exceptionDetails) throw Error(exceptionDetails.exception?.description || exceptionDetails.text);
    return result.value;
  }
  return {send, evaluate, errors, close: () => socket.close()};
}

export async function emulate(page, version) {
  const width = 426, height = 780;
  await page.send('Emulation.setDeviceMetricsOverride', {
    width, height, screenWidth: width, screenHeight: height, mobile: true, deviceScaleFactor: 3,
    screenOrientation: {type: 'portraitPrimary', angle: 0},
  });
  await page.send('Emulation.setTouchEmulationEnabled', {enabled: true, maxTouchPoints: 5});
  await page.send('Emulation.setTimezoneOverride', {timezoneId: 'Australia/Melbourne'});
  await page.send('Network.setUserAgentOverride', {userAgent:
    `Mozilla/5.0 (Linux; Android 17; Pixel 11 Pro) AppleWebKit/537.36 Chrome/${version} Mobile Safari/537.36`});
}
