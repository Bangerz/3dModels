# The whole-town 3D models

Two models, each separate from the weather's own scenes of the same place (which are built inside `app.html`):

- **Inverloch** (this folder): the whole town, behind **Virtually explore Inverloch** and
  **Admin > 3D scenes > Inverloch 3D model**.
- **Moorooka** (`moorooka/`): the suburb and its edges, a 3.3 km square, behind **Virtually explore Moorooka**
  (in Moorooka News, and wherever Moorooka is the chosen area) and **Admin > 3D scenes > Moorooka 3D model**.

| File | What it is |
| --- | --- |
| `inverloch-model.js` | The Inverloch model as one script (`window.InverlochModel`), with its own copy of three.js |
| `height.png` | Terrain heights, including the Anderson Inlet sandbars |
| `ground.webp` | Ground colour: land cover, sand, paddocks, roads |
| `detail.json`, `detail-*.webp` | Sharp close-up ground for the town centre and Norman Road (`-lo` = half size, for older phones). Optional: without them the ground is the one picture |
| `town.json` | Streets, mapped buildings, generated houses, trees, cars |
| `moorooka/moorooka-model.js` | The Moorooka model as one script (`window.MoorookaModel`), with its own copy of three.js |
| `moorooka/height.png` | Terrain heights, from the river flats up to Toohey Forest |
| `moorooka/ground.webp` | Ground colour: lawns, tree cover, sealed ground, streets, rail beds |
| `moorooka/town.json` | Streets, railway, every surveyed building with its roof height and colour, trees, cars, back fences |
| `moorooka/detail/` | The ground at twice the sharpness, in 16 tiles. The model fetches the ones nearest the camera (not on the slowest devices) |
| `moorooka/surface/` | What the ground is made of (lawn, asphalt, concrete) across the whole model, in 256 blocks of about 206 m (0.2 m detail), with `index.json` listing them and holding the car parks' painted lines. Fetched only close to the ground, four at a time, on devices that can draw it (see below) |
| `moorooka/yards.bin` | What stands in the backyards: pools, clothes lines, sheds, trampolines, tanks, outdoor settings, bins, letterboxes, front fences, shrubs, the odd dog (about 25,000 things, 300 KB). Fetched once the model is up, not on the slowest devices; only the yards near the camera are built |
| `moorooka/floods.json`, `moorooka/flood-1974.png`, `flood-2011.png`, `flood-2022.png`, `flood-aep1.png`, `flood-aep2.png`, `flood-aep5.png`, `flood-aep02.png` | Moorooka's floods: what they were, and each one's water levels. Fetched only when Flood is used |

Nothing here is downloaded until someone opens a model. `build.py` copies this folder into the site.

The Logan map, a whole city with its floods, is in `logan/` with a README of its own. It is opened and flown by the
same code (the third entry in `TOWNS`).

## How the app uses them

`app.html` (search for `townModelOpen`; the two models are listed in `TOWNS`) opens the weather's 3D view on the
place, goes into Explore, and lays the model's canvas (`#bsTown`) over the weather's. If the model cannot load,
Virtually explore carries on in the weather's own town.

Every frame the app passes the camera Explore is moving to `model.setCamera(...)`, and the time slider to
`model.setMinutes(...)`. The app owns the camera in both modes:

- **Walk** (how it opens: Inverloch at the clock, Moorooka at the shops on Beaudesert Road): Explore's sticks and
  keys, with your eyes 3 m above the ground, following it up hill and down.
- **Fly**: rises above where you were standing. The sticks fly, Up and Down sit between them, and the view itself
  can be dragged (pinch or scroll to zoom, two fingers or right-drag to turn). Inverloch's tide slider shows here;
  Moorooka has no tide, so it has none. Going back to Walk puts you down on the ground you were looking at.
- **Jump to…** lists the model's own places (and, in Inverloch, the clock, the bakery, the war memorial and
  Norman Rd). Walking, it stands you there; flying, it shows the place from above. Moorooka's model gives each place
  a spot on the kerb of the nearest street to stand on; Inverloch's stands you a few steps back from the place.
- **The town centre round the clock and number 11 Norman Road** are copied out of the weather's Inverloch when that
  model opens (`townModelGuests`) and stood in the model where they really are. The weather's scenes are not changed.
  The clock's hands and lit faces, the flags, the koala, the wombats and the windows' glow keep following the
  originals. Moorooka has no guests of this kind.

### Bunurong Environment Centre, Ramsey Boulevard

Explore places the museum's entrance on the mapped wall and the public EV charger beside the existing car-park aisle. The museum, its car park and the adjoining paths retain their original ground, walls and collision. The two narrow canopy posts and the cabinet have their own collision. The museum door is a visual entrance to a closed interior.

