const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const path = require('node:path');
const {test} = require('node:test');
const vm = require('node:vm');

const host = readFileSync(path.join(__dirname, '../app.html'), 'utf8');
const registration = host.slice(host.indexOf('  function invWestJetty('), host.indexOf('  function invWestJettyParts('));

test('the prepared jetty supports the player only when its world becomes active', () => {
  const low = {shore: 3.56}, cancelled = {shore: 4.1}, high = {shore: 3.65};
  const boxes = [], T = {pair: {cur: low}, invStatic: {worldBox(...box) { boxes.push(box); }}};
  const register = vm.runInNewContext(registration + ';invWestJetty', {
    invWestJettyParts(model) {
      return {blockers: [[0, 0, .09, 30]], bearing: 0, deckAt: () => model.shore + .06, stop: {}};
    },
  });
  register(T, {});
  T.fitWestJetty(cancelled);
  T.fitWestJetty(high);
  assert.equal(T.deckAt(0, 0), low.shore + .06);
  T.pair.cur = high;
  assert.equal(T.deckAt(0, 0), high.shore + .06);
  assert.equal(boxes.length, 1);
});
