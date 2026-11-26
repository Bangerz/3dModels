# Inverloch graphics drive comparison

Each build used the same ute, traffic seed, GPS circuit and five-minute duration through A’Beckett Street, Reilly Street, Bayview Avenue and Sandy Mount Avenue. Chrome emulated a 426 × 780 Android touch screen at DPR 3 on BenLaptop’s RTX 5070 Laptop GPU. The measurements below are intervals between main-scene render submissions. Mobile thermals and battery drain were outside this test.

## What changed on the drive

- Production Medium and final Medium rendered at 60.00 and 59.99 frames/s. Their p95 intervals were 17.1 and 17.7 ms. Median submitted triangles changed from 1,070,568 to 799,978, with 133 and 145 median draws. Both completed three laps. Six NPC cars moved during the final Medium run and seven moved in the original, using the same traffic seed. Final Medium transferred 2,738,636 production response-body bytes, compared with 2,763,319 for the baseline.
- Low/30 produced 30.00 scene renders/s and 59.99 browser callbacks/s. Its p95 was 33.9 ms. It drove 3.387 km at a 426 × 780 buffer. The same route at Medium/60 ran at 553 × 1,014.
- The distance LODs reduced median triangles by 25.3% at Medium. The first Stage 2 run overlapped a separate CPU software-rendering fixture. Its p99 was 23.8 ms, compared with 18.3 ms on the isolated repeat. Both are retained below.
- High and the Ultra streetscape rendered at 59.99 and 59.99 frames/s, both at 852 × 1,560. Ultra loaded a 285-byte compressed frontage recipe only on approach. The mapped geometry adds verandah ribs, glass reflections, finer tree crowns and contact shadows beneath nearby parked cars. [Matched shopfront close-up](shopfront-detail.jpg)
- The streaming stage reduced cold production bytes by 31,917 relative to the Ultra showcase. One worker prepared the heightfield, packed town arrays and terrain buffers. The town-centre detail image loaded during the drive, while the Norman Road image stayed out of this route. The blocked-worker fallback was separately exercised.
- Coastal haze softens distant geometry. Ultra additionally integrates a finite mist volume over Anderson Inlet. Players can toggle it live. The pier and nearby characters stay legible. The final Ultra pass completed at 59.98 frames/s, with p95/p99 intervals of 17.6/18.5 ms. [Matched view across the inlet](inlet-mist.jpg)
- The Ultra still-photo action accumulates four jittered display frames and downloads a PNG. Driving uses native MSAA. Encoding and still captures took place outside the timed drives.

## Five-minute results

| Candidate | Preset / target | Renders/s | Median / p95 / p99 (ms) | Median draws | Median triangles | Cold response body (bytes) | Distance (km) |
|---|---|---:|---:|---:|---:|---:|---:|
| baseline-290fa80 | Medium / 60 | 60.00 | 16.7 / 17.1 / 17.5 | 133 | 1,070,568 | 2,763,319 | 3.386 |
| stage1-medium60 | Medium / 60 | 59.98 | 16.7 / 17.2 / 17.6 | 133 | 1,070,568 | 2,764,412 | 3.386 |
| stage1-low30 | Low / 30 | 30.00 | 33.3 / 33.9 / 49.6 | 81 | 672,408 | 2,672,794 | 3.387 |
| stage2-medium60 | Medium / 60 | 59.97 | 16.7 / 17.4 / 23.8 | 144 | 799,592 | 2,764,994 | 3.386 |
| stage2-medium60-repeat | Medium / 60 | 59.98 | 16.7 / 17.7 / 18.3 | 144 | 799,592 | 2,764,994 | 3.386 |
| stage2-high60 | High / 60 | 59.99 | 16.7 / 17.1 / 17.7 | 160 | 1,034,593 | 2,764,994 | 3.386 |
| stage3-ultra60 | Ultra / 60 | 59.99 | 16.7 / 17.2 / 17.7 | 171 | 1,037,556 | 2,767,239 | 3.386 |
| stage4-ultra60 | Ultra / 60 | 59.99 | 16.7 / 17.2 / 17.8 | 172 | 1,037,556 | 2,735,322 | 3.387 |
| stage5a-ultra60 | Ultra / 60 | 59.99 | 16.7 / 17.6 / 18.5 | 171 | 1,037,556 | 2,737,306 | 3.387 |
| stage5b-ultra60 | Ultra / 60 | 59.98 | 16.7 / 17.6 / 18.5 | 172 | 1,037,556 | 2,738,921 | 3.386 |
| stage5b-medium60 | Medium / 60 | 59.99 | 16.7 / 17.7 / 18.3 | 145 | 799,978 | 2,738,636 | 3.386 |

Cold bytes cover the production versions of requested, successful same-origin GET responses, encoded at gzip level 6 for text. Drawing-buffer changes, per-minute intervals, startup observations, GPU identity and exact host and renderer hashes are in the [measurements](drive/measurements.json). [Route and reproduction instructions](drive/README.md).


## Video and interaction checks

[Watch the 17-second original Medium and updated Ultra drive](inverloch-driving-comparison.mp4). Both recordings start at the same coordinates in the same ute on the same GPS route. The numbers at the top come from separate five-minute runs with recording disabled.

The mobile Graphics menu applied 60 → 30 live and retained the Low selection through a town restart. Ultra's **Save antialiased photo** control produced two decoded 852 × 1,560 PNGs from the same camera, with the saved coastal mist setting on and off. The clearest difference is the far shoreline. [Settings checks](drive/settings-checks.json) · [Compare the inlet photos](coastal-mist-control.jpg)

All twelve two-thumb checks passed with zero page errors. Each town was tested with movement held while a second finger used the viewport or the look stick, at startup and after 30 seconds. [Inverloch](drive/release-touch/touch-inverloch.json) · [Moorooka](drive/release-touch/touch-moorooka.json) · [Logan](drive/release-touch/touch-logan.json)

## Pull requests

[Explore graphics settings](https://github.com/Ashley-Pettit/3dModels/pull/319) · [Ultra mist and photo controls](https://github.com/Ashley-Pettit/3dModels/pull/320) · [Generated renderer and optional street recipe](https://github.com/Ashley-Pettit/3dModels/pull/321)

[Frame pacing](https://github.com/Ashley-Pettit/ai-forge/pull/30) · [Distance LOD](https://github.com/Ashley-Pettit/ai-forge/pull/31) · [Ultra shopfronts](https://github.com/Ashley-Pettit/ai-forge/pull/32) · [Worker and neighbourhood streaming](https://github.com/Ashley-Pettit/ai-forge/pull/33) · [Inlet mist](https://github.com/Ashley-Pettit/ai-forge/pull/34) · [Temporal still capture](https://github.com/Ashley-Pettit/ai-forge/pull/35)
