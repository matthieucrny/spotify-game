#!/usr/bin/env python3
"""Seconde passe : re-vérifie les candidats manquants, doucement, avec causes d'échec."""
import json, re, time, urllib.request, urllib.error
import os
SP = os.path.dirname(os.path.abspath(__file__))
TRACKS_JS = os.path.join(SP, "..", "js", "tracks.js")

from concurrent.futures import ThreadPoolExecutor

SP = UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"}


# recharge les candidats bruts en refaisant la partie collecte depuis le cache ? Non :
# on relit candidates.json (vérifiés) et on rejoue la collecte des sources pour retrouver les manquants.
import importlib.util
spec = importlib.util.spec_from_file_location("h", SP + "/harvest.py")

# Plus simple : on refait la collecte des listes (playlists + artistes) qui est légère (106 requêtes),
# puis on ne re-vérifie que les URIs absentes de candidates.json.
def fetch_embed(kind, sid, retries=4):
    url = f"https://open.spotify.com/embed/{kind}/{sid}"
    for i in range(retries):
        try:
            req = urllib.request.Request(url, headers=UA)
            html = urllib.request.urlopen(req, timeout=20).read().decode("utf-8", "replace")
            m = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', html, re.S)
            if not m:
                return ("nojson", None)
            data = json.loads(m.group(1))
            return ("ok", data["props"]["pageProps"]["state"]["data"]["entity"])
        except urllib.error.HTTPError as e:
            if e.code in (429, 503):
                time.sleep(3 * (i + 1))
                continue
            return (f"http{e.code}", None)
        except Exception:
            time.sleep(2 * (i + 1))
    return ("timeout/ratelimit", None)

def uri_id(uri): return uri.rsplit(":", 1)[-1]

PLAYLISTS = {
    "37i9dQZF1DXaKIA8E7WcJj": ("All Out 60s", (1955, 1972)),
    "37i9dQZF1DWTJ7xPn4vNaz": ("All Out 70s", (1968, 1982)),
    "37i9dQZF1DX4UtSsGT1Sbe": ("All Out 80s", (1978, 1992)),
    "37i9dQZF1DXbTxeAdrVG2l": ("All Out 90s", (1988, 2002)),
    "37i9dQZF1DX4o1oenSJRJd": ("All Out 2000s", (1998, 2012)),
    "37i9dQZF1DX5Ejj0EkURtP": ("All Out 2010s", (2008, 2022)),
}

src = open(TRACKS_JS, encoding="utf-8").read()
existing = json.loads("[" + ",".join(re.findall(r"\{[^{}]*\}", src)) + "]")
existing_uris = {t["spotify_uri"] for t in existing}
done = json.load(open(SP + "/candidates.json", encoding="utf-8"))
done_uris = {t["uri"] for t in done}

candidates = {}
for pid, (label, bounds) in PLAYLISTS.items():
    st, ent = fetch_embed("playlist", pid)
    for t in (ent or {}).get("trackList", []):
        uri = t.get("uri", "")
        if uri and uri not in candidates:
            candidates[uri] = {"titre": t["title"], "artiste": t["subtitle"], "source": label, "bounds": bounds}

def track_artists(track):
    st, ent = fetch_embed("track", uri_id(track["spotify_uri"]))
    return [(a["name"], uri_id(a["uri"])) for a in (ent or {}).get("artists", [])][:1]

with ThreadPoolExecutor(6) as ex:
    artist_lists = list(ex.map(track_artists, existing))
artists = {}
for track, alist in zip(existing, artist_lists):
    for name, aid in alist:
        artists.setdefault(aid, {"name": name, "origine": track["origine"], "genre": track["genre"]})

def artist_top(item):
    aid, meta = item
    st, ent = fetch_embed("artist", aid)
    return [{"titre": t["title"], "artiste": t["subtitle"] or meta["name"], "uri": t["uri"],
             "source": f"artist:{meta['name']}", "origine_hint": meta["origine"], "genre_hint": meta["genre"]}
            for t in (ent or {}).get("trackList", [])]

with ThreadPoolExecutor(6) as ex:
    for tops in ex.map(artist_top, artists.items()):
        for t in tops:
            candidates.setdefault(t["uri"], t)

missing = {u: m for u, m in candidates.items() if u not in done_uris and u not in existing_uris}
print(f"candidats totaux {len(candidates)}, déjà vérifiés {len(done)}, à re-vérifier {len(missing)}", flush=True)

BAD_TITLE = re.compile(r"\b(live|en direct|karaok|instrumental|sped.?up|slowed|acoustic|unplugged|demo|commentary)\b", re.I)
fails = {}

def verify(item):
    uri, meta = item
    st, ent = fetch_embed("track", uri_id(uri))
    if not ent:
        fails[uri] = st
        return None
    if not ent.get("isPlayable", False):
        fails[uri] = "unplayable"
        return None
    title = ent["name"]
    if BAD_TITLE.search(title):
        fails[uri] = "bad-title:" + title[:40]
        return None
    dur = ent.get("duration", 0)
    if dur and dur < 90_000:
        fails[uri] = "short"
        return None
    iso = (ent.get("releaseDate") or {}).get("isoString", "")
    year = int(iso[:4]) if iso[:4].isdigit() else None
    return {"titre": title,
            "artiste": ", ".join(a["name"] for a in ent.get("artists", [])),
            "artiste_principal": (ent.get("artists") or [{"name": meta.get("artiste", "?")}])[0]["name"],
            "spotify_year": year, "uri": uri, "source": meta.get("source", ""),
            "bounds": meta.get("bounds"), "origine_hint": meta.get("origine_hint"),
            "genre_hint": meta.get("genre_hint")}

new = []
with ThreadPoolExecutor(4) as ex:
    for v in ex.map(verify, missing.items()):
        if v:
            new.append(v)
print(f"récupérés en 2e passe : {len(new)}", flush=True)
from collections import Counter
print("causes d'échec :", Counter(fails.values()).most_common(8), flush=True)

all_tracks = done + new
json.dump(all_tracks, open(SP + "/candidates.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(f"total candidats vérifiés : {len(all_tracks)}", flush=True)
