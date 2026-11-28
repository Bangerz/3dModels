# Explore playtests

Pick the run that answers the question. The two technical runners arrive in separate changes. If your checkout lacks a linked README, open the [performance runner change](https://github.com/Ashley-Pettit/3dModels/pull/383) or the [loading and touch runner change](https://github.com/Ashley-Pettit/3dModels/pull/384) and check out its head before running the command. The player briefs work on their own.

| Question | Start here | Evidence to keep |
|---|---|---|
| Can someone discover the controls, explore, or drive using what they see? | [Simulated playtesters and role briefs](personas/README.md) | The player's choices, expectations, outcome and pivotal frames |
| Does a visual change cost frame time as the phone warms up? | [Matched A’Beckett and Cuttriss drive](performance/README.md) | Scene frame intervals, render rate, buffer size, route identity and temperatures |
| Does input freeze, release, or recover while content loads? | [Cold Auto upgrade and settled Norman Road imagery](input/README.md) | Actual overlap, both touch IDs, stick displacement, event delivery, frame gaps and release |
| Did a shared input change affect the other towns or first GPS route? | [Existing three-town touch requirements](../../CLAUDE.md#explores-touch-sticks-dont-break-them) and [two-finger fixture](../sticks/two-finger.js) | Move with a second contact on the view and on Look, immediately and after 30 seconds; add a first-route check when GPS or loading changed |

Get the town, route, URL, build stamp and test platform into the result. For comparisons, also identify both renderer versions or hashes. A beta, a local build, and the production URL can serve different bytes on the same day. Link the evidence to the PR that requests the check. Identify human sign-off separately, especially for iPhone touch changes.
