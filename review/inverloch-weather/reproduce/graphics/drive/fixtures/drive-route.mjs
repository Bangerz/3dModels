const raw = [
  [-239,-358.55],[-165.1,-349.9],[-130.6,-627.1],
  [-259.8,-642.9],[-364.5,-658.3],[-375.6,-660.4],[-384.7,-664.3],[-388.7,-667.2],
  [-399.3,-614.3],[-409.9,-534.9],[-413.9,-502.9],[-416.2,-479.6],[-423.7,-430.5],[-430.2,-383.3],[-273.6,-362.6]
];
const lanes=1.75;
const pos=(p,t,d)=>[p[0]+t[0]*d,p[1]+t[1]*d];
const sub=(b,a)=>[b[0]-a[0],b[1]-a[1]];
const unit=v=>{const length=Math.hypot(...v);return v.map(x=>x/length);};
const dist=(a,b)=>Math.hypot(...sub(a,b));
const get=(a,i)=>a[(i+a.length)%a.length];
const lane=raw.map((p,i)=>{
  const a=unit(sub(p,get(raw,i-1))),b=unit(sub(get(raw,i+1),p));
  const nx=a[1]+b[1],nz=-a[0]-b[0],denom=1+a[0]*b[0]+a[1]*b[1];
  return [p[0]+nx*lanes/denom,p[1]+nz*lanes/denom];
});
const path=[];
function add(p){
 if(path.length){const start=path.at(-1);const l=dist(start,p);if(l<0.15)return;const n=Math.ceil(l/5);
   for(let j=1;j<n;j++)path.push([start[0]+(p[0]-start[0])*j/n,start[1]+(p[1]-start[1])*j/n]);
 }
 path.push(p);
}
add(lane[0]);
for(let i=1;i<lane.length;i++){
 const p=lane[i],a=get(lane,i-1),b=get(lane,i+1);
 const trim=Math.min(8,dist(a,p)*.32,dist(b,p)*.32);
 const q=pos(p,unit(sub(a,p)),trim),r=pos(p,unit(sub(b,p)),trim);
 add(q);
 for(let j=1;j<=5;j++){const t=j/5;add([0,1].map(k=>(1-t)**2*q[k]+2*t*(1-t)*p[k]+t*t*r[k]));}
}
add(lane[0]);
export const route={
  name:'A’Beckett–Reilly–Bayview–Sandy Mount circuit',
  source:'b18a0fa town.json roads 487, 28, 240, 657 and 197, model metres; 1.75 m left of centre with rounded turns',
  points:path.map(p=>p.map(x=>+x.toFixed(3))),
};
route.metres=route.points.slice(1).reduce((acc,p,i)=>acc+dist(p,route.points[i]),0);
route.firstHeading=Math.atan2(route.points[1][0]-route.points[0][0],route.points[1][1]-route.points[0][1]);
