import {createHash} from 'node:crypto';
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import {gzipSync} from 'node:zlib';

const threeUrl = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.152.2/three.min.js';
const threeRoute = '/3dModels/_playtest/three.js';
const prefix = '/3dModels/';
const types = {
  '.html': 'text/html; charset=utf-8', '.json': 'application/json', '.js': 'text/javascript',
  '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp',
  '.jpg': 'image/jpeg', '.webmanifest': 'application/manifest+json',
};
export const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');

function replaceOnce(source, anchor, replacement) {
  if (!anchor || source.split(anchor).length !== 2) {
    throw Error(`Benchmark hook needs one matching build anchor (${anchor ?? 'missing native camera'})`);
  }
  return source.replace(anchor, () => replacement);
}

function setPreferences() {
  localStorage.setItem('an3d-inv', JSON.stringify({q: 'medium', ms: 800}));
  localStorage.setItem('an3d-inv-graphics', JSON.stringify({preset: 'medium', frameTarget: 60}));
  localStorage.setItem('an3d-off-reset-1', '1');
  localStorage.setItem('an3d-off', '["players"]');
  localStorage.setItem('an-player-asked', '1');
  localStorage.setItem('an-tut', 'offered');
  let seed = 0x2f67;
  Math.random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

export async function serveSite({site, three, channel = "production", ...options}) {
  const root = await fs.realpath(site);
  if (!['production', 'beta'].includes(channel)) throw Error('Unknown Explore channel');
  const route = channel === 'beta' ? 'beta/inverloch/' : 'inverloch/explore/';
  const hostFile = route + 'index.html';
  const host = await fs.readFile(path.join(root, hostFile));
  const entry = host.toString('utf8').split('\n').find(line => line.includes('lib: "InverlochModel", src: TOWN3D'));
  const script = entry?.match(/src: TOWN3D \+ "(inverloch-model(?:-[a-zA-Z0-9_-]+)?\.js)(\?v=\d+)"/);
  const map = entry?.match(/pre: \["(town(?:-[a-zA-Z0-9_-]+)?\.json)(?:\?[^"]*)?"/);
  if (!script || !map) throw Error('Missing versioned Inverloch renderer or map in the selected host');
  const modelFile = 'town3d/' + script[1];
  const originals = [host, ...await Promise.all([modelFile, 'town3d/' + map[1]].map(file => fs.readFile(path.join(root, file))))];
  const keys = ['host', 'model', 'map'];
  const hashes = Object.fromEntries(keys.map((key, index) => [key, sha256(originals[index])]));
  for (const key of keys) {
    const expected = options[`expect-${key}`]?.toLowerCase();
    if (expected && expected !== hashes[key]) throw Error(`Unexpected ${key} SHA-256: ${hashes[key]}`);
  }
  const threeBytes = three ? await fs.readFile(three) : await fetch(threeUrl, {signal: AbortSignal.timeout(30000)}).then(async response => {
    if (!response.ok) throw Error(`Three.js download failed: HTTP ${response.status}`);
    return Buffer.from(await response.arrayBuffer());
  });
  hashes.three = sha256(threeBytes);
  if (hashes.three !== '218b9f9420af1ee2b773fa066cee0eeb52f7ac76ca2fa11b11b732c1ba0a6e39') {
    throw Error(`Unexpected Three.js 0.152.2 SHA-256: ${hashes.three}`);
  }

  let html = originals[0].toString('utf8').replaceAll(threeUrl, threeRoute)
    .replaceAll('https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.min.js', threeRoute);
  html = replaceOnce(html, '<head>', `<head><script>(${setPreferences})();</script>`);
  html = replaceOnce(html, 'function townModelOn(T) {', 'function townModelOn(T) { window.__playtestHost = BS;');
  html = replaceOnce(html, 'mm.t0 = t0; return mm;', 'mm.__playtestScene = window.__playtestConstructed; mm.t0 = t0; return mm;');
  html = replaceOnce(html, 'const ready = cur.ready.then(() => {',
    'const ready = cur.ready.then(() => { window.__playtestStable = {first, best, direct};');
  html = replaceOnce(html, 'C.enterCar = c =>', `C.playtestPose = (x,z,h,v) => {
    if (!car || veh !== "car") return false;
    Object.assign(car, {x,z,h,dir:h,v,steer:0}); sit(0); return true; }; C.enterCar = c =>`);
  const rawModel = originals[1].toString('utf8');
  // Both the immediate and staged renderers expose the native scene through this public method.
  const camera = /\{ready:([\w$]+),setCamera:\([\w$,]+\)=>([\w$]+)\.setExternalCamera\(/.exec(rawModel);
  const model = replaceOnce(rawModel, camera?.[0],
    camera?.[0].replace(`ready:${camera[1]},`, `ready:(window.__playtestConstructed=${camera[2]},${camera[1]}),`));

  const requests = [], cache = new Map();
  const server = http.createServer(async (request, response) => {
    try {
      const url = new URL(request.url, 'http://127.0.0.1');
      const pathname = decodeURIComponent(url.pathname);
      if (!pathname.startsWith(prefix)) return response.writeHead(404).end();
      if (!['GET', 'HEAD'].includes(request.method)) return response.writeHead(405).end();
      const local = pathname.slice(prefix.length) + (pathname.endsWith('/') ? 'index.html' : '');
      const file = path.resolve(root, local);
      if (!file.startsWith(root + path.sep)) return response.writeHead(403).end();
      if (!cache.has(pathname)) {
        const extension = path.extname(file);
        const gzip = ['.html', '.json', '.js', '.css', '.svg', '.webmanifest'].includes(extension);
        const body = pathname === threeRoute ? threeBytes : local === hostFile ? Buffer.from(html)
          : local === modelFile ? Buffer.from(model) : await fs.readFile(file);
        const bytes = gzip ? gzipSync(body, {level: 6}) : body;
        cache.set(pathname, {bytes, headers: {
          'content-type': types[extension] ?? 'application/octet-stream', 'content-length': bytes.length,
          ...(gzip ? {'content-encoding': 'gzip'} : {}), 'cache-control': 'public,max-age=600',
          'content-security-policy': "default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; style-src 'self' 'unsafe-inline'; connect-src 'self' blob: data:",
        }});
      }
      const {bytes, headers} = cache.get(pathname);
      requests.push({path: local + url.search, status: 200, method: request.method, bytes: bytes.length});
      response.writeHead(200, headers).end(request.method === 'HEAD' ? undefined : bytes);
    } catch {
      requests.push({path: request.url, status: 404, method: request.method});
      response.writeHead(404).end();
    }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  const port = server.address().port;
  return {server, port, url: `http://127.0.0.1:${port}${prefix}${route}`, hashes, requests,
    expectedModelRequest: modelFile + script[2]};
}
