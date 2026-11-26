import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import {serve} from './harness/fixtures/serve.mjs';
import {prepareDrive} from './harness/fixtures/drive-page.mjs';
import {placeView} from './harness/capture-views.mjs';
import {route as townRoute} from './harness/fixtures/drive-route.mjs';
import {runDrive,runView,runFilm} from './probes.mjs';
const root=path.dirname(fileURLToPath(import.meta.url));
const [label,siteArg,tier,mode,bundleArg]=process.argv.slice(2),out=path.join(root,label);
const site=path.resolve(root,siteArg),bundle=path.resolve(root,bundleArg??path.join(site,'town3d/inverloch-model.js'));
await fs.mkdir(out,{recursive:true});
const sha=createHash('sha256').update(await fs.readFile(bundle)).digest('hex');
const web=await serve({folder:path.resolve(root,'./harness/fixtures'),sitePath:site,bundlePath:bundle,pinnedHash:sha,tier,fps:60,role:label});
const {chromium}=await import(pathToFileURL(process.env.TIDEWIRE_PLAYWRIGHT));
const b=await chromium.launch({headless:true,executablePath:process.env.TIDEWIRE_CHROME,args:['--enable-gpu','--use-angle=d3d11','--force_high_performance_gpu','--disable-renderer-backgrounding','--disable-background-timer-throttling']});
const s={label,sha,tier,browser:b.version(),pageErrors:[],drives:[],views:[]};
const data=JSON.parse(await fs.readFile(path.join(site,'town3d/town.json'),'utf8'));
const heightViews=[
 ['abeckett',-436,-385,0.99,0.13],['ocean',-588.4,152.1,0.87,-0.49],['paperbark',-2790,693,.8,.6],['cape',-3872,1903,.76,-.65]
];
const streetViews=[['cuttriss',888.9,-585.6,-.105,.995],['cashin',-1194,-500,.995,.1],['bass',1008,-2279,.995,.1],['abeckett-sign',-223,-359,.991,.133],['norman',-1585,393,.895,.447]];
async function saveImages(pageResult){
 for(const [key,value] of Object.entries(pageResult.images)){
  await fs.writeFile(path.join(out,key+'.png'),Buffer.from(value,'base64'));
 }
 delete pageResult.images;return pageResult;
}
try {
 const ctx=await b.newContext({viewport:{width:426,height:780},screen:{width:426,height:780},deviceScaleFactor:3,isMobile:true,hasTouch:true,timezoneId:'Australia/Melbourne',serviceWorkers:'block',userAgent:'Mozilla/5.0 (Linux; Android 17; Pixel 11 Pro) AppleWebKit/537.36 Chrome/'+b.version()+' Mobile Safari/537.36'});
 const pg=await ctx.newPage();pg.on('pageerror',e=>s.pageErrors.push(e.message));
 await pg.goto('http://127.0.0.1:'+web.server.address().port+'/3dModels/inverloch/explore/',{waitUntil:'domcontentloaded'});
 await pg.waitForFunction(()=>window.__pixelHost?.town?.pair?.cur?.__pixelScene?.renderer&&window.__pixelStable&&!document.querySelector('.ex-load'),null,{timeout:80000});
 await pg.evaluate(()=>document.querySelector('.bs-wel-go')?.click());
 s.stamp=await pg.locator('meta[name="an-commit"]').getAttribute('content');
 function streetRoute(id,start,count){
  const a=data.roads[id][5], raw=[];
  for(let i=0;i<a.length;i+=2)raw.push([a[i]/10,a[i+1]/10]);
  let A=raw[start],B=raw[start+1],dx=B[0]-A[0],dz=B[1]-A[1],len=Math.hypot(dx,dz);
  const ux=dx/len,uz=dz/len;
  const points=[];for(let i=0;i<=count;i+=4)points.push([A[0]+ux*(i+14)+uz*1.65,A[1]+uz*(i+14)-ux*1.65]);
  return {points,firstHeading:Math.atan2(ux,uz),metres:count};
 }
 const plots=[['abeckett',townRoute],['cuttriss',streetRoute(38,1,170)],['norman',streetRoute(75,1,165)]];
 if(mode==='clip'){
  const route=plots[1][1];
  await pg.evaluate(prepareDrive,{camera:web.camera,tier,route});
  const film=await pg.evaluate(runFilm,route);
  await fs.writeFile(path.join(out,'cuttriss.webm'),Buffer.from(film.bytes,'base64'));
  delete film.bytes;s.film=film;
 }
 if(mode==='drive'||mode==='all')for(const [name,route] of plots){
  await pg.evaluate(()=>window.__pixelHost.town.car?.out?.());
  if(name!=='abeckett'){
   await pg.evaluate(()=>localStorage.clear());await pg.reload({waitUntil:'domcontentloaded'});
   await pg.waitForFunction(()=>window.__pixelHost?.town?.pair?.cur?.__pixelScene?.renderer&&window.__pixelStable&&!document.querySelector('.ex-load'),null,{timeout:80000});
   await pg.evaluate(()=>document.querySelector('.bs-wel-go')?.click());
  }
  const state=await pg.evaluate(prepareDrive,{camera:web.camera,tier,route});
  const q=await pg.evaluate(runDrive,{name,route});
  s.drives.push({state,...await saveImages(q)});console.log(label,name,q.speed,q.buffers,q.distance);
 }
 if(mode==='replay'){
  const measured=JSON.parse(await fs.readFile(path.join(root,tier==='medium'?'current-medium-r2':'current-ultra','measurements.json'),'utf8'));
  for(const drive of measured.drives){
   const [x,y,z,w]=drive.quat,eye=drive.pos,dir=[-2*(x*z+w*y),-2*(y*z-w*x),2*(x*x+y*y)-1];
   const target=eye.map((v,i)=>v+dir[i]*70);
   await pg.evaluate(placeView,{eye,target,minutes:720});await pg.waitForTimeout(400);
   const shot=await pg.evaluate(runView,{name:drive.name,type:'replay',tier});
   s.views.push({sceneName:drive.name,...await saveImages(shot)});
  }
 }
 if(!['drive','replay','clip'].includes(mode)){
 for(const [type,list] of [['depth',heightViews],['distance',streetViews]]){
  if(mode==='depth'&&type!=='depth'||(mode==='distance'||mode==='paired-distance')&&type!=='distance')continue;
  for(const [name,x,z,dx,dz] of list){
   const offsets=type==='depth'?[0,.28,.56]:[0];
   for(let i=0;i<offsets.length;i++){
    const sceneName=type+'-'+name+'-'+i;
    const coord=await pg.evaluate(({x,z,dx,dz,type,offset})=>{
      const d=window.__pixelHost.town.pair.cur.__pixelScene;
      const reach=type==='depth'?7:35, h=type==='depth'?3.2:2.5, att=type==='depth'?.05:1.0;
      const X=x-dx*reach+dz*offset,Z=z-dz*reach-dx*offset;
      return {eye:[X,d.hf.yAt(X,Z)+h,Z],target:[x,d.hf.yAt(x,z)+att,z]};
    },{x,z,dx,dz,type,offset:offsets[i]});
    await pg.evaluate(placeView,{...coord,minutes:720});
    await pg.waitForTimeout(i===0?700:120);
    const v=await pg.evaluate(runView,{name:sceneName,type,tier,pair:mode==='paired-distance'});
    s.views.push({sceneName,coord,...await saveImages(v)});
   }
   console.log(label,type,name);
  }
 }
 }
 if(s.pageErrors.length)throw Error(s.pageErrors.join('\n'));
}finally{
 await fs.writeFile(path.join(out,'measurements.json'),JSON.stringify(s,null,2));
 await b.close();web.server.closeAllConnections();web.server.close();
}
