// Deterministic closed-loop drives using the host's planner, vehicle dynamics and collision sweeps.
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
  section("    const autoEnd = why =>", "    // the spot it is driving to"),
  section("    let net = null;", "    // the shortest way through them"),
  section("    const cruise = turn =>", "    // G (or the button)"),
  section("    const autoShape =", "    // start driving to a spot:"),
  section("    const AUTO_V =", "    // what the speed chip adds"),
  `let auto, playerStart;
   const P = T.traffic, contact = true;`,
  section("    if (contact) {\n      // Only live traffic", "    const key = (x, z) =>"),
  `T.invStatic = invCivicCollision((x, z) => [x, z], () => false);
   if (streetEnd != null) {
     if (!cruise(0)) throw Error("Drive for me could not start on the fixture street");
   } else autoBegin([0, 0, 250*bend], [0, bend ? 44 : 100, bend ? 294 : routeLength], [0, 0], { hoon });
   let charge = 1, spent = false;
   const advance = dt => {
     const route = auto;
     if (!route) return null;
     const [thr, str, wantsBoost] = autoStep(dt);
     let v = car.v;
     const boost = charged && wantsBoost, brake = false, mega = false, bSecs = 4, bBack = 10;`,
  section("        const boosting = boost && !brake", "        // (the golden car has its own boost"),
  section("        if (boosting) { charge =", "        const K = (car.gold"),
  `   const K = car.bus ? .7 : 1, gc = false,
       slide = false, VREV = 6.05, SHAPE = car.bus ? BUS : CAR, vboost = 210 / 3.6,
       vmax = R.carTop / 3.6 * K;`,
  section("        if (go > 0.05) v +=", "        if (bump > 1.5)"),
  `  return { bump, target: route.dTgt, routeEnd: route.cz.at(-1) };
   };
   advance;`
].join("\n"));

const CRUISE = 50 / 3.6, HALF_WIDTH = .98, HALF_LENGTH = 2.22;
const PARKED_WIDTH = .95, PARKED_LENGTH = 2.25;
const GRAZE = .0019066, DEEP = .780184;

