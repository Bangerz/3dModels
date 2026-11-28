#!/usr/bin/env python3
"""Wrap app.html into a full web page for GitHub Pages.

app.html is written as a page body (the same file also runs as a private Claude
artifact). This adds the document head, home-screen icon and manifest.

Usage: python3 build.py SITE_DIR
"""
import hashlib
import json
import os
import re
import shutil
import subprocess
import sys

from tools.explore_collision import sync_preview

site = sys.argv[1] if len(sys.argv) > 1 else "_site"
here = os.path.dirname(os.path.abspath(__file__))
app = open(os.path.join(here, "app.html"), encoding="utf-8").read()
sync_preview(app, "app.html")

m = re.search(r"<title>(.*?)</title>", app)
title = m.group(1) if m else "Awesome News"
# Public address, used for the link preview when someone shares the site.
repo = os.environ.get("GITHUB_REPOSITORY", "Ashley-Pettit/awesome-news")
owner, name = repo.split("/", 1)
site_url = os.environ.get("SITE_URL", f"https://{owner.lower()}.github.io/{name}/")
desc = "News that's all about you and what you're interested in. Customise your news feed, full articles, TV and listen modes. Optionally decrease negative news."
body = re.sub(r"<title>.*?</title>\s*", "", app, count=1)
body = re.sub(r'<meta name="claude:[^"]+"[^>]*>\s*', "", body)
body = re.sub(r'<meta name="theme-color"[^>]*>\s*', "", body)  # the head sets light and dark colours
# Awesome News shows the same Local news as the local apps when you pick their area (Moorooka, Inverloch), community feed and all.
if os.path.exists(os.path.join(here, "local", "brands.json")):
    _areas = {b["region"]: {k: v for k, v in b["local"].items() if v and k != "only"}
              for b in json.load(open(os.path.join(here, "local", "brands.json"), encoding="utf-8")).values() if b["region"] in ("moo", "inv")}
    assert body.count("const AREA_FEEDS = {};") == 1
    body = body.replace("const AREA_FEEDS = {};", f"const AREA_FEEDS = {json.dumps(_areas)};")

# The weather and drive views an admin kept from Explore in the private copy ("Use this view for everyone"), for every app.
_cams = os.path.join(here, "local", "wxcams.json")
if os.path.exists(_cams):
    assert body.count("const WX_CAMS = {};") == 1
    body = body.replace("const WX_CAMS = {};", f"const WX_CAMS = {json.dumps(json.load(open(_cams, encoding='utf-8')), separators=(',', ':'))};")

# AN_COMMIT can identify the checked-out files more accurately than the original
# workflow trigger. Resolve it once for both the version label and patch notes.
revision = os.environ.get("AN_COMMIT") or os.environ.get("GITHUB_SHA")
if not revision:
    try:
        revision = subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=here, stderr=subprocess.DEVNULL, text=True).strip()
    except (OSError, subprocess.CalledProcessError):
        revision = ""


def patch_notes(commit):
    if not re.fullmatch(r"[0-9a-fA-F]{7,64}", commit) or not os.path.exists(os.path.join(here, ".git")):
        return []
    try:
        log = subprocess.check_output(
            ["git", "log", "--no-merges", "-6", "-z", "--encoding=UTF-8", "--format=%H%x00%s%x00%b%x00%cI", commit, "--"],
            cwd=here, stderr=subprocess.DEVNULL, encoding="utf-8", errors="replace",
        )
    except (OSError, subprocess.CalledProcessError):
        return []
    notes = []
    fields = log.split("\0")
    for start in range(0, len(fields) - 3, 4):
        sha, subject, message, date = fields[start:start + 4]
        message = message.rstrip("\n")
        description, _, last_paragraph = message.rpartition("\n\n")
        if all(re.fullmatch(r"(?:Co-Authored-By|Claude-Session):[ \t]*\S.*", line, re.IGNORECASE)
               for line in last_paragraph.split("\n")):
            message = description.rstrip("\n")
        notes.append({"sha": sha, "subject": subject, "body": message, "date": date})
    return notes


