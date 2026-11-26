# Inverloch driving visibility and road surfaces

## Distant objects while driving

We followed the normal GPS in the same ute on A’Beckett Street, Cuttriss Street and Norman Road. Cuttriss uses the ordinary town renderer. A’Beckett and Norman include locally authored detail. In each case we captured the native canvas after 33 m at about 49 km/h, stopped the car, then replayed the recorded camera pose, projection and render scale. We compared unchanged features in the distance: A’Beckett's clock, a Cuttriss tree and roof, and the far shoreline and poles on Norman. The tests covered the current Medium and Ultra presets plus the pre-graphics build on Medium.

The emulated drives showed no general motion-only loss of sharpness in these landmarks. Medium held a 553 × 1,014 buffer and Ultra held 852 × 1,560. The largest change in mean adjacent-pixel luminance contrast between moving and stopped was under 0.25% on the current build. Replacing adaptive scaling with the fixed preset ceiling reproduced the stopped crops exactly. Forcing near geometry across the town or raising 4× guest texture filtering to 8× gave little change in the selected crops. Forcing a 1× drawing buffer visibly softened them: crop edge contrast fell by 12–40%. That controlled test gives a way of reproducing the appearance. No observed drive selected 1× automatically. Perceived motion softness on the reporting device remains unresolved.

[Lossless moving and stopped landmark crops](driving-landmarks.png) · [Cuttriss Street drive and stop](cuttriss-drive.mp4) · [Moving and stopped measurements](measurements/visual-metrics.json) · [View the forced-resolution comparison](render-scale-control.png) · [Scale and geometry controls](measurements/scale-and-lod.json)

## Confirmed ground texture defect

On ordinary terrain the existing sharpening shader could flatten bright and dark source details by excluding the centre sample from its own allowed colour range. A one-line correction includes it. In a same-frame switch between the old and new GPU shaders on Ultra, 35,857 pixels changed by at least 3/255 in a channel at Cuttriss Street, 52,240 at Cashin Street and 31,624 on Bass Highway. Restoring the original test state exactly reproduced the corresponding PNG. The authored A’Beckett and Norman ground overlays showed negligible difference. The fix uses the same ground texture, draw calls and texture samples.

[Ground detail comparison](ground-texture-comparison.png) · [Source texel samples](measurements/terrain-clamp-results.json) · [Ground-filter source PR](https://github.com/Ashley-Pettit/ai-forge/pull/37) · [Explore ground-filter PR](https://github.com/Ashley-Pettit/3dModels/pull/340)

## Confirmed pavement and terrain intersections

The pre-graphics and current Medium builds showed the same terrain punching through the road. Fixed cameras at three lateral offsets isolated the road footprint and the terrain depth. An independent survey checked the uppermost road surface across 12 × 12 m patches at 10 cm intervals. The fix fits crossing faces to the local terrain ridge, follows the slope around junction caps and fits highway paint to the finished pavement. Driving paths, the nine tested bridges and sampled pre-existing host-draped geometry matched the original buffers.

| Road | Grass above visible asphalt before, Medium | Before, Ultra | After, both presets |
|---|---:|---:|---:|
| Ocean View Court | 6.15 m² | 8.44 m² | 0 m² |
| Paperbark Place | 10.25 m² | 23.70 m² | 0 m² |
| Cape Paterson–Inverloch Road | 30.90 m² | 30.96 m² | 0 m² |
| Lees Road | 7.69 m² | 3.86 m² | 0 m² |
| Surf Parade | 0 m² | 13.13 m² | 0 m² |

The sampled A’Beckett west patch had zero exposed asphalt loss on the geometric survey in all builds. Across the wider town survey, 1,563 Medium road faces and 2,449 Ultra faces had sampled points below the terrain. Both counts fell to zero. Bridges and roundabouts have their own geometry and were excluded from this face sweep. Of 26,824 highway marking samples per tier, 327 were below the surface on Medium and 558 on Ultra before the fix. Both fell to zero.

A screen-space colour mask also counts far roads hidden by a nearer hillside. On an offset Paperbark camera, traced interior pixels hit the hillside about 7 m away and the road about 21–24 m away, with asphalt above its local terrain. The survey measurements above distinguish those ordinary sightline occlusions.

[Matched road views](road-surface-comparison.jpg) · [Slope and construction measurements](measurements/geometric-clearance.json) · [Paperbark rays](measurements/paperbark-sightline.json) · [Road-fitting source PR](https://github.com/Ashley-Pettit/ai-forge/pull/38) · [Explore road-fitting PR](https://github.com/Ashley-Pettit/3dModels/pull/341)

## Same-drive performance

Both runs used the same five-minute A’Beckett–Reilly–Bayview–Sandy Mount GPS circuit, ute, traffic seed, 426 × 780 Android touch viewport, Medium/60 and Chrome on the RTX 5070 Laptop GPU. Recording was disabled throughout. Timing measures main-scene render submissions. One paired run cannot establish handset thermals or a small performance improvement.

| Five-minute drive | Renders/s | p50 / p95 / p99 interval | Median draws | Median triangles | Cold production body bytes |
|---|---:|---:|---:|---:|---:|
| Original | 58.75 | 16.9 / 18.2 / 18.8 ms | 144 | 799,592 | 2,784,292 |
| Both fixes | 56.47 | 17.7 / 18.6 / 19.2 ms | 145 | 805,817 | 2,785,638 |

The browser callback rate shifted during the original run: 59.97/s in minute one and 56.60/s in minute five. The candidate averaged 56.48 callbacks/s. A subsequent 90-second repeat of the original route opening delivered 56.38 renders/s and 56.39 callbacks/s. The two five-minute runs therefore had different scheduling conditions. [Original repeat](measurements/warm-control.json)

The road and paint meshes use the same draw calls. Their triangle count rose 3.6% on Medium and 7.8% on Ultra. Four paired Node builds on the laptop put median one-time road construction at 83.5 → 138 ms on Medium and 81.5 → 146.5 ms on Ultra. Together the compiled fixes add 1,290 bytes at gzip level 6. The additional geometry is generated locally. The twelve emulated two-thumb checks passed at startup and after 30 seconds across Inverloch, Moorooka and Logan. Physical handset validation remains deferred.

[Drive results by minute, exact hashes and costs](measurements/drive-comparison.json) · [Browser fixture and reproduction steps](fixtures/README.md)
