# Inverloch Explore coastal weather validation

The change adds small drifting clouds and matching sun shadows, local rain, wet bitumen that dries, and occasional lightning over Anderson Inlet with distance-delayed thunder. Ordinary showers occupy roughly a minute of each 5½-minute window. Every fourth shower becomes a storm. Ultra also renders close-range water ripples.

[Watch the 17-second before-and-after drive on Cuttriss](cuttriss-weather-drive.mp4) · [Compare the A’Beckett streetscape](abeckett-weather-comparison.jpg) · [See the inlet lightning](inlet-lightning-comparison.jpg)

The local public-host baseline was 27da694566029eccf859d0b41e5fad61dcc1cadf, combining the current main host with the earlier terrain-fitted road and ground filtering changes. The candidate host was ecfe1b1cdc4d335a73777e534a3e3e3cd97e4499 with renderer 6b2e0e1e558034ebf3ba28b4153e0b2ae4823f03 and model cache revision 42. The benchmark loaded the complete local public host at /3dModels/inverloch/explore/. The weather epoch override and camera poses are fixture-only.

## Reproduction

[Fixture setup and commands](reproduce/README.md) · [Timing, transfer and route measurements](measurements/drives.json) · [Thunder events](measurements/event.json) · [Wetness recovery](measurements/recovery.json)

The fixture blocks external services using CSP. The captured console records unrelated font and service requests that this isolation policy rejects. The native touch test uses trusted DevTools input and its own local route server.

## Timed Explore drives

Each timing row is one fresh browser context on BENLAPTOP’s RTX 5070 Laptop GPU. The viewport emulates 426 × 780 CSS pixels, DPR 3, Android and touch. Chrome uses ANGLE D3D11 and reduced motion is disabled. A native ute follows the host’s ordinary GPS, vehicle, collision and chase camera. Both builds use local noon and identical route and camera inputs. Each weather phase is staged by the scene’s epoch clock, which then advances normally during the drive. Timing uses render-return timestamps and a separate browser animation callback. Device emulation runs with native laptop CPU and GPU performance. Image and video capture run separately.

| Tier | Street | Condition | Render/s | Render ms p50/95/99 | Callback ms p50/95/99 | Draws p50/95/99 | Triangles p50/95/99 | Draw buffer | Distance (m) | Served body bytes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Medium | A’Beckett circuit | baseline | 60 | 16.7/17.5/18.1 | 16.7/16.9/17.3 | 170/304/325 | 855750/1045839/1069522 | 553x1014 | 414.39 | 2819641 |
| Medium | Cuttriss Street | baseline | 59.76 | 16.7/18.3/21.2 | 16.7/16.9/17.5 | 121/123/123 | 755736/769928/769928 | 553x1014 | 205.04 | 2819641 |
| Medium | A’Beckett circuit | clear | 60 | 16.7/17.8/18.7 | 16.7/16.8/16.9 | 170/302/321 | 855751/1045719/1069522 | 553x1014 | 414.39 | 2824511 |
| Medium | Cuttriss Street | clear | 59.94 | 16.7/17.6/18.4 | 16.7/16.8/17 | 121/123/123 | 755736/769928/769928 | 553x1014 | 205.05 | 2824511 |
| Medium | A’Beckett circuit | showers | 60 | 16.7/17.7/18.2 | 16.7/16.8/17.1 | 171/300/324 | 855751/1045369/1069558 | 553x1014 | 414.4 | 2824511 |
| Medium | Cuttriss Street | showers | 60 | 16.7/17.5/18.2 | 16.7/16.8/17.1 | 122/124/124 | 755736/769928/769928 | 553x1014 | 205.27 | 2824511 |
| Medium | A’Beckett circuit | storm | 59.95 | 16.7/17.7/18.2 | 16.7/16.8/17.1 | 171/300/324 | 855750/1045369/1069558 | 553x1014 | 414.39 | 2824511 |
| Medium | Cuttriss Street | storm | 59.94 | 16.7/17.5/18 | 16.7/16.8/16.9 | 122/124/124 | 755736/769928/769928 | 553x1014 | 205.28 | 2824511 |
| Low | Cuttriss Street | showers | 30 | 33.3/34/34.4 | 16.7/16.8/16.9 | 77/80/80 | 537162/541872/541882 | 426x780 | 136.08 | 2754107 |
| Ultra | Cuttriss Street | showers | 60 | 16.6/17.5/18.2 | 16.7/16.8/17 | 140/142/142 | 1035817/1045123/1054016 | 852x1560 | 136.08 | 2824797 |

