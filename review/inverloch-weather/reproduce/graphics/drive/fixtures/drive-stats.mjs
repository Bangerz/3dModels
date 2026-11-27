export function metric(a){
 const s=a.filter(x=>Number.isFinite(x)).sort((x,y)=>x-y);
 if(!s.length)return{count:0,p50:null,p95:null,p99:null};
 const n=s.length,q=f=>s[Math.ceil(f*n)-1],round=x=>+x.toFixed(3);
 return{count:n,p50:round(n%2?s[(n-1)/2]:(s[n/2-1]+s[n/2])/2),p95:round(q(.95)),p99:round(q(.99))};
}
export function summarize(data,elapsed){
 const windows=[];const seconds=elapsed/1000;
 for(let i=0;i<Math.ceil(elapsed/60000);i++){
  const from=i*60000,to=Math.min((i+1)*60000,elapsed),len=(to-from)/1000;
  const inside=x=>x>=from&&(to===elapsed?x<=to:x<to);
  const r=data.renders.filter(x=>inside(x[0])),f=data.rafs.filter(x=>inside(x[0])),trace=data.routeTrace.filter(x=>inside(x.ms));
  const start=data.routeTrace.findLast(x=>x.ms<from)||trace[0],last=trace.at(-1)||start;
  const buffers={};for(const x of r){const k=x[4]+'x'+x[5];buffers[k]=(buffers[k]||0)+1;}
  const d=start&&last?last.distance-start.distance:0,p=start&&last?last.routeMetres-start.routeMetres:0;
  windows.push({minute:i+1,fromSec:from/1000,toSec:to/1000,utcStart:new Date(data.timing.utcStartMs+from).toISOString(),
   renders:r.length,renderHz:+(r.length/len).toFixed(2),renderIntervalMs:metric(r.map(x=>x[1])),
   rafs:f.length,rafHz:+(f.length/len).toFixed(2),rafIntervalMs:metric(f.map(x=>x[1])),
   drawsPerRender:metric(r.map(x=>x[2])),trianglesPerRender:metric(r.map(x=>x[3])),
   buffers,routeStartM:start?.routeMetres??null,routeEndM:last?.routeMetres??null,routeProgressM:+p.toFixed(2),
   distanceDrivenM:+d.toFixed(2),meanKmh:+(d/len*3.6).toFixed(2),speedKmh:metric(trace.map(x=>x.speed*3.6)),
   routeDeviationM:metric(trace.map(x=>x.lateral)),cameraTravelM:start&&last?+(last.cameraMetres-start.cameraMetres).toFixed(2):null});
 }
 const end=data.routeTrace.at(-1);
 return {elapsedSeconds:+seconds.toFixed(3),minutes:windows,routeMetres:end?.routeMetres??0,distanceDrivenM:end?.distance??0,
  lapsCompleted:end?.lap??0,meanKmh:seconds&&end?+(end.distance/seconds*3.6).toFixed(2):0,
  renderedFrameIntervalMs:metric(data.renders.map(x=>x[1])),rAFIntervalMs:metric(data.rafs.map(x=>x[1]))};
}
