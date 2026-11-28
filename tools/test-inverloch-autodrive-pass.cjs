// Deterministic closed-loop drives using the host's planner, sedan dynamics and collision sweeps.
const assert = require("node:assert/strict");
const { existsSync, readFileSync } = require("node:fs");
const path = require("node:path");
const { before, test } = require("node:test");
const { Script } = require("node:vm");

const app = readFileSync(path.join(__dirname, "..", "app.html"), "utf8").replace(/\r\n/g, "\n");
function section(begin, end) {
  const start = app.indexOf(begin), stop = app.indexOf(end, start + begin.length);
  assert.ok(start >= 0 && stop > start, `Missing host section ${begin}`);
  return app.slice(start, stop);
}

// The standalone host also runs on releases predating the shared collision module.
const hasModule = existsSync(path.join(__dirname, "../src/explore/collision.mjs"));
let collision = {};
before(async () => { if (hasModule) collision = await import("../src/explore/collision.mjs"); });
const driver = new Script([
  ...(hasModule ? [section("  function townIndicatorSide(", "  // Amber indicators")] : [
    section("  function invCivicCollision(", "  function invAddDesignedWalls("),
    section("  const townTrafficBodies", "  function townTraffic("),
  ]),
  section("    const CAR = [[2.1", "    // how the ground lies"),
  section("    const autoShape =", "    // start driving to a spot:"),
  section("    const AUTO_V =", "    // what the speed chip adds"),
  `let auto, playerStart;
   const P = T.traffic, contact = true;`,
  section("    if (contact) {\n      // Only live traffic", "    const key = (x, z) =>"),
  `T.invStatic = invCivicCollision((x, z) => [x, z], () => false);
   autoBegin([0, 0, 0], [0, 100, 400], [0, 0], {});
   const advance = dt => {
     const [go, str] = autoStep(dt);
     let v = car.v;
     const K = 1, gc = false, brake = false, boosting = false, teamOn = false,
       slide = false, back = false, VREV = 6.05, SHAPE = CAR, vboost = 210 / 3.6,
       vmax = R.carTop / 3.6;`,
  section("        if (go > 0.05) v +=", "        if (bump > 1.5)"),
  `  return { bump, target: auto.dTgt };
   };
   advance;`
].join("\n"));

const CRUISE = 50 / 3.6, HALF_WIDTH = .98, HALF_LENGTH = 2.22;
const PARKED_WIDTH = .95, PARKED_LENGTH = 2.25;
const GRAZE = .0019066, DEEP = .780184;
const longitudinalExtent = h => HALF_LENGTH * Math.abs(Math.cos(h)) + HALF_WIDTH * Math.abs(Math.sin(h));

function drive(hz, { intrusion = DEEP, centres = [40], seconds = 16, gap = false, closed = false, kerbBarrier = false, npc } = {}) {
  const car = { x: 0, z: 0, y: 0, h: 0, dir: 0, steer: 0, v: CRUISE };
  const trafficCar = npc && { y: 0, ...npc };
  const T = { traffic: { cars: npc ? [trafficCar] : [] } };
  const ground = Object.assign(() => 0, { bed: () => 0 });
  const hops = [], frames = [];
  let time = 0;
  const advance = driver.runInNewContext({
    ...collision,
    T, car, ground, solid: () => false, F: { lim: [-500, 500, -500, 500] },
    bsClamp: (v, lo, hi) => Math.max(lo, Math.min(hi, v)),
    wrap: v => Math.atan2(Math.sin(v), Math.cos(v)),
    performance: { now: () => time * 1000 },
    R: { carTop: 120, carAccel: 5, carTurn: 140 }, C: {}, place: "inv",
    vacant: (x, z, h, length, width) => !T.invStatic.depth(x, z, h, length, width),
    unReset() { hops.push({ time, z: car.z }); },
    ezShow() {}, sit() {}, snd: {}, toast() {}
  });
  const parkedX = HALF_WIDTH + PARKED_WIDTH - intrusion;
  T.invStatic.addTown({ polygons: [], circles: [] }, centres.map(z => ({
    id: [parkedX, z], x: parkedX, z, heading: 0, halfWidth: PARKED_WIDTH, halfLength: PARKED_LENGTH
  })));
  if (gap) T.invStatic.box(-3.1, 50, 0, .2, 180);
  if (closed) T.invStatic.box(0, 40, 0, 100, 2);
  if (kerbBarrier) T.invStatic.box(3.8, 50, 0, .2, 180);
  for (let tick = 0; tick < seconds * hz; tick++) {
    time = tick / hz;
    if (npc) {
      trafficCar.x = npc.x + Math.sin(npc.h) * npc.v * time;
      trafficCar.z = npc.z + Math.cos(npc.h) * npc.v * time;
    }
    const { bump, target } = advance(1 / hz);
    const extent = longitudinalExtent(car.h);
    frames.push({ time, x: car.x, z: car.z, rear: car.z - extent, front: car.z + extent, speed: car.v, target, bump });
    assert.equal(T.invStatic.depth(car.x, car.z, car.h, HALF_LENGTH, HALF_WIDTH), 0, `static overlap at ${time}s`);
    assert.equal(T.traffic.occupied("car", car.x, car.z, car.h, 0), false, `traffic overlap at ${time}s`);
  }
  return { frames, hops };
}

