import path from 'node:path';

const lightTimes = [
 {name:'noon',minutes:720},
 {name:'night',minutes:1260},
];

function streetFixture({eye,target}){
 const d=window.__pixelHost.town.pair.cur.__pixelScene;
 const originLat=-38.63351,originLon=145.72774,metresLon=111320*Math.cos(originLat*Math.PI/180);
 function world([x,y,z]){
  const [wx,wz]=d.fromLatLon(originLat-z/110540,originLon+x/metresLon);
  return [wx,d.hf.yAt(wx,wz)+y,wz];
 }
 return {eye:world(eye),target:world(target)};
}

export function placeView({eye,target,minutes}){
 const H=window.__pixelHost,T=H.town,F=H.fly;
 T.car?.out?.();
 T.tween=null;
 F.walk=null;
 F.floor=()=>-Infinity;
 F.vert=0;
 F.pos.set(...eye);
 F.yaw=Math.atan2(eye[0]-target[0],eye[2]-target[2]);
 F.pitch=Math.atan2(target[1]-eye[1],Math.hypot(target[0]-eye[0],target[2]-eye[2]));
 F.keys.clear();
 F.stick.x=F.stick.y=0;
 F.goTo=null;
 F.wv=null;
 const clock=new Intl.DateTimeFormat('en-AU',{timeZone:H.D.tz,hour:'2-digit',minute:'2-digit',hourCycle:'h23'});
 const [hour,minute]=clock.format(H.view.ms).split(':').map(Number);
 if(!Number.isFinite(hour+minute))throw Error('Explore clock could not be staged');
 H.view.ms+=(minutes-hour*60-minute)*60_000;
 H.exTimeSet=true;
 T.model.setCamera(...eye,F.yaw,F.pitch);
 T.model.setMinutes(minutes);
}

function captureState({carNear}){
 const d=window.__pixelHost.town.pair.cur.__pixelScene;
 const camera=d.camera,r=d.renderer,gl=r.getContext(),dbg=gl.getExtension('WEBGL_debug_renderer_info');
 const group=d.ultraStreet?.group;
 let contactMeshes=0;
 d.scene.traverse(object=>{if(object.visible&&object.name==='parked-car-contact')contactMeshes++;});
 const car=window.__pixelHost.town.model.nearestCar(...(carNear??[camera.position.x,camera.position.z]),carNear?3:40);
 const key=car?.id?.map(value=>Math.round(value*4)).join('_');
 const parked=key?d.life?.parkedAt.get(key):null;
 const body=parked?d.life.parkedSets[parked.set]?.body:null;
 const contact=body?.children.find(mesh=>mesh.name==='parked-car-contact');
 return {
  eye:camera.position.toArray(),dir:camera.getWorldDirection(camera.position.clone()).toArray(),
  buffer:[r.domElement.width,r.domElement.height],viewport:[innerWidth,innerHeight],quality:d.quality,
  gpu:dbg?gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL):gl.getParameter(gl.RENDERER),
  drawCalls:r.info.render.calls,triangles:r.info.render.triangles,residentTextures:r.info.memory.textures,
  nearGroundMetres:camera.position.y-d.hf.yAt(camera.position.x,camera.position.z),
  ultraStreet:group?{visible:group.visible,meshes:group.children.filter(child=>child.isMesh).length}:null,
  contactMeshes,car:car?{id:car.id,distance:Math.hypot(car.x-camera.position.x,car.z-camera.position.z),
   contact:!!(contact?.visible&&body.visible&&body.parent&&contact.instanceMatrix===body.instanceMatrix)}:null,
 };
}

export async function captureViews(page,folder,label,streetPose,tier){
 const views=[
  {name:'street',eye:streetPose.eye,target:streetPose.target,carNear:streetPose.near},
  {name:'pier',eye:[366,9,-138],target:[356,.1,-78]},
  {name:'bakery',...(await page.evaluate(streetFixture,{eye:[11,2.1,29],target:[32,2.6,50]})),street:true},
  {name:'awning',...(await page.evaluate(streetFixture,{eye:[25,1.75,42],target:[34,2.5,50]})),street:true},
 ];
 const shots=[];
 for(const view of views){
  for(const time of (view.street?lightTimes.slice(0,1):lightTimes)){
   const fixture={...view,minutes:time.minutes};
   await page.evaluate(placeView,fixture);
   await page.waitForTimeout(1500);
   if(view.street&&tier==='ultra')await page.waitForFunction(()=>window.__pixelHost.town.pair.cur.__pixelScene.ultraStreet?.group?.visible,null,{timeout:12000});
   const state=await page.evaluate(captureState,{carNear:view.carNear});
   if(view.carNear&&tier==='ultra'&&!state.car?.contact)throw Error('Known near parked ute was missing its active contact patch');
   if(view.street&&tier==='ultra'&&state.ultraStreet?.meshes!==3)throw Error('Expected the three active Ultra storefront meshes');
   if(state.quality!==tier&&tier!=='auto')throw Error('Matched visual fixture did not have requested quality');
   if(Math.hypot(...state.eye.map((x,i)=>x-fixture.eye[i]))>.2)throw Error('Matched visual camera diverged from the '+view.name+' fixture: '+JSON.stringify({wanted:fixture.eye,observed:state.eye}));
   const filename=label+'-'+view.name+'-'+time.name+'.png';
   await page.screenshot({path:path.join(folder,filename),scale:'device',animations:'allow'});
   shots.push({filename,fixture,...state});
  }
 }
 return shots;
}