function drive(hz, { intrusion = DEEP, centres = [40], seconds = 16, gap = false, closed = false, kerbBarrier = false, npc, traffic = npc ? [npc] : [], bus = false, hoon = false, roadWidth, streetEnd, parallelWall = false, bend = 0, smallBarrier = false, startSpeed, charged = false, carTop = 120 } = {}) {
  const car = { x: 0, z: 0, y: 0, h: 0, dir: 0, steer: 0, bus, v: startSpeed ?? (bus ? CRUISE / 1.3 : CRUISE) };
  const cars = traffic.map(start => ({ y: 0, ...start }));
  const T = { traffic: { cars } };
  const halfLength = bus ? 5.55 : HALF_LENGTH, halfWidth = bus ? 1.27 : HALF_WIDTH;
  const routeLength = hoon ? 1800 : 400;
  if (roadWidth) T.roadsAll = [{ cls: 3, wd: roadWidth, pts: bend ? [0, 0, 0, 44, 250*bend, 294] : [0, 0, 0, routeLength] }];
  if (streetEnd != null) {
    // The one-way lane is 2.6 m left of its centreline, putting the host's driving lane at x=0.
    const pts = [];
    for (let z = 0; z <= streetEnd; z += 10) pts.push(-2.6, z);
    T.roadsAll = [{ cls: 3, one: true, wd: 12, pts }];
  }
  const ground = Object.assign(() => 0, { bed: () => 0 });
  const hops = [], frames = [];
  let time = 0;
  const advance = driver.runInNewContext({
    ...collision,
    T, car, ground, hoon, routeLength, streetEnd, bend, charged, autoPin() {}, solid: () => false, F: { lim: [-500, 500, -500, routeLength + 100] },
    bsClamp: (v, lo, hi) => Math.max(lo, Math.min(hi, v)),
    wrap: v => Math.atan2(Math.sin(v), Math.cos(v)),
    performance: { now: () => time * 1000 },
    R: { carTop, carAccel: 5, carTurn: 140 }, C: {}, place: "inv",
    vacant: (x, z, h, length, width) => !T.invStatic.depth(x, z, h, length, width),
    unReset() { hops.push({ time, z: car.z }); },
    ezShow() {}, sit() {}, snd: {}, toast() {}
  });
  const parkedX = (HALF_WIDTH + PARKED_WIDTH - intrusion) * (bend > 0 ? -1 : 1);
  T.invStatic.addTown({ polygons: [], circles: [] }, centres.map(z => ({
    id: [parkedX, z], x: parkedX, z, heading: 0, halfWidth: PARKED_WIDTH, halfLength: PARKED_LENGTH
  })));
  if (smallBarrier) T.invStatic.box(-1.8, 40, 0, .2, 2);
  if (parallelWall) T.invStatic.box(1.6, 100, 0, .4, 300);
  if (gap) T.invStatic.box(-3.1, 50, 0, .2, 180);
  if (closed) T.invStatic.box(0, 40, 0, 100, 2);
  if (kerbBarrier) T.invStatic.box(3.8, 50, 0, .2, 180);
  for (let tick = 0; tick < seconds * hz; tick++) {
    time = tick / hz;
    traffic.forEach((start, i) => {
      cars[i].x = start.x + Math.sin(start.h) * start.v * time;
      cars[i].z = start.z + Math.cos(start.h) * start.v * time;
    });
    const sample = advance(1 / hz);
    if (!sample) break;
    const { bump, target, routeEnd } = sample;
    const extent = halfLength * Math.abs(Math.cos(car.h)) + halfWidth * Math.abs(Math.sin(car.h));
    frames.push({ time, x: car.x, z: car.z, rear: car.z - extent, front: car.z + extent, speed: car.v, target, bump, routeEnd });
    assert.equal(T.invStatic.depth(car.x, car.z, car.h, halfLength, halfWidth), 0, `static overlap at ${time}s`);
    assert.equal(T.traffic.occupied(bus ? "bus" : "car", car.x, car.z, car.h, 0), false, `traffic overlap at ${time}s`);
  }
  return { frames, hops };
}

function checkPass(run, lastCentre, halfLength = PARKED_LENGTH, cruise = CRUISE) {
  const { frames, hops } = run;
  assert.deepEqual(hops, [], "a driveable pass must not invoke Unstick");
  assert.ok(frames.every(f => f.bump === 0), "movement sweep caught a collision");
  const past = frames.find(f => f.rear > lastCentre + halfLength);
  assert.ok(past, "rear did not clear the last vehicle");
  const resumed = frames.find(f => f.time >= past.time && f.target === 0 && f.speed >= .9 * cruise);
  assert.ok(resumed && resumed.time - past.time < 4, "cruise speed must resume after the rear clears");
}