- **Placement.** Map data © OpenStreetMap contributors, ODbL. The main entrance node and museum wall were last edited in May 2024. The car-park node records one CCS and one CHAdeMO connector and was last edited in May 2025. [Main entrance](https://www.openstreetmap.org/node/11897542004) · [Museum footprint](https://www.openstreetmap.org/way/472789980) · [Charger](https://www.openstreetmap.org/node/12869788102) · [Car park](https://www.openstreetmap.org/way/768985478) · [OSM licence](https://www.openstreetmap.org/copyright)
- **Museum.** The South Gippsland Conservation Society identifies the centre at 1 Ramsey Boulevard. The glazed entrance and shallow shelter use original geometry informed by the historical street exterior. Photography supplied by Travel Victoria. Capture date unknown, server file date 21 December 2011. Glazing, canopy widths and colours are estimates. The present upper facade and exact window divisions still need a dated, reusable exterior view. [Operator](https://www.sgcs.org.au/our-centre) · [Exterior photograph](https://www.travelvictoria.com.au/images/inverloch/photos/inverloch-022.jpg) · [Travel Victoria](https://www.travelvictoria.com.au/) · [Photo terms](https://www.travelvictoria.com.au/about/photos/)
- **Charging court.** The council identifies the 60 kW station at 3 Ramsey Boulevard and confirmed the site's operation in March 2026. Its OSM location anchors an unbranded two-lead cabinet. The enclosure size, orientation, face and cable drape are estimates. The existing paving, access aisles and two unmarked driveway crossings supply the approach. [Bass Coast EV project](https://engage.basscoast.vic.gov.au/electric-vehicle-charging-stations) · [March 2026 opening](https://www.sgst.com.au/inverloch-ev-recharge-station-open-for-business/)

On a matched 30-second, 124 m camera replay, v48 Medium at a fixed 553 × 1,014 pixels rendered 57.77 frames/s before and 56.49 after. Median frame intervals were 16 ms in both runs and p95 went from 30 to 31 ms. Cold transfer grew by 2,411 gzip-equivalent bytes across the same 12 requests. The moving replay made zero further requests. These are single Chrome mobile-emulation runs on an RTX 5070 Laptop GPU. [Before and after views](../tools/streetscapes/bunurong-comparison.webp) · [Replay route and camera poses](../tools/streetscapes/bunurong-route.json)

### Inverloch's town centre

The block round the clock comes across whole (`townModelBlock`): the Hub and library, the war memorial, the shops
along Reilly Street and on both sides of A'Beckett Street (the bakery among them), with their verandahs and signs,
the streets, footpaths, parked cars, lamps, banners and trees. Its outline is `TOWN_BLOCK` in `app.html`, in the
weather town's own metres. Inside it the model keeps only its ground, so nothing is shown twice.

The model adds a few things of its own there (`townModelExtras`). The corner of A'Beckett and Reilly Streets is
laid out as it really is, checked against Google Maps satellite imagery: one brick plaza with the war memorial at its
lawn end and the Rotary clock a few metres on, by the zebra crossing, the four mosaic blocks between them. (The
weather's town has the clock where the memorial belongs and the memorial up by Reilly Street; in the model both are
moved, see `TOWN_PLAZA`, `TOWN_MEMORIAL` and `TOWN_CLOCK` in `app.html`.) Also tables and chairs outside the bakery
and The Larder, a sandwich board for each named shop, and the signs at the zebra crossing. Round the clock and round
number 11 the model is asked for street-level detail (`detailLatLon`): cars with proper shapes, a letterbox and bins
out the front of the houses, and power lines along the streets.

The weather's town is flat and the model's ground slopes, so each shape is handed over with heights measured from
the ground and the model lays it down along the terrain. Anything added to the weather's town centre later shows up
in the model too, as long as it stands inside the block.

## Moorooka close up

So the suburb holds up from walking height (none of this is on the slowest devices' cut-down version except the
ground texture and the cars):

- **The ground:** within about 300 m of the camera the ground picture's pixel edges are roughened and texture is
  added: clumps, blades and dry patches on lawn, stains and grit on sealed ground and on the streets. Generated in
  the model's shader, not surveyed, and no extra download.
- **Kerbs and footpaths:** a kerb on every street; a concrete footpath beyond a grass strip on both sides of the
  bigger streets and one side of local streets. Generated: which streets really have a footpath is not surveyed.
- **Cars:** sedans with a sloping bonnet and boot, a glazed cabin, round wheels, bumpers, plates, door seams and
  lights, in place of the earlier blocks. Generated.

- **Ground tiles load a strip at a time:** the sharper ground tiles near the camera used to arrive whole, which
  held up a frame each time (a tile is 16 MB once unpacked). Each tile is now fetched and unpacked on a worker and
  sent to the graphics card a few strips per frame, and while tiles are on their way a tiny spinner turns in the
  bottom right corner of the model (Ash: "make it just a tiny spin in corner"). Screen readers are still told
  "Loading sharper ground", and it stands still for people who ask for reduced motion.

## Moorooka in close detail, the whole suburb

The detail of the Browns Plains block in Logan, done across all of Moorooka (Ash: "Do the same over all of moorooka",
"Consider lag", "There are mistakes in roads and paths to fix up"). The ground is inferred, not traced: no imagery
(Ash's rule for Moorooka's ground). The one exception Ash agreed to is pools, read off the aerial photograph.

- **The ground everywhere** (beyond the designed square, which stays as `design.py` drew it): every street at its
  width with rounded corners, lawn verges, footpaths on the sides that have them carried round corners, crossovers,
  and on each property by what stands on it: a house gets a driveway (down the side with room for a car, else to a
  garage in the house), most a path to the front door, a garden bed along the front and a patio out the back; units
  share a driveway; shops, works and schools get asphalt round the buildings with lawn beyond; parks are lawn, bush
  floor under thick trees; the railway sits on ballast. `tools/ground/suburb_ground.py`.
- **Streets fixed:** outside the designed square every local street was drawn at a 7.2 m default and every
  connector at 6 m, so verges were far too wide. Each now gets 52% of its own road reserve (property line to property
  line), between 7.2 and 10.6 m, which is what the designed square's measured streets come to. Footpaths no longer
  run down the median of a divided road (Beaudesert Road), local streets have one on the side with the wider verge,
  and the raised footpath strips are hidden wherever the ground draws its own (they used to double up).
  `tools/ground/suburb_streets.py`.
- **Cars:** those at the kerb moved out with the wider streets, those left on lawn by the new ground gone, and a car
  on about half the side driveways and a third of the garage ones. `tools/ground/suburb_cars.py`.
- **Backyards** (`yards.bin`, `tools/ground/suburb_yards.py`): 336 pools from the photograph, each with a concrete
  surround and a black pool fence; the rest placed by rule on the ground plan, never on a building, a driveway, a
  pool or a tree, the same every time.
- **People walking** the footpaths near the camera, about a third with a dog on a lead. Generated as you go.
- **Lag:** the yards are built only within about 220 m of the view (140 m on phones), a 90 m cell a frame, and let go
  behind it; none above about 330 m. Walkers are a handful of draw calls in all and only show below 240 m. Nothing new
  on the slowest tier. The ground blocks are fetched four at a time as before (about 75 KB each).

## Moorooka's ground drawn by kind (a pilot)

Around Moorooka Square and the Beaudesert Road shops (about 825 m square) the model knows what the ground is made
of: lawn, asphalt or concrete, sorted from the 10 cm Queensland aerial photograph. It does not show the
photograph. It draws each kind itself with a generated surface (blades and dry patches, aggregate and cracks,
weathered concrete), so the edge between a lawn and a path stays sharp however close you get, and nothing the
photograph caught on the day (parked cars, shadows) is painted on the ground. Car parks also get their painted
lines, found on the photograph.

- Each block stores, for each kind, how far every point is inside or outside it, at 0.4 m. Read back smoothly,
  the edge is good to about 20 cm. A block is about 120 KB to fetch and 1 MB on the graphics card (the reversed
  10 cm photo tiles were 16 MB each).
- What is none of the three (garden beds, bare earth) is drawn as soil and mulch. Close up, nothing in a block
  is the ground picture: Ash did not like pictures on the ground from near. Its broad colour still tints the
  lawn and soil (read very coarsely, so no pixels or blotches show), and from further off the picture takes over.
- Pools are not sorted yet, so a pool shows as soil.
- **Cars park properly** (in the pilot area): they stand in the painted bays found in each car park, square to
  the row, and along the street a little in from the measured kerb, facing the way the traffic goes. Cars that
  stood in a traffic lane, or loose in a car park whose bays were found, are gone. These are in `town.json`, so
  every device gets them.
- **Beaudesert Road is two lanes each way:** traffic on a one-way carriageway keeps to two lanes counted out
  from the median, and the kerb lane is left for parked cars. It used to spread over three.
- **Shop signs are twice as sharp**, and the cafe at Moorooka Square has its name. Only businesses seen in Ash's
  street photographs are named (the supermarket, the dental and medical practices, the cafe).
- **Streets and car parks are worked out, not copied patch by patch** (Ash: "do some inference to fix car parks,
  roads, footpaths"):
  - each street's carriageway is as wide as its asphalt really reaches either side of the surveyed centre line
    (1.5 m wider than the street data on average), so the kerbs stand on the real edge;
  - the verge, from the kerb to the property boundary, is lawn; a driveway is drawn where sealed ground crosses
    the whole verge; outside shops (a building on the boundary) the footpath is paved to the wall;
  - a footpath is drawn on the sides where the photograph shows one along at least a third of the street, at
    its usual distance from the kerb, and not on the sides where it shows none;
  - a car park is one surface (worn and patched asphalt is not concrete), and its bay lines are redrawn at a
    steady pitch with the gaps filled in; lines that fit no row are dropped.
  The street widths and footpath sides are in `town.json` (`footpaths`), so every device gets them.
- The edges are smooth curves, so square corners come out rounded, and a few patches are misread (worn asphalt
  as concrete, deep shade guessed from the ground beside it).
- Not every device gets it: never the slowest tier, a device reporting under 4 GB of memory, or one asking to
  save data; and only once the model has been seen to draw at 24 frames a second or better. If the rate falls
  away later, it is dropped and the model carries on as before. `?sharp=1` on the address forces it on,
  `?sharp=0` off.

## Moorooka's ground drawn by kind (a pilot)

Around Moorooka Square and the Beaudesert Road shops (about 825 m square) the model knows what the ground is made
of: lawn, asphalt or concrete, sorted from the 10 cm Queensland aerial photograph. It does not show the
photograph. It draws each kind itself with a generated surface (blades and dry patches, aggregate and cracks,
weathered concrete), so the edge between a lawn and a path stays sharp however close you get, and nothing the
photograph caught on the day (parked cars, shadows) is painted on the ground. Car parks also get their painted
lines, found on the photograph.

- Each block stores, for each kind, how far every point is inside or outside it, at 0.4 m. Read back smoothly,
  the edge is good to about 20 cm. A block is about 120 KB to fetch and 1 MB on the graphics card (the reversed
  10 cm photo tiles were 16 MB each).
- What is none of the three (garden beds, bare earth) is drawn as soil and mulch. Close up, nothing in a block
  is the ground picture: Ash did not like pictures on the ground from near. Its broad colour still tints the
  lawn and soil (read very coarsely, so no pixels or blotches show), and from further off the picture takes over.
- Pools are not sorted yet, so a pool shows as soil.
- **Cars park properly** (in the pilot area): they stand in the painted bays found in each car park, square to
  the row, and along the street a little in from the measured kerb, facing the way the traffic goes. Cars that
  stood in a traffic lane, or loose in a car park whose bays were found, are gone. These are in `town.json`, so
  every device gets them.
- **Beaudesert Road is two lanes each way:** traffic on a one-way carriageway keeps to two lanes counted out
  from the median, and the kerb lane is left for parked cars. It used to spread over three.
- **Shop signs are twice as sharp**, and the cafe at Moorooka Square has its name. Only businesses seen in Ash's
  street photographs are named (the supermarket, the dental and medical practices, the cafe).
- **Streets and car parks are worked out, not copied patch by patch** (Ash: "do some inference to fix car parks,
  roads, footpaths"):
  - each street's carriageway is as wide as its asphalt really reaches either side of the surveyed centre line
    (1.9 m wider than the street data on average), so the kerbs stand on the real edge;
  - the verge, from the kerb to the property boundary, is lawn; a driveway is drawn where sealed ground crosses
    the whole verge; outside shops (a building on the boundary) the footpath is paved to the wall;
  - a footpath is drawn on the sides where the photograph shows one along at least a third of the street, at
    its usual distance from the kerb, and not on the sides where it shows none;
  - a car park is one surface (worn and patched asphalt is not concrete), and its bay lines are redrawn at a
    steady pitch with the gaps filled in; lines that fit no row are dropped.
  The street widths and footpath sides are in `town.json` (`footpaths`), so every device gets them.
- **Every property is drawn as a plan, not as a picture** (Ash, after the last round: "Paths and roads grass
  still don't make sense. Use inference"). The wavy blobs of lawn, concrete and soil were mostly tree canopy read
  as lawn, and each property copied patch by patch. Now:
  - a tree's canopy (darker and rougher than mown grass) is not lawn. Like deep shade it hides the ground, which
    is filled in from beside it and is not counted as evidence of anything;
  - a property has one main surface: lawn for a house and its yard, asphalt for a car park, concrete for a paved
    yard, whichever covers most of the open ground that shows;
  - whatever else is there (a drive, a patio, a lawn beside a car park) is drawn as rectangles, square to the
    property or along the piece's own length. Garden beds, bare earth and pieces that fit no rectangle take the
    main surface;
  - the street land left over between the streets, verges and properties (corners, parking lanes, traffic
    islands) is done the same way, square to the street beside it.
  So a curved drive or a round garden bed comes out squared off, and a small path or bed (under 6 to 10 square
  metres) is not drawn at all.
- The edges are smooth curves, so square corners come out rounded, and a few patches are misread (worn asphalt
  as concrete, deep shade guessed from the ground beside it).
- Not every device gets it: never the slowest tier, a device reporting under 4 GB of memory, or one asking to
  save data; and only once the model has been seen to draw at 24 frames a second or better. If the rate falls
  away later, it is dropped and the model carries on as before. `?sharp=1` on the address forces it on,
  `?sharp=0` off.

- **Reviewed: designed, not traced** (Ash, 13 November 2026: "infer correct design of car parks, driveways, roads,
  footpaths ... removing the literalness in the place of inferring something that makes sense"). After the plan
  above, `scripts/moorooka/design_lots.py` in `ai-forge` draws each block as it would have been built:
  - a house block is a lawn with one driveway, 3 m of concrete square to the street, with its crossover across the
    verge. It goes where the photograph shows the most sealed ground along the frontage, or else down the wider
    side of the house if a car fits, and runs into the garage or 6 m past the front of the house. Concrete right
    against the house (8 m2 or more) stays as a patio; everything else on the block is lawn;
  - units and townhouses share one 3.5 m driveway down a side of the block to the last of them;
  - any sealed ground off the street of 500 m2 or more is an asphalt car park (pale asphalt was read as concrete);
  - blocks it can't read (shops, yards, blocks behind others) keep the plan above.
- **Tidied by inference only** (Ash, 13 November 2026: "Dont use images, dont use a satellite, infer only. Make the
  smallest change you can to make things sensible like connected roads, paths, no random grass patches").
  `tools/ground/` works only from the street lines, property boundaries, buildings and the plan itself:
  - verges are read a metre at a time along each side of each street: asphalt to the kerb for 4 m or more is an
    entry, anything shorter is lawn, and lawn gaps under 3 m inside an entry are asphalt. Concrete is left alone;
  - on a property that is mostly sealed (a car park), lawn scraps under 150 m2 and loose concrete under 20 m2 are
    asphalt; so are lawn scraps under 60 m2 ringed by asphalt on street land;
  - footpaths are joined up along each street: main roads have one both sides the whole way, gaps under 60 m are
    filled, a side with a path on 60% of it gets one the whole way, and a lone path under 30 m goes. A new path
    sits 2.3 m from the kerb, or in the middle of a narrower verge;
  - roads were already joined up and are unchanged.

- **Designed at 0.2 m** (Ash, 13 November 2026: "Still tonnes of mistakes. Fix em up! Infer. Draw road lines. Fix
  paths. Fix roads, fix grass fix car placement, fix concrete, fix barriers, improve res"). `tools/ground/design.py`
  redraws the square's ground at twice the sharpness (blocks of 1024 px), from the street lines, property boundaries,
  buildings and the plan itself:
  - corners where streets meet are rounded (5 m), on street land only;
  - verges are read a metre at a time: paved to the property line (6 m or more of concrete), driveway crossovers (at
    least 3 m wide, kerb to property line), car park entries (4 m or more of asphalt), lawn everywhere else;
  - footpaths are drawn in the ground, 1.3 m wide at the street's own distance from the kerb, across crossovers and
    entries and round the corners to meet the cross street's. Inside the square the model's raised footpath strips
    are no longer drawn (they stopped short at every corner); outside it they are as before;
  - bare earth patches under 150 m2 take the ground around them, and loose concrete and asphalt on house blocks is
    drawn as the rectangle it fills, square to the property.
- **Cars and fences** (`tools/ground/cars_fences.py`, the whole suburb): cars at the kerb are set square to the street,
  1.1 m in from the kerb and following its curve; none over the kerb, in a junction, across a driveway or car park
  entry, or on a verge. Fences across streets, through buildings or through car parks are gone.
- **The model's own code** (`moorooka-model.js`, patched): a dashed centre line on every street 6.5 m wide or more,
  broken give way lines where a street meets a bigger or equal one, and kerbs kept clear of every street's carriageway
  (they used to poke into junctions).

## Inverloch tidied by inference

Ash, 13 November 2026: "Do the same for Inverloch, find things that look out of place and infer correctness". With
no imagery, only the street data, buildings and houses in `town.json` (`tools/ground/inverloch/fix_inv.py`):

- 57 street and path ends that stopped 0.3 to 6 m short of another street or path now meet it (a path runs to the
  kerb, a street to the other street's centre line). Roundabouts and closed loops are left alone;
- 46 trees whose trunks stood inside a house or on a path, lane or driveway are gone;
- 2 caravan-park cabins standing on a road are gone;
- checked and fine as they were: no grass islands inside car parks or paving in the close-up ground, every painted
  road matches a street, no houses on streets or overlapping, no parked cars off sealed ground.

## Inverloch: Norman Road rebuilt house by house (24 November 2026, a test run)

Ash, 24 November 2026: "list every single building in Inverloch. Use google maps and google satellite to rebuild each building
ensuring you use low res ... Do a test run just on Norman Rd now", "Make sure you use street view pictures", "Don't alter 11 Norman
Rd". `inverloch-model.js` ?v=25, built from ai-forge `src/features/inverloch3d/designed.ts`:

- The model's 5,712 houses were made up (`build_stage2.py` places them along streets). OpenStreetMap has only 311 real outlines.
- On Norman Road (Florida Avenue to Evergreen/Ebor Avenue) the 34 made-up buildings (26 houses, 8 sheds) whose nearest street is
  Norman Road, within 45 m, are gone, and 24 real ones stand in their place. Each outline is traced from the Google satellite picture (a flood fill on the roof
  from a seed, then the smallest rectangle round it); its walls, roof shape, storeys, colours and verandah, balcony or garage door
  come from Street View (October 2025), or from the satellite colours where bush hides it from the road.
- Same low-poly kit as the made-up houses (a box, a hip, gable, skillion or flat roof, windows as flat panels), so it opens as fast.
- Number 11 is the app's own and is untouched: nothing new stands in its lot, and the made-up houses within 24 m of it are still
  left to the app. Number 13 is drawn 7.8 m wide, not about 11 m, because number 11's lot in the game is wider than the real one.
- East of Ebor Avenue (the Beach Avenue units and the building site at 3 Norman Road) is as it was.

### Ramsey Boulevard and The Glade

The foreshore pilot links the roadside approach to the shared path, the timber connector and The Glade picnic shelter. It adds concrete joints and timber seams over the existing pavement, and uses Explore's terrain fit for those details and the shelter floor. The pilot adds two colour-batched meshes. The road network, town-centre handover, Esplanade Hotel and Norman Road keep their existing owners. The shelter replaces one native roof and its solid footprint with individual pier and low-wall colliders and passable bays. The roaming aircraft's nearby lawn stop is clear of the shelter.

- **Mapped alignment.** OpenStreetMap contributors, ODbL, [local map extract](https://api.openstreetmap.org/api/0.6/map?bbox=145.7271,-38.6363,145.7310,-38.6340). The concrete shared path uses [159254664](https://www.openstreetmap.org/way/159254664), [1570630145](https://www.openstreetmap.org/way/1570630145), and [1570626629](https://www.openstreetmap.org/way/1570626629), edited in October 2026. The forecourt and approach detail follows ways 842582869, 852240668 and 842578144. The [timber connector](https://www.openstreetmap.org/way/1117561267) was last edited in March 2023. Those are map edit dates. Joint and seam spacing are visual estimates.
- **Shelter.** The plan uses [OSM way 1117561260](https://www.openstreetmap.org/way/1117561260), mapped November 2022. The low metal roof and masonry piers use original geometry based on [photographs supplied by Travel Victoria](https://www.travelvictoria.com.au/inverloch/photos/) under its [photo reuse terms](https://www.travelvictoria.com.au/about/photos/). The [shelter view](https://www.travelvictoria.com.au/images/inverloch/photos/inverloch-028.jpg) has an unknown capture date and a server file date of December 2011. The [council's 2021 existing-site plan](https://hdp-au-prod-app-bass-engage-files.s3.ap-southeast-2.amazonaws.com/6316/4911/5881/BCDT_Masterplan_extract_web.pdf) identifies the shelter as site feature 6 on page 29. The roof pitch, pier sizes and floor finish are visual estimates. The park's current fittings and signs still need dated close-up photos.

### Norman Road from real outlines (25 November 2026, ?v=26)

Ash, 25 November 2026: "Okay try for Norman Rd". The traced rectangles are replaced by real building outlines from Overture Maps
(release 2026-11-18; here Microsoft's outlines from aerial photos plus a few from OpenStreetMap), read from Overture's open data by
range requests (one 600 MB file, 3.6 MB of it read). Street View still gives each house its walls, roof, storeys and extras.

- The outlines and the model's streets (OpenStreetMap) agree; Google's picture sits about 2.5 m off both (2.2 m west, 1.3 m
  north), so anything traced off Google's picture has to be moved by that much.
- An outline that isn't square is split into up to three square parts, each with its own roof, all on one floor level.
- Of the 24 houses, 22 have an outline. 23's units and 22's garage have none, so they keep the traced size. The outlines found
  three outbuildings as well.
- Some outlines are smaller than the roof seen from above (18, 17, 24), probably walls only, or part of the house missed.
- For the whole town: Microsoft's outlines put about 4,700 buildings where the model has its 5,712 made-up houses (and 311
  OpenStreetMap ones). Each would get its colours from the satellite, and Street View detail only where it matters.

### Norman Road in Explore v48

[Explore #400](https://github.com/Ashley-Pettit/3dModels/pull/400) brought the free-source roof, frontage and vacant-lot refinements to production. Production and [beta](https://ashley-pettit.github.io/3dModels/beta/inverloch/) serve the same v48 renderer bytes. The combined source [29f7d18](https://github.com/Ashley-Pettit/ai-forge/commit/29f7d18697fc381f8163f0f94ad73f0f71d0fef8) is in the [canonical renderer branch via #53](https://github.com/Ashley-Pettit/ai-forge/pull/53).

The original No. 13 exterior and full-street outlines first reached production via [Explore #381](https://github.com/Ashley-Pettit/3dModels/pull/381). The model revisions below record the evidence and changes that led to v48.

### 13 Norman Road exterior preview

Number 13 uses a single-storey L-shaped shell based on [Microsoft Global ML Building Footprints](https://github.com/microsoft/GlobalMLBuildingFootprints)
(12 November 2026, Australia tile 311223133, CDLA-Permissive-2.0). The source shows a roughly 6.4 m-wide, 22.3 m-deep main strip, a wider
rear wing and an approximately 13 m street setback. The model shifts the outline about 1.25 m across the lot to fit the
[Vicmap Property](https://www.land.vic.gov.au/maps-and-spatial/spatial-data/vicmap-catalogue/vicmap-property) parcel (PFI 5283723,
State of Victoria, CC BY 4.0) and insets the modelled walls beneath the eaves. Microsoft estimates mean building height at 4.6 m.
The footprint west of this parcel belongs outside number 13.

The gables, roof metalwork, weatherboards, glazing, joinery and low planting are review fixtures. Their location and materials
need a contributor photo or survey with modelling permission before release. The 3D assets use original procedural geometry and
vertex colours. Number 11 is still drawn by Explore. The bundle is built from the source for revision 42 plus the number 13
change, using the same renderer build.

### Norman Road from Florida Avenue to the eastern dead end

The [Bass Coast Shire Public Road Register](https://www.basscoast.vic.gov.au/assets/general-images/Public-Road-Register-March-2024.pdf)
lists 275.4 m between Florida and Ebor Avenues and 95.6 m east of Ebor. The Explore review follows
both frontages over that entire run, including the dead end short of Surf Parade.

- 26 roofprints across 23 property groups use the [Microsoft Global ML Building Footprints](https://github.com/microsoft/GlobalMLBuildingFootprints)
  Australian tile 311223133, release 12 November 2026, CDLA-Permissive-2.0. [Vicmap Address and Property](https://www.land.vic.gov.au/maps-and-spatial/spatial-data/vicmap-catalogue/vicmap-property)
  are State of Victoria data under CC BY 4.0. The centreline follows the existing OpenStreetMap geometry (ODbL).
- The facade kit models framed openings, sill depth, cladding, eaves and roof seams alongside the authored number 11 and 13 models.
  Mapped roof edges and cadastral placement are the evidence. Storey estimates, roof profiles, finishes and joinery are provisional.
  Street View and satellite were consulted in their viewer. No Google imagery or new Street View-derived features enter the candidate.
- The update includes 1A, 1B and 2B east of Ebor. Number 1–3 retains the current scene because the open source has older footprints.
  Number 23 keeps its existing placeholder pending a current, reusable footprint. Number 14A and number 19 have no matched roof and
  have been marketed as vacant. Number 14B overlaps number 14's record and shares its single roof. The corner houses at 2 Ebor Avenue
  remain in the scene. The formerly mislabelled outbuilding west of 13 is on number 15's parcel.
- The renderer uses the same revision-42 release source as the number 13 draft, with the two Norman Road patches.
  The candidate adds no media assets to Explore. The review captures and provenance are outside the delivery bundle.

#### Norman Road free-source pass (28 November 2026)

The [renderer source](https://github.com/Ashley-Pettit/ai-forge/commit/0e413f20504bddb45fc3ec002eb5a4c4b3c4cef1)
fits the 26 mapped roof envelopes to Microsoft's open estimates of mean roof height above ground. It weights the
roof planes by plan area and samples the existing bare-earth terrain under them. Number 13 uses the estimate for its
own L-shaped roof to adjust the existing gables within a small range. Bounds keep the fit from implying a measured
eave, pitch or ridge. Number 11's authored assets are outside this pass.

- The [January 2024 sale description for 2](https://www.realestate.com.au/sold/property-house-vic-inverloch-142967772)
  and [November 2021 sale description for 5](https://www.realestate.com.au/sold/property-house-vic-inverloch-137987198)
  establish two visible levels. Number 5's main entry is at the rear. The [7–9 listing](https://www.realestate.com.au/sold/property-house-vic-inverloch-148947500)
  and [15 listing](https://www.realestate.com.au/sold/property-house-vic-inverloch-135393894) support wider rear glazing.
  Exact opening, deck, carport and canopy positions remain uncertain.
- Where the model can fit a short entry against the rendered ground, it places supported treads. On steep or obstructed
  ground, a window bay replaces the illustrative floating doorway. Number 14 is the most visible example.
- Number 14A and number 19 use their Vicmap parcel rings to keep generated buildings off the open lots documented in
  the [14A land listing](https://www.realestate.com.au/property-residential%2Bland-vic-inverloch-204538948) and
  [19 property record](https://www.property.com.au/vic/inverloch-3996/norman-rd/19-pid-4519911/).
- The checked open footprint sources still lack current replacement roof outlines at 1–3 and 23. Those use the previous
  scene as a fallback. Roof finish and pitch remain illustrative elsewhere. The candidate uses original geometry and the
  existing ground and model assets.

#### Refined source plan for Norman Road and Inverloch

**Footprints and address matching.** Pull dated OpenStreetMap outlines and building parts through
[Overpass](https://wiki.openstreetmap.org/wiki/Overpass_API) before rebuilding each block. Keep current OSM footprints
and usable [building levels and roof tags](https://wiki.openstreetmap.org/wiki/Simple_3D_Buildings) where present.
Fill gaps with [Microsoft Global ML Building Footprints](https://github.com/microsoft/GlobalMLBuildingFootprints) and
reconcile both sources against Vicmap parcels and addresses. Deduplicate building parts and parent outlines before
assigning collision. Track source release and imagery capture separately. Retain the OSM extract and its
[attribution and ODbL obligations](https://osmfoundation.org/wiki/Licence/Community_Guidelines/Produced_Work_-_Guideline).
On 28 November 2026, Overpass and the
[official OSM extract](https://api.openstreetmap.org/api/0.6/map?bbox=145.7096835,-38.6418871,145.7141878,-38.6392615)
returned four building ways in the corridor’s search bounds. All four sit outside the 30 checked Norman Road parcel records.
OSM gives address points for 1–3 and 23, so Microsoft still provides the draft’s 26 roofprints. Prioritise 1–3 and 23 for a
current licensed outline or permitted site survey.

**Ground and roof height.** The 28 November 2026 [ELVIS](https://www.ga.gov.au/scientific-topics/national-location-information/elvis-elevation-information-system)
query for the corridor returned ground DEMs and national coarse products. It exposed no downloadable
local roof-resolution DSM, DHM or classified point cloud. Victoria’s coverage index shows the
[2022 Inverloch survey](https://services-ap1.arcgis.com/P744lA0wf4LlBZ84/arcgis/rest/services/CIP_Elevation_Footprints/FeatureServer/0/53)
over the full route at 8 points/m² and an [older coastal survey](https://services-ap1.arcgis.com/P744lA0wf4LlBZ84/arcgis/rest/services/CIP_Elevation_Footprints/FeatureServer/0/246).
The [Digital Twin Victoria LiDAR programme](https://www.land.vic.gov.au/maps-and-spatial/imagery/elevation-data/major-lidar-projects/digital-twin-victoria-lidar-2021-24)
offers survey products through licensed providers. Verify flight dates against the delivered tiles.
The [open Victorian Coastal 2.5 m DEM](https://discover.data.vic.gov.au/en_AU/dataset/victorian-coastal-digital-elevation-model-2021-vcdem-250cm)
is another terrain and bathymetry source. Treat it as a grounding candidate where its local coverage warrants it.

Four street-centre spot checks from Florida Avenue to the dead end put the shipped raw terrain within 0.09 m of
the [Geoscience Australia 5 m bare-earth DEM](https://ecat.ga.gov.au/geonetwork/srv/api/records/22be4b55-2466-4320-e053-10a3070a5236).
Use the current ground grid for the Norman Road pilot and check model siting at wall corners and street approaches.
When a roof-capable survey with suitable reuse terms is available, align its ground and surface grids to the same
horizontal and vertical datum. Subtract the bare-earth surface for relative building height and fit roof planes
from classified building returns or a clear, sufficiently dense DSM. Reject canopy and isolated high returns.
Record eave and ridge separately where supported. Keep unresolved values provisional and apply the measured relative
height above Explore’s rendered ground.

**Roof attributes and imagery.** Sample 1–3, 13, 23 and a few controls through a small Geoscape Clip extract or
[Buildings API](https://api-docs.geoscape.com.au/guides/buildings/quickstart) request before committing to a licence.
Check coverage, capture dates, and populated eave and roof height, shape, slope and colour from the
[Height](https://docs.geoscape.com.au/projects/building_height_insight_pack/en/stable/index.html)
and [Roof](https://docs.geoscape.com.au/projects/building_roof_insight_pack/en/stable/index.html) Insight Packs.
The slope field describes the building’s maximum roof slope. Ridge positions and individual slopes need finer geometry.
Confirm that the agreement permits generated assets in both the review Site and public Explore. For broad roof colours,
use a dated aerial layer with derivative rights and sample the main roof away from trees and heavy shadows.
Evaluate [Vicmap imagery](https://www.land.vic.gov.au/maps-and-spatial/spatial-data/vicmap-catalogue/vicmap-imagery),
[Esri World Imagery](https://www.esri.com/en-us/legal/terms/web-site-service), and
[Nearmap](https://www.nearmap.com/au/legal/product-specific-terms) against those rights and actual local capture.
The [Vicmap imagery index](https://services-ap1.arcgis.com/P744lA0wf4LlBZ84/arcgis/rest/services/Aerial_Imagery_viewable/FeatureServer/0)
shows 10 cm South Gippsland and January 2023 Outer Melbourne East coverage at the Norman Road checkpoints.
Use those survey records to scope a licensed sample.
Nearmap’s [coverage map](https://www.nearmap.com/au/coverage) covers Norman Road in vertical imagery and 3D.
Check capture dates and permitted outputs for the specific products before relying on them.
Use [Google Street View](https://about.google/brand-resource-center/products-and-services/geo-guidelines/#street-view)
as a view or link in Google’s service. Its restrictions on creating data apply to this private review workflow too.
[Mapillary](https://help.mapillary.com/hc/en-us/articles/115001770409-CC-BY-SA-license-for-open-data) can supply CC BY-SA
photos where coverage exists. The Norman Road query found no frames, so start with contributor photos with modelling permission.

**Town centre detail.** Capture dated phone photos of the bakery and library façades, their returns and signs.
Use overlapping views and a scale reference for the clock and war memorial. Test a mesh export from
[RealityScan Mobile](https://www.realityscan.com/mobile) or [Polycam](https://learn.poly.cam/hc/en-us/articles/27756102599572-What-File-Types-Can-Polycam-Export)
on one object, then use the scan as a reference for a game-ready mesh. Use the [Victorian Heritage Database](https://vhd.heritagecouncil.vic.gov.au/about),
[Victorian War Heritage Inventory](https://www.vic.gov.au/victorian-war-heritage-inventory),
and [Bass Coast Shire heritage and planning material](https://www.basscoast.vic.gov.au/assets/general-images/05-2025-Heritage-Overlay-Audit.pdf)
to establish identity, site history and dated elevations where available. A permit drawing describes approved intent until
matched to the building on site. Business websites and social media help confirm current tenancy and signage. Obtain reuse
permission before incorporating their photos or artwork. Keep State Library Victoria material in a dated historic layer,
using each item’s [reuse terms](https://www.slv.vic.gov.au/help/copyright-legal-deposit/understanding-copyright/copying-re-use-without-librarys-permission).

Start with the Norman Road exceptions at 1–3 and 23, and use numbers 11 and 13 as reference buildings for the next roof
measurements and façade photo review. Run a small town-centre photo pilot with the bakery, clock, memorial and library
before expanding the same method block by block.
Record source, capture date, rights and whether each footprint, height and finish is measured, mapped or estimated.
Review the measured changes with the same street and aerial cameras as the v44 draft before extending their use.

## Inverloch's power poles cast no shadows

Ash, 13 November 2026: "remove power pole shadows from Inverloch". The timber power poles and their wires along the
streets (street-level detail round the clock and number 11) are now their own mesh, `power-poles`, a child of
`street-detail`, that does not cast shadows. Letterboxes and bins still do. The change is in the built
`inverloch-model.js` (`?v=14`); the matching source change, if the model is rebuilt from ai-forge, is in
`buildStreetDetail` in `src/features/inverloch3d/landmarks.ts`: draw the poles and wires with a second builder and
give that mesh `castShadow = false`.

## Moorooka's floods

**Flood** in Explore Moorooka works the way it does in the Logan model (see `logan/README.md`), through the same
code in `app.html`: a list of floods, the water rising to its peak,
and a card offering to fly to where it flooded if it did not flood where you are. The list has January 1974,
January 2011 and February 2022, and 1%, 2%, 5% and 0.2% AEP floods.

Three things are different, and Ash asked for each:

- The first press shows a notice that has to be accepted before the list opens: this is not official flood
  information, do not rely on this model, it is experimental, and it is not endorsed by Brisbane City Council.
- A banner says the same for as long as a flood is showing.
- There is no **Water** slider (the one that reads "At the peak" and lowers the water): the flood rises to its
  peak and stays there. Logan keeps its slider. It is `noFloodSlider` in Moorooka's entry of `TOWNS`.

The floods are **our own simulation**, not council mapping (Ash, 12 November 2026: "make it as accurate as possible
using your own modelling. Don't just use the council's existing mapping"). The code is in `tools/flood/` in this
repository, which also builds `moorooka/floods.json` and the `flood-*.png` files:

- **The ground:** the model's own 5 m terrain (State of Queensland survey), with buildings standing 2 m proud so water
  goes round them. Creek beds are graded through road and rail embankments where the survey shows the embankment
  but not the culvert under it.
- **The rain:** the Bureau of Meteorology's 2016 design rainfall for Moorooka, as a 3 hour storm in which every
  duration from 5 minutes to 3 hours reaches its design depth. Gardens and parks soak up the first 15 mm and 1 mm an
  hour; roofs and roads 1 mm. Stormwater pipes in the streets take up to 30 mm an hour to the nearest creek.
- **The water:** a 2D shallow-water model ("local inertial", the method in LISFLOOD-FP and in rain-on-grid models)
  moves the water over the grid for five hours. Water 10 cm deep or more counts as flooded.
- **Oxley Creek and the Brisbane River:** in big river floods they back up into the western flats. That level is
  worked out from the Bureau's recorded Brisbane City gauge peaks (1974, 2011, 2022), raised for the distance up the
  river. It is the least certain input. Each design flood is the higher of its storm and a matching river flood.
- **Checked against council's mapping, not built from it:** see `tools/flood/README.md`.

Water from creeks that start outside the model's 3.3 km square is not included. If the 3D model is rebuilt from
`ai-forge`, keep these flood files: they come from `tools/flood/`, not from the model build.

## Where they come from

These files are built, not written by hand. The source is the `ai-forge` repository:

| | Inverloch | Moorooka |
| --- | --- | --- |
| model code | `src/features/inverloch3d/` (entry point `embed.ts`) | `src/features/moorooka3d/` (entry point `embed.ts`) |
| shared viewer | `src/features/town3d/` | `src/features/town3d/` |
| data pipeline | `scripts/inverloch/` | `scripts/moorooka/` |
| build | `npm run build:inverloch-embed` | `npm run build:moorooka-embed` |
| output | `dist-embed/` | `dist-embed/moorooka/` |

To update one, run its build there and copy its four files (and Moorooka's `detail/` folder) into its folder here. If the script changes, bump the
`?v=` on it in `TOWNS` in `app.html` so phones fetch the new one.

### The Esplanade boat ramp and west jetty

The new west jetty stands beside the existing launch ramp. It adds the pedestrian approach, a roughly 30 m main deck, steel handrails, solar fixtures, timber wave screens and a low landing extending about 15 m west from the outer end. Its walkable surfaces are registered at deck height with the Explore host. At higher tides the water stands above the lower landing. The main rail and entry bollards have collision, and the launch lanes and the Gippsland Ports jetty retain their existing models. **Jump to → Boat ramp jetty** starts by the new apron.

- **Mapped and photographed.** [OpenStreetMap slipway node 1969363650](https://www.openstreetmap.org/node/1969363650) and [east pier way 235753492](https://www.openstreetmap.org/way/235753492) anchor the setting. The west footprint is estimated against [BobTanGo’s 7 December 2025 aerial](https://commons.wikimedia.org/wiki/File:Inverloch,_from_above._December_2025.jpg), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Original vertex-coloured geometry represents that photographed layout. The aerial remains a source reference outside the runtime.
- **As-built chronology and levels.** [Bass Coast Shire](https://engage.basscoast.vic.gov.au/inverlochjetty) documents the new fixed jetty west of the slipway and wave screens. [Better Boating Victoria](https://betterboating.vic.gov.au/ramp-upgrades/inverloch/) documents the December 2024 reopening and the approach, grip mesh and handrail updates in early 2025. The [awarded council tender](https://www.basscoast.vic.gov.au/assets/agendas-minutes/agendas/Council_Meeting_-_17_April_202_ciBlYPw2NkGGDA_DFjMHtg_v1.pdf#page=43) specifies main and lower deck levels at +2.00 m and +0.70 m AHD. Explore applies its existing vertical scale to those levels. The local approach profile, exact deck outline, connecting steps and fitting dimensions are provisional. The existing ramp's bearing is approximate and is a separate survey item.

### Inverloch terrain-tiling trial

The v24 embed comes from [the terrain source revision](https://github.com/Ashley-Pettit/ai-forge/commit/0284c5a68b908fb85b75e46ba27c6fe7b08e3ee2) on top of
[the combined renderer](../CLAUDE.md#inverlochs-3d-model-build-it-from-the-full-source-only). Build it with `npm run build:inverloch-embed`.

`src/features/inverloch3d/terrain.ts` partitions the existing grid into sections of up to 128 × 128 cells. Each has its own bounds so a
street-level camera can skip land outside its view. In the full-town aerial view the renderer can submit all 42 land meshes and all 1,101,022
triangles. All sections use the same material, height samples, edge normals and world-space texture coordinates.
Walking, shoreline and tide calculations still use the original heightfield. The [ground-colour patches](detail.json) load as before.

## Credits

Inverloch: map data © OpenStreetMap contributors (ODbL). Elevation © Commonwealth of Australia (Geoscience
Australia) 2025, CC BY 4.0.

Moorooka: buildings, streets, railway, terrain and imagery © State of Queensland, CC BY 4.0. Parks © Brisbane City
Council, CC BY 4.0.

Each model shows its credit on screen.

## Moorooka: the designed ground is what every device draws

Ash (13 November 2026): "its a bit laggy, quite a few roads and pathways are broken. lots of wavey paths rather
than straight", and "the aerial photos are not by themselves reliable enough. After using them you need to infer
correctness". Two things were still showing the old ground painted from the photograph:

- **The clean ground dropped out when the phone was slow.** The ground blocks came in only after the model was seen
  to draw at 24 frames a second, and went again when frames were slow, so lag and wavy paths arrived together. Now
  they come in straight away and stay (still not on the slowest tier, a device reporting under 4 GB, or one asking to
  save data). Their cost, four texture reads, is nothing beside the model's geometry: drawing work per frame was
  counted in the version Ash called fast and in this morning's, and it was the same (about 1.4 to 2 million
  triangles in 30 to 55 draw calls at the highest quality).
- **The ground under the blocks was still the old painting.** `detail/*.webp` (0.4 m) and `ground.webp` (0.8 m) show
  wherever the blocks are not drawn: while they load, on the slowest tier, and from further off. They are now painted
  from the blocks themselves: sealed ground (streets, drives, footpaths, car parks) from the plan; unsealed ground
  keeps the old painting where it is green or water (parks, playing fields, bushland, creeks) and becomes plain lawn
  where it was a blot of grey, brown or pale. Made by `scripts/moorooka/ground_base.py` in ai-forge.

The blocks, `town.json` and `yards.bin` are untouched: they are the other Moorooka chat's (#53). On the slowest tier
only `ground.webp` is drawn, at 0.8 m, so the gain there is small.

**The crisp ground is drawn on the light setting too.** Since 13 November the app opens every phone on its light
setting (the model's lowest quality) and only moves to the sharp one if the phone holds 60 frames a second. The
ground blocks were left out of the lowest quality, so on most phones none of the designed ground was ever drawn:
only `ground.webp` at 0.8 m, which is where "edges soft and wobbly" came from. The model (script `?v=16`) now draws
the blocks on every quality setting, except on a device reporting under 4 GB of memory or asking to save data.

**Street corridors drawn exactly** (Ash, asked what was wrong: "edges soft and wobbly"). In the 240 blocks outside
the square round the shops (that square is the Awesome News chat's, redrawn in `tools/ground/design2.py`) the
street land is redrawn from the street centre lines by geometry: kerb lines as offsets of the centre line, true 5 m
arcs where two streets meet, the footpath as one 1.3 m band carried round each corner, and crossovers, car park
entries and paved frontages as straight-sided pieces square to the street. Their places are read from #53's blocks,
so driveways, cars and backyards still line up. Before, those distances were measured on a picture of the plan,
good only to half a pixel, which made footpaths and kerb lines lumpy. Properties are untouched. Made by
`scripts/moorooka/street_corridor.py` in ai-forge.

An alternative set of blocks for the whole suburb, worked out from the photograph first and then designed (real
driveways, car parks and footpath sides rather than ones placed by rule), is in ai-forge at commit 828c929 on
`claude/eager-bohr-p8oslj`. It is not used here.

## Street names in every model

Ash, 13 November 2026: "On each of the models I want to be able to turn street names on or off. Follow best practices
for this". The app draws the names over the model (`townStreetNames` in `app.html`), so Inverloch, Moorooka and Logan
follow the same rules:

- **The switch:** a signpost button beside Share in Explore, or **N** on a keyboard. Off to start with (Ash, 14
  November 2026: "Names start off"), and the choice is remembered on this device for every model (`localStorage` key `an3d-streets`). Logan's own chips for some of its
  main roads go off with the rest.
- **Where a name goes:** each street is joined up end to end and offered a name about every 120 m, on its straightest
  stretch. A name shows only where that stretch is long enough on screen to hold it. It runs along the street, never
  upside down and never steeper than 65 degrees.
- **How many:** main roads first, and readable from further off (motorways about 2.2 km, local streets about 500 m), so
  names thin out as you fly higher. At most 18 on a phone and 36 on a bigger screen. No overlaps with each other, the
  model's place names or the buttons and sticks. A street the model already names isn't named again. Names that are
  showing keep their place (no flicker) and fade in and out (not with reduced motion).
- **Walking:** only streets you could see, with no building in the way (from each model's building outlines), within
  400 m. Each nearby street is also named where it passes closest to a point 22 m ahead of you, so a cross street in
  front is named and the name slides along as you walk.
- **Data:** the same files the model loaded (`town.json`; Logan's `roads.bin`, `map.json` and, when you walk,
  `buildings.bin`), fetched from the same addresses so the browser has them cached. Paths, tracks and unnamed lanes get
  no name. Logan's setup runs in small pieces so the model keeps moving.

## Explore's top buttons

Ash, 14 November 2026: "Optimise top btn layout". The tools (Share, Street names, Tide, Time, Flood) sit in one pill,
built like Walk and Fly, so the top reads as a few groups: Exit explore, Walk or Fly, Jump to, then the height and the
tools. On a phone or tablet that is two rows. From 1000 px wide it is one row: Exit explore and the height on the left,
Walk or Fly in the middle, the tools and Jump to on the right (the CSS after `.bs-town-flood` in `app.html`).

## Moorooka: shops and places, straight footpaths, no stray lanes (14 November 2026)

Ash: "Add known businesses to moorooka. Do a google search for businesses and add the popular ones. For example make
the post office look like a post office. Fix up footpaths so that they don't end randomly. Make sure the footpaths use
straight lines not wavey", with no satellite images and minimal changes.

- **Shops and places** (`MOO_SHOPS` and `townShops` in `app.html`, placed by `tools/ground/shops.py`): eleven popular
  places from a web search, each on its own building's street wall (address point and lot from the Queensland address
  register). A sign on the wall (above the awning line on the Beaudesert Road strip, so it reads from across the street),
  and a "Shops and places" group in Jump to that stands you across the street looking at it. The post office has a red
  band and a red "POST OFFICE" sign with an envelope, and a red and a yellow post box at the kerb. Names only, no logos.
  The post office and the community centre were already in Jump to (the model's own places), so they only get the sign.
- **No stray lanes over the ground** (`moorooka-model.js`, `?v=17`): the model no longer lays its flat ribbons for
  lanes, tracks, footways and cycleways (classes 4 to 7) or their round end caps. The ground plan already draws them, and
  the ribbons sat on the terrain only at points a few metres apart, so they came and went through it as ragged pale and
  dark patches in car parks and on verges. Streets (classes 0 to 3), bridges, kerbs and line markings are as before. The
  matching source change in ai-forge is in `c_` (the streets builder in `scene`/`roads`): draw a ribbon only for a
  bridge or class 3 and under, and end caps only for class 3 and under.
- **The ground plan** (`surface/*.webp`): tidied by `tools/ground/tidy.py` (see its README).

## Moorooka: drawn by distance (the lag fix)

Ash, 14 November 2026: "Optimise around lag". Measured first: at the start point the model drew about 670,000
triangles a frame on the app's light setting and 3.4 million on a phone's sharp one, most of it spread over the whole
suburb whatever the camera could see. Every parked car was drawn in full (round wheels, mirrors, door handles:
984,000 triangles), every tree, every kerb (one piece, so never skipped), every fence, and on the sharp setting all
of it again for shadows. The model (script `?v=18`) now draws by distance:

| What | Near the view | Further off |
| --- | --- | --- |
| Parked and moving cars | in full, within 90 to 220 m | a 26 triangle body out to 800 to 1,600 m, then nothing |
| Trees | in full, within 200 to 480 m | a plain 8 triangle crown |
| Buildings | with windows and solar panels, within 260 to 700 m | walls and roofs only |
| Kerbs, fences (sharp settings) | within about 400 m | not drawn |
| Shadows | cast by what is near | none from the far versions |

(The smaller distance is the light setting, the larger the sharpest.) Nothing about the layout, the ground or the
data changes. Triangles a frame, same three views, before and after:

| Setting | Before | After |
| --- | --- | --- |
| Light, in the app (start point, a street on foot, from 420 m up) | 669,000 / 650,000 / 785,000 | 241,000 / 240,000 / 276,000 |
| Sharp on a phone, in the model's own viewer (start point) | 3,376,000 | 818,000 |

The work the page's own script does each frame for this is about 0.3 thousandths of a second.

## Moorooka: shop rows from photos, one road surface, footpaths to the corner (14 November 2026)

Ash: "Improve, fix roads, footpaths, add more businesses. No satitile photos for roads or footpaths. You can use real
photos to model businesses if you can".

- **Shop rows** (`MOO_FRONTS` and `townShops` in `app.html`, replacing `MOO_SHOPS`): each building's front is modelled as
  a row, from street-level photos (Google Street View, looked at for each row: who is there, in what order, what the
  front is like). Names are plain lettering in each business's colours, no logos. Kinds of front:
  - `strip`: glass shopfronts with a door each under an awning, the name on the awning's edge. Each shop steps down
    with the footpath (Beaudesert Road falls 0.8 m along 145-147), with a plinth so nothing shows under it.
  - `verandah`: the post office row at 131 (Butcher, Post Office, Domino's): a corrugated verandah on posts, a gable
    over the post office door with the red sign across it, and the red and yellow post boxes by the door.
  - `centre`: Moorooka Central (Commonwealth Bank, H&R Block, Aussie, Jao Jorm Thai): glass fronts, a canopy and one
    dark sign band.
  - `pub`: the Red Lion: name and TAB sign on the wall, and the low white wall of banners by the footpath.
  - `sign`: one sign on the wall (Rising Sun International Church, Starbucks, Vizzeto Woodfire, the community centre).
  New names this round: Butcher, H&R Block, Aussie, Jao Jorm Thai, a barber (two), Moorooka Mall (Ethiopian Village),
  A La Mode Hair & Beauty, Afro Restaurant, Rannchhod Arcade (Arhibu), an optometrist, Baba Burger, Zeitoon, the TAB.
  143 Beaudesert Road is an RSPCA op shop in the photos (it was listed as Salvos). Shopfronts whose name could not be
  read are left plain. Tenants change: check a row against a current photo before adding to it.
  The model's heights are metres AHD (checked: ground 41 to 47 m along the strip), which is how `eave` sets a wall's
  height.
- **One road surface** (`moorooka-model.js`, `?v=19`): the model no longer lays flat ribbons for any street, only for
  bridges. The ground plan already draws every road, and a ribbon over it showed as a second, darker road with a ragged
  edge, worst where streets meet. Line markings and kerbs used to sit 0.11 to 0.34 m up to clear the ribbons; they
  now sit on the ground (0.02 to 0.1 m). In ai-forge the matching change is in `c_` (the streets builder): draw a
  ribbon only for a bridge, no end caps, and the two lift tables (the road's, all 0.05, and the kerbs', all 0.02;
  `Vh` and `rv` in the `?v=19` bundle). It was patched onto the bundle built for the drawn-by-distance change above.
- **Footpaths to the corner** (`surface/*.webp`, by `tools/ground/tidy.py`): see its README.

## Admin mode: paint the ground and take things out (14 November 2026)

Ash: "can you an an admin mode here i can self add path, grass or road? if user is ash or ashley. Also delete cars or
people etc...". Moorooka only for now (it is the model whose ground is drawn by kind).

- **Who sees it:** the pencil in the tools shows when the name in Settings is Ash or Ashley (`isAsh()`), and the model
  has `setGroundEdits`. Everyone else sees no button. This is a convenience, not security: nothing a visitor does in
  their own browser reaches anyone else, because edits are only published by a pull request (below).
- **Tools** (`townAdmin` in `app.html`): Path (concrete, 1.3 m), Grass (2.5 m) and Road (asphalt, 6 m) paint by dragging
  on the ground: a straight line from where the finger goes down to where it lifts, or freehand (the toggle; freehand
  lines have their wobble taken out). Width with the minus and plus. Delete takes out the parked car or tree tapped, or
  one of Ash's own strokes; tapping a person keeps everyone from being drawn within 12 m of that spot (walkers are made
  up as you go, so there is no one person to remove). Undo, and the bin (asks once) to clear everything on the device.
- **Moving about with a tool on:** two fingers drag, turn and zoom the map when flying (the sticks hide to make room);
  when walking, the sticks stay and a finger on the view above them draws.
- **Where edits live:** on the device (`localStorage["an3d-edits-moo"]`), drawn straight away. Copy puts them on the
  clipboard with a line saying what they are. Ash pastes that to Claude; `python3 tools/town/add_edits.py <file>` adds
  them to `town3d/moorooka/edits.json`, which every copy of the app fetches and lays over the model. One edit to a line:
  to take a published edit back out, delete its line. Once an edit is published it drops off the device's own list.
- **In the model** (`moorooka-model.js`, `?v=20`; ai-forge `claude/moorooka-admin-mode`): `setGroundEdits(strokes)` lays
  strokes into the blocks of ground by kind as they come in (the same distance fields the plan uses, so edges are as
  sharp as the plan's; a block in view is fetched again when a stroke over it changes), `groundUnder(x, y)` and
  `pickThing(x, y)` say what a point on the screen is on, `setRemoved({cars, trees, people})` hides things by where
  they stand, and `frameCost()` gives the last frame's triangles and draw calls.
- **Limits:** painted ground shows where the ground is drawn by kind (within a few hundred metres of the view, on
  devices that draw it), not on the far ground picture. People only exist on the medium and sharp settings. Moving
  traffic, buildings, fences and what stands in backyards cannot be taken out yet. The road change of the round before
  (no ribbons) is now in the source too (`groundDrawsRoads`), and a car parked at the kerb sits on the ground.

## Pilot: number 6's neighbours in number 6's detail (14 November 2026)

Ash asked how long all of Moorooka would take in the detail of 6 Beaudesert Road and whether it could stay lag free,
then: do it within 40 m of number 6.

- **What is in it:** the five houses within 40 m of number 6's lot (1RP130916, 1RP65197, 2RP130916, 2RP65197,
  1RP57597), built by the same detailed builder as number 6: stumps and battens under a high-set house, weatherboards,
  windows with hoods, doors, front and back steps, a picket fence with a gate and letterbox where the lot fronts a
  street, paling fences down the sides and across the rear, a path to the front steps, a clothes hoist, shrubs.
- **How they were made:** by rule, with no imagery (ai-forge `scripts/moorooka/neighbours.py`, branch
  `claude/moorooka-neighbours-pilot` at `1db0312`): the lot from the cadastre, the house's outline, heights and roof
  colour from the survey. Wall and trim colours come by turn from a short list, and every house gets number 6's roof
  form: both are guesses. Their ground stays as the plan draws it. A 42 m by 6 m building on a sixth lot (3RP59613) and
  a 456 m2 one on a seventh are not houses and are left as the general model draws them.
- **Drawn by distance** (`?v=21`): each property is in full within 110 m (light), 160 m (phone sharp) or 260 m
  (sharpest) and a plain house of 21 to 29 triangles beyond.
- **What it costs** (`frameCost()` in the app, software renderer, so triangles not frame rates): the five cost 15,233
  triangles in full, 3,047 each on average (number 6 itself is 4,969). A frame near them:

  | Setting and view | Before | After |
  | --- | --- | --- |
  | Light, phone, on foot | 477,162 | 483,696 (+1.4%) |
  | Light, phone, 7 m up | 521,705 | 535,005 (+2.5%) |
  | Phone sharp, phone, on foot | 782,690 | 800,044 (+2.2%) |
  | Phone sharp, 1100 px wide, 75 m up | 453,317 | 475,690 (+4.9%) |

  (The sharp settings draw near things twice, once for shadows. The last three rows were measured with six
  properties, before the long building was dropped.) Scaled up: about 100 houses stand within 160 m of a point in the
  residential streets, which would be about 300,000 triangles, so the whole suburb would need full detail kept to
  about 60 m and a middle level where pickets and battens are a picture on a flat panel.

## Driving: Enter gets you into the nearest parked car (14 November 2026)

Ash: "Add a feature where if i press enter when walking i get into the car." Moorooka only for now (its model hands
over its parked cars).

- **Getting in and out** (`townCar` in `app.html`): walking within 8 m of a parked car shows a Get in the car button
  above Up and Down. Enter, or the button, puts you in the nearest one; with none in reach a message says how far the
  nearest is. Enter or Get out again and you step out of the driver's door, on the right. Flying, jumping to a place or
  starting again gets you out too. Enter is left to a focused button (Exit, Jump to, the tools), so those still work
  from the keyboard.
- **Driving:** W or the up arrow (or the left stick forward) goes, S or down brakes and then reverses, A and D or left
  and right steer (less lock the faster you go), Space is the handbrake. About 0 to 60 km/h in 8 seconds, 70 km/h flat
  out, 20 km/h in reverse. The height chip shows the speed.
- **The view** follows from behind and above, swinging round after the car. The right stick or a drag looks round it,
  and the view settles back once you drive on. It moves in closer where a building is behind the car.
- **What the car does:** follows the ground and tips with the slope; stops with a bump at buildings (their surveyed
  outlines), deep water and the edge of the model; stays where you leave it until the page is reloaded. It goes
  straight through fences, trees, other cars and people, and has no sound.
- **In the model** (`moorooka-model.js`, `?v=22`; ai-forge `claude/moorooka-drive` at `78a2231`): `nearestCar(x, z, reach)`,
  `driveCar(x0, z0, x, y, z, heading, pitch, roll)` (the car is known by where it was first parked; up to twelve can be
  driven off in one visit) and `solidAt(x, z)`.

## Sound, the mega boost, a plane, and keys shown on the buttons (14 November 2026)

Ash: "Nice needs sounds, shift for mega boost, also add a plane near 6 beaudesert rd that i can get in", and "place
the hotkeys on desktop at the bottom right of things desktop only. Like n for street names". All in `app.html`; the
model is unchanged (`?v=22`).

- **Sound** (`townSound`): made on the spot with Web Audio, no files. An engine that rises through the gears, wind and
  road noise with speed, tyres under the handbrake, a thud for a bump or a landing, a door getting in and out; the
  plane's engine has a propeller's beat. It starts with the key or tap that gets you in (browsers need that), stops
  when you get out, and pauses with the tab. On an iPhone the ring switch has to be on to hear it.
- **Mega boost:** hold Shift (or the yellow Boost button) with the power on. The car goes to about 210 km/h, the plane
  to about 540 km/h. The car moves a metre at a time inside each frame, so it cannot skip through a wall at that speed.
- **The plane** (`townPlaneParts`, `MOO_PLANE`): a small high-winged plane, white with a blue stripe, on the grass of
  Stimpson Park across Beaudesert Road from number 6 (38 m from where Moorooka starts), nose to the road junction. It
  is the app's own mesh stood in the model (`addParts`), with its propeller apart so it can turn. Jump to has it under
  "Things to drive and fly". Within 11 m, Get in the plane (or Enter).
  - W and S (or the left stick forward and back) are the power, A and D (or sideways) turn it: on the ground it steers,
    in the air it banks. Space (or Up) lifts the nose, C (or Down) lowers it.
  - It leaves the ground at about 95 km/h with the nose up (or at about 120 km/h by itself), cruises at up to 220 km/h,
    and sinks as it slows, which is how it comes down. It lands wherever it meets the ground, however it arrives, and
    climbs over a building rather than into one (it does not know how tall each is: it clears 12 m).
  - You can only get out on the ground, stopped. Left in the air (you flew the camera off, or jumped somewhere), it goes
    back to the park. It goes back there on a reload too.
- **Keys on the buttons, desktop only:** each button with a key has it as a small keycap at its bottom right corner
  (`data-key`, shown under `(hover: hover) and (pointer: fine)`): Esc on Exit explore, F on Walk and Fly, N on street
  names, J on Jump to, Enter on Get in and Get out, Shift on Boost, Space and C on Up and Down where they show.

## The car: 100 km/h, a fifth more acceleration, and a boost that runs on a charge (14 November 2026)

Ash: "Make the car top speed 100, boost shows an icon around the car with boost charge amount. Average acceleration
20% more". All in `townCar` in `app.html`.

- **Top speed** 100 km/h (it was 70). **Acceleration** up by a fifth (5.04 m/s2 off the line, from 4.2; the boost's from
  17 to 20.4): averaged from a standstill to nine tenths of top speed that is 1.97 m/s2 against 1.64. 0 to 60 km/h now
  takes 5 seconds (it was 9, most of that from the higher top speed).
- **The boost has a charge:** about four seconds' worth, back in ten. From 100 km/h a full charge takes the car to about
  180 km/h, and it eases back to 100 when the boost stops. Run right out, it waits until a fifth is back.
- **The ring:** 24 pieces on the ground round the car, lit as far round as there is charge left (the last quarter
  orange), over a faint full circle. It shows while the boost is on and until the charge is full again. The Boost
  button fills and empties with it.
- The plane's boost is as it was: no charge, no ring.

## Two planes, their keys on screen, and the arrows work the nose (14 November 2026)

Ash: "with the plane show plane controls when in it, add a 2nd plane near the moorooka shops. I want up and down arrows
to adjust my pitch so that if i press down my plane shifts upwards and vica versa."

- **Two planes** (`MOO_PLANES` in `app.html`, each with where it lives and its line in Jump to). The first is still in
  Stimpson Park. The second stands in the car park out the front of Moorooka Central (132-146 Beaudesert Road), across
  the road from the post office, nose up Beaudesert Road at 206 degrees: from there the next 140 m are clear of
  buildings to 15 m wide (checked against `solidAt`), so holding W takes it over the footpath, onto the road and up to
  flying speed without turning. Each plane stays where you leave it; one left in the air goes back to its own spot.
- **The nose:** in a plane the down arrow lifts the nose and the up arrow lowers it, the way pulling back and pushing
  on a plane's stick does. Let go and it levels out. Space and C still do the same, and so do the Up and Down buttons
  on a phone (renamed Climb and Dive while you are in a plane). The up and down arrows no longer work the plane's
  power: that is W and S (or the left stick). In a car the arrows drive as before.
- **The keys, on screen** (`#bsKeys`, `KEYS` in `townCar`): while you are in a plane or a car, a desktop lists the keys
  that work it bottom left, in place of the walking list, as keycaps with what each does. "?" hides the list and brings
  it back. In a plane a line on top says what to do next: hold W for power, it flies at 95 km/h, fast enough so press
  the down arrow, flying, too slow to stay up. On a phone, where the sticks and buttons are already named, only that
  line shows, under the top bar, and the left stick reads "Power and turn" (or "Drive" in a car).
- Checked in the app at desktop and phone sizes on a software renderer with simulated keys and touches: both planes in
  Jump to; the shops plane reaches 115 km/h in 5 s on W alone without touching anything, leaves the ground with the
  down arrow, noses down with the up arrow, and levels out with neither; the up arrow alone gives no power on the
  ground; the arrows still drive a car. Not tried on a real phone or keyboard.

## Admin mode: Ctrl+Z, and a Save that publishes without Claude (14 November 2026)

Ash: "Crnt z to undo. A save that I can do as an admin so i can update without needing claude."

- **Ctrl+Z** (Cmd+Z on a Mac) undoes the last edit while the edit bar is open, the same as the Undo button, which
  shows the key on a desktop. With the bar shut it does nothing.
- **Save** (`#bsAdminSave`, `send` in `townAdmin`): sends the edits waiting on this device to everyone. It uses the
  GitHub key saved in Admin in Settings (the one Update now, kept views and food edits use) to ask GitHub to run
  `.github/workflows/town-edits.yml`, which pipes them into `tools/town/add_edits.py`, commits `edits.json` and runs
  the quick publish: in everyone's app in about 5 minutes. The tool checks every number and only writes
  `town3d/<town>/edits.json`. Many edits go in lots of 50,000 characters, one request each (GitHub's limit is 65,535).
- **What was sent** stays drawn on that device (`an3d-sent-<place>`) and comes off the count on Save. Once the
  published file holds it, it is dropped; if it still is not published 20 minutes on, it goes back to waiting so it
  can be saved again. Undo does not reach back past a save.
- With no key, Save says where to put one. A refused key or no connection says so and keeps the edits waiting.
  **Copy** is still there to paste to Claude.
- Checked on a local build with the request to GitHub caught, not sent: Ctrl+Z and Cmd+Z, Save with and without a
  key, a refused key, no connection, 1,501 edits in 3 lots, sent edits dropped once published and put back after 25
  minutes unpublished. The workflow itself has not run yet: its first run is Ash's first Save.

## A golden car and plane, a plane that backs up, a handbrake for sliding, quieter engines, a finer boost ring (14 November 2026)

Ash: "The plane needs reverse when on the ground. Sometimes ive been stuck before and unable to fly again. Also add a
golden car. Similar 2x stats. Make the handbrake unrealistic where it only slightly slows the car but drastically
increases turning for burnouts. The engine sounds are slightly too loud. The boost wheel on car could look nicer", and
of the second plane "a golden stripe and extra fast and mobile". All in `townCar`, `townPlaneParts` and `townSound`.

- **The plane backs up:** on the ground S brakes it and then reverses it, to 22 km/h, steering as it goes. A plane
  nosed into a wall or the edge of the model can get out and fly again.
- **The golden plane** is the one at the shops (`gold: true` in `MOO_PLANES`): a gold stripe, twice the push, twice as
  quick to roll and pitch, turns 1.6 times as tightly, and tops out 1.6 times higher (about 360 km/h, 860 on boost).
- **The golden car** (`MOO_GOLD_CAR`, drawn by the app: `townPlaneParts(colour, true)`) stands in Stimpson Park beside
  the first plane, and is in Jump to. Twice the top speed (200 km/h) and acceleration; its boost reaches about 310.
- **The handbrake** (Space) now takes off only 8 km/h a second. While it is held the car swings round at about 155
  degrees a second and keeps travelling the way it was going, coming round to where it points slowly; let go and it
  grips again. Tyres squeal for as long as it is sideways.
- **Engines** are about two fifths quieter, wind a fifth.
- **The boost ring** is 48 fine slanted ticks between two hairlines, red-orange where it is nearly out through gold
  to pale where it is full, and it beats while the boost is on.

## Planes and cars in Inverloch and Logan; the golden ones a fifth better; no boost on the standard plane (14 November 2026)

Ash: "Merge the car and the plane into inverloch and logan. Add 1 plane near the players spawn point and another
random plane", then "dial down the golden car and plane. Only 20% better than a standard one. Remove boost from the
standard plane", and of Logan's corner note "remove the bottom right disclaimer".

- `TOWN_RIDES` in `app.html` says what each town has. `townCar` now runs in any model with `addParts`; where a model
  has no `solidAt` nothing is solid (planes and cars pass through buildings in Inverloch and Logan), and where it has
  no parked cars to hand over, the app draws a red car and the golden car itself (`townPlaneParts(colour, true)`).
- **Inverloch:** a plane, a red car and the golden car on the lawn by The Hub, off A'Beckett Street. **Logan:** the
  same on the lawn out the front of the council, where you start. All are in Jump to. Get in shows when walking.
- **The golden plane** in those two stands on open ground from the town's `roam` list (parks, ovals, a point), a
  different one each visit, skipping any under water. It is not in Jump to.
- **Logan's model** gained `addParts` (ai-forge branch `claude/logan-drive`, on top of `claude/logan-no-704-pin`);
  `logan-model.js` is rebuilt from it (`?v=30`), the data files unchanged.
- **Golden car and plane:** now a fifth better than the standard ones (`GOLD = 1.2`): top speed, push, turn and boost.
- **The standard plane has no boost:** Shift does nothing in it, and its Boost button and key row are not shown. The
  golden plane keeps its boost.
- Logan's standing note in the bottom right corner is gone (its flood list is not public, and carries its own notice).
- Jump to stands you in front of a car's nose, so the car you asked for is the nearest.

## Cars and planes: numbers Ash can change in Admin (14 November 2026)

Ash: "Allow me to edit all these sorts of settings when in as an admin. Add this into the admin of the news app."
Settings > Admin > Cars and planes (shown when the name in Settings is Ash or Ashley) lists `RIDE_DEF` from
`app.html`: car top speed, acceleration and boost top speed, how long the boost lasts and takes to refill, the
handbrake's spin and how much it slows, the plane's top speed, boost top speed, acceleration and take-off speed, how
much better the golden ones are, whether the standard plane has a boost, and engine volume. Each has a least and a
most. They are kept on that device (`an3d-rides`, shared by every town) and read when a model opens (`rideSettings`
in `townCar`). "Put them all back" clears them. They are not sent to anyone else.

## A helicopter, a bus, and one imagined building from the neighbourhood plan (15 November 2026)

Ash: "Add a helicopter, able to get into and drive buses. Pick a spot on the magic mile to imagine one of the
apartments that is proposed", and earlier "a btn that changes the model between standard vs the councils proposed
changes for Moorooka ... If its a building that does not exist yet make that clear ... just for one building".

- **Helicopter** (`heli: true` in a town's planes; `townPlaneParts(colour, "heli")`): one in each town, by the plane.
  Its rotor spins up, then the down arrow (or Space, or Up on a phone) lifts it straight off; the up arrow (or C)
  brings it down, and it sets down on open ground. W and S fly forward (to 180 km/h) and back, A and D turn it on the
  spot. No boost. You can only get out once it has landed.
- **Bus** (`bus: true` in a town's cars; `townPlaneParts(colour, "bus")`): one in each town, drawn by the app, 11 m
  long. It drives like a car at seven tenths the speed and push, with a long wheelbase, a wide outline against
  buildings and the view from further back. The buses the Moorooka model runs along its streets are not these: they
  cannot be got into yet.
- The Plan view that was here (one imagined building on the Magic Mile) was taken out on 15 November 2026: Ash, "Remove the
  plan feature. Delete related code. Not wanted."

## Logan: the plane on the street, the golden car in the back car park (15 November 2026)

Ash: "Move the golden car to the back Logan carpark. Move the plane onto the street outside Logan city council."
The plane now stands in the near lane of the street out the front of the council, the golden car in an aisle of the
car park behind it, the helicopter on the grass across the street and the bus in an aisle of the front car park. All
four checked in pictures from above. (A picture from above at height h covers about 0.7 h metres across: earlier
placements had assumed more.)

## Any car can be driven in Inverloch and Logan; cars at Inverloch's kerbs; cars lean with the ground (15 November 2026)

Ash: "Make it so I can drive any car in Inverloch or Logan. Reuse the same config that is used in moorooka. Inverloch
needs some random cars on streets. The cars aren't following terrain very well. Make sure all cars including the
random ones respect the terrain."

- **Both models now hand their cars over** the way Moorooka's does (`nearestCar`, `driveCar`), so the app's one
  `townCar` drives them with the same numbers and keys: walk up to any car, Enter. Up to twelve can be driven off.
  - Inverloch (ai-forge `claude/drive-any-car`, `inverloch-model.js?v=15`): every standing car, and every car driving
    the streets (it stops driving itself). It also answers `solidAt`, so cars and planes now stop at buildings.
  - Logan (ai-forge `claude/logan-drive`, `logan-model.js?v=31`): every car and bus drawn near you, at the kerbs
    across the city, in the council precinct and in the Browns Plains block. A bus drives as the app's bus does.
    Logan still has no `solidAt`: things pass through its buildings.
- The app's own red car is no longer drawn in those two towns (the golden car and the bus stay).
- **Inverloch's streets:** cars now stand at the kerb along every street, 28 to 98 m apart, on either side, facing
  the way that side runs, about 1,000 than the surveyed ones in the town centre. Moving cars went from 54 to 82.
- **Leaning with the ground:** a car's height is now the mean of the ground under its four wheels, and it tips nose
  to tail and side to side with the slope. Inverloch: standing and moving cars. Logan: every car and bus it draws.
  Moorooka's model was not changed in this.

## Inverloch's helicopter is behind 11 Norman Road (15 November 2026)

Ash: "Move the helicopter to behind 11 Norman Rd." It stands on the grass behind the house, on the side away from
the street, checked in a picture from above. Jump to has it.

## Settings: three links to the suburbs (15 November 2026)

Ash: "In settings the player should be able to set their environment as one of the three suburbs. Don't overengineer
this - just a hyperlink to the suburb." Settings has a "Your suburb" group with a link each to Moorooka, Inverloch
and Logan (the edition's own page, which holds its news and its 3D map).

## The dashed line across the road where two ground tiles meet (15 November 2026)

Ash sent a picture of a dashed green line straight across Beaudesert Road: "I believe these are the lag break
points." It is the edge between two of the sharper ground tiles. The ground's shader read each tile inside an "if",
and at the pixels where two tiles meet the graphics card could not tell how fast the picture was changing, picked
the tile's smallest copy and drew its average colour (green) in little 2 by 2 blocks: a dashed line. The tiles are
now read with the gradients of the ground's own coordinates, taken outside the "if" (`textureGrad`, in ai-forge
`town3d/terrain.ts`). Moorooka (`?v=23`) and Inverloch (`?v=16`) are rebuilt with it. The software renderer used
for checking does not load the sharper tiles, so the line could not be reproduced or seen gone here: the build was
checked to draw the ground as before with no shader errors, and the fix rests on the cause.

## Other players in Logan (15 November 2026)

Ash: "Build for everyone but instead of news name let's add a new settings btn where user can type their player
name. Add to Logan. Consider lag implications. There is no need for amazing speed between players yet an individual
load time should not be excessive and should not be jittery."

- Everyone with Logan's Explore open sees the others: a figure where each walks, or the car, bus, plane or helicopter
  they are in, with their player name over it (`townPeers` in `app.html`; `TOWN_TOGETHER` lists the towns it is on).
- **No account, no server of ours.** Browsers talk straight to each other, and find one another through public Nostr
  relays, using Trystero 0.21.8 (MIT), bundled to `town3d/vendor/trystero-nostr.js` (20 KB) so nothing comes from a
  CDN. One room a town. Because the link is direct, a technical person could read another player's IP address.
- **Load time:** nothing is fetched or connected until the model has been open 2.5 s.
- **Not jittery:** each player sends seven small numbers 5 times a second while moving and once every 3 s when
  still. What arrives is drawn a fifth of a second behind, gliding from where they were last drawn to the newest
  place, so uneven arrival does not show. A jump of more than 60 m is not glided. At most 12 others are drawn, and
  one not heard from for 12 s is taken away.
- Someone flying the camera (not walking, not in anything) is not shown.
- **Settings > Exploring with others:** Player name (16 characters; "Player" and three digits if left empty) and
  "Show me to other players", which when off stops the device joining at all.
- Known gaps: a vehicle someone else is in is drawn as well as your own copy of it standing where it lives; cars
  others drive off still stand in your copy of the town; there is no chat and players pass through each other.
- Checked with two pages in one browser: through a stand-in for the relay, each sees the other's figure and name, and
  the name follows them; and with the real bundle two pages found each other through the public relays from here.
  Not yet tried between two real devices on different networks.

## Logan: the plane, helicopter and bus where they might be found (15 November 2026)

Ash: "In Logan park the helicopter and plane in places where they might actually be found. Don't generate an airport
or helipad. Just look for places that make sense", and "Move the bus to somewhere a bus would be aswell."

- **Bus:** in the kerb lane at the bus stop on the street out the front of the council, beside its shelter.
- **Helicopter:** on open grass in Civic Centre Park by Logan Central Police Station, as a police or rescue
  helicopter would set down.
- **Plane:** on the sports fields in Civic Centre Park behind the council. Logan's model has no airfield to put it
  at, so this is the nearest long open ground a light plane could use, with room to take off.
- Nothing was built for them. All three checked in pictures from above. Jump to has each.

## Other players in every town (15 November 2026)

Ash: "Copy the multiplayer to moorooka and Inverloch." `TOWN_TOGETHER` now lists all three towns, each its own room.
Checked with two pages through the stand-in relay in Moorooka and in Inverloch: each sees the other's figure and name.

## Logan's zebra crossings turned the right way (15 November 2026)

Ash: "Fix the zebra crossings in Logan. They are often drawn 90 degrees off." The council precinct's five striped
crossings were drawn as a few long bars running along the walk. Each is now a row of short bars across the walk,
running with the traffic, one every 1.1 m from kerb to kerb. Fixed in the generator (`scripts/logan/precinct.py` in
ai-forge) and applied to `town3d/logan/map.json` directly (the 21 old bars replaced by 54), since the full data
build needs the fetched source files. Checked in a picture from above one crossing.

## Things to do to other players: wave, dance and more (15 November 2026)

Ash: "I want to be able to interact with other players like wave or dance or lots of fun things, no shooting no
violence." `TOWN_EMOTES` in `app.html`: Wave, Dance, Jump, Cheer, Spin, Bow and Heart.

- While someone else is in the town and you are walking, an **Emote** button sits on the right edge (E on a
  desktop). It opens the seven; on a desktop the keys 1 to 7 do them straight off. One every 1.2 seconds at most.
- Others see your figure do it for 2 to 4.5 seconds (its arms are parts of their own, hung from the shoulders, so
  they can be raised), with the emote's sign beside your name. You get a short line saying what you did, since you
  cannot see yourself.
- It is sent as one word on its own channel ("emote") and only words in the list are acted on.
- Checked on a local build: the button and its list, the sign beside the name on the other player's screen, and the
  figure with both arms up (Cheer), one arm up (Wave) and arms out in front (Heart) in pictures. Dance, Jump, Spin
  and Bow were not caught in a picture.

## Settings in Explore, quicker opening and the shared GitHub key (15 November 2026)

- **Settings button** (right edge, above Emote; towns with other players only). It opens a small panel with: your player name,
  the colour of your top (sent to others with the name as `[name, colourIndex]`; older copies that send a plain string still
  work), a switch to hide from other players (you then send the kind `none` and still see everyone else), your height above
  the ground, and Exit explore. While Settings is on screen the Exit explore button and the height chip top left are hidden
  (`body.bsme`); the chip comes back as the speed readout while you drive. Esc still exits. Typing in the name box does not
  move you.
- **Handbrake button** (touch screens only): above the Look stick while you drive a car or bus. Hold it for the same slide as
  Space. Boost moves up a row to make room.
- **Loading screen**: after 5 seconds its small line changes to "Good things take time".
- **Quicker opening**: when the page opens straight into a town, three.js, the model script and the model's first data files
  (`pre:` in `TOWNS`) are asked for at once with preload hints, instead of one after the other. Files a model reads as data
  (`height.png`, and everything in Logan, which loads from a worker) are hinted as `fetch`; pictures as `image`. The loading
  screen also lifts a little sooner once the picture is steady. Not done: holding back far-away objects until you get near.
- **One GitHub key for every edition**: `brief.ghToken` is now kept once per device (`an-shared:brief.ghToken`) instead of
  once per edition, so the key saved in one suburb's app works in the others. A key saved before this is still found.
  Locking admin in one edition clears the key for all of them. Everything else in `store` is still per edition.

## Construction workers, traffic, Share and the top bar (15 November 2026)

- **Top bar** (towns with other players, `body.bsme`): a gear top left opens Settings, Walk and Fly sit beside it, Jump to is
  top right and the tools pill under it. The height (speed while driving) shows under the gear only while driving; on foot it
  is in Settings. Settings has a header with a close button, player name, top colour (8 across), Play as, a switch for whether
  others see you, the height, and Exit explore. It closes with the ×, the gear, Esc or a tap anywhere else.
- **Leaving asks first**: Exit explore (and Esc) opens "Leave Explore?" with Leave and Stay (`bsExitAsk`, in the town's ask
  box). Esc again, or Stay, closes it. Esc first closes the share menu, Settings or an open list.
- **Share**: the tap copies the explore link (`…/<town>/explore/`) straight away, and a menu under the button offers the
  phone's share sheet (where there is one), a text, an email, WhatsApp and Facebook.
- **Construction worker** (Settings > Play as; `localStorage["an-player-role"] = "builder"`, every town): you are drawn in
  hi-vis and a hard hat (`townPlaneParts(_, "builder")`) and seen from about 5 m behind (`townMe`), and the pencil appears.
  Other players see the hard hat too (pose kind `builder`; older copies show a plain walker).
  - Someone who is not Ash gets Path, Grass, Road and Delete, but **Send** instead of Save and no Copy. Send posts the edits
    to the public ntfy.sh topic `awesome-news-town-plans-r8k3` (`{k:"plan", id, i, n, town, by, v, paint, gone}`, about
    3,300 characters a message, long strokes cut into pieces). They stay drawn on the sender's device for two weeks
    (`an3d-asked-<place>`) or until published. Nothing they send changes the model.
  - The hourly chat job (`.github/workflows/chat.yml`) runs `tools/plans.py`, which keeps them for 60 days in
    `chat/plans.json` on the `chat` branch (ntfy only holds 12 hours).
  - **Ash** (name Ash or Ashley) gets a toast when a town opens with suggestions waiting, and a **Suggestions (n)** button
    in the pencil bar: each one shows who sent it, when and how many changes, with Show (takes you there and draws it, on
    this device only), Add to mine (into your own edits, to change and Save as usual) and Dismiss
    (`an3d-plans-done`, this device).
  - Anyone can post to a public topic, so treat suggestions as untrusted: names are cleaned and shown as text, edits pass
    the same `tidy()` checks as published ones, and nothing goes live unless Ash saves it.
- **Traffic** (`townTraffic`, every town): 16 everyday sedans (`townPlaneParts(colour, "sedan")`) drive the streets
  (class 4 and below, from `townStreetData`) within 800 m of where you start (`T.spawn`), most within 300 m, at 30 to 50 km/h,
  keeping left by a quarter of the street's width (Moorooka and Inverloch know widths; Logan uses 1.9 m). At each corner a car
  may turn into a street that meets it, and turns round at a dead end; one that wanders past 800 m is put back near the start.
  They stop for you when you stand or drive in front. Not drivable, and they can pass through each other and parked cars.
- **Handbrake button** is above the Look stick on touch screens while driving a car (Boost moves up a row).

## Moorooka's rides moved, golden ones for Ash only (15 November 2026)

- Moorooka's rides now stand where they would really be, with nothing made up: the plane on the big lawn in **Alexander
  Park**, the golden plane on the open grass in the park beside **Ipswich Road at Aubigny Street, Annerley**, the helicopter on
  the field **off School Road** near Nathan Terrace, the bus at the **bus stop on Beaudesert Road** just up from number 6 (at
  the kerb, heading south), and the golden car **backed into the driveway at 6 Beaudesert Road**.
- The golden car and golden plane are left out of Jump to, and Ctrl+F9 does nothing, unless the name in Settings is Ash or
  Ashley. They are still there to find and drive for everyone.
- **Place names stay clear of the buttons** (15 November 2026): Moorooka's and Inverloch's models have no
  `setLabelObstacles`, so `townModelFrame` fades out any name whose top is in the top 112 px (or, on a touch screen, over the
  sticks) about 6 times a second, using opacity so the model's own show and hide is left alone. Logan's clearance is now taken
  again whenever the view changes size (it was taken while the view was still 0 px).

## Pencil for construction workers only, time and "Make it an app" in Settings, golden car settings (15 November 2026)

- The pencil (map editing) shows only while you play as **Construction worker**, Ash included. Ash as a construction worker
  edits and **Saves for everyone** and sees Suggestions; as an Explorer he has no pencil (the suggestions toast tells him to
  switch). Anyone else as a construction worker can only Send to the town planner. None of the admin wording shows to them.
- **Walk and Fly** are back in the middle of the top bar (gear left, Jump to right).
- **Time of day** moved from the tools pill into Settings (a slider that drives the old `#bsFlyTime`, which stays hidden).
- **Make it an app** in Settings: steps for iPhone (Safari: Share, Add to Home Screen), Android (Chrome: menu, Add to Home
  screen or Install app) or desktop, with a button to the 3D model's own page when you are not on it, or an Install button
  where Chrome offers one (`beforeinstallprompt`, caught on the explore pages only). Each `/<suburb>/explore/` page now has its
  own `manifest.webmanifest` ("<Suburb> 3D", 192 and 512 px icons made from `local/<slug>/explore-icon.png`) and home-screen
  title, so the app opens straight into the 3D model.
- **Golden car settings** (Settings > Admin > Cars and planes, for Ash): its own handbrake spin (usually 240 degrees a second,
  a normal car 155), handbrake drag (5 km/h a second), boost length (5 s) and boost refill (5 s, a normal car 10).

## Joystick fix, Norman Rd helicopter, an animal, zoom to land, players' edits for 3 hours (15 November 2026)

- **No text selection in Explore**: on an iPhone a held finger could select a button's words ("Get out"), bring up the Copy /
  Look Up bar and take the touch off the stick, so the car stopped or the walk stalled. Everything in `.bs-fly` is now
  `user-select: none` and `-webkit-touch-callout: none` (typing boxes excepted).
- **Up and Down** are gone while on foot (touch screens).
- **Exit explore** is gone from Settings; Esc (or the browser's back) still leaves, asking first.
- **Flat pads count as ground**: 11 Norman Road's lot sits on a pad (`m.addPad`) about a metre above the model's ground. Its
  outline and top go in `T.pads`, and the town's `ground()` uses the pad there, so the helicopter behind it (and you, and
  anything else) stands on the lawn instead of sinking into it.
- **The helicopter** says nothing once it is in the air (only "Hold Up to lift off" and the like on the ground).
- **An Australian animal** (`townCritter`, Inverloch): a kangaroo, emu or wombat, a different one each visit, pottering about
  beside the Norman Road helicopter (`townPlaneParts(_, "roo" | "emu" | "wombat")`).
- **Flying into the ground lands you on foot**: zooming in (pinch or scroll) once you can get no closer, or holding Down (or C)
  at the lowest flying height for 0.6 s, switches to Walk where you are looking.
- **Players' edits show for 3 hours**: what a construction worker Sends is drawn for everyone for 3 hours (the app reads the
  topic's last 3 hours on opening and every 5 minutes, at most 600 strokes), and the sender's own copy for 3 hours too. The log
  (`chat/plans.json`, 60 days) and Ash's Suggestions are unchanged; Dismiss also hides one from Ash's own view.
- Construction worker wording: "Help us build and shape this model! Your edits are sent to the town planner who can
  permanently update this model." Explorers are told to pick Construction worker to get the pencil.

## Smarter traffic, people off Inverloch's roads (15 November 2026)

- **Traffic** now mostly carries straight on at a corner (never doubling back unless the street ends), slows into bends and
  corners, follows the car ahead at a distance, waits for one crossing in front (the earlier-listed car goes first, so two never
  wait on each other), and starts again elsewhere if stuck for 10 s. Each car sits on its four wheels like the car you drive
  (`lie()`'s method: the middle of four samples, tipped to the slope, eased), so they no longer sink into the road or float on
  a hill crest or dip.
- **Inverloch's people** (`ai-forge` `inverloch3d/life.ts`, model `inverloch-model.js?v=17`): spots in the street are skipped
  (`roads.clear`, 1.5 m clear of the carriageway; shoppers 2.3 to 3.3 m out from a main street's edge and clear of side streets).

## 6 Beaudesert Road's street, from Ash's photos (15 November 2026)

Ash sent ten photos of the street around number 6 (where Moorooka's Explore starts) and asked to "improve the model near
6 Beaudesert rd for moorooka explore: consider impacts on Load time and lag".

- **What changed** (`townNo6` and `MOO_NO6` in `app.html`):
  - number 6's front as it really is: a pale blue-grey pipe fence with chainwire on a low white plinth, white rendered
    piers, the white gate (a little further north than before, and the path from it moved to match) with a black garden
    arch behind it, a pale grey sliding gate across the driveway, the letterbox pier with a black plate and a gold "6",
    and a solar light on the pier by number 10. Banana plants by the front steps and an air conditioner on the front wall.
    The same fence along the corner lot's Beaudesert Road side;
  - number 10: a weathered white besser block wall with its letterbox, a green gate at the south end, a brick ground
    floor with two cream roller doors under the house, and a green water tank down the side;
  - crepe myrtles on the verge in place of the model's two big generic trees there, and timber bollards along Stimpson
    Park across the road.
- **In the model's data** (`moorooka-model.js`, `?v=24`, patched onto the bundle: ai-forge `scripts/moorooka/neighbours.py`
  not changed yet): number 6 white with pale blue trim, number 10 white, the corner lot cream with maroon trim; the made-up
  picket fences at numbers 6 and 10 and the palings along the corner lot's Beaudesert Road side taken off (the app lays
  the real ones).
- **In `edits.json`** (so Admin can see and undo them like any other map edit): the two generic verge trees taken out, the
  concrete crossovers at number 6's sliding gate and number 10's green gate, and number 6's mowing strip along its fence.
  A stroke has round ends, so each crossover is strips side by side with a stroke across each end, which squares it off.
- **Lag:** everything solid is one piece (vertex colours, and one 1024 x 512 picture for number 10's wall, the number
  plates and number 10's ground floor) and the chainwire is another: two draw calls and 2,880 triangles. Taking off the
  picket fences saved 1,196 triangles in the detailed houses, so a frame at the start point went from 606,913 to 608,785
  triangles (+0.3%). Both pieces are moved out of sight when the view is more than 420 m away or 320 m up.
- **Load:** nothing new to download (the pieces are built from about thirty numbers in `MOO_NO6`, 17 ms on a slow test
  machine, with ground heights looked up once a point and the brick and block patterns repeated rather than drawn brick
  by brick). The `?v=24` means each device fetches the model script once more.
- **Guesses:** where the photos could not settle it: the exact position of the white gate (from photo 9's proportions),
  number 10's green gate being its own (its two cars are parked inside the wall), the doors' positions under number 10,
  and that the corner lot's fence matches number 6's all along Beaudesert Road.

## Number 6's driveway past the gate (15 November 2026)

Ash, with a photo from just inside the sliding gate: "Fix the driveway past the gate". The photo shows one wide exposed
aggregate slab from the gate to the house, widening across the front of the house (a car parks there) and carrying on
past the house along the south fence (another car parks there), with a strip of long grass by a plain chainwire fence.

- **Painted, not built:** number 6's lot now has its ground drawn by the plan, as the neighbours' lots do (`ground:!1` in
  the model's data, `?v=25`), so the slab is painted in `edits.json` like the crossover outside the gate and shows with
  the same concrete. No new geometry, no draw calls, nothing more to download, and cars stand on it at ground height.
  The strokes: the plan's old path from where the gate used to be and the strip by the fence painted back to lawn, then
  a 1 m stroke along each edge of the slab (square edges) and 1.8 m strokes filling the middle.
- **Taken out of the model's data:** the two tyre strips that were the driveway, the three shrubs that stood on it, and
  the 1.2 m palings down that side (the app lays a galvanised chainwire fence there instead; the backyard's palings stay).
- The slab and the striped lawn it replaces show where the plan's ground is drawn (every quality setting, except a
  device reporting under 4 GB or asking to save data), the same as every other driveway in Moorooka.

**Polished (15 November 2026, Ash: "Needs minor polish"):** the slab's edges are 0.6 m strokes and the filling 1.8 m strokes
kept 0.9 m inside the outline (with two rows along the slanting north edge), so the edges are straight, the corners tight and
nothing bulges past them; the front of the slab stops at the foot of the stairs. The path from the white gate to the stairs is
painted in the same concrete, and the model's lighter path ribbon over it is gone (`?v=26`). A small model tree that stood on
the drive in front of the stairs is taken out (`edits.json`). The first round's drive strokes were swapped out, not added to.

## Fly to Walk taken out again, fewer cars, clues for dropped fingers (15 November 2026)

- The automatic switch from Fly to Walk (zooming into the ground, or holding Down at the lowest height) is gone, and zoom is
  back to its old limits (Ash, 15 November 2026: "try removing the thing that goes from fly to walk for now").
- Traffic: 5 cars in Moorooka (its model has cars of its own on Beaudesert Road) and 8 elsewhere, never started within 40 m
  of another, to cut lag and overlap.
- For Ash, the "phone took your finger off" message now also gives the slowest frame in the last 3 seconds, how many other
  fingers were down, and what had just happened (for example the sharper model being swapped in).

## Fly to Walk back; place names clipped, not faded; more clues for dropped fingers (15 November 2026)

- Fly to Walk is back (it wasn't the cause of the dropped fingers): zoom comes down to about 6 m from the ground you look at,
  and squeezing on in there, under 6 m up, puts you on foot; holding Down at the lowest height for 1.2 s does too.
- Place names in Moorooka and Inverloch are kept off the top buttons and the sticks by a fixed `clip-path` on their layer,
  instead of a check that changed each name's opacity and pointer-events a few times a second (now ruled out as a cause of
  the iPhone cancelling fingers).
- For Ash, the "phone took your finger off" message also covers Boost and the Handbrake, and lists what on the controls or the
  page's classes changed in the 1.5 s before (a `MutationObserver` on `#bsFly` and `body`).
- **Traffic cut to three cars**, on main roads only (classes 0 to 2, or 3 where a town has few), and a car more than 450 m
  from you is hidden and does no work until you come back (Ash, 15 November 2026: "less cars. They cause lag and often look silly").
- Speed: a profile of Moorooka while walking (headless) put the page's own scripts under 2% of the time; nearly all of it is
  drawing. Each object the app adds (cars, planes, the helicopter, the bus, players, the animal) is its own mesh with a
  `MeshStandardMaterial` that casts a shadow (`modelScene.addParts`), so the next real gain is in the model: cheaper materials
  and no shadows for small added objects, or merging them.
## Inverloch Rotary clock photo pass

[Explore #400](https://github.com/Ashley-Pettit/3dModels/pull/400) brought the Rotary clock refinement from [beta v48](https://github.com/Ashley-Pettit/3dModels/pull/389) to production.

The Explore clock in `app.html` uses separate front gold and rear navy cogs, a smaller ketch
silhouette, and tapered hands with counterweights. The two dated or historical reference views
support these proportions. The dimensions are visual estimates. The scene uses authored meshes and
dial artwork.

Reference photos are [Inverloch by Dalysporter, 17 December 2013, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Inverloch_Victoria.jpg)
and [the Inverloch Rotary clocktower, supplied by Travel Victoria, capture date unknown](https://www.travelvictoria.com.au/images/inverloch/photos/inverloch-004.jpg),
under [Travel Victoria's CC BY 4.0 photo terms](https://www.travelvictoria.com.au/about/photos/).

## Inverloch put back together: the town centre and the drivable cars in one model (15 November 2026)

Ash: "When we introduced multiplayer or cars into Inverloch explore we've lost tonnes of great work in design. I want
you to try to combine the models or start from scratch. Focus on the Inverloch city. I should be able to see the
Inverloch bakery, shops, war memorial, clock, library etc. Make it higher res but always consider open time and lag."

**What had gone wrong.** `inverloch-model.js` versions 15 to 17 were built from the `town3d` copy of Inverloch on
ai-forge `claude/drive-any-car`. That copy split off on 11 November, before `clearPolygons`, `detailLatLon`, `onGround`
parts, the sharp ground patches, shaped cars and the street detail were written. So the model ignored the app's request
to keep the town block clear and drew plain grey buildings and its own road over the bakery, the shops, the memorial,
the plaza and the library. Nothing in `app.html` had been lost.

**The model (`?v=18`, ai-forge `claude/inverloch-combined`, pull request 15 there).** The full Inverloch source, with
what the other copy had added brought onto it: `nearestCar`, `driveCar`, `solidAt`, kerbside cars on every street, cars
leaning with the ground, people off the streets, the no-shadow power poles. New: `addCars`, so the app can stand its
own cars in the block. **Build Inverloch from that branch only.**

**In `app.html`:**

- **Cars in the town centre can be driven.** The weather town's parked cars (`W.invParked`) are no longer carried
  across as one fixed shape: the model stands its own shaped cars in the same bays (`addCars`), so Enter gets you into
  any of them. `townModelPair` replays `addCars` when the sharper model takes over. The block's buildings are solid to
  a car or plane (`T.solid`).
- **Shop windows and doors** (`W.invShopWin`): one 2048 by 768 picture of eight displays (bakery, café, clothes, real
  estate, chemist, surf and gifts, supermarket, newsagent), the library's bookshelves, the Hub's foyer and four doors,
  cut up across all 82 shopfronts and the Hub's glass in one mesh: one picture, one draw. Lit from inside at night.
- **Roofs from the air:** each building its own sheeting colour, with air conditioners and skylights on shop roofs.
- **Jump to** gains "The library" and "The shops".
- **The clock is off the road** (Ash, the same day: "the clock shouldn't actually be on the road. There should be two
  lanes one each way. The clock is right next to them. The war memorial is behind the clock further away from the
  road"). The kerb build-out the clock stands on ran 2.2 m past the edge of the traffic lane; it now stops at the lane
  edge (`TOWN_PLAZA` pieces, `townOnPlaza`), and the clock is 0.8 m further back (`TOWN_CLOCK`), 7.8 m from the middle
  of the street. Both lanes are clear. The memorial is 10 m behind the clock.
- **Not done:** Ash also said the library is too close to the road. It is on its surveyed outline (its front 29 m from
  the middle of A'Beckett Street, 19 m back from the kerb) and has been left there, pending his say-so.

**Cost.** The block carried across is 69,000 corners, down from 141,000 (its 97 cars are now instances of three
shapes). One more texture (2048 by 768) and one more draw. Opening measured the same as before on the test machine.

**Checked** in the built Coastline News with a software renderer, desktop and phone sizes: the clock, bakery, memorial,
library and shops by day, the bakery at night, the town from the air, getting into a parked car by the clock and
driving it, other players starting, and the ordinary weather view. Not checked on a real phone.
- **Explore parts on or off** (Settings > Admin, for Ash): moving traffic, the Norman Road animal, the rides, map editing,
  other players (and the Settings gear), the construction worker view, 6 Beaudesert Road's street detail, street names and
  place names can each be switched off on the device (`localStorage["an3d-off"]`), read when a town opens. They are there to
  find which part makes an iPhone let go of the stick.
- **The app's own traffic is off** (`townTraffic`, `N = 0`; Ash, 15 November 2026: "Reduce traffic through the apps, they are
  a bit dumb and run into each other"). Nothing is loaded for it. The models' own moving cars carry on. Set `N` above 0 to
  bring the app's cars back.

## Calmer streets, and Explore's own settings (15 November 2026)

- **No moving traffic in Moorooka or Inverloch** (Ash: "the cars are a bit dumb ... less is okay"). Both bundles are
  patched: `moorooka-model.js?v=27` no longer calls `addTraffic` (parked cars and trains stay), and
  `inverloch-model.js?v=19` makes its traffic with 0 cars (`s=0` in `addTraffic`; parked cars stay). When either model
  is rebuilt from ai-forge, make the same change in the source (Moorooka `addTraffic` in the life class; Inverloch's
  car count `Math.min(82, ...)`), or the moving cars come back.
- **No people on Moorooka's roads** (Ash: "no people on roads"): the walkers' skip test also checks the road index
  (`p.index.near`), and a walker is not drawn while within half a road's width (plus 0.6 m) of any street's centre
  line, so they no longer show on a carriageway where a footpath meets a junction. Inverloch's people already keep
  6.4 m clear of roads; Logan's people are fixed in its data.
- **App:** the "phone took your finger off" message and its page watcher are gone (the stick is fixed). Share sits
  just right of the Settings gear. Ash's cars-and-planes numbers and Explore parts moved from the news app's
  Settings into Explore's Settings panel. The Emote button shows whenever you walk, on your own too. The weather
  screen's Explore button opens the same town model as the town's own Explore.

## Ash and Arlo at 6 Beaudesert Road, and the pencil by the Look stick (15 November 2026)

- **Ash** (`townHome6`, `townPlaneParts(_, "ash")`, short curly brown hair; first made as "Pandy"): stands on the front path at 6 Beaudesert Road looking out to
  the street; turns to you within 14 m on foot and waves the first time (again after you've gone 25 m away).
- **Arlo**, an apricot cavoodle (`"arlo"`): potters a few steps at a time on the front lawn, turns to look at you within
  7 m and wags his tail within 9 m.
- Cheap: two small pieces (about 900 triangles), drawn only within 260 m and below 220 m up, and only moved while
  something is happening. Explore parts has a switch for them (`home6`).
- **The map-editing pencil** sits where the handbrake shows in a car (over the Look stick on a phone, bottom right on
  a desktop), and is away while you drive or fly something.

## A few moving cars to get into, and emotes on your own (15 November 2026)

- **Four of the app's own moving cars** again (`townTraffic`, `N = 4`), on the main roads near where you start; the models'
  own moving traffic stays off. Walk out in front of one and it stops (it now looks 15 m ahead for you). **Get in the car**
  takes it over (`P.take`): it leaves the traffic and is yours, like the golden car, for the rest of the visit.
- **Emotes** work with no one else about (they used to do nothing), and as a construction worker you see yourself do
  them (`townEmotePose`, shared with other players' figures). The Emote button shows for Ash, or while another player is
  in town, and sits just under Get in the car, between the sticks.

## Seeing the person next to you, and Pandy at 24 Beaudesert Road (15 November 2026)

- **You always join the town's players** (Ash: "I can't see the person I'm next to"). With "Other players can see me"
  off you used to stay out of the room altogether, so you saw no one either. Now you're always in it: hidden, you send
  no name and no place, but you still see everyone else. Flying low (under 60 m) you show to others where your eyes
  are, instead of not at all. Settings says how many other players are in town now.
- **Pandy** (`townPlaneParts(_, "pandy")`): long brown hair, a plum top, on the front lawn of 24 Beaudesert Road (lot
  2 RP59613, 1,037 m2; the cadastre has no street numbers, so the lot was matched by its 1,033 m2 listing), 3.5 m in from
  the front boundary, facing the street. Like Ash at number 6, she turns to you and waves when you walk up.

## Players meet through message brokers, Jump to a player, names over heads (15 November 2026)

- **Multiplayer no longer goes phone to phone** (Ash: "Still can't see another player"). The WebRTC links Trystero made
  need both phones to reach each other directly, which mobile data and many routers don't allow, and there was no relay.
  Now `townRelay` sends names, places and emotes through public MQTT brokers over secure websockets
  (`TOWN_BROKERS`: shiftr.io's public broker on port 443, and EMQX's on 8084), to both at once, so it gets through
  any network. Same room shape as before (`makeAction`, `onPeerJoin`, `onPeerLeave`, `leave`); a hello every 4 s, and
  anyone not heard from in 15 s is gone. `vendor/trystero-nostr.js` is no longer loaded.
- **Name labels were upside down**: the label's up vector had `uy` with the wrong sign, so a name sat mirrored about
  the middle of the screen (far above someone below your eyes). Fixed.
- **Jump to lists other players first** (nearest first, with how far): one stands you 6 m in front of them, facing them.
## The possum at 16 Kingwell Street (15 November 2026)

Ash: "add a possum. The possum should be 3x faster than walking. It should travel up objects like light poles and
buildings ... Only add this to moorooka. Add the possum at 16 kingwell street moorooka. You enter into the possum just like
a car but then move around as a possum not a car. Add a teleport to kingwell street near this", "A brushtail possum", and
"Lazy load things as appropriate like the possum".

- **Where:** a common brushtail possum on number 16's front lawn (address point and house outline from the Queensland
  address and building data), looking at the street light out the front. `MOO_POSSUM` in `app.html`, Moorooka only
  (`TOWN_RIDES.moo.possum`). **Jump to > Things to drive and fly > Kingwell Street: the possum** stands you beside it.
- **Being the possum:** walk up to it and **Be the possum** (or Enter), just like getting in a car. W and S run forward
  and back at three times walking pace (33 m/s; Shift or Boost half as fast again), A and D turn, Space (Jump on a phone)
  hops. Run at a street light or a building and it climbs it while you keep pushing; S (Let go) drops off. At the top of a
  light it sits until W is pressed again; on a roof it runs about and drops off the edge. **Hop out** leaves it where it
  is; flying off, jumping somewhere else or wandering 150 m away sends it home.
- **Street lights:** the model has none, so the app stands five (grey steel, 8.2 m, arm over the road) on the even side of
  Kingwell Street, about 40 m apart and clear of buildings. Cars and planes bump into them too.
- **Roofs:** each building's eave and ridge come from `moorooka/town.json` (already cached by the model); a roof rises from
  its eave at the edges towards the ridge. Until they are in, a building counts as 4.5 m tall.
- **Lazy:** nothing is built until you come within 400 m of Kingwell Street; the roofs are fetched once you are within
  80 m of the possum, or when you become it (with a note while they load).
- **Other players** see you as the possum, tail swaying, with your name over it.
- Tested in headless Chrome at 1280 by 800 and at phone size (390 by 844, touch): the climb up the light, sitting on top,
  running across number 16's roof and off its edge, jumping, hopping out, and the Jump to entry.

## The possum handles like a possum, ride with other players, and chat (15 November 2026)

- **Possum** (Ash: "handles a bit too much like a car ... Jump x 2.5 height, speed down by 20%, remove boost and put jump
  there. Get rid of the other jump and let go btn"): the stick now points the way to run, seen from where you're looking;
  it whips round (11 rad/s on the ground) and scampers off, quick to start and stop. Top speed 26.4 m/s (was 33),
  jump 11.1 m/s up (2.5 times the height), Jump on the button where Boost was (over the right stick); no Up/Down
  buttons. Pull back on a wall to let go, or Jump to spring off it.
- **Ride with another player**: walk up to someone driving a car, bus, plane, helicopter or the possum (and not up in
  the air) and the button says "Ride with <name>". You see from behind their vehicle as it goes; they get "<name> has
  got in with you". While riding you don't show as a figure. Get out puts you beside them.
- **Chat**: a Chat button under Emote (T on a keyboard). It opens a box at the top and the keyboard; Send (or Enter)
  shows a white speech bubble over you for 30 s, for everyone in town, and a short line at the bottom for them too.
  Up to 120 characters. Hidden players can't chat.
- The worker view now sets its camera before names and bubbles are placed (they were placed from your eyes, not the
  camera behind you).

## The golden helicopter, the possum holding on to a plane, version in Settings (15 November 2026)

- **Golden helicopter** in every town (Ash: "Random location no go to btn unless name is ash. 40% faster"): gold all
  over, 40% faster forward and up. Each visit it stands somewhere different: one of the town's open spots or the grass
  18 m either side of a plane or helicopter, dry, clear of buildings and away from the golden plane. Only Ash gets it in
  Jump to (at the top). Other players see it gold (`goldheli`), and can ride with whoever flies it.
- **The possum holds on to planes** (Ash: "when a player is in the possum and a player is in the plane that the possum
  can hold onto the plane"): run into or land on another player's plane or helicopter and it grabs on, riding on top
  where it touched; Jump lets go. The pilot is told. Others see the possum up there.
- **Ride with**: tapping the button now takes you to the player it named, even if they've rolled a little out of reach.
- **Version** at the bottom of Explore's Settings, for everyone.
- **Your own chat bubble**: in your own eyes' view (no figure of you to put it over) what you said shows at the top of
  the screen, under the buttons, as "You said", for the same 30 s. In the worker view it stays over your head.

## The same Explore from the news app, and Ash's settings in the map (15 November 2026)

- **The news app's Explore opens the same town model** for everyone, admins too (Ash: "Why when I launch via awesome
  news is the ui different. It should load the exact same thing"). With the passphrase unlocked it used to open the old
  fly-about; it now opens the town model from Moorooka, Moorooka's bowls club and drive, Inverloch's town, beach and drive,
  and Logan. (The old fly-about, with "Use this view for the weather", is still what Brisbane and the motorway open.)
- **Ash's settings live in the map** (Ash: "if my name is ash I should see all the settings in the map rather than in
  awesome news settings"): the news app's Settings no longer has "Exploring with others" (player name and showing you to
  others are in the map's Settings), and the map's Settings has, for Ash, the GitHub key that saves map edits and kept
  views for everyone, under Cars and planes and Explore parts.
- **Brisbane and the motorway drive** open a town model too: Brisbane opens Moorooka, the motorway drive Logan. For
  admins, the map's Settings has "Set the weather's view": it closes the model and opens the weather's own fly-around,
  where "Use this view for the weather" keeps the view.
- **Other towns** in the map's Settings: plain links to the other two towns' Explore pages.
- **Player name counts as Ash** (Ash: "I think player name is not giving me admin"): `isAsh()` is true when either the
  news app's name or Explore's player name (shared by every town's app) is Ash or Ashley, and `isAdmin()` follows it.
  Each town's app keeps its own news-app name, so on a town's Explore page the player name was the only one set.
- **Other towns open in place** (Ash: "When I click to another town I get the url at the top ... I want it to feel like
  an app"): from the home screen app, a link to another town's page opened in a browser view with the address bar. The
  links now close this town's model and open the other one on the same page (the link is still there underneath, for
  a long press or a new tab). Share then gives the town you're in.
- **Car turning** and **Golden car turning** (Ash: "I want to be able to adjust in settings how fast a car turns or
  golden car turns"): in the map's Settings > Cars and planes, as a % of the usual (20 to 400). They multiply how fast
  the car swings round for its speed and steering, apply straight away (`C.reread`), and leave the handbrake spin to its
  own settings.

## Chat in the Emote menu, and a name for new players (15 November 2026)

- **Chat is in the Emote menu** (Ash: "Move chat into emotes"): first, as "💬 Chat", across the top of it. The
  separate Chat button is gone. T on a keyboard still opens it.
- **New players are asked their name** (Ash: "When a player joins ask them their name or they can press skip to
  automatically get one"): the first time someone opens Explore on a device, a box at the top asks "What should other
  players call you?" with Join and Skip. Skip keeps the automatic "Player 123" name. It doesn't ask again
  (`an-player-asked`), and the name can be changed in Settings.

## Always daytime, and Explore parts back on (15 November 2026)

- **Midday unless an admin changes it** (Ash: "Let's make the time stay daytime unless as an admin I change it"):
  Explore opens at 12:00 pm whatever the real time, and Settings' Time of day slider shows only for admins.
- **Explore parts all back on, once, on every device** (`an3d-off-reset-1`). Ash: "Why does it load a different
  moorooka via awesome news". The home screen app keeps its own storage, and there the parts switched off while hunting
  the stick bug were still off: no Settings gear (so the old Exit explore and time buttons showed), no place names, no
  6 Beaudesert Road detail. They can still be switched off again in Settings.

## The stick letting go, again (15 November 2026)

Ash: "09 still has the joystick bug. We need to revert back to 130". 12b2509 (#132) is the same app as 1fd5ce6 (#130):
#132 undid #131 exactly. So the cause is earlier than #130. The best lead: the bug first went away the morning the app's
moving cars were taken out (#114), and the four moving cars came back in #119. They're off again (`townTraffic` N = 0).
Also `isAsh()`, asked every frame, reads the player name from storage at most once a second.

## Back to #130 (15 November 2026)

Ash: "That didn't fix it. Go back to 130". `app.html` is put back to 1fd5ce6 (#130, car turning). This takes out, for
now: Chat in the Emote menu and the name prompt (#133), midday and the Explore parts reset (#134), and the moving cars
off again (#135). The models are as at #130 too.
- **The player name decides** (Ash: "my name is Ben so I shouldn't have admin but I can see go to golden helicopter"):
  when Explore's player name is set, `isAsh()` goes by it alone; the news app's name only counts when no player name
  is set. Read at most once a second. This also lets Ash test the stick as not-Ash by setting his player name to
  anything else.

## The stick letting go: the page could scroll (15 November 2026)

Every version tried (back to #118 with this morning's models) had it, so it isn't a feature added today. What every
version shares: while exploring, the news page behind and the weather sheet the 3D view sits in could still scroll. On an
iPhone (more so in an in-app browser such as Edge, whose toolbars move with scrolling), a drag that the phone takes as
the start of a scroll cancels the touch, and the stick or the look goes back to the middle. While exploring, the page,
the weather sheet and the 3D view are now locked: no scrolling, bouncing or zooming (`body.bsfly` rules).
## Faster on phones (15 November 2026)

Ash: "Game is getting a bit laggy, optimise". The models are drawn every frame (they animate), so what costs is the
phone's graphics work per frame. Measured at the Moorooka start on foot: about 520,000 triangles in 81 draw calls,
of which the app's own extras (people, Arlo, cars, the golden helicopter) are about 3,400 triangles in 4 calls, so they
were not it.

- **No frosted-glass blur over a town model.** Every button, stick, panel and label with `backdrop-filter` made the
  phone blur the moving 3D picture under it again each frame, and there are a dozen of them now (Share, Chat, Emote,
  the pencil were added today). Over a town model they're plain, a little more opaque (`--bs-scrim` .66).
- **A little less resolution on phones**: the models' medium setting (what an iPhone gets) now draws at 1.3 times the
  page size, down from 1.5: about a quarter fewer pixels to fill. Bundles patched (`moorooka-model.js?v=28`,
  `inverloch-model.js?v=20`, `logan-model.js?v=37`); when a model is rebuilt from ai-forge, set `medium.pixelRatio` to
  1.3 in its quality table too.
- **Street names** read the models' own labels from the page (a layout) only while the view is moving.

## Golden ones under "Just for you", suggestions reviewed from Settings, a light amount of traffic (15 November 2026)

- **Just for you** (Ash: "Merge the golden teleports in the just for you"): Jump to opens with a "Just for you" heading (Ash or
  Ashley only) holding the golden car, the golden plane and the golden helicopter, each where it is now (`goldOnes`, `toGold`).
  They are no longer in "Things to drive and fly". The other players in town come under it.
- **No more prompt about suggestions** (Ash: "Stop doing that annoying prompt to merge in changes, show a btn in settings instead
  ... shows me the suggested change then approve or deny"): the toast on opening is gone. Settings has "Suggested map changes
  (just you)" with Review N suggestions. It takes you to each one and draws it (only for Ash), with Approve, Deny and Next in a
  card under the top buttons (`.bs-review`). Approve adds it to your map edits and saves for everyone when the GitHub key is
  saved (the same Save as the pencil's, so any of your own edits waiting go too); Deny drops it. The pencil's Suggestions list
  is still there.
- **Traffic** (Ash: "Add back some of the traffic so there is a light amount of cars around. Careful not to cause lag"): the app's
  moving cars go from 4 to 7 (`townTraffic`, `N`). Each is a few draw calls and one more than 450 m away is not drawn.

## Bohain Street meets Beaudesert Road (15 November 2026)

Ash: "Fix this road" (a blob of asphalt where Bohain Street splits in two to meet Beaudesert Road). In the photograph the two
arms of Bohain Street go round one landscaped island, kerbed on all sides, with a footpath across it and a small kerbed refuge
at the point where the north arm meets Beaudesert Road. The model had most of that island as road. `edits.json` now paints it
back (16 strokes): the island as lawn, inset half a stroke from each kerb and filled along its length, the refuge and the path
as concrete. It shows where the sharper ground is drawn (close up), like every map edit.

## Jump to players, the golden car's 180, boost either way, a red car at number 6, sounds (15 November 2026)

- **Jump to players** (Ash: "Someone joined but I can't jump to them"): a player flying more than 60 m up was sent as nowhere, and
  new players start up in the air. Now they send where they are (still drawn as no one, so copies from before are unchanged) and
  are listed as "Flying, 300 m away"; picking one flies you in beside them. "Just for you" is at the bottom of the list.
- **Boost** (Ash: "If I hit boost without the control forward still go at max forward accel, unless the control stick is in 180
  of a downwards position, in that can boost backwards"): in a car, Boost pushes forward at full whatever the stick does, and
  backwards (as hard, as fast) when the stick is in its lower half.
- **Number 6 and the golden car** (Ash: "Move the golden car to a random position that makes sense every time. Put a red car in
  the 6 Beaudesert driveway instead"): a red car is backed into number 6's drive. The golden car takes the place of one of the
  model's parked cars near one of the town's places, a different one each visit, and that parked car goes (`T.hideCars`, laid
  in with the map edits' take-outs).
- **The golden car's 180** (Ash: "a 180 spin ... that quickly jumps up and heads perfectly in the opposite direction keeping
  momentum"): the gold 180 button over Boost (X on a keyboard). It hops a metre up, swings round half a turn in 0.42 s while
  carrying on the way it was going, and lands facing back, going back at the same speed. Stick left at the press spins it the
  other way.
- **Sounds** (Ash: "Add sounds to the heli and plane and animal"): the helicopter has its own (a low turbine, a whine, the rotor's
  whop-whop four to seven times a second), the plane's propeller buzz and rush of air are louder; the possum patters as it runs,
  scratches as it climbs and squeaks as it jumps; Inverloch's animal thumps (kangaroo), grunts (wombat) or drums (emu) when
  you're within 30 m.

## Midday everywhere, number 6's pool and shed, the possum's Boost and settings (15 November 2026)

- **Midday in every town** (Ash: "Logan was nighttime, keep it daytime unless as an admin it's changed"): the town models now
  get midday every frame (`townModelFrame`) until an admin moves Time of day in Settings (`BS.exTimeSet`), and each town opens
  at midday again. Opening another town from Settings used to keep the weather view's clock, which could be night.
- **Number 6's pool and shed** (Ash, with two photos: "The pool is directly behind the house. The clothes line is no longer
  there. The shed is left of the pool. From the house it's on the back left"): in `townNo6`, square to the house from the
  middle of its back wall. Travertine paving out to a black 1.2 m pool fence; the pool across the yard (8.2 by 3.6 m) with a
  raised spa on the house side at its south end and a furled umbrella; a garden bed of cordylines and gingers behind; the
  shed outside the fence on the north side: blue weatherboards, white trim and corner boards, a grey Colorbond gable, white
  double doors with little panes facing the house, a window on its pool side, on stumps with three blue steps. The model's
  clothes hoist and the garden box by the back wall are taken out of its data (`moorooka-model.js`, `?v=29`).
- **The possum** (Ash: "Add into settings the ability to customise the possum. Slow it down by 25% but add back boost"): top
  speed 71 km/h (was 95), and a Boost button where the handbrake goes (Shift on a keyboard, 60% faster while held). Settings >
  Cars, planes and the possum has its top speed, boost, jump and climbing speed (`RIDE_DEF.possum*`); they apply at once.
- **Settings kept** (Ash: "if I reload the app they are lost"): the numbers are saved as you type, not only when you leave the
  box (closing Settings straight after a change could lose it).
- **Buttons apart** (Ash: "In the golden car move the buttons a tiny bit apart"): Handbrake, Boost and 180 are 62 px apart.
- **Hotkeys** (Ash: "Give them hotkeys for pc"): X for the 180 and Shift for the possum's Boost, shown on the buttons' keycaps
  and in the controls list (the golden car's list has X).

## Inverloch's bus and golden helicopter (15 November 2026)

Ash: "Look through Inverloch for buses or cars placed inappropriately". From above, the parked cars, the traffic, the plane,
the red and golden cars and the helicopter behind 11 Norman Road were all where they should be. Two were not:

- **The bus** straddled A'Beckett Street's centre line out the front of The Hub. It now sits in the lane on The Hub's side
  (2.6 m north).
- **The golden helicopter** could land in A'Beckett Street: one of its random spots was the grass 18 m beside the plane, which
  there is the road. Towns with open spots of their own (Inverloch and Logan) now pick only from those; Moorooka, which has
  none, still uses the grass beside its planes, all in parks.

## Esc, riders, the possum on cars, smoother planes, kept time, tailored app steps, more to build, mouse look (15 November 2026)

- **Esc** (Ash: "ESC should not close the app, it should close the menu the person is in"): Esc closes Settings, Share, Jump to,
  the flood list, emotes, chat, the time, a suggestion being looked at, then the map-editing bar (`exEscMore`). It never leaves
  Explore.
- **Riders** (Ash: "Make it more obvious when a player is riding with you"): while you drive or fly, a yellow card under the top
  buttons says who is riding with you (or holding on), and their names float over what you're in (`.bs-ridecard`, `.bs-ridetag`).
- **The possum on a plane** (Ash: "When flying the plane and the possum is on I can't see the possum"): holding on, the possum now
  says where on top it is ([2, along, side, turn] in the ride message), and the pilot draws it right there, instead of where its
  last word put it (well behind a plane at speed).
- **The possum on cars** (Ash: "let the possum also get ontop of cars"): it holds on to cars and buses other players drive, and runs
  up on to the nearest parked car, the app's own cars and the traffic like a low wall (`findCarTops`).
- **Smoother planes** (Ash: "When flying the plane it's a bit laggy/choppy"): the follow view now rides with the vehicle and only
  eases its place round it (it used to ease after it, so at speed it lagged more on a slow frame and the plane jumped about). Up in
  a plane, Moorooka's model also stops fetching its sharpest ground and building backyards (`window.anFast`, `?v=30`).
- **Kept for next time** (Ash: "When I adjust a setting, make that the default for next time the app opens"): an admin's Time of
  day is kept (`an3d-time`); the other settings already were, and now save as you type.
- **Make it an app, by browser** (Ash: "try to read browser so make it an app is tailored"): steps for Safari, Chrome, Edge and
  Firefox on iPhone; Chrome, Samsung Internet, Firefox, Edge and Opera on Android; Chrome, Edge, Safari, Opera and Firefox on a
  computer; and from inside another app. A line says which it's for.
- **More to build** (Ash: "Add more features to be able to add or remove etc to the construction worker"): Tree, Car and Light
  tools put in a tree, a parked car (facing the way you look) or a street light with a tap. Delete takes them out (yours go; a
  published one is taken back out). They live in `edits.json` beside what is taken out (`gone.addTree`, `addCar`, `addLight`,
  `noAdd`), so Save, Send, Suggestions and `tools/town/add_edits.py` carry them like any edit; older copies of the app ignore them.
- **PC** (Ash: "On pc make the game feel more natural when walking. Mouse able to control viewpoint. Needs a btn to get into
  settings or share or flood"): walking or driving, a click on the view hands the mouse to the view (Esc gives it back); M, P and L
  open Settings, Share and Flood (keycaps on the buttons); on foot the keys walk, Shift runs, with easing and a slight head bob.

## Moorooka's houses: a front door, steps and framed windows (15 November 2026)

Ash: "Can you make the moorooka houses a bit more accurate without causing lag or lots of load time?" Every house the general
builder draws (all but number 6 and its neighbours) was a box with dark window squares the same on every side, and no way in.
Now, in full detail only (near the view; the plain far version is unchanged):

- **The front:** the wall that faces the nearest street (`anRoadNear`, street centre lines sampled every 8 m into 40 m cells,
  once per load) gets a front door with a white frame in the middle window's place, and a little skillion roof over it in the
  roof's colour. A high-set house (on stumps) gets a landing, a flight of timber stairs down towards the street with white
  handrails, and two white posts under its roof; a low-set one, a concrete step.
- **Windows:** every house window has a white frame.
- **Cost** (`frameCost()`, software renderer, same views): on foot in Bohain Street 619,083 to 646,097 triangles (Light) and
  1,849,106 to 1,960,030 (sharpest); 22 m up 450,202 to 472,078 and 1,626,294 to 1,720,992. About 5% more triangles and no
  more draw calls (they go into the same meshes); nothing more to download.
- **In the bundle** (`moorooka-model.js`, `?v=31`), patched: `anRoadNear` and `anFront` before the house builder (`$_`), the front
  edge (`FE`) worked out before its windows, the frame before each house window's glass, `anFront` after the front edge's
  windows, and `$_.road = anRoadNear(town)` at the start of `buildBuildings`. When the model is rebuilt from ai-forge, make the
  same change in `src/features/moorooka3d/buildings.ts` (`addBuilding`, `buildBuildings`).

## Fix: driving and flying had stopped (15 November 2026)

Ash: "Cars aren't working in Logan." Since #150 nothing could be driven or flown in any town: the note added for `window.anFast`
went on the same line as the start of `tick`, so it hid `const dt = ..., k = ..., has = ...` and every frame in a vehicle threw.
The note is on its own line now. Also, the golden car's random parking spot is now picked only from places within 1.2 km of
its usual one (Logan's places run out to Jimboomba).

## On foot by default, trees to climb, solid roofs, the traffic moving again, camera mode (15 November 2026)

- **The traffic, Inverloch's animal and the people at number 6 were standing still** since #128: a note on the same line as
  `T.traffic?.frame(); T.critter?.frame(); T.no6?.frame(); T.home6?.frame();` in `townModelFrame` hid them. They are on their own
  line again. Moorooka has 5 moving cars (Ash: "Add a couple of auto driving cars in moorooka. Not too many"), the others 7.
- **On foot by default** (Ash: "Make walk the default"): every town opens walking at its first place. Moorooka has no Walk or
  Fly switch (Ash: "Move walk/settings in moorooka but not in Logan or Inverloch"), so no Up and Down either ("In moorooka but
  not others remove up down when walking"); F still flies on a keyboard.
- **Trees to climb** (Ash: "Make the trees climbable"): the possum runs up any tree of 3 m or more like a street light and sits
  about four fifths of the way up (`loadTrees`, `treeAt`: town.json's trees in 20 m squares, loaded with the roofs). Nothing new
  is drawn or downloaded.
- **Solid roofs** (Ash: "Can you make the roofs all collision so things hit them?"): in Moorooka, planes and helicopters meet each
  roof at its real height (the possum's `roofAt`, loaded when you get in) instead of 12 m up everywhere; a helicopter can sit on one,
  a plane bounces off. Elsewhere a building still counts as 12 m.
- **Logan's golden car** (Ash: "park the golden car properly, it's inside the road") is in a bay in the car park behind the council.
- **On a computer** (Ash: "make the mouse control the joystick", "hide ... get in the car, instead show as controls", "Make that
  [?] instead go to camera mode (hides all buttons) other than press ? To return", "hide boost and get out as they are already in
  settings"): a click on the view gives the mouse to the view, flying too; Get in and Get out and Boost are not shown (Enter and
  Shift); on foot the controls list says what each key does; ? hides every button (camera mode) and ? or Esc brings them back.
  Emote stays.

## Democracy like the photo, Mayor Jon Raven, and Moorooka's houses without the stairs (15 November 2026)

- **Democracy** (Ash, with a photo: "Make the democracy ball a bit more like this photo"): the ballot boxes are now mostly blue
  and cream with some red and orange (no purple, green or yellow), in neat rows with dark gaps between, on a low base so the ball
  sits on the grass (`logan-model.js`, `?v=38`, patched: the colours and jitter in the ball's builder `M_`).
- **Mayor Jon Raven** (Ash: "Add a person mayor raven near the democracy ball"): a figure in a dark suit beside the ball, on the
  side you look at it from, who turns to you as you walk up, with "Mayor Jon Raven" over him within 80 m (`townMayor`).
- **Moorooka's houses** (Ash: "The stairs in moorooka are often quite silly instead try to make the houses more like the real
  houses without using too much memory or creating lag"): no stairs, landings or posts. A high-set house has no front door up on
  its floor; a low-set one keeps its door, step and small roof. Every house window has a hood in the roof's colour over its white
  frame, as Moorooka's older houses do (`moorooka-model.js`, `?v=32`). On foot in Bohain Street, sharpest setting: 1,849,106
  triangles before any of this, 1,960,030 with the stairs, 1,905,010 now (+3%).

## Ash says hello, the possum (golden possum, walking, planting, roofs, tree tops), more to plant, people off the roads (15 November 2026)

- **Ash at number 6** (Ash: "Make ash at 6 Beaudesert talk to the person"): the first time you walk up, a speech bubble over him
  for 16 seconds: "Welcome to 3D Moorooka! If you like, send me a photo of your house on Facebook and I'll update it to look like
  the real thing. Other players can join you as you explore Moorooka."
- **The possum walks** (Ash: "Decrease how fast the possum turns by 30, make him walk more like a human and less like a car"): it
  turns 30% slower, goes the way the stick points straight away while it turns to face it (`P.mh`), and the view no longer
  swings round behind it (only while it climbs).
- **The golden possum** (Ash: "If the possum goes in the pool at 6 Beaudesert Rd turn him into the golden possum who is faster
  and can jump higher and also can do a 360 in the air"): into number 6's pool and out it comes gold, 40% faster, jumping half as
  high again, and Jump again in the air does a somersault with a little more lift (`POOL6`, `goldPossum`, the possum's parts in
  gold).
- **Roofs** (Ash: "The possum falls through lots of roofs"): the possum's roofs now rise at the pitch the model draws them (each
  roof's rise over the distance from its middle to its nearest wall), not a fixed shallow slope, so it is on the roof, not in it.
- **Tree tops** (Ash: "Make the possum able to be ontop of the green part of the tree"): up the trunk it comes out on top of the
  crown, and can run about up there across the crown's width before it drops off.
- **Planting** (Ash: "more options of things to plant like flowers or small trees or bushes", and for the possum "also plant
  trees or bushes or flowers"): Small tree, Bush and Flowers tools beside Tree for construction workers (`addSmallTree`, `addBush`,
  `addFlower` in `edits.json`; `tools/town/add_edits.py` takes them), and the possum has a Plant button (G) with Flowers, A bush,
  A small tree and A tree, planted just in front of it into your map edits.
- **People off the roads** (Ash: "The people in moorooka are a bit too dumb, always on roads"): Moorooka's walkers keep 1.1 m
  further out from the kerb (3.2 m where a street has no footpath of record), and are not drawn within half a road's width plus
  1.7 m of a street's centre line (was 0.6 m) (`moorooka-model.js`, `?v=33`, patched in the walkers' class `G1` and the skip test).

## The possum handles like a car again (15 November 2026)

Ash: "Make the possum turn another 20% slower", then "Actually make the possum car like again". It runs the way it faces
again (slower while it is still turning round) and the view swings round behind it, as before #156. The turning stays slower:
6.2 rad/s on the ground and 2.2 in the air (it was 11 and 4 before #156, 7.7 and 2.8 in #156).

## Nicer plants, a tight-turning possum that rides on moving cars (15 November 2026)

- **Plants** (Ash: "The flowers planted look real bad"): flowers are now an oval of mulch with leafy clumps and about twenty
  round flower heads on stems; a bush is three lumpy rounded clumps (the old one had its box corners in the wrong order); trees
  and small trees have a trunk under three lumpy rounded crowns, like the model's own trees.
- **The possum's turning circle** (Ash: "With a very tight turning circle though"): it all but stops to swing round (speed times
  the square of how far it still has to turn), then runs, so it turns on the spot.
- **Riding on a moving car** (Ash: "When the possum grips to a car plane or other vehicle, keep him attached if it moves"): standing
  on top of the traffic or one of the app's own cars, it moves and turns with the car (`P.ride`). Other players' cars, planes and
  helicopters it already held on to.

## The possum's Grip (16 November 2026)

Ash: "I put the possum on a car, it stayed gripped but I wanted it to follow the car. Add a thing to the possum called grip so
even if not on the side of the car I can hold onto a car no one is driving yet."

- **Grip** (the button over Jump on a phone, Q on a computer) takes hold of the nearest car within about 2.5 m of the possum:
  a parked car, the app's own cars, a car of the traffic, or another player's car, plane or helicopter. The possum goes on the
  roof where it grabbed and is carried wherever the car goes. Grip again, or Jump, lets go.
- Gripping a car nobody is driving: when another player gets in and drives it off, their car is where the parked one was, so
  the possum grabs on to theirs and goes with them.
- Why it didn't follow before: a car of the traffic stopped for the possum on its own roof (it took the possum for someone in
  the road ahead of it), then after 10 s stopped it was put back somewhere else. The traffic now ignores the possum it carries
  (`T.car.carrying()`).

## Logan: houses no longer sunk in the middle distance (16 November 2026)

Ash: "A lot of the houses in Logan are in the ground ... Lots of houses all over Logan."

The Logan model raises houses out of the ground as they come within draw range (`lgGrow` in the building shader), so they
don't pop in. It started 70% of the way out, so on Low (1 km) every house from 700 m to 1 km stood half or less of its height:
roofs lying on the grass, everywhere you looked from a plane or a hill. The rise now happens only in the last 6% of the range
(`smoothstep(uRange * 0.94, uRange, ...)`), so almost every house you can see stands full height. Bundle patch only;
`logan-model.js?v=39`. The ai-forge source (`src/features/logan3d/buildings.ts`) should get the same change.

## Moorooka's shops, servos, locals, perks, letters and the possum mission (16 November 2026)

Ash, in a run of messages with Street View photos: more well-known businesses and the petrol stations; the mechanic (one of five car
upgrades), the vet (one of five possum upgrades, a corny joke sign out front), Pandy's lime cordial (sprint), Cr Steve Griffiths
(the 360 kick), the pharmacy (a love potion), Big Boss Pizzas (the best chips ever: a pizza chef outfit), the Willow Hotel (it was
the Red Lion; you can get drunk), the gym (+10% speed on foot), letters at the post office, and the possum mission.

- **Fronts** (`MOO_FRONTS`): Advance Mechanical Centre (93), Greencross Vets (111, with its joke board), TerryWhite Chemmart,
  the Moorooka Ward Office (122), Woolworths, Big Boss Pizzas (180), Snap Fitness, and the Willow Hotel (215: red pergola, green
  banners). Walls found from the survey as `tools/ground/shops.py` does; addresses from the web and the photos.
- **Servos**: kind `pylon`, a pole sign by the kerb facing each way: Ampol (345 Beaudesert Rd, Hamilton Rd corner), BP (1129 Ipswich
  Rd, beside Starbucks), 7-Eleven (841 Ipswich Rd, Black St corner). Placed by corner or by street number, so near enough, not exact.
- **Locals** (`MOO_LOCALS`, `townLocals`): each has a name tag; walk up (drive up to the mechanic, run up as the possum to the vet)
  and a card offers what they do. Pandy gets her tag in `townHome6`. Ash at number 6 now cycles through his lines while you're near.
- **Perks** (`townPerks`, localStorage `an3d-perks`, this device only): `car` and `possum` (one upgrade each, applied over Settings
  by `townPerkRide`), `cordial` (Shift or the Sprint button: 1.5x on foot), `fit` (1.1x on foot), `kick` (the 360 kick replaces
  Spin), `potions` (up to 3), `chef` (others see you as the chef; you see yourself in third person). A drink at the Willow sways you
  for a minute or two and stops you driving.
- **Love potion**: Emotes gives it to the nearest player on foot within 40 m (relay action `potion`); their app walks them after you
  for 30 s.
- **Letters** (`townMail`): posted to ntfy topic `awesome-news-town-mail-k4p9`, kept 30 days in `chat/mail.json` by `tools/mail.py`
  (hourly chat job). Three per 5 minutes. Online players get it within ~25 s; others are told on opening Explore that a letter is
  waiting at the Moorooka Post Office. Not private.
- **Possum mission**: number 6's pool starts it (no more instant gold): gold rings over up to six roofs nearby, a minute to get
  through them all; win and you're the golden possum.

## Moorooka: more businesses and venues, new locals, your look (16 November 2026, later)

Ash: "Add more real moorooka businesses. Not too high res", "Add the bowls club and other missing venues", the doctor near
Woolworths ("Can't drive until you do"), "An African store where I can get new clothes", "a hairdresser, a real one where I can
change my hairdo", Venky out the back of 10 Beaudesert Road ("Fix up this house"), and Sue on Bohain Street with bread.

- **Placed by the Queensland address register** this time (PlanningCadastre/LandParcelPropertyFramework layer 0: street number,
  name, type and locality in title case), which moved three from the first round: Advance Mechanical Centre (93) is north of Helles
  Street, the ward office (122) is the building with the car park in front, and Big Boss Pizzas (180) is a building further south
  (its old spot is now Rooka Acai). The 7-Eleven and Ampol signs moved to their own lots.
- **New fronts** (plain signs, one texture each): the Woolworths centre as a row (Woolworths, Brumby's, Sushi Guru, Botanicafe,
  Barra Boys, Moorooka Medical Hub), Roo Kitchen & Bar, Istanbul Kebabs, Rooka Acai, Ho Choi (in the 204 row), Red Rooster, Coles
  Express with Gloria Jean's and Subway, The Vanilla Lab, Star Seafood, The Clubhouse Moorooka (the old bowls club, 76 Koala Road,
  with Bean on the Green), Moorooka State School, St Brendan's School, and 398 Tarragindi Road as a row (Vizzeto, Go Thai, Sheesh
  Mahal, Todd and Pup). Servo signs added for Coles Express, Pearl Energy and Moorooka Servo. A new front kind, `row`: one sign per
  business along a wall.
- **Locals**: the Doctor (Medical Hub: sobers you up; drunk now stays, on this device, until you see them), Made in Africa (in the
  Rannchhod Arcade: five shirts), A La Mode Hair (seven styles, seven colours), Venky (chai), Sue (walks Bohain Street; her magic
  loaf makes you a giant for a minute: twice the stride, three times the size for everyone).
- **Your look** travels in your figure's kind as `walk~top.hair.colour` (`.g` for a giant); older copies of the app see "walk".
  With a look of your own you see yourself in third person on foot, as the chef and the construction worker do.
- **Venky's house**: a front door, porch roof on posts, steps, patio and pot plants on the side facing number 6 (one small piece).

## Moorooka's bus drives itself; Little Village yoga (16 November 2026)

- Ash: "I want the bus to actually move by itself and stop every now again so I can get on. Drives without me moving it. I'm a
  passenger." The drivable bus at the Beaudesert Road stop is gone; `townTraffic` runs one bus (`T.traffic.bus`) round the main
  roads with the traffic, a little slower, stopping every 250 to 450 m (away from corners) for 12 seconds. Walk up while it's
  stopped: Get on the bus. You ride as a passenger (the `ride` mode used for riding with other players, with `ride.local` the bus):
  the view follows it, and Get off works at a stop, out of the kerb-side door. With you on, it never jumps elsewhere as the traffic
  does when stuck or too far away.
- Ash: "The rising sun is now little village. You can do yoga there and learn the yoga emote." 108 Beaudesert Road is Little
  Village; its yoga teacher runs a short class and you learn the Yoga emote (perk `yoga`).

## Possum's house from the aerial photo; grip, jump, disco ball, doctor pointer; traffic follows you (16 November 2026)

- **16 Kingwell Street** (the possum's house) wears Queensland's 10 cm aerial photo on its roof: `town3d/moorooka/possum-house.jpg`
  (18 KB, 352 x 400 px over 22 x 25 m), draped 6 cm over the model's roof in 0.4 m squares inside the surveyed outline, edges snapped
  to the walls, shifted about a metre to line up (roofs lean in an aerial photo). Loaded only when the possum is built.
- **Grip**: the button now shows only when there's a car to grip (or "Let go" while holding), and sits above Jump instead of over it.
  Hop out of the possum while it grips a car, get in and drive that car: the possum stays on the roof and rides along.
- The possum turns another 30% slower.
- **Sue's bread** now lets you jump on foot (Space, or Jump on a phone; others see it), instead of making you a giant.
- **Drunk**: a red pointer at the top shows the way and distance to the doctor; and a **Disco ball** emote while drunk (a mirror ball
  drops in over you, spins, and throws coloured beams round for nine seconds; other players see it).
- **Post office**: after sending, it offers to share the app with the person.
- **Traffic follows you**: it used to stay within 800 m of where Explore started (number 6), so away from there no cars moved. Now,
  450 m on, it re-centres on you and brings the out-of-sight cars round (the bus too, unless you're on it).

## Logan council: cars out of the walls, solid walls, sliding doors, golden car on the ground; left-hand traffic and more (16 November 2026)

- **Logan map data** (`town3d/logan/map.json`, precinct cars): the red and the blue car touching the administration centre's wall
  moved 1.2 to 1.6 m clear, one by the annex nudged out, and four parked inside another building (6076 to 6095, -13375) removed.
- **The precinct's ground** is laid 25 cm over the terrain (`precinct.ts` GROUND): Logan's config has `lift` (the precinct box and
  0.25), added by the app's ground function, so the golden car, the other cars you drive and people stand on it, not in it.
- **Council building** (`townCouncil`): the precinct's buildings are solid to walk into too (`T.solid`, `T.solidWalk`; on foot you slide
  along a wall), and the entrance has two glass doors that slide apart as you come within 6 m, with the dark of the foyer behind.
  The model's own static glass there is taken out (bundle patch, `logan-model.js?v=40`).
- **Traffic drives on the left** (it was on the right); the bus lets you off on the kerb side.
- **The construction worker's button** sits above Sprint and Jump, twice the size, with ON/OFF on it.
- **Pandy's cordial** lasts 10 minutes (she tops you up); **new clothes, hair and the chef no longer switch you to third person**.

## Builder: Move tool and fuller suggestion reviews; Moorooka's footpaths joined up (16 November 2026)

- **Move** (builder toolbar, between Light and Delete): tap a thing to pick it up, tap where it goes. Your own strokes (path or
  concrete, grass, road) keep their shape and move; something put in moves (one published by someone else is taken out and put in
  again where you tap); a parked car or a tree of the model's is taken out where it was and put in where you tap.
- **Reviewing a suggestion** now lists what it does: strokes by kind with total length and average width, what was put in, what was
  taken out, and the street it's on or near (from the town's street data).
- **Footpaths joined up** (`town3d/moorooka/town.json`, `footpaths`): where one stretch of a street had no footpath on a side between
  two stretches that do (under 150 m long, the street running straight on), that side now has one too, at the average of its
  neighbours' distance from the kerb: 50 gaps (Ash: "need to fix up some paths so they are connected"). Data only; a rebuild of the
  surface from ai-forge would bring the gaps back unless the same rule goes into `build_surface.py`.

## Fronts closer to the photos; council doors on the paving (16 November 2026)

- From Ash's Street View photos: Advance Mechanical Centre's name on a red band across the whole front, with the yellow kerb; the ward
  office on a red band; the vet's pole sign with its green cross; TerryWhite Chemmart's strip as a row of green signs (TerryWhite
  Chemmart, PHARMACY, CareClinic) with the hair salon and cafe beside; Snap Fitness's two stairs with red rails. Front options:
  `band`, `pole`, `rails`, `kerbPaint`.
- Logan's sliding doors stood at the building's average floor height, which was below the paving at the door ("in the dirt"); they
  now stand on the precinct's ground at the door.


## Logan council: the forecourt is concrete, not dirt (16 November 2026)

- The ground under the entry canopy was drawn as tan exposed aggregate (kind 5), which read as dirt around the sliding doors (Ash: "Fix
  Logan door"). In `town3d/logan/map.json` (precinct `ground`), that one shape is now light concrete (code 81 to 65: kind 4, the
  lighter tint), like the paths in the aerial photo. Data only; the other kind 5 paths are unchanged. If the precinct is rebuilt in
  ai-forge, make the same change there.

## Moorooka: real names and the photo shops made realistic (16 November 2026)

Ash: "Use the real business names, we are making a mini moorooka here. Use the photos I gave you to make it realistic".

- **Real names** in place of the placeholders (each from a business listing at that address): Yeshi Buna, Ethio African Cafe (Shop
  1/131, left of the post office, was "Butcher"); Cutting Master Barbershop (147, was "Barber"); David Stephensen Optometrist (195-197,
  was "Optometrist"); Eddy's Barber Shop (190-204, was "Barber"); The Cleo Collective hair salon (2/116: its "cleo" sign in script and
  its HAIR SALON sign) and The Cheesecake Shop in the pharmacy row (were "Hair salon" and "Cafe"); the ward office's sign reads
  "Councillor Steve Griffiths, Moorooka Ward Office" as the real one does. All are in Jump to.
- **From Ash's photos:**
  - Greencross Vets: a cream cottage under red tiles (the model's grey box had dark glass across its front), its Vet sign and letter
    board on two posts by the corner, the joke a line at a time.
  - The ward office: white render, a flat roof, the deep red fascia with its raised middle and the councillor's sign, teal-framed glass,
    and the tall black sign by the car park.
  - Advance Mechanical Centre: dark navy, a flat roof, the 93 on the wall, its posters, the tall red sign by the kerb and a concrete
    forecourt.
  - Snap Fitness: the car park under it, the copper laser-cut screen across the first floor with the sign on it, the red frame, and the
    stairs up each end between red walls.
  - The pharmacy row: glass shopfronts under a dark fascia, the green MOOROOKA and CareClinic window graphics, the Cheesecake Shop's mint,
    and a grey iron roof. The Willow: dark timber.
- **How the colours get in:** `moorooka-model.js` (`?v=34`) is patched to ask `window.anStyle(x, z)` about each building (by the mean of
  its outline's corners) for its kind, wall, roof and understorey colours, a flat roof, or no shopfront (`noShop`: the model puts a
  generic glass shopfront and awning on every wall facing Beaudesert Road along the shopping strip, which is what the vet had). The list
  is `MOO_STYLE` in `app.html`. `moorooka-model-am.js` (the beta page's) is not patched.
- **Not done:** the two plain shops at 145-147 and the one with posters at 204 have no name on the photos or in the listings, so they stay
  plain. "Yeshi Buna" is the 2026 listing for Shop 1/131; the older photo showed a butcher there.

## Logan council: taller doors and a foyer you can walk into (16 November 2026)

Ash: "Logan doors still too low. I can't walk in building".

- `logan-model.js` (`?v=41`) is patched so a wall whose two ends match a gap in `window.anDoorGaps` ([x0, z0, x1, z1, top]) is drawn
  only above `top`. `app.html` sets the gap to the council's door wall (`COUNCIL_GAP`: map.json's entry.doors, top 47.6 m, about 3.55
  m over the paving).
- `townCouncil` draws 2.9 m sliding doors with glass above them up to the wall, and jambs either side. Behind them is a foyer, 4.4 m
  wide at the doors and 8 m wide further in, 9 m deep. It has a counter, a timber wall with a sign panel, and benches. The room is
  unlit (`unlit: true`) with its shading painted on, because the outdoor light turned its ceiling olive. `T.solid` leaves the foyer
  walkable; the rest of the building stays solid. Logan's `addParts` has no textures, so the sign is a plain panel.

## Link previews for the local apps (16 November 2026)

Ash: "Improve sharing link images". Moorooka News and Coastline News links showed the old Awesome News card, and The Logan Wire's
was plain text. Each local app's `local/<slug>/share.png` is now its town from the 3D model, with the app's icon, name, tagline and
colours. They're made by `tools/share_cards.py`; run it again after a new `explore-share.jpg` or a change to `local/brands.json`.
The pages ask for `share.png?v=2`.

## Explore link previews (16 November 2026)

Ash: "Better share links 4 explores". Each 3D model's link preview (`local/<slug>/explore-share.jpg`, used by `/<suburb>/explore/`)
is now a closer view of the town: Moorooka's Beaudesert Road shops, Logan's council building and Inverloch's inlet. Each card has
the Explore icon, "Explore <town> in 3D" and three chips. `tools/share_cards.py` makes these and the local apps' cards from
`local/<slug>/explore-shot.jpg`, a 1200 x 630 render from Explore. The pages ask for `explore-share.jpg?v=2`.

## Logan on phones: a half-size ground photo (16 November 2026)

Logan crashed on Ash's iPhone (the tab ran out of memory and reloaded). Its ground photo, `ground.webp` at 4096 x 3456, takes about
75 MB of graphics memory. On a touch screen (`window.anSmallGround`, set in `app.html`), `logan-model.js` (`?v=42`, patched where it
names its files) and the preload use `ground-2k.webp` (2048 x 1728, about 19 MB) instead. Computers still get the full photo. If
`ground.webp` is remade, remake `ground-2k.webp` from it (Lanczos, WebP quality 86).

## The 3D models' own site: no news (16 November 2026)

This repo (3dModels) is the copy of Awesome News that becomes Explore's home. Ash: "The new sites don't need news". `NO_NEWS` in
`app.html` (true here): `loadStatic` never fetches the news; a town's page (`/<town>/explore/`) opens its town straight away, and the
home page, or leaving a town, shows a picker of the three towns (`townPicker`). The weather still comes from Open-Meteo. The publish
workflow builds the pages only (no news download, no schedule). Checked: phone size, home picker, Moorooka opened from it, the
two-finger stick test after 11 minutes of play, leaving back to the picker, no news requests, no errors.

## Moorooka on phones: a half-size ground photo (16 November 2026)

Ash: "When I load moorooka it loads, I play for 2 secs, crashes, reloads, and is then fine". Moorooka's `ground.webp` is 4096 x 4096,
about 89 MB of graphics memory, and the sharper ground tiles that arrive a couple of seconds in pushed the phone over. On a touch
screen (`window.anSmallGround`) `moorooka-model.js` (`?v=35`, patched where it names `ground.webp`) and the preload use
`moorooka/ground-2k.webp` (2048 x 2048, about 22 MB). Rebuilding the model from source loses the patch: put it back.
## Logan on phones: lighter in memory (16 November 2026)

Logan still closed on Ash's iPhone ("By break I mean the app closed on my iPhone"). Its meshes held about 230 MB in JavaScript as well
as on the graphics card. `logan-model.js` `?v=43` (patched in the bundle; rebuilding from source loses it, so put it back):

- the precinct's ground is cut into triangles of up to 14 m, not 7 (1.05 million points down to 365,000);
- the precinct's buildings, furniture and wires, the footpaths and the blocks call `window.anFreeCpu(mesh)` (in `app.html`). On a
  touch screen it lets go of each mesh's JavaScript copy once it's on the graphics card. Nothing reads them back (no raycasting).

JavaScript memory after loading on a phone-size test: 418 MB before, 258 MB after.

## Moorooka: the possum stands on the roofs as drawn (16 November 2026)

Ash: "The possum falls into many roofs". The possum worked out each roof's height from `town.json` (eave and ridge) with a guess at
its shape: a hip rising evenly from every wall. The model draws gables as well as hips, on one or more rectangles fitted to the
building, with overhangs, so near a gable end the guess was well below the drawn roof and the possum sank into it.

- `moorooka-model.js` (`?v=38`) is patched in `$_` (the function that raises each building) to tell `window.anRoofRec(...)` what it
  drew: the top of the walls, the building's frame (middle and turn), and either a flat roof, a ring roof (inset and rise), or each
  rectangle's roof (gable or hip, middle, half sizes, rise, overhang).
- `app.html` keeps those in one shared array of numbers (`anRoofs`, found by the building's middle) and the possum's `roofAt` uses
  them first. Buildings the model raises another way (the detailed houses near number 6) keep the old guess.
- On a test, 367 of the 378 roofs within 300 m of the possum were found this way.

## Moorooka: the shopping strip's roofs (19 November 2026)

Checking the Beaudesert Road shops against Street View showed most of them under big gable ends facing the street, like barns, in
the model's grey-green, where Street View has flat roofs behind parapets in white, cream, pale grey and brick.

- A `MOO_STYLE` entry's `kind: 2` alone does not give a flat roof: a shop with a roof more than 1.3 m high gets a gable over its
  longer side, which on a narrow, deep shop puts the gable end on the street. Add `flat: true` for a parapet (and air conditioners
  on the roof).
- `moorooka-model.js` (`?v=42`, patched in the bundle; rebuilding from source loses it, so put it back): `hip: true` in a
  `MOO_STYLE` entry gives a hipped roof (the roof-type bits of the building's flags set to hip, and a shop's roof drawn by the
  house roof code instead of the shop's gable). Used for the RSPCA op shop (143), AMehdi (139) and Rooka Acai's corner.
- Eighteen buildings styled from Street View: fourteen flat roofs in their real colours along both sides of Beaudesert Road
  (131 to 205), the RSPCA op shop's salmon tiles, AMehdi's red tiles, and 102's white Queenslander.

## Moorooka: servo canopies on posts (19 November 2026)

Checking the businesses against Street View (Ash: "check for errors in current ones") showed the BP at 1129 Ipswich Road's canopy
drawn as a solid 7.5 m block with windows, carrying National Storage's sign, and the Ampol's and Pearl Energy's canopies the same.

- `moorooka-model.js` (`?v=41`, patched in the bundle; rebuilding from source loses it, so put it back): a `MOO_STYLE` entry with
  `canopy: { band, stripe, under, post }` draws the building as a canopy. `anCanopy` (just before `$_`) draws the fascia round the
  edge (`band` metres deep, white with the brand's `stripe` across it), its inside face, the underside (lit as if it faced up, and
  glowing at night like the canopy's lamps) and two rows of posts down to the forecourt. `K_` (the solid test) skips canopies, so
  you can walk and drive under them. Give a canopy `kind: 1` and `flat: true` so it gets a flat roof and no windows.
  The inside face sits 8 cm in from the fascia (`?v=45`): on the same outline the two flickered through each other on an iPhone
  (Ash, 19 November 2026: "This issue occurs a bit", at the Moorooka Servo).
- The BP's pylon is where Street View has it, on the grass between the driveways (it stood 40 m up the road, placed by number), and
  National Storage's sign is on its own three-storey charcoal building behind the BP.
- The Coles Express at 1029 Ipswich Road is a Reddy Express now (Street View, September 2024): renamed, its canopy done the same way
  with Reddy's red stripe, and its shops in their order along the front (Subway, Reddy Express, Gloria Jean's drive-through).
- Two more canopies (Street View): BP Annerley (810 Ipswich Road) in BP's green, with its pylon by the footpath (it had none, and
  Bold's post stood on a solid block), and the 7-Eleven at 841 Ipswich Road. `moorooka-model.js` `?v=43`: `stripes: [[r, g, b], ...]`
  (bottom to top) for a fascia with more than one stripe, the 7-Eleven's green, red and orange.
- Each canopy stands on a concrete pad (`pad: [r, g, b]` to change it), its corners on the terrain: the ground plan had lawn
  where the block stood.
- The 7-Eleven at 642 Toohey Road, Salisbury, the same way (Kebabland had been put on its canopy); Kebabland Express is on the
  building behind it, with the 7-Eleven's shop.

## Moorooka: no kerbs down the middle of the divided roads (20 November 2026)

Ash, 19 November 2026: "there are tonnes of roads and paths issues to fix". On Beaudesert Road and the other divided roads
each one-way carriageway had kerbs on both sides, so its inner kerb stood in the middle of the road as a thin raised strip.
Where the two carriageways were not parallel these strips zig-zagged across the lanes, and the generated footpath on the
median side made white wedges on the road. The ground plan draws these roads as one surface, with no median.

- `moorooka-model.js` (`?v=45`, patched in the bundle in the kerbs builder `x1`; rebuilding from source loses it, so put it
  back): for a one-way carriageway (`flags & 4`) with a name, a kerb point, and the footpath beside it, are left out when
  a carriageway of the same street is within about 8 m beyond the kerb (probes at 1.4, 3.2, 5.5 and 8 m past it, through
  `RoadIndex.near`). Other streets and the outer kerbs are unchanged.

## Moorooka: drives, paths and fences joined up; trees and light poles off the paths (20 November 2026)

Ash: "With the new houses ... you'll need to reconnect paths, fix driveways and fences", "now houses are good, just need to fix
paths, then remove trees and move trees slightly off paths" and "Also light poles on paths". How it was done is in
`tools/ground/README.md` (`fronts_ground.py`, `fronts_cuts.py`, `lamps_fix.py`).

- The ground now agrees with the Street View house fronts outside the designed square: 459 drives laid where there were none,
  195 rule drives moved to where Street View has the drive (611 were already within 3.5 m and left), 46 crossovers added, 482
  front paths carried across the verge to the footpath and 68 laid from a gate. About 35,000 m2 of ground changed in 70 blocks.
- Fences open where the paving crosses them (`c` on each front in `MOO_LITE`, 1,018 openings on 859 fronts), instead of at
  Street View's gate and drive (`gap`, `d`), and the drive slabs are gone (the ground draws the drive). Inside the designed
  square the ground (from the aerial) is trusted and the fence is cut to suit it. Businesses with a forecourt (`p`) are as they
  were.
- Trees: 2,875 moved off paths, drives and streets to the nearest clear spot within 4 m, 46 removed where there was none; trees
  in car parks were left. Cars on a moved drive moved with it (15) or went (36), and 44 parked across a new crossover went;
  696 front fences in `yards.bin` gave way to the house's own, and 100 yard things on new paving went.
- Light poles (`moorooka-model.js` `?v=46`, patched in the bundle; rebuilding from source loses it, so put it back):
  - `lampOff` stands each pole on the grass between the kerb and the footpath, or behind the footpath, from the footpath
    sides in `town.json`, instead of 1.4 m from the kerb whatever is there.
  - `town.lampFix` then moves the poles still on paving (read from the ground): 672 moved, median 0.5 m, at most 8.4 m along the
    street; 96 on paved shopfront verges stand 0.6 m behind the kerb. Poles on concrete went from 253 to 37 (24 of those on
    fully paved verges).
  - `window.anLampSpots` (x, y, z, heading per pole) is what `lamps_fix.py` reads.

### Part 6 of the Street View houses (20 November 2026)

- 215 more house fronts drawn from 274 more Street View records (Ipswich Road, Evesham Street, Fegen Drive, Mametz Street and the end of Beverley Hill
  Street), 2,742 recorded so far. Same pipeline as above: `fronts_ground.py` (175 drives laid, 40 rule drives moved, 5
  crossovers, 62 paths linked to the footpath, 11 laid from a gate; about 6,900 m2 in 63 blocks), then `fronts_cuts.py`, then
  `lamps_fix.py` (read again with `lampFix` taken out first, so its keys are where the model stands each pole).

### Part 7 of the Street View houses (20 November 2026)

- 233 more house fronts drawn from 296 more Street View records (Longueval Street, Hamilton Road, Holmes Street, Whittle,
  Beulah, Gratwick, Fleurs and Unwin Streets, Northview Outlook, Glendale Grove, Cornford, Moresby and Heilly Streets and
  Tarragindi Road), 3,038 recorded so far. Same pipeline: `fronts_ground.py` (158 drives laid, 30 rule drives moved, 21
  crossovers, 68 paths linked to the footpath, 10 laid from a gate; about 5,800 m2 in 57 blocks), `fronts_cuts.py`, then
  `lamps_fix.py` (7 more poles moved off new paving).

### Part 8 of the Street View houses (20 November 2026)

- 318 more house fronts drawn from 395 more Street View records (the rest of Tarragindi Road and Timbury Street, Blackburn
  Street and Lane, Barford, Clifton, Tonks, Rabaul, Belair, Rachael and Charmaine Streets, Nettleton Crescent, Cutler Avenue
  and a few on Industries Road, Zonnebeke Street, Eric Crescent and Tennessee Avenue), 3,433 recorded so far. Same pipeline:
  `fronts_ground.py` (198 drives laid, 48 rule drives moved, 7 crossovers, 103 paths linked to the footpath, 17 laid from a
  gate; about 8,400 m2 in 61 blocks; 51 trees moved off paving, 77 drawn-over front fences dropped), `fronts_cuts.py`, then
  `lamps_fix.py` (778 poles moved in all, 3 more than before).

### The construction worker takes out more (20 November 2026)

Ash: "As the construction worker let me delete more things. Try to make the interface easier to use. No need for things the
possum can create other than a trees", "Let's drop the business indicator with the yellow square, 8 Beaudesert rd has a
duplicate fence".

- **Delete takes out more:** a front fence, wall or hedge (the Street View fronts, `MOO_LITE`), one of the model's own
  fences (side and back fences), and a street light, as well as parked cars, trees, people and what was drawn. Each is a
  point in the map edits: `gone.fronts`, `gone.fences` and `gone.lights`, saved, sent and approved like the rest
  (`tools/town/add_edits.py` knows them). A tap hits a fence when it lands on it on the screen or within 26 px of its middle,
  and the nearest thing to the eye wins. Undo puts it back.
- **How:** `townHousesLite` draws the fronts again without the ones taken out (about 2,200 fronts, once a tap).
  `moorooka-model.js` (`?v=47`, patched onto the bundle): `h1` builds the fences in 560 m cells and can build one cell again
  without the fences taken out; `R1` (the street life) can squash a street light to nothing in its instanced lights and
  pools; the model's `setMore({ fences, lights })` does both, and `fenceSegs()` hands the app the fence lines to pick from.
  `setMore` is replayed into the sharp model when it's swapped in, like `setRemoved`. On the light setting the model draws
  no fences, so there are none to pick there.
- **Easier to use:** the tools are Path, Grass, Road, Tree, Car, Light, Move and Delete (small trees, bushes and flowers
  are the possum's, which still plants all four); on a touch screen the buttons are 40 px tall; Delete turns red while it's
  on; the locate button hides while editing (the bar ran under it) and the line of help keeps clear of the pencil.
- **The little business name tags with the yellow mark are gone** (`townLocals`).
- **6 and 10 Beaudesert Road had their front fences drawn twice:** once in the street detail (`townNo6`) and again from the
  Street View houses. The Street View copies are taken out. `fronts_cuts.py` used to add another `c` to a front each time it
  ran, rather than replace it (325 fronts had two to four); it replaces it now, and the repeats are gone.
- A search for any other front drawn twice found one: the corner hedge of 131 Goodwin Terrace, recorded again for 181 Vendale
  Avenue. It's drawn once now.

### Walls that flickered (20 November 2026)

Ash: "Look for this bug throughout the app, colours flashing strangely on Venky's house. Happens elsewhere too" (a phone
screenshot: a dark band along the foot of the wall, striped with the wall's own colour).

- **The cause:** two surfaces drawn in exactly the same place, so the phone can't tell which is in front and shows bits of
  each, changing as you move. At Venky's (12 Beaudesert Road, one of the six lots by number 6 the model draws in detail,
  `vu`) the foundation box stood as high as the ground on the uphill side (0.78 m), but the weatherboards start at 0.3 m:
  the 0.5 m between was foundation and wall at once. The foundation now stops under the trim (`R` no higher than `p - 0.28`),
  so nothing overlaps (`moorooka-model.js ?v=48`). Of the six detailed houses, Venky's was the one with this much slope.
- **Also, everywhere:** every flat-roofed building (shops, units) had its parapet start 5 cm below the top of its walls, in
  the same plane: a thin flickering line along the roof edge. The parapet now starts at the top of the wall, in Moorooka
  (`$_`, `?v=48`) and Inverloch (`inverloch-model.js ?v=21`, a patch on the bundle: when Inverloch's model is rebuilt from
  ai-forge `claude/inverloch-combined`, make the same change in its buildings source). Logan's buildings don't do this.
- **And two more fronts drawn twice:** 9 Bohain Street and 18 Beaudesert Road are lots the model draws in detail, with
  their own fences, and the Street View houses drew a front fence on each as well. The Street View copies are out, and the
  house generator skips the six detailed lots from now on.
- Checked at phone size (software renderer): Venky's wall from both ends, before and after, with the trim and foundation
  coloured to show where each starts and stops.

### Unstick (20 November 2026)

Ash: "If the player moved the control stick forward and back over 5 seconds they are likely stuck, show a above boost anti
stuck which teleports to closest road".

- **When:** driving (a car, the golden car or the bus), forward and back have both been pushed in the last 5 seconds while
  the car has stayed within 6 m of where it was all that time. An orange **Unstick** button shows just above Boost (placed
  from wherever Boost is, so it follows the phone and desktop layouts); U on a keyboard. It goes once the car is 12 m on, or
  after 20 seconds.
- **What it does:** puts the car on the nearest road (any street the model lights, not lanes or paths), in the left-hand
  lane (the middle of a one-way carriageway), facing along the road the way it was pointing (a one-way street: its own way),
  stopped. If something's in the way there it tries up to 20 m along the road either way.
- **Cost:** a check of where the car is twice a second while driving; the roads are the traffic's own list (`T.roadsAll`,
  already loaded), searched only when the button is tapped. The stick listeners are untouched.

### Saving map edits and kept views to this site (20 November 2026)

Ash: "how do i get the github key you need for htis". Explore's Save (map edits, with the GitHub key) and "Use this view for
everyone" asked GitHub to run workflows in the Awesome News repo, as the copy was made: what was saved landed in Awesome News's
`edits.json` and `wxcams.json`, never on this site. Now they run here: `.github/workflows/town-edits.yml` (adds the edits to
`town3d/<town>/edits.json` with `tools/town/add_edits.py`) and `keep-view.yml` (files the view in `local/wxcams.json`),
copied from Awesome News, each then starting Publish (a push made by a workflow doesn't start one by itself). The app sends
them to `GH_DISPATCH_3D` (this repo). The key: a fine-grained personal access token with access to Ashley-Pettit/3dModels and
the Actions permission set to read and write, pasted into Explore's Settings, "GitHub key (just you)".

### Part 9 of the Street View houses (20 November 2026)

- 246 more house fronts drawn from 298 more Street View records (Robinson, Anson, O'Neil, Beckford, Timothy, Abel, Davey,
  Sharon and Abney Streets, Newman Road, Desanne and Kerrianne Places, and a few on Madang, Kibby and Kenway Streets, Evans
  Road and Tennessee Avenue), 3,731 recorded so far. Same pipeline: `fronts_ground.py` (190 drives laid, 27 rule drives
  moved, 10 crossovers, 71 paths linked to the footpath, 13 laid from a gate; about 5,800 m2 in 68 blocks; 42 trees moved off
  paving, 80 drawn-over front fences dropped), `fronts_cuts.py`, then `lamps_fix.py` (780 poles moved in all).
- The house generator skips the six lots the model draws in detail (6, 10, 12, 18 and 2 Beaudesert Road, 9 Bohain Street),
  so their fences aren't drawn twice.

### Inline Physio fixed up (21 November 2026)

Ash: "Fix up the inline physio". Checked against Street View (May 2024) from Beaudesert Road and Helles Street:

- The cottage sits 2.5 m further back (MOO_STYLE `shift` [-6.89, 1.24], the sign's `a`, `b`, `kerb` and `across` with it), behind a lawn
  (`lawn`: a green patch drawn on the ground, like the mechanic's concrete `pad`).
- The verandah covers only the door half and runs 1.4 m past the end towards Helles Street, on dark posts (`veranda.x0` and `veranda.out`,
  new), with the board on it over the door.
- The neighbour's timber fence stops at the physio's corner and has no brick under it. The street light in front of the sign is moved to the
  Helles Street corner (`lampFix` in `town.json`), where the real pole is.
- The navy fence down the Helles Street side is real (65 Helles Street, the same corner lot): left as it is.

### The physio's signs (21 November 2026)

Ash: "Main problem is the 3 signs, main one is in a roof. One on a window, 3rd one on a door". Found by casting rays at the front
wall: the window is 1.0 to 3.0 m along it, the door 5.5 to 6.5 m, and the building's gable leans out over the verandah above about
3.4 m (the board stood into it). The board is now 0.5 m tall, on the verandah's top over the door (`veranda.sign` takes a fourth
number, the height it starts at, 2.6 m unless given), and the "physio" and "pilates" posters are on the bare wall either side of
the door.

### Part 10, the last of the Street View houses (21 November 2026)

- Every house in the address register is now recorded from Street View: 3,982 records, 2,392 fronts drawn in the rest of
  Moorooka (204 more in this part). The last streets: Muriel Avenue, Gladstone Street, Cobden Street, John Bright Street and Coin
  Street, and the 76 that Street View first showed black. Those were the "seed" tab sitting behind another tab in the browser
  pane, where Street View doesn't draw, not missing coverage.
- Same pipeline: `fronts_ground.py` (173 drives laid, 12 rule drives moved, 5 crossovers, 34 paths linked to the footpath, 11
  laid from a gate; about 2,900 m2 in 66 blocks; 17 trees moved off paving, 65 drawn-over front fences dropped), `fronts_cuts.py`,
  then `lamps_fix.py`. The physio's light is put back at the Helles Street corner after `lamps_fix.py` (its `lampFix` entry,
  `-2292,-5198`), as #123 placed it.


## Moorooka's roads: kerbs round the corners, no lines in the junctions (21 November 2026)

Ash: "Once you've finished the houses fix up all the roads". A survey of junctions across the suburb (from above and at a driver's
eye height, after the sharper ground had loaded) found the road surface itself sound: every street's centre line lies on asphalt
the whole way. What looked wrong at every junction:

- **Kerbs stopped short of the corners.** Each street's kerb ended where it came near the cross street, so at every corner the
  rounded asphalt had no kerb. The kerbs builder (`moorooka-model.js` `?v=49`, patched in the bundle in `x1`; rebuilding from
  source loses it, so put it back) now notes where each run of kerb ends, pairs each end with the end round the corner from it
  (the two kerb lines must meet ahead of both within 16 m, at 25 degrees or more, each kerb's verge facing the other street), and
  joins them: straight on to a 5 m round corner (the corner the ground plan uses), then on to the other kerb. A join that would
  cross any street is not drawn. 1,102 corners are joined. `window.anKerbCorners` gives the count.
- **Centre dashes ran into the junctions**, and past the give-way lines. Dashes are now laid after every street is known, and a
  dash is left out where either end or its middle is within half the width plus 2.5 m of a street with another name.

Not changed: the ground plan (the asphalt, verges and footpaths), the give-way lines (already across the left half of the side
street, just back from the main road), and the low-detail ground drawn before the sharper ground arrives.

## Fences off the paving, kerbs out of the road, cars off the footpath (21 November 2026)

Ash sent three photos from his iPhone: a white picket fence standing across a paved front, kerbs in the asphalt at the Bohain
Street junction, and Brisbane Car Yard's front row of cars on the footpath. Each was fixed everywhere it happens.

- **Low front fences** (`yards.bin`, kind 13, from `suburb_yards.py`): each was checked against the ground plan. 37 that run onto a
  street's carriageway and 145 that run square to every street within 25 m (diagonally across a lot) were misplaced and are gone;
  50 standing mostly on paving went too; 167 that cross a drive or path (paving under the fence and on both sides) are cut there
  (242 pieces left, about 520 m opened). 1,943 are unchanged.
- **The model's boundary fences** (`town.json` `fences`): 492 ran through a drive (paving under them and both sides): they are cut
  there, for runs up to 7 m, or longer where the paving is concrete (a residential drive); long runs on asphalt, between paved
  industrial yards, stay. 131 lay wholly on paving and are now zero length (the model skips them), and 184 pieces were added at the
  end, so every other fence keeps its index and colour. About 2.7 km opened.
- **Kerbs in the road:** where a street's asphalt in the ground plan is wider than its width in the street data (junction flares,
  service lanes), its kerb stood in the road, and some of the new corner kerbs did too. Every kerb point the model draws was dumped
  (`window.anKerbDump`, set before load) and tested: asphalt 0.85 and 1.45 m behind it is a kerb in the road. Those 1 m cells
  (3,660) are `kerbOff` in `town.json` (Int16 x, z pairs, base64); the kerbs builder (`?v=50`) leaves out a kerb point in one, and
  a corner join with any of its points in one. Run three times until no new cells came: 864 corners now, none in the road.
- **Car yards:** the rows of cars for sale started 3.4 m from the kerb, on the verge on most yards. Each yard (`flags` in
  `MOO_FRONTS`) now has `yardFront`, where its own paving starts every 2 m along its front: behind the street's footpath (from
  `footpaths` in `town.json`, or 4 m of verge where it has none) and behind any grass the ground plan shows. A car whose street end
  would be past it isn't placed, and the tube man stands just inside it.
- **Traffic:** Moorooka's moving cars up from 7 to 9 on a phone and 9 to 12 on a computer.

## Houses on hills, the Willow's way in, the bowls club, schools, the Magic Mile, things off the roads (21 November 2026)

- **Houses out of the dirt** (Ash: "Some houses are still inside the dirt"): a building's floor stood at the ground under its
  middle, so on a slope its uphill side was buried: 1,787 buildings by more than 1 m, 285 by more than 2 m. The floor now stands
  on the highest ground under it (its corners and the middles of its walls, `moorooka-model.js ?v=51`, `$_`), and below the floor,
  down the slope, the walls are a darker base. The possum's roofs (`roofAt` in `app.html`) use the same floor.
- **The Willow Hotel** (Ash: "The entrance to the willow hotel is not quite correct. Needs redesign of that building"): redone
  from Street View (October 2024). The way in is at the south corner: steps up from the footpath between two white rendered
  piers, a red slatted canopy over them, the maroon sign, black slatted gates either side, and the timber-clad corner beside.
  The beer garden's low wall and banners run from there to the north end, the bar's glass front behind under a pale awning, the
  round orange logo on a pole by the steps. Its walls are white and grey now (they were dark timber).
- **Beaudesert Road checked against Google Maps** (21 November 2026): the key businesses are still there, except Yeshi Buna at
  131 (closed for good: an empty shop now, and the post office is in Jump to) and the RSPCA Op Shop at 143 (closed for good:
  Clear Radiology now).
- **The bowls club**, Moorooka Sports & Community Club, 76 Koala Road (Ash: "Add the bowls club in low ish res"): three greens
  from the aerial photograph (they match the town data's three "Oval" pitches there), each level, striped, with a pale ditch and
  a shade shelter; 19 lot fences and a tree that crossed them are gone. `townBowls` in `app.html` draws it, with the school and
  Magic Mile pieces, as one shape.
- **Schools** (Ash: "Add a little more detail onto the schools without using too much memory or size"): Moorooka State
  School's 25 m pool (six lanes, concourse, pool fence) and its two tennis courts (green on red, white lines, a tall fence),
  placed from the aerial against the courts' own positions in the town data; a play frame and slide under a shade sail on St
  Brendan's lawn. The pool complex was a 46 by 34 m box in the building data that hid the pool: `MOO_STYLE` can now leave a
  building out (`gone: true`; the bundle skips it and it isn't solid), and the pool, its concourse and change rooms are drawn instead.
- **The Magic Mile:** yellow bollards along each car yard's front (behind the footpath) and a red and white sale banner.
- **Missing key places:** the post office is in Jump to. (27 Hawtree Street already carries the Moorooka Presbyterian Church sign
  read off Street View; Google Maps also pins St Brendan's Church there, so it was left as it is.)
- **Off the roads** (Ash: "There are some tress and light posts on roads and some inappropriately parked cars"):
  `tools/ground/lamps_fix.py` now measures the road's edge where the ground plan's asphalt ends (it used the street data's
  width, narrower on junction flares and service lanes) and moves a pole further across the verge if it has to; a second pass
  moved the last 45. Street lights on asphalt: 73 before, 22 after (beside the road on paved ground, none in a carriageway). 103
  trees stood on a street's surface: 27 moved to open ground within 6 m, 76 gone. 27 parked cars went: in a building, across a
  crossover or footpath at the kerb, across or in the middle of the street, or on the grass.

## Signs clear of window hoods, the Willow's steps on its corner, the vet's sign (21 November 2026)

- **Window hoods off shop walls.** Ash: "Quite a lot of the signs are hidden by these things", and the dashes flickering along the
  Guardian's awning ("an example of the flashing"). The house builder (`$_` in `moorooka-model.js`, now `?v=52`) asks
  `window.anNoHood(x0, z0, x1, z1)` for each wall; `app.html` answers true for any wall within 2.5 m of, and lined up with, a front
  in `MOO_FRONTS`. Those walls get no window hoods, and no hood over the front door (`anFront(..., NH)`).
- **The Willow.** Ash: "The stairs are actually on the corner piece", with Street View. The steps, piers, red slatted canopy, sign and
  black slatted gates are now on the short wall facing the Beaudesert Road and Hansen Street corner (`door` in its `MOO_FRONTS` entry),
  and the steps rise to the bar's floor (worked out from the building outline in `poly`, the way the model stands it on its highest
  ground). The timber-clad upper floor with green banners is on the Hansen Street wall (`side`), and the beer garden's wall, with a
  black rail and its banners, runs from the right-hand gate along Beaudesert Road. The fronts' `at()` draws in `FR`, a frame a front can
  switch to another wall of its building for a moment.
- **The vet.** The two trees beside its pole sign are gone, and the sign is 15% bigger (`big: 2.3`).
- **Upgrade chip.** Each upgrade's few words (`UP_SHORT`) show beside its name all the time; a tap still opens the whole story.
- One parked car that stood inside a house is gone.

## Steps down from raised front doors, Yeerongpilly's platform, number 6's path, the pigeon (21 November 2026)

- **Front doors on raised houses.** Since houses stand on their highest ground, a front door on the low side was left in the air
  ("the houses on the hills now often have their doors floating due to the raise"). The house builder now passes `anFront` the ground
  1.4 m out from the door (`GY`, relative to the floor); more than 35 cm down, the door gets a landing, steps down to the ground (18 cm
  risers, 28 cm treads) and two rail posts at top and bottom (`moorooka-model.js ?v=54`).
- **Yeerongpilly Station.** Its station point lies on the track, so the platform builder (`b1`) picked a side afresh every 5 m and the
  platform zig-zagged across the line. It now picks once per station: the side the station is on, or where that's unclear (under 3 m),
  the side further from other rails. The other track is now found anywhere along it, not in a small window that couldn't keep up. The
  two platform outlines mapped as 25 m wide buildings across the tracks are `gone` in `MOO_STYLE`.
- **Number 6.** The lawn stroke over the path from the small white gate to the house (in `edits.json`) is a 1 m concrete path again,
  and the tree by the front fence is smaller (kind 6, 1.8 rather than 3.0). Tree sizes in `town.json` are kind × 256 + height in tenths of
  a metre: change only the low byte to resize one.
- **The pigeon** flies at 40 km/h (12.5 with Shift), sinks at 3 m/s rather than 2.2, and dives faster (14 m/s forward, down to 11.5 m/s).
  Flick shows the green mark when you're near and she has pigeon food for you; each local's chance of news every 5 minutes is 1.5 in 100.
- **Google Maps controls.** The welcome card's second choice is now about the controls only: no map colours, and the mouse is never
  locked with it (drag to look), so the menus can be clicked.
- **The Magic Mile's footpath.** Where a car yard's or car park's asphalt ran straight into Ipswich Road ("the business still stretches
  out onto the main road"), the first 2.4 m past the kerb on each carriageway's outer side is now a concrete footpath
  (`tools/ground/mile_verge.py`, about 680 m2 in eight ground blocks); side streets and roofs are left alone.

## High-set fronts on hillside houses, Ipswich Road's median (21 November 2026)

- **Stairs.** Ash: "There are huge stairs now, is this true to reality?", then "use Google street view again to make them accurate to
  reality. Just don't put the house in the dirt but make realistic". Street View on the steep blocks the model picked (1 Nicholls St, 65
  Homestead St, 22 Beverley Hill St and others) shows Brisbane's hillside houses as high-sets: the floor up on the low side, the space under
  closed in and painted like the house, often with a garage door, and the stairs running along the front to a landing at the door. So
  houses still stand on their highest ground (never in the dirt), and in `moorooka-model.js` (`?v=55`):
  - a front door more than 1.2 m up gets a landing and the stairs down along the wall (whichever side has room), with a sloped rail;
    a door 2.3 m or more up also gets a garage door under the floor beside the stairs;
  - the walls under a floor more than 1.6 m up are the house's own colour (a little darker) with a white band at the floor, a closed-in
    lower level; under a lower floor the base is a lighter painted band than the dark grey it was.
- **Ipswich Road's median** through the Magic Mile and up to the Beaudesert Road corner (Ash: "The magic mile I also mean the business and the
  road. They don't look like the real thing"; Street View: a divided road, two lanes each way, a raised median). `MOO_MEDIAN` in `app.html`
  holds runs of the line midway between the two carriageways and their spacing (worked out from `town.json`'s roads, opening at each side
  street); `townBowls` draws a raised median 1.2 to 6 m wide (spacing less 7.4 m), concrete when narrow and grassed with concrete kerbs when
  wider, rounded at the ends, with a white edge line on the road each side. About 1 km of it.
- **MMG Auto's dealerships** (Moorooka Nissan, Hyundai, Suzuki and the service department) on the north-west side of Ipswich Road
  from Gow Street, from Street View and the aerial: the long showroom strip has a flat roof and pale walls (`MOO_STYLE`), and three
  `MOO_FRONTS` entries give each part its glass front, sign, flags and a yard full of cars behind a clipped hedge (`hedge: true` in
  `townBowls`, in place of the yellow bollards), with Nissan's red pylon by the road. Nissan's yard was lawn in the ground plan and is
  paved now (`tools/ground/yard_pave.py`). A yard only fills with cars when its `what` says car or dealer.

## Beaudesert Road's divider (21 November 2026)

(The first try. It was replaced the same day: see the next section. Its scripts are gone from `tools/ground/beau_median/`.)

Ash: "Can you fix Beaudesert rd. It's 4 lanes of traffic with a divider in the middle". Street View (26, 109 and 131 Beaudesert Rd) and
the 2022 aerial photograph agree: two lanes each way and a raised divider, narrow concrete for most of the way and a planted strip with
trees through the shops and south of them. The model had the lanes but no divider.

- `MOO_BEAU` in `app.html` holds the divider as runs of `[x, z, width, planted]` every 3 m; `townBowls` draws it as a kerb 0.16 m high,
  concrete or planted on top, with a white edge line on the road each side and a rounded nose at each end. About 1.8 km, 650 m planted.
- It was found by inference (`tools/ground/beau_median/`, see the infer-ground-plan skill): `find_median.py` reads a cross-section of the
  photograph every metre along each mapped carriageway and keeps light or green strips with road on both sides, averaged 7 m along so
  dashed lane lines drop out, tracked as one steady line per carriageway; `design2.py` places the divider midway between the two mapped
  carriageways (the map has the road as two one-way halves for most of its length), moved onto what the photograph shows (at most 1.5 m),
  open at side streets unless the photograph shows it carrying on; `refine.py` centres it on the strip and reads its width and planting;
  `smooth.py` smooths each run (a jog goes, a bend stays). `aerial.py` fetches and caches the photograph blocks.
- From Ipswich Road to about Evans Road only. Further south (Rocklea) the layout changes (wide grassed reserves between the two
  halves, an overpass) and the photograph doesn't give a clear line, so nothing is drawn there. Where the two halves run more than 16 m
  apart the ground between them is already the divider.

## Houses back on their own ground (21 November 2026)

Ash: "Change of plans just revert the lifting of houses out of the ground, it stuffed too many houses up". In `moorooka-model.js`
(`?v=56`) a building's floor is back where it was before "houses on their highest ground": the ground at its middle, kept between its
lowest and highest corner, plus 0.1 m.

Then (Ash: "I want to go back to like before the houses were moved up", `?v=57`) what came with the lift went too: the stairs,
landing, rail and garage door at a raised front door, and the closed-in lower level and base band under a raised floor. A front door has
its small step again, as before. Kept: window hoods left off beside shop signs, and `gone` in `MOO_STYLE`. The Willow's steps go up to
the bar's floor worked out the same way, and the "Houses on hills" entry is out of the new-features list.

## Beaudesert Road's median, drawn from the real one (21 November 2026)

Ash, of the divider above: "I want you to fix Beaudesert rd, there is a divider in the middle, looks terrible". Three things were wrong
with it, and all three are fixed.

- **It wandered and changed width every few metres.** It was found by sorting the photograph's pixels into road and not road, which
  tree shadows, cars and painted lines throw off. It is now read off the photograph by eye. `tools/ground/beau_median/` straightens the
  2022 aerial photograph along the road's centre line (`mid.py`, `strip.py`), so the median is a band running across a sheet with the
  station along the top and the offset down the side (`sheets.py`); each island's two edges, what it is made of and the trees on it are
  written down in `real.py`; `overlay.py` draws that back over the photograph to check it. Twelve islands, 2.2 km, from Ipswich Road to
  the overpass south of Evans Road (the first try stopped at Evans Road): concrete in the north, garden beds of clipped shrubs through
  the shops, lawn with street trees and the big trees further south, and the real gaps at the side streets that have one.
- **The road covered parts of it, on a computer.** Explore opens on a light model and swaps in the sharp one (`townModelPair`). The two
  have ground that differs by up to 0.3 m between its points (the sharp one has a height every 5 m, the light one every 10 m), and a
  part made on the first is handed to the second as it is. So a median 0.15 m high was under the road for stretches and stood clear of
  it for others, with jagged ends. The two medians (this one and Ipswich Road's) are now a part of their own inside `townBowls`
  (`medians()`), made again on the new ground when the models swap (`T.bowls.swapped()`, called at the end of `swapTo`), and only if the
  ground did change: on a phone both models have the same ground, so nothing is made twice there (checked at phone size: no second
  make). The ground is also read every 2.5 m along both edges and down the middle, not every 3 m down the centre line.
- **The model's own traffic ran too close to it.** On a one-way carriageway the cars' two lanes were counted out from the carriageway's
  median edge, which put the inner lane 0.6 m from the middle of the road where the two halves are close, and the kerb lane's cars
  along the dashed line. `moorooka-model.js` (`?v=58`, `addTraffic`) now puts the lanes 1.7 m either side of the carriageway's dashed
  centre line (the bus 1.35 m, clear of parked cars, which stand at least 2.9 m out). `design.py` then keeps each island clear of
  where the cars run (2.58 m in from each carriageway's line, and 0.3 m more): where the real island is wider it is cut back, and
  where a turn pocket has pushed it right over to one side a strip of it is kept against that side. Most of it is drawn as it is.
  (Correction, 22 November 2026: `addTraffic` is never called in `moorooka-model.js`, so the change to it does nothing you can see:
  the model has no moving cars of its own. The cars that drive are the page's, `townTraffic` in `app.html`. See "Moorooka's traffic
  in the middle of its lane" below. The islands are still kept clear of both lanes of each carriageway, which does no harm.)

`MOO_BEAU` in `app.html` is each island as points of `[east edge x, z, west edge x, z, kind]` (0 concrete, 1 garden bed, 2 lawn;
3 striped concrete came later, below),
at most 5 m apart and closer where an edge bends; `MOO_BEAU_TREES` is `[x, z, size]`. `emit.py` writes both from `design.py`'s
output. Drawn: a kerb 0.15 m high with a concrete top, or a concrete kerb strip round a bed of shrubs (a clump to every 2.5 m, of
differing height and green) or lawn; a rounded nose painted white at each end; a white edge line on the road along each side; a trunk
and a faceted crown for each of the 32 trees. Points the ground runs straight through are dropped, so the two medians together are
about 11,700 triangles in one part on a phone; 18 KB in `app.html`; about 30 ms to make on a slow test machine at phone size.

To change it: `python3 mid.py`, `python3 strip.py` (fetches the photograph), `python3 sheets.py sheet`, edit `real.py`,
`python3 design.py design.json`, `python3 overlay.py ov.json design.json` and `python3 sheets.py check ov.json` to look, then
`python3 emit.py design.json ../../../app.html`.

Not done: the stretch south of the overpass. (The painted stripes, the turn lanes and their arrows came on 22 November: see "Beaudesert
Road's median: the striped islands and the turn lanes" below.)

## The Bohain Street corner, the median's planted north end, a footpath in pieces (22 November 2026)

Ash, 21 November 2026, with two pictures from his iPhone: of where Bohain Street meets Beaudesert Road, "Fix this up" (the island
between Bohain Street's two arms a ragged patch of lawn, kerbs standing in the asphalt), and of the east side of Beaudesert Road north
of Wharton Street, "Also this on Beaudesert rd" (the footpath as three blobs with lawn between them).

- **The island** is drawn from the real one, like the median: `tools/ground/beau_corner/shapes.py` is its kerb line, the footpath
  across it, the landing where the crossing from Beaudesert Road comes in and its concrete nose, read off the 2022 aerial photograph
  enlarged to 2.5 cm a pixel (`zoom.py`) and checked by drawing them back over it. `corner.py` makes a mesh of it for `app.html`
  (`MOO_CORNER`): a kerb edge 0.22 m wide, concrete and garden bed as triangles on shared points no more than 2 m apart, the walls round
  it, 46 shrubs in the beds, the white lines painted round it out to its painted noses, and the give way line across the south arm.
  `townBowls` (`medians()`) lifts every point onto the ground of the model that is showing, so it is made again with the medians when
  the light and sharp models swap. The 15 November island (16 strokes of lawn and concrete in `edits.json`, which only showed close up)
  is gone.
- **The ground plan round it** (`surface/2_6` and `3_6`): asphalt up to the island's kerb for 3 m round it, bed and concrete inside
  (the plan had the island's north part only, and too small).
- **The model's kerbs on the island's sides** followed the mapped arms, 4.6 m wide where the real ones are about 6 m, so they stood up
  to 2 m out in the road. The 15 kerb points on or within 2.6 m of the island are left out (14 more cells in `kerbOff`); the island's
  own kerb takes their place. Checked by dumping the model's kerbs again: nothing else changed and no new corner was made. The kerbs
  on the park side and the south side follow the plan's asphalt edge and are left as they were.
- **The planted island at the north end of the median** (at the Ipswich Road lights, 30 m long, a garden bed with a paved strip
  down its west side) was missing: the median began at its south tip with a painted nose. It is in `MOO_CORNER` too (42 shrubs), and
  runs on into the concrete median: `MOO_CORNER.j` is where, and the median's first island has no nose there. If the median is made
  again (`beau_median/emit.py`) and its first point moves, run `corner.py` again: it reads that point from `app.html`.
- **The footpath** (`tools/ground/beau_corner/footpath.py`, `surface/3_6` and `4_6`): the photograph has that stretch under trees, so
  the plan had the path in pieces. From 50 m north of the gap to where the path meets the kerb near Wharton Street it is one even
  strip 1.4 m wide, 10.45 m from the road's centre line, which is where the pieces either side already lay; 24 m2 changed. The road's
  own edge there is about 2 m short of the real kerb, as the street data has it, and was left.
- **A second gap of the same kind**, found by measuring both footpaths every metre for stretches with no concrete: the west side for
  6 m north of Durack Street (also under a tree in the photograph), now one strip from the driveway north of it to the corner
  (`surface/5_6`, 16 m2). That check only finds a path that stops altogether for 3 m or more, away from a side street or a driveway:
  a path in pieces with smaller breaks would not show in it, so there may be others.
- Three triangles had been drawn with no normal (a point repeated in a four-sided face): the median's painted noses, its trees' crowns
  and now the shrubs use a triangle of their own (`tri`), lit the way they face.

Cost: `MOO_CORNER` is 26 KB in `app.html` (545 points, 891 triangles, 88 shrubs); the medians and the corner together are about
13,600 triangles in one part on a phone and take about 50 ms to make on a slow test machine.

To change the corner: edit `shapes.py`, `python3 zoom.py` to look, then `python3 corner.py ../../../app.html --kerbs KERBS.json --write`
(KERBS.json: `window.anKerbDump = []` set before the model loads, saved after; without it no kerbs are left out); `look.py` saves it from a local
build, see "The Bohain Street junction's outer sides" below).

Not done: the far-off ground picture (`ground.webp` and the 16 detail tiles) still has the old corner under the new island, which
covers it; the island's painted chevrons.

## People on the footpaths, round the corners, never onto roads (22 November 2026)

Ash: "Fix up footpaths throughout moorooka. They make sure people walk around them properly. Right now they walk onto roads and
disappear". Each of the model's walkers (the strollers, 30 on a computer and 14 on a phone) walked one side of one road end to end
and back, along a line set out from the road's centre. At the road's ends that line ran across the street it met, and every frame
anyone within 1.7 m of a road's edge, or inside a building, simply wasn't drawn: so people stepped off the footpath at each corner and
vanished, and about one in three was hidden at any moment. The shops' sides of Beaudesert Road had no walk at all (the ground plan has
no footpath band there, the shops being paved to the wall).

Now (`moorooka-model.js` `?v=59`, patched by `tools/walkers/footpath_net_patch.py`, which says how) the footpaths are a network:

- Each footpath line is cut where it meets a road, a building or water, leaving pieces of real footpath; where it runs into a shop it
  is drawn in towards the kerb instead. A main road's side with no footpath band (the shops) gets a line 1.6 m from the kerb.
- Each piece's end is joined round the corner to the next footpath when the join stays clear of every road and building, so people
  walk round the block. Nobody crosses a road; at a dead end they turn back.
- It is built a little at a time near the view, about 40 checks of the ground a frame, nearest first (a few seconds to fill in round
  you); nobody is hidden for being near a road any more, so that check each frame is gone. Measured the same way, the walkers' work
  a frame is a little lower than before on average.
- `walkNet()` gives the network to the page, and the walkers on the busy streets (`townWalkers`, the shops and the Magic Mile) use it
  too, so they stop at the kerb instead of walking out into the junction.

Measured (`t/walk.js` in a local build, six places, 90 s): people drawn went from about 21 of 30 to about 28 of 30 (the rest are being
put back near you), and none of the 4,000 places they were drawn at was on a road, nor any of the busy-street walkers'.

## Beaudesert Road's median: the striped islands and the turn lanes (22 November 2026)

The two things left over from the median above ("Not done"). Ash: "Continue".

- **Striped islands.** Four stretches of the median are not planted and not plain concrete in the photograph: they are painted with
  bars (from south of Colebrook Avenue past Wharton Street, from Helles Street to Durack Street, from Pampas Street past Wall Street,
  and south of Evans Road). `real.py` now has a fourth kind for them (`'s'`, written to `MOO_BEAU` as kind 3), and the app draws their tops as concrete
  with dark bars 1.3 m wide and 1.3 m apart, slanted across the island, running on unbroken from one stretch of it to the next. They
  are drawn on the same 0.15 m island as the rest: from above the photograph does not say whether the real ones are raised.
- **Turn lanes.** The right-turn lanes beside the median had no paint. `real.py` now lists what is in the photograph: 29 turn arrows
  (`ARROWS`, as station, offset, which way it travels and which side it turns to) and 24 lines between a turn lane and the through
  lane (`LINES`, dashed or solid). `design.py` keeps an arrow only where the model's traffic leaves room for it (all 29 are kept) and
  holds a line to the edge of that room, then `emit.py` writes them as `MOO_BEAU_MARKS`: `arrows` as `[x, z, the way it travels (x, z),
  the side it turns to (x, z)]`, `lines` as `[dashed, [x, z, ...]]`. The app paints them on the road 0.05 m up, like the median's edge
  lines: an arrow is a 4 m shaft, a turn and a head; a dashed line is the first metre from each point (the points are 3 m apart).
  `overlay.py` draws them over the photograph with the rest (`sheets.py check`).

Cost: `MOO_BEAU_MARKS` is 5 KB in `app.html`. The medians, the corner and the paint are one part of about 15,100 triangles on a phone
(13,600 before) and take about 40 ms to make on a slow test machine; nothing is made mid-game.

Checked on a local build at desktop size, and three of the views at phone size: the four striped stretches, and the turn lanes at
Vendale Avenue, Durack and Pampas Streets, Mayfield Road, Dora and Bracken Streets, Gainsborough Street, Keats Street, Hamilton Road,
Fegen Drive and Evans Road, each looked at the way its traffic comes.

Found while testing, not fixed here (it is on `main` already and no part of this change): **in Moorooka the sharp model shows before
the swap.** `townModelPair` builds the sharp model "out of sight" by tagging `box.lastElementChild` after `lib.create` and setting
`visibility: hidden` on that. Moorooka's model appends two elements, its root (`div.inv-embed`, with the canvas) and then a
`p.inv-sharpening`, so the tag and the hiding land on the `p`, and the sharp model's canvas sits in view over the light one from its
first frame. So where the sharp model is swapped in, there is a stretch with none of what the page adds with `addParts` (the medians,
the corner, the bowls club and the rest), then the medians ragged (the copy shaped to the light model's ground, on the sharp ground),
then, once the swap ends and `swapped()` runs, right. Seen in headless Chrome with the swap held open for 45 s in a test copy of the
page, on this build and on `ffda7a8`; how long it lasts on a real computer was not measured. Logan's and Inverloch's models add no
second element. The swap is Explore's loading, so it is left for its own pull request and its own stick test.

Not done: the Bohain Street island's painted chevrons; the stretch south of the overpass; the far-off ground picture under the corner.

## People off the traffic islands, spread out (22 November 2026)

Ash: "The people need new logic, the they are stuck on traffic islands all together near 6 Beaudesert". The shops' walk (a main road's
side with no footpath band) also put a walk on a divided road's inner side; where the median is wide (the planted island at the
Ipswich Road end) a piece of it survived, it was the first piece built at the start, and all 30 people were put on it at once.

`moorooka-model.js` `?v=60`, by `tools/walkers/footpath_net_patch2.py` (after `footpath_net_patch.py`):

- a piece with a road on its far side as well (looked for 2 to 10 m out, every 6 m along) is an island or median and is dropped, and
  so is any piece under about 10 m;
- people are only put on a piece that joins another footpath (or a dead-end street's, 40 m or more), at most one for each 25 m of it,
  so they appear round you over the first seconds and spread out; anyone left on a short piece joined to nothing is moved;
- a join round a wide corner can be up to 20 m across.

Measured (`t/walk.js`, six places, the network filling at a phone's speed): people with someone else within 3 m went from 67% to 10%,
and the median distance to the nearest other person from 1.7 m to 15.7 m; none on a road.

## Houses set on their slope, part 1 (22 November 2026)

Ash: "a lot of the houses are in the ground. If they are I want you to rebuild them in low res. To do this you'll need to use google maps
in addition to satitile. Once done you'll need to fix any paths, fences, trees and cars so that they make sense inside the app ... iterate
pushing 100 at a time. The idea here is to make the houses like the real thing but in low res."

**Why they were in the ground.** A building's floor is the ground at its middle, so on a slope the uphill walls stand in the dirt. Counted
the way the model draws them (`tools/houses/pick_sunk.py`): 2,028 houses have ground half a metre or more above their lowest floor with
windows (1,202 inside Moorooka), 813 by a metre or more. Lifting every house on to its highest ground was tried on 21 November and taken
back the same day (tall blank bases, huge stairs, doors in the air).

**What is done instead, per house.** Only the houses listed in `MOO_SET` (`app.html`) change. The model rebuilds each the way Brisbane's
hillside houses are built (`moorooka-model.js ?v=63` once merged with the balcony hook, patched by `tools/houses/set_on_slope.py`, which says how):

- the roof stays where the survey has it, the floor is one storey under the eave and never below the uphill ground;
- under the floor, down the slope: a closed-in lower level (masonry, small windows, a garage door where the ground plan's drive meets
  the house) when it stands 2.15 m or more out of the ground, otherwise stumps behind dark battens;
- the front door is at the floor with a landing and open-tread stairs: straight out for a rise up to 1.75 m, along the wall above
  that, and at the lower level when the floor is more than 3.1 m up; a concrete pad joins the foot of the stairs to where the path
  meets the house;
- the roof's form (hip, gable, flat or a low skillion) is the one seen on the Queensland 10 cm aerial photo, looked at house by house.

**Part 1:** the 100 most sunk houses inside Moorooka (1.65 to 3.56 m of wall in the ground). 99 have a closed-in lower level and one is
on stumps; 51 got stairs (21 straight, 30 along the wall), 17 a garage door; 9 have no wall facing a street and so no door, as before.
`tools/houses/clear_fronts.py` then moved 5 trees off the new stairs and pads and took out 1 parked car, 4 fence runs and 6 backyard
things that stood on them.

**Not from Street View yet.** No browser could be reached from the chat that did this (the desktop app's browser can't be added to a chat
already under way, and Chrome's extension wasn't connected), so wall colours, what is really under each house and where its stairs run
are by rule, not looked up. `MOO_SET` has a place for them (`{ w, b, e }`), and a house Street View shows differently can be corrected
there.

**Lag.** Download: about 2.5 KB more in `app.html`. Drawing: 5,446 more triangles for the 100 houses (0.4% of the suburb's 1.31 million
building triangles), in the building pieces that are already there, so no new draw calls; about 0.65 MB on the graphics card. Seen from
far off (the plain pieces) a rebuilt house is the same single ring of walls as before. All 2,028 done the same way would be about 8% more
building triangles.

**How to do the next 100:** `pick_sunk.py <repo> 100 picks.json` (it leaves out what is already in `MOO_SET`), look at each on the
aerial for its roof, `add_set.py app.html picks.json <roofs> "<note>"`, rebuild, save what `window.anSetRec` is told, then
`clear_fronts.py ... --write`.

### Part 2 of the houses set on their slope (22 November 2026)

- The next 100 inside Moorooka (1.37 to 1.65 m of wall in the ground), 200 so far; 1,828 left at half a metre or more (1,002 inside
  Moorooka). Same pipeline as part 1; roofs again from the aerial photo, house by house. Across the 200: 192 with a closed-in lower
  level and 8 on stumps, 119 with stairs (55 straight, 64 along the wall), 33 garage doors, 14 with no wall facing a street.
- `pick_sunk.py` only left out the first house on each line of `MOO_SET` as already done; it now leaves out all of them (found before
  anything was built from it).

## GPS: directions to an address (22 November 2026)

Ash: "Can you add a gps in the game to navigate to an address?"

- **Opening it:** the GPS button in the top row, by Time and Flood (I on a keyboard); it lights up while it's showing the way. (It was
  in Jump to until 22 November 2026, Ash: "Move gps out of jump to so users can find it more easily".) Type an address or a place. Moorooka and Logan look addresses up with
  the Queensland Government's address finder (`QldLocator` suggest, then `findAddressCandidates`); Inverloch uses OpenStreetMap's
  Nominatim, which has few house numbers there. Places on the map and street names (the middle of the street) are matched on the
  device too, so a street still comes up when the finder has nothing.
- **Places to go, before you type** (Ash, 23 November 2026: "On gps if I click it use a big model to show me suggested places I can
  travel to"): the GPS box opens big with a list, nearest first with how far: in Moorooka, Home (6 Beaudesert Road, Ash only), Places to eat (`MOO_FOOD`), Shops (`MOO_FRONTS`), On the map (Jump to's places) and, last, People to see (the locals you can talk to;
  Ash, 23 November 2026: "Move the people down in priority"); in Logan and
  Inverloch, the places on the map. Typing searches as before; clearing the box brings the list back.
- **Local first** (Ash, 23 November 2026: "With the gps try to prioritise moorooka address and places rather than everything"): the
  address finder is asked only for addresses inside the map (`searchExtent`, the streets' bounds, or 4 km round you before they're
  ready), so "12 Mayfield" no longer offers Nambour. In Moorooka the suggestions also take in the shopfronts in the model
  (`MOO_FRONTS`) and the places to eat (`MOO_FOOD`), by name or by what they are ("pizza", "bakery"), the same spot from two lists
  shown once. The GPS's map-to-latitude sum had its sign the wrong way round, which put Moorooka near Nambour and Inverloch in the
  tropics for the finder: fixed, so Inverloch's OpenStreetMap lookups find Inverloch again.
- **The route:** only streets you can drive on (Ash, 22 November 2026: "The gps goes through houses. Stick to the roads"): no
  footpaths or laneways between houses, bush tracks, or unnamed driveways and car park aisles (classes 0 to 3 and named class 4 in
  Moorooka and Inverloch; 0 to 4 and named 5 in Logan). Shortest way by Dijkstra. A street that stops short of another, or meets it
  between two of its points, is joined to the nearest point on that street's line within 12 m, or up to 25 m where the join is
  clear of buildings (`townStreetBlocks`); never further, so a dead end is never joined to the street behind the houses.
- **The ends:** the blue line starts on the street beside you and ends on the place's own street (the street named in the address,
  when it's within 150 m), at the point nearest the place. The red pin stands on the place itself, so no line crosses a yard.
- **Which side of the road** (Ash, 23 November 2026: "The gps navigates me often down the wrong side of the road"): the line runs
  down the left lane, not the middle of the street, as far left of the street's line as the traffic drives (`townLaneOf`, shared
  with the traffic: 1.75 m on a two-way street, the left lane of a one-way carriageway, a bit less on narrow streets; 1.9 m in Logan,
  which has no widths). Where a building's outline is mapped over the lane (Wall Street, Giardini Lane, Carson Street) the line eases
  back toward the middle, using the same building check as the joins. Getting in or out of a car works the route out again, since
  driving keeps to one-way carriageways and walking doesn't. Logan's map doesn't say which roads are one-way, so there a divided road's
  two halves both count as two-way.
- **The top on a phone** (Ash, 23 November 2026: "Lay out the top buttons a bit nicer", and "Move new into settings admin only"): under
  1000 px wide, even rows 46 px apart, everything 38 px tall on the 16 px edges: settings, share, mode and Jump to; the speed beside
  the street names, GPS and Flood; the upgrade badge and the red pointer (the doctor, a helicopter); then the GPS card as wide as the
  rows. Ash's yellow New button is gone from the top: Settings has "See what's new", which opens Jump to at the New list.
- **On a phone** (Ash, 23 November 2026: "Consider layout on iPhone"): under 1000 px wide the card (and the race card) sits below the
  upgrade badge and the New button instead of over them, and shows the address without its suburb so it fits.
- **The card:** the next turn ("Turn left onto Beaudesert Road"), how far to it and how far to go, and an arrow that points the way
  from where you're facing. Straight on to a street with no name says nothing. Off the route by 35 m for 1.5 s (once you've been on it) and it
  works the route out again. Within 15 m of the pin (or 12 m left on the route) it says you've arrived and clears the line.
- **Autodrive** (Ash, 23 November 2026: "When I type in the address allow standard or autodrive to drive me there automatically. Drive
  like a hoon to get there"): the GPS box has **You drive** and **Autodrive**, remembered for next time (`an3d-gps-how`). With
  Autodrive, if you're on foot it gets you into the nearest car within 300 m (else it says so and just shows the way), then the car
  drives itself along the blue line (`C.drivePath` in `townCar`, the same self-drive as click to drive and Drive for me) like a hoon:
  flat out to the car's own top speed, Boost down clear straights, braking late and hard (8.5 m/s every second) for each corner it
  sees up to 90 m ahead, a third of a second of handbrake to swing round sharp corners taken quick, and a skid to a stop at the end.
  The speed chip says "Autodrive". The Drive stick (or any driving key, the handbrake or Boost) takes the wheel back, and the line
  stays to follow; the Look stick doesn't. × on the card stops the GPS and the car. Once you've taken the wheel, an **Autodrive** button shows
  on the card (Ash, 23 November 2026: "With autodrive, if I take over manual control, show a btn to resume autodrive"): a tap and
  the car carries on along the line from where you are on it.
- **Arriving** (Ash, 23 November 2026: "allow an extra 20 second allowance before ending the gps"): the card says "You've arrived at
  ..." and counts down 20 seconds before the GPS clears; drive off more than 40 m in that time and it carries on showing the way.
  At the end of Autodrive the car, once stopped, turns round on the spot to face the place (`C.faceTo`; "face my destination even if
  it means rotating the car in an abnormal way"). The stick or a driving key calls the turn off. Off the line by 35 m, it works the way out again
  and carries on. In the tests: 771 m in 33 s and 2.3 km in 85 s in Moorooka, 951 m in 36 s in Inverloch, up to 118 km/h, never
  more than 2.4 m off the line once on it.
- **Lag:** the network is built once, the first time the GPS is opened. Each frame only looks along the next 80 points of the route,
  and the card is updated at most a few times a second. No fetching mid-game except the address lookups you type.
- **Code:** `townGps` in `app.html` (`T.gps`); can be turned off with `OFF` key `gps`.

## Driving without being a gamer: click to drive, and Drive for me (22 November 2026)

Ash: "How do pc controls work when driving using the google maps style atm. I'm trying to cater to both people used to pc games as well
as not", then "Give it a shot, don't change the normal keys", then "Try to make simple keys for people to be able to drive without being
a gamer. These keys just for google maps style. If the keys don't interfere with each other you can also put into the gamer mode".

With Google Maps controls, driving still needed W A S D or the arrows, and the tutorial that says "F, then E" is hidden for that style.
Now, in `app.html` (all three towns):

- **A click on a car in the map view gets you into it** (Google Maps controls, on a computer). The mouse turns to a hand over a car,
  with "Click to get in". A click, not a drag: under 6 px and under 0.8 s, timed by the events' own time stamps (a slow frame between
  press and release must not turn a click into a drag). `mapClick` beside the map view's gestures; `C.carNear` and `C.enterCar` in
  `townCar` (the app's own cars, the traffic, and the model's parked cars). You arrive seen from behind the car.
- **A click on the road while you're in a car and it drives there** (`C.clickDrive`, `C.driveTo`). A blue ring and pin mark the spot.
  From the map view, with your car waiting (F), a click anywhere sends it there. Where on the ground a click lands: `townClickAt`.
- **Driving with only the mouse** (Ash, 23 November 2026: "If on Google map controls. I want a person on desktop to be able to control a
  car using only the mouse"): in a car, Google Maps style, on a computer, **hold the left button** to drive and move the mouse left or
  right of where you pressed to steer (full lock at 160 px); **hold the right button** to brake, then reverse. It works the stick
  (`F.stick`), so it takes the wheel back from Drive for me and Autodrive like the stick does. A hold starts after 0.18 s or 6 px of
  movement, so a quick click still drives you to the spot. While driving this way the mouse doesn't look round (the view follows the
  car). Mouse events only (`F.mouseCar`, `mdGo`, `mdSteer`); touch is unchanged.
- **Drive for me (G)**: the car sets off along the street it is on and follows it; G again stops it. **< and >** ask for the next left
  and the next right. Three buttons under Get out carry the same keys with Google Maps controls (the mouse is free to click them
  there); with the gamer's controls the keys work too and are listed bottom left. G was free in a car (it is the possum's Plant only
  while you're the possum), and the comma and full stop keys did nothing.
- **How it drives.** The streets are the traffic's list (`T.roadsAll`: nothing is fetched). `autoNet` joins up the streets within 700 m
  into a network the first time (7 to 11 ms in the test browser), with loose street ends joined to the street they stop short of (within 8 m always; up to
  35 m only where the end points at what it would join and no building is between, which is how Logan's missing roundabouts are
  crossed). `autoRoute` is the shortest way through it (A*), one-way carriageways only the way they run unless there is no other way.
  It keeps to the same left lane as the traffic, slows for bends (down to 15 km/h), drives at up to 50 km/h and stops on the spot. A
  spot off the street (a car park) gets a last straight bit only if no building is in the way. Run into something, it backs off and
  tries again, four times, then hands the car back with a message.
- **Corners, roundabouts and dead ends** (`cruiseOn`): straight on is the street that bends least. A turn asked for is taken at the
  first corner with a street off to that side by 35 to 135 degrees, and a bend in the same street does not count. At a roundabout it
  looks right round for every exit first and leaves by the one that suits the way it came in. At a dead end it turns round. For the
  roundabouts, `townStreetData` now passes on the street list's roundabout flag (`ring`, the second flag bit: 13 in Moorooka, 7 in
  Inverloch, run one way the way their points go).
- **Nothing about the normal keys changes.** W A S D, the arrows, the scroll wheel, the stick, the handbrake and the Boost button take
  the car straight back. Shift alone does not (and does not boost while it drives itself), because < and > are often typed with Shift.
- **Not on a phone**: the buttons and the clicks are for a mouse, and no touch listener is added or changed.

Tested in headless Chrome at 1280 by 800, the game's own loop run on by hand: clicking a car from the map (and that a drag does not),
clicking the road 25, 45 and 90 m ahead (it stops within 2 to 3 m, the lane's width), trips of 300 to 800 m in Moorooka, Logan and
Inverloch with no sudden stops on the street, a Moorooka roundabout straight on, left and right, W and Space taking the car back,
Shift not, and G, < and > with both styles. The two-finger stick test from CLAUDE.md at phone size in all three towns, at the start
and after two minutes running. Other players were switched off for the later tests (`an3d-off`), after the first few runs joined the
live game as a player called Tester.

## A spot check of Moorooka: parked cars out in the lane (22 November 2026)

Ash: "Spot check for mistakes through the app with paths, roads, trees, houses. Fix what you find".

- **Looked at:** twelve streets spread across the model from 6.5 m up (a local build, 1280 x 800), and the other main roads (Ipswich,
  Fairfield, Evans and Tarragindi Roads, Muriel Avenue).
- **Counted from the town data:** every parked car against its nearest street, and every tree against every street.
  - Trees: none of the 27,833 stands on a street (more than 0.4 m inside its edge). Nothing to fix.
  - Parked cars: all 2,038 on a street are parallel to it, and nearly all stand 0.9 to 1.3 m in from its edge. **25 stood 1.85 to
    2.6 m in**, which is out in the traffic lane beside the centre line. That is the one mistake found.
- **Fixed:** `tools/ground/cars_kerb.py` moves each of those square across to 1.1 m from the street's edge when no other car is
  within 5.4 m of the spot (it tries 6 and 12 m either way along the street as well). 24 moved, by 1.5 m at most; one has a car
  beside it at the kerb and is left. Only `cars` in `town.json` changes (24 positions; no headings, colours or counts), and none of
  the 24 is named by its place in `edits.json` or `app.html`. `town.json` is fetched with no version on its address, so it can be ten
  minutes before a browser sees it.
- **Seen and not changed:** Evans Road has no centre line where it was looked at; Fairfield Road's two carriageways have no island
  between them; Ipswich Road's median is a plain strip of lawn with no turn lanes painted. Each is a road to do properly from the
  aerial photograph, as Beaudesert Road was.

## Moorooka's shops checked against Google Maps again (22 November 2026)

Ash: "look at the shops in moorooka. Check against google maps for accuracy and improve model using low res". 110 places that Google
Maps lists in Moorooka were looked up (the shopping strip address by address, then the Magic Mile, the servos, the workshops and the
back streets by kind) and each name compared with the names in `MOO_FRONTS`.

- **In the model already:** all but eight. The strip's shops, the two arcades' tenant boards, the shopping centre, the car yards and
  the workshops agree with Google Maps by name and address.
- **Changed** (words only, nothing drawn): the tobacconist at 173 is Cigar Heaven (its tag says so now; the sign still reads
  TOBACCONIST), and the Rannchhod Arcade's tag names K:B Barbershop and Anina Dubai as well.
- **On Google Maps and not in the model** (not added: each needs its wall worked out from the lot survey, which `tools/ground/shops.py`
  does with `shapely`, and that could not be installed in this session): Bugsy's Fish & Chips, 293 Beaudesert Road; Auto Masters,
  1115 Ipswich Road (the Starbucks address); Umdorman Cafe, 173 Beaudesert Road (which shopfront is not known); Dufanda, a barber in
  the arcade at 197.
- **Not settled:**
  - Yeshi Buna, 1/131 Beaudesert Road. Taken out on 21 November as closed for good. Google's places data still lists it (472 reviews,
    no opening hours), and a booking site shows hours for it. Left out; Ash would know.
  - The Cleo Collective is drawn at 2/116 from Ash's photos of the pharmacy row. Google Maps has "Cleo Hairdressing" at 49 Beaudesert
    Road (Colebrook Corner). Left where the photos have it.
  - "DINDER GIFTWARE" at 205 was read off Street View. Google Maps lists "Austra Giftware" at 5/207 and no Dinder Giftware. Left.

## Moorooka's traffic in the middle of its lane (22 November 2026)

Ash: "Improve how cars drive (left)". The cars that drive themselves (and the bus) are the page's (`townTraffic`): they follow a
street's line, set off to the left of it by `lane`. They were on the left, but too far over.

- **What was wrong.** `lane` was a quarter of the street's width whatever the street. On Beaudesert Road's 9.6 m carriageways that is
  2.4 m left of the dashed line, where the left lane's middle is 1.7 m: the cars ran with their left wheels in the parking lane, hard
  against the kerb at the wide junctions. On a two-way street with parking it put them along the parked cars.
- **Now** (`laneOf`): a car runs down the middle of its lane, where the model paints the lanes (3.4 m wide, counted the way the model
  counts them). On a one-way carriageway that is the left lane of its two or three (1.7 or 3.4 m left of its line), or down the line
  itself where there is one lane (the roundabouts and slip lanes). On a two-way street it is 1.75 m left of the centre line, or the
  middle of its half on a narrow one. A town whose streets have no widths (Logan) keeps what it had.
- **Corners.** A car's place across the road now moves over to the next street's lane at 1.5 m a second (`C.ln`); it used to jump
  across at the corner where the two streets' lanes differed.
- **Dead ends.** A car that reaches one with nobody within 150 m starts again somewhere else. Turning round there is a spin on the
  spot onto the other side of the street; it still does that when you are near or riding in it, so a car never vanishes in front of you.

Checked on a local build: each car photographed from behind on Beaudesert Road, round Mayfield Road and at two roundabouts; and 70
seconds of every car's position recorded four times a second (`left of its line` 1.70 m on the two-lane carriageways, 1.75 m on
two-way streets, 0 on single lanes; no jump from one sample to the next; none within 1.6 m of a parked car's middle, where one was
before). Not done: cars still turn across a divided road wherever the map joins the streets, and they do not use the turn lanes.

## Moorooka's drone waits inside number 6 (22 November 2026)

Ash: "move the drone into inside my house in moorooka". The drone and its remote were at a random spot on the grass (an oval, Stimpson
Park, the field off School Road).

- **Where they are now.** The drone sits on a rug in the front room of 6 Beaudesert Road. Its remote lies on the grass beside the front
  path (`TOWN_RIDES.moo.drone.at`), because you can't walk into the house: the model's houses are solid, with painted doors. Pick the
  remote up there and the view goes to the drone, from behind it, with the open front door ahead. Push forward and it flies out of the
  door, up over the landing's rail and out over the front lawn. It can fly back in through the door the same way.
- **The room** (`townRoom6`, `T.room6`): one small unlit part drawn inside the model's house, about 180 triangles: floorboards, walls,
  ceiling, the door and the two front windows painted as daylight, a rug, a couch and a television, a table and stools, a kitchen
  bench, Arlo's bed. It is made up: there are no photos of the inside. Its walls stand 0.62 m inside the lot survey's outline
  (`MOO_NO6.sixHouse`), because the model draws the house's walls 0.3 to 0.5 m inside that outline and the room showed through them
  at 0.14 m. The door (8.5 to 9.37 m along the front wall from its south end, 2.1 m high) and the floor (the eave less 2.75 m) were
  measured off the model's own front with marker lines.
- **How the drone is let through.** Everything else in Explore stands on `surf()`, which is the roof over a building. The drone asks
  `T.room6.floorAt(x, z, y)` first (`dsurf`): the floor under a point in the room, in the doorway or on the landing, null anywhere
  else or above the ceiling, so the roof is still a roof for the possum, the pigeon and a drone coming down on it. `ceilAt` keeps it
  under the ceiling and under the door's lintel. In line with the door the floor rises to the height of the rail by the time the
  drone is over it. The doorway is 0.2 m wider each side than the painted door, so it is not fiddly on a phone.
- **The view.** Indoors it stays in the room (`floorAt` of where the view would be), and comes right up behind the drone as the drone
  reaches the door (`near`), so the drone is not lost behind the wall on its way out. Once it is out, the view is kept out of the
  house too (`inHouse`).

Tested on a local build at desktop and phone sizes (`scripts`-style Playwright run: stand by the remote, pick it up, hold forward):
the drone goes from the rug out through the door without stopping, rises to 1.15 m over the landing and carries on over the lawn;
putting the remote down lands it where it is. Not done: you still can't walk into the house, and the other towns' drones are as
they were.

## Number 6's balcony concept, in Moorooka (22 November 2026)

Ash: "Merge the balcony concept into the moorooka game. Allow me to press a button on the house to change from how it is to the
balcony model. You'll need to merge the models a bit as neither are perfect."

- **The button:** a post by the foot of the front stairs with a big yellow button on it. You tap the button itself: an invisible
  spot over it (at least 48 px across) is there whenever you're within 30 m on foot, not driving or flying high, and a message says
  what it did. Each tap swaps between the balcony concept and the house as it is. The choice is kept on the device (`an3d-bal6`).
  (It began as a labelled pill over the roof, seen from 70 m. Ash, 22 November 2026: "Make the see the balcony a button in the
  actual game near the front stairs", then "Remove the label for the button".)
- **One house, both ways:** within 300 m, number 6 is drawn by the app (`townBalcony6` in `app.html`, numbers in `MOO_BAL6`), not
  by the model. The model's own house (and its lot's fences, which are in the same piece) is hidden through a hook added to
  `moorooka-model.js` (`?v=62`): the detailed houses' `cull` asks `window.anDetailOff(id)`. Further off, the model's own house shows.
- **What came from where:** the Moorooka model gives the position and size (the survey outline, walls 0.45 m in: about 9.4 by 12 m),
  the floor and eave heights, the roof (gable to the street, sloping to the back), the front (door, two hooded windows, the entrance
  landing, porch roof and stairs along the front wall) and the south side's windows. The balcony page (`balcony/src/main.js`) gives
  the weatherboards, the back and north walls' windows and doors (spread to fit the narrower house), solar on the back of the roof,
  the open slab under the back, and the whole balcony: the rear balcony, the hexagon covered deck with its table and fan, the
  landing, the new stairs down the side, glass balustrades, posts and roofs. The north fence is 4.5 m from the house, as Ash measured.
- **As it is:** the window where the French doors go (with its hood), and the existing steel stairs: a landing outside the back
  door, then down along the back wall towards the north, landing outside the pool fence. Where they run is a guess from the quote
  brief; worth checking against the real thing.
- **Walking:** the house floor, both landings, the decks and all three sets of stairs are surfaces. Explore's `ground` asks
  `T.bal6.top`, which only counts one within 0.8 m of your feet (so you walk under the decks, and up the stairs a step at a
  time). Up on them, `bsBlock` asks `T.bal6.block`, which stops you stepping off except by the stairs, a step back from the glass.
  Under a roof or a deck your eyes come down to fit (`T.bal6.eye`).
- **Lag and load:** nothing to download; built once when Moorooka opens, three sets of a few draw calls each, shown or hidden by
  moving them (no rebuilding mid-game).
- **Tested:** both versions from the back, side, front and the air; walking up the new stairs to the hexagon and into the
  balustrade; the two-finger stick test at phone size in all three towns, and again after two minutes; tapping the button on a phone.

## A race around Moorooka (22 November 2026)

Ash: "Add a race around moorooka, all players are teleported into a starting postion using all standard cars but keep their upgrades".

- **Starting one:** Jump to, then Race around Moorooka, then Start the race. Everyone in town at that moment is sent the start
  (`room.makeAction("race")`, message `["go", id, wait, ids, name]`); each one's place on the grid is their place in the sorted list.
- **The grid:** on Beaudesert Road's southbound carriageway just before the line (a little past Mayfield Road), two by two, 7 m
  between rows. `T.toStart` takes you out of whatever you're in (car, plane, possum, drone, a ride), out of Explore mode, onto your
  feet beside your place, then `T.car.grid` brings one of the model's ordinary parked cars to it and puts you in (never the golden
  car or a bus). Upgrades work as always: they belong to you, not the car. `T.car.wait` holds the car still until Go (looking round
  still works). The countdown is 9 s with others, 6 s on your own (a time trial).
- **The lap:** 4.4 km, south down Beaudesert Road, east along Evans Road, north up Tarragindi Road, west along Mayfield Road and back
  down Beaudesert Road to the line. It is the town's own street lines (`MOO_RACE` in `app.html`, made by `tools/race/course.py`:
  one-way carriageways only the way they run, main roads preferred), so nothing is fetched or worked out when a race starts. A
  yellow dashed line marks it, with a chequered strip and banner at the line.
- **Keeping it honest:** a checkpoint about every 120 m (36 of them), passed within 26 m, in order. Cut a corner and miss one and
  the card says so until you go back. Progress is the checkpoints passed plus how close you are to the next.
- **The card:** your place, the time and how far to go, with an arrow to the next checkpoint; × leaves the race. Each player sends
  where they're up to once a second (`["at", id, metres, finish time]`), so places update as you go. Anyone who never sends (an older
  copy of the app) drops off after 20 s. At the line: your place, your time, and the results so far, filling in as others finish.
- **Lag:** building the line and banner is one part of about 1,600 triangles, once, at the start; each frame does one distance check
  and the card at most five times a second.
- **Code:** `townRace` in `app.html` (`T.race`); `C.wait`, `C.out` and `C.grid` in `townCar`; `T.toStart` in the town's setup;
  `id` on `townRelay`; `myId`, `ids`, `nameOf` and `raceSend` on `townPeers`. Turn off with `OFF` key `race`.

## Evans Road and Fairfield Road: the painted middle (22 November 2026)

Ash: "polish up other streets but avoid using much memory or adding load time. Low res". The map has both roads as two carriageways,
and the model drew each as two strips of asphalt side by side with nothing between: one very wide bare road (Evans Road had no line on
it at all).

- **What is really there.** The aerial photograph was looked at before anything was drawn (an island was nearly put down the middle of
  both, as on Ipswich Road, and that would have been wrong). Fairfield Road is four lanes with a painted middle: two solid lines about
  3 m apart with turn arrows between them, and a small raised island here and there. Evans Road is four lanes with a narrow strip down
  the middle, raised in places.
- **What is drawn.** Two solid white lines down the middle of each (`MOO_CENTRE` in `app.html`: runs of x, z, h, the lines h either
  side of the middle: half of what is between the two strips of asphalt, 0.25 to 1.5 m). 3.2 km of road in 24 runs, 353 points, 6.5 KB.
  They are made by `tools/ground/medians/medians.py --paint` from `town.json`'s roads: one carriageway is walked every 5 m, the
  nearest point of the one going the other way gives the middle, and the lines stop near every place another street meets either
  carriageway and where the two are more than 7.5 m apart. (The same tool without `--paint` gives the runs an island would need.)
- **Cost.** They go in the same part as the medians. A stretch is drawn as one piece for as far as the ground runs straight under it
  (to 3 cm, up to 36 m), so it comes to about 800 triangles: the part is about 15,900 triangles on a phone (15,100 before) and still
  takes 30 to 40 ms to make on a slow test machine. Nothing new is downloaded.

Checked on a local build at desktop size (four stretches) and phone size (two). Not done: the turn arrows in Fairfield Road's painted
middle, its small raised islands, Evans Road's raised strip (it is drawn as paint), a lane line on Evans Road's carriageways (the
model has each as one 6 m lane, and the traffic drives down its middle), and the other roads the map has as two carriageways
(Fernvale, Sherwood, Toohey and Orange Grove Roads, Muriel Avenue, Fairlie Terrace, King Arthur Terrace, Tennyson Memorial Avenue,
and the parts of Ipswich Road with no median yet): each needs a look at the photograph first.

## The places Google Maps had and the model did not (22 November 2026)

Ash: "Add them" (the four from the shops check above). Each was looked into first, and they did not all turn out to be additions.

- **Bugsy's Fish & Chips, 293 Beaudesert Road.** Google Maps has it trading, and its place is inside the building on the corner of
  Keats Street that the model called Star Seafood (fish and chips; the name came from the map's older data). Google Maps has no Star
  Seafood. So it is taken as the same shop under its new name, and the front is renamed (its pole sign, its tag and Jump to), not a
  second fish and chip shop added to the same building. The sign keeps the old sign's blue and white: there is no photo of the new
  one. `MOO_FOOD` (the food list) still says Star Seafood. (The sign was on the wrong wall: put right the same day, see "The three
  places reviewed against Street View" below.)
- **Auto Masters, 1115 Ipswich Road.** It shares the address with Starbucks. Google Maps puts it 1.6 m outside the Starbucks
  building's other side, the one that faces Unwin Street, so it has a sign on that wall and a place in Jump to. This is the best that
  is known, not something seen: the 2022 aerial photograph shows the lot still empty, and its workshop may be a building of its own
  that the model has not got. (It is a building of its own, and the model had it: put right the same day, see "The three places reviewed
  against Street View" below.)
- **Dufanda, a barber in the Rannchhod Arcade (shop 19, 197).** On the arcade's tenant board with K:B Barbershop, which Google Maps
  has at the same shop, and in the arcade's tag. The board has ten lines now and its lettering is a fifth smaller to fit.
- **Umdorman Cafe, 173 Beaudesert Road: not added.** Must Do Brisbane's page for it (1/173, the same phone number as Google's
  listing) says it has permanently closed, and the Street View the row was drawn from has Habos Kitchen, JB Stevenson and the
  tobacconist at 173 and no Umdorman. Google's listing looks to be a leftover.

`tools/ground/shop_wall.py` finds a business's building and the wall that faces its street from `town.json` alone (numpy only; it
gives the same wall as the app has for Starbucks and for 104 Beaudesert Road). `tools/ground/shops.py` does it from the lot survey
and needs `shapely`.

### Street View for the houses set on their slope: started (22 November 2026)

Ash: "Stop no point without google images", then, with Chrome on his PC connected, "start with redo of the 100 you already do".

- Street View opens through Chrome with `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=<nearest point of the street>&heading=<towards the house>&fov=60`.
  Give it ten seconds: at five the picture is still black.
- 12 of part 1's 100 looked at so far; 7 could be read and are in `MOO_SET` (`tools/houses/streetview-part1.json`, written in by
  `tools/houses/apply_sv.py`): wall colour, the colour under the floor, closed in or on stumps, whether the front door is at the lower
  level, and whether there is a garage door (`moorooka-model.js ?v=64` reads `d` and `g`). The other 5 were behind trees, blurred by
  Google or did not draw. 88 of part 1 and all of part 2 are still by rule.
- `streetview-part1.json` lists the houses in the order they were picked (`order`), so the next chat carries on from the 13th.

## The three places reviewed against Street View (22 November 2026)

Ash: "Review those changes you just made. Make sure you use Google maps for images". The changes were the three places in "The
places Google Maps had and the model did not", which went in from Google Maps' pins and listings without a look at a photo. Street
View and the places' own photos on Google Maps (through Chrome) show two of the three were in the wrong spot.

- **Auto Masters was on the wrong building.** It is not in the Starbucks building. It is the bright yellow workshop north of the
  Starbucks car park, on Unwin Street, on the same lot (1115 Ipswich Road), next door to 21 Unwin Street (Street View, September
  2024). Google's pin for the business sits beside the Starbucks building, which is how the sign got there, and the 2022 aerial
  photograph could not show either building: the lot was still empty. The model had the workshop as a grey two-storey house shape
  with windows. Now `MOO_STYLE` makes it a flat-roofed yellow shed about 7 m high with no windows (kind 1), and three `MOO_FRONTS`
  records draw what its three walls show: the corner piece (the office's glass front under the big sign; the name tag and Jump to
  are here), the Unwin Street wall (one workshop bay under a flat awning, a sign by the corner) and the car park wall (two bays
  under an awning, a sign over them), all on a black base. The sign is yellow in a red frame with black letters, as it is. The red
  sign is gone from the Starbucks building.
- **Bugsy's sign was on the wrong wall.** The shop is the end of its building that faces Beaudesert Road, at the corner of Keats
  Street: an open front under a blue awning on blue posts with QUALITY SEAFOOD along its edge, and the name on a blue sign standing
  on the roof (Google Maps' photo of the shop; Street View, October 2024, has the same blue signs reading The Boatshed, and May
  2024 has Star Seafood's red ones. Google Maps marks both of those permanently closed and has Bugsy's trading, so the new name was
  right). The sign was on a pole half way along the Keats Street wall, which is the side of the house behind the shop (137 Keats
  Street): that wall keeps its red roller door and has no sign now. The blue is the photo's. `MOO_FOOD` says Bugsy's Fish & Chips
  too now.
- **The arcade's barbers: right as they were.** Google Maps has K:B Barbershop and Dufanda both at shop 19, 197 Beaudesert Road,
  both trading, with different phone numbers, so both stay on the tenant board. The Kingz Barbershop A-frame outside the arcade in
  Street View (October 2024) points across the road: Kingz is at 180, where the model has it.

New in the drawing for these (plain shapes in the one piece, bar each sign's own small picture): `frame` on a sign (a border of
another colour), `awnings` (a flat awning out from a wall, no posts), `skirt` (a band of another colour along the foot of a wall),
`t` on a verandah's sign (other words on it than the shop's name), and a wall record with no name at all (`shops: [{ w }]` with
`noBoard`: only its doors are drawn). Five small sign pictures replace two, about half a megabyte more memory and 4 KB more to
download.

Not done: the ground round the workshop and Starbucks is still the 2022 photograph's empty lot (grass, and the old fence between
the two) where there is now one sealed car park, and Starbucks' wall on that side is plain where Street View has its glass front
and a roundel.

The lesson: a map pin says which lot a business is on, not which building or which wall. Look at Street View before a sign goes on
a wall.

Checked: built; the three towns' scripts parse; the workshop, the Starbucks wall, the shop, the Keats Street wall and the arcade
looked at in headless Chrome at 1280 x 800 and at phone size (390 x 844), against the Street View pictures; one name tag each for
Auto Masters and Bugsy's; the two-finger stick test in all three towns, before and after a two-minute run.

## The Beaudesert Road strip and the main roads against Street View (23 November 2026)

Ash, with a picture of the strip from above: "Do the businesses along here and the other ones using Google maps from my pc. Lowish
to moderate res don't make app laggy".

How it was done (Chrome on Ash's PC): a Street View panorama every 15 m along each carriageway of Beaudesert Road from the Willow
(215) to inline physio (101), looking at the near side, 61 views, and the model rendered from the same 61 spots to set beside
them. Street View is October 2024 from the west carriageway and September 2025 from the east one, so what trades there now came
from Google Maps: its labels on the map at its closest zoom, and the listing of every business the two disagreed about. Then one
Street View look at each of 54 more businesses: most of those on Ipswich Road and the rest of Beaudesert Road, and a first few
on the back streets.

On the strip, west side, south to north:

- **207**: the south half is the Willow's gaming room under its black fascia, with no shop sign. The kebab shop is the north
  half, under a yellow sign. Google Maps lists it as Cha Charcoal Grill and shows the Istanbul Kebabs sign: the sign carries
  both. (It was one green sign across the lot, with the Willow's "$20 main meals" under the name.)
- **205**: the barber's sign is black (it was dark red); Ariana's is red with "bakery, fresh hot bread" (it was cream).
- **193**: two fronts under one awning, Roo Kitchen & Bar and H24 Gym (2/193, new). It was one sign high on a blank wall.
- **173-175**: the street signs are Way Future and Red Sea Grocery, then the tobacconist and Habos Kitchen. JB Stevenson & Co,
  which the model had on the first sign, is still listed at 173 but has no sign on the street.
- **145-147**: Culture Cuts, the second barber, north of the arcade's door (5/147).
- **143**: Clear Radiology's sign is navy with white letters (it was white with teal).

East side, south to north:

- **204 (the Hughes Centre)**: the shops are in the order they stand: Ho Choi at the corner end, then the barber, Baba Burger,
  Zeitoon, Maywand, a plain front and the laundromat. Ho Choi was fourth. The plain front was Kabul Bazar, whose sign is still up
  in Street View and which Google Maps has closed for good. The building is white render, not salmon.
- **182**: QML Pathology, new, in the cream corner building north of Mayfield Road, and Rooka Acai's sign round the corner is
  dark with "acai, coffee, juice" (it was purple).
- **166-168**: Skye Therapy's sign beside the chiropractor's (it is upstairs, its sign is on the awning).
- **160**: King of Hong Kong's sign is cream with red letters. **152**: the halal butcher's is yellow with red letters.

Away from the strip:

- **1029 Ipswich Road is a Liberty**, not a Reddy Express: Google Maps has the Shell there closed for good and Liberty Oil
  Moorooka trading, and Street View (September 2025) has Liberty's canopy and flags. The shop is Time Saver; Subway and Gloria
  Jean's are as they were.
- **1071 Ipswich Road**: the signs say Isuzu UTE (it read Moorooka Motor Group). **1095**: The Woodworkers' sign is dark green
  and gold.

Right as they were, and left: the Willow, the arcade, the post office and Domino's, the Woolworths centre's names (Nando's has
closed for good, so it is not added), Moorooka Central, the pharmacy centre, the houses that are businesses at the north end, and
on the main roads National Storage, Oliver's, the water ski shop, Dom's, Pro Honda, City Hire, TeamMoto, Tyrepower, Fourby's,
Pedders, the Hyundai, Suzuki and Nissan yards, Pearl Energy, Red Rooster, the BPs, the Ampol, the foodstore, Payless Tyres, Future
Auto, Advance Mechanical, Melody Massage, Saigon Flavour (the Grumpy Duck sign in Street View is of a closed business), the vet and
Bauer's on Fegen Drive.

Not done: the vacant front at 185-191 and the ochre building beside the Moorooka Mall have no sign in the model or on the street
worth drawing; Franco's Hair (183, on Moorvale Lane) is not in; the Woolworths centre is still a row of signs where the real one
is one curved fascia; most of the back streets' workshops (about 60; the 15 looked at mostly showed a shed from the road and
settled nothing) and the businesses in Salisbury, Rocklea, Yeerongpilly and Annerley (about 90) have not been looked at.

Cost, measured in headless Chrome with the whole strip in view, before and after: 15 more small pictures (688, was 673; five signs
and ten shopfronts), 1.25 MB more picture memory (207.1 MB, was 205.8), triangles up 0.15% (1.971 million, was 1.968). Nothing new
runs per frame: every change is a record, drawn once when the shops are built. The page is 2.4 KB bigger.

The lessons: the two carriageways' panoramas are a year apart, so look from both. A sign in Street View can be a closed
business's: Google Maps' listing settles who trades there. And splitting one long front into several lets each sit at its own
ground level on a sloping street, which uncovers the model's own awning behind: give the building `noShop`.

Checked: built; the three towns' scripts parse; the changed stretches rendered at 1280 x 800 and set beside the Street View
pictures; the two-finger stick test in all three towns, before and after a two-minute run.

## Moorooka: Rooka Acai done up (23 November 2026)

Ash: "Go to more effort on Rooka Acai. Moderately low res but a little more. Use Ash PC for Google images. In Moorooka Explore."

Looked up on Google from Ash's PC: Must Do Brisbane's photos (December 2025) and the Google Maps ones (June 2025). Street View's latest at
the corner (May 2024) is from before the shop opened, when the unit was boarded up under a red awning; the "dark sign with acai,
coffee, juice" noted on 19 November isn't in any of the newer photos, so the front follows them.

- **A new front kind, `cafe`** (`townShops`), used only for Rooka Acai (`MOO_FRONTS`, `1/186 Beaudesert Road`): a deep awning with a
  white panelled soffit and downlights (a picture, not lit by the sun, so it stays white in the shade and glows at night), a grey fascia
  round it with the white ROOKA ACAI sign in plum slab-serif letters, white rendered piers standing proud of the wall, a wall bay with
  two dark screens and a pink OPEN 12PM - 12AM sign, and the open front: one picture of the shop inside (beige walls, the green wall
  with red flowers over a timber bench and orange cushions, vines hanging from a dark ceiling, the menu board in pink tinsel, the white
  fluted counter with its timber top, tinsel, glass case, sauces, coffee machine, cups and grinder, someone serving in a cap) with
  the neon on a clear picture over it ("We make it, you take it" and the round logo). Under the awning: the white blade sign, read from
  both ways, three round timber tables on black stands with two black slatted chairs each, and two black wheelie bins.
- The building's `MOO_STYLE` entry has `noShop` (the model's own red awning showed through) and is off-white now. The front and the shop
  picture stand 10 cm out from the wall: the model's own windows on that wall showed through.
- **Lag:** about 1,500 more triangles in the one coloured piece, and six small pictures (the shop and its neon at 64 px a metre, about
  300 x 174 each; the soffit, the two signs and the OPEN sign smaller), about 0.6 MB on the graphics card and six more draw calls, close
  to where there was one. Nothing to download.

## Number 6's balcony: the palm and number 10's stairs (23 November 2026)

Ash: "Remove the tree that goes through my balcony concept and the stairs that go through the fence from the neighbours house".

- **The palm** (one of the model's trees, at -234.75, -998.5 on number 6's north side) stood up through the balcony and the hexagon's
  roof. It is hidden while the balcony concept shows and back for the house as it is (`MOO_BAL6.balTrees`, `T.hideTrees`, added to the
  trees `setRemoved` is given).
- **Number 10's back stairs** (the model's detailed house next door, `near-6-1rp130916`) ran down through the paling fence into number
  6's yard. A new hook, `window.anDetailStairs(id, "back")`, lets the app say no; the model then leaves the stairs off and closes the
  back landing with a rail (`moorooka-model.js` and `-am.js`, `?v=66`, in the detailed house builder `vu`). When the model is rebuilt
  from ai-forge, make the same change in its detailed-house code.
- Nothing more to download or draw.

## GPS: Autodrive when you're driving yourself, and clearing 5 s after arriving (23 November 2026)

- Ash: "If I'm on manual for my drive. Still show the ability to autodrive". The Autodrive button on the GPS card now shows whenever
  you're in a car driving yourself along a route, not only after taking the wheel back from Autodrive (it was hidden on a "You drive"
  route). Its label says "Autodrive" or, if Autodrive had it before, "Resume Autodrive". Hidden once you've arrived.
- Ash: "If the gps finishes at its destination, finish it up in 5 seconds". The card says you've arrived and clears after 5 s (it was
  20 s). Driving more than 40 m away in that time still carries on showing the way.
- Tested in headless Chrome: in a car on a "You drive" route the button shows and hands over to Autodrive; arriving clears the GPS
  after 4.9 s.

## Sharper shadows up close (23 November 2026)

Ash, on his iPhone: "See the issue with the pixelated wall here. Fix this and look for same issue on other buildings". The stepped band
under a roof edge was the sun's shadow drawn too coarsely: on foot the shadow map (2048 pixels) covered 280 m, about 14 cm a pixel,
so from a few metres away each step was 30 to 60 screen pixels tall, on every building. Patched in all three bundles
(`moorooka-model.js?v=67` and the beta page's `moorooka-model-am.js`, `logan/logan-model.js?v=45`, `inverloch-model.js?v=22`; ai-forge's atmosphere `aimShadow` should get the
same when the models are next built):

- The smallest shadow area is 180 m across, not 280 (`clamp(e*.7, 90, 2400)`), and on foot in Moorooka and Inverloch it's aimed 40 m
  ahead, not 60 (`40+c*3`): about 9 cm a pixel. High views and flying are as before. Logan aims 60 m ahead, as it did.
- The sun's shadow is softened a little (`shadow.radius = 1.5`; three.js r187's PCF filter, five samples): the steps blend into a soft
  edge. 3 was tried and left a speckled grain along edges.
- Shadows now end about 130 m ahead of you on foot (205 m before).

## Mail: the green envelope, and Ash's letterbox (23 November 2026)

Ash: "Can you improve how the post office works particularly around receiving mail. Show a green icon there if I have new mail. Allow
me to also read mail at my letterbox at 6 Beaudesert." In `app.html` (`townMail`, `MOO_LOCALS`, `townLocals`):

- While a letter to you is unread, the postie at the Moorooka Post Office has a green envelope mark over his head (the locals' green
  mark, with an envelope instead of the "!"), seen from up to 220 m. For Ash, so does his letterbox at number 6.
- **The letterbox opens on a tap only** (Ash, 23 November 2026: "I only want the letterbox to come up if I tap on it. ATM comes up
  too easily"): walking past does nothing. Its label (Ash only, within 60 m) is a button, a small round 📬 icon (28 px; "Make your letterbox way smaller") sitting on the pier's street face at the slot,
  1.3 m up, with the green envelope just over the pier's cap when there's mail ("Move that icon much closer to the real mailbox"): a tap within 25 m opens
  it (further off it says to walk closer). A click, no touch listeners, and the icon hides while it would overlap a stick (with 16 px to
  spare; the sticks' boxes looked up twice a second). (`tap: true` in `MOO_LOCALS`.)
- **Number 6's letterbox** is a walk-up spot on the footpath in front of its pier (`letterbox` in `MOO_LOCALS`, nobody drawn, 2.3 m). For
  Ash it shows his letters, the new ones highlighted, and marks them read; anyone else is told it's number 6's and their letters are
  at the post office. Writing a letter is still at the post office.
- A letter that comes in while you play says who it's from and where it's waiting, and stays unread (so the mark shows) until you
  open it at the post office or the letterbox. Before, it showed the letter in a toast and marked it read.

## Race invites (23 November 2026)

Ash: "If I click race first show a thing where I can invite someone to join the race. If I share with this link I want them to spawn
ready to race." In `townRace` (`app.html`):

- The race panel (Jump to > Race around Moorooka) has **Invite someone to race** above Start: a phone's share sheet, or the link copied,
  `.../moorooka/explore/?race=1&from=<your name>`. The line about who's here updates every 1.5 s while the panel's open, so you can
  see them arrive before you press Start (Start takes everyone here onto the grid, as before).
- Opening the link: once the town's ready, you're put in a standard car at the start line (a place on the grid behind the front row,
  `R.arrive`), told who invited you, and the race panel opens. The `race` and `from` bits come off the address so a reload doesn't do it
  again.

## The scroll wheel sprints with simple controls (23 November 2026)

Ash: "On pc with simple controls if I use the scroll wheel I want it to auto sprint to move faster as if I was using shift." With
simple or mixed controls on a computer, each notch of the wheel while walking steps you along at sprint speed (1.5 times, as Shift
does after Pandy's lime cordial; `F.wheelRun`, for the 0.3 s each notch holds W or S). Gamer controls are as before. Shift on its own
still only sprints with the cordial.


## The race through the back streets, with gates; Unstick on a phone (23 November 2026)

Ash: "With the race navigate a bit more through the polished parts and backstreets of moorooka. Put in clear check marker spots
frequently. With unstuck some users on phone are struggling to press it. Not sure why."

- **The lap** (`MOO_RACE`, worked out by `tools/race/course.py`, which says how): 2.8 km, from the same start and line on Beaudesert
  Road, down past the school to Sherley Street, east through Blomfield, Southwell, Medina, Bracken and Corsica Streets, across Mayfield
  Road and up Weir Street, along Koala Road past the bowls club, down Homestead Street and back west along Goodwin Terrace, Giardini
  Lane and Wall Street to Mayfield Road. Each leg by the shortest way on one-way carriageways, side streets no dearer than main roads.
  It was 4.4 km of main roads (Beaudesert, Evans, Tarragindi and Mayfield Roads). It crosses itself once, where Goodwin Terrace meets
  Weir Street; the checkpoints are taken in order, so that's fine.
- **Checkpoints** every 60 m or so (were 120): 45 gates, each two posts striped black and yellow, a chequered banner across the road at
  3.7 m and a yellow and black band on the road (about 7,000 triangles, all in the one piece with the yellow line). The next one has a
  big yellow diamond turning over it, not lit by the sun, so it shows in shade and at night, bigger the further off it is.
- **Unstick** now goes on the finger that touches it (`pointerdown`), not on the click after. A phone sends no click while another finger
  is down, and the other thumb is usually on the drive stick; Boost and the handbrake already worked this way. It's bigger too (52 px
  tall, at least 112 px wide) and over the other buttons (`z-index` 6). `T.car.unTest()` shows it as if stuck, for tests.
- Tested in headless Chrome: a time trial at desktop and phone sizes (gates, marker, card); on a phone with a thumb held on the drive
  stick, a tap on Unstick fires it and the stick holds.

## Jump to: GPS and the race on top; Admin in Settings (23 November 2026)

Ash: "Move the race to the top of jump as well as gps. Seperate the admin stuff out of jump and add to an admin spot in settings."
Jump to now starts with **GPS** (opens the GPS box) and **Race around Moorooka**, then players in town, then the places. The Ash-only
things are no longer in Jump to: Settings has **Admin (just you)** with the golden car, plane and helicopters (numbered when there are
two) and **New to check** folded up (`T.adminJumps`, `adminSec`).

## Memory: less of it, and a way to see it (23 November 2026, on a test branch)

Ash: "Help me keep track of memory. Where is memory currently used estimate", then "Do Skip the weather scene ... do not commit to main,
branch and let me test" and "Do the other updates in the test branch". Measured at iPhone size (JavaScript heap after loading):
Moorooka 545 MB to 333 MB; Inverloch's graphics memory 287 MB to 213 MB.

- **No weather scene behind Moorooka and Logan.** This site has no news or weather, so Inverloch's town centre (the weather's view of
  the Rotary clock) isn't built when another town opens (`NO_NEWS && BS.exploreOnly !== "inv"` round its block in `bsBuild`). bsLite
  used to hide it after, but its lists stayed in memory: about 50 MB.
- **Moorooka's detailed houses on demand** (`moorooka-model.js?v=68`, patched in the bundle; ai-forge's `Z_` should get the same). Each
  420 m block had its detailed houses built at load, about 180 MB, though only the blocks within 380 m of you are ever drawn (and only
  then let go of by `anFreeCpu`). Now only the plain houses are built at load, plus the detailed ones near where you start; the next
  block's are built when you're within 630 m of it, 24 houses a frame, and its plain houses stand in until they're ready.
- **Inverloch's ground photo half size on phones** (`ground-2k.webp`, 2048 by 1760, picked by `anSmallGround` as Moorooka's and
  Logan's are; `inverloch-model.js?v=23`, patched in the bundle): about 74 MB less on the graphics card.
- **Settings > Admin shows the memory**: the JavaScript heap where the browser reports it (Chrome and Edge; iPhone Safari doesn't),
  and the device's memory. No browser reports graphics memory.

### Smoother first seconds (23 November 2026)

Ash, on his iPhone with the beta: "The app Loads faster but stutters like crazy for the first 5 secs or so." Building the detailed
houses ahead of you ran 24 houses a frame from the first frame, and each block's mesh was put together on the same frame as its
last houses. Now (moorooka-model.js ?v=69, patched in the bundle) the blocks you start in are still built while the loading screen
shows; the building ahead waits 3 s, takes at most 2.5 ms a frame, skips frames that already ran slow (it still runs every 8th),
and puts a block's mesh together on a frame of its own. In a test walking north at 30 m/s, the frames over 8 ms of house building
after loading went from 9 (up to 42 ms) to 1 (14 ms).


## The Vanilla Lab redone as the dessert trailer it is (23 November 2026)

Ash: "Redo the vanilla lab in moorooka. This isn't accurate. Use satitile to make lowish res thing here but true to the area. Use images
to display mockup of real businesses."

- **What it really is.** Not a cafe in the charcoal building: a dessert trailer at 49 Beaudesert Road, open Tuesday to Sunday from
  6:30 pm till about midnight (its Facebook and TikTok posts, January 2026: Greek doughnuts, churros, soft serve, sundaes, Dubai cups;
  "a cute spot that you can sit"). Its colours from its posts: vanilla, chocolate brown and mint, desserts in pink gingham boats.
- **Where.** 49 Beaudesert Road (lot 1 RP164281, the Queensland address register) is both buildings south of Wharton Street: the
  charcoal one and Colebrook Corner, with a 5 m gap between them (the 2021 sale photos on Domain show the two freestanding buildings).
  The Esri satellite (Vantor, 17 November 2025, newer than the Queensland 2022 photo the ground is drawn from) has a trailer-sized brown
  shape in that gap, a timber deck at its footpath end, and the yard behind paved with cars on it.
- **The model** (`MOO_FRONTS`, new kind `truck`, a and b across the gap at the footpath): a vanilla trailer side on to the street with
  a chocolate skirt and mint trim, its hatch open under a propped-up flap (the picture through it: the menu, the soft serve machine,
  doughnuts in gingham, someone serving), its name on a board on the roof and across the back, a timber deck with two picnic tables
  and pot plants, festoon lights across between the walls, an A-frame menu on the footpath, and the yard behind paved over the old
  lawn. Four small pictures and one piece of lights; the hatch, name and lights are lit, as it trades at night.
- The charcoal building keeps its front but loses the Vanilla Lab's sign (no names: its tenants aren't known well enough), its note
  says two storeys, not three; Colebrook Corner's tenant board moved onto its own front, out of the gap; Food in the area lists the
  Vanilla Lab as ice cream (dessert trailer) with its hours, eat in and takeaway.
- **Not known:** which way its hatch faces and its exact colours: no photo of the trailer itself was found (Street View predates it).
  A photo from Ash would settle both.

### Colebrook Corner either side of the Vanilla Lab (23 November 2026)

Ash: "Can you fix the businesses either side of the vanilla lab cart. Use google maps". From Street View (September 2026 and April 2024)
and Google Maps: both buildings are Colebrook Corner, 49 Beaudesert Road. The charcoal one, south of the gap, now carries its real signs:
on the fascia Cleo Hairdressing, Gold Saint Beauty (Shop 2/49), a small COLEBROOK CORNER sign and Fat Wombat Gallery; along its top six
boards (cleo, LA Lips, Fat Wombat Gallery, urban, KILR Studios, Moorooka Tobacco & Gifts). The white weatherboard one on the Colebrook
Avenue corner is a verandah on white posts with posters in the windows, COLEBROOK CORNER and Kip McGrath (8a/49) high on its parapet.
Gold Saint Beauty, Cleo and Kooperativ Hair were wrongly on the white building, with a tenants' board in front that isn't there. Both
buildings are raised to two storeys (MOO_STYLE eave). Not done: the verandah wrapping round onto Colebrook Avenue, the small white sign
left of COLEBROOK CORNER (unreadable), and Kooperativ Hair (on Google Maps at 49 but no sign seen).

### The race in three legs, with power-ups (23 November 2026)

Ash: "Make the car part about 50% shorter. After completing the car part add in plane and raccoon sections", "power ups on the road that
interact with other players like a red shell or star, the losing player should get better power ups", "Add lots of player interactions
that aren't annoying but tell me about how my opponents are going", "At the start I want players be able to choose 4 car types", "I want
to be able to handicap players ... 5% ... 7% ... 2% per factor. Up to 8 factors", and "There's a few too many checkpoints now make them
about 1/3 as many, make them a bit less ugly and make the arrow towards them a bit more obvious. Dont put checkpoints right next to
turns", "Move the time trial thing to smaller and to the right of launch control".

- Legs (`townRace`): the car to about halfway (gates about every 180 m, each moved to the straightest road within 60 m), then the plane
  through 8 rings 27 to 45 m up over the rest of the lap (a missed ring counts with 2 s added; each ring hit gives a short boost), then
  the last 280 m as the possum to the line. The changes of ride are `T.car.raceSwap("plane"|"possum", ...)`; the roofs, trees and possum
  load on the grid (`racePrep`), not mid-race. The sky rings quest doesn't start mid-race.
- Cars: Rocket (Turbo), Launcher (Launch control), Nitro (Bigger nitro tank), Grip (Sports tyres), picked in the start panel or on the
  grid, for the race only (`BS.raceRide` stands in for the mechanic's upgrade in `townPerkRide`; top speed through `T.car.spdK`).
- Handicaps: set by whoever starts it, sent in the "go" message; each step 5% off top speed (car, plane, possum), 7% off acceleration,
  2% off turning.
- Power-ups: rows of three coloured boxes every 230 m on the car's leg and one on the possum's. What you get depends on your place
  (`RACE_ODDS`): Turbo, Golden star, Swooping magpie (the racer just ahead spins out), Bin chicken (whoever's first), Storm cloud
  (everyone ahead slowed 5 s), Banana peel, Shortcut (150 m on). Use with the round button over Boost, or X. Messages: "fx", "hit",
  "peel", "peeloff"; "at" now carries the leg.
- News under the card, one line at a time: places changing, the gap to the nearest racer every 22 s, the others' legs, power-ups, who's
  near the line, who finished.
- The card is smaller and sits right of the upgrade chip on a phone; the way to go is a big arrow tilted into the view with the
  distance under it (and climb or dive for the rings).

### Race tweaks and mouse-only riding (23 November 2026)

- The arrow is a plain arrow with a shaft, tilted less. The card's power-up button sits by Boost on a computer, with X on it.
- Mid-race you can't get out, Jump, use the GPS or Explore mode (`body.bsracing`; `T.race.locked()`); × on the card leaves the race.
- Only the host starts it: whoever has the race panel open says so every 2 s ("host"); anyone else, or anyone who came by an invite,
  sees who's hosting and picks a car while they wait. Two at once: the lower id hosts.
- The end of each leg says so ("Car leg done! Next: the plane ..."), and the change of ride comes 1.4 s later, the car held still.
- Gates: a white flag pole each side with a yellow pennant, and yellow chevrons on the road; no bar across. A ding at each one.
- Handicap turning: 1% a step (was 2%). The upgrade chip goes down a row mid-race on a phone. The possum turns 20% slower; the pigeon
  dives 30% faster.
- Google Maps controls on a computer, mouse only (`F.mouseRide`): the car, the plane and the possum steer by where the mouse is across the
  screen from the middle. Car: left button go, right brake and reverse. Plane: left power, right slow down, mouse above or below the
  middle climbs or dives (even with no button down). Possum: left runs, right jumps.

### Houses dropped again far away (23 November 2026)

Ash, flying the plane in the race: "Browser reclaimed graphics" (the browser took back the graphics memory). The detailed houses built as
you near each block stayed built, so flying across Moorooka built them all again (about 180 MB). Now (moorooka-model.js ?v=70) a block's
detailed houses are dropped once you're 650 m past where they show, and built again if you come back.

### A new lap, and stronger help for those behind (23 November 2026)

- The lap (`MOO_RACE`, tools/race/course.py): 2.8 km from the line on Beaudesert Road's northbound carriageway by the shops, straight up
  Beaudesert Road past number 6 to Ipswich Road, right along Ipswich Road and Longueval Street, down Dickebusch and Mathilda Streets,
  across to Weir Street by Wharton Street and Vendale Avenue, back along Goodwin Terrace, Giardini Lane and Wall Street, and round by
  Mayfield Road to the line (Ash: "start down Beaudesert rd from the shops past 6 Beaudesert Rd, then turn right, then turn around those
  streets. The start will be easy and straight"). The car's leg is the straight run north and the first of the back streets.
- Golden star: 80% more speed and 40% sharper steering for 7 s (car and plane), nothing can touch you. Autodrive (new): the car drives
  itself along the course for 10 s, a quarter faster, then hands back; steer to take over. Those near the back get them most (`RACE_ODDS`).
- Turbo, Golden star, Autodrive and Shortcut go off as soon as you pick them up; the magpie, the bin chicken, the storm cloud and the peel
  wait for you to use them ("Nothing aggressive should be automatic").
- The countdown beeps for 3, 2, 1 and a higher one for Go; the car picker goes at 3. The plain possum has no Boost (the golden one keeps
  it). Share no longer offers "Text message" (it didn't work on Ash's iPhone; More options has Messages).

### Houses built at load again (23 November 2026)

Ash, on his iPhone: "Joystick bug back" and "App feels a bit laggy". Following the rule (revert the latest change to Explore's loading
first): building each block's detailed houses mid-game (?v=68 to ?v=70) is undone, and they're built at load again as before
(moorooka-model.js ?v=71 is ?v=67's bundle). Mid-game building was heavy main-thread work while you play, which is the known way the
stick drops on an iPhone, and dropping them far away (?v=70) made it happen again each time you came back. The other memory savings
(no weather town centre on Moorooka and Logan, the half-size Inverloch ground on phones) stay.

### Race polish (23 November 2026, late)

Ash: "Hide street signs and flood during race", "Time trial is over the top of much sharper turns", "Find another way to do up and down in
a plane", "Make the end of a section more clear. Like car race part over", "Polish the race overall", "Try to make the arrow show
elevation", "Possum leg too short".
- Mid-race the street names go off (back after) and the names, tide and flood buttons hide. The upgrade chip goes down a row whenever the
  race card shows, finished or not.
- The plane on a phone: the left stick's up and down climb and dive in the air, with the power kept on; on the ground up is power and it
  lifts off once it's fast. The Climb and Dive buttons are gone for the plane (the helicopter keeps them; `body.bsheli`).
- The end of each leg: a yellow banner right across the screen ("Car part over! Next up: the plane ..."), a fanfare, and 2.2 s before
  the change of ride. The card shows the three legs, ticked as you finish them.
- The arrow rises and stands up for a ring above you, drops and lies down for one below, with how many metres up or down.
- The possum's leg is 600 m (was 280), with two gates and two rows of boxes. The plane's leg is shorter for it.
- At the finish: a banner, a fanfare, your best time on this lap kept on the device ("a new personal best!"), medals in the results, and
  Race again.


### The race, third version: car, possum house, possum, plane (24 November 2026)

Ash: "In the race the car section should be about 75% longer and end at giant low res possum house. I should need to get out of my car
and walk into the possum house. And I become a possum. Possum now phase 2. The possums quest should initially start straight and then be
a fun mini game that takes me further away from the starting point. At the end of the possums missions end at a parked plane.
Automatically get me out of the possum but I need to manually enter the plane and take off from the ground. The plane should have to fly
lowish over moorooka initially straight. Covering a backwards direction to what I drove and played as the possum for." Also: "When I
click start race immediately hide the menu", and "check the overall feel of the race feels fun and polished".
- **The car** drives the lap from the line to a giant possum house on Goodwin Terrace: 2.4 km (1.7 times the 1.4 km it was), yellow gates
  about every 180 m. The last gate stops the car.
- **The possum house**: cream walls, a red roof, a green band, two big windows and a tall door with a warm light inside, a path from the
  road to the door and a giant possum on the ridge. Low and blocky on purpose, one draw call (two more for the possum). On foot between
  legs the race lets you out (`race.free`, `body.bsraceout` shows Get out and Get in); run in the door (within 4.5 m) and you're the
  possum.
- **The possum** (`RACE_POSSUM`, from `tools/race/legs.py`): straight along Goodwin Terrace (two rows of boxes), then a gum-leaf hunt down
  Homestead and Harlock Streets, along Fegen Drive past the possum's own house and up Kingwell Street to Mayfield Road: 0.95 km, a green
  line and small gates (5 m either side) every 75 m or so. A bunch of leaves every 20 m, weaving side to side; every fifth one up high
  (jump), every seventh golden. Each is half a second off your time (two for a golden one, and a burst of speed); quick ones in a row
  chime higher and higher. The card counts them.
- **The plane** is parked facing back west at the end of the possum's run. Out of the possum by itself, you walk to it and get in, then
  take off straight down Mayfield Road. The plane's way (`RACE_PLANE`, then the lap backwards from Weir Street to the line) is smoothed
  so its corners are curves. Rings: the first 320 m along (13 m up), then about every 200 m, 19 to 29 m up, and a big chequered ring
  over the line to finish. A ring through: a tick, "Ring 3 of 12" and a ding. Missed (across its line outside it): a cross, a low buzz
  and "Turn back"; it doesn't count until you go back through it, either way (Ash: "If I miss a ring the player should have to go back
  and get it rather than plus 2 seconds"). Gates the same.
- Every target has `D`, how far along the whole race it is (5.8 km), and progress, standings and "to go" count the same way. Best times
  are kept under the new length.
- Start hides the panel at once; the car picker shows only for racers someone else started it for.
- Boxes are a part per row of three (one draw call a row): hit one and that row is gone for you for 6 s. Leaves are a part each.
- The race's Autodrive can't be taken back: it drives its 10 s whatever you do (Ash: "Autodrive on race disable hard steer to take
  control").
- **Practise while you wait** (Ash: "Whilst waiting for players to join my race I want an option to be able to practice driving"): a
  button on the race panel puts you in a car on the line with the course drawn and keeps you hosting; "Start the race · 2 here" stays top
  left (the upgrade chip moves down a row for it) and brings the panel back. Cancel stops practising and hosting.

### The race for racing each other: leaves you need, the Autodrive cannon, a tidier panel (24 November 2026)

Ash: "Focus less on time trial and more on multiplayer. For example make the person have to get gum leaves as time off is not relevant
for multiplayer"; "Polish this ui" (the race panel); "I want the autodrive to automatically kick in and lock my controls for 15 seconds
whilst it boosts forward like the cannon in Mario kart. The plane rings are slightly too low and should not render until a player reaches
the plane"; "Turn up car turning to 140".
- **Gum leaves are needed, not time off:** the plane's gate won't let the possum through without 15 (a golden one counts 3 and gives a
  burst). Short of them there, a buzz, "15 more gum leaves first", and the arrow and diamond on the nearest leaf left. A leaf you take is
  gone for the other racers for 12 s ("leaf" message), and they hear about golden ones. The card counts "🍃 7/15", the standings show each
  possum's leaves, and the results how many you grabbed.
- **Autodrive cannon:** it goes off the moment you hit its box, drives the course for 15 s at 1.6 times the speed (up to 900 m), and
  nothing you press stops it.
- **Rings:** 300 m apart (were 200 m: "On the plane move the rings further apart"), 18 m, 24 m, then 24 to 34 m up (the finish ring
  18 m), and drawn only once you reach the plane (their own part, shrunk to nothing till then).
- **Car turning** 140% by default (was 135%).
- **The race panel:** the three parts as three tiles, the length beside the title, your car, the racers with their handicap steppers (the
  steps explained once, under them), Invite as a quieter outlined button, and Start the race big at the bottom, always in view (the panel
  scrolls under it, and stops short of the version in the corner), with Practise first and Cancel under it.

### Gum leaves up high (24 November 2026)

Ash: "I want the gum leaves to be more obvious and at the tops of trees houses and light poles and occasionally on the ground."
- 25 leaves along the possum's way after its straight (`RACE_LEAVES`, from `tools/race/legs.py`): on Kingwell Street's five street lights
  (the ones the possum climbs), then by turns on the middle of a house's roof (houses of 40 to 400 m2 within 28 m of the way), up a tree of
  4 m or more within 16 m, and now and then on the ground beside the way: 8 roofs, 8 trees, 5 lights, 4 on the ground. None within 12 m
  of another. Every sixth one up high is golden.
- Each sits a metre over what the possum stands on there (`C.raceSurf`, the possum's own `surf`, worked out when you become the possum,
  once the roofs and trees are in). You pick one up standing within 2 m of it on what it's on (2.6 m on a roof or a tree).
- Bigger (2.5 times; golden 3.1), with a column of little diamonds rising 6 m over each so it shows from down the street.

### The race's start, the possum's leaves as its goal, rounder rings (24 November 2026)

Ash: "Make the possum leaves more like the objective rather than the gates or combine them so person has to do both. The plane rings are
a bit too ugly. Be slightly more forgiving with radius for plane ring. The arrow in the plane is almost good but sometimes hard to know if
it means up or down. The time trial box can be bigger. Auto collapse the launch control or similar box on race start. On the grid get ready
remove that ... Make the camera angle start like this screenshot. I want to see the 3 2 1 more obviously."
- **The possum's leaves are its goal:** no gates on its way now but the one at the plane. Till you have 15 the arrow and the diamond point
  at the nearest leaf left from just behind you on (each leaf's place along the way is worked out at the start), then at the plane. The
  card says "🍃 7 of 15 leaves", then "Got them! Run for the plane". Your place among the racers counts your leaves on the way.
- **Rings:** round gold tubes with a pale lip on the inside, lit (and a touch of glow) so they look round; the finish ring a chequered tube.
  Through within 3.5 m of the rim (was 1.8 m).
- **Up or down:** the arrow lies flat and only turns; under it a green "▲ Climb 12 m" or an orange "▼ Dive 8 m" when a ring is more than
  5 m above or below.
- **The race card** is bigger mid-race (it has the top row to itself: up to the width less the two round buttons, larger type).
- **The start:** no "On the grid. Get ready!" for whoever started it (those someone else started it for are still told). The camera goes
  behind the car, looking up the road, when you're put on the grid and again at 3 (`C.camReset`), and the upgrade chip folds to its name
  (`C.upClose`). The countdown is much bigger, with a dark edge, popping in on each number; Go! in green.
- **The car's gates** a little more forgiving (Ash: "Slightly more forgiving on car objectives"): through within 10 m of a gate's middle
  (was 8 m), 12 m at the house (was 10 m).
- **Your car's logo** (Ash: "During the race instead of showing launch control; hide that box and put a symbol on my car instead based
  on the upgrade I've chosen"; then "I don't like the circle symbol on the car. I want it actually on the car itself like a logo on the
  car"): the upgrade chip is hidden mid-race, and your race car's sign (🚀 Rocket, ⚡ Launcher, 🔥 Nitro, 🛣️ Grip) is painted big on the roof
  (1 m), on the back window (what you see from behind as you drive) and on both front doors, moving with the car as the model draws it (`C.carPose`: place, heading, pitch, roll; `badgeMake`, a
  canvas texture; one draw call). No plate.
- **Some rings lower** (Ash: "Plane occasionally a bit closer to ground"): every third one 15 m up.

### A race around Inverloch, started by Ash (24 November 2026)

Ash: "Add a car race with similar rules to Inverloch. Just car only. It should start by speaking with ash who is opposite 11 Norman Rd"
- **The same race, cars only:** `townRace` takes a course (`RACE_MOO`, `RACE_INV`: its name, its lap, whether it's cars only, and who
  starts it). Inverloch's has no possum house, possum, gum leaves, plane or rings: gates about every 180 m all the way round (13), the last
  one the line itself (12 m wide), and the rest as in Moorooka: the four cars, handicaps, the host and invites, practice, power-up boxes
  (here each row on the straightest road within 50 m, not across a corner), the news line, the car's logo, missed gates turning you back.
- **The lap** (`INV_RACE`, 2.6 km; `tools/race/inverloch.py`): from the line on Norman Road just west of Ash, west along Norman Road, up
  Florida Avenue, east along Victoria Street, up Evergreen Avenue, east along Toorak Road, down Abbott Street, south-west along Ramsey
  Boulevard and Surf Parade, west along Veronica Street, up Ebor Avenue and west along Norman Road, past Ash, to the line. Inverloch's
  main roads don't share points with the streets that meet them, so it's each street's own line cut where the next one meets it, not the
  network's shortest way (`tools/race/net.py` reads Inverloch's map too, with `RACE_TOWN=inverloch`). Nothing solid on it; every gate on
  a straight.
- **Ash** stands across Norman Road from number 11 (its house is at -1592.6, 411.6 in the model; he's at -1580.5, 388.1, on the far
  verge), by the front of the grid, in a race-yellow shirt with a chequered flag in his right hand (`flagPart`, a fourth part on his arm).
  He turns to you when you're close and waves the flag over his head while you're within 30 m, holds it up through the countdown and
  brings it down at Go. Walk up to him (3.4 m, or 9 m in a car) and he asks if you're racing: "Let's race" opens the race panel (or, if
  someone else is getting one together, "Count me in"). Jump to > Race around Inverloch ("Talk to Ash: across the road from 11 Norman
  Road") puts you on your feet 3 m in front of him (`T.standAt`). His name over him within 70 m. Drawn only within 300 m, made the first
  time you're that close; checked each frame from the race's own frame.
- Moorooka's race is as it was.

### Jump to the bakery and the library after the A'Beckett Street rebuild (24 November 2026)

After [#221](https://github.com/Ashley-Pettit/3dModels/pull/221) split the bakery from Alex Scott's and moved the library's round window
and "Library" glass to its entrance corner (Ash: "your call on how to merge as long as only Inverloch affected"):
- **The bakery:** Jump to put you inside the chemist's new corner (the middle of the bakery's own, shorter front is 5.5 m east of the
  whole frontage's). You stand where you did before, out from the whole frontage, and look at the bakery's own front.
- **The library:** you stand out in front of its entrance corner (6 m along, 13 m out from it) looking at the doors, so the round window,
  the "Library" glass, the Hub's sign and the Open flag are all in view (it looked at plain glass).
- The hotel's window-making function is `sash`, not `window` (which hid the browser's own `window` in that block).

### Turbo on the Boost button, a higher start view, inviting from Ash (24 November 2026)

- **Turbo** (Ash: "I want turbo to make my boost btn more powerful but not auto boost on accel"): the mechanic's Turbo and the race's
  Rocket now only change the Boost button: 40% more top speed on boost (210 to 294 km/h by default) and 1.6 times the push
  (`PERK_X.turbo`, `PERK_X.turboPush`, `r.boostPush`). Off the boost the car is as it was (it had a quarter more top speed all the time).
  The car's top speeds are read from its settings as they are now (`R.carTop`, `R.carBoostTop`), not fixed when the car code started, so
  an upgrade, or a race car, counts straight away; the race's `spdK` is just the handicap now.
- **The race's start** (Ash: "Polish how the race starts, position the 3rd person view of my car earlier and higher"): on the grid and at 3
  the view is 13 m behind the car and about 5 m up, looking down the road over it to the line (`C.camReset`: `camBack` 5.5 m, pitch
  -0.3); once you're off the line it glides in to the usual view (7.5 m back, about 3 m up) in a couple of seconds. It was low and level.
- **Inviting** (Ash: "I want invite people to race like in moorooka"): the race panel's Invite someone works in Inverloch as in Moorooka
  (the link puts them in a car on the grid by Ash, with "Ash is hosting"); Ash's card has it too: Invite someone shares the link and opens
  the race panel.

### The car's logo on the roof only (24 November 2026)

Ash: "Just one symbol on the car on top. ATM there is two". Your race car's sign is painted on the roof and nowhere else: the sticker on
the back window and the two on the doors are gone (from the higher start view and the chase view the roof shows well). In Inverloch it
never showed: that town's cars sit 0.25 m up and come in three heights (roofs 1.74, 1.88 and 1.92 m up), and the model doesn't say which
you're in, so there it sits at 1.94 m over the part of the roof all three have (`RACE_INV.logo`); on the lowest (sedan) it's a hand's
width over the roof.

### The race's arrow looks ahead; the yellow line only to the next checkpoint (24 November 2026)

Ash: "In the race I feel like the arrow is too late to show I need to turn. I miss the road before realising I needed to turn. With the
yellow path only show the path to the next checkpoint."
- **The arrow** (driving): it points at a spot along the course ahead of where you are on it (`roadAhead`), further the faster you go (35 m,
  up to 120 m at about 130 km/h), so it swings round before the corner does, not as you reach it. Under it, a yellow pill names the next
  real corner within 160 m, which way and how far ("↱ Right turn · 80 m"). The distance under the arrow is still to the next checkpoint.
  More than 30 m off the course it points back to the nearest bit of it; having missed a checkpoint it points back at that.
- **The yellow line** is a piece for each of the car's checkpoints, made with the rest of the course on the grid (`lineP`, one part each,
  `lineAt` only moves them): in a race only the piece from the last checkpoint to the next one shows; practising, all of it.
- **Inverloch's road marks were under its roads** (its roads sit 0.11 to 0.34 m over the ground; the marks were 0.16 m): the yellow line,
  the start line on the road and the gates' chevrons go 0.2 m higher there (`RACE_INV.lift`).

### Walking in Google Maps style, number 6's stairs, not getting stuck, eyes at 2.4 m (24 November 2026)

- **Google Maps style on foot** (Ash: "In Google map mode, make walking similar to the car with a tap to auto move or hold to walk. Pretty
  much same controls"):
  - On a computer: hold the left button and you walk, the mouse left or right of the middle turning you (as it steers the car). Hold the
    right button and you walk backwards. A quick click walks you to the spot (`F.mouseWalk`, `mwGo`, `mwSteer`, `F.mw`).
  - On a phone: a tap on the view walks you to the spot. The stick and a finger on the view's left half walk you as before.
- **Number 6's stairs** (Ash: "Fix the stairs, I can walk up them and got stuck"):
  - Your eyes follow the ground eased, so climbing, your feet worked out from them were most of a metre under the stair you were on.
    A stair more than 0.8 m over them didn't count as something to stand on. Up the stairs, a step onto "nothing" is taken back, so
    you stopped partway up. What you stand on is now the surface found under you last time (`P.stand`, `feetP`).
  - Up there, a step had to land 0.3 m clear of every edge. The stairs are a metre wide, so off their middle no step counted. Now, if
    you're already that near an edge, any step that keeps you on something goes.
  - Walking up each of the three stairs (and the new side stairs) with the stick, in the middle and 0.35 m to each side: you now reach the
    top every time. Before, off the middle you stopped 0.5 m up.
- **Not stuck** (Ash: "Add an anti stick if a person is trying to move but can't"): on foot, if you push for 0.8 s and go less than 0.3 m
  (`bsUnstick`):
  - inside a town's solid walls, you're moved out to the nearest clear spot within 4 m;
  - otherwise, half a metre the nearest way round to where you're pushing (30, 60, then 90 degrees either side) that you can step to, so
    you slide round a corner or along a rail, not through it;
  - if you can't step anywhere at all, nothing takes a step back for 0.7 s.
- **Eyes 2.4 m up** to start (Ash: "Starting height to 2.4"; was 2.6).

### The plane's power on a phone (24 November 2026)

Ash: "I don't know how I feel about the new plane controls in moorooka 3d. I now have no real way to slow down on phone. We previously had
up down. This way is better for up down but I now can't adjust throttle. Is there a better way? Don't change heli or drone".
- The left stick stays as it was: up and down climb and dive in the air, sideways turns; on the ground, up is power.
- The two buttons between the sticks are back for the plane, now Faster and Slower. In the air they move a power lever that stays where
  you leave it (a tap is a notch of 10%, holding moves it about 60% a second). It is full when the plane leaves the ground. The plane
  settles at the speed for that power, from flat out down to 58 km/h; under about 87 km/h it sinks, which is how it comes down to land.
  A bar beside the two buttons shows the power (yellow, full to empty) while it flies. On the ground, hold Faster to go and Slower to brake and back up.
- The hints and the get-in and get-out messages say so. The helicopter, the drone and the keyboard are unchanged.

## The Bohain Street junction's outer sides: the footpath, the lawn and the road's edge (25 November 2026)

Ash, with a picture from above the park on his iPhone: "Fix this in the moorooka model. Note broken footpath, grass and road issue".
East of the island, where Bohain Street's two arms become one street, the ground plan had each arm and the street at its own mapped
width, so the road's edge jumped where they meet:

- **Park side:** a bump of lawn 2 m into the road at the end of the north arm's curve, then the edge stepped 1.5 m back.
- **House side (9 Bohain Street's corner):** a hook in the road's edge, lawn half a metre past the kerb's round corner.
- **Footpath:** the south arm's footpath and the street's each ran 1.7 m behind its own kerb, so at the hook they stopped 1.5 m apart.

Now (`tools/ground/beau_corner/shapes.py` `JN_*`, `corner.py`; `surface/2_6` and `3_6`, 38 m2 changed):

- **Park side:** the road's edge follows the arm's curve to its end as the photograph has it (x -244.5), then runs straight to where the
  street's mapped kerb is right again (x -211.87). The photograph has that stretch under trees, so the straight is inferred: a kerb
  does not step sideways. The road is up to 1.8 m narrower there than the street data has it (about 8.7 m wide at x -240, 10.4 m from
  x -212).
- **House side:** the road's edge follows the kerb the model already draws round that corner.
- **Footpath:** one strip round the corner, 1.62 to 2.88 m behind that kerb, from where the arm's path is right (x -250.6) to where the
  street's is (x -237.4). The two old ends went to lawn.
- **Kerbs** (they are drawn on the medium and sharp settings, not the light one): the model's six kerb points along the park side's old
  edge are left out (6 more cells in `kerbOff`) and `MOO_CORNER.k` is that kerb on the new line, 37 m of it, the same size as the
  model's (0.22 m wide). `townBowls` draws it only where the model draws kerbs (`hasKerbs()`: the light setting has no fences either),
  and makes the medians again when the model that takes over draws kerbs and the last did not. Dumping the kerbs again: those six
  points gone, nothing else changed, no new corner.
- The beta page (`beta/app.html`) has the same change: it shares the ground plan and `kerbOff`.

Checked on a local build with `tools/ground/beau_corner/look.py` (new: pictures from set views, and the kerb dump `corner.py` asks for):
from above at desktop size, and Ash's view at phone size on the light setting and the sharper one. A second run of `corner.py` changes
nothing. Explore's input and loading are not touched; the two-finger test in Moorooka held on the first go and after 30 s. In Logan and
Inverloch it held after 30 s, and the first go misread the stick part way through its move, the same on `main` (the test's timing on a
slow software renderer, not the app).

Not done: the far-off ground picture (`ground.webp` and the detail tiles) still has the old edges until the sharper ground loads; the
arms themselves are as mapped (the south arm's kerb and footpath lie about a metre nearer the island than in the photograph); the
park side's curve is still the mapped line's 4 m straights.

## Ash's letterbox: a bigger icon, a little higher, and letters sent from it (25 November 2026)

Ash: "Make the letterbox icon slightly bigger and just slightly higher. Allow me to also send mail from my mailbox". In `app.html`
(`.bs-peer.bs-tap`, `MOO_LOCALS`, `townMail`):

- **The icon** is 33 px (28 before) with its 📬 at 18 px (15), and sits 0.15 m higher (`tagY` 1.45; the green envelope with it, `markY`
  2.0). It still hides while it would overlap a stick with 16 px to spare (`overSticks` now takes 17 px as half the icon).
- **Sending from the letterbox:** its card now has the post office's To and Letter boxes and Send it under his letters (`write()`, shared
  by `P.card` and `P.box`), with the same three letters every 5 minutes and the same offer to share the app afterwards. Anyone else
  tapping number 6's letterbox is still told their letters are at the post office.

Checked on a local build at phone size as Ash, standing at the pier: the icon before and after, the card, and a letter typed and sent
(the post caught by the test, not sent: one message, to, from and text as typed). Explore's input and loading are not touched; the
two-finger test in Moorooka is in the pull request.

## One car family in every town (25 November 2026)

Ash: "Push the new cars also into Logan and moorooka", then "Update the parked cars and such with these. Remove the other car
models to save space". Bangerz's sedan, wagon and ute (ai-forge `src/features/inverloch3d/life.ts`, `drawCar`) are packed into
`app.html` as `TOWN_CAR_SHAPES`. Moorooka's and Logan's traffic, the Magic Mile's car yards and the white ute in a drive use
`townCarPart`; the models' parked and driven cars use `window.anCarShape`, patched into `moorooka-model.js` ?v=72 (`Du`, the
parked car, tinted per car as before) and `logan-model.js` ?v=46 (`Rs`: a sedan, wagon or ute in turn; buses unchanged). The old
box sedan, the car yard's car and both models' own car shapes are gone. When either model is rebuilt from ai-forge, make the same
change there.
