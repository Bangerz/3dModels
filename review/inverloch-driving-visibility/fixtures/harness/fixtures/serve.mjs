import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import zlib from 'node:zlib';
import {createHash} from 'node:crypto';

export async function serve({folder, role, port, tier, fps=60, controls=false, sitePath, bundlePath, pinnedHash, hostHash}) {
  const site=sitePath?path.resolve(sitePath):path.resolve(folder,'../../candidate-site');
  const bundle=await fs.readFile(bundlePath||path.resolve(folder,'..',role,'inverloch-model.js'));
  const utility=await fs.readFile(path.resolve(folder,'../viewer-three-0.152.2.min.js'));
  const hash=createHash('sha256').update(bundle).digest('hex');
  const approved={baseline:'046d094bd9827f2c800bcaa840b1927c252ce9481b449242fbad23380884544a',candidate:'db982d89fe273398e45ce757fa8187f250cf30188e63bf017d9672ef5b64554f'};
  if(hash!==(pinnedHash||approved[role])) throw Error('Unexpected native bundle hash '+hash);
  const standalone='/3dModels/_pixel/three.js';
  function replace(text,from,to) {
    if(text.split(from).length!==2) throw Error('Public build anchor missing or duplicated: '+from);
    return text.replace(from,to);
  }
  const camera=JSON.parse(await fs.readFile(path.resolve(folder,'../matched-camera.json'),'utf8'));
  let html=await fs.readFile(path.join(site,'inverloch/explore/index.html'),'utf8');
  const publicHostHash=createHash('sha256').update(html).digest('hex');
  if(hostHash&&publicHostHash!==hostHash)throw Error('Unexpected published host hash '+publicHostHash);
  html=html.replaceAll('https://cdnjs.cloudflare.com/ajax/libs/three.js/0.152.2/three.min.js',standalone).replaceAll('https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.min.js',standalone);
  const modelRoute=html.match(/inverloch-model\.js(?:\?v=[0-9]+)?/)?.[0];
  const supportsGraphics=html.includes('an3d-inv-graphics');
  const init=function(tier,fps,supportsGraphics,controls){
    const key='an3d-inv';
    if(localStorage.getItem('pixel-bench-used'))throw Error('This origin was previously used for Pixel QA. Use a fresh HTTP port.');
    localStorage.setItem('pixel-bench-used','1');
    if(tier==='low')localStorage.setItem(key,JSON.stringify({slow:true}));
    if(tier==='medium')localStorage.setItem(key,JSON.stringify({q:'medium',ms:800}));
    if(supportsGraphics)localStorage.setItem('an3d-inv-graphics',JSON.stringify({preset:tier,frameTarget:fps}));
    localStorage.setItem('an3d-off-reset-1','1');
    localStorage.setItem('an3d-off',controls?'[]':'["players"]');
    if(controls)localStorage.setItem('an-player-off','1');
    localStorage.setItem('an-player-asked','1');localStorage.setItem('an-tut','offered');
    let seed=0x2f67;Math.random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
    window.__pixelNewOrigin=true;
    window.__pixelFixture={tier,fps};
  };
  html=replace(html,'<head>','<head><script>('+init.toString()+')('+JSON.stringify(tier)+','+JSON.stringify(fps)+','+JSON.stringify(supportsGraphics)+','+JSON.stringify(controls)+');</script>');
  html=replace(html,'function townModelOn(T) {','function townModelOn(T) { window.__pixelHost=BS;');
  html=replace(html,'mm.t0 = t0; return mm;', 'mm.__pixelScene=window.__pixelConstructed;mm.t0 = t0; return mm;');
  const saveIf=supportsGraphics?'!manual && first === best':'first === best';
  const saveFirst='if ('+saveIf+') save({ q: best, ms: Math.round(performance.now() - cur.t0) });';
  html=replace(html,'if (!direct) upgrade(); else '+saveFirst,
    'const settled=()=>{window.__pixelStable={at:performance.now(),first,best,direct};};if(!direct)upgrade().then(settled,e=>window.__pixelFailure=String(e));else {'+saveFirst+'settled();}');
  const raw=bundle.toString();const anchor=/return ([\w$]+)\.init\(\),\{ready:([\w$]+),setCamera:/.exec(raw);
  if(!anchor)throw Error('Native renderer init hook missing');
  const model=Buffer.from(replace(raw,anchor[0],'return window.__pixelConstructed='+anchor[1]+','+anchor[1]+'.init(),{ready:'+anchor[2]+',setCamera:'));
  const types={html:'text/html; charset=utf-8',json:'application/json',js:'text/javascript',svg:'image/svg+xml',png:'image/png',webp:'image/webp',jpg:'image/jpeg',webmanifest:'application/manifest+json',css:'text/css'};
  const cached=new Map(),requests=[];
  const server=http.createServer(async(req,res)=>{
    const key=decodeURIComponent(new URL(req.url,'http://127.0.0.1').pathname);
    if(!key.startsWith('/3dModels/'))return res.writeHead(404).end();
    const local=key.slice('/3dModels/'.length),file=path.resolve(site,local.endsWith('/')?local+'index.html':local);
    if(!file.startsWith(site+path.sep))return res.writeHead(403).end();
    if(req.method!=='GET'&&req.method!=='HEAD')return res.writeHead(405).end();
    try{
      if(!cached.has(key)){
        const ext=file.split('.').at(-1),gzip=['html','js','json','css','svg','webmanifest'].includes(ext);
        const original=key===standalone?utility:local==='town3d/inverloch-model.js'?model:local==='inverloch/explore/'?Buffer.from(html):await fs.readFile(file);
        const data=gzip?zlib.gzipSync(original,{level:6}):original;
        const headers={'content-type':types[ext]||'application/octet-stream','content-length':data.length,...(gzip?{'content-encoding':'gzip'}:{}),'cache-control':'public,max-age=600','content-security-policy':"default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; style-src 'self' 'unsafe-inline'; connect-src 'self' blob: data:"};
        cached.set(key,{data,headers});
      }
      const {data,headers}=cached.get(key);requests.push([local,req.method,data.length,new URL(req.url,'http://127.0.0.1').search,headers['content-encoding']??'identity']);res.writeHead(200,headers).end(req.method==='HEAD'?undefined:data);
    }catch{res.writeHead(404).end();}
  });
  await new Promise((ok,bad)=>{server.once('error',bad);server.listen(port,'127.0.0.1',ok);});
  return {server,camera,requests,modelRoute,hash,publicHostHash,bundleBytes:bundle.length,gzip6:zlib.gzipSync(bundle,{level:6}).length};
}
