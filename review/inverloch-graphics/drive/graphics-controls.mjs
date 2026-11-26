import path from 'node:path';

function readState(){
 const T=window.__pixelHost.town,d=T.pair.cur.__pixelScene;
 return {
  preset:T.pair.initialPreset,available:T.pair.presets,quality:d.quality,target:d.pacing?.targetFps,
  saved:JSON.parse(localStorage.getItem('an3d-inv-graphics')??'null'),
  sameScene:d===window.__controlsInitialScene,loading:!!T.pair.next,
 };
}

export async function checkGraphicsControls(page,folder,label){
 await page.evaluate(()=>{window.__controlsInitialScene=window.__pixelHost.town.pair.cur.__pixelScene;});
 const settings=page.locator('#bsMeBtn');
 await settings.tap();
 const detail=page.getByLabel('Detail preset');
 const frame=page.getByLabel('Frame-rate target');
 const restart=page.getByRole('button',{name:'Restart Inverloch with this preset'});
 const initial=await page.evaluate(readState);
 const options=await detail.locator('option').evaluateAll(items=>items.map(item=>({label:item.textContent,value:item.value})));
 if(await restart.isVisible()||initial.quality!=='medium'||initial.target!==60)throw Error('Unexpected initial Settings state');
 await frame.selectOption('30');
 const changedRate=await page.evaluate(readState);
 if(!changedRate.sameScene||changedRate.target!==30||changedRate.saved?.frameTarget!==30)throw Error('Live frame target change failed');
 await detail.selectOption('low');
 await restart.waitFor({state:'visible'});
 const stagedQuality=await page.evaluate(readState);
 if(!stagedQuality.sameScene||stagedQuality.quality!=='medium'||stagedQuality.saved?.preset!=='low')throw Error('Quality selection did not stage the intended rebuild');
 const beforeRestart=label+'-staged.png';
 await page.screenshot({path:path.join(folder,beforeRestart),scale:'css',animations:'allow'});
 await restart.tap();
 await page.waitForFunction(()=>window.__pixelHost?.town?.on&&window.__pixelHost?.town?.pair?.cur?.__pixelScene?.quality==='low'&&!document.querySelector('.ex-load'),null,{timeout:45000});
 const restartState=await page.evaluate(readState);
 if(restartState.sameScene||restartState.target!==30||restartState.preset!=='low')throw Error('Reopen did not apply saved Low / 30 fps');
 await settings.tap();
 const reopenSelections={preset:await detail.inputValue(),fps:await frame.inputValue(),restartVisible:await restart.isVisible()};
 if(reopenSelections.preset!=='low'||reopenSelections.fps!=='30'||reopenSelections.restartVisible)throw Error('Settings values did not survive reopen');
 const afterRestart=label+'-reopened.png';
 await page.screenshot({path:path.join(folder,afterRestart),scale:'css',animations:'allow'});
 await frame.selectOption('60');
 const restoredRate=await page.evaluate(readState);
 if(restoredRate.quality!=='low'||restoredRate.target!==60||restoredRate.saved?.frameTarget!==60)throw Error('Returning to the live 60 fps setting failed');
 return {initial,changedRate,stagedQuality,restartState,reopenSelections,restoredRate,options,images:[beforeRestart,afterRestart]};
}
