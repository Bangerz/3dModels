import { createHash } from 'node:crypto';

export async function connect(port) {
  const base = `http://127.0.0.1:${port}`;
  async function endpoint(path) {
    const response = await fetch(base + path, { signal: AbortSignal.timeout(8000) });
    if (!response.ok) throw Error(`CDP ${path} returned ${response.status}`);
    return response.json();
  }
  async function socket(address, event = () => {}) {
    const url = new URL(address, base.replace('http:', 'ws:'));
    url.hostname = '127.0.0.1';
    url.port = String(port);
    const ws = new WebSocket(url);
    const pending = new Map();
    let sequence = 0;
    ws.addEventListener('close', () => {
      for (const item of pending.values()) {
        clearTimeout(item.timer);
        item.reject(Error('CDP socket closed'));
      }
      pending.clear();
    });
    ws.addEventListener('message', ({ data }) => {
      const message = JSON.parse(data);
      if (message.method) event(message.method, message.params);
      const item = pending.get(message.id);
      if (!item) return;
      pending.delete(message.id);
      clearTimeout(item.timer);
      if (message.error) item.reject(Error(message.error.message));
      else item.resolve(message.result);
    });
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        ws.close();
        reject(Error('CDP socket connection timed out'));
      }, 8000);
      ws.addEventListener('open', () => {
        clearTimeout(timeout);
        resolve();
      }, { once: true });
      ws.addEventListener('error', () => {
        clearTimeout(timeout);
        reject(Error('Could not open CDP socket'));
      }, { once: true });
    });
    function send(method, params = {}, timeout = 10000) {
      return new Promise((resolve, reject) => {
        if (ws.readyState !== WebSocket.OPEN) return reject(Error('CDP socket closed'));
        const id = ++sequence;
        const timer = setTimeout(() => {
          pending.delete(id);
          reject(Error('CDP timed out: ' + method));
        }, timeout);
        pending.set(id, { resolve, reject, timer });
        ws.send(JSON.stringify({ id, method, params }));
      });
    }
    return { send, close: () => ws.close() };
  }
  const version = await endpoint('/json/version');
  const browser = await socket(version.webSocketDebuggerUrl || '/devtools/browser');
  async function page(targetId) {
    const target = (await endpoint('/json/list')).find(item => item.id === targetId);
    if (target?.type !== 'page' || target.url !== 'about:blank')
      throw Error('Expected the new disposable about:blank page');
    const errors = [], responses = new Map();
    const client = await socket(target.webSocketDebuggerUrl, (method, params) => {
      if (method === 'Runtime.exceptionThrown') {
        const error = params.exceptionDetails;
        errors.push(error.exception?.description || error.text);
      }
      if (method === 'Network.responseReceived') {
        const { type, response: { url, status, fromDiskCache, fromServiceWorker } } = params;
        if (type === 'Document' || /(?:inverloch|moorooka|logan)-model[^/]*\.js|(?:town(?:-v\d+)?|detail)\.json|\/town3d\/logan\/(?:map\.json|roads\.bin)(?:[?#]|$)/i.test(url))
          responses.set(params.requestId, { type, url, status, fromDiskCache, fromServiceWorker });
      }
    });
    async function evaluate(fn, arg) {
      const result = await client.send('Runtime.evaluate', {
        expression: `(${fn.toString()})(${JSON.stringify(arg ?? null)})`,
        returnByValue: true,
        awaitPromise: true,
      });
      if (result.exceptionDetails) {
        const error = result.exceptionDetails;
        throw Error(error.exception?.description || error.text);
      }
      return result.result.value;
    }
    async function installStickReader() {
      // The published page exposes anTownNow(), whose closure holds BS. Keep the probe in
      // the disposable test context and read BS.fly afresh when the game replaces it.
      const group = 'input-playtest-sticks';
      const properties = objectId => client.send('Runtime.getProperties', { objectId, ownProperties: true });
      try {
        const fn = await client.send('Runtime.evaluate', { expression: 'window.anTownNow', objectGroup: group });
        if (fn.result.type !== 'function') return false;
        const details = await properties(fn.result.objectId);
        const scopes = details.internalProperties?.find(p => p.name === '[[Scopes]]')?.value;
        if (!scopes?.objectId) return false;
        const list = await properties(scopes.objectId);
        for (const { value } of list.result) {
          if (!value?.description?.startsWith('Closure')) continue;
          const scope = await properties(value.objectId);
          const host = scope.result.find(p => p.name === 'BS')?.value;
          if (!host?.objectId) continue;
          const reader = await client.send('Runtime.callFunctionOn', {
            objectId: host.objectId, returnByValue: true,
            functionDeclaration: `function() {
              const sample = () => {
                const fly = this.fly;
                return fly?.stick && fly.lookStick
                  ? [[fly.stick.x, fly.stick.y], [fly.lookStick.x, fly.lookStick.y]] : null;
              };
              window.inputPlaytest.readSticks = sample;
              return sample() !== null;
            }`,
          });
          return reader.result.value === true;
        }
        return false;
      } finally {
        await client.send('Runtime.releaseObjectGroup', { objectGroup: group });
      }
    }
    async function assets() {
      return Promise.all([...responses].map(async ([requestId, response]) => {
        try {
          const { body, base64Encoded } = await client.send('Network.getResponseBody', { requestId }, 3000);
          const bytes = Buffer.from(body, base64Encoded ? 'base64' : 'utf8');
          return { ...response, bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex') };
        } catch (error) {
          return { ...response, bodyError: error.message };
        }
      }));
    }
    return { ...client, evaluate, errors, assets, installStickReader };
  }
  return { ...browser, version, page };
}
