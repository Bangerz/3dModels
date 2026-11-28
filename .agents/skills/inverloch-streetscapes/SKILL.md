---
name: inverloch-streetscapes
description: Recreate or review a real Inverloch street, building frontage or public place in this repository’s Explore viewer using dated, reusable photographs and mapped geometry. Use for connected scene layout, procedural detail, and matched visual and performance comparisons.
---

# Recreate an Inverloch streetscape

Start with the view a person should recognise and the route that leads into it. Include both sides of the street, the corner return and the first adjoining frontage visible down the road. At A’Beckett, the bakery looked convincing in isolation while a blank native wall still dominated the eastward view toward the Esplanade Hotel.

## Establish what belongs there

- When sourcing footprints, measuring roofs or building a photo-based landmark, follow the [survey-to-model workflow](references/survey-to-model.md). It covers source selection, provenance, coordinate and height conversion, and matched review.
- Use project-owned photos, contributor photos with permission for modelling, or imagery licensed for the intended derivatives. Keep creator, image or survey date, original link, licence and attribution with the feature evidence. Google permits sharing Street View links and restricts screenshots, extraction and creation of data from its imagery. Use independently reusable sources to author geometry, textures and feature records. Check the particular aerial layer’s terms too. [Google geo guidelines](https://about.google/brand-resource-center/products-and-services/geo-guidelines/#street-view) · [Inverloch photo collection with reuse terms](https://south-gippsland.com/inverloch/)
- Anchor a frontage to its mapped wall ends and street side. Look along the street and back across it using licensed views. Use overhead coverage for footprint, setbacks and canopy spacing, and ground-level coverage for the shop sequence, door positions, awning returns, kerbs and parking direction. Business addresses can establish tenancy while offering little evidence for the entrance or facade.
- Record capture date separately from publication or page-update date. If a recent identifiable image contradicts an older one, record which feature changed. Mark estimated dimensions and obscured interiors. A funded crossing upgrade needs as-built evidence before its profile changes in the model.

## Fit the detail into Explore

- Inspect `town3d/town.json` and the current checkout’s `app.html`. Search for `INV_TOWN`, `TOWN_BLOCK`, `townLL`, `townModelGuests`, `townModelBlock` and `townModelExtras`. The weather scene and the whole-town viewer have different origins. For town-centre detail, use the existing conversion and grounding path. Block coordinates are metres, east on X and south on Z. Verify two identifiable corners before placing a run of shops. [Model handover](../../../town3d/README.md)
- Determine who supplies each wall, the ground beneath it and its collision. One native footprint can contain several tenancies. Add shallow detail to an aligned shell, split the visible bays, and turn the awning around the corner. Change a replacement boundary only when the geometry it removes is accounted for. Walk the handover from each side to catch doubled walls, depth flicker, disconnected paving and hidden entrances. Check landmark jump targets after a frontage moves. For changes to the compiled model, follow the canonical source/build instructions. [Repository workflow](../../../CLAUDE.md)
- Spend geometry on the silhouette, depth of the verandah, shape of the roof and placement of entries. Use shared geometry, batched vertex colours and original procedural atlases for repeated joinery, windows, paving and signs. Keep street furniture, parked cars and planting clear of the crossing and the approaches. Represent an opening's appearance and its actual traversability accurately in the handoff.

## Show what changed and what it cost

Pin baseline and candidate commits. Save the opening camera position, bearing, pitch and height above ground. Match camera path, lighting, viewport, device pixel ratio and quality on the real `/inverloch/explore/` page. Include the requested sightline plus a closer view when a relocated feature falls outside the original frame.

Record the comparison movie with a fixed clock. Benchmark separately in real time with encoding off. Report median and p95 frame and GPU times where available, draw calls, triangles, resident texture count, cold compressed same-origin bytes and request count. Identify the device and test scope. Keep review media outside the app payload. For changes affecting input, loading or main-thread work, use the current repository touch checks and distinguish emulation from a physical iPhone test. [Pinned A’Beckett capture harness and reproduction steps](https://github.com/Bangerz/3dModels/blob/baa813f2c4c54b503491fcc611016fc44df86fd1/abeckett-street/reproduce.md)

For work spanning multiple streets, use the [town rollout outline](references/town-rollout.md) to select a pilot, divide authorship and decide what to measure before expanding.
