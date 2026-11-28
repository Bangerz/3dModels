# Explore input playtests

Use one fresh Chrome context per run. The runner clicks Play, leaves local player networking off, and sends Chrome DevTools Protocol (CDP) touchscreen events to the walking controls. It writes one JSON receipt and closes its context. Keep the supplied URL, build and device settings with each receipt.

## Connect the browser

The runner uses Node.js 22 or newer and has no npm dependencies. Run the commands below from the repository root.

- **Physical Android Chrome.** Use an authorized, unlocked phone with USB debugging enabled. List devices and existing forwards, then forward an unused local port to Chrome. Keep Chrome in the foreground and the phone in its normal portrait viewport. Run with `--port 19356` in the example below. Remove that forward when finished.

  ```sh
  adb devices -l
  adb forward --list
  adb -s SERIAL forward --no-rebind tcp:19356 localabstract:chrome_devtools_remote
  # Run the playtests here.
  adb -s SERIAL forward --remove tcp:19356
  ```

- **Desktop Chrome smoke.** Start a separate Chrome instance bound to loopback with a new profile directory. Run with `--emulate --port 9222`. This uses a 411 × 758 CSS px viewport, device scale 2.625 and coarse touch. Close the dedicated browser when finished.

  ```sh
  chrome --remote-debugging-address=127.0.0.1 --remote-debugging-port=9222 --user-data-dir=/absolute/path/to/new-input-profile about:blank
  ```

Use the canonical Explore URL, including its trailing slash, plus `--expect-stamp` when testing a known build. Live channels can advance. To test a pinned revision, build its checkout with `python build.py /absolute/path/to/serve/3dModels` and run `python -m http.server 8765 --bind 127.0.0.1 --directory /absolute/path/to/serve`. Use `http://127.0.0.1:8765/3dModels/inverloch/explore/` in desktop Chrome. A physical Android device can reach the same server over a reserved `adb reverse` TCP port. Confirm ownership before removing any forward or reverse. There is no need to clear browser data, edit the built HTML, or reuse an existing tab.

## Run the fixtures

These example commands point at the production URL for each town. Substitute a built or beta URL, and add the expected page stamp as needed. The historical v46 Inverloch production stamp was `d083254`. Keep each receipt under a distinct output path.

### Auto Low to Medium

```sh
node tools/playtest/input/run.mjs --port 19356 --mode auto --url https://ashley-pettit.github.io/3dModels/inverloch/explore/ --out /absolute/path/to/receipts/inverloch-auto.json
```

The first two contacts land as soon as the walking controls are ready. The runner holds Move forward and Look right with slight alternating motion for up to 23 seconds, then lifts Look followed by Move. The gate requires fresh Auto at Low on model 1 and a natural transition to Medium during the held pair. Older releases queue model 2 and replace the canvas. A compatible renderer can upgrade model 1 in place. The receipt includes drawing-buffer dimensions on the active models and any observed buffer changes. A different buffer on the replacement canvas is distinct from resizing either canvas in place. Auto can stay Low on a slow or data-saving setup. If the transition misses the hold, keep the inconclusive receipt and report which stage was seen.

Use `summary.transition.path` to distinguish a replacement model from a same-canvas upgrade on newer builds. For the latter the gate requires the host to request Medium, complete it on model 1, and save the chosen tier during the held pair. `summary.transition.timing` covers the period before the request, the upgrade work, the handoff, and the held period afterward. The v46 Pixel 7 receipt retained both contacts despite a 917 ms callback gap and a 1.23 s gap between observed Move events near the model handoff. Input continuity and response time are separate results.

For a build that schedules automatic upgrades around active controls, add `--after-release` to the Auto command.
The same 23-second hold must stay Low. The runner waits up to 15 seconds after lifting both fingers for a genuine
Medium drawing buffer and records the release-to-handoff time. Compare event latency during the held pair separately
from the first idle Medium draw.

### Settled Medium to 11 Norman Road

```sh
node tools/playtest/input/run.mjs --port 19356 --mode norman --url https://ashley-pettit.github.io/3dModels/inverloch/explore/ --out /absolute/path/to/receipts/inverloch-norman.json
```

This separate context uses Medium at 60 FPS. It waits 4.7 seconds after the walking view is ready and checks that the town detail has uploaded and Norman detail has yet to be requested. The pair walks in town first. After about 2.7 seconds of held input, the harness calls the normal standing-placement method near 11 Norman Road at world X/Z `-1580.5, 388.1`, yaw `-0.47`, pitch `-0.14`. It keeps both IDs through an observed detail worker request, its reply and the correlated WebGL texture call. The 10.5-second default hold provides a window around placement and upload.

