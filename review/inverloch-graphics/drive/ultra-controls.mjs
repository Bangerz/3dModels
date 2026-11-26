import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {placeView} from './capture-views.mjs';

function state(){
 const T=window.__pixelHost.town,d=T.pair.cur.__pixelScene;
 return {quality:d.quality,mist:T.coastalMist,shaderMist:d.coastalHaze?.mist.value,saved:localStorage.getItem('an3d-inv-mist'),target:d.pacing?.targetFps,
  buffer:[d.renderer.domElement.width,d.renderer.domElement.height],eye:d.camera.position.toArray()};
}

async function takePhoto(page,button,filename){
 const [download]=await Promise.all([page.waitForEvent('download',{timeout:45000}),button.tap()]);
 await download.saveAs(filename);
 const failure=await download.failure();
 if(failure)throw Error('Browser PNG download failed: '+failure);
 const contents=await fs.readFile(filename);
 if(contents.length<4096||contents.subarray(0,8).toString('hex')!=='89504e470d0a1a0a'||contents.toString('ascii',12,16)!=='IHDR')
  throw Error('Downloaded file is missing a complete PNG header or image payload');
 return {filename:path.basename(filename),suggestedName:download.suggestedFilename(),bytes:contents.length,
  dimensions:[contents.readUInt32BE(16),contents.readUInt32BE(20)],sha256:createHash('sha256').update(contents).digest('hex')};
}

export async function checkUltraControls(page,folder,label){
 const [inletX,inletZ]=await page.evaluate(()=>{
  const inlet=window.__pixelHost.town.pair.cur.__pixelScene.coastalHaze.inlet.value;
  return [inlet.x,inlet.z];
 });
 const pose={eye:[366,9,-138],target:[inletX,3,inletZ],minutes:720};
 await page.evaluate(placeView,pose);
 await page.waitForTimeout(1500);
 const settings=page.locator('#bsMeBtn');
 await settings.tap();
 const mist=page.getByRole('switch',{name:'Coastal mist'});
 const photo=page.getByRole('button',{name:'Save antialiased photo'});
 const downloadLink=page.getByRole('link',{name:'Download last photo'});
 const initial=await page.evaluate(state);
 if(initial.quality!=='ultra'||initial.target!==60||!initial.mist||initial.shaderMist!==1||await mist.getAttribute('aria-checked')!=='true')
  throw Error('Expected Ultra/60 with default coastal mist');
 if(await downloadLink.isVisible())throw Error('Download link was visible before capture');
 const withMist=await takePhoto(page,photo,path.join(folder,label+'-mist-on.png'));
 if(!await downloadLink.isVisible()||!(await downloadLink.getAttribute('href'))?.startsWith('blob:'))
  throw Error('Expected a visible link for the locally captured blob');
 await mist.tap();
 const off=await page.evaluate(state);
 if(off.mist||off.shaderMist!==0||off.saved!=='0'||await mist.getAttribute('aria-checked')!=='false')throw Error('Mist switch did not disable and persist Off');
 const withoutMist=await takePhoto(page,photo,path.join(folder,label+'-mist-off.png'));
 if(withMist.dimensions.join()!==withoutMist.dimensions.join()||withMist.sha256===withoutMist.sha256)
  throw Error('Mist on/off capture dimensions or output identity were unexpected');
 await page.getByRole('button',{name:'Close settings'}).tap();
 await settings.tap();
 if(await mist.getAttribute('aria-checked')!=='false')throw Error('Reopened Settings did not retain Mist Off');
 await mist.tap();
 const restored=await page.evaluate(state);
 if(!restored.mist||restored.shaderMist!==1||restored.saved!=='1'||await mist.getAttribute('aria-checked')!=='true')
  throw Error('Mist switch did not restore and persist On');
 if(Math.hypot(...initial.eye.map((x,i)=>x-restored.eye[i]))>.2)throw Error('The capture changed the scene camera');
 return {pose,initial,off,restored,withMist,withoutMist};
}
