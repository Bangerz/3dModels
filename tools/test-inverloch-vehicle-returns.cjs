const assert = require("node:assert/strict");
const {test} = require("node:test");
const {readFileSync} = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const app = readFileSync(path.join(__dirname, "..", "app.html"), "utf8");
const between = (first,last) => app.slice(app.indexOf(first),app.indexOf(last,app.indexOf(first)));

test("thirty-minute returns restart at exit, retry occupied bays, and ignore rescue cars",()=>{
  const make = vm.runInNewContext(between("  function invVehicleReturns(", "  function townCar(") + ";invVehicleReturns");
  const halfHour = 1800000, calls = [];
  let now = 0, clear = false;
  const q = make(car => { calls.push(car.id); return clear; }, () => now), car={id:[14,-50]};
  q.leave(car); now = halfHour-1; q.tick(); assert.equal(calls.length,0);
  q.take({id:[14,-50]}); now += halfHour; q.tick(); assert.equal(calls.length,0);
  q.leave(car); now += halfHour; q.tick(); assert.equal(calls.length,1);
  clear = true; now += 14999; q.tick(); assert.equal(calls.length,1);
  now++; q.tick(); assert.equal(calls.length,2);
  q.leave({own:{rescue:true}}); now += halfHour; q.tick(); assert.equal(calls.length,2);
  for (let i=0;i<13;i++) { q.leave({id:[i,100]}); now+=halfHour; q.tick(); }
  assert.equal(calls.length,15);
});

test("a preset swap restores every borrowed car and mirrors returns while swapping",async()=>{
  const frames=[], T={}, BS={town:T};
  const model=()=>({ready:Promise.resolve(), poses:new Map(), dispose(){},
    driveCar(x0,z0,x,y,z) { if (x0<0) return false; this.poses.set(x0+","+z0,[x,y,z]); return true; },
    resetCar(x0,z0){ return this.poses.delete(x0+","+z0); }});
  const ctx = {navigator:{},matchMedia:()=>({matches:false}),localStorage:{getItem:()=>null},invGraphics:{preset:"medium"},
    invGraphicsPresets:["auto","low","medium","high"],performance:{now:()=>0},$:()=>({}),bsNote(){},BS,
    requestAnimationFrame:f=>frames.push(f)};
  const src=between("  function townModelPair(", "    return m;\n  }") + "    return m;\n  }";
  const pair=vm.runInNewContext(src.replace("T.pair = { initialPreset","T.pair = { testSwap:swapTo, initialPreset")+";townModelPair",ctx);
  const m=pair(T,{create:model},{children:[]},{place:"inv"},{},{});
  await m.ready;
  m.driveCar(1,1,8,0,12); m.driveCar(2,2,11,0,9); m.driveCar(3,3,-1,1,16);
  assert.equal(m.driveCar(-1,0,0,0,0),false);
  m.resetCar(1,1);
  const high=model(), swapping=T.pair.testSwap(high,"high");
  assert.deepEqual([...high.poses.keys()],["2,2","3,3"]);
  m.resetCar(2,2); m.driveCar(3,3,24,0,-7);
  while(frames.length) frames.shift()();
  await swapping;
  assert.equal(T.pair.cur,high); assert.deepEqual([...high.poses],[["3,3",[24,0,-7]]]);
});
