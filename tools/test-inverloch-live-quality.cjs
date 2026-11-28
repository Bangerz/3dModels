const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const path = require('node:path');
const {test} = require('node:test');
const vm = require('node:vm');

const host = readFileSync(path.join(__dirname, '../app.html'), 'utf8');
const pairSource = host.slice(host.indexOf('  function townModelPair('), host.indexOf('  function townModelOn('));

async function openAuto({live, slow = false, preset = 'auto', staging, addGuests}) {
  let now = 0, frames = 0, saved = {};
  const T = {on: true}, spinner = {hidden: true}, box = {children: []};
  const models = [], changes = [];
  T.fitMuseumFrontage = native => { native.museumFittedBeforeSwap = native !== T.pair.cur; };
  const environment = {
    BS: {town: T}, navigator: {deviceMemory: 8}, matchMedia: () => ({matches: !staging}),
    invGraphics: {preset, frameTarget: 60}, invGraphicsPresets: ['auto', 'low', 'medium', 'high'],
    localStorage: {getItem: () => null, setItem: (_, text) => { saved = JSON.parse(text); }},
    $: () => spinner, bsNote() {}, console, window: {}, performance: {now: () => now},
    requestAnimationFrame(fn) {
      queueMicrotask(() => { now += slow && frames > 105 ? 33 : 16; frames++; fn(now); });
    },
    setTimeout(fn) { queueMicrotask(fn); },
  };
  T.normanGrade = {
    fit(target) {
      target.fittedWhile = T.pair.cur.quality;
      return {target};
    },
    apply({target}) { target.publishedWhile = T.pair.cur.quality; },
  };
  const lib = {create(node, options) {
    const root = {dataset: {}, style: {}};
    node.children.push(root); node.lastElementChild = root;
    const model = {quality: options.quality, ready: Promise.resolve(), dispose() { this.disposed = true; }};
    model.poses = [];
    model.addParts = () => ({setMatrix(index, matrix) { model.poses[index] = Array.from(matrix); }});
    if (live) model.setQualityInPlace = async target => { changes.push(target); return true; };
    models.push(model);
    return model;
  }};
  if (staging) lib.createStaged = (node, options) => {
    const model = lib.create(node, options);
    model.commitStagedWorld = () => staging === 'accept';
    return model;
  };
  const makePair = vm.runInNewContext(pairSource + ';townModelPair', environment);
  const model = makePair(T, lib, box, {place: 'inv'}, {}, {});
  const guest = addGuests?.(model);
  await model.ready;
  await new Promise(resolve => setImmediate(resolve));
  return {pair: T.pair, spinner, models, changes, saved, guest};
}

test('Auto promotes and rolls back on the same model when the native tiers are compatible', async () => {
  const promoted = await openAuto({live: true});
  assert.deepEqual(promoted.changes, ['medium']);
  assert.equal(promoted.pair.cur, promoted.models[0]);
  assert.equal(promoted.models[0].museumFittedBeforeSwap, undefined);
  assert.equal(promoted.pair.quality, 'medium');
  assert.equal(promoted.saved.q, 'medium');
  assert.equal(promoted.pair.pendingQuality, null);
  assert.equal(promoted.spinner.hidden, true);
  const demoted = await openAuto({live: true, slow: true});
  assert.deepEqual(demoted.changes, ['medium', 'low']);
  assert.equal(demoted.models.length, 1);
  assert.equal(demoted.pair.quality, 'low');
  assert.equal(demoted.saved.slow, true);
});

test('replacement fits the destination grade before publishing its walking surface', async () => {
  const {models: [low, replacement]} = await openAuto({live: false});
  assert.equal(replacement.fittedWhile, low.quality);
  assert.equal(replacement.publishedWhile, replacement.quality);
  assert.equal(low.publishedWhile, undefined);
  const inPlace = await openAuto({live: true});
  assert.equal(inPlace.models[0].fittedWhile, undefined);
});

test('older bundles still swap and a manual Low choice stays fixed', async () => {
  const legacy = await openAuto({live: false});
  assert.deepEqual(legacy.models.map(model => model.quality), ['low', 'medium']);
  assert.equal(legacy.models[0].disposed, true);
  assert.equal(legacy.pair.cur, legacy.models[1]);
  assert.equal(legacy.models[1].museumFittedBeforeSwap, true);
  const manual = await openAuto({live: true, preset: 'low'});
  assert.deepEqual(manual.changes, []);
  assert.equal(manual.models.length, 1);
});

test('staged High publishes distinct guest poses only after accepting the canvas', async () => {
  for (const staging of ['refuse', 'accept']) {
    const {pair, models, guest} = await openAuto({staging, addGuests(model) {
      const handle = model.addParts([]), scratch = new Float64Array(16);
      scratch[12] = 12; handle.setMatrix(0, scratch);
      scratch[12] = 24; handle.setMatrix(1, scratch);
      scratch[12] = 36;
      return handle;
    }});
    const [low, high] = models;
    assert.deepEqual(high.poses.map(m => m[12]), [12, 24]);
    const committed = staging === 'accept';
    assert.equal(pair.cur, committed ? high : low);
    assert.equal((committed ? low : high).disposed, true);
    const update = new Float64Array(16); update[12] = 50;
    guest.setMatrix(0, update);
    assert.equal(pair.cur.poses[0][12], 50);
    assert.equal((committed ? low : high).poses[0][12], 12);
  }
});
