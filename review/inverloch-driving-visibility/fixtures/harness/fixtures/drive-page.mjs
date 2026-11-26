export async function prepareDrive({camera,tier,route}){
  const H=window.__pixelHost,T=H.town,C=T.car,d=T.pair.cur.__pixelScene,F=H.fly,m=T.model;
  const r=d.renderer,gl=r.getContext(),dbg=gl.getExtension('WEBGL_debug_renderer_info');
  if(tier!=='auto'&&d.quality!==tier)throw Error('Active quality differs from pinned '+tier);
  if(!T.walk)document.querySelector('#bsTownMode').click();
  if(!T.walk||!C?.enterCar||!C.drivePath)throw Error('Normal town driving controls unavailable.');
  const c=m.nearestCar(...camera.near,3);
  if(!c||Math.hypot(c.x-camera.near[0],c.z-camera.near[1])>.1)throw Error('Missing native fixture ute');
  const key=c.id.map(x=>Math.round(x*4)).join('_'),parked=d.life.parkedAt.get(key);
  if(!parked)throw Error('Native parked ID unavailable');
  const [x,z]=route.points[0];
  T.tween=null;F.keys.clear();F.stick.x=F.stick.y=0;F.goTo=null;
  m.setMinutes(720);
  if(!C.enterCar({...c,x,z,heading:route.firstHeading,distance:0}))throw Error('Normal car handover refused the known native ute');
  const actual=C.where();
  if(actual?.kind!=='car'||!d.life.drivenAt.has(key)||Math.hypot(actual.x-x,actual.z-z)>.1)throw Error('Handover or start pose mismatch');
  const device=await navigator.userAgentData?.getHighEntropyValues?.(['model','platformVersion','fullVersionList']).catch(()=>null);
  return {id:c.id,key,carShape:d.life.parkedSets[parked.set]?.shape,quality:d.quality,actualFrameTarget:d.pacing?.targetFps,preset:T.pair.initialPreset,selection:window.__pixelStable,
    gpu:dbg?gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL):gl.getParameter(gl.RENDERER),buffer:[r.domElement.width,r.domElement.height],
    dpr:devicePixelRatio,pixelRatio:r.getPixelRatio(),viewport:[innerWidth,innerHeight],orientation:screen.orientation?.type,
    device,ua:navigator.userAgent,deviceMemory:navigator.deviceMemory,hardwareConcurrency:navigator.hardwareConcurrency,
    placed:{x,z,heading:route.firstHeading},nativeParked:{x:c.x,z:c.z,heading:c.heading},registryKey:key,
    stamp:document.querySelector('[name=an-commit]')?.content};
}

