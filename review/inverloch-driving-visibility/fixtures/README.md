# Reproduce the visibility views

Use Windows Chrome, Node, Playwright Core and Python with NumPy and Pillow. Set `TIDEWIRE_CHROME` to the Chrome executable and `TIDEWIRE_PLAYWRIGHT` to the absolute path to Playwright Core's `index.mjs`. Run the commands in this directory. Store a copy of Three.js 0.152.2 in `harness/viewer-three-0.152.2.min.js`. The fixture expects SHA-256 `218b9f9420af1ee2b773fa066cee0eeb52f7ac76ca2fa11b11b732c1ba0a6e39`.

The public Git checkout should contain the baseline, the ground-only release and the road release. Pass its path as the optional last argument of `build-site.py`. These builds preserve Git blob bytes and add the commit stamp used by the viewer. Create fresh output names for each repeat.

```powershell
Invoke-WebRequest https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.min.js -OutFile harness/viewer-three-0.152.2.min.js
python build-site.py 290fa804516e4154a7fa9b4f6c14d608d7337964 previous
python build-site.py d670865228bed0800c87ce3db054ad51a2a98a41 current
python build-site.py f1e106079b1e87625a7f83ca5c5303bcb9ab3f61 ground
python build-site.py 73046a9bf98cbde6e14dfbe0e98851ab6d03db9c roads
node visibility.mjs current-medium-r2 current-site medium all
node visibility.mjs current-ultra current-site ultra all
node visibility.mjs previous-medium previous-site medium all
node visibility.mjs replay-medium current-site medium replay
node visibility.mjs replay-ultra current-site ultra replay
node visibility.mjs blur-medium ground-site medium paired-distance
node visibility.mjs blur-ultra ground-site ultra paired-distance
node visibility.mjs depth-final-medium roads-site medium depth
node visibility.mjs depth-final-ultra roads-site ultra depth
python visual-metrics.py
```

`all` includes three short GPS drives on each build. Each drive enters the same ute, follows the normal GPS for 33 m, captures the native canvas while moving, stops the car and replays its camera and projection. `replay` reads the measured poses and holds them while forcing a different scale or geometry level. `paired-distance` switches the terrain shader twice at the same pose and verifies the restoration independently from clock, actors and driving. `depth` compares native pavement and terrain with constant-colour materials and temporarily hides the terrain to establish the road footprint. The reported road losses in square metres come from the independent geometric survey.

To record a normal driving and braking sequence on Cuttriss in a separate run, use `node visibility.mjs cuttriss-clip current-site medium clip`. The video is supplementary. The landmark measurements use lossless native PNGs.

The separate timed drive uses the [five-minute circuit and runner](https://github.com/Bangerz/3dModels/tree/8f9c503a42b9077638e6643728e8ac7cbd31f711/review/inverloch-graphics/drive). Use the current and roads builds above at Medium/60 for 300 seconds with recording disabled. [Pre-graphics site](https://github.com/Ashley-Pettit/3dModels/commit/290fa804516e4154a7fa9b4f6c14d608d7337964) · [Original public renderer](https://github.com/Ashley-Pettit/3dModels/commit/d670865228bed0800c87ce3db054ad51a2a98a41) · [Both fixes](https://github.com/Bangerz/3dModels/commit/73046a9bf98cbde6e14dfbe0e98851ab6d03db9c)
