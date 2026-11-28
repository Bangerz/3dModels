# Shipped Inverloch v46 on physical Pixel 7

V46 averaged **59.97 scene renders/s** across 171 seconds and 1,899.6 m of matched camera replay, with **17.8 / 23.3 / 24.3 ms** scene interval p50 / p95 / p99. The phone started cooler than the earlier v44/v45 runs. This single run is a production-build measurement without a heat-matched control.

| Street | Repeat | Scene renders/s | p50 / p95 / p99 ms | Median draws | Median triangles |
|---|---:|---:|---:|---:|---:|
| A’Beckett | 1 | 60.00 | 18.2 / 23.2 / 24.0 | 177 | 878,699 |
| Cuttriss | 1 | 60.00 | 17.6 / 23.4 / 24.3 | 129 | 749,686 |
| A’Beckett | 2 | 59.87 | 18.0 / 23.1 / 23.9 | 185 | 881,364 |
| Cuttriss | 2 | 60.00 | 17.2 / 23.4 / 24.5 | 129 | 749,702 |
| A’Beckett | 3 | 59.97 | 18.6 / 23.3 / 24.2 | 185 | 881,364 |
| Cuttriss | 3 | 60.00 | 17.6 / 23.8 / 24.8 | 129 | 749,686 |

- Virtual skin 30.1 → 35.1°C (peak 35.1°C), maximum Android thermal status 0, G3D temperature 33–55°C sampled. Thermals are Android HAL readings during setup and replay.
- Medium with a 60 FPS target on native Chrome 157.0.8103.78, Android 17 and Mali-G710. Physical viewport 411×758 CSS px at DPR 2.625, scene buffer 534×985. Browser rAF averaged 90.02 callbacks/s. SurfaceFlinger Chrome content cadence was 90.1 FPS across 13 short history windows. The app scene metric counts actual WebGL renderer returns.
- Zero page exceptions. Per-street metrics exclude 0.5 s at each clip boundary. The 171-second overall metric includes boundaries. The occupied native ute and camera followed the earlier 40 s A’Beckett and 17 s Cuttriss trace repeated three times, with a fixed clear-weather clock.

The original input files came from the deployed GitHub Pages artifact for merge d083254 and matched the live HTTPS sources by SHA-256. The test served them over a handset loopback tunnel with the existing local measurement and camera-replay hooks and local Three.js copy. The original host HTML SHA-256 was ca2a4a47ef83f67628804be856ad34722e154424b6ce26153b3e265b9cb9836a, model SHA-256 was 1c9e84558565f7fc9a809ab452b3f115bed9f01506f5364ea413c92917500d7a, and map SHA-256 was 1bef586b06efcbd72992c36188d0e1b8c0ebde9ab1b2c6241acc7c8784d92ca1. The shared trace SHA-256 was d7bdf2112e9ed0ed273a87d0f48a6e7d53483b4f91c7b993250132c3895fd6dd. Replay start was 2026-11-28T00:43:50.383200+00:00.

[Structured timing results](summary.json) · [Live production browser verification](production-browser.json) · [v44/v45 thermal comparison](../inverloch-v45/pixel7/) · [Successful Pages deployment](https://github.com/Ashley-Pettit/3dModels/actions/runs/46088524006)
