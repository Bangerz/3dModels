import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {gzipSync} from 'node:zlib';

const here=path.dirname(fileURLToPath(import.meta.url));
const labels=process.argv.slice(2);
if(!labels.length)throw Error('Expected one or more complete drive labels');
const gzipExtensions=/\.(?:html|js|json|css|svg|webmanifest)$/;
const digestCache=new Map();

async function originalEncodedBytes(file){
 if(!digestCache.has(file)){
  const contents=await fs.readFile(file);
  digestCache.set(file,gzipExtensions.test(file)?gzipSync(contents,{level:6}).length:contents.length);
 }
 return digestCache.get(file);
}

async function readDrive(label){
 const data=JSON.parse(await fs.readFile(path.join(here,label+'.json'),'utf8'));
 if(data.status!=='complete'||data.summary.elapsedSeconds!==300)throw Error(label+' does not contain a complete five-minute drive');
 const resources={};
 for(const [url,method,actualBytes,query=''] of data.servedRequests){
  if(method!=='GET')continue;
  const resource=url==='_pixel/three.js'?path.join(here,'viewer-three-0.152.2.min.js'):
   url.endsWith('/')?path.join(data.site,url,'index.html'):
   url==='town3d/inverloch-model.js'?data.bundle:path.join(data.site,url);
  const record=resources[url]??={requests:0,servedBytes:0,productionBytes:0,queries:[]};
  if(query&&!record.queries.includes(query))record.queries.push(query);
  record.requests++;
  record.servedBytes+=actualBytes;
  record.productionBytes+=await originalEncodedBytes(resource);
 }
 const targetFps=data.profile.targetFps??60;
 const intervals=data.renders.map(row=>row[1]).filter(Number.isFinite);
 const longThreshold=1500/targetFps;
 const longIntervals={thresholdMs:longThreshold,count:intervals.filter(ms=>ms>longThreshold).length,total:intervals.length};
 const totals=Object.values(resources).reduce((total,r)=>({
  requests:total.requests+r.requests,
  servedBytes:total.servedBytes+r.servedBytes,
  productionBytes:total.productionBytes+r.productionBytes,
 }),{requests:0,servedBytes:0,productionBytes:0});
 return {
  label,host:data.state.stamp,hostSha:data.hostSha,modelSha:data.modelSha,route:data.route.name,
  routeHash:data.routeHash,fixtureCar:data.state.registryKey,browser:data.profile.browser,
  quality:data.state.quality,targetFps,profile:data.profile,gpu:data.state.gpu,
  modelRoute:data.modelRoute??'inverloch-model.js?v=32',timing:data.summary.elapsedSeconds,
  laps:data.summary.lapsCompleted,routeMetres:data.summary.routeMetres,distanceMetres:data.summary.distanceDrivenM,
  meanKmh:data.summary.meanKmh,frameIntervals:data.summary.renderedFrameIntervalMs,callbackIntervals:data.summary.rAFIntervalMs,
  renderHz:data.benchmark.renderHz,callbackHz:data.benchmark.rafHz??+(data.rafs.length/300).toFixed(2),
  draws:data.benchmark.draws,triangles:data.benchmark.triangles,buffers:data.benchmark.buffers,
  over33p4pct:data.benchmark.over33p4pct,longIntervals,visibleReady:data.ready??null,minutes:data.summary.minutes,modelBytes:data.bundleBytes,modelGzipBytes:data.bundleGzip,
  movingCars:data.benchmark.distinctMovingCars,pageErrors:data.errors,failedRequests:data.failedRequests??null,responseErrors:data.responseErrors??null,
  transfer:{...totals,uniqueResources:Object.keys(resources).length,resources},
 };
}
const drives=[];
for(const label of labels)drives.push(await readDrive(label));
const first=drives[0];
for(const drive of drives.slice(1)){
 if(drive.routeHash!==first.routeHash||drive.fixtureCar!==first.fixtureCar||drive.browser!==first.browser||drive.gpu!==first.gpu||
  drive.profile.deviceScaleFactor!==first.profile.deviceScaleFactor||drive.profile.viewport.join(',')!==first.profile.viewport.join(','))
  throw Error(drive.label+' did not use the matched drive fixture and browser');
}
const methods={
 transfer:'Compressed response-body bytes served by the actual harness on successful GETs, with headers and external requests excluded. The production figure re-encodes the same requested resources without the observation hooks, using gzip level 6 for text.',
 timing:'Intervals between main-scene render returns and independent browser animation-frame callbacks. Chrome mobile emulation uses the laptop GPU.',
};
const out={methods,drives};
await fs.writeFile(path.join(here,'measurements.json'),JSON.stringify(out,null,2)+'\n');
console.table(drives.map(d=>({run:d.label,commit:d.host,quality:d.quality,fps:d.renderHz,p95Ms:d.frameIntervals.p95,p99Ms:d.frameIntervals.p99,laps:d.laps,metres:Math.round(d.distanceMetres),servedBytes:d.transfer.servedBytes,productionBytes:d.transfer.productionBytes,modelGzipBytes:d.modelGzipBytes})));
