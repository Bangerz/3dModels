export function stickChecks(centers) {
  const radius = [centers.move.width / 2 - 14, centers.look.width / 2 - 14];

  // The game's joystick maps CSS-pixel offsets to a unit vector and inverts Y.
  // View handlers can change that vector without changing the knob or contact.
  function agrees(row, index) {
    const knob = row?.knobs?.[index];
    const v = row?.sticks?.[index];
    if (typeof knob !== 'string' || !Array.isArray(v) || v.length !== 2 || !v.every(Number.isFinite)) return false;
    if (!knob) return v[0] === 0 && v[1] === 0;
    const offset = [...knob.matchAll(/(-?\d+(?:\.\d+)?)px/g)].map(m => Number(m[1]));
    return offset.length === 2 && radius[index] > 0 && Math.abs(v[0] - offset[0] / radius[index]) < 0.04 &&
      Math.abs(v[1] + offset[1] / radius[index]) < 0.04;
  }

  const moveForward = row => agrees(row, 0) && row.sticks[0][1] > 0.3;
  const hasPair = row => row?.ids.join(',') === '1,2' && moveForward(row) && agrees(row, 1) && row.sticks[1][0] > 0.1;
  const hasMove = row => row?.ids.join(',') === '1' && moveForward(row) && agrees(row, 1) && !row.knobs[1];
  const reset = row => row?.ids.length === 0 && agrees(row, 0) && agrees(row, 1) && row.knobs.every(k => !k);
  return { moveForward, hasPair, hasMove, reset };
}