Served body bytes count successful local GETs, including the deterministic harness and version-matched local Three.js substitute. The untouched minified bundle is tracked separately below. The local server compresses textual response bodies and excludes HTTP headers and remote services.
Minified model grew from 733,909 B to 750,161 B (+16,252 B). Gzip level 6 grew from 209,003 B to 213,573 B (+4,570 B).

The Medium per-condition aggregate pools the raw intervals from the 40 s and 17 s streets. Each sampled interval contributes once.

| Condition | Render ms p50/95/99 | Callback ms p50/95/99 |
| --- | --- | --- |
| baseline | 16.7/17.7/19.0 | 16.7/16.9/17.3 |
| clear | 16.7/17.7/18.5 | 16.7/16.8/16.9 |
| showers | 16.7/17.6/18.2 | 16.7/16.8/17.1 |
| storm | 16.7/17.6/18.1 | 16.7/16.8/17.1 |

## Visual evidence

The Medium stills use the same saved world camera and projection on each street at 553 × 1014 native pixels. The comparisons retain A’Beckett’s clock tower and distant signs, and Cuttriss’s roofline, verge and road edge. The separate landmark files crop the original buffer at one pixel per pixel.

- [A’Beckett matched comparison](abeckett-weather-comparison.jpg)

- [Cuttriss matched comparison](cuttriss-weather-comparison.jpg)

- [A’Beckett shower landmarks](after-medium-images/showers-abeckett-landmarks.png)

- [Cuttriss shower landmarks](after-medium-images/showers-cuttriss-landmarks.png)

In temporary same-frame shader probes, disabling cloud shadows increased asphalt luma by 26.18/255 at Cuttriss in ordinary showers and 37.09/255 at A’Beckett in storm. Other sampled road patches were outside shadow. The clear and rainy sky and ground shared the cloud-map, cover and offset uniforms by identity. The early cloud-only test held the camera and shifted the epoch by 45 seconds; the selected sky region shifted by 7.5–7.8 mean luma levels. Disabling just wet asphalt in the final rainy views raised the matched road patches by 10.32–14.67/255. Hiding rain changed 1,041–2,591 native pixels across the four rainy views.

The live inlet strike reached the original host thunder callback after 2.056 s. Web Audio source running at start was True. [Live strike capture](inlet-lightning-comparison.jpg)

The model wetness recovered through 1.000 → 0.515 → 0.000. The rain layer was visible during the wet stage and hidden through drying and dry stages.

With the Ultra inlet camera, wave time and rain streaks held, toggling the water rain uniform changed 10,079 of 241,944 pixels in the water crop. [Ripple enabled](after-ripples/showers-ripples-on.png), [ripple disabled](after-ripples/showers-ripples-off.png), [pixel comparison](after-ripples/pixel-difference.json).

[Side-by-side drive with measured performance](cuttriss-weather-drive.mp4).

## Touch

Trusted two-finger release checks exercised touch on the 3D view and on the look stick at startup and after 30 seconds. Inverloch 4/4, Moorooka 4/4, Logan 4/4.

All visual and timing evidence is local Chromium emulation. This evidence records technical behavior; physical-device validation was deferred.


## Integration

The [Explore delivery PR](https://github.com/Ashley-Pettit/3dModels/pull/350) contains the generated renderer and the host changes for wet bitumen, audio and the model cache version. Review the [weather-only commit](https://github.com/Bangerz/3dModels/commit/ecfe1b1cdc4d335a73777e534a3e3e3cd97e4499) after the previous ground and road fixes in #340 and #341. The [Explore CI check passed](https://github.com/Ashley-Pettit/3dModels/actions/runs/45920400212).

Source review is split into [passing clouds](https://github.com/Ashley-Pettit/ai-forge/pull/39), [rain showers](https://github.com/Ashley-Pettit/ai-forge/pull/40), and [inlet storms](https://github.com/Ashley-Pettit/ai-forge/pull/41). The [exact source commit used for the release](https://github.com/Ashley-Pettit/ai-forge/commit/6b2e0e1e558034ebf3ba28b4153e0b2ae4823f03) combines those changes with the two pending terrain fixes. SHA-256 of the generated and tested JS is 90ce4b56e843dc7bb92c28d7d442bd2e1653c77c8f3953189acad04647b2c844.

The compiled embed, scoped TypeScript check and weather-module lint passed. File-wide lint on embed.ts still reports its existing host window cast. The trimmed native checkout references unrelated missing modules during whole-app type-checking.
