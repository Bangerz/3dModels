import fs from 'node:fs/promises';
import path from 'node:path';

async function observeTakeover(slot){
 const H=window.__pixelHost,T=H.town,C=T.car,P=T.traffic,d=T.pair.cur.__pixelScene,F=H.fly;
 if(C.in)C.out();
 if(!T.walk)document.querySelector('#bsTownMode').click();
 T.tween=null;T.model.setMinutes(720);
 const traffic=P.cars;window.__fixtureNPCs??=traffic.slice();
 const npc=window.__fixtureNPCs[slot];
 if(!npc||!traffic.includes(npc)||npc.y==null||npc.h==null)throw Error('Active NPC slot unavailable '+slot);
 const parts=npc.parts;
 function photograph(){
  const eye=d.camera.position.clone(),rotation=d.camera.quaternion.clone(),near=d.camera.near;
  const sx=Math.sin(h),cz=Math.cos(h);
  d.camera.position.set(x+5.2*cz+6.5*sx,y+3.2,z-5.2*sx+6.5*cz);
  d.camera.up.set(0,1,0);d.camera.lookAt(x,y+.70,z);d.camera.near=.2;
  d.camera.updateProjectionMatrix();d.camera.updateMatrixWorld(true);d.renderer.render(d.scene,d.camera);
  const image=d.renderer.domElement.toDataURL('image/png');
  d.camera.position.copy(eye);d.camera.quaternion.copy(rotation);d.camera.near=near;d.camera.updateProjectionMatrix();d.camera.updateMatrixWorld(true);
  return image;
 }
 const native=d.life.group.children.filter(m=>m.name?.startsWith('traffic-')&&m.visible).find(m=>Math.hypot(m.matrix.elements[12]-npc.x,m.matrix.elements[14]-npc.z)<.24);
 if(!native)throw Error('Rendered traffic mesh does not match simulated moving NPC');
 native.geometry.computeBoundingBox();
 const bounds=native.geometry.boundingBox,extent=bounds.getSize(native.position.clone()).toArray();
 const insideFootprint=Math.max(Math.abs(bounds.min.x),Math.abs(bounds.max.x))<=.981&&Math.max(Math.abs(bounds.min.z),Math.abs(bounds.max.z))<=2.221&&bounds.max.y<=1.401;
 if(!insideFootprint)throw Error('Traffic visual exceeds permitted collision envelope '+JSON.stringify(extent));
 const oldPosition=F.pos.clone();let awayHidden=false,nearRestored=false;
 try{
  F.pos.set(npc.x+480,npc.y+250,npc.z);
  await new Promise(requestAnimationFrame);P.frame();awayHidden=!!npc.away&&!native.visible;
 }finally{F.pos.copy(oldPosition);await new Promise(requestAnimationFrame);P.frame();nearRestored=!npc.away&&native.visible;}
 if(!awayHidden||!nearRestored)throw Error('NPC shape did not hide away and restore near the player');
 const {x,z,h,y}=npc,car=C.carNear(x,z,.25);
 if(car?.own!==npc)throw Error('Car proximity selector cannot resolve requested moving NPC slot '+JSON.stringify({slot,away:npc.away,target:[x,z],found:car&&[car.x,car.z],walking:T.walk}));
 const roads=d.scene.getObjectByName('roads'),three=H.B.THREE;
 const ray=new three.Raycaster(),down=new three.Vector3(0,-1,0),clearances=[];
 native.updateWorldMatrix(true,false);
 if(roads)for(const axle of [-1.29,1.29])for(const side of [-.82,.82]){
  const tyre=native.localToWorld(native.position.clone().set(side,bounds.min.y,axle));
  ray.set(new three.Vector3(tyre.x,tyre.y+3,tyre.z),down);
  const hit=ray.intersectObject(roads,false)[0];
  if(hit)clearances.push(+(tyre.y-hit.point.y).toFixed(3));
 }
 const before=photograph(),count=traffic.length,oldTake=P.take;
 let handed=null;
 P.take=function(n){const a=oldTake.call(this,n);if(n===npc)handed=a;return a;};
 let entered=false;
 try{entered=C.enterCar(car);}finally{P.take=oldTake;}
 const pose=C.where(),handlePreserved=!!handed&&handed.parts===parts,removed=P.cars.length===count-1&&!P.cars.includes(npc);
 if(!entered||pose?.kind!=='car'||!removed||!handlePreserved||Math.hypot(x-pose.x,z-pose.z)>.06)throw Error('Moving-car handover changed visual handle or pose '+JSON.stringify({slot,entered,pose,removed,handlePreserved,delta:pose&&Math.hypot(x-pose.x,z-pose.z)}));
 const after=photograph(),geometryKeys=Object.keys(npc).filter(k=>/kind|shape|family|style|visual/i.test(k));
 return {slot,x,z,h,y,velocity:npc.v,color:npc.col,shape:native.name,extent,insideFootprint,awayHidden,nearRestored,tyreClearanceVsRoadM:clearances,handlePreserved,meshStillPresentAfter:d.life.group.children.includes(native),removed,pose,trafficBefore:count,trafficAfter:P.cars.length,
   geometry:Object.fromEntries(geometryKeys.filter(k=>['string','number'].includes(typeof npc[k])).map(k=>[k,npc[k]])),
   before,after};
}
export async function checkTakeovers(page,folder,label){
 const selected=await page.evaluate(()=>{
  const T=window.__pixelHost.town,d=T.pair.cur.__pixelScene;
  const meshes=d.life.group.children.filter(m=>m.name?.startsWith('traffic-')&&m.visible);
  return T.traffic.cars.map((c,i)=>({i,shape:meshes.find(m=>Math.hypot(m.matrix.elements[12]-c.x,m.matrix.elements[14]-c.z)<.24)?.name,active:c.y!=null&&c.h!=null}));
 });
 const first=['traffic-sedan','traffic-wagon','traffic-ute'].map(name=>selected.find(c=>c.active&&c.shape===name));
 if(first.includes(undefined))throw Error('Could not find every native shape in live traffic '+JSON.stringify(selected));
 const checks=[];
 for(const {i} of first){
  await page.evaluate(index=>{
   const H=window.__pixelHost,T=H.town,C=T.car,F=H.fly;
   window.__fixtureNPCs??=T.traffic.cars.slice();
   if(C.where())C.out();
   if(!T.walk)document.querySelector('#bsTownMode').click();
   const target=window.__fixtureNPCs[index];
   T.tween=null;F.goTo=null;F.keys.clear();F.stick.x=F.stick.y=0;
   F.pos.set(target.x+2.6*Math.cos(target.h),T.model.groundAt(target.x,target.z)+1.8,target.z-2.6*Math.sin(target.h));
  },i);
  await page.waitForFunction(index=>{
   const T=window.__pixelHost.town,c=window.__fixtureNPCs[index];
   if(c.away||T.car.carNear(c.x,c.z,.25)?.own!==c)return false;
   return T.pair.cur.__pixelScene.life.group.children.some(m=>m.visible&&m.name?.startsWith('traffic-')&&Math.hypot(m.matrix.elements[12]-c.x,m.matrix.elements[14]-c.z)<.24);
  },i,{timeout:6000});
  const r=await page.evaluate(observeTakeover,i);
  for(const key of ['before','after']){
   const pic=path.join(folder,label+'-slot-'+i+'-'+key+'.png');
   await fs.writeFile(pic,Buffer.from(r[key].split(',')[1],'base64'));
   r[key]=path.basename(pic);
  }
  checks.push(r);
 }
 return {selection:selected,checks};
}
