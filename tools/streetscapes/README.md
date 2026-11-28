# Inverloch streetscape fieldwork

## Esplanade Hotel to The Glade

Open the [survey map](foreshore.geojson) in GitHub or GIS. Select a feature to find its OpenStreetMap source, last edit date and photo references. Green lines follow mapped pedestrian paths. Orange pins mark two places to investigate the crossing. This is an authoring map. It supplies no pedestrian or accessibility directions.

The inventory was checked on 28 November 2026. The photographs below are historical references. Their capture dates are unknown. The hotel operator reports completing renovations in 2025. Its street number and the conservation society's current museum address independently identify both landmarks. [Esplanade Hotel](https://www.invyespy.com.au/) · [Bunurong Environment Centre](https://www.sgcs.org.au/our-centre)

| Stretch | Features visible in the reference photographs | What a return visit needs to establish |
| --- | --- | --- |
| A’Beckett–Williams junction | On the south side, the hotel has two storeys, a light roof and a projecting corner verandah. On the north side, the older shops form a low row. TV012, TV013 and TV014 show the hotel from opposing bearings. TV011 shows the opposite frontage. | Photograph both hotel faces after the renovation and the shops opposite. The mapped retail shell includes multiple businesses and carries a single-storey tag. Keep the hotel’s height confined to its own frontage. |
| Ramsey west, hotel to Scarborough Street | TV019 shows the row adjoining the hotel and a clear change in roof height. The west footway extends 122 m from the hotel corner towards Scarborough. The photo covers only its northern end. | Record the remaining tenancies, awning joins and the ramp or steps at each break. Identify the crossing from each kerb before changing the road. |
| Ramsey east, The Esplanade to the museum car park | TV022 shows a low, glazed entrance section beside the museum's longer wall. TV023 looks back towards the hotel. The museum POI lies within a separate mapped footprint. | Confirm which wall faces the present entrance, the extent of the glazing, and the car-park connection. The unmarked crossing at the orange east pin crosses a service drive. The opposite Ramsey kerb needs its own evidence. |
| Park entry to shelter | Five consecutive mapped runs total 149 m from the car park via the concrete shared path and timber connector to the path beside the shelter. TV027–029 show open lawn, mature trees and a low-roofed shelter. | Record the step-free approach, recent fittings and sign positions. The final path passes beside the shelter. Council also lists a shared path serving the barbecue shelter in its 2024 register. [Council pathway register, asset 0402272](https://www.basscoast.vic.gov.au/assets/general-downloads/Communications/Publications/Pathways-Register-June-2024.pdf) |

The map leaves two gaps visible. The hotel and museum-side pavements lack a verified pedestrian connection across Ramsey in this extract. The museum-side pavement and park entry meet different parts of the car-park service drive. A route solver permitted to use road centrelines can hide both gaps. Prioritise these transitions in a short local photo walk, then capture both faces of the hotel from the junction. The existing A’Beckett model owns the hotel. The separate Ramsey–Glade pilot owns the shelter and path detail. [A’Beckett model](https://github.com/Ashley-Pettit/3dModels/pull/221) · [Ramsey and Glade pilot with matched-drive measurements](https://github.com/Ashley-Pettit/3dModels/pull/391)

### Evidence and reuse

Photos supplied by [Travel Victoria](https://www.travelvictoria.com.au/). Each ID below links to the exact gallery image inspected. The dates are HTTP file modification dates. Individual image files had no EXIF capture date. The references inform broad shape and location. Check the publisher’s credit, photo-count and ownership conditions before reproducing any image. [Gallery and captions](https://www.travelvictoria.com.au/inverloch/photos/) · [Photo terms](https://www.travelvictoria.com.au/about/photos/)

| File date | Locations and reference photos |
| --- | --- |
| 15 April 2010 | [TV011 north side](https://www.travelvictoria.com.au/images/inverloch/photos/inverloch-011.jpg), [TV012 hotel long face](https://www.travelvictoria.com.au/images/inverloch/photos/inverloch-012.jpg), [TV013 corner](https://www.travelvictoria.com.au/images/inverloch/photos/inverloch-013.jpg), [TV014 from Williams](https://www.travelvictoria.com.au/images/inverloch/photos/inverloch-014.jpg) |
| 21 December 2011 | [TV019 adjoining shops](https://www.travelvictoria.com.au/images/inverloch/photos/inverloch-019.jpg), [TV022 museum](https://www.travelvictoria.com.au/images/inverloch/photos/inverloch-022.jpg), [TV023 reverse view](https://www.travelvictoria.com.au/images/inverloch/photos/inverloch-023.jpg), [TV027 lawn entrance](https://www.travelvictoria.com.au/images/inverloch/photos/inverloch-027.jpg), [TV028 shelter](https://www.travelvictoria.com.au/images/inverloch/photos/inverloch-028.jpg), [TV029 towards the beach](https://www.travelvictoria.com.au/images/inverloch/photos/inverloch-029.jpg) |

Survey map geometry © OpenStreetMap contributors, distributed under the ODbL 1.0. A line's first and last node IDs identify its clipped extent on the source way. Map edit dates identify the data revision. [OSM extract](https://api.openstreetmap.org/api/0.6/map?bbox=145.7279,-38.6366,145.7312,-38.6332) · [Licence and attribution](https://www.openstreetmap.org/copyright)

## Prepare another corridor

Use the existing town data to make a local planning map. From the repository root, run either command with Python 3. The exporter needs no network or additional packages.

```sh
python tools/streetscapes/streets.py --street "Norman Road" --street "Surf Parade" --radius 30 --output next-corridor.geojson
python tools/streetscapes/streets.py --output whole-town.geojson
```

The whole-town export contains 881 street and path records and 311 mapped footprints at the planning baseline. Of those linear records, 479 are unnamed. Selecting a named street includes each of its mapped sections and every footprint with a vertex within the specified distance of its centreline. On divided roads the two carriageways contribute separate lengths. Row indices identify features only within the corresponding town file revision.

Choose adjoining sections from that map and give each street side an owner. Match each photographed frontage to a footprint, assign a stable local feature ID and log the dated photo, permission and visible extent. One footprint can host several frontages. The 5,712 procedural houses supply background coverage and require independent property evidence before individually modelling them. Start the next connected survey at a pilot boundary. Report *mapped path length*, *street-side length backed by dated photography* and *frontages recreated* separately. This pilot has 0 m of street side verified by capture-dated photographs in the sources above. [Town rollout](../../.agents/skills/inverloch-streetscapes/references/town-rollout.md)
