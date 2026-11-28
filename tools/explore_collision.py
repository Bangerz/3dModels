"""Synchronize the standalone app and beta previews with the shared collision module.

Run python tools/explore_collision.py --write after editing src/explore/collision.mjs.
Without --write this checks both previews, as does the normal Pages build.
"""
import argparse
import re
from pathlib import Path
from textwrap import indent

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src/explore/collision.mjs"
START = "  // BEGIN GENERATED src/explore/collision.mjs\n"
END = "  // END GENERATED src/explore/collision.mjs\n"


def bundled_collision():
    # Keep the implementation literally the same inside the app's classic script.
    # Only the module's final named export list is specific to the Node / ESM entry.
    source = SOURCE.read_text(encoding="utf-8")
    footer = re.search(r"\nexport \{[\w,\s]+\};\s*\Z", source)
    if not footer:
        raise ValueError(f"{SOURCE.name} must end with its named export list")
    return indent(source[:footer.start()].rstrip() + "\n", "  ")


def sync_preview(page, filename, *, write=False):
    if page.count(START) != 1 or page.count(END) != 1:
        raise ValueError(f"{filename}: expected one generated collision block")
    before, generated = page.split(START)
    embedded, after = generated.split(END)
    canonical = bundled_collision()
    if embedded == canonical:
        return
    if not write:
        raise ValueError(f"{filename}: stale collision code. Run python tools/explore_collision.py --write")
    filename.write_text(before + START + canonical + END + after, encoding="utf-8", newline="\n")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--write", action="store_true", help="refresh the inline copies in app.html and beta/app.html")
    options = parser.parse_args()
    for host in (ROOT / "app.html", ROOT / "beta/app.html"):
        sync_preview(host.read_text(encoding="utf-8"), host, write=options.write)
