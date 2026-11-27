import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import {serve} from '../graphics/drive/fixtures/serve.mjs';
import {prepareDrive,beginDrive,readDrive} from '../graphics/drive/fixtures/drive-page.mjs';
import {metric,summarize} from '../graphics/drive/fixtures/drive-stats.mjs';
import {route as circuit} from '../graphics/drive/fixtures/drive-route.mjs';
import {runFilm} from '../driving-visibility/probes.mjs';
import {placeView} from '../graphics/drive/capture-views.mjs';

const root=path.dirname(fileURLToPath(import.meta.url));
const [label,siteArg,tier='medium',weatherArg='baseline',mode='timing',bundleArg]=process.argv.slice(2);
const out=path.join(root,label),site=path.resolve(root,siteArg);
const bundle=path.resolve(root,bundleArg??path.join(site,'town3d/inverloch-model.js'));
const hash=data=>createHash('sha256').update(data).digest('hex');
const hostSha=hash(await fs.readFile(path.join(site,'inverloch/explore/index.html')));
const bundleSha=hash(await fs.readFile(bundle));
const fps=tier==='low'?30:60;
const data=JSON.parse(await fs.readFile(path.join(site,'town3d/town.json'),'utf8'));
const [x0,z0,x1,z1]=data.roads[38][5].slice(2,6).map(v=>v/10);
const len=Math.hypot(x1-x0,z1-z0),ux=(x1-x0)/len,uz=(z1-z0)/len;
const metres=Math.floor((len-23)/4)*4;
const points=Array.from({length:metres/4+1},(_,i)=>[x0+ux*(4*i+14)+uz*1.65,z0+uz*(4*i+14)-ux*1.65]);
const cuttriss={name:'Cuttriss Street',source:'town.json road 38 segment 1 and 1.65 m lane offset',points,metres,firstHeading:Math.atan2(ux,uz)};
const browserArgs=['--enable-gpu','--use-angle=d3d11','--force_high_performance_gpu','--disable-renderer-backgrounding','--disable-background-timer-throttling','--disable-backgrounding-occluded-windows','--no-first-run'];
const {chromium}=await import(pathToFileURL(process.env.TIDEWIRE_PLAYWRIGHT));
const profiles=weatherArg.split(',');
const matchedViews=JSON.parse(await fs.readFile(path.join(root,'../driving-visibility/current-medium-r2/measurements.json'),'utf8')).drives;
const report={label,hostSha,bundleSha,site,bundle,tier,fps,mode,runs:[]};
await fs.mkdir(out);
const save=()=>fs.writeFile(path.join(out,'results.json'),JSON.stringify(report));
let browser;
function stagedWeather({condition,mode}){
 if(condition==='baseline')return null;
 const epochs={clear:1782000331,drift:1782000376,showers:1782000450,storm:1782000150.3,flash:1782000154.62};
 const epoch=epochs[condition];
 if(epoch===undefined)throw Error('Unknown weather condition '+condition);
 const d=window.__pixelHost.town.pair.cur.__pixelScene;
 if(typeof d.weatherTime!=='function')throw Error('Weather time unavailable in candidate');
 const start=performance.now();
 const frozen=mode==='images';
 d.weatherTime=()=>epoch+(frozen?0:(performance.now()-start)/1000);
 return {epoch,frozen};
}
function weatherObservation(){
 const d=window.__pixelHost.town.pair.cur.__pixelScene;
 const cloud=d.clouds?.uniforms;
 const rain=d.scene.getObjectByName('local rain streaks');
 const state=d.weather||d.coastalWeather;
 const sky=d.atmosphere?.sky?.material?.uniforms,ground=d.coastalHaze?.clouds?.uniforms;
 return {epoch:d.weatherTime?.(),
   cover:cloud?.uCloudCover?.value,offset:cloud?.uCloudOffset?.value?.toArray(),flash:cloud?.uCloudFlash?.value,
   shadowStrength:d.atmosphere?.cloudShadowStrength?.value,
   sunDir:d.atmosphere?.sunDir?.toArray(),
   sharedFields:cloud&&sky&&ground?['uCloudMap','uCloudOffset','uCloudCover'].every(k=>cloud[k]===sky[k]&&cloud[k]===ground[k]):undefined,
   age:state?.age,wetness:state?.wetness,storm:state?.storm,lines:d.renderer.info.render.lines,
   rainVisible:rain?.visible,rain:state?.rain??(rain?.visible?rain.material.uniforms.uRain.value:0),rainShaderValue:rain?.material?.uniforms?.uRain?.value,dropCount:rain?.geometry?.attributes?.aDrop?.count/2||0};
}
async function saveImages(prefix,imageMap){
 for(const [name,value] of Object.entries(imageMap))await fs.writeFile(path.join(out,prefix+'-'+name+'.png'),Buffer.from(value,'base64'));
}
try{
 browser=await chromium.launch({headless:true,executablePath:process.env.TIDEWIRE_CHROME,args:browserArgs});
 const browserVersion=browser.version();
 report.profile={browserVersion,viewport:[426,780],deviceScaleFactor:3,isMobile:true,hasTouch:true,reducedMotion:'no-preference',nativeGpu:true};
 const options={viewport:{width:426,height:780},screen:{width:426,height:780},deviceScaleFactor:3,isMobile:true,hasTouch:true,reducedMotion:'no-preference',timezoneId:'Australia/Melbourne',serviceWorkers:'block',userAgent:'Mozilla/5.0 (Linux; Android 17; Pixel 11 Pro) AppleWebKit/537.36 Chrome/'+browserVersion+' Mobile Safari/537.36'};
 for(const condition of profiles)for(const [street,route,seconds] of [['abeckett',circuit,tier==='medium'?40:15],['cuttriss',cuttriss,tier==='medium'?17:12]]){
  if(process.env.INV_WEATHER_STREET&&street!==process.env.INV_WEATHER_STREET)continue;
  if((mode==='clip'||mode==='event'||mode==='recovery'||mode==='ripples')&&street!=='cuttriss')continue;
  const web=await serve({folder:path.resolve(root,'../graphics/drive/fixtures'),sitePath:site,bundlePath:bundle,pinnedHash:bundleSha,hostHash:hostSha,tier,fps,role:label});
  report.assets={bundleBytes:web.bundleBytes,bundleGzipBytes:web.gzip6,modelRoute:web.modelRoute};
  const context=await browser.newContext(options);
  const run={condition,street,routeHash:hash(JSON.stringify(route.points)),routeMetres:route.metres,pageErrors:[],consoleErrors:[],responseErrors:[]};
  report.runs.push(run);
  try{
   const pg=await context.newPage();
   pg.on('pageerror',e=>run.pageErrors.push(e.message));
   pg.on('console',m=>{if(m.type()==='error')run.consoleErrors.push(m.text());});
   pg.on('response',r=>{if(r.status()>=400)run.responseErrors.push([new URL(r.url()).pathname,r.status()]);});
   await pg.goto('http://127.0.0.1:'+web.server.address().port+'/3dModels/inverloch/explore/',{waitUntil:'domcontentloaded'});
   await pg.waitForFunction(()=>window.__pixelHost?.town?.pair?.cur?.__pixelScene?.renderer&&window.__pixelStable&&!document.querySelector('.ex-load'),null,{timeout:85000});
   await pg.evaluate(()=>document.querySelector('.bs-wel-go')?.click());
   run.state=await pg.evaluate(prepareDrive,{camera:web.camera,tier,route});
   if(!/nvidia/i.test(run.state.gpu)||run.state.viewport.join(',')!=='426,780'||run.state.dpr!==3)throw Error('Unexpected emulated profile');
   if(run.state.actualFrameTarget!=null&&run.state.actualFrameTarget!==fps)throw Error('Unexpected frame target');
   if(mode==='event'){
    const look=await pg.evaluate(()=>{
      const d=window.__pixelHost.town.pair.cur.__pixelScene, inlet=d.places.find(p=>p.id==='inlet');
      const x=inlet.x-32,z=inlet.z-800;
      return {eye:[x,Math.max(1,d.hf.yAt(x,z))+7,z],target:[inlet.x,155,inlet.z],minutes:720};
    });
    await pg.evaluate(placeView,look);
    await pg.keyboard.press('Shift');
   }
   run.applied=await pg.evaluate(stagedWeather,{condition,mode});
   await pg.waitForTimeout(2200);
   run.weatherStart=await pg.evaluate(weatherObservation);
   console.log(condition,street,'started',mode,seconds,'seconds');
   if(mode==='timing'){
    run.timing=await pg.evaluate(beginDrive,{route,key:run.state.registryKey,seconds});
    await pg.waitForFunction(()=>window.__sustained?.end!==null,null,{timeout:(seconds+10)*1000});
    const result=await pg.evaluate(readDrive,{ri:0,fi:0,ti:0});
    run.reasons=result.reasons;
    run.renders=result.r;run.rafs=result.f;run.routeTrace=result.t;
    run.summary=summarize(run,result.end);
    run.speedKmh=metric(run.routeTrace.map(t=>t.speed*3.6));
    run.transferBytes=web.requests.filter(([,method])=>method==='GET').reduce((sum,[,,size])=>sum+size,0);
    run.requests=web.requests;
    const s=run.summary.minutes[0];
    console.log(condition,street,JSON.stringify([s.renderHz,s.renderIntervalMs,s.rafIntervalMs,s.drawsPerRender,s.trianglesPerRender,s.distanceDrivenM]),run.reasons);
   }else if(mode==='ripples'){
    const view=await pg.evaluate(()=>{
      const d=window.__pixelHost.town.pair.cur.__pixelScene,h=d.hf,p=d.places.find(p=>p.id==='inlet');
      const tide=d.water.uniforms.uTide.value, waterY=d.water.mesh.position.y;
      const offsets=[[-6,-6],[-6,6],[6,-6],[6,6],[0,0]];
      let preferred=null;
      for(let ix=-22;ix<=22;ix++)for(let iz=-22;iz<=22;iz++){
        const x=p.x+12*ix,z=p.z+12*iz,dist=ix*ix+iz*iz;
        if(preferred&&dist>=preferred.dist)continue;
        if(!offsets.every(([dx,dz])=>tide-h.metresAt(x+dx,z+dz)>.32&&h.exposureAt(x+dx,z+dz)<.2))continue;
        preferred={x,z,dist,depth:tide-h.metresAt(x,z),exposure:h.exposureAt(x,z)};
      }
      if(!preferred)throw Error('No sufficiently deep nearby sheltered water');
      return {eye:[preferred.x-2,waterY+1.25,preferred.z-5],target:[preferred.x,waterY,preferred.z],minutes:720,...preferred};
    });
    await pg.evaluate(placeView,view);
    await pg.waitForTimeout(550);
    const ripple=await pg.evaluate(view=>{
      const d=window.__pixelHost.town.pair.cur.__pixelScene,r=d.renderer;
      const u=d.water.uniforms.uInletRain;
      const rain=d.scene.getObjectByName('local rain streaks');
      if(d.quality!=='ultra'||!u||!rain?.visible||u.value<=0)throw Error('Active Ultra water rain fixture unavailable');
      if(Math.hypot(...d.camera.position.toArray().map((v,i)=>v-view.eye[i]))>.2)throw Error('Water camera pose drift');
      const ratio=r.getPixelRatio();
      const report={view,inletRain:u.value,buffer:null,waveTime:d.water.uniforms.uTime.value,rainStreaks:rain.visible,images:{}};
      function snap(){r.render(d.scene,d.camera);return r.domElement.toDataURL().split(',')[1];}
      try{
        r.setPixelRatio(2);
        report.buffer=[r.domElement.width,r.domElement.height];
        report.images['ripples-on']=snap();
        u.value=0;
        report.images['ripples-off']=snap();
      }finally{u.value=report.inletRain;r.setPixelRatio(ratio);}
      return report;
    },view);
    await saveImages(condition,ripple.images);
    delete ripple.images;
    run.ripples=ripple;
   }else if(mode==='recovery'){
    const phases={wet:1782000460,drying:1782000534,dry:1782000570};
    run.recovery={};
    for(const [phase,epoch] of Object.entries(phases)){
      await pg.evaluate(t=>{window.__pixelHost.town.pair.cur.__pixelScene.weatherTime=()=>t;},epoch);
      await pg.waitForTimeout(350);
      run.recovery[phase]=await pg.evaluate(weatherObservation);
    }
    const {wet,drying,dry}=run.recovery;
    if(!wet.rainVisible||wet.wetness<.99||drying.rainVisible||!(drying.wetness>0&&drying.wetness<1)||dry.rainVisible||dry.wetness!==0)throw Error('Wet-to-dry scene response failed');
    console.log('Wetness recovery',wet.wetness,drying.wetness,dry.wetness);
   }else if(mode==='event'){
    const live=await pg.evaluate(async()=>{
      const T=window.__pixelHost.town,d=T.pair.cur.__pixelScene,r=d.renderer;
      const bolt=d.scene.getObjectByName('inlet lightning');
      if(!bolt||!T.snd?.thunder)throw Error('Active inlet bolt or host thunder callback missing');
      const adopted=T.snd.thunder, original=r.render, audioStart=AudioBufferSourceNode.prototype.start;
      const observation={events:[],images:{}}, start=performance.now();
      let current=null,wasVisible=false;
      const snap=()=>r.domElement.toDataURL().split(',')[1];
      T.snd.thunder=function(strength){
        current={kind:'thunder',epoch:d.weatherTime(),strength,audioSources:[]};
        observation.events.push(current);
        try{return adopted.apply(this,arguments);}
        finally{current=null;}
      };
      AudioBufferSourceNode.prototype.start=function(){
        if(current)current.audioSources.push({context:this.context.state,when:arguments[0]});
        return audioStart.apply(this,arguments);
      };
      try{
        await new Promise(resolve=>{
          r.render=function(scene,cam){
            const result=original.apply(this,arguments);
            if(scene!==d.scene||cam!==d.camera)return result;
            if(!observation.images['pre-flash'])observation.images['pre-flash']=snap();
            if(bolt.visible&&!wasVisible){
              const epoch=d.weatherTime();
              const sphere=bolt.geometry.boundingSphere;
              const ndc=sphere.center.clone().project(d.camera).toArray();
              const center=bolt.geometry.attributes.position;
              const tip=sphere.center.clone().fromBufferAttribute(center,center.count-1);
              const event={kind:'flash',epoch,eye:d.camera.position.toArray(),center:sphere.center.toArray(),ndc,tip:tip.toArray(),opacity:bolt.material.opacity};
              observation.events.push(event);
              if(!observation.images['live-flash'])observation.images['live-flash']=snap();
            }
            wasVisible=bolt.visible;
            return result;
          };
          setTimeout(resolve,14000);
        });
      }finally{r.render=original;T.snd.thunder=adopted;AudioBufferSourceNode.prototype.start=audioStart;}
      observation.elapsedMs=performance.now()-start;
      return observation;
    });
    await saveImages(condition,live.images);
    delete live.images;
    run.event=live;
    const flash=live.events.find(e=>e.kind==='flash'),thunder=live.events.find(e=>e.kind==='thunder');
    if(!flash||Math.max(...flash.ndc.slice(0,2).map(Math.abs))>=1||!thunder||thunder.epoch-flash.epoch<.34||!thunder.audioSources.some(s=>s.context==='running')){
     throw Error('Expected visible flash, delayed host thunder, and running Web Audio source: '+JSON.stringify(live.events));
    }
    console.log('Actual strike → thunder',thunder.epoch-flash.epoch,'s',thunder.audioSources);
   }else if(mode==='images'){
    const {pos:eye,quat:[x,y,z,w]}=matchedViews.find(v=>v.name===street);
    const dir=[-2*(x*z+w*y),-2*(y*z-w*x),2*(x*x+y*y)-1];
    const target=eye.map((v,i)=>v+dir[i]*70);
    await pg.evaluate(placeView,{eye,target,minutes:720});
    await pg.waitForTimeout(1300);
    const shot=await pg.evaluate(({street,eye})=>{
      const d=window.__pixelHost.town.pair.cur.__pixelScene,r=d.renderer;
      const actual=d.camera.position.toArray();
      if(Math.hypot(...actual.map((v,i)=>v-eye[i]))>.2)throw Error('Matched camera does not agree with recorded world pose');
      const adaptiveRatio=r.getPixelRatio(),captureRatio=d.quality==='ultra'?2:d.quality==='low'?1:1.3;
      r.setPixelRatio(captureRatio);r.render(d.scene,d.camera);
      const result={eye:actual,quat:d.camera.quaternion.toArray(),buffer:[r.domElement.width,r.domElement.height],
        adaptiveRatio,captureRatio,draws:r.info.render.calls,triangles:r.info.render.triangles,
        images:{[street]:r.domElement.toDataURL().split(',')[1]}};
      const rain=d.scene.getObjectByName('local rain streaks');
      if(rain?.visible){
        try{
          rain.visible=false;r.render(d.scene,d.camera);
          result.images[street+'-rain-hidden']=r.domElement.toDataURL().split(',')[1];
        }finally{rain.visible=true;}
      }
      const wetness=d.showers?.wetness;
      if(wetness?.value>0){
        const saved=wetness.value;
        try{
          wetness.value=0;r.render(d.scene,d.camera);
          result.images[street+'-wetness-off']=r.domElement.toDataURL().split(',')[1];
        }finally{wetness.value=saved;}
      }
      const shadow=d.atmosphere?.cloudShadowStrength;
      if(shadow?.value>0){
        const saved=shadow.value;
        try{
          shadow.value=0;r.render(d.scene,d.camera);
          result.images[street+'-shadow-off']=r.domElement.toDataURL().split(',')[1];
        }finally{shadow.value=saved;}
      }
      r.setPixelRatio(adaptiveRatio);
      return result;
    },{street,eye});
    await saveImages(condition,shot.images);
    delete shot.images;
    run.shot=shot;
   }else if(mode==='clip'&&street==='cuttriss'){
    const film=await pg.evaluate(runFilm,cuttriss);
    await fs.writeFile(path.join(out,condition+'-cuttriss.webm'),Buffer.from(film.bytes,'base64'));
    delete film.bytes;
    run.film=film;
   }
   run.weatherEnd=await pg.evaluate(weatherObservation);
  }catch(e){run.error=e.stack;throw e;}
  finally{await save();await context.close();web.server.closeAllConnections();await new Promise(ok=>web.server.close(ok));}
 }
}finally{await browser?.close();}










