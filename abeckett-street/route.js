// [seconds, eye x, z, height above ground, look-at x, z, height above ground].
// Town-block coordinates in metres, before the viewer grounds them on the survey.
(() => {
  const knots = [
    [0, 29,-21,3.2, 43,-6,3.2],
    [4, 31,-7,2.6, 42,-5,3.0],
    [9, 30, 7,2.7, 40,13,3.3],
    [13,29,19,2.8, 39,22,3.2],
    [17,31,30,2.9, 35,48,3.8],
    [20,33,36,2.9, 32,50,3.9],
    [23,24,36,3.0, 19,48,3.6],
    [27,13,32,3.1, 20,27,4.5],
    [31,9,27,3.3, 9,7,3.8],
    [35,5,20,3.5, 5,5,3.8],
    [39,6,13,3.7, 14,10,3.7],
    [43,9,10,4.1, 17.2,18,3.7],
    [46,12,8,4.7, 17.5,18.5,3.7],
  ];
  window.reviewRouteLength=knots.at(-1)[0];
  window.reviewEast = sec => {
    const F=window.reviewApp.fly,b=window.reviewBlock,m=window.reviewApp.town.model;
    const dir=96.3*Math.PI/180, dist=3.8*(1-Math.cos(Math.PI*Math.min(1,sec/4)))/2;
    const bx=33.9+dist*Math.sin(dir),bz=36.1-dist*Math.cos(dir);
    const [x,z]=b.at(bx,bz),[tx,tz]=b.at(bx+20*Math.sin(dir),bz-20*Math.cos(dir));
    F.walk=null;window.reviewApp.town.tween=null;F.pos.set(x,m.groundAt(x,z)+2.3,z);
    F.yaw=Math.atan2(x-tx,z-tz);F.pitch=4.17*Math.PI/180;
    m.setCamera(F.pos.x,F.pos.y,F.pos.z,F.yaw,F.pitch);
  };
  window.reviewPose = sec => {
    let i=0;
    while(i<knots.length-2 && sec>knots[i+1][0]) i++;
    const a=knots[Math.max(i-1,0)],b=knots[i],c=knots[i+1],d=knots[Math.min(i+2,knots.length-1)];
    const u=Math.min(1,Math.max(0,(sec-b[0])/(c[0]-b[0])));
    const p = [];
    for(let j=1;j<7;j++){
      const m=(c[j]-a[j])*(c[0]-b[0])/(c[0]-a[0]),n=(d[j]-b[j])*(c[0]-b[0])/(d[0]-b[0]);
      p.push((2*u**3-3*u*u+1)*b[j]+(u**3-2*u*u+u)*m+(-2*u**3+3*u*u)*c[j]+(u**3-u*u)*n);
    }
    const app=window.reviewApp, model=app.town.model,F=app.fly;
    const [x,z]=window.reviewBlock.at(p[0],p[1]),[tx,tz]=window.reviewBlock.at(p[3],p[4]);
    const y=model.groundAt(x,z)+p[2],ty=model.groundAt(tx,tz)+p[5];
    F.walk=null;app.town.tween=null;F.pos.set(x,y,z);
    F.yaw=Math.atan2(x-tx,z-tz);F.pitch=Math.atan2(ty-y,Math.hypot(tx-x,tz-z));
    model.setCamera(x,y,z,F.yaw,F.pitch);
    return [x,y,z,F.yaw,F.pitch];
  };
})();
