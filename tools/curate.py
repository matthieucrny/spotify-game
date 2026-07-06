#!/usr/bin/env python3
"""Curation : candidats vérifiés -> nouveaux morceaux prêts pour tracks.js.
- nettoie les titres (suffixes remaster/radio edit)
- déduplique (par URI et par titre+artiste normalisés, vs base existante aussi)
- borne l'année via la playlist décennie, applique les corrections manuelles
- limite le nombre de titres par artiste
- assigne origine/genre (héritage artiste seed, sinon table manuelle)
Sortie : un JSON trié à relire, puis génération de tracks.js."""
import json, re, sys, unicodedata
import os
SP = os.path.dirname(os.path.abspath(__file__))
TRACKS_JS = os.path.join(SP, "..", "js", "tracks.js")

from collections import defaultdict

MAX_PER_ARTIST = 4

def norm(s):
    s = unicodedata.normalize("NFD", s.lower())
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = re.sub(r"\(.*?\)|\[.*?\]", " ", s)
    s = re.sub(r"[^a-z0-9]+", " ", s).strip()
    return s

def clean_title(t):
    # retire les suffixes techniques : " - Remastered 2011", " - Radio Edit", " (feat. X)" reste
    t = re.sub(r"\s*-\s*(19|20)?\d{0,4}\s*remaster(ed)?( version)?( \d{4})?\s*$", "", t, flags=re.I)
    t = re.sub(r"\s*-\s*(radio edit|single version|album version|mono|stereo|original mix|edit)\s*$", "", t, flags=re.I)
    t = re.sub(r"\s*\((19|20)?\d{0,4}\s*remaster(ed)?( version)?\)\s*$", "", t, flags=re.I)
    t = re.sub(r"\s*-\s*from .*$", "", t, flags=re.I)
    return t.strip()

src = open(TRACKS_JS, encoding="utf-8").read()
existing = json.loads("[" + ",".join(re.findall(r"\{[^{}]*\}", src)) + "]")
existing_keys = {(norm(t["titre"]), norm(t["artiste"].split(",")[0])) for t in existing}
existing_uris = {t["spotify_uri"] for t in existing}

cands = json.load(open(SP + "/candidates.json", encoding="utf-8"))

# tables manuelles remplies après relecture (norm(titre), norm(artiste)) -> valeur
YEAR_OVERRIDES = {}
ORIGINE_OVERRIDES = {}
GENRE_OVERRIDES = {}
DROP = set()

out, seen, per_artist = [], set(), defaultdict(int)
for c in cands:
    titre = clean_title(c["titre"])
    main_artist = c["artiste_principal"]
    key = (norm(titre), norm(main_artist))
    if key in DROP or key in seen or key in existing_keys or c["uri"] in existing_uris:
        continue
    year = YEAR_OVERRIDES.get(key, c["spotify_year"])
    if not year:
        continue
    b = c.get("bounds")
    flag = bool(b and not (b[0] <= year <= b[1]))
    origine = ORIGINE_OVERRIDES.get(key) or c.get("origine_hint")
    genre = GENRE_OVERRIDES.get(key) or c.get("genre_hint")
    seen.add(key)
    out.append({"titre": titre, "artiste": c["artiste"], "artiste_principal": main_artist,
                "annee": year, "origine": origine, "genre": genre,
                "spotify_uri": c["uri"], "source": c["source"], "year_suspect": flag})

# tri : artistes non attribués et années suspectes en premier pour relecture
out.sort(key=lambda t: (not t["year_suspect"], t["origine"] is not None, t["artiste_principal"], t["annee"]))
json.dump(out, open(SP + "/curated_draft.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
n_missing = sum(1 for t in out if not t["origine"] or not t["genre"])
n_flag = sum(1 for t in out if t["year_suspect"])
print(f"{len(out)} candidats après dédup — {n_missing} sans origine/genre, {n_flag} années suspectes")
