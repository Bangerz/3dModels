# Reproduce the A’Beckett Street and Reilly Street comparison

The recording uses two isolated builds of the actual Inverloch Explore page. The baseline is `eb5943c598253b8e9d570ff964ca7bb3d8fa78b6`. The candidate is `adefa3988d603b5c7108b22878509adbecc1e696`. The source SHA stamped by each built page is recorded in its film and benchmark metadata.

```powershell
$repo = 'E:/Ashley/3dModels'
$review = 'E:/Ashley/ABeckett-review'
$stage = Join-Path $env:TEMP ('abeckett-' + [Guid]::NewGuid())
New-Item -ItemType Directory -Path $stage | Out-Null
git -C $repo fetch https://github.com/Bangerz/3dModels.git claude/abeckett-streetscape
$revisions = @{ before='eb5943c598253b8e9d570ff964ca7bb3d8fa78b6'; after='adefa3988d603b5c7108b22878509adbecc1e696' }
foreach ($side in 'before','after') {
  $sha = $revisions[$side]
  git -C $repo archive --format=zip -o "$stage/$side.zip" $sha
  python -m zipfile -e "$stage/$side.zip" "$stage/$side-source"
  python "$review/build-review.py" "$stage/$side-source" "$stage/$side-site" $sha
  node "$review/run.mjs" "$stage/$side-site" $side opening
  node "$review/run.mjs" "$stage/$side-site" $side film
  node "$review/run.mjs" "$stage/$side-site" $side measure
  node "$review/run.mjs" "$stage/$side-site" $side details
}
python "$review/compose.py"
node "$review/touch.mjs" "$stage/after-site" inverloch moorooka logan
```

Set `TIDEWIRE_PLAYWRIGHT` to the installed Playwright Core entry point, `TIDEWIRE_CHROME` to the Chrome executable and optionally `REVIEW_FFMPEG` to a local FFmpeg build with libx264, with FFprobe beside it. The build wrapper runs the repository's own build script and adapts the Linux date formatter to Windows. A loopback server delivers the built app with gzip for text, ordinary browser caching and the production image encodings. It exposes the existing camera, renderer and town-block coordinate transform in memory. External API and multiplayer connections are disabled. The usual CDN scripts and fonts remain available.

The opening four seconds start from the supplied October 2025 Street View sightline at 7 A’Beckett Street (pano rbCTBBTNtDyWgAYLj1aMkA). The camera starts at block x 33.9 m, z 36.1 m, 2.3 m above the ground, bearing 96.3°, pitch +4.17°, and glides 3.8 m east. The following camera path is a separate continuous cubic route in the town's metres. Its points of interest are The Larder, the Bliss and TerryWhite frontages, the bakery, the Rotary clock, the library and The Hub, and the war memorial. Both sides use the same high quality setting, pixel ratio 1, normal noon light and fixed random seed. Each video frame is an actual 960×960 rendering of the viewer. The test clock advances 40 ms per frame, independently of the capture or encoder speed. Controls and place labels are hidden in the video. The final file places both recordings side by side, retains each frame, labels each section and credits the source map and elevation data. A six-second performance card uses the separately measured 46-second route. The opening glide is excluded from the timing samples. Camera positions and noon lighting are synchronized; ambient actors can differ with initialization timing. `video-verification.json` records the decoded format and frame count.

The benchmark is a separate normal-time pass at 1600×900. The app interface is visible, the renderer is warmed up, and the camera traverses the same route with video capture and encoding off. It records animation-frame delivery times, the native town renderer's calls, triangles and resource counts, and asynchronous GPU queries on every fifth render when available. Cold transfer totals sum the original production body size of locally delivered responses, with gzip for text and the stored image encoding. Separate raw network counters include headers, measurement hooks and CDN responses. Timing on loopback does not predict time to load over mobile data. Chrome on the measured Windows GPU is distinct from physical iPhone/Safari performance. Resident texture count is the renderer's count of texture objects.

The supplemental two-row still holds matched views of the Community Hub entrance and the shops approaching the hotel. For a composition check, run `run.mjs` with `preview` as the final argument. Separate emulated mobile tests use native trusted two-finger input with one thumb held on Move, a second thumb pressed, moved and released on the view and Look, at startup and after 30 seconds in each town.
