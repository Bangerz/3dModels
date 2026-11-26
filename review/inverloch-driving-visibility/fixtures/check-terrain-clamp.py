"""Compare the native shader's two clamp kernels on level-zero samples of the shipped ground image."""
import argparse
import hashlib
import json
from pathlib import Path

import numpy as np
from PIL import Image


SITES = {
    "Cuttriss Street": (879.4, -552.1),
    "Cashin Street": (-1179.3, -506.5),
    "Bass Highway": (948.8, -2238.6),
}


def linear(srgb):
    return np.where(srgb <= 0.04045, srgb / 12.92, ((srgb + 0.055) / 1.055) ** 2.4)


def srgb8(values):
    return 255 * np.where(values <= 0.0031308, 12.92 * values, 1.055 * values ** (1 / 2.4) - 0.055)


def region(ground, size, center):
    # World X points east, world Z points south. Pixel [0,0] is the NW corner.
    px = int((center[0] / size[0] + 0.5) * ground.width)
    py = int((center[1] / size[1] + 0.5) * ground.height)
    side = 64
    box = (px - side, py - side, px + side, py + side)
    values = linear(np.asarray(ground.crop(box), dtype=np.float64) / 255)
    here = values[2:-2, 2:-2]
    # At a level-zero texel center, an offset of 1.6 texels blends texels 1 and 2.
    halo = np.stack([
        0.4 * values[2:-2, 3:-1] + 0.6 * values[2:-2, 4:],
        0.4 * values[2:-2, 1:-3] + 0.6 * values[2:-2, :-4],
        0.4 * values[3:-1, 2:-2] + 0.6 * values[4:, 2:-2],
        0.4 * values[1:-3, 2:-2] + 0.6 * values[:-4, 2:-2],
    ])
    lo, hi = halo.min(axis=0), halo.max(axis=0)
    sharpened = here + 1.6 * (here - halo.mean(axis=0))
    old = np.clip(sharpened, lo, hi)
    new = np.clip(sharpened, np.minimum(here, lo), np.maximum(here, hi))
    exterior = (here < lo) | (here > hi)
    assert np.array_equal(new[exterior], here[exterior])
    assert np.array_equal(old[~exterior], new[~exterior])
    change = np.max(abs(srgb8(new) - srgb8(old)), axis=2)
    y, x = np.unravel_index(change.argmax(), change.shape)
    tx, ty = int(box[0] + 2 + x), int(box[1] + 2 + y)
    def triplet(v):
        return np.round(v[y, x], 5).tolist()
    return {
        "center_world_xz_m": center,
        "bounds_source_texels_xyxy_exclusive": [px - side + 2, py - side + 2, px + side - 2, py + side - 2],
        "sampled_texels": int(change.size),
        "count_any_channel_changes_by_at_least_5_of_255": int((change >= 5).sum()),
        "pct_any_channel_changes_by_at_least_5_of_255": round(100 * (change >= 5).mean(), 2),
        "most_changed_sample": {
            "source_texel_xy": [tx, ty],
            "world_xz_m": [round(((tx + 0.5) / ground.width - 0.5) * size[0], 3),
                           round(((ty + 0.5) / ground.height - 0.5) * size[1], 3)],
            "source_linear_rgb": triplet(here),
            "previous_linear_rgb": triplet(old),
            "candidate_linear_rgb": triplet(new),
            "source_srgb255": triplet(srgb8(here)),
            "previous_srgb255": triplet(srgb8(old)),
            "candidate_srgb255": triplet(srgb8(new)),
        },
    }


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("town3d", type=Path, help="directory containing ground.webp and town.json")
    args = parser.parse_args()
    source = args.town3d / "ground.webp"
    size = json.loads((args.town3d / "town.json").read_bytes())["meta"]["size"]
    with Image.open(source) as image:
        ground = image.convert("RGB")
        report = {
            "method": "Linear RGB, post-UV texel centers at mip zero, 1.6-texel taps, 1.6 gain, full-strength filter. This isolates the base-map clamp. Camera-dependent UV fray, mip selection, streaming overlays, lighting and screen coverage are outside this CPU comparison.",
            "source_sha256": hashlib.sha256(source.read_bytes()).hexdigest(),
            "source_size_px": ground.size,
            "terrain_size_m": size,
            "sites": {name: region(ground, size, center) for name, center in SITES.items()},
        }
    print(json.dumps(report, indent=2))