patch_notes_marker = "<!-- EXPLORE_PATCH_NOTES -->"
patch_notes_script = ""
if patch_notes_marker in body:
    # Prevent a commit message from closing the script element inside the HTML parser.
    notes = json.dumps(patch_notes(revision), separators=(",", ":")).replace("<", "\\u003c")
    patch_notes_script = f'<script type="application/json" id="explore-patch-notes">{notes}</script>'

head = f"""<!doctype html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{site_url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{title}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{site_url}">
<meta property="og:image" content="{site_url}icons/share-card.png?v=3">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Awesome News app icon and name">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="{site_url}icons/share-card.png?v=3">
<meta name="theme-color" content="#1c3047" media="(prefers-color-scheme: light)">
<meta name="format-detection" content="telephone=no">
<meta name="theme-color" content="#1c3047" media="(prefers-color-scheme: dark)">
<!-- the 3D site is dark all the way to the phone's edges: Safari's bars top and bottom take the page's colour, rather than the news
     app's light grey (Ash, 16 November 2026: "The new version opens like this. I don't like it. Note header and footer") -->
<style>html, body {{ background: #13233a !important; }}</style>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="{title}">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" href="icons/favicon-64.png?v=2">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png?v=2">
<style>
:root{{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}
body{{margin:0;font:14px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}}
img{{max-width:100%}}
[hidden]{{display:none!important}}
</style>
</head>
<body>
"""

def inverloch_preloads(page_body):
    # Use the version that townModelLib will request, including on a renderer-only update.
    model = re.search(r'lib: "InverlochModel", src: TOWN3D \+ "([^"]+)"', page_body)
    if not model:
        raise ValueError("Cannot find the Inverloch renderer URL for the Explore head")
    town_map = re.search(r'place: "inv", pre: \["([^"]+)"', page_body)
    if not town_map:
        raise ValueError("Cannot find the Inverloch road map URL for the Explore head")
    return """<script>
(() => {
  // A reload after switching towns restores the other town even on the Inverloch URL.
  try {
    if (performance.getEntriesByType("navigation")[0]?.type === "reload" &&
        ["moo", "logan"].includes(sessionStorage.getItem("an-ex-town"))) return;
  } catch {}
  const ground = matchMedia("(pointer: coarse)").matches ? "ground-2k.webp" : "ground.webp";
  for (const [file, type] of [[MODEL, "script"], [TOWN_MAP, "fetch"], ["height.png", "fetch"], [ground, "image"]]) {
    const hint = document.createElement("link");
    hint.rel = "preload"; hint.as = type; hint.href = "town3d/" + file;
    if (type !== "script") hint.crossOrigin = "anonymous";
    if (type === "script") hint.id = "inv-model-preload";
    document.head.appendChild(hint);
  }
})();
</script>""".replace("MODEL", json.dumps(model[1])).replace("TOWN_MAP", json.dumps(town_map[1]))


def direct_inverloch_body(page_body):
    # bsLite drops these weather/Listen scenes for every town on the direct Explore entry,
    # including a different town restored on reload. Keep them on full app and preview pages.
    start = "    // BEGIN LISTEN_AND_BOWLS_WEATHER_SCENES\n"
    end = "    // END LISTEN_AND_BOWLS_WEATHER_SCENES\n"
    if page_body.count(start) != 1 or page_body.count(end) != 1:
        raise ValueError("Expected one marked group of weather-only scenes")
    before, scenes = page_body.split(start)
    _, after = scenes.split(end)
    return before + after


