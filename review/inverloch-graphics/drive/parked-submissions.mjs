import {metric} from './fixtures/drive-stats.mjs';

function stageCamera(pose){
 const H=window.__pixelHost,T=H.town,F=H.fly,d=T.pair.cur.__pixelScene;
 const car=T.model.nearestCar(...pose.near,3);
 if(!car||Math.hypot(car.x-pose.near[0],car.z-pose.near[1])>.1)throw Error('Fixed-camera native ute missing');
 const {eye,target}=pose,yaw=Math.atan2(eye[0]-target[0],eye[2]-target[2]),pitch=Math.atan2(target[1]-eye[1],Math.hypot(target[0]-eye[0],target[2]-eye[2]));
 F.walk=null;T.tween=null;F.pos.set(...eye);F.yaw=yaw;F.pitch=pitch;F.goTo=null;F.wv=null;
 T.model.setCamera(...eye,yaw,pitch);T.model.setMinutes(720);
 const k=car.id.map(u=>Math.round(u*4)).join('_'),slot=d.life.parkedAt.get(k);
 return {car,k,shape:d.life.parkedSets[slot.set].shape,quality:d.quality,wantedEye:eye,target,yaw,pitch};
}
function fixedSample(milliseconds){
 const d=window.__pixelHost.town.pair.cur.__pixelScene,r=d.renderer,camera=d.camera,render=r.render,rows=[],initialCamera=camera.position.toArray(),start=performance.now();let last=null;
 return new Promise(done=>{
   r.render=function(scene,cam){
    const v=render.apply(this,arguments);if(scene===d.scene&&cam===camera){const t=performance.now();rows.push([t-start,last!==null?t-last:null,r.info.render.calls,r.info.render.triangles,r.domElement.width,r.domElement.height]);last=t;}return v;
   };
   setTimeout(()=>{r.render=render;done({elapsed:performance.now()-start,rows,initialCamera,endCamera:camera.position.toArray(),direction:camera.getWorldDirection(camera.position.clone()).toArray()});},milliseconds);
 });
}
function countCarSubmissions(){
 const T=window.__pixelHost.town,d=T.pair.cur.__pixelScene,r=d.renderer,life=d.life;
 const mark=new Map(),totals={},raw=[];
 const tag=(label,obj,kind)=>{if(obj?.isMesh)mark.set(obj,{label,kind});};
 for(const [i,s] of life.parkedSets.entries())if(s){tag('parked '+i+' body',s.body,s.shape);tag('parked '+i+' trim',s.trim,s.shape);}
 const original=r.renderBufferDirect;
 r.renderBufferDirect=function(camera,scene,geometry,material,object,group){
  const beforeCalls=r.info.render.calls,beforeTris=r.info.render.triangles;
  const ret=original.apply(this,arguments);
  const stamp=mark.get(object);if(stamp){const pass=camera===d.camera?'camera':'shadow',counts=totals[pass]??={draws:0,triangles:0,submittedInstances:0};
   const draws=r.info.render.calls-beforeCalls,triangles=r.info.render.triangles-beforeTris;counts.draws+=draws;counts.triangles+=triangles;counts.submittedInstances+=object.count;
   raw.push({pass,...stamp,draws,triangles,instances:object.count});}
  return ret;
 };
 try{r.render(d.scene,d.camera);}finally{r.renderBufferDirect=original;}
 if(!totals.camera||!totals.shadow)throw Error('Missing rendered parked cars or shadow submissions');
 const gl=r.getContext(),ex=gl.getExtension('WEBGL_debug_renderer_info');
 return {totals,raw,staticMeshes:mark.size,geometries:r.info.memory.geometries,textures:r.info.memory.textures,
  world:{calls:r.info.render.calls,triangles:r.info.render.triangles},buffer:[r.domElement.width,r.domElement.height],gpu:ex?gl.getParameter(ex.UNMASKED_RENDERER_WEBGL):null};
}
export async function checkParked(page,pose){
 const state=await page.evaluate(stageCamera,pose);await page.waitForTimeout(2000);
 const frame=await page.evaluate(fixedSample,6500);const probe=await page.evaluate(countCarSubmissions);
 if(Math.hypot(...frame.initialCamera.map((x,i)=>x-frame.endCamera[i]))>.1)throw Error('Fixed camera moved');
 return {state,probe,frame,summary:{renderFPS:+(1000*frame.rows.length/frame.elapsed).toFixed(2),intervalMs:metric(frame.rows.map(r=>r[1])),draws:metric(frame.rows.map(r=>r[2])),triangles:metric(frame.rows.map(r=>r[3]))}};
}
