export async function runDrive({name,route}){
 const H=window.__pixelHost,T=H.town,C=T.car,d=T.pair.cur.__pixelScene,r=d.renderer,cam=d.camera;
 const g=r.getContext(),dbg=g.getExtension('WEBGL_debug_renderer_info'),gps=route.points.flat();
 const active=C.where();C.wait=false;
 if(!C.drivePath(gps,{hoon:false}))throw Error('Navigation rejected '+name);
 const start=performance.now(), samples=[],buffers={},images={};
 const png=()=>r.domElement.toDataURL('image/png').split(',')[1];
 const native=r.render;let capture;
 const grab=await new Promise((resolve,reject)=>{
  const timeout=setTimeout(()=>{r.render=native;reject(Error('No 33m progress '+name+' '+JSON.stringify(C.where())))},18000);
  r.render=function(scene,camera){
   const v=native.apply(this,arguments);
   if(scene!==d.scene||camera!==cam)return v;
   const t=performance.now(),car=C.where(),b=r.domElement.width+'x'+r.domElement.height;
   buffers[b]=(buffers[b]??0)+1;samples.push(t);
   const dist=Math.hypot(car.x-active.x,car.z-active.z);
   if(dist<33)return v;
   clearTimeout(timeout);r.render=native;
   const pos=cam.position.clone(),quat=cam.quaternion.clone(),proj=cam.projectionMatrix.clone();
   capture={pos,quat,proj};
   images[name+'-moving']=png();
   resolve({distance:dist,speed:car.speed,pos:pos.toArray(),quat:quat.toArray(),frameTime:t-start,buffer:b,cssFilter:getComputedStyle(r.domElement).filter,cssTransform:getComputedStyle(r.domElement).transform,near:cam.near,far:cam.far,fov:cam.fov});
   return v;
  };
 });
 C.autoStop();C.wait=true;
 await new Promise(ok=>setTimeout(ok,350));
 const held=C.where();
 const savepos=cam.position.clone(),savequat=cam.quaternion.clone(),saveproj=cam.projectionMatrix.clone();
 cam.position.copy(capture.pos);cam.quaternion.copy(capture.quat);cam.projectionMatrix.copy(capture.proj);cam.updateMatrixWorld();
 r.render(d.scene,cam);images[name+'-stopped']=png();
 const ratio=r.getPixelRatio(),fixed=d.quality==='medium'?1.3:2;
 r.setPixelRatio(fixed);
 r.render(d.scene,cam);images[name+'-fixed']=png();r.setPixelRatio(ratio);
 const mapped=new Set();d.scene.traverse(o=>{const m=o.material;for(const a of Array.isArray(m)?m:[m])if(a?.map?.anisotropy===4)mapped.add(a.map);});
 for(const tex of mapped){tex.anisotropy=Math.min(8,r.capabilities.getMaxAnisotropy());tex.needsUpdate=true;}
 r.render(d.scene,cam);images[name+'-aniso8']=png();
 for(const tex of mapped){tex.anisotropy=4;tex.needsUpdate=true;}
 cam.position.copy(savepos);cam.quaternion.copy(savequat);cam.projectionMatrix.copy(saveproj);cam.updateMatrixWorld();C.wait=false;
 const times=samples.slice(1).map((t,i)=>t-samples[i]).sort((a,b)=>a-b);const p=q=>times[Math.floor(q*(times.length-1))];
 return {name,...grab,stoppedSpeed:held.speed,frames:samples.length,buffers,ratio,fixed,textureOverrides:mapped.size,frameMs:[p(.5),p(.95)],gpu:dbg?g.getParameter(dbg.UNMASKED_RENDERER_WEBGL):null,images};
}
export function runView({name,type,tier,pair}){
 const d=window.__pixelHost.town.pair.cur.__pixelScene,r=d.renderer,cam=d.camera,sc=d.scene;
 if(d.quality!==tier)throw Error('Expected '+tier+' got '+d.quality);
 const ratio=r.getPixelRatio(),fixed=tier==='medium'?1.3:2;r.setPixelRatio(fixed);
 const images={};const snap=k=>{r.render(sc,cam);images[name+'-'+k]=r.domElement.toDataURL().split(',')[1];};
 snap('natural');const stats={draws:r.info.render.calls,triangles:r.info.render.triangles,residentTextures:r.info.memory.textures};
 if(pair){
  const mat=sc.getObjectByName('terrain').material,hook=mat.onBeforeCompile,key=mat.customProgramCacheKey,oldKey=key.call(mat);
  const from='min(here, min(min(e, w), min(n, t))), max(here, max(max(e, w), max(n, t)))';
  const to='min(min(e, w), min(n, t)), max(max(e, w), max(n, t))';
  mat.onBeforeCompile=function(shader,renderer){hook.call(this,shader,renderer);if(!shader.fragmentShader.includes(from))throw Error('Unexpected terrain shader');shader.fragmentShader=shader.fragmentShader.replace(from,to);};
  mat.customProgramCacheKey=()=>oldKey+'__experimentalOldClamp';
  mat.needsUpdate=true;snap('old-clamp');
  mat.onBeforeCompile=hook;mat.customProgramCacheKey=key;mat.needsUpdate=true;snap('restored');
 }
 if(type==='replay'){
  const before=[],clearance=cam.position.y-d.hf.yAt(cam.position.x,cam.position.z);
  sc.traverse(o=>{if(o.isInstancedMesh)before.push([o,o.visible]);});
  d.life.updateParkedLod(cam.position,clearance,[1e5,2e5,3e5]);
  d.trees.updateLod(cam.position,clearance,[1e5,2e5,3e5]);
  snap('near-lod'); stats.nearTriangles=r.info.render.triangles;
  for(const [mesh,visible] of before)mesh.visible=visible;
  r.setPixelRatio(1);snap('1x');r.setPixelRatio(fixed);snap('restored');
  const ancestors=[];for(let el=r.domElement;el;el=el.parentElement){const st=getComputedStyle(el);if(st.filter!=='none'||st.opacity!=='1')ancestors.push([el.tagName,el.className,st.filter,st.opacity]);}
  stats.cssEffects=ancestors;
 }
 if(type==='depth'){
  const roads=sc.getObjectByName('roads'),Ctor=sc.getObjectByName('road-markings').material.constructor;
  const road=new Ctor({color:0xff0000,side:roads.material.side,polygonOffset:roads.material.polygonOffset,polygonOffsetFactor:roads.material.polygonOffsetFactor,polygonOffsetUnits:roads.material.polygonOffsetUnits,fog:false,toneMapped:false});
  const terrain=new Ctor({color:0x00ff00,fog:false,toneMapped:false});
  const states=[],grounds=[];
  const prevBg=sc.background;sc.background=null;
  sc.traverse(o=>{if(o.isMesh||o.isSprite||o.isLine||o.isPoints){states.push([o,o.material,o.visible]);if(o===roads)o.material=road;else if(o.name==='terrain'){o.material=terrain;grounds.push(o);}else o.visible=false;}});
  if(!grounds.length)throw Error('No terrain meshes');
  snap('depth');grounds.forEach(o=>{o.visible=false});snap('roadfootprint');
  for(const [o,m,visible] of states){o.material=m;o.visible=visible;}sc.background=prevBg;road.dispose();terrain.dispose();
 }
 const info={eye:cam.position.toArray(),quat:cam.quaternion.toArray(),buffer:[r.domElement.width,r.domElement.height],fixed,adaptiveRatio:ratio};
 r.setPixelRatio(ratio);return {...stats,...info,images};
}
export async function runFilm(route){
 const T=window.__pixelHost.town,C=T.car,F=window.__pixelHost.fly,r=T.pair.cur.__pixelScene.renderer;
 const sleep=ms=>new Promise(ok=>setTimeout(ok,ms));
 const stream=r.domElement.captureStream(60),chunks=[];
 const video=new MediaRecorder(stream,{mimeType:'video/webm;codecs=vp9',videoBitsPerSecond:10500000});
 video.ondataavailable=e=>chunks.push(e.data);
 const done=new Promise(resolve=>{video.onstop=resolve;});const log=[];
 const p0=C.where();video.start();
 if(!C.drivePath(route.points.flat(),{hoon:false}))throw Error('Drive declined');
 for(let i=0;i<8;i++){await sleep(1000);const p=C.where();log.push([i+1,p.x,p.z,p.speed]);}
 C.autoStop();F.keys.add('Space');
 for(let i=0;i<13;i++){await sleep(1000);const p=C.where();log.push([i+9,p.x,p.z,p.speed]);if(Math.abs(p.speed)<.05)break;}
 await sleep(1800);
 F.keys.delete('Space');video.stop();await done;stream.getTracks().forEach(t=>t.stop());
 const p=C.where();const distance=Math.hypot(p0.x-p.x,p0.z-p.z);
 if(distance<50||Math.abs(p.speed)>1)throw Error('Unexpected gameplay film '+JSON.stringify({distance,speed:p.speed}));
 const str=await new Promise(resolve=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.readAsDataURL(new Blob(chunks,{type:video.mimeType}));});
 return {log,distance,buffer:[r.domElement.width,r.domElement.height],bytes:str.split(',')[1]};
}
