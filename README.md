# Explore 3D Models

Explore hosts walkable and drivable models of Inverloch, Logan and Moorooka on GitHub Pages. Open the [town picker](https://ashley-pettit.github.io/3dModels/) or [start in Inverloch](https://ashley-pettit.github.io/3dModels/inverloch/explore/).

## Run the host locally

Build and serve the site from the repository root with Python 3.

```sh
python build.py _site
python -m http.server 8000 --bind 127.0.0.1 --directory _site
```

Open [production](http://127.0.0.1:8000/inverloch/explore/) or [beta](http://127.0.0.1:8000/beta/inverloch/). Rebuild after edits. The other production routes are `/logan/explore/` and `/moorooka/explore/`.

## Where changes belong

| Change | Source |
| --- | --- |
| Controls, driving, traffic, HUD or town selection | `app.html` for production, `beta/app.html` for the beta host. Each has its own `TOWNS` entry specifying the renderer and data URLs. |
| Inverloch geometry, materials, terrain or renderer | The `ai-forge` repository, branch `claude/inverloch-combined`. The entry is `src/features/inverloch3d/embed.ts`. Run `npm run build:inverloch-embed` there to produce `dist-embed/inverloch-model.js`. |
| Assets served to players | The host's `town3d/` directory. Check the channel's configured filename before copying an export. Beta can serve its own versioned file alongside production. |

See [model sources and data](town3d/README.md#where-they-come-from) and [the release and review instructions](CLAUDE.md).

## Trace a release

1. Record the renderer source commit used for the build and the SHA-256 of the exported JavaScript bytes. Link the source and host commits in the release PR. A host-only change can reference its host commit alone.
2. Give changed renderer bytes a fresh URL in the intended channel. For competing exports, build once from the combined fixes. The Awesome News chat merges ready PRs, observes explicit holds and checks the Pages publish.
3. Check the live route. Production's `an-commit` identifies the host revision. Beta can display `beta/LABEL`. The route's `an-build` must match its `version.json` build stamp. Resolve the renderer URL from that page and compare the SHA-256 of the downloaded bytes with the recorded export hash.

## Record playtest evidence

For a performance comparison use the same drive, preset, frame target and viewport. Record the device or emulator, frame-time p50/p95 and late-session spikes. For touch or loading changes, run the [two-finger check](tools/sticks/two-finger.js) across all three towns at startup and after 30 seconds. Record physical Pixel results and Ash's iPhone acceptance separately from browser emulation, including which build and route each person or runner used.
