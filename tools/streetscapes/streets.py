"""Export Explore's mapped streets and candidate footprints as a fieldwork GeoJSON."""

import argparse
import json
import sys
from math import dist
from pathlib import Path


TOWN = Path(__file__).resolve().parents[2] / "town3d" / "town.json"
ATTRIBUTION = "Map data © OpenStreetMap contributors, ODbL 1.0"


def points(packed):
    # The same local decimetres as tools/race/net.py, east and south from the origin.
    return [(x / 10, z / 10) for x, z in zip(packed[::2], packed[1::2])]


def near_segment(point, start, end, radius):
    x, z = point
    ax, az = start
    bx, bz = end
    if not (min(ax, bx) - radius <= x <= max(ax, bx) + radius
            and min(az, bz) - radius <= z <= max(az, bz) + radius):
        return False
    dx, dz = bx - ax, bz - az
    square = dx * dx + dz * dz
    along = max(0, min(1, ((x - ax) * dx + (z - az) * dz) / square)) if square else 0
    return dist(point, (ax + along * dx, az + along * dz)) <= radius


def export(town, streets, radius):
    lon0, lat0 = town["meta"]["origin"]
    sx, sz = town["meta"]["metresPerDegree"]
    names = town["names"]
    features, segments = [], []

    def coordinates(vertices):
        return [[round(lon0 + x / sx, 7), round(lat0 - z / sz, 7)] for x, z in vertices]

    def add(kind, coords, props):
        features.append({
            "type": "Feature",
            "properties": props,
            "geometry": {"type": kind, "coordinates": coords},
        })

    for index, road in enumerate(town["roads"]):
        name = names[road[4]] if road[4] >= 0 else None
        if streets and name not in streets:
            continue
        line = points(road[5])
        segments.extend(zip(line, line[1:]))
        add("LineString", coordinates(line), {
            "kind": "mapped centreline",
            "street": name,
            "town_road_index": index,
            "mapped_length_m": round(sum(map(dist, line, line[1:])), 1),
        })

    for index, building in enumerate(town["buildings"]):
        ring = points(building["p"])
        if streets and not any(near_segment(p, a, b, radius) for p in ring for a, b in segments):
            continue
        if ring[-1] != ring[0]:
            ring.append(ring[0])
        # GeoJSON exterior rings run anticlockwise. South-positive local Z reverses winding.
        if sum(ax * bz - bx * az for (ax, az), (bx, bz) in zip(ring, ring[1:])) > 0:
            ring.reverse()
        add("Polygon", [coordinates(ring)], {
            "kind": "mapped footprint",
            "name": building["n"] or None,
            "town_building_index": index,
            "building": building["k"],
        })

    return {"type": "FeatureCollection", "attribution": ATTRIBUTION,
            "licence": "https://www.openstreetmap.org/copyright", "features": features}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--street", action="append", default=[],
                        help="Name in town.json. Repeat for adjoining streets; omit for the whole town.")
    parser.add_argument("--radius", type=float, default=30,
                        help="Include footprints with a vertex within this many metres of a selected street.")
    parser.add_argument("--output", type=Path, required=True, help="Destination GeoJSON file.")
    args = parser.parse_args()
    if not 0 <= args.radius < float("inf"):
        parser.error("--radius must be a finite non-negative number")
    town = json.loads(TOWN.read_text(encoding="utf-8"))

    def normalise(name):
        return name.strip().replace("’", "'").casefold()

    known = {normalise(name): name for name in town["names"]}
    missing = [name for name in args.street if normalise(name) not in known]
    if missing:
        parser.error("unknown street name(s): " + ", ".join(missing))
    collection = export(town, {known[normalise(name)] for name in args.street}, args.radius)
    args.output.write_text(json.dumps(collection, ensure_ascii=False) + "\n", encoding="utf-8")
    roads = sum(f["geometry"]["type"] == "LineString" for f in collection["features"])
    buildings = len(collection["features"]) - roads
    print(f"{roads} mapped street records and {buildings} mapped footprints.", file=sys.stderr)


if __name__ == "__main__":
    main()
