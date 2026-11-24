"""Make a labeled 1920×1080 split screen from the two recorded runtime cameras."""
import json
import math
import os
import statistics
import subprocess
import tempfile
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parent
ffmpeg = os.environ.get('REVIEW_FFMPEG', 'C:/AI/MOSS-Music-Local/tools/ffmpeg.exe')
probe = str(Path(ffmpeg).with_name('ffprobe.exe'))
segments = [(0, 7, "Reilly Street · Northern shopfronts"), (7, 15, "Reilly Street · Approaching the corner"),
            (15, 25, "A’Beckett Street · Bakery frontage"), (25, 30, "Rotary clock"),
            (30, 40, "Inverloch Library and The Hub"), (40, 47, "War memorial and plaza")]
fontdir = Path('C:/Windows/Fonts')
font = lambda name, size: ImageFont.truetype(str(fontdir / name), size)
reg = font('segoeui.ttf', 20)
strong = font('segoeuib.ttf', 29)


def run(args):
    subprocess.run([ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', *args], check=True)


def frame_overlay(title, before, after):
    page = Image.new('RGBA', (1920,1080), (0,0,0,0))
    text = ImageDraw.Draw(page)
    text.rectangle((0,0,1919,63), fill='#15212b')
    text.rectangle((0,1024,1919,1079), fill='#15212b')
    text.rectangle((958,64,961,1023), fill='#15212b')
    for x, side, sha in [(24,'Before',before),(984,'After',after)]:
        text.text((x,11), side, font=strong, fill='#f5f8fa')
        text.text((x+907,24), sha, font=reg, fill='#a9bac7', anchor='rt')
    text.text((24,1036),title,font=strong,fill='#f5f8fa')
    text.text((1896,1041),'Inverloch   ·   Map © OpenStreetMap contributors   ·   Elevation © Geoscience Australia 2025',font=reg,fill='#c2cbd1',anchor='rt')
    return page


def summary():
    all_runs = {}
    for label in ('before','after'):
        runs = [json.loads(p.read_text()) for p in sorted(root.glob(f'{label}-measure*.json'))]
        if not runs: return
        rows = [v for run0 in runs for v in run0['result']['frames']]
        gpu = [v for run0 in runs for v in run0['result']['gpu']]
        def stats(values):
            return {'count':len(values),'median':round(statistics.median(values),3),
                    'p95':round(sorted(values)[math.ceil(.95*len(values))-1],3)}
        costs = []
        for r in runs:
            local = [q for q in r['traffic'] if q['url'].startswith('/3dModels/') and q.get('wireBytes',0)>0 and q.get('status')==200]
            costs.append({'originalLocalBodyBytes':sum(q['originalBodyBytes'] for q in local),'localRequests':len(local),
                          'wireBytesIncludesHeadersAndProbesAndCDN':sum(q.get('wireBytes',0) for q in r['traffic']),
                          'localFiles':{q['url'].split('?')[0]:q['originalBodyBytes'] for q in local}})
        def route_stats(rows,gpu):
            return {'frameMs':stats([r[1] for r in rows]),'gpuMs':stats([r[1] for r in gpu]) if gpu else None,
                    'calls':stats([r[2] for r in rows]),'triangles':stats([r[3] for r in rows]),
                    'textures':stats([r[4] for r in rows]),'geometries':stats([r[5] for r in rows])}
        all_runs[label] = {'runtime':runs[0]['info'],'completeRoute':route_stats(rows,gpu),
                           'sections':{s:route_stats([r for r in rows if a<=r[0]<b],[r for r in gpu if a<=r[0]<b]) for a,b,s in segments},
                           'coldTraffic':costs,'readyMs':[r['readyMs'] for r in runs],'pageErrors':[e for r in runs for e in r['errors']]}
    for k in ('gpu','quality','dpr','size','anchor'): assert all_runs['before']['runtime'][k]==all_runs['after']['runtime'][k], k
    (root/'route-metrics.json').write_text(json.dumps(all_runs,indent=2)+'\n',encoding='utf-8')


def performance_card(metrics, shas):
    card = Image.new('RGB',(1920,1080),'#15212b')
    p = ImageDraw.Draw(card)
    heading = font('segoeuib.ttf',62)
    small = font('segoeui.ttf',31)
    col = font('segoeuib.ttf',40)
    value = font('segoeui.ttf',43)
    p.text((115,79),'Inverloch streetscape performance',font=heading,fill='#f5f8fa')
    p.text((118,177),'Moving route at 1600 × 900 · High quality · Chrome · GeForce RTX 5070 Laptop GPU',font=small,fill='#b7c8d4')
    for i,x in enumerate((1032,1480)):
        p.text((x,274),('Before','After')[i],font=col,fill='#f5f8fa')
        p.text((x+155,285),shas[i],font=small,fill='#9cabb6')
    names = ['Frame time · median / p95','Town GPU time · median / p95','Draw calls · median','Triangles · median','Local download · compressed bodies']
    vals = []
    for label in ('before','after'):
        row=metrics[label]; d=row['completeRoute']
        vals.append([f"{d['frameMs']['median']:.1f} / {d['frameMs']['p95']:.1f} ms",
                     f"{d['gpuMs']['median']:.2f} / {d['gpuMs']['p95']:.2f} ms" if d['gpuMs'] else 'Unavailable',
                     f"{d['calls']['median']:,.0f}",f"{d['triangles']['median']:,.0f}",
                     f"{row['coldTraffic'][0]['originalLocalBodyBytes']:,} B"])
    for idx,name in enumerate(names):
        y=359+idx*103
        p.line(((118,y-13),(1802,y-13)),fill='#374b59',width=2)
        p.text((118,y),name,font=value,fill='#e1e9ee')
        for i,x in enumerate((1032,1480)): p.text((x,y),vals[i][idx],font=value,fill='#fffdf9')
    p.text((118,923),'Measured during separate real-time playback with video capture and encoding off.',font=small,fill='#b7c8d4')
    p.text((118,978),'Frame delivery is refresh-rate limited. Download totals exclude third-party hosts and HTTP headers.',font=small,fill='#b7c8d4')
    return card


def detail_plate():
    gallery=Image.new('RGB',(1920,2090),'#15212b')
    pen=ImageDraw.Draw(gallery)
    for row,(name,title) in enumerate([('library','Inverloch Community Hub · Entrance'),('hotel','A’Beckett Street · Shops approaching the hotel')]):
        y=row*1045
        for side,label in enumerate(('before','after')):
            x=960*side
            source=Image.open(root/f'{label}-{name}.png').convert('RGB')
            assert source.size==(960,960)
            gallery.paste(source,(x,y+63))
            pen.text((x+22,y+13),f'{label.title()}    ·    {title}',font=strong,fill='#f5f8fa')
    gallery.save(root/'ABeckett-Reilly-civic-hotel.png',optimize=True)


def compose():
    info = [json.loads((root/f'{s}-film-info.json').read_text()) for s in ('before','after')]
    opening = [json.loads((root/f'{s}-opening-info.json').read_text()) for s in ('before','after')]
    for k in ('gpu','quality','dpr','size','anchor'): assert info[0]['info'][k]==info[1]['info'][k], k
    for k in ('frameCount','duration','fps'): assert info[0][k]==info[1][k], k
    for i in (0,1):
        assert opening[i]['info']==info[i]['info']
        assert opening[i]['frameCount']==100
    shas = [m['info']['commit'] for m in info]
    with tempfile.TemporaryDirectory() as tmpname:
        tmp = Path(tmpname)
        args=[]
        for label in ('before','after'):
            listfile=tmp/f'{label}.ffconcat'
            listfile.write_text('ffconcat version 1.0\n'+''.join("file '"+(root/f'{label}-{part}.mp4').as_posix().replace("'","'\\''")+"'\n" for part in ('east','camera')),encoding='utf-8')
            args+=['-f','concat','-safe','0','-i',str(listfile)]
        intro=opening[0]['duration']
        chapters=[(0,intro,'Looking east from 7 A’Beckett Street · Street View reference, Oct 2025')]+[(a+intro,b+intro,s) for a,b,s in segments]
        filters = ['[0:v][1:v]hstack,pad=1920:1080:0:64:color=black[v0]']
        for i,(a,b,title) in enumerate(chapters):
            name = tmp / f'overlay-{i}.png'
            frame_overlay(title,*shas).save(name)
            args += ['-i',str(name)]
            filters.append(f"[v{i}][{i+2}:v]overlay=enable='gte(t,{a})*lt(t,{b})'[v{i+1}]")
        card = tmp / 'performance.png'
        metrics = json.loads((root/'route-metrics.json').read_text(encoding='utf-8'))
        performance_card(metrics,shas).save(card)
        end_seconds = 6
        args += ['-f','image2','-loop','1','-framerate',str(info[0]['fps']),'-t',str(end_seconds),'-i',str(card)]
        filters += [f'[v{len(chapters)}]scale=in_range=auto:out_range=tv:out_color_matrix=bt709,format=yuv420p,setsar=1[scene]',f'[{2+len(chapters)}:v]scale=in_range=auto:out_range=tv:out_color_matrix=bt709,format=yuv420p,setsar=1[card]','[scene][card]concat=n=2:v=1:a=0[full]']
        movie = root/'ABeckett-Reilly-comparison.mp4'
        run([*args,'-filter_complex',';'.join(filters),'-map','[full]','-an','-c:v','libx264','-crf','20','-preset','medium','-maxrate','5100k','-bufsize','8500k','-pix_fmt','yuv420p','-color_range','tv','-colorspace','bt709','-color_primaries','bt709','-color_trc','bt709','-movflags','+faststart',str(movie)])
        # Extract the same frame delivered in the movie. To use a different storefront set REVIEW_STILL_SEC.
        still = os.environ.get('REVIEW_STILL_SEC','0')
        run(['-ss',still,'-i',str(movie),'-frames:v','1',str(root/'ABeckett-Reilly-comparison.png')])
        checked = json.loads(subprocess.check_output([probe,'-v','error','-show_entries','stream=codec_name,width,height,pix_fmt,avg_frame_rate,nb_frames:format=duration,size','-of','json',str(movie)]))
        stream=checked['streams'][0]
        assert (stream['width'],stream['height'],stream['codec_name'],stream['pix_fmt'],int(stream['nb_frames']))==(1920,1080,'h264','yuv420p',info[0]['frameCount']+opening[0]['frameCount']+end_seconds*info[0]['fps'])
        run(['-i',str(movie),'-f','null','-'])
        (root/'video-verification.json').write_text(json.dumps(checked,indent=2)+'\n',encoding='utf-8')


if __name__=='__main__':
    import sys
    if '--details-only' in sys.argv:
        detail_plate()
    else:
        summary()
        if '--metrics-only' not in sys.argv: compose()
        if all((root/f'{s}-{p}.png').exists() for s in ('before','after') for p in ('library','hotel')): detail_plate()