export function beginDrive({route,seconds,oneLap,key}){
  const T=window.__pixelHost.town,C=T.car,d=T.pair.cur.__pixelScene,r=d.renderer,original=r.render;
  const points=route.points,legs=[],L=route.metres;let along=0;
  for(let i=1;i<points.length;i++){const [x,z]=points[i-1],dx=points[i][0]-x,dz=points[i][1]-z,len=Math.hypot(dx,dz);legs.push({x,z,dx,dz,len,along});along+=len;}
  const path=[];const repeats=Math.ceil(seconds*35/L)+3;
  for(let i=0;i<repeats;i++)for(const q of points.slice(0,-1))path.push(...q);
  path.push(...points[0]);
  // The GPS applies ordinary steering, throttle, braking, road/vehicle contact and recovery
  // to this occupied native vehicle. Every build receives precisely the same path.
  if(!C.drivePath(path,{hoon:false}))throw Error('Ordinary GPS drivePath rejected the circuit');
  const start=performance.now(),deadline=start+seconds*1000;
  const s=window.__sustained={r:[],f:[],t:[],end:null,reasons:[],start,utcStartMs:performance.timeOrigin+start,oneLap,seconds};
  let prevR=null,prevF=null,raf,clock,stop,past=null,pathAt=0,trip=0,camTrip=0,peak=0,lastAdvance=0,offSince=null;
  const rel=()=>performance.now()-start;
  function project(x,z){
    let best=null;for(const a of legs){
      const f=Math.max(0,Math.min(1,((x-a.x)*a.dx+(z-a.z)*a.dz)/(a.len*a.len)));
      const dist=Math.hypot(a.x+a.dx*f-x,a.z+a.dz*f-z);
      if(!best||dist<best.dist)best={dist,at:a.along+a.len*f};
    }return best;
  }
  function finish(why){
    if(s.end!==null)return;s.end=Math.min(rel(),seconds*1000);
    if(why)s.reasons.push(why);r.render=original;cancelAnimationFrame(raf);clearInterval(clock);clearTimeout(stop);
    document.removeEventListener('visibilitychange',visibility);C.autoStop();
  }
  function visibility(){if(document.visibilityState!=='visible')finish('Benchmark tab became hidden');}
  function position(){
    const car=C.where(),now=rel(),rec=d.life.drivenAt.get(key);
    if(car?.kind!=='car'||!rec||Math.hypot(car.x-rec.x,car.z-rec.z)>2){finish('Original native ute lost its occupied/rendered pose');return;}
    const {x,z,heading,speed}=car, p=project(x,z),eye=d.camera.position.toArray();
    if(past){let delta=p.at-past.mod;if(delta>L/2)delta-=L;else if(delta< -L/2)delta+=L;pathAt+=delta;
      trip+=Math.hypot(x-past.x,z-past.z);camTrip+=Math.hypot(eye[0]-past.eye[0],eye[2]-past.eye[2]);}
    past={mod:p.at,x,z,eye};
    if(pathAt>peak+2){peak=pathAt;lastAdvance=now;}
    const ds=Math.hypot(eye[0]-x,eye[2]-z),visible=document.visibilityState;
    s.t.push({ms:now,x,z,heading,speed,eye,followMetres:ds,distance:trip,routeMetres:pathAt,lateral:p.dist,cameraMetres:camTrip,lap:Math.floor(Math.max(0,pathAt)/L),auto:C.autoOn(),buffer:[r.domElement.width,r.domElement.height],quality:d.quality});
    if(visible!=='visible'){finish('Benchmark tab became hidden');return;}
    if(T.pair.cur.__pixelScene!==d||T.pair.next){finish('Active model/quality changed');return;}
    if(p.dist>14){offSince??=now;}else offSince=null;
    if(offSince!==null&&now-offSince>5000){finish('More than 14 m off the fixed route for 5 seconds');return;}
    if(now-lastAdvance>15000){finish('Less than 2 m new forward route progress in 15 seconds');return;}
    if(now>12000&&!C.autoOn()){finish('Native GPS abandoned its fixed path');return;}
    if(now>12000&&trip>15&&camTrip<trip*.45){finish('Chase camera did not follow occupied ute');return;}
    if(oneLap&&pathAt>=L+10)finish(null);
  }
  function frame(t){if(t>=start&&t<=deadline){s.f.push([t-start,prevF===null?null:t-prevF]);prevF=t;}if(s.end===null)raf=requestAnimationFrame(frame);}
  r.render=function(scene,cam){const v=original.apply(this,arguments);
    if(scene===d.scene&&cam===d.camera&&s.end===null){const t=performance.now();
      if(t<=deadline){s.r.push([t-start,prevR===null?null:t-prevR,r.info.render.calls,r.info.render.triangles,r.domElement.width,r.domElement.height]);prevR=t;}}
    return v;};
  document.addEventListener('visibilitychange',visibility);raf=requestAnimationFrame(frame);
  clock=setInterval(position,500);
  stop=setTimeout(()=>{position();finish(oneLap&&pathAt<L+10?'One-lap pilot reached duration cap before first lap plus 10 m':null);},seconds*1000);
  position();
  return {utcStartMs:s.utcStartMs,perfStartMs:start,timeOriginMs:performance.timeOrigin,routeLength:L,initial:s.t[0]};
}

export function readDrive({ri,fi,ti}){
  const s=window.__sustained;if(!s)throw Error('Drive page reloaded; benchmark disappeared');
  return {r:s.r.slice(ri),f:s.f.slice(fi),t:s.t.slice(ti),end:s.end,reasons:s.reasons,elapsed:performance.now()-s.start};
}
