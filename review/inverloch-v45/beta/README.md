# Inverloch v45 public beta playtest

28 November 2026 AEDT. Build `c5aa354a8838` served the #373 v45 beta. Its road map was byte-identical to the release candidate. The sole renderer byte change was the beta map filename. Production still used v42 at the time of the checks. [Beta deployment](https://github.com/Ashley-Pettit/3dModels/pull/378) · [Owner’s playtest request](https://github.com/Ashley-Pettit/3dModels/pull/373#issuecomment-7230292212)

![Phone-sized captures of Cape bridge, Powlett house, two roadside trees, sedan, and GPS in Moorooka and Logan](beta-playtest.jpg)

## Pixel 7 input and GPS

Two trusted Chrome touch contacts held Move and Look together on the connected phone. Both stayed active when the first route appeared. Releasing Look kept Move active. Both released normally and accepted a fresh pair with the GPS route active. Zero cancellations or page exceptions across the three betas.

| Page and destination | Selection to GPS activation | Longest nearby animation callback gap | Hold after selection |
|---|---:|---:|---:|
| Inverloch beta, Tennis Club & Oval | 40.2 ms | 53.1 ms | 31.22 s |
| Moorooka beta, Yeronga Park Café | 135.4 ms | 765.4 ms | 5.25 s |
| Logan beta, The plane | 25.1 ms | 86.2 ms | 5.10 s |
| Moorooka production, Yeronga Park Café | 20.5 ms | 78.8 ms | 5.19 s |

Inverloch maintained the pair for 312 touch events across the first 1,345 m route. Moorooka beta recorded 576 ms and 715 ms main-thread tasks around route activation. Both Moorooka runs used the v80 renderer and reached the same destination from positions that yielded 744 m and 767 m routes. A single comparison captures total scene and main-thread activity around the user interaction. It cannot attribute those pauses to ribbon assembly. [Phone measurements](touch.json) · [Production control](touch-production.json) · [Matched physical v44/v45 sustained drives](../pixel7/)

## Phone-sized feature checks

BenLaptop Chrome ran with a 393 × 851 touch viewport. We first loaded the public beta untouched, then used observation hooks, staged actors and accelerated session time to isolate each behavior.

- At Medium, sampled grades on Lees Road were −1.34% and +2.48%, Hillside −17.56% and western Cape +12.12%. A forward touch drove across the 19.52 m Cape bridge and all 44 tyre samples stayed 1.43–9.19 cm above its deck.
- On foot the Powlett house stopped forward input. The walking and driving controls both stopped at a staged sedan. The 11 Norman driveway sample stayed open.
- A borrowed car remained in place at 29 and 31 simulated minutes while watched. Moving the camera away allowed it to return by 31.5 minutes. Its home pose, collision and all four parked LODs returned, and the driven slot became available.
- High showed the Marion Court gum, Surf Parade roadside scrub and an A’Beckett sedan with visible seats through depth-tested panes at opacity 0.34.
- The first Beaudesert Road GPS route in Moorooka (2.77 km) and Kingston Road route in Logan (9.37 km) both showed the blue line at the start and through bends. Stopping each GPS route removed the geometry and cleared navigation state. In the final phone-emulated laptop runs, tapping the result to displaying the mesh took 13 ms and 31 ms respectively.

## Logan GPS exceptions already present in production

The Moorooka route had all 69 sampled centers inside the road corridor. On Logan, 69 of 70 sampled centers were within the expanded road fill. Two targeted views on the Kingston Road route showed a blue guide crossing a grass shoulder around 676 m and a locally invisible segment around 4.87 km. We repeated both on production host `e5753a7` with the same 3,187 route points, native Logan renderer and camera poses. Both artifacts were visible there. At the latter point the guide rose from approximately 49 cm below the nominal production road layer to 2 cm below it on beta. The median clearance across the route rose from −29 cm to +18 cm.

![Logan beta GPS and guide-hidden camera pairs at both affected locations](logan-gps-exceptions.jpg)

## Matched Moorooka repeat on the physical phone

We repeated production first and beta second. At selection the starting positions were 4.3 cm apart, page age was 20.49 versus 20.47 seconds, and both routes contained 257 points over 742.5 m. Production and beta activated GPS in 15.7 and 12.1 ms respectively. The largest nearby animation callback gaps were 47.3 and 35.6 ms. Neither had a nearby main-thread task of 50 ms or longer. Each retained both controls across 52 trusted input events. The original beta pause did not recur.

Both pages had substantial startup stalls **before** touch or GPS, at approximately 10–16 seconds of page age. The longest callback gaps were 3.87 s on production and 4.01 s on beta. Chrome attributed almost all this time to animation callbacks in the same Moorooka v80 native bundle. The first beta interaction was captured without script attribution, so its underlying cause remains undetermined.

[Matched beta and production views of both Logan exceptions](logan-production-comparison.png)
