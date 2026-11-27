# Reproduce the weather drives

Run from this directory. Use a local 3dModels checkout that contains both public weather commits. Set TIDEWIRE_PLAYWRIGHT to the absolute Playwright module entry and TIDEWIRE_CHROME to a Chrome executable with hardware acceleration. This capture used Windows and ANGLE D3D11.

The fixture serves the host's pinned Three r152.2 dependency locally. Download the same file to graphics/drive/viewer-three-0.152.2.min.js. Its SHA-256 is 218b9f9420af1ee2b773fa066cee0eeb52f7ac76ca2fa11b11b732c1ba0a6e39.

    curl.exe -L https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.min.js -o graphics/drive/viewer-three-0.152.2.min.js
    python weather/build-site.py 27da694566029eccf859d0b41e5fad61dcc1cadf before PATH_TO_3DMODELS
    python weather/build-site.py ecfe1b1cdc4d335a73777e534a3e3e3cd97e4499 after PATH_TO_3DMODELS
    node weather/weather-drive.mjs before-medium before-site medium baseline timing
    node weather/weather-drive.mjs after-medium after-site medium clear,showers,storm timing
    node weather/weather-drive.mjs after-medium-images after-site medium clear,showers images
    node weather/release-touch.mjs weather/after-site inverloch moorooka logan

Use fresh build labels when repeating a build. The runner records the host and bundle hashes, driving trace, render intervals, buffer resolution and completed response sizes. Timings use independent cold browser contexts. The matched camera and a fixed weather timestamp are only used in the test harness. File paths for weather-drive are resolved relative to its script.
