import path from 'node:path';
import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {serve} from './fixtures/serve.mjs';
import {prepareDrive,beginDrive,readDrive} from './fixtures/drive-page.mjs';
import {checkParked} from './parked-submissions.mjs';
import {checkUltraControls} from './ultra-controls.mjs';
import {checkGraphicsControls} from './graphics-controls.mjs';
import {captureViews} from './capture-views.mjs';
import {checkTakeovers} from './npc-takeover.mjs';
import {route} from './fixtures/drive-route.mjs';
import {metric,summarize} from './fixtures/drive-stats.mjs';

const folder=path.dirname(fileURLToPath(import.meta.url)),oldHelpers=path.resolve(folder,'./fixtures');
const args=Object.fromEntries(process.argv.slice(2).reduce((acc,arg,i,all)=>i%2?acc:[...acc,[arg.replace(/^--/,''),all[i+1]]],[]));
const label=args.label, seconds=Number(args.seconds??300);
const tier=args.tier??'medium', fps=Number(args.fps??60);
if(!['auto','low','medium','high','ultra'].includes(tier)||![30,60].includes(fps))throw Error('Expected --tier auto|low|medium|high|ultra and --fps 30|60');
if(!/^[a-z0-9][a-z0-9-]{0,65}$/i.test(label??'')||!(seconds>=15&&seconds<=600))throw Error('Expected --label NAME and --seconds between 15 and 600');
const controlsInput=args.mode==='controls'?JSON.parse(await fs.readFile(path.join(folder,label+'-input.json'),'utf8')):null;
const expectedCommit=controlsInput?.commit??args.commit;
const site=path.resolve(controlsInput?.site??args.site??path.join(folder,'original-site'));
const bundle=path.resolve(args.bundle||path.join(site,'town3d/inverloch-model.js'));
const digest=async p=>createHash('sha256').update(await fs.readFile(p)).digest('hex');
const sha=await digest(bundle),hostSha=await digest(path.join(site,'inverloch/explore/index.html'));
if((args['bundle-sha']&&args['bundle-sha']!==sha)||(args['host-sha']&&args['host-sha']!==hostSha))throw Error('Pinned input hash mismatch');
const {chromium}=await import(pathToFileURL(process.env.TIDEWIRE_PLAYWRIGHT));
const hosted=await serve({folder:oldHelpers,role:label,port:0,tier,fps,controls:['controls','ultra-controls'].includes(args.mode),sitePath:site,bundlePath:bundle,pinnedHash:sha,hostHash:hostSha});
const dest=path.join(folder,label+'.json'),scratch=dest+'.tmp';
const errors=[],data={label,hostSha,modelSha:sha,site,bundle,seconds,routeHash:createHash('sha256').update(JSON.stringify(route.points)).digest('hex'),route,bundleGzip:hosted.gzip6,bundleBytes:hosted.bundleBytes,status:'starting',renders:[],rafs:[],routeTrace:[],npcTrace:[],errors};
let browser,wrote=false;
async function save(){await fs.writeFile(scratch,JSON.stringify(data));await fs.rename(scratch,dest);}
function liveTraffic(){const T=window.__pixelHost.town;return T.traffic?.cars.map((c,i)=>[i,c.x,c.z,c.v||0,!c.away&&c.y!=null])||[];}
try{
 await fs.writeFile(dest,'{}',{flag:'wx'});wrote=true;
 browser=await chromium.launch({headless:true,executablePath:process.env.TIDEWIRE_CHROME,args:['--enable-gpu','--use-angle=d3d11','--force_high_performance_gpu','--disable-background-timer-throttling','--disable-renderer-backgrounding','--disable-backgrounding-occluded-windows','--no-first-run']});
 const version=browser.version(),ua='Mozilla/5.0 (Linux; Android 17; Pixel 11 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/'+version+' Mobile Safari/537.36';
 const contextOptions={acceptDownloads:true,reducedMotion:'no-preference',viewport:{width:426,height:780},screen:{width:426,height:780},deviceScaleFactor:3,isMobile:true,hasTouch:true,userAgent:ua,timezoneId:'Australia/Melbourne',serviceWorkers:'block'};
 const context=await browser.newContext(contextOptions);
 data.profile={browser:version,viewport:[426,780],deviceScaleFactor:3,mobile:true,touch:true,quality:tier,targetFps:fps,cpuThrottling:1,gpuPerformance:'native desktop',serviceWorkers:'blocked'};
 const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
 const origin='http://127.0.0.1:'+hosted.server.address().port;
 const workers=[];
 page.on('worker',worker=>{workers.push({url:worker.url(),openedAtMs:Date.now()});});
 data.workers=workers;
 const failedRequests=[];
 page.on('requestfailed',req=>failedRequests.push({url:req.url().replace(origin,'CUR_ORIGIN'),failure:req.failure()?.errorText,type:req.resourceType()}));
 const responseErrors=[];
 page.on('response',res=>{if(res.status()>=400)responseErrors.push({url:res.url().replace(origin,'CUR_ORIGIN'),status:res.status()});});
 data.failedRequests=failedRequests;
 data.responseErrors=responseErrors;
 data.modelRoute=hosted.modelRoute;
 const openExplore=async target=>{
  await target.goto(origin+'/3dModels/inverloch/explore/',{waitUntil:'domcontentloaded'});
  await target.waitForFunction(()=>!!(window.__pixelHost?.town?.on&&window.__pixelHost?.town?.pair?.cur?.__pixelScene?.renderer&&window.__pixelStable&&!document.querySelector('.ex-load')),null,{timeout:85000});
 };
 const dismissWelcome=target=>target.evaluate(()=>{const welcome=document.querySelector('.bs-welcome');if(welcome){welcome.querySelectorAll('input[type=checkbox]').forEach(c=>c.checked=false);welcome.querySelector('.bs-wel-go')?.click();}});
 await openExplore(page);
 data.ready=await page.evaluate(()=>({
  selection:window.__pixelStable,visibleAtMs:performance.now(),visibility:document.visibilityState,
  timeOriginMs:performance.timeOrigin,stamp:document.querySelector('[name=an-commit]')?.content,
 }));
 if(expectedCommit&&!expectedCommit.startsWith(data.ready.stamp))throw Error('Built page stamp did not match expected commit');
 data.ready.responses=hosted.requests.length;
 data.ready.bodyBytes=hosted.requests.filter(([,method])=>method==='GET').reduce((sum,[,,size])=>sum+size,0);
 await dismissWelcome(page);
 await page.waitForFunction(()=>window.__pixelHost.town.traffic?.cars.some(npc=>Number.isFinite(npc.x)&&npc.v>.2),null,{timeout:25000});
 if(args.mode==='ultra-controls'){
  data.ultraControls=await checkUltraControls(page,folder,label);
  data.status=errors.length?'flagged':'complete';await save();
  console.log(data.status,data.ultraControls.withMist,data.ultraControls.withoutMist,errors);
  if(errors.length)process.exitCode=2;
 }else if(args.mode==='controls'){
  data.controls=await checkGraphicsControls(page,folder,label);
  data.status=errors.length?'flagged':'complete';await save();
  console.log(data.status,data.controls.reopenSelections,errors);
  if(errors.length)process.exitCode=2;
 }else if(args.mode==='visuals'){
  data.visuals=await captureViews(page,folder,label,hosted.camera,tier);
  data.status=errors.length?'flagged':'complete';await save();
  console.log(data.status,data.visuals.map(s=>s.filename),errors);
  if(errors.length)process.exitCode=2;
 }else if(args.mode==='parked'){
  data.parked=await checkParked(page,hosted.camera);
  data.status=errors.length?'flagged':'complete';await save();
  console.log(data.status,data.parked.probe.totals,data.parked.summary,errors);
  if(errors.length)process.exitCode=2;
 }else if(args.mode==='takeover'){
  data.takeover=await checkTakeovers(page,folder,label);
  data.status=errors.length?'flagged':'complete';await save();
  console.log(data.status,data.takeover.checks.map(x=>[x.slot,x.color,x.geometry,x.handlePreserved,x.removed]),errors);
  if(errors.length)process.exitCode=2;
 }else{
 data.state=await page.evaluate(prepareDrive,{camera:hosted.camera,tier,route});
 if(data.state.actualFrameTarget!=null&&data.state.actualFrameTarget!==fps)throw Error('Active frame-rate target differed from requested '+fps);
 if(!/nvidia/i.test(data.state.gpu)||data.state.viewport.join(',')!=='426,780'||data.state.dpr!==3)throw Error('Unexpected emulated profile '+JSON.stringify(data.state));
 await page.waitForTimeout(1800);
 data.timing=await page.evaluate(beginDrive,{route,key:data.state.registryKey,seconds,oneLap:args.laps==='1'});data.status='running';
 let savedAt=-1;
 for(;;){
  await page.waitForTimeout(2200);
  const delta=await page.evaluate(readDrive,{ri:data.renders.length,fi:data.rafs.length,ti:data.routeTrace.length});
  data.renders.push(...delta.r);data.rafs.push(...delta.f);data.routeTrace.push(...delta.t);
  data.npcTrace.push([delta.elapsed,await page.evaluate(liveTraffic)]);
  const elapsed=delta.end??delta.elapsed;
  if(delta.end!==null){
   data.summary=summarize(data,elapsed);data.elapsedSeconds=data.summary.elapsedSeconds;const delays=data.renders.map(r=>r[1]).filter(Number.isFinite);
   const buffers={};for(const row of data.renders){const k=row.slice(4,6).join('x');buffers[k]=(buffers[k]||0)+1;}
   const positions=new Map();for(const [,npcs] of data.npcTrace){for(const [i,x,z,v] of npcs){const track=positions.get(i)??{x,z,moved:false};if(Math.hypot(x-track.x,z-track.z)>2&&v>.2)track.moved=true;positions.set(i,track);}}
   const npcMoving=[...positions.values()].filter(c=>c.moved).length;
   const nz=data.npcTrace.map(([,cars])=>cars.filter(c=>c[3]>.2).length), seen=data.npcTrace.flatMap(([,cars])=>cars.map(c=>c[0]));
   data.benchmark={renderHz:+(1000*data.renders.length/elapsed).toFixed(2),over33p4pct:+(100*delays.filter(v=>v>33.4).length/delays.length).toFixed(3),draws:metric(data.renders.map(r=>r[2])),triangles:metric(data.renders.map(r=>r[3])),buffers,distinctHostCars:new Set(seen).size,distinctMovingCars:npcMoving,npcMovingPerSample:metric(nz),quality:data.state.quality};
   data.benchmark.rafHz=+(1000*data.rafs.length/elapsed).toFixed(2);
   data.benchmark.targetFps=fps;
   data.reasons=delta.reasons;
   if(fps===30&&(data.benchmark.renderHz<27||data.benchmark.renderHz>31))data.reasons.push('30 fps cadence measured outside 27–31 sustained renders/s');
   if(!npcMoving)data.reasons.push('No moving host traffic');
   data.status=errors.length||data.reasons.length?'flagged':'complete';data.servedRequests=hosted.requests.slice();
   await save();console.log(data.status,JSON.stringify(data.benchmark),JSON.stringify(data.summary.renderedFrameIntervalMs),data.summary.lapsCompleted,data.reasons,errors);
   if(data.status!=='complete')process.exitCode=2;
   if(args.capture==='yes'&&data.status==='complete'){
    try{
     await context.close();
     const visualContext=await browser.newContext(contextOptions);
     const visualPage=await visualContext.newPage();
     data.visualPageErrors=[];
     visualPage.on('pageerror',error=>data.visualPageErrors.push(error.message));
     await openExplore(visualPage);
     await dismissWelcome(visualPage);
     data.visuals=await captureViews(visualPage,folder,label,hosted.camera,tier);
     await visualContext.close();
    }
    catch(error){data.visualError=error.stack;console.error(data.visualError);}
    data.visualRequests=hosted.requests.slice(data.servedRequests.length);
    await save();
   }
   break;
  }
  const checkpoint=Math.floor(elapsed/30000);
  if(checkpoint!==savedAt){data.elapsedSeconds=+(elapsed/1000).toFixed(1);await save();savedAt=checkpoint;console.log('Driving',data.elapsedSeconds,'s',data.npcTrace.at(-1)[1].length,'NPCs',Math.round(data.routeTrace.at(-1)?.routeMetres??0),'m');}
 }
 }
}catch(error){if(wrote){data.status='interrupted';data.error=error.stack;await save();}throw error;}
finally{if(browser)await browser.close();hosted.server.closeAllConnections();await new Promise(ok=>hosted.server.close(ok));}