function checkPass(run, lastCentre, halfLength = PARKED_LENGTH) {
  const { frames, hops } = run;
  assert.deepEqual(hops, [], "a driveable pass must not invoke Unstick");
  assert.ok(frames.every(f => f.bump === 0), "movement sweep caught a collision");
  const past = frames.find(f => f.rear > lastCentre + halfLength);
  assert.ok(past, "rear did not clear the last vehicle");
  const resumed = frames.find(f => f.time >= past.time && f.target === 0 && f.speed >= .9 * CRUISE);
  assert.ok(resumed && resumed.time - past.time < 4, "cruise speed must resume after the rear clears");
}

function checkContinuousPass(run, lastCentre, halfLength = PARKED_LENGTH) {
  checkPass(run, lastCentre, halfLength);
  const first = run.frames.find(f => f.target !== 0);
  assert.ok(first, "the driver must command a passing offset");
  const alongside = run.frames.filter(f => f.time >= first.time && f.rear <= lastCentre + halfLength);
  assert.ok(alongside.every(f => Math.sign(f.target) === Math.sign(first.target) && f.speed > 1),
    "the driver should hold the passing line and keep moving until the rear clears");
}

for (const hz of [30, 60]) {
  test(`clear road, grazing and 78 cm intrusions get proportionate responses at ${hz} Hz`, () => {
    const empty = drive(hz, { centres: [] }), clear = drive(hz, { intrusion: -.1 });
    assert.deepEqual(clear.frames, empty.frames, "10 cm of clearance should not change the straight drive");
    assert.ok(clear.frames.every(f => f.target === 0 && f.bump === 0));
    const grazing = drive(hz, { intrusion: GRAZE }), deep = drive(hz);
    for (const run of [grazing, deep]) checkPass(run, 40);
    const excursion = run => Math.max(...run.frames.map(f => Math.abs(f.target)));
    assert.ok(excursion(grazing) > 0 && excursion(grazing) < excursion(deep), "deeper overlap requires more offset");
    const slowest = run => Math.min(...run.frames.map(f => f.speed));
    assert.ok(slowest(grazing) > slowest(deep) + .1, "grazing should require less braking");
    assert.ok(grazing.frames.at(-1).z > deep.frames.at(-1).z, "grazing must cost less travel than a deep pass");
  });

  test(`reachable gap beside a thin barrier at ${hz} Hz`, () => {
    const run = drive(hz, { gap: true });
    checkPass(run, 40);
    assert.ok(run.frames.some(f => f.target > 0), "pass into the gap beside the car");
    assert.ok(run.frames.every(f => f.target < 3.1), "no target across the barrier");
  });

  for (const centres of [[40, 64], [40, 64, 88]]) {
    test(`one continuous pass for ${centres.length} parked cars 24 m apart at ${hz} Hz`, () => {
      checkContinuousPass(drive(hz, { centres }), centres.at(-1));
    });
  }

  test(`stay out until all 14 parked cars in a long row clear at ${hz} Hz`, () => {
    const centres = Array.from({ length: 14 }, (_, i) => 40 + 12 * i);
    checkContinuousPass(drive(hz, { centres, seconds: 19 }), centres.at(-1));
  });

  test(`hold one passing line past a stationary traffic car at ${hz} Hz`, () => {
    const npc = { x: 1.15, z: 40, h: 0, v: 0 };
    checkContinuousPass(drive(hz, { npc, centres: [] }), npc.z, HALF_LENGTH);
  });

  test(`a car pulling away ahead leaves the clear 10 cm gap driveable at ${hz} Hz`, () => {
    const npc = { x: 0, z: 24, h: 0, v: 16 };
    const empty = drive(hz, { npc, centres: [] }), clear = drive(hz, { npc, intrusion: -.1 });
    assert.deepEqual(clear.hops, []);
    assert.ok(empty.frames.every(f => f.target === 0 && f.bump === 0));
    clear.frames.forEach((frame, i) => assert.deepEqual(frame, empty.frames[i], `unexpected response at ${frame.time}s`));
  });

  test(`yield to an oncoming car before using its passing lane at ${hz} Hz`, () => {
    const run = drive(hz, { kerbBarrier: true, npc: { x: -2.6, z: 60, h: Math.PI, v: 9 } });
    checkPass(run, 40);
    const alongside = run.frames.filter(f => f.front > 60 - 9 * f.time - HALF_LENGTH && f.rear < 60 - 9 * f.time + HALF_LENGTH);
    assert.ok(alongside.length > 0, "vehicles must actually meet");
    assert.ok(alongside.every(f => f.x > -DEEP), "keep out of the passing gap until the oncoming car clears");
    assert.ok(run.frames.some(f => f.time > alongside.at(-1).time && f.target >= DEEP), "take the pass once clear");
  });

  test(`sealed lane stops the car before documented forward recovery at ${hz} Hz`, () => {
    const run = drive(hz, { centres: [], closed: true });
    const beforeRecovery = run.frames.filter(f => f.time < (run.hops[0]?.time ?? Infinity));
    assert.ok(beforeRecovery.every(f => f.bump === 0), "stop before hitting the wall");
    assert.ok(beforeRecovery.some(f => Math.abs(f.speed) < .6 && f.front < 39), "must stop short of the closure");
    assert.ok(beforeRecovery.every(f => f.front <= 39 && f.target === 0), "no pass through the sealed lane");
    if (run.hops.length) assert.ok(run.hops[0].z - HALF_LENGTH >= 41, "Unstick must land clear of the wall");
  });
}
