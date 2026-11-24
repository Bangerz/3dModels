# Inverloch terrain tiling benchmark

The 128-cell tiles retain the town’s 1,101,022 land triangles. In the street and ordinary flight views, the renderer can skip terrain outside the camera’s view. The 64-cell tiles cull more triangles and add more draw calls. The 128-cell version submitted fewer draws than 64 cells in all four tests.

Public baseline 3c163a9aa11564bd0038affc069fc37b9a11fbf6. Chrome 158 on Windows, ANGLE Direct3D 11, RTX 5070 Laptop GPU, 1600 × 900, pixel ratio 1, High quality, noon. The main run sampled a moving street camera for 16 s, a whole-map orbit for 8 s and a shoreline crossing for 8 s. A separate run sampled a normal 610–725 m flight for 10 s. AC power and scheduling continuity were checked throughout both runs. The all-visible orbit uses an 11.2 km camera height above the normal control limit.

## Whole-scene rendering

| Camera | Land mesh | Median draws | Median triangles | Frame ms, median / p95 | GPU ms, median / p95 |
|---|---|---:|---:|---:|---:|
| Street at the clock | Single mesh | 319 | 2,877,273 | 16.70 / 17.20 | 3.22 / 6.25 |
| Street at the clock | 64 cells | 374 | 2,129,060 | 16.70 / 17.20 | 4.69 / 7.62 |
| Street at the clock | 128 cells | 340 | 2,208,794 | 16.70 / 17.20 | 2.87 / 6.22 |
| Ordinary aerial flight | Single mesh | 636 | 3,790,295 | 16.70 / 16.90 | 5.18 / 8.95 |
| Ordinary aerial flight | 64 cells | 692 | 3,155,867 | 16.70 / 17.20 | 5.19 / 8.07 |
| Ordinary aerial flight | 128 cells | 648 | 3,286,501 | 16.70 / 17.10 | 3.42 / 6.33 |
| Whole map visible | Single mesh | 597 | 4,216,960 | 16.70 / 16.80 | 6.08 / 10.41 |
| Whole map visible | 64 cells | 739 | 4,216,912 | 16.70 / 16.80 | 6.00 / 9.98 |
| Whole map visible | 128 cells | 640 | 4,217,130 | 16.70 / 17.10 | 5.49 / 9.20 |
| Shoreline crossing | Single mesh | 200 | 2,850,156 | 16.70 / 16.90 | 4.25 / 7.13 |
| Shoreline crossing | 64 cells | 243 | 2,077,835 | 16.70 / 17.00 | 3.70 / 6.86 |
| Shoreline crossing | 128 cells | 209 | 2,159,523 | 16.70 / 17.10 | 3.89 / 6.43 |

## Land drawn at the same point in each route

| Camera | Single mesh, draws / triangles | 64 cells, draws / triangles | 128 cells, draws / triangles | Changed land-only pixels, baseline vs 128 |
|---|---:|---:|---:|---:|
| Street at the clock | 1 / 1,101,022 | 52 / 393,182 | 19 / 466,910 | 0 of 1,440,000 |
| Ordinary aerial flight | 1 / 1,101,022 | 58 / 466,688 | 19 / 597,760 | 39 of 1,440,000 |
| Whole map visible | 1 / 1,101,022 | 143 / 1,101,022 | 42 / 1,101,022 | 5 of 1,440,000 |
| Shoreline crossing | 1 / 1,101,022 | 41 / 335,872 | 12 / 393,216 | 44 of 1,440,000 |

## Cost to open the viewer

| Land mesh | Tiles | Land buffers, bytes | Local cold body bytes | HTTP body requests | Land construction ms, main / flight run | Model-ready ms, main / flight run |
|---|---:|---:|---:|---:|---:|---:|
| Single mesh | 1 | 30,876,264 | 2,885,025 | 10 | 34.9 / 36.7 | 2,773 / 2,721 |
| 64 cells | 143 | 24,794,932 | 2,885,099 | 10 | 37.5 / 37.5 | 2,701 / 2,720 |
| 128 cells | 42 | 24,531,572 | 2,885,099 | 10 | 41.7 / 36.5 | 2,755 / 2,840 |

Buffer totals sum distinct typed-array backing stores for land geometry attributes and indices. Build time covers the synchronous public terrain-builder call and scene insertion, including the terrain skirt. Cold local bytes sum original HTTP response bodies under Node gzip for text and the stored encoding for images. The bootstrap and data are held constant across pilot runs. Instrumentation and HTTP headers are excluded.

## Scope of the evidence

Whole-scene counters include other visible objects and animated traffic. Land-only images hide other drawables and disable shadow maps so moving actors do not dominate comparisons. Small raster differences are reported above. GPU elapsed time uses asynchronous WebGL timer queries on one frame in four. The 60 Hz display constrains frame-delivery measurements. Figures describe this computer.

Earlier scouts included the native 4 km camera limit, a Windows archive with CRLF conversion, or a change between battery and AC. One repeat crossed confirmed Windows Modern Standby and had 64 s and 271 s frame gaps. These scouts and repeats did not supply the timing tables. The final matched runs used the canonical public viewer bundle and a native power-state observer.

The four-row visual comparison is in terrain-comparison.png. The measurements and pixel counts are in terrain-benchmark.json, with raw per-frame data in the high-ac and high-flight JSON files.