The controlled placement reproduces entry into the streaming area. For a human-led check, walk into the area with both thumbs and observe the same patch gate if instrumentation is running. The JSON gives the worker elapsed time, duration of the synchronous texture call, callback and event timing around placement and streaming, and a narrower upload window. The WebGL return measures the call on the main thread. GPU completion requires different instrumentation.

### First GPS route with both sticks held

```sh
node tools/playtest/input/run.mjs --port 19356 --mode gps --url https://ashley-pettit.github.io/3dModels/inverloch/explore/ --out /absolute/path/to/receipts/inverloch-gps.json
node tools/playtest/input/run.mjs --port 19356 --mode gps --url https://ashley-pettit.github.io/3dModels/moorooka/explore/ --out /absolute/path/to/receipts/moorooka-gps.json
node tools/playtest/input/run.mjs --port 19356 --mode gps --url https://ashley-pettit.github.io/3dModels/logan/explore/ --out /absolute/path/to/receipts/logan-gps.json
```

The test waits for the GPS graph, verifies independent release, then holds a fresh pair before opening the GPS. With both IDs down it chooses a real on-page suggestion through the app's handler. Defaults are Tennis Club & Oval in Inverloch, Yeronga Park Café in Moorooka and The plane in Logan. Use `--destination` to select another named suggestion and record that change. The gate requires the first route HUD activation and route points. The hold after selection is 31 seconds in Inverloch and five seconds in the other towns. The test then checks independent release, reset and a new pair with GPS already active.

For a channel comparison, run each channel in its own fresh context with the same destination, device and settings. Compare the selection mark's pose, page age and active model ID before attributing a timing difference. The historical first Moorooka beta activation had a 765 ms callback gap. A settled matched rerun measured 36 ms on beta and 47 ms on production, with long startup gaps on both. Report startup and activation separately.

### General two-finger regression

Run `--mode sticks` once for each town on the candidate build when the touch path changes. It holds Move while a second contact touches, moves and lifts on the right view, left view and Look stick. It also lands both contacts together, checks reset and repeats after 30 seconds idle. The runner samples the live Move and Look vectors through Chrome DevTools. Each held gesture must produce the expected gameplay input and agree with the visible knob, and release must clear the vector. An unavailable input probe yields an inconclusive result. This is the routine described in [Explore's touch-stick rules](../../../CLAUDE.md#explores-touch-sticks-dont-break-them). The existing [Playwright fixture](../../sticks/two-finger.js) covers the same basic gesture on locally built pages. Follow the project rule for a separate hands-on iPhone check before calling the iPhone issue fixed.

## Read and report the evidence

- Exit 0 means the contact and scenario gates passed. Exit 1 means a failed check or runner error. Exit 2 means the intended event could not be exercised in the observed window. The JSON keeps errors, receipt data and any contact findings for inconclusive runs. A pass has no timing threshold.
- Record the page stamp and loaded model/map SHA-256 from `assets`. For Logan, the routing inputs are `town3d/logan/map.json` and `town3d/logan/roads.bin`. `bodyError` means Chrome could not provide that response body. Record the device, viewport, DPR, touch capability, mobile browser version and emulation flag from the receipt. Add any device load, environmental conditions, or setup changes that mattered.
- Use `summary` for gate and timing results. In `data.marks`, `data.frames` and post-handler touch samples, `sticks` holds the live Move and Look vectors in that order, each as `[x, y]`. `data.touches` also contains trusted status, IDs, event target, browser timestamp and capture/bubble readings. Event-to-capture delay uses the event timestamp to assign it to a window, even if the handler ran afterward. Per-stick event gaps and callback gaps include intervals that intersect the window. `dispatch` tracks CDP acknowledgement on the host clock. Browser callback, Long Task and Long Animation Frame measurements describe app/browser work. Keep OS input, physical screen cadence and rendering frame rate separate.
- Inspect the raw model, buffer, terrain and route rows when investigating a pause. Preserve report JSON with the candidate build evidence. Runtime instrumentation and separate first loads can affect timing. Chrome CDP feeds trusted browser touch events on real hardware and in emulation. Human touch sampling, iOS Safari behavior and visual route placement require their own checks.