# A build stamp: the app checks version.json against it and reloads itself when the site has a newer app
# (phones keep a home-screen app open for days without reloading).
def stamped(hd, bd, folder):
    build = hashlib.sha1((hd + bd).encode()).hexdigest()[:12]
    with open(os.path.join(folder, "version.json"), "w") as f:
        json.dump({"build": build}, f)
    from datetime import datetime, timedelta, timezone
    now = datetime.now(timezone(timedelta(hours=10)))  # Brisbane time, shown to Rod and Ash
    built = f"{now.day} {now:%b %H:%M}"
    return hd.replace("<head>\n", f'<head>\n<meta name="an-build" content="{build}">\n<meta name="an-built" content="{built}">\n<meta name="an-commit" content="{revision[:7]}">\n', 1)


os.makedirs(site, exist_ok=True)
index_body = body.replace(patch_notes_marker, patch_notes_script, 1)
with open(os.path.join(site, "index.html"), "w", encoding="utf-8") as f:
    f.write(stamped(head, index_body, site) + index_body.strip() + "\n</body>\n</html>\n")

# The beta: beta/app.html, at /beta/, sharing the same news, voice and icons (everything resolves from the main folder).
beta_src = os.path.join(here, "beta", "app.html")
if os.path.exists(beta_src):
    bapp = open(beta_src, encoding="utf-8").read()
    sync_preview(bapp, "beta/app.html")
    bbody = re.sub(r"<title>.*?</title>\s*", "", bapp, count=1)
    bbody = re.sub(r'<meta name="claude:[^"]+"[^>]*>\s*', "", bbody)
    bbody = re.sub(r'<meta name="theme-color"[^>]*>\s*', "", bbody)
    bhead = (head.replace("<head>\n", '<head>\n<base href="../">\n', 1)
                 .replace(f"<title>{title}</title>", f"<title>{title} Beta</title>")
                 .replace('<link rel="canonical"', '<meta name="robots" content="noindex">\n<link rel="canonical"'))
    os.makedirs(os.path.join(site, "beta"), exist_ok=True)
    # what the beta is, shown where the version goes (beta/LABEL, say "#96 4747ba4"), instead of the main app's commit
    blabel = open(os.path.join(here, "beta", "LABEL"), encoding="utf-8").read().strip() if os.path.exists(os.path.join(here, "beta", "LABEL")) else ""
    bstamp = (lambda h, b, d: re.sub(r'(<meta name="an-commit" content=")[^"]*"', lambda m: m.group(1) + blabel.replace('"', "") + '"', stamped(h, b, d))) if blabel else stamped
    with open(os.path.join(site, "beta", "index.html"), "w", encoding="utf-8") as f:
        f.write(bstamp(bhead, bbody, os.path.join(site, "beta")) + bbody.strip() + "\n</body>\n</html>\n")
    print(f"Built {site}/beta/index.html")
    # ...and a page for each town's 3D model in the beta (/beta/moorooka/ and the like), which opens straight into it, so a
    # change to Explore can be tried on a phone before it goes in the app (Ash, 15 November 2026: "show me pr 96 as a branch
    # not in main app")
    for bdir, bplace in (("moorooka", "moo"), ("inverloch", "inv"), ("logan", "logan")):
        xh = (bhead.replace('<base href="../">', '<base href="../../">', 1)
                   .replace("<head>\n", f'<head>\n<meta name="an-explore" content="{bplace}">\n', 1))
        if bplace == "inv":
            xh = xh.replace('<base href="../../">', '<base href="../../">\n' + inverloch_preloads(bbody), 1)
        os.makedirs(os.path.join(site, "beta", bdir), exist_ok=True)
        route_body = direct_inverloch_body(bbody) if bplace == "inv" else bbody
        with open(os.path.join(site, "beta", bdir, "index.html"), "w", encoding="utf-8") as f:
            f.write(bstamp(xh, route_body, os.path.join(site, "beta", bdir)) + route_body.strip() + "\n</body>\n</html>\n")
shutil.copytree(os.path.join(here, "icons"), os.path.join(site, "icons"), dirs_exist_ok=True)
shutil.copy(os.path.join(here, "manifest.webmanifest"), site)
shutil.copy(os.path.join(here, "sw.js"), site)
# The whole-town 3D models of Inverloch and Moorooka ("Virtually explore"; Admin > 3D scenes): scripts and data, only fetched when one is opened.
if os.path.isdir(os.path.join(here, "town3d")):
    shutil.copytree(os.path.join(here, "town3d"), os.path.join(site, "town3d"), dirs_exist_ok=True, ignore=shutil.ignore_patterns("*.md"))
