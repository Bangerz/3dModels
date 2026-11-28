"""Print one isolated Explore player brief for an agent or a human facilitator."""

import argparse
from pathlib import Path


def main():
    directory = Path(__file__).resolve().parent
    roles = {path.stem: path for path in (directory / "roles").glob("*.md")}
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("role", choices=sorted(roles))
    role = parser.parse_args().role
    for path in (directory / "player.md", roles[role]):
        print(path.read_text(encoding="utf-8").strip(), end="\n\n")


if __name__ == "__main__":
    main()
