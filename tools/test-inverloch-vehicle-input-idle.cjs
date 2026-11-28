const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const path = require('node:path');
const {test} = require('node:test');
const vm = require('node:vm');

for (const page of ['app.html', 'beta/app.html']) {
  test(page + ' defers Auto for held movement and ignores unrelated keys', async () => {
    const html = readFileSync(path.join(__dirname, '..', page), 'utf8');
    const source = html.slice(html.indexOf('  function townModelPair('), html.indexOf('  function townModelOn('));
    const T = {}, fly = {keys: new Set()}, timers = [];
    let now = 0, beforeQualityCommit;
    const env = {
      BS: {town: T, fly}, navigator: {}, matchMedia: () => ({matches: true}),
      invGraphics: {preset: 'low'}, invGraphicsPresets: ['auto', 'low'], localStorage: {getItem() {}},
      $: () => ({}), performance: {now: () => now}, setTimeout: fn => timers.push(fn),
    };
    const pair = vm.runInNewContext(source + ';townModelPair', env);
    pair(T, {create(_node, opts) {
      beforeQualityCommit = opts.beforeQualityCommit;
      return {ready: Promise.resolve()};
    }}, {children: []}, {place: 'inv'}, {}, {});
    const advance = async () => {
      assert.ok(timers.length, 'input is still being polled');
      now += 100;
      timers.shift()();
      await new Promise(resolve => setImmediate(resolve));
    };
    async function holdUntilReleased(press) {
      press(true);
      let settled = false;
      const waiting = beforeQualityCommit().then(() => { settled = true; });
      for (let i = 0; i < 5; i++) await advance();
      assert.equal(settled, false);
      press(false);
      for (let i = 0; i < 3; i++) await advance();
      assert.equal(settled, false, 'brief gaps between movements remain protected');
      await advance();
      await waiting;
      assert.equal(timers.length, 0);
    }
    for (const field of ['boost', 'hand', 'jumpBtn', 'sprint']) {
      await holdUntilReleased(on => { fly[field] = on; });
    }
    for (const code of ['ShiftLeft', 'ShiftRight']) {
      await holdUntilReleased(on => on ? fly.keys.add(code) : fly.keys.delete(code));
    }
    // Use the same passenger checks the vehicle controller attaches to the active town.
    const start = html.indexOf('    const boostPressed =');
    const end = html.indexOf('    const usePower =', start);
    const passenger = {C: {}, F: fly, pwHeld: false, powerTo: () => ({id: 'driver'})};
    vm.runInNewContext(html.slice(start, end), passenger);
    T.car = passenger.C;
    await holdUntilReleased(on => { passenger.pwHeld = on; });
    await holdUntilReleased(on => on ? fly.keys.add('KeyB') : fly.keys.delete('KeyB'));
    passenger.powerTo = () => null;
    fly.keys = new Set(['Enter', 'Tab', 'KeyB', 'KeyX']);
    await beforeQualityCommit();
    assert.equal(timers.length, 0);
  });
}
for (const page of ['app.html', 'beta/app.html']) {
  test(page + ' rechecks legacy controls after the FPS probe', async () => {
    const html = readFileSync(path.join(__dirname, '..', page), 'utf8');
    const source = html.slice(html.indexOf('  function townModelPair('), html.indexOf('  function townModelOn('));
    for (const scenario of ['idle', 'held', 'leave']) {
      const T = {on: true}, fly = {keys: new Set()}, builds = [];
      let now = 0, frames = 0, releaseAfter = Infinity, releasedAt;
      const step = (ms, callback) => queueMicrotask(() => {
        now += ms;
        if (fly.keys.size && now >= releaseAfter) { fly.keys.clear(); releasedAt = now; }
        callback(now);
      });
      const env = {
        BS: {town: T, fly}, navigator: {}, matchMedia: () => ({matches: true}), window: {},
        invGraphics: {preset: 'auto'}, invGraphicsPresets: ['auto', 'low', 'medium'],
        localStorage: {getItem() {}, setItem() {}}, $: () => ({}), bsNote() {},
        performance: {now: () => now}, setTimeout: (fn, ms) => step(ms, fn),
        requestAnimationFrame(fn) {
          step(16, () => {
            if (++frames === 30) {
              if (scenario === 'held') { fly.keys.add('KeyW'); releaseAfter = now + 2400; }
              if (scenario === 'leave') env.BS.town = null;
            }
            fn(now);
          });
        },
      };
      const pair = vm.runInNewContext(source + ';townModelPair', env);
      const model = pair(T, {create(_node, opts) {
        builds.push({quality: opts.quality, busy: fly.keys.size > 0, at: now});
        return {ready: Promise.resolve(), dispose() {}};
      }}, {children: []}, {place: 'inv'}, {}, {});
      await model.ready;
      await new Promise(resolve => setImmediate(resolve));
      if (scenario === 'leave') {
        assert.deepEqual(builds.map(b => b.quality), ['low']);
        continue;
      }
      assert.deepEqual(builds.map(b => b.quality), ['low', 'medium']);
      assert.equal(builds[1].busy, false);
      if (scenario === 'held') assert.ok(builds[1].at - releasedAt >= 300, 'release grace expired before creating the fallback renderer');
    }
  });
}