# The balcony concept (Ash, 21 November 2026: "I want to be able to walk around the 3d model. Put it into my other 3d models. I want to be
# able to walk up the stairs"): its own walk-through page at /balcony/explore/, not part of the towns' Explore. balcony/src/main.js is
# the source; balcony/explore/balcony.js is it bundled with three.js (see balcony/README.md). The page shows the commit it was built from.
if os.path.isdir(os.path.join(here, "balcony", "explore")):
    bal_out = os.path.join(site, "balcony", "explore")
    shutil.copytree(os.path.join(here, "balcony", "explore"), bal_out, dirs_exist_ok=True)
    shutil.copy(os.path.join(here, "balcony", "index.html"), os.path.join(site, "balcony", "index.html"))
    bal_commit = (os.environ.get("AN_COMMIT") or os.environ.get("GITHUB_SHA") or "")[:7]
    if not bal_commit:
        try:
            import subprocess
            bal_commit = subprocess.run(["git", "rev-parse", "--short=7", "HEAD"], capture_output=True, text=True, cwd=here).stdout.strip()
        except Exception:
            bal_commit = ""
    bal_page = os.path.join(bal_out, "index.html")
    bal_html = open(bal_page, encoding="utf-8").read()
    assert "__COMMIT__" in bal_html, "balcony page"
    with open(bal_page, "w", encoding="utf-8") as f:
        f.write(bal_html.replace("__COMMIT__", bal_commit or "dev"))
    print(f"Built {bal_out}/index.html")
# Council news pictures sent from the work PC (council_news.py), served next to the app.
if os.path.isdir(os.path.join(here, "council", "img")):
    shutil.copytree(os.path.join(here, "council", "img"), os.path.join(site, "council", "img"), dirs_exist_ok=True)