function checkContinuousPass(run, lastCentre, halfLength = PARKED_LENGTH, cruise = CRUISE) {
  checkPass(run, lastCentre, halfLength, cruise);
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

  test(`take the initially wider clear line beside an off-lane barrier at ${hz} Hz`, () => {
    const run = drive(hz, { smallBarrier: true, kerbBarrier: true, roadWidth: 10 });
    checkContinuousPass(run, 40);
    assert.ok(run.frames.find(f => f.target).target > 2.8, "start outside the additional barrier");
    const narrow = drive(hz, { smallBarrier: true, kerbBarrier: true, roadWidth: 7, seconds: 5 });
    assert.ok(narrow.frames.every(f => !f.target && !f.bump), "no passing line outside the road");
  });

  test(`GPS accelerates from rest to pass a moving lead six metres ahead at ${hz} Hz`, () => {
    const npc = { x: 0, z: 6, h: 0, v: 8 };
    for (const charged of [false, true]) {
      const { frames, hops } = drive(hz, { centres: [], npc, hoon: true, startSpeed: 0, roadWidth: 12, charged, seconds: 45 });
      assert.deepEqual(hops, []);
      assert.ok(frames.every(f => !f.bump));
      const start = frames.find(f => f.target);
      assert.ok(start, "choose a pass when unboosted acceleration can close the gap");
      const merged = frames.find(f => f.time > start.time && !f.target && Math.abs(f.x) < .3 &&
        f.rear > npc.z + npc.v*f.time + HALF_LENGTH);
      assert.ok(merged, "clear the moving front bumper and return");
    }
    const limited = drive(hz, { centres: [], npc, hoon: true, startSpeed: 0, roadWidth: 12, carTop: 24, seconds: 5 });
    assert.ok(limited.frames.every(f => !f.target && !f.bump), "follow when the configured car is slower than the lead");
  });

  test(`a parallel wall outside the home lane leaves a stopped car passable at ${hz} Hz`, () => {
    const npc = { x: 0, z: 40, h: 0, v: 0 };
    const run = drive(hz, { centres: [], npc, parallelWall: true, roadWidth: 12 });
    checkContinuousPass(run, 40, HALF_LENGTH);
    assert.ok(run.frames.some(f => f.target > 0), "pass on the open side");
  });

  test(`pass a parked car immediately before a 45-degree bend without a rear-corner hit at ${hz} Hz`, () => {
    for (const bend of [-1, 1]) {
      const run = drive(hz, { bend, roadWidth: 12 });
      checkPass(run, 40);
      assert.ok(bend*run.frames.at(-1).x > 20, "continue along the outgoing street");
    }
  });

  test(`stay out until all 14 parked cars in a long row clear at ${hz} Hz`, () => {
    const centres = Array.from({ length: 14 }, (_, i) => 40 + 12 * i);
    checkContinuousPass(drive(hz, { centres, seconds: 19 }), centres.at(-1));
  });

  test(`Drive for me passes the full parked row on a street with 10 m segments at ${hz} Hz`, () => {
    const centres = Array.from({ length: 14 }, (_, i) => 40 + 12 * i);
    const run = drive(hz, { centres, streetEnd: 400, seconds: 22 });
    assert.ok(run.frames[0].routeEnd <= 150, "ordinary cruise starts with its shorter street buffer");
    checkContinuousPass(run, centres.at(-1));
  });

  test(`Drive for me waits when the actual one-way street ends before the return at ${hz} Hz`, () => {
    const centres = Array.from({ length: 14 }, (_, i) => 40 + 12 * i);
    const { frames } = drive(hz, { centres, streetEnd: 200, seconds: 6 });
    assert.ok(frames.every(f => f.target === 0 && f.bump === 0), "no pass beyond the actual street end");
    assert.ok(frames.some(f => f.routeEnd === 200), "cruise reached the last permitted graph node");
    assert.ok(frames.at(-1).front < 40 && frames.at(-1).speed < 1, "stop before the parked row");
  });

  test(`hold one passing line past a stationary traffic car at ${hz} Hz`, () => {
    const npc = { x: 1.15, z: 40, h: 0, v: 0 };
    checkContinuousPass(drive(hz, { npc, centres: [] }), npc.z, HALF_LENGTH);
  });

  test(`one continuous pass for stopped traffic, including a mixed parked row at ${hz} Hz`, () => {
    const traffic = [40, 64].map(z => ({ x: 0, z, h: 0, v: 0 }));
    checkContinuousPass(drive(hz, { traffic, centres: [] }), 64, HALF_LENGTH);
    checkContinuousPass(drive(hz, { traffic, centres: [88, 112] }), 112);
    const longQueue = Array.from({ length: 13 }, (_, i) => ({ x: 0, z: 40 + 12 * i, h: 0, v: 0 }));
    checkContinuousPass(drive(hz, { traffic: longQueue, centres: [], seconds: 22 }), 184, HALF_LENGTH);
  });

  test(`an unreachable queue beyond the passing horizon stays blocked at ${hz} Hz`, () => {
    const traffic = Array.from({ length: 17 }, (_, i) => ({ x: 1.15, z: 28 + 12 * i, h: 0, v: 0 }));
    const { frames } = drive(hz, { traffic, centres: [], seconds: 4 });
    assert.ok(frames.every(f => f.target === 0 && f.front < 28 && f.bump === 0));
    assert.ok(frames.at(-1).speed < 1);
  });

  test(`yield to oncoming and crossing traffic before passing a queue at ${hz} Hz`, () => {
    const queue = [40, 64].map(z => ({ x: 0, z, h: 0, v: 0 }));
    const clear = drive(hz, { centres: [], traffic: queue, kerbBarrier: true, seconds: 2 });
    const openAt = clear.frames.find(f => f.target !== 0).time;
    for (const actor of [{ x: -2.6, z: 100, h: Math.PI, v: 10 }, { x: -29, z: 40, h: Math.PI/2, v: 8 }]) {
      const run = drive(hz, { centres: [], traffic: [...queue, actor], kerbBarrier: true, seconds: 20 });
      checkPass(run, 64, HALF_LENGTH);
      const out = run.frames.find(f => f.target !== 0);
      assert.ok(out.time > openAt + .5, "let the conflicting actor through");
      assert.ok(run.frames.filter(f => f.time >= out.time && f.rear <= 64 + HALF_LENGTH)
        .every(f => Math.sign(f.target) === Math.sign(out.target)), "hold the passing side once clear");
    }
  });

  test(`GPS stays out past a queue of moving leads at ${hz} Hz`, () => {
    const traffic = [40, 64].map(z => ({ x: 0, z, h: 0, v: 8 }));
    const { frames, hops } = drive(hz, { traffic, centres: [], hoon: true, roadWidth: 12, seconds: 20 });
    assert.deepEqual(hops, []);
    assert.ok(frames.every(f => f.bump === 0));
    const first = frames.findIndex(f => f.target !== 0);
    const clear = frames.findIndex(f => f.rear > 64 + 8 * f.time + HALF_LENGTH);
    assert.ok(first >= 0 && clear > first, "must overtake the second moving car");
    assert.ok(frames.slice(first, clear).every(f => Math.sign(f.target) === Math.sign(frames[first].target)));
    assert.ok(frames.slice(clear).some(f => !f.target && Math.abs(f.x) < .3), "return to the home lane");
  });

  test(`GPS Autodrive clears a moving 8 m/s lead before merging back at ${hz} Hz`, () => {
    const npc = { x: 0, z: 40, h: 0, v: 8 };
    const { frames, hops } = drive(hz, { centres: [], npc, hoon: true, seconds: 45, roadWidth: 12 });
    assert.deepEqual(hops, []);
    assert.ok(frames.every(f => f.bump === 0));
    const first = frames.find(f => f.target !== 0);
    assert.ok(first, "a slower vehicle on an open straight is passable");
    const merged = frames.find(f => f.time > first.time && !f.target && Math.abs(f.x) < .3 &&
      f.rear > npc.z + npc.v * f.time + HALF_LENGTH);
    assert.ok(merged, "must pass the moving front bumper and return to the lane");
    assert.ok(frames.filter(f => f.time >= first.time && f.rear <= npc.z + npc.v * f.time + HALF_LENGTH)
      .every(f => Math.sign(f.target) === Math.sign(first.target)), "stay out until the moving lead clears");
  });

  test(`GPS Autodrive waits when a moving pass would exceed the 185 m horizon at ${hz} Hz`, () => {
    // Same reachable lead, but closing at only 2 m/s puts the return well outside the checked road.
    const npc = { x: 0, z: 34, h: 0, v: 11.9 };
    const run = drive(hz, { centres: [], npc, hoon: true, seconds: .25, roadWidth: 12 });
    assert.ok(run.frames.every(f => f.target === 0 && f.bump === 0));
  });

  test(`bus replans around the parked car without braking to a stop or using Unstick at ${hz} Hz`, () => {
    const run = drive(hz, { bus: true, roadWidth: 12 });
    checkContinuousPass(run, 40, PARKED_LENGTH, CRUISE / 1.3);
    const narrow = drive(hz, { bus: true, roadWidth: 4, seconds: 5 });
    assert.ok(narrow.frames.every(f => f.target === 0 && f.bump === 0), "no wider target off the road");
    assert.ok(narrow.frames.at(-1).speed < 1, "brake for the blocked lane");
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
