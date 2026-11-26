from pathlib import Path
import numpy as np,json
from PIL import Image,ImageDraw,ImageFont
r=Path(__file__).resolve().parent
def font(n,bold=False):return ImageFont.truetype('C:/Windows/Fonts/'+('segoeuib' if bold else 'segoeui')+'.ttf',n)
rois={'abeckett':(.178,.218,.302,.317),'cuttriss':(.565,.258,.739,.327),'norman':(.337,.305,.60,.362)}
labels={'abeckett':'A\u2019Beckett Street | clock','cuttriss':'Cuttriss Street | tree and roof','norman':'Norman Road | distant shore'}
def data(q):return json.loads((q/'measurements.json').read_text('utf8'))
def read(p):return Image.open(p).convert('RGB')
def box_for(im,b):return [round(x*im.size[i%2]) for i,x in enumerate(b)]
def edge(a):return float((abs(np.diff(a,axis=0)).sum()+abs(np.diff(a,axis=1)).sum())/((a.shape[0]-1)*a.shape[1]+(a.shape[1]-1)*a.shape[0]))
def getgray(im):return np.asarray(im.convert('L'),dtype=float)
def pair_grid():
 s=Image.new('RGB',(680,686),'#17291f');d=ImageDraw.Draw(s)
 d.text((15,9),'Moving at 49 km/h',font=font(22,True),fill='white');d.text((348,9),'Stopped at the same view',font=font(22,True),fill='white')
 results=[]
 for folder in ['previous-medium','current-medium-r2','current-ultra']:
  p=r/folder
  for i,(n,b) in enumerate(rois.items()):
   ims=[read(p/(n+'-'+k+'.png')) for k in ['moving','stopped','fixed','aniso8']];box=box_for(ims[0],b)
   pics=[im.crop(box) for im in ims];g=list(map(getgray,pics));diff=abs(g[0]-g[1]);drive=next(d for d in data(p)['drives'] if d['name']==n)
   results.append(dict(build=folder,street=n,roi=box,edgesMoving=edge(g[0]),edgesStopped=edge(g[1]),edgesAnisotropy8=edge(g[3]),pctPixelsWithin2=100*np.mean(diff<3),fixedMaxDiff=float(abs(g[1]-g[2]).max()),speedMoving=drive['speed'],speedStopped=drive['stoppedSpeed'],buffers=drive['buffers']))
   if folder=='current-medium-r2':
    y=53+208*i;d.text((15,y),labels[n],font=font(18),fill='#cee1ce')
    for j,im in enumerate(pics[:2]):
     factor=min(315/im.width,159/im.height);im=im.resize((round(im.width*factor),round(im.height*factor)),Image.Resampling.NEAREST);s.paste(im,(15+j*333,y+30))
 s.save(r/'driving-landmarks.png');return results
def depth_grid():
 names=['ocean','paperbark','cape'];labels=['Ocean View Court','Paperbark Place','Cape Paterson\u2013Inverloch Road'];v='ultra'
 s=Image.new('RGB',(840,75+len(names)*274),'#17291f');d=ImageDraw.Draw(s)
 d.text((15,12),'Current road',font=font(25,True),fill='white');d.text((431,12),'Terrain-fitted road',font=font(25,True),fill='white')
 for i,(name,title) in enumerate(zip(names,labels)):
  y=63+274*i;d.text((15,y),title,font=font(18),fill='#cee1ce')
  for j,folder in enumerate(['current-ultra','depth-final-ultra']):
   im=read(r/folder/f'depth-{name}-0-natural.png');box=box_for(im,(.04,.33,.96,.66));im=im.crop(box);scale=min(394/im.width,244/im.height);im=im.resize((round(im.width*scale),round(im.height*scale)),Image.Resampling.LANCZOS);s.paste(im,(16+j*415,y+26))
 s.save(r/'road-surface-comparison.jpg',quality=91)
def road_results():
 rows=[]
 for folder in ['previous-medium','current-medium-r2','current-ultra','depth-final-medium','depth-final-ultra']:
  p=r/folder
  for shot in data(p)['views']:
   name=shot['sceneName']
   if not name.startswith('depth-'):continue
   cur,foot=[np.asarray(read(p/(name+'-'+k+'.png')),dtype=np.int16) for k in ['depth','roadfootprint']]
   h,w=cur.shape[:2];sl=np.s_[round(h*.44):round(h*.65),round(w*.35):round(w*.65)];cur,foot=cur[sl],foot[sl]
   red=(foot[:,:,0]>foot[:,:,1]+100);green=cur[:,:,1]>cur[:,:,0]+100
   rows.append(dict(build=folder,shot=name,footprintPixels=int(red.sum()),terrainInFrontPixels=int((red&green).sum()),buffer=shot['buffer']))
 return rows
if __name__=='__main__':
 o=dict(motion=pair_grid())
 if (r/'depth-final-ultra/measurements.json').exists():
  depth_grid();o['roadImageMasks']=road_results()
 (r/'visual-metrics.json').write_text(json.dumps(o,indent=2)+'\n',encoding='utf8')