# The local news apps ("Moorooka News", "The Logan Wire"): copies of Awesome News with their own name, icon and
# install details, whose Local news is tailored to the area (local/brands.json; LOCAL_APP in app.html). Each sits in its own
# folder but reads the same news, voice and pictures as the main app (<base href="../">), like the beta.
if os.path.exists(os.path.join(here, "local", "brands.json")):
    import base64
    brands = json.load(open(os.path.join(here, "local", "brands.json"), encoding="utf-8"))
    for slug, b in brands.items():
        d, nm = b["dir"], b["name"]
        out = os.path.join(site, d)
        os.makedirs(out, exist_ok=True)
        url = f"{site_url}{d}/"
        icon = "data:image/png;base64," + base64.b64encode(open(os.path.join(here, "local", slug, "icon-120.png"), "rb").read()).decode()
        lbody = body.replace("Awesome News", nm)
        cfg = {"extra": b["local"].get("extra", "")}
        cfg.update({k: v for k, v in b["local"].items() if k != "extra" and v})
        for a, z in [('const DEFAULT_REGION = "qld";', f'const DEFAULT_REGION = {json.dumps(b["region"])};'),
                     ("const LOCAL_APP = null;", f"const LOCAL_APP = {json.dumps(cfg)};"),
                     ('const OPEN_KEY = "";', f'const OPEN_KEY = {json.dumps(b["open_key"])};'),
                     ('const KEY_PREFIX = "";', f'const KEY_PREFIX = {json.dumps(b["prefix"])};')]:
            assert lbody.count(a) == 1, a
            lbody = lbody.replace(a, z)
        lbody = re.sub(r'const APP_ICON = "data:image/png;base64,[^"]+";', lambda m: f'const APP_ICON = "{icon}";', lbody, count=1)
        lbody = lbody.replace(patch_notes_marker, patch_notes_script, 1)
        lhead = (head.replace("<head>\n", '<head>\n<base href="../">\n', 1)
                     .replace(f"<title>{title}</title>", f"<title>{nm}</title>")
                     .replace(f'content="{title}"', f'content="{nm}"')
                     .replace(desc, b["tagline"])
                     .replace(f'href="{site_url}"', f'href="{url}"').replace(f'content="{site_url}"', f'content="{url}"')
                     .replace(f"{site_url}icons/share-card.png?v=3", f"{url}share.png?v=2")
                     .replace("Awesome News app icon and name", f"{nm} app icon and name")
                     .replace('href="manifest.webmanifest"', f'href="{d}/manifest.webmanifest"')
                     .replace('href="icons/favicon-64.png?v=2"', f'href="{d}/icon-192.png?v=1"')
                     .replace('href="icons/apple-touch-icon.png?v=2"', f'href="{d}/icon-180.png?v=1"'))
        with open(os.path.join(out, "index.html"), "w", encoding="utf-8") as f:
            f.write(stamped(lhead, lbody, out) + lbody.strip() + "\n</body>\n</html>\n")
        for fn in ("icon-180.png", "icon-192.png", "icon-512.png", "share.png"):
            shutil.copy(os.path.join(here, "local", slug, fn), out)
        with open(os.path.join(out, "manifest.webmanifest"), "w", encoding="utf-8") as f:
            json.dump({"name": nm, "short_name": b["short"], "description": b["tagline"], "start_url": "./", "scope": "./", "id": "./",
                       "display": "standalone", "background_color": "#f6f5fa", "theme_color": "#f6f5fa",
                       "icons": [{"src": "icon-192.png", "sizes": "192x192", "type": "image/png"}, {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"}]}, f)
        # Its 3D model's own share page (/<dir>/explore/): a link preview with a picture of the model and "3D model of <suburb>",
        # which opens Explore straight away. Link previews can't see "#explore" (and run the page's script), so the share button links here.
        sub = {"inv": "Inverloch", "moo": "Moorooka", "logan": "Logan"}.get(slug)
        if sub and os.path.exists(os.path.join(here, "local", slug, "explore-share.jpg")):
            ex = os.path.join(out, "explore"); os.makedirs(ex, exist_ok=True)
            for fn in ("explore-share.jpg", "explore-icon.png", "explore-icon-192.png", "explore-icon-512.png"):
                shutil.copy(os.path.join(here, "local", slug, fn), ex)
            t, dsc, eu = f"3D model of {sub}", f"Explore {sub} in 3D: fly over it and walk its streets, right in your browser. Built from open map data.", f"{url}explore/"
            # The full app at this address (so a link preview, which runs the page, stays here), with the 3D model's own card and
            # icon, and a flag that opens Explore straight away
            ehead = lhead.replace('<base href="../">', '<base href="../../">', 1).replace(f"<title>{nm}</title>", f"<title>{t}</title>", 1)
            for prop in ("og:title", "twitter:title"):
                ehead = ehead.replace(f'"{prop}" content="{nm}"', f'"{prop}" content="{t}"')
            ehead = (ehead.replace(b["tagline"], dsc)
                          .replace(f'content="{url}"', f'content="{eu}"').replace(f'href="{url}"', f'href="{eu}"')
                          .replace(f"{url}share.png?v=2", f"{eu}explore-share.jpg?v=2")
                          .replace(f"{nm} app icon and name", f"{t}, seen from the air")
                          .replace(f'href="{d}/icon-192.png?v=1"', f'href="{d}/explore/explore-icon.png?v=1"')
                          .replace(f'href="{d}/icon-180.png?v=1"', f'href="{d}/explore/explore-icon.png?v=1"')
                          .replace(f'href="{d}/manifest.webmanifest"', f'href="{d}/explore/manifest.webmanifest"')
                          .replace(f'name="apple-mobile-web-app-title" content="{nm}"', f'name="apple-mobile-web-app-title" content="{sub} 3D"')
                          .replace("<head>\n", f'<head>\n<meta name="an-explore" content="{slug}">\n', 1))
            assert "explore-share.jpg" in ehead and "an-explore" in ehead and '<base href="../../">' in ehead, "explore page head"
            if slug == "inv":
                ehead = ehead.replace('<base href="../../">', '<base href="../../">\n' + inverloch_preloads(lbody), 1)
            with open(os.path.join(ex, "index.html"), "w", encoding="utf-8") as f:
                route_body = direct_inverloch_body(lbody) if slug == "inv" else lbody
                f.write(stamped(ehead, route_body, ex) + route_body.strip() + "\n</body>\n</html>\n")
            # the T-rex fight invite (/<dir>/rex/), in Inverloch and Logan: the same app, opening Explore, with its own link preview, so a
            # "Seek help" link in WhatsApp or Messages shows "HELP! A T-rex is loose in Inverloch" and its picture (Ash, 27 November 2026: "I
            # moreso meant the text and image when I invite a friend in WhatsApp or similar"). The link's ?rex=1&from=<name> puts them in the
            # fight. Any town with a local/<slug>/rex-share.jpg gets one (Logan's since 27 November 2026, with its fight)
            if os.path.exists(os.path.join(here, "local", slug, "rex-share.jpg")):
                rx = os.path.join(out, "rex"); os.makedirs(rx, exist_ok=True); shutil.copy(os.path.join(here, "local", slug, "rex-share.jpg"), rx)
                rt, rdsc, ru = f"🦖 HELP! A T-rex is loose in {sub}", "Your mate needs backup. Tap to jump straight into the fight: you'll be in a car right next to it, spud gun loaded.", f"{url}rex/"
                rhead = ehead.replace(f"<title>{t}</title>", f"<title>{rt}</title>", 1)
                for prop in ("og:title", "twitter:title"):
                    rhead = rhead.replace(f'"{prop}" content="{t}"', f'"{prop}" content="{rt}"')
                rhead = (rhead.replace(dsc, rdsc).replace(f'content="{eu}"', f'content="{ru}"').replace(f'href="{eu}"', f'href="{ru}"')
                              .replace(f"{eu}explore-share.jpg?v=2", f"{ru}rex-share.jpg?v=1").replace(f"{t}, seen from the air", f"A T-rex towering over {sub}'s rooftops at sunset, a hotrod racing at it"))
                assert "rex-share.jpg" in rhead and rt in rhead and "an-explore" in rhead, "rex page head"
                with open(os.path.join(rx, "index.html"), "w", encoding="utf-8") as f:
                    f.write(stamped(rhead, lbody, rx) + lbody.strip() + "\n</body>\n</html>\n")
            # its own home-screen app (Ash, 15 November 2026: "In settings show how someone can make this explore an app on their
            # phone"): added from this page, it opens straight into the 3D model
            with open(os.path.join(ex, "manifest.webmanifest"), "w", encoding="utf-8") as f:
                json.dump({"name": t, "short_name": f"{sub} 3D", "description": dsc, "start_url": "./", "scope": "./", "id": "./",
                           "display": "standalone", "background_color": "#0e0d16", "theme_color": "#0e0d16",
                           "icons": [{"src": "explore-icon-192.png", "sizes": "192x192", "type": "image/png"}, {"src": "explore-icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"}]}, f)
        print(f"Built {out}/index.html")
# Moorooka AI (Ash, 20 November 2026): the chat guide to Moorooka at /moorooka-ai/, built by its own script from its folder.
# Its Local directory reads this app.html (the 3D model's shop signs and MOO_FOOD), so it grows as Explore does.
if os.path.exists(os.path.join(here, "moorooka-ai", "build.py")):
    import subprocess
    subprocess.run([sys.executable, os.path.join(here, "moorooka-ai", "build.py"), "--out", os.path.join(site, "moorooka-ai")], check=True)
open(os.path.join(site, ".nojekyll"), "w").close()
print(f"Built {site}/index.html")
