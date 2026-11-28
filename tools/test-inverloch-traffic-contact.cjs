const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");
const {test} = require("node:test");
const app = fs.readFileSync(path.join(__dirname, "..", "app.html"), "utf8");
const between = (start, end) => app.slice(app.indexOf(start), app.indexOf(end, app.indexOf(start)));
const collision = import("../src/explore/collision.mjs");
const mechanics = between("  function townIndicatorSide(", "  function townCritter(");
const walkCode = between("  function bsFlyTick(", "  function bsStrike(");
const normalDrive = between("        const trafficTravel = ", "        if (bump > 1.5)");
const at = (x,z,h=0,y=0) => ({x,z,h,y});
class MatrixStub {
  constructor() { this.elements = [1]; }
  makeScale() { return this; } set() { return this; } identity() { return this; }
  compose() { return this; } setFromEuler() { return this; }
}
async function world(place="inv", model={}, roads=[-100,0,100].map(x=>({cls:0,pts:[x,-100,x,100]}))) {
  let now=5000, startup;
  const F={pos: at(0,0,0,2), keys:new Set(), stick:{x:0,y:0}, lookStick:{x:0,y:0}, vert:0, yaw:0, pitch:0, eye:2, walk:()=>2};
  const T={cfg:{place}, walk:true};
  const B={THREE:Object.fromEntries(["Matrix4","Quaternion","Euler","Vector3"].map(k=>[k,MatrixStub]))};
  const BS={B,town:T,fly:F};
  const {townTrafficBodies, townTrafficSweep} = await collision;
  const ctx=vm.createContext({BS, townTrafficBodies, townTrafficSweep, setTimeout: f=>{startup=f;}, performance:{now:()=>now}, matchMedia:()=>({matches:false}), townLaneOf:()=>0,
    bsClamp:(x,lo,hi)=>Math.max(lo,Math.min(x,hi)), bsBlock:()=>{}, bsUnstick:()=>{throw Error("unexpected sidestep into traffic");},
    townPlaneParts:()=>[], townCarPart:()=>({}), townSpinner:()=>null, townStreetData:async()=>({names:[],roads})});
  vm.runInContext("let seed=37; Math.random=()=>((seed=(Math.imul(1664525, seed)+1013904223)>>>0)/4294967296)",ctx);
  vm.runInContext(mechanics+walkCode,ctx);
  const parts=()=>({setMatrix(){},remove(){}});
  const P=ctx.townTraffic(T,{addParts:parts,...model},F,()=>0,T.cfg);
  T.traffic=P; await startup(); const initial=P.cars.splice(0);
  const tick=()=>{now+=100; P.frame();};
  function npc(x,z,v=0) {
    const road={p:[x,-100,x,100],n:2,one:false,lane:0};
    const C={x,z,y:0,h:0,r:road,i:0,d:1,s:z+100,v,top:14,ln:0,still:0,p:0,rl:0,parts:parts()};
    P.cars.push(C); return C;
  }
  function drive(car, v, dt=.1) {
    const locals={T,car,v,dt,bump:0,mine:true,slide:false,st:dt,gc:false,R:{carTurn:100},C:{starTil:0},
      SHAPE:[],inside:()=>true,fits:()=>true,wrap:n=>Math.atan2(Math.sin(n),Math.cos(n)),snd:{thud(){}}};
    Object.assign(ctx,locals); vm.runInContext("{"+normalDrive+"}",ctx); return car;
  }
  return {ctx,T,F,P,tick,npc,drive,initial};
}
test("Inverloch traffic keeps its assigned body, paint and visual handle on takeover",async()=>{
  const streets=[];
  for(let x=-210;x<=210;x+=70) for(let z=-140;z<=140;z+=70) streets.push({cls:0,pts:[x,z,x,z+50]});
  const model={addTrafficCar:(kind,colour,...envelope)=>({kind,colour,envelope,setMatrix(){},remove(){}})};
  const {P,initial}=await world("inv",model,streets);
  assert.equal(initial.length,7);
  const colours=[0xf2f2ee,0xb8bcc2,0x1d1f24,0x2d5ea8,0xa8262c,0x5c6670,0xe4e1d6];
  for(const [slot,car] of initial.entries()){
    assert.equal(car.parts.kind,slot%3); assert.equal(car.parts.colour,colours[slot]);
    assert.deepEqual(car.parts.envelope,[0.98,2.22,1.4]);
    P.cars.push(car);
    assert.equal(P.take(car).parts,car.parts);
    assert.equal(P.take(car),null);
  }
  for(const place of ["moo","logan"]){
    const {initial:others}=await world(place,model,streets);
    assert.ok(others.length>0 && others.every(car=>car.parts.kind===undefined));
  }
  const {initial:older}=await world("inv",{},streets);
  assert.equal(older.length,7); assert.ok(older.every(car=>car.parts.kind===undefined));
});
test("automatic indicators follow steering and genuine route turns", async () => {
  const {ctx} = await world();
  const car = {v: 3};
  assert.equal(ctx.townManualIndicator(car, -0.45, 1, 0), 0); // a gentle turn waits
  assert.equal(ctx.townManualIndicator(car, -0.45, 1, 400), 0);
  assert.equal(ctx.townManualIndicator(car, -0.45, 1, 650), -1); // held 0.6 s: on
  assert.equal(ctx.townManualIndicator({v: 3}, 0.9, 1, 0), 1); // hard over: straight away
  assert.equal(ctx.townIndicatorFlash(car, -1, 100), -1);
  assert.equal(ctx.townManualIndicator(car, -0.25, 1), -1); // avoid flicker around the stick threshold
  assert.equal(ctx.townIndicatorFlash(car, -1, 480), 0);
  assert.equal(ctx.townIndicatorFlash(car, -1, 850), -1);
  assert.equal(ctx.townIndicatorFlash(car, 0, 851), 0);
  assert.equal(ctx.townManualIndicator(car, 0.25, 1), 0);
  assert.equal(ctx.townIndicatorFlash(car, 1, 900), 1);
  assert.equal(ctx.townManualIndicator({v: -1}, 1, -1), 0);
  assert.equal(ctx.townManualIndicator({v: 0}, 1, -1), 0);
  const corner = side => d => d <= 8 ? [0, d] : [side * (d - 8), 8];
  assert.equal(ctx.townRouteIndicator(corner(1), 0, 23), -1);
  assert.equal(ctx.townRouteIndicator(corner(-1), 0, 23), 1);
  assert.equal(ctx.townRouteIndicator(d => [2, d], 0, 23), 0);
  assert.equal(ctx.townIndicatorSide(Math.PI), 0); // a dead-end turnaround isn't a junction turn
});
test("a traffic car signals its chosen branch before turning, then cancels", async () => {
  for (const side of [-1, 1, 0]) {
    const incoming = [20, -80, 20, 0], outgoing = side ? [20, 0, 20 - side * 80, 0] : [20, 0, 20, 80];
    const roads = [incoming, outgoing, [160, -100, 160, 100]].map(pts => ({cls: 0, pts}));
    const {F, P, npc, tick} = await world("inv", {}, roads);
    F.pos.x = 140; F.pos.z = -80;
    const car = npc(20, -9, 8);
    car.r = {p: incoming, n: 2, lane: 0}; car.s = 71;
    const flashes = [];
    car.parts.setSignal = value => flashes.push(value);
    tick();
    assert.equal(car.r.p, incoming);
    assert.equal(flashes.at(-1) ?? 0, side);
    for (let step = 0; step < 36; step++) tick();
    assert.equal(car.r.p, outgoing);
    assert.equal(flashes.at(-1) ?? 0, 0);
    assert.ok(flashes.every(value => value === side || value === 0));
    if (side) {
      car.litSignal = side;
      assert.equal(P.take(car).parts, car.parts);
      assert.equal(flashes.at(-1), 0);
    }
  }
});
test("sweeps cover fast opposed travel and a rotating corner while separated paths stay clear", async()=>{
  const {townTrafficSweep: sweep, townTrafficBodies: shape} = await collision;
  const s=(a,A,ka,b,B,kb)=>sweep(a,A,shape[ka],b,B,shape[kb]);
  const headOn=s(at(0,-10),at(0,10),"car",at(0,10),at(0,-10),"car");
  assert.ok(Math.abs(headOn-(20-4.44)/40)<0.001, headOn);
  assert.equal(s(at(0,-10),at(0,10),"walk",at(2,-10),at(2,10),"car"),1);
  assert.ok(s(at(0,0),at(0,0,Math.PI/2),"car",at(1.65,1.65),at(1.65,1.65),"walk")<1);
  assert.equal(s(at(-5,0,0,2),at(5,0,0,2),"walk",at(0,0),at(0,0),"car"),1);
  assert.equal(s(at(0,0),at(0,-1),"car",at(0,0),at(0,0),"car"),1);
  assert.equal(s(at(1.1,0),at(2,0),"walk",at(0,0),at(0,0),"car"),1);
  assert.equal(s(at(1.1,0),at(0,0),"walk",at(0,0),at(0,0),"car"),0);
});
test("the live registry ignores hidden and uninitialised cars, then releases the exact taken car", async()=>{
  const {P,npc}=await world(); const c=npc(0,0), other=npc(20,0);
  assert.ok(P.occupied("walk",0,0)); assert.equal(P.occupied("walk",0,0,0,5),false);
  c.away=true; assert.equal(P.occupied("walk",0,0),false); c.away=false;
  c.h=null; assert.equal(P.occupied("walk",0,0),false); c.h=0;
  assert.equal(P.take(c).parts,c.parts); assert.equal(P.occupied("walk",0,0),false);
  assert.ok(P.cars.includes(other)); P.dispose(); assert.equal(P.cars.length,0);
  const otherTown=await world("logan"); assert.equal(otherTown.P.travel,undefined);
});
test("normal walk input cannot penetrate or trigger the stuck side-step, and reverses away", async()=>{
  const {F,P,ctx,tick,npc}=await world(); const c=npc(0,0); c.top=0;
  F.pos.x=2.1; F.stick.x=-1;
  for(let i=0;i<25;i++){ ctx.bsFlyTick(.1); tick(); assert.equal(P.occupied("walk",F.pos.x,F.pos.z),false); }
  assert.ok(F.pos.x>=1.3-0.001);
  F.stick.x=1; ctx.bsFlyTick(.1); assert.ok(F.pos.x>2);
  assert.ok(P.cars.includes(c));
});
test("normal driving stops within its existing substeps, and can back clear", async()=>{
  const {T,drive,P,npc}=await world(); npc(0,0);
  const car={...at(0,-6),dir:0,v:80,steer:0};
  T.car={in:true,pose:()=>({...car,k:"car"})};
  drive(car,80); assert.equal(car.v,0); assert.ok(Math.abs(car.z+4.44)<0.002,car.z);
  assert.equal(P.occupied("car",car.x,car.z,car.h,car.y),false);
  car.v=-3; drive(car,-3); assert.ok(car.z< -4.7);
});
test("an NPC holds its lane and cursor for more than ten seconds with a stationary player, then resumes", async()=>{
  const {F,tick,npc,P}=await world(); const c=npc(0,-2.8,14), road=c.r;
  const start=c.s; for(let i=0;i<130;i++) tick();
  assert.ok(P.cars.includes(c)); assert.equal(c.r,road); assert.ok(Math.abs(c.z+2.8)<1e-8); assert.equal(c.s,start); assert.equal(c.v,0);
  F.pos.x=8; for(let i=0;i<10;i++)tick(); assert.ok(c.s>start+1);
});
test("side-on driving and a turning route cannot advance the NPC cursor into the player", async()=>{
  const {T,tick,npc}=await world(); const c=npc(0,-3.5,14);
  T.car={in:true,pose:()=>({...at(0.05,0,Math.PI/2),k:"car"})};
  const s=c.s; tick(); assert.equal(c.s,s); assert.equal(c.v,0);
  // Just before a junction, the outgoing route turns left into the side of the car.
  const r={p:[0,-5,0,0,-15,0],n:3,one:false,lane:0};
  Object.assign(c,{r,i:0,d:1,s:4.95,x:0,z:-0.05,h:0,v:14,ln:0});
  T.car.pose=()=>({...at(-2.7,0,0),k:"car"});
  tick(); assert.equal(c.r,r); assert.equal(c.i,0); assert.equal(c.s,4.95); assert.equal(c.h,0);
});

