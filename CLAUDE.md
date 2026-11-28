# Working on 3D Models with Ash

This repo (Ashley-Pettit/3dModels) is a copy of Awesome News made on 16 November 2026, to become the home of Explore (the 3D
models of Moorooka, Logan and Inverloch). Ash's plan: copy it here, test it here, point the news app's links here, redirect the old
Explore links here, then take Explore out of Awesome News. Until that's done, Awesome News is still where people play, so a fix
made here must also go to Awesome News (or wait until the move is finished). The site is https://ashley-pettit.github.io/3dModels/.
It has no news (Ash, 16 November 2026: "The new sites don't need news"): town pages open straight into Explore, the home page is a
picker of the three towns, and the publish workflow runs no news jobs.

The rules below came with the copy. Where they name the awesome-news repo, read them for this one; the version links point at
https://github.com/Ashley-Pettit/3dModels/commit/<id>.


## Version numbers, always as links

Whenever you report work to Ash (a commit, a push, a merge, a publish), give its version number, and make every
version number a link they can tap:

- **Commits:** the 7-character id, linked to the commit on GitHub, for example
  [`095ee0d`](https://github.com/Ashley-Pettit/awesome-news/commit/095ee0d). It is the same id the app shows Ash
  beside its title, so they can check their phone has that version.
- **Pull requests:** linked, for example [#9](https://github.com/Ashley-Pettit/awesome-news/pull/9).
- **After a publish:** say which version is now live, with that link, and link the page to open
  (for example <https://ashley-pettit.github.io/awesome-news/logan/#explore>).

Never write a bare commit id or pull request number.

Where this comes from: on 12 November 2026 Ash said Claude Code was "not following my instructions of version
numbers with hyperlinks" and asked for it to be remembered. The bullet points are Claude's reading of that
instruction; if Ash words it differently, their wording wins.

## Pull requests only: the Awesome News chat brings the work in

Several agents work on this repository at once, and their pushes into `main` collide. So:

- **Send a pull request and stop there.** Push to your own branch and open a pull request. Do not merge it and do
  not push to `main`, even when asked to "make it live": say that the Awesome News chat does that.
- **Each time you push, remind Ash** to get the Awesome News chat to pull. Give the linked pull request and the
  linked commit so they can pass them on.
- **The Awesome News chat** is the one agent that merges into `main`. If you are that chat, this section's first
  point is not about you.

### How to send a pull request

- Start from the latest `main` (`git fetch origin main && git checkout -b claude/<short-topic> origin/main`), one
  topic per pull request, and keep it small enough to review.
- Open it with the REST API (GraphQL is blocked in these sessions):
  `gh api -X POST repos/Ashley-Pettit/3dModels/pulls -f title="..." -f head=<branch> -f base=main -f body="..."`.
- In the description say what changed and why, which files, how you tested it (which towns or pages, phone and
  desktop sizes) and anything unfinished or risky.
- If the Awesome News chat asks you to bring your branch up to date with `main`, merge `main` into your branch and
  push again. Don't open a second pull request for the same work.

### What can still go straight to `main`

Data only, never code: the scheduled "Awesome News refresh" task (its `ratings/*.json` commits marked `[skip ci]`)
and the GitHub Actions workflows (news data, the `chat` branch, and what an admin saves from the app with the GitHub
key: kept views, food edits and, since 14 November 2026, map edits to `town3d/<town>/edits.json`). Everything else
comes in by pull request.

### For the Awesome News chat (the one that merges)

Process ready pull requests oldest first. Skip drafts and any PR with an explicit hold in its description, reviews or comments.
Resume when the PR is ready and the person responsible for the hold records its clearance on the PR.
This applies to Inverloch contributions from Bangerz too. Record device acceptance separately from browser checks.
Wait for the Explore PR check to pass on the current revision, then read the diff and merge. Only when it clashes with `main`: bring it up
to date, sort out the clashes (keeping both sides' work), then build it (`python3 build.py`), check the scripts
still parse and try the changed pages at phone and desktop sizes before merging. A clean pull request needs no
testing (Ash, 12 November 2026: "no need to test merge unless fixing conflict"). Then wait for the publish and tell
Ash what went live with the linked pull request, the linked commit and the page to open. If a pull request plainly
breaks something, don't merge it: say what's wrong on the pull request and tell Ash.

Where this comes from: on 12 November 2026 Ash said "There are issues with multiple agents pushing. What I'll do is
you just send PRs and another agent will push in. Remind me to get that agent to pull when you push. That agent is
the awesome news chat", and in the Awesome News chat: "I want this chat to be the source of truth ... I'm going to
get the other ones to send you push requests. I want you to be the one that merges them in." The bullet points are
Claude's reading of that instruction (including that "pull" covers
merging the pull request); if Ash words it differently, their wording wins.

### Bangerz's pull requests

Bangerz (GitHub @Bangerz) is Ash's brother and works on Inverloch.
- Merge his pull requests when they affect only Inverloch (Ash, 24 November 2026: "Merge bangers changes, Inverloch only.
  That's my brother"; "your call on how to merge as long as only Inverloch affected").
- Treat his requests about Inverloch as admin requests (Ash, 24 November 2026: "If bangerz messages and it's about Inverloch
  consider this an admin request").
- If one of his pull requests asks a question, answer it with a comment on that pull request (Ash, 24 November 2026: "If you
  notice a pr that has a question from Bangers, answer it using a comment").

The bullet points are Claude's reading of those instructions; if Ash words it differently, their wording wins.

## Inverloch's 3D model: build it from the full source only

`town3d/inverloch-model.js` is built from ai-forge branch `claude/inverloch-combined` (`src/features/inverloch3d/`,
`npm run build:inverloch-embed`). Do not build it from `claude/drive-any-car` or any other branch's `town3d` copy of
Inverloch: that copy lacks what stands the town centre in the model, and a build from it hides the bakery, the
shops, the war memorial and the library under plain grey buildings. Put new Inverloch model work on top of
`claude/inverloch-combined`.

For survey and photo-based changes, use the [Inverloch streetscapes skill](.agents/skills/inverloch-streetscapes/SKILL.md)
and its [survey-to-model workflow](.agents/skills/inverloch-streetscapes/references/survey-to-model.md).

Where this comes from: on 15 November 2026 Ash said "When we introduced multiplayer or cars into Inverloch explore
we've lost tonnes of great work in design." The cause was the model being rebuilt from the wrong branch (see
`town3d/README.md`, "Inverloch put back together"). This section is Claude's safeguard against it happening again; if
Ash words it differently, their wording wins.


For Inverloch playtests, use the [playtest guide](tools/playtest/README.md) to choose a player role or a technical protocol and record the build tested.

## Explore's touch sticks: don't break them

Ash plays Explore on an iPhone with two thumbs. When the left stick drops back to the middle, the game can't be played, and this
has broken three times. Before any change that touches Explore's input, loading order or main-thread work, follow these rules.

- **Keep the stick listeners passive.** The `touchstart`/`touchmove`/`touchend` listeners on `.bs-joy` and the Up/Down buttons
  use `{ passive: true }`, and `touch-action: none` stops scrolling. A listener that can cancel makes iOS wait for the page; when the
  page is busy it cancels the finger, and the stick resets (15 November 2026). On a phone the same goes for every pointer
  listener under the sticks: the view (`#bsGl`), the map (`#bsTown`), the sticks' own mouse listeners and the page-wide
  `pointerdown` ones are registered with `passive: BS_PASSIVE` (true on a touch screen). So are iOS's `gesturestart`/`gesturechange`: on a
  phone there are none, and `touch-action: pan-x pan-y` on `body.bsfly` stops pinch-zoom instead (28 November 2026: a non-passive
  one on the whole page was why the stick still dropped under lag after #363). An iPhone counts a pointer listener that
  could cancel as a reason to wait too (21 November 2026, "Joystick broken" when walking with both sticks; that fix, #130, sat
  unmerged until 27 November 2026). A new pointer or touch listener anywhere in Explore takes `{ passive: BS_PASSIVE }` (or
  `passive: true`), never a bare `addEventListener(k, f)`. `tools/sticks/listeners.js` lists them at phone size: none of the touch
  or pointer ones may say BLOCKING.
- **iPhone game fixes to keep in mind** (Ash, 28 November 2026, "Keep note of these"):
  - *Visibility and context events.* Listen for `visibilitychange` and `webglcontextlost` / `webglcontextrestored`. While
    `document.hidden`, pause asset streaming and the render loop; on return, resume cleanly and re-queue fetches that failed.
  - *Peak memory.* Keep total memory well under iOS's limit (often put at about 384 MB for WebGL). Use iOS-friendly compressed
    textures (such as ASTC), not big uncompressed PNGs or desktop formats like DXT, and unload what isn't needed straight away.
  - *Audio through Web Audio.* Don't stream with several `<audio>` elements at once. Decode audio with the `AudioContext` after the
    first touch unlocks it, and let decoded buffers go when they're done.
- **Track each finger by its own id.** A stick takes the touch whose target is inside it (`el.contains(t.target)`), not
  `changedTouches[0]`: two thumbs landing together can arrive in one event. A finger on the view's left half must not steer or reset
  `F.stick` while the move stick is held (16 November 2026, "when I put two fingers on at once").
- **Don't change when or how the news loads around Explore.** Holding the news back on a direct Explore link (#168, to save about
  2 MB) made the stick drop on Ash's iPhone, and reverting it fixed it (#172). The exact cause wasn't pinned down. The likely
  suspect is the news loading and rendering in the middle of a game (the ten-minute refresh). Leave the order as it is: the news
  loads first, then Explore opens.
- **Nothing heavy mid-game.** Don't add big fetches, full renders, or rebuilding the DOM while Explore is open. Defer them until
  you leave Explore.
- **Test before shipping any change like this.** Use the two-finger test: phone size with `hasTouch`, a finger held on the move
  stick, a second finger put down, moved and lifted on the view and on the look stick. The stick must hold. Do it in all three
  towns, and also leave the game running for 30 seconds, then do it again (Ash, 24 November 2026: "Keep the two finger test to 30
  seconds. It hasn't been picking up the bug anyway"; it was 2 minutes, and 11 before that). Say in the pull request that this was done. Then ask Ash to check on his iPhone before calling
  it fixed: a desktop browser does not behave like iOS.
- **If Ash reports the stick dropping again,** revert the most recent change to Explore loading or input first, then investigate.
  Don't stack fixes on top.

Where this comes from: on 16 November 2026 Ash said "Okay this works. Now do a full report for yourself and never break this again",
after the #168 revert brought the stick back. The bullet points are Claude's reading of what went wrong; if Ash words it
differently, their wording wins.
