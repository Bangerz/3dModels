import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import zlib from 'node:zlib';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { pathToFileURL } from 'node:url';

const [siteArg, label, mode='preview'] = process.argv.slice(2);
if (!siteArg || !label) throw Error('Usage: node run.mjs <built-site> <before|after> [preview|film|measure|measure2]');
const site = path.resolve(siteArg);
const out = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/,'$1'));
const pw = await import(pathToFileURL(process.env.TIDEWIRE_PLAYWRIGHT));
const chrome = process.env.TIDEWIRE_CHROME;
const replaceOne = (s, from, to) => {
  if (s.split(from).length !== 2) throw Error('Unexpected build: ' + from);
  return s.replace(from, to);
};
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.webmanifest':'application/manifest+json','.svg':'image/svg+xml'};
const files = new Map();
const server = http.createServer(async(req,res) => {
  const url = new URL(req.url,'http://127.0.0.1');
  const name = decodeURIComponent(url.pathname).replace(/^\/3dModels\//,'');
  const file = path.resolve(site, name.endsWith('/') ? name+'index.html' : name);
  if (!file.startsWith(site+path.sep)) {res.writeHead(404).end();return;}
  try {
    let b = await fs.readFile(file);
    const text = /\.(html|json|js|svg|webmanifest)$/.test(file);
    const encodedOriginal = text ? zlib.gzipSync(b) : b;
    if(name === 'inverloch/explore/') {
      let s=b.toString();
      s=replaceOne(s, 'if (W.invNormanSpot) stop("Norman Rd",', 'window.reviewApp=BS; if (W.invNormanSpot) stop("Norman Rd",');
      s=replaceOne(s,'try { townModelExtras(m, block, THREE, W);','window.reviewBlock=block; try { townModelExtras(m, block, THREE, W);');
      b=Buffer.from(s);
    } else if(name==='town3d/inverloch-model.js') {
      const s=replaceOne(b.toString(),'return d.init(),{ready:h,','return window.reviewModel=d,d.init(),{ready:h,');
      b=Buffer.from(s);
    }
    const payload=text?zlib.gzipSync(b):b;
    files.set(url.pathname,{rawBytes:b.length,bodyBytes:payload.length,originalBodyBytes:encodedOriginal.length});
    res.writeHead(200,{'content-type':types[path.extname(file)]||'application/octet-stream','content-length':payload.length,...(text?{'content-encoding':'gzip'}:{}),'cache-control':'public,max-age=3600',"content-security-policy":"connect-src 'self'"}).end(payload);
  } catch(e) { if(e.code!=='ENOENT') console.error(e.message);res.writeHead(404).end(); }
});
await new Promise(ok=>server.listen(0,'127.0.0.1',ok));
const port=server.address().port;
const browser=await pw.chromium.launch({executablePath:chrome,headless:true,args:['--enable-gpu','--use-angle=d3d11','--force_high_performance_gpu','--disable-background-timer-throttling','--disable-renderer-backgrounding','--disable-backgrounding-occluded-windows','--no-first-run']});
const errors=[];
try {
  const context=await browser.newContext({viewport:mode.startsWith('measure')?{width:1600,height:900}:{width:960,height:960},deviceScaleFactor:1,timezoneId:'Australia/Melbourne',locale:'en-AU',serviceWorkers:'block'});
  // The server's connect-src policy keeps writes and multiplayer traffic local. Browser caching and the ordinary game tick stay active.
  await context.addInitScript(()=>{
    localStorage.setItem('an3d-inv',JSON.stringify({q:'high',ms:800}));
    localStorage.setItem('an3d-off-reset-1','1');
    localStorage.setItem('an3d-off',JSON.stringify(['players']));
    localStorage.setItem('an-player-asked','1');localStorage.setItem('an-tut','offered');
    let seed=0x2f67;Math.random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  });
  const page=await context.newPage();
  page.on('pageerror',e=>{errors.push(e.message);console.error('pageerror',e.message.slice(0,380));});
  page.on('console',m=>{if(m.type()==='warning'&&/Town model|WebGL|GPU/.test(m.text()))console.error(m.text().slice(0,280));});
  const dev=await context.newCDPSession(page);
  await dev.send('Network.enable');
  const requests=new Map();
  dev.on('Network.requestWillBeSent',e=>requests.set(e.requestId,{url:e.request.url,method:e.request.method}));
  dev.on('Network.responseReceived',e=>{const r=requests.get(e.requestId);if(r)Object.assign(r,{status:e.response.status,mime:e.response.mimeType,fromDisk:e.response.fromDiskCache});});
  dev.on('Network.loadingFinished',e=>{const r=requests.get(e.requestId);if(r)r.wireBytes=e.encodedDataLength;});
  if(mode==='film'||mode==='opening') await page.clock.install({time:new Date('2026-11-23T01:00:00Z')});
  const start=Date.now();
  await page.goto('http://127.0.0.1:'+port+'/3dModels/inverloch/explore/',{waitUntil:'domcontentloaded',timeout:90000});
  try {await page.waitForFunction(()=>window.reviewBlock&&window.reviewApp.town?.on&&window.reviewModel?.renderer,{},{timeout:90000});}
  catch(e) {console.log(await page.evaluate(()=>({title:document.title,loader:document.querySelector('.ex-load')?.textContent,visible:document.body.innerText.slice(-1100),resources:performance.getEntriesByType('resource').map(r=>r.name).slice(-18)})));throw e;}
  const readyMs=Date.now()-start;
  await page.waitForFunction(()=>!document.querySelector('.ex-load'),{},{timeout:25000});
  await page.waitForTimeout(1700);
  await page.evaluate(()=>{const form=document.querySelector('.bs-welcome');if(form){form.querySelectorAll('input[type=checkbox]').forEach(c=>c.checked=false);form.querySelector('.bs-wel-go').click();}});
  await page.addScriptTag({path:path.join(out,'route.js')});
  const info=await page.evaluate(()=>{const d=window.reviewModel,r=d.renderer,gl=r.getContext(),ext=gl.getExtension('WEBGL_debug_renderer_info');return {gpu:ext&&gl.getParameter(ext.UNMASKED_RENDERER_WEBGL),quality:d.quality,dpr:r.getPixelRatio(),size:[r.domElement.width,r.domElement.height],commit:document.querySelector('meta[name=an-commit]')?.content,version:navigator.userAgent,anchor:window.reviewBlock.at(0,0)};});
  console.log(label,mode,JSON.stringify(info));
  const duration=mode==='opening'?4:await page.evaluate(()=>window.reviewRouteLength);
  const pose=sec=>page.evaluate(t=>window.reviewPose(t),sec);
  const samples=[0,4,9,13,17,20,23,27,31,35,39,43,46];
  if(!mode.startsWith('measure')){
    await page.addStyleTag({content:'body * {visibility:hidden!important} #bsTown,#bsTown .inv-embed,#bsTown .inv-embed-view,#bsTown canvas {visibility:visible!important} #bsTown .inv-embed-labels, #bsTown .inv-embed-credit {display:none!important}'});
  }
  if(mode==='preview'||mode==='scout'){
    const names=[];for(const t of samples){await pose(t);await page.waitForTimeout(280);const name=path.join(out,`${label}-review-${String(t).padStart(2,'0')}.jpg`);await page.screenshot({path:name,type:'jpeg',quality:91});names.push(name);}console.log('Preview complete:',names.length);
    if(mode==='scout'){
      await page.evaluate(()=>window.reviewEast(0));
      await page.waitForTimeout(250);await page.screenshot({path:path.join(out,label+'-east.png')});
    }
  } else if(mode==='film'||mode==='opening'){
    await page.clock.pauseAt(new Date('2026-11-23T01:01:00Z'));
    const fps=25, frameCount=Math.round(duration*fps)+(mode==='opening'?0:1);
    const part=mode==='opening'?'east':'camera';
    const ffmpeg=process.env.REVIEW_FFMPEG||'C:/AI/MOSS-Music-Local/tools/ffmpeg.exe';
    const proc=spawn(ffmpeg,['-hide_banner','-loglevel','error','-y','-f','image2pipe','-framerate',String(fps),'-vcodec','mjpeg','-i','pipe:0','-an','-c:v','libx264','-preset','fast','-crf','15','-pix_fmt','yuv420p','-movflags','+faststart',path.join(out,label+'-'+part+'.mp4')],{windowsHide:true,stdio:['pipe','ignore','inherit']});
    const exited=once(proc,'close');
    for(let i=0;i<frameCount;i++){
      if(mode==='opening') await page.evaluate(t=>window.reviewEast(t),i/fps);
      else await pose(i/fps);
      await page.clock.runFor(1000/fps);
      const {data}=await dev.send('Page.captureScreenshot',{format:'jpeg',quality:93,fromSurface:true});
      if(!proc.stdin.write(Buffer.from(data,'base64'))) await once(proc.stdin,'drain');
      if(i%250===0)console.log('Rendered sample',i,'of',frameCount);
    }
    proc.stdin.end();const [rc]=await exited;if(rc!==0)throw Error('ffmpeg exit '+rc);
    const errorsDue=errors.length;await fs.writeFile(path.join(out,label+'-'+mode+'-info.json'),JSON.stringify({label,info,duration,fps,frameCount,errors},null,2));if(errorsDue)console.log(errors);
  } else if(mode.startsWith('measure')){
    await pose(0);await page.waitForTimeout(1800);
    const result=await page.evaluate(async()=>{
      const r=window.reviewModel.renderer,gl=r.getContext(),ext=gl.getExtension('EXT_disjoint_timer_query_webgl2'),pending=[],gpu=[],frames=[];
      let disjoint=0,count=0,last,clock,route=0;const render=r.render;
      if(ext)r.render=function(...args){
        if(gl.getParameter(ext.GPU_DISJOINT_EXT)){disjoint++;while(pending.length)gl.deleteQuery(pending.shift().q);}
        while(pending.length&&gl.getQueryParameter(pending[0].q,gl.QUERY_RESULT_AVAILABLE)){const {q,t}=pending.shift();gpu.push([t,gl.getQueryParameter(q,gl.QUERY_RESULT)/1e6]);gl.deleteQuery(q);}
        if(++count%5!==0||pending.length>10)return render.apply(this,args);
        const q=gl.createQuery();gl.beginQuery(ext.TIME_ELAPSED_EXT,q);try{return render.apply(this,args);}finally{gl.endQuery(ext.TIME_ELAPSED_EXT);pending.push({q,t:route});}
      };
      return await new Promise(ok=>{function tick(t){if(clock===undefined)clock=t;route=Math.min(window.reviewRouteLength,(t-clock)/1000);const c=r.info.render,m=r.info.memory;if(last!==undefined)frames.push([route,t-last,c.calls,c.triangles,m.textures,m.geometries]);last=t;window.reviewPose(route);
        if(route<window.reviewRouteLength)requestAnimationFrame(tick);else{r.render=render;while(pending.length)gl.deleteQuery(pending.shift().q);ok({frames,gpu,disjoint,frameColumns:['routeSeconds','rafDeltaMs','calls','triangles','textures','geometries'],gpuColumns:['routeSeconds','gpuMs']});}}
        requestAnimationFrame(tick);});
    });
    const traffic=Array.from(requests.values()).map(row=>{const u=new URL(row.url);return {...row,url:u.hostname==='127.0.0.1'?u.pathname+u.search:u.protocol==='data:'?'data:':u.origin+u.pathname,...(u.hostname==='127.0.0.1'?files.get(u.pathname):{})};});
    await fs.writeFile(path.join(out,`${label}-${mode}.json`),JSON.stringify({label,mode,info,readyMs,result,traffic,errors}));
  }else if(mode!=='details') throw Error('Unknown mode '+mode);
  if(mode==='details'||(mode==='measure'&&label==='after')){
    // This happens only after the route sample and raw network results have been saved.
    await page.setViewportSize({width:960,height:960});
    await page.addStyleTag({content:'body * {visibility:hidden!important} #bsTown,#bsTown .inv-embed,#bsTown .inv-embed-view,#bsTown canvas {visibility:visible!important} #bsTown .inv-embed-labels, #bsTown .inv-embed-credit {display:none!important}'});
    for(const shot of ['library','hotel']){
      await page.evaluate(what=>{const F=window.reviewApp.fly,m=window.reviewApp.town.model,b=window.reviewBlock;
        const dir=172*Math.PI/180;
        const [x,z]=what==='library'?b.at(0,15):b.at(65,39);
        const [tx,tz]=what==='library'?b.at(-6,5):b.at(65+19*Math.sin(dir),39-19*Math.cos(dir));
        const y=m.groundAt(x,z)+(what==='library'?2:2.6),ty=m.groundAt(tx,tz)+(what==='library'?2.4:4.8);
        F.walk=null;window.reviewApp.town.tween=null;F.pos.set(x,y,z);F.yaw=Math.atan2(x-tx,z-tz);F.pitch=Math.atan2(ty-y,Math.hypot(tx-x,tz-z));m.setCamera(x,y,z,F.yaw,F.pitch);
      },shot);
      await page.waitForTimeout(320);
      await page.screenshot({path:path.join(out,label+'-'+shot+'.png')});
    }
  }
}finally {await browser.close();await new Promise(ok=>server.close(ok));}