test("simultaneous perpendicular travel catches a crossing wholly between each endpoint", async()=>{
  const {P,F,tick,npc}=await world(); const c=npc(0,0,14); F.pos.x=-5; F.pos.z=2.8;
  assert.equal(P.travel("walk",-5,2.8,0,5,2.8,0,0),1); // at its old pose the NPC clears this path
  F.pos.x=5; const before=c.s; tick();
  assert.equal(c.s,before); assert.equal(c.v,0); // at its new pose the walker also clears the end of the NPC route
  tick(); assert.ok(c.s>before);
});

test("Moorooka and Logan traffic get host-drawn indicators: added on first flash, left lenses on the car's left (+X)", async()=>{
  for(const place of ["moo","logan"]){
    const added=[];
    const model={addParts:list=>{const h={list,mats:list.map(q=>q.matrix),setMatrix(i,e){h.mats[i]=e;},remove(){h.gone=true;}}; added.push(h); return h;}};
    const {ctx}=await world(place,model);
    const car=ctx.townSignalCar(model,1,"#2d5ea8",[1,0,0,0,0,1,0,0,0,0,1,0,5,0,7,1]);
    const body=added.length; car.setSignal(0); assert.equal(added.length,body,"nothing added until a lens is lit");
    car.setMatrix(0,[1,0,0,0,0,1,0,0,0,0,1,0,5,0,7,1]); car.setSignal(-1);
    const lenses=added.at(-1); assert.equal(lenses.list.length,2);
    const xs=i=>Array.from(lenses.list[i].positions).filter((_,k)=>k%3===0);
    assert.ok(xs(0).every(x=>x>0) && xs(1).every(x=>x<0));
    assert.equal(lenses.mats[0][12],5); assert.equal(lenses.mats[1][13],-1e5); // left lit at the car, right away below ground
    car.setSignal(1); assert.equal(lenses.mats[0][13],-1e5); assert.equal(lenses.mats[1][14],7);
    car.setMatrix(0,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]); assert.equal(lenses.mats[1][13],-1e5); // a car not drawn takes its lenses with it
    car.remove(); assert.ok(lenses.gone);
  }
});


test("a visible NPC waits at a static obstruction and resumes from the same route cursor when clear", async()=>{
  const {T,F,P,npc,tick}=await world();
  F.pos.x=24;
  let closed=true;
  T.invStatic={wholeTown:true,depth:()=>0,canDrive:()=>!closed};
  const c=npc(0,-3,7), road=c.r, station=c.s;
  for(let i=0;i<120;i++) tick();
  assert.ok(P.cars.includes(c)); assert.equal(c.r,road); assert.equal(c.s,station); assert.equal(c.z,-3);
  closed=false; tick(); assert.ok(c.s>station); assert.ok(c.z>-3);
});
test("ordinary borrowed model cars use the car footprint when traffic crosses their side", async()=>{
  const {T,npc,tick}=await world();
  const c=npc(0,-4.5,14), station=c.s;
  T.car={in:true,pose:()=>({k:"car~m",x:0,z:0,h:Math.PI/2,y:0})};
  c.s+=1.4; c.z+=1.4;
  tick();
  assert.equal(c.s,station+1.4); assert.equal(c.v,0);
});
