#!/usr/bin/env python3
"""Récolte de morceaux vérifiés via les pages embed Spotify (sans auth).
Sources : playlists éditoriales par décennie + top titres des artistes de la base existante.
Sortie : candidates.json (tous les champs vérifiés côté Spotify)."""
import json, re, sys, time, urllib.request
import os
SP = os.path.dirname(os.path.abspath(__file__))
TRACKS_JS = os.path.join(SP, "..", "js", "tracks.js")

from concurrent.futures import ThreadPoolExecutor

UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"}
OUT = os.path.join(SP, "candidates.json")


PLAYLISTS = {  # id -> (label, décennie [min, max])
    "37i9dQZF1DXaKIA8E7WcJj": ("All Out 60s", (1955, 1972)),
    "37i9dQZF1DWTJ7xPn4vNaz": ("All Out 70s", (1968, 1982)),
    "37i9dQZF1DX4UtSsGT1Sbe": ("All Out 80s", (1978, 1992)),
    "37i9dQZF1DXbTxeAdrVG2l": ("All Out 90s", (1988, 2002)),
    "37i9dQZF1DX4o1oenSJRJd": ("All Out 2000s", (1998, 2012)),
    "37i9dQZF1DX5Ejj0EkURtP": ("All Out 2010s", (2008, 2022)),
}

def fetch_embed(kind, sid, retries=3):
    url = f"https://open.spotify.com/embed/{kind}/{sid}"
    for i in range(retries):
        try:
            req = urllib.request.Request(url, headers=UA)
            html = urllib.request.urlopen(req, timeout=15).read().decode("utf-8", "replace")
            m = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', html, re.S)
            if not m:
                return None
            data = json.loads(m.group(1))
            return data["props"]["pageProps"]["state"]["data"]["entity"]
        except Exception:
            time.sleep(1 + i)
    return None

def uri_id(uri):
    return uri.rsplit(":", 1)[-1]

# --- 1. Base existante ---
src = open(TRACKS_JS, encoding="utf-8").read()
existing = json.loads("[" + ",".join(re.findall(r"\{[^{}]*\}", src)) + "]")
print(f"base existante : {len(existing)} morceaux", flush=True)
existing_uris = {t["spotify_uri"] for t in existing}

# --- 2. Playlists par décennie ---
candidates = {}  # uri -> dict
for pid, (label, bounds) in PLAYLISTS.items():
    ent = fetch_embed("playlist", pid)
    if not ent:
        print(f"  !! playlist {label} inaccessible", flush=True)
        continue
    tl = ent.get("trackList", [])
    print(f"  playlist « {ent.get('name')} » : {len(tl)} titres", flush=True)
    for t in tl:
        uri = t.get("uri", "")
        if uri and uri not in candidates:
            candidates[uri] = {"titre": t["title"], "artiste": t["subtitle"],
                               "source": label, "bounds": bounds}

# --- 3. Artistes de la base -> top titres ---
def track_artists(track):
    ent = fetch_embed("track", uri_id(track["spotify_uri"]))
    if not ent:
        return []
    return [(a["name"], uri_id(a["uri"])) for a in ent.get("artists", [])][:1]  # artiste principal

with ThreadPoolExecutor(10) as ex:
    artist_lists = list(ex.map(track_artists, existing))
artists = {}
for track, alist in zip(existing, artist_lists):
    for name, aid in alist:
        artists.setdefault(aid, {"name": name, "origine": track["origine"], "genre": track["genre"]})
print(f"artistes seed : {len(artists)}", flush=True)

def artist_top(item):
    aid, meta = item
    ent = fetch_embed("artist", aid)
    if not ent:
        return []
    out = []
    for t in ent.get("trackList", []):
        out.append({"titre": t["title"], "artiste": t["subtitle"] or meta["name"],
                    "uri": t["uri"], "source": f"artist:{meta['name']}",
                    "origine_hint": meta["origine"], "genre_hint": meta["genre"]})
    return out

with ThreadPoolExecutor(10) as ex:
    for tops in ex.map(artist_top, artists.items()):
        for t in tops:
            if t["uri"] not in candidates:
                candidates[t["uri"]] = t
print(f"candidats bruts : {len(candidates)}", flush=True)

# --- 4. Vérification de chaque candidat (jouable, date, artiste canonique) ---
BAD_TITLE = re.compile(r"\b(live|en direct|karaok|instrumental|sped.?up|slowed|acoustic|unplugged|demo|commentary)\b", re.I)

def verify(item):
    uri, meta = item
    if uri in existing_uris:
        return None
    ent = fetch_embed("track", uri_id(uri))
    if not ent or not ent.get("isPlayable", False):
        return None
    title = ent["name"]
    if BAD_TITLE.search(title):
        return None
    dur = ent.get("duration", 0)
    if dur and dur < 90_000:
        return None
    iso = (ent.get("releaseDate") or {}).get("isoString", "")
    year = int(iso[:4]) if iso[:4].isdigit() else None
    return {
        "titre": title,
        "artiste": ", ".join(a["name"] for a in ent.get("artists", [])),
        "artiste_principal": (ent.get("artists") or [{"name": meta.get("artiste", "?")}])[0]["name"],
        "spotify_year": year,
        "uri": uri,
        "source": meta.get("source", ""),
        "bounds": meta.get("bounds"),
        "origine_hint": meta.get("origine_hint"),
        "genre_hint": meta.get("genre_hint"),
    }

with ThreadPoolExecutor(12) as ex:
    verified = [v for v in ex.map(verify, candidates.items()) if v]
print(f"candidats vérifiés jouables : {len(verified)}", flush=True)

json.dump(verified, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("écrit :", OUT, flush=True)
