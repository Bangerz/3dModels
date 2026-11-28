import assert from 'node:assert/strict';
import test from 'node:test';
import { stickChecks } from './stick-checks.mjs';

const { moveForward, hasPair, hasMove, reset } = stickChecks({ move: { width: 108 }, look: { width: 108 } });
const held = { ids: [1, 2], knobs: ['translate(4px, -24px)', 'translate(8px, 0px)'], sticks: [[0.1, 0.6], [0.2, 0]] };
const moveOnly = { ids: [1], knobs: [held.knobs[0], ''], sticks: [held.sticks[0], [0, 0]] };
const released = { ids: [], knobs: ['', ''], sticks: [[0, 0], [0, 0]] };

test('held and released contacts agree with actual game input', () => {
  assert.ok(hasPair(held));
  assert.ok(hasMove(moveOnly));
  assert.ok(reset(released));
});

test('unchanged knobs and contact IDs cannot mask overwritten gameplay input', () => {
  for (const wrongMove of [[0, 0], [0.8, 0.55], [0.1, -0.6]]) {
    const row = { ...held, sticks: [wrongMove, held.sticks[1]] };
    assert.equal(moveForward(row), false);
    assert.equal(hasPair(row), false);
    assert.equal(hasMove({ ...moveOnly, sticks: [wrongMove, [0, 0]] }), false);
  }
  assert.equal(hasPair({ ...held, sticks: [held.sticks[0], [0, 0]] }), false);
  assert.equal(reset({ ...released, sticks: [[0.3, 0], [0, 0]] }), false);
  assert.equal(hasPair({ ...held, sticks: null }), false);
});
