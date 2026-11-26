import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath,pathToFileURL } from 'node:url';

const {chromium}=await import(pathToFileURL(process.env.TIDEWIRE_PLAYWRIGHT));
const [siteArg,...towns]=process.argv.slice(2);
const root=path.resolve(siteArg), out=path.dirname(fileURLToPath(import.meta.url));
const types={html:'text/html;charset=utf-8',js:'text/javascript',json:'application/json',png:'image/png',jpg:'image/jpeg',webp:'image/webp',webmanifest:'application/manifest+json'};
const server=http.createServer(async(req,res)=>{
  const name=new URL(req.url,'http://127.0.0.1').pathname.slice(1);
  const p=path.resolve(root,name.endsWith('/')?name+'index.html':name);
  if(!p.startsWith(root+path.sep)) return res.writeHead(403).end();
  try{const b=await fs.readFile(p);res.writeHead(200,{'content-type':types[p.split('.').pop()]||'application/octet-stream','content-security-policy':"connect-src 'self'",'cache-control':'public,max-age=3600'}).end(b);}
  catch {res.writeHead(404).end();}
});
await new Promise(ok=>server.listen(0,'127.0.0.1',ok));
const browser=await chromium.launch({executablePath:process.env.TIDEWIRE_CHROME,headless:true,args:['--enable-gpu','--use-angle=d3d11','--force_high_performance_gpu','--disable-renderer-backgrounding','--disable-background-timer-throttling','--no-first-run']});
try {
for(const town of towns){
  const context=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true,reducedMotion:'no-preference',serviceWorkers:'block',timezoneId:'Australia/Melbourne'});
  await context.addInitScript(()=>{
    localStorage.setItem('an3d-off-reset-1','1');localStorage.setItem('an3d-off','["players"]');
    localStorage.setItem('an-player-asked','1');localStorage.setItem('an-tut','offered');
    window.touchLog=[];
    for(const type of ['touchstart','touchmove','touchend','touchcancel']) document.addEventListener(type,e=>window.touchLog.push({type,ids:[...e.touches].map(t=>t.identifier),changed:[...e.changedTouches].map(t=>t.identifier),on:e.target.closest?.('[data-joy]')?.dataset.joy||e.target.tagName,trusted:e.isTrusted}),{capture:true,passive:true});
  });
  const page=await context.newPage();
  await context.route(/^https:\/\/.*three(?:@0\.152\.2\/build|\.js\/0\.152\.2)\/three\.min\.js(?:\?.*)?$/, route=>route.fulfill({path:path.resolve(out,'../viewer-three-0.152.2.min.js'),contentType:'text/javascript',headers:{'access-control-allow-origin':'*'}}));
  const dev=await context.newCDPSession(page);
  const send=(type,touchPoints)=>dev.send('Input.dispatchTouchEvent',{type,touchPoints});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:'+server.address().port+'/'+town+'/explore/',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>document.querySelector('#bsTown canvas')&&!document.querySelector('.ex-load')&&document.body.classList.contains('bswalk'),{},{timeout:90000});
  await page.waitForTimeout(1700);
  await page.evaluate(()=>{const form=document.querySelector('.bs-welcome');if(form){form.querySelectorAll('input[type=checkbox]').forEach(c=>c.checked=false);form.querySelector('.bs-wel-go').click();}});
  const stamp=await page.locator('meta[name=an-commit]').getAttribute('content');
  const tests=[];const start=Date.now();
  const center=async joy=>{const b=await page.locator('[data-joy="'+joy+'"]').boundingBox();if(!b) throw Error(joy+' missing');return {x:b.x+b.width/2,y:b.y+b.height/2};};
  const stick=()=>page.locator('[data-joy=move] i').evaluate(el=>el.style.transform);
  for(const round of ['startup','after-30s']){
    if(round==='after-30s') await page.waitForTimeout(Math.max(0,30000-(Date.now()-start)));
    for(const target of ['view','look']){
      const L=await center('move'),look=await center('look'),R=target==='look'?look:{x:135,y:390};
      const held={id:1,x:L.x+4,y:L.y-19};
      await page.evaluate(()=>{window.touchLog=[];});
      await send('touchStart',[{...L,id:1}]);await send('touchMove',[held]);await page.waitForTimeout(120);
      const initial=await stick();
      const second={...R,id:2};await send('touchStart',[held,second]);
      await send('touchMove',[held,{...second,x:second.x+13,y:second.y+7}]);await page.waitForTimeout(120);
      const both=await stick();
      try{await send('touchEnd',[{...second,x:second.x+13,y:second.y+7}]);}
      catch{await send('touchMove',[held]);}
      await page.waitForTimeout(150);
      const retained=await stick();
      const log=await page.evaluate(()=>window.touchLog);
      await send('touchEnd',[]);await page.waitForTimeout(100);
      const released=await stick();
      const passed=!!initial&&initial===both&&initial===retained&&!released&&log.some(e=>e.type==='touchend'&&e.ids.length===1)&&!log.some(e=>!e.trusted||e.type==='touchcancel')&&log.some(e=>e.type==='touchstart'&&e.ids.length===2&&(target==='look'?e.on==='look':!['move','look'].includes(e.on)));
      tests.push({round,target,elapsedMs:Date.now()-start,initial,both,retained,released,log,passed});
      console.log(town,round,target,passed);
      if(!passed){console.log(await page.evaluate(({L,R})=>({left:document.elementsFromPoint(L.x,L.y).slice(0,7).map(e=>[e.tagName,e.id,e.className]),right:document.elementsFromPoint(R.x,R.y).slice(0,7).map(e=>[e.tagName,e.id,e.className]),dialogs:[...document.querySelectorAll('[role=dialog],dialog')].filter(e=>e.getBoundingClientRect().width).map(e=>e.innerText.slice(0,350))}),{L,R}));throw Error(JSON.stringify(tests.at(-1)));}
    }
  }
  await fs.writeFile(path.join(out,'touch-'+town+'.json'),JSON.stringify({town,stamp,viewport:[390,844],dpr:2,isMobile:true,hasTouch:true,tests,errors},null,2));
  await context.close();
}
} finally{await browser.close();await new Promise(ok=>server.close(ok));}
