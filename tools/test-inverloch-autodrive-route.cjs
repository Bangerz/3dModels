const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const { test } = require("node:test");
const { runInNewContext } = require("node:vm");

const host = readFileSync(path.join(__dirname, "..", "app.html"), "utf8");
function section(start, end) {
  const a = host.indexOf(start), b = host.indexOf(end, a + start.length);
  assert.ok(a >= 0 && b > a, start);
  return host.slice(a, b);
}
const controller = [
  section("    const autoShape =", "    // start driving to a spot:"),
  section("    const cruiseOn =", "    // G (or the button)"),
  section("    const AUTO_V =", "    // what the speed chip adds")
].join("\n");

function drive(points, place = "inv") {
  const car = { x: points[0][0], z: points[0][1], h: 0, v: 7 };
  const { A, step, hop } = runInNewContext(controller + `
    let auto;
    autoBegin(points.map(p => p[0]), points.map(p => p[1]), Array(points.length - 1).fill(0), {});
    ({ A: auto, step: () => autoStep(1 / 60), hop: () => autoHop(auto) })
  `, {
    points, car, place, net: {}, T: {}, C: {}, CAR: [], snd: {}, performance: { now: () => 0 },
    bsClamp: (x, lo, hi) => Math.max(lo, Math.min(x, hi)),
    wrap: x => Math.atan2(Math.sin(x), Math.cos(x)), townRouteIndicator: () => 0,
    ezShow() {}, sit() {}, unReset() {}, toast() {},
    inside: () => true, fits: () => true, vacant: () => true
  });
  A.lookT = Infinity; // These fixtures drive route geometry on a clear road.
  return { car, A, step, hop, station: () => A.s[A.i] + (A.s[A.i + 1] - A.s[A.i]) * A.t };
}

test("passing on a hairpin keeps the outbound station until the car rounds the turn", () => {
  const f = drive([[0, 0], [0, 26], [-5, 26], [-5, 0]]);
  Object.assign(f.A, { i: 0, t: 16 / 26, dCur: 3.3, dTgt: 3.3 });
  Object.assign(f.car, { x: -3.3, z: 16 });
  for (let i = 0; i < 12; i++) f.step();
  assert.equal(f.A.i, 0);
  assert.equal(f.station(), 16);
  f.car.z += 0.25; f.step();
  assert.equal(f.station(), 16.25);
  // Follow the bend and then the return leg.
  for (let z = 16.5; z <= 26; z += 0.25) { f.car.z = z; f.step(); }
  f.car.h = -Math.PI / 2;
  for (let x = -3.5; x >= -5; x -= 0.25) { f.car.x = x; f.step(); }
  f.car.h = Math.PI;
  for (let z = 25.75; z >= 20; z -= 0.25) { f.car.z = z; f.step(); }
  assert.equal(f.A.i, 2);
  assert.equal(f.station(), 37);
});

test("rounding a corner can gain route distance only while the car moves", () => {
  const f = drive([[0, 0], [0, 10], [-40, 10]]);
  f.A.t = 0.8;
  Object.assign(f.car, { x: -4, z: 8, h: -Math.PI / 2 });
  f.step();
  f.car.x -= 0.2; f.step();
  const at = f.station();
  assert.ok(at > 8 && at < 8.4, at);
  for (let i = 0; i < 10; i++) f.step();
  assert.equal(f.station(), at);
});

test("a closer adjacent leg facing the other way cannot pull the projected station forward", () => {
  const f = drive([[0, 0], [0, 26], [-1, 0]]);
  f.A.t = 16 / 26;
  Object.assign(f.car, { x: -0.38, z: 16 });
  f.step();
  f.car.z += 0.2; f.step();
  assert.ok(Math.abs(f.station() - 16.2) < 1e-8);
});

test("backing up holds the cursor until forward driving passes its previous position", () => {
  const f = drive([[0, 0], [0, 50]]);
  f.A.t = 0.4; f.car.z = 20; f.step();
  f.A.rev = 0.5; f.car.z = 20.1; f.step();
  assert.equal(f.station(), 20);
  f.A.rev = 0; f.car.v = -3; f.car.z = 18; f.step();
  assert.equal(f.station(), 20);
  f.car.v = 3; f.car.z = 19; f.step();
  assert.equal(f.station(), 20);
  f.car.z = 20.25; f.step();
  assert.equal(f.station(), 20.25);
});

test("cruise trimming preserves the cursor in world space and a recovery hop sets it explicitly", () => {
  const f = drive(Array.from({ length: 16 }, (_, i) => [0, 10 * i]));
  Object.assign(f.A, { i: 10, t: 0.3, cruise: true });
  f.car.z = 103; f.step();
  assert.equal(f.A.i, 3);
  assert.equal(f.station(), 33);
  f.car.z += 0.25; f.step();
  assert.equal(f.station(), 33.25);
  assert.ok(f.hop());
  assert.equal(f.car.z, 111.25);
  assert.equal(f.station(), 41.25);
  f.A.lookT = Infinity; f.step();
  assert.equal(f.station(), 41.25);
  f.car.v = 1; f.car.z += 0.1; f.step();
  assert.ok(Math.abs(f.station() - 41.35) < 1e-8);
});
