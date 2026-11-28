import assert from 'node:assert/strict';
import test from 'node:test';
import {summarize} from './metrics.mjs';

test('compositor coverage uses device time even when the host clock differs or thermal reads fail', () => {
  const startUtcMs = 1_800_000_000_000;
  const snapshot = {deviceEpochMs: startUtcMs + 10_000, periodNs: 16_666_667, presentNs: [1e9, 2e9, 3e9]};
  const report = {timing: {startUtcMs}, end: 20_000, progress: [{metres: 0}], renders: [], rafs: [], plan: [],
    presentation: [snapshot, {...snapshot, deviceEpochMs: startUtcMs + 25_000}]};
  for (const offset of [30_000, -30_000, null]) {
    const thermal = offset === null ? [] : [{deviceEpochMs: startUtcMs, hostEpochMs: startUtcMs + offset,
      sensors: {}, systemStatus: 0}];
    assert.deepEqual(summarize({...report, thermal}).compositorWindows.map(row => row.approximateElapsedSeconds), [9]);
  }
});

test('repeated setup history is excluded and partially overlapping snapshots contribute only new intervals', () => {
  const startUtcMs = 100_000;
  const captures = [[-1000, [1, 2, 3]], [12_000, [1, 2, 3]], [24_000, [2, 3, 4]],
    [36_000, [3, 4, 5, 6]], [48_000, [3, 4, 5, 6]]];
  const presentation = captures.map(([dt, seconds]) => ({deviceEpochMs: startUtcMs + dt,
    periodNs: 1e9 / 60, presentNs: seconds.map(s => s * 1e9)}));
  const stats = summarize({timing: {startUtcMs}, end: 50_000, progress: [{metres: 0}], renders: [], rafs: [],
    plan: [], thermal: [], presentation});
  assert.deepEqual(stats.compositorWindows.map(w => [w.approximateElapsedSeconds, w.seconds, w.fps]), [[35.5, 1, 1]]);
});
