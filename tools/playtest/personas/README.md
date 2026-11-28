# Set up an Inverloch playtester

Use one independent player per role. A human can take the card directly. For simulated play, start a fresh agent/chat without inherited discussion, source code, other reports or other players' choices. One operator can host several players in separate sessions. The operator holds the build details, diagnostics and result sheet. Only the role brief and player-facing screen go to the player. The cards and protocol adapt the `bounded-persona-playtest` skill and work directly from this checkout.

| Player | Question | Cap |
|---|---|---|
| [Ren, skimmer](roles/skimmer.md) | Can a first-time visitor find movement by skimming? | 90 s / 12 actions |
| [Jo, visual explorer](roles/visual-explorer.md) | Can someone approach and look at a place using visual cues alone? | 90 s / 12 actions |
| [Sam, returning driver](roles/returning-driver.md) | Can a walker borrow, drive, park and leave a car? | 3 min / 20 actions |
| [Ari, two-thumb walker](roles/two-thumb-walker.md) | Does steering feel dependable when the player starts moving and looking immediately? | 2 min / 15 actions |

### Dispatch

1. Pick the question and role before launching. From the repo root, print its standalone player packet with, for example, `python tools/playtest/personas/brief.py visual-explorer`. The other role IDs are `skimmer`, `returning-driver` and `two-thumb-walker`. Without Python, send [the common brief](player.md) and the chosen card together.
2. Open the requested town through its normal entry in a fresh temporary browser context. The public Inverloch paths are [production](https://ashley-pettit.github.io/3dModels/inverloch/explore/) and [beta](https://ashley-pettit.github.io/3dModels/beta/inverloch/). For local testing, run `python build.py _site/3dModels` and `python -m http.server 8765 --bind 127.0.0.1 --directory _site`, then open `http://127.0.0.1:8765/3dModels/inverloch/explore/`. For Ari's first-visit question, leave graphics on the fresh profile's Auto default. Record the initial state, build, platform and limits in a copy of [the result sheet](result.md) outside the runtime payload. Record an uncontrolled seed as unknown.
3. Start the clock at navigation, including loading and exploration. Give the player the current screen, in full motion when available. For a screenshot-operated simulation, send the frame after each choice and state that the player received stills. Use normal keyboard, pointer or trusted touch appropriate to the role. A tap, key press, drag, or hold through release counts as one action. Count a second finger, a new command to steer an already-held finger, and each ignored or retried attempt. Waiting uses elapsed time only.
4. Keep the recorder separate from the decision-maker. For Jo use pixels only, with no OCR, accessibility labels, selector names or narration of visible text. If Jo justifies a choice with a word, flag that run as contaminated at that step. For everyone, a screenshot, frame number or timestamp should connect each pivotal choice to its result. The player may stop early. A prior run's route or a camera teleport belongs in a separate diagnostic reproduction.
5. Stop at the first cap, role goal or player's decision to leave. Record the actual attempts, elapsed time, outcome and last verified checkpoint. Copy the player's own words separately from your interpretation and link only the useful checkpoints. If you cannot start or the controls cannot be delivered on the chosen device, report the blocker. Close only the test context you opened.

### Following up a report

If Ari says steering froze, preserve the player's time, contact positions and view. Run the instrumented loading/input protocol separately to distinguish a held finger with late events from an actual cancellation. If Sam reports uneven motion while driving, use the matched performance replay for comparable frame times. A successful technical reproduction explains a symptom; human acceptance comes from the person playing the affected device.
