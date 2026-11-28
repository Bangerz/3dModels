const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const path = require('node:path');
const {test} = require('node:test');
const vm = require('node:vm');

for (const page of ['app.html', 'beta/app.html']) {
  test(page + ' defers the Auto commit during held pigeon Flap and Dive', async () => {
    const html = readFileSync(path.join(__dirname, '..', page), 'utf8');
    const source = html.slice(html.indexOf('  function townModelPair('), html.indexOf('  function townModelOn('));
    const T = {}, fly = {}, timers = [];
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
    for (const button of ['boost', 'hand']) {
      fly[button] = true;
      let settled = false;
      const waiting = beforeQualityCommit().then(() => { settled = true; });
      for (let i = 0; i < 5; i++) await advance();
      assert.equal(settled, false);
      fly[button] = false;
      for (let i = 0; i < 3; i++) await advance();
      assert.equal(settled, false, 'brief gaps between movements remain protected');
      await advance();
      await waiting;
      assert.equal(timers.length, 0);
    }
  });
}
