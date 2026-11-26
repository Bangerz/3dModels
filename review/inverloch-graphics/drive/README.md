# The Inverloch driving fixture

Each complete run used a fresh Chrome context, a 426 × 780 portrait touch viewport, device pixel ratio 3, seed 0x2f67 and the same native ute. The browser ran headless with ANGLE D3D11 on the RTX 5070 Laptop. Normal GPS steering, collisions, active traffic, chase camera and adaptive resolution remained enabled. No physical handset was involved.

The loop uses A’Beckett Street, Reilly Street, Bayview Avenue and Sandy Mount Avenue. The first vehicle and camera are staged at the same coordinates in every build. The five-minute measurements run in real time without screen recording. The results include each lane's route hash, host and bundle SHA-256, geometry submissions, drawing-buffer dimensions, per-minute intervals, resource transfers and runtime errors. [Drive path](route.json) · [Full measurements](measurements.json)

The measured intervals start when the main scene render call returns to JavaScript. They do not measure battery use, thermal behaviour, or presentation time on a phone. Browser animation callbacks are recorded separately from rendered frames. Cold transfer totals count successful trial requests for the game files, with gzip level 6 for text. The small measurement hooks are excluded from the production byte total. A restrictive local test CSP blocks the external font stylesheet consistently.

Fixed visual comparisons run separately with identical camera position, direction, time of day, viewport and drawing buffer for both builds. The short drive film was recorded separately from the performance samples.

## Repeat the drive

Run from this directory in a checkout containing the host commits named in the results. Use Python 3.12+, Node.js, Chrome and Playwright Core. Set `TIDEWIRE_CHROME` to the Chrome executable and `TIDEWIRE_PLAYWRIGHT` to the absolute path of Playwright Core’s `index.mjs`. The recorded profile uses Windows ANGLE D3D11. Use a fresh label for each run.

```powershell
Invoke-WebRequest https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.min.js -OutFile viewer-three-0.152.2.min.js
if ((Get-FileHash viewer-three-0.152.2.min.js).Hash -ne '218B9F9420AF1EE2B773FA066CEE0EEB52F7AC76CA2FA11B11B732C1BA0A6E39') { throw 'Unexpected Three.js file' }
python build-site.py 290fa804516e4154a7fa9b4f6c14d608d7337964 original
python build-site.py 9e76ed9adec4605376d4954943ff9f81033278cf updated
node emulated-drive.mjs --label original-medium --site original-site --commit 290fa804516e4154a7fa9b4f6c14d608d7337964 --tier medium --fps 60 --seconds 300
node emulated-drive.mjs --label updated-medium --site updated-site --commit 9e76ed9adec4605376d4954943ff9f81033278cf --tier medium --fps 60 --seconds 300
node emulated-drive.mjs --label updated-ultra --site updated-site --commit 9e76ed9adec4605376d4954943ff9f81033278cf --tier ultra --fps 60 --seconds 300
```

Each command writes a fresh JSON receipt. Run them serially on an otherwise idle GPU. The original published comparison stays in [measurements.json](measurements.json).
