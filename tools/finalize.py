#!/usr/bin/env python3
"""Relecture finale : curated_draft.json -> js/tracks.js.

Décisions éditoriales (relecture de juillet 2026) :
- morceaux issus des playlists décennies (tous internationaux) : gardés sauf
  DROP, année corrigée quand la date Spotify est une réédition (YEAR_FIX),
  genre assigné par artiste (GENRE_BY_ARTIST) ;
- morceaux issus des tops artistes : sélection manuelle KEEP_ARTIST uniquement
  (hits reconnus ; remixes, covers, live, rééditions et inédits écartés) ;
- max 4 nouveaux titres par artiste, dédoublonnage contre la base existante ;
- toutes les clés sont vérifiées : une clé qui ne matche rien fait échouer le
  script (protection contre les fautes de frappe).
"""
import json, re, sys, unicodedata, os
from collections import defaultdict

SP = os.path.dirname(os.path.abspath(__file__))
TRACKS_JS = os.path.join(SP, "..", "js", "tracks.js")
MAX_PER_ARTIST = 4


def norm(s):
    s = unicodedata.normalize("NFD", s.lower())
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = re.sub(r"\(.*?\)|\[.*?\]", " ", s)
    s = re.sub(r"[^a-z0-9]+", " ", s).strip()
    return s


# ---------- Playlists décennies : exclusions ----------
DROP_PLAYLIST = {
    ("dusty springfield", "spooky"),          # version incertaine
    ("britney spears", "stronger"),           # cap artiste
    ("madonna", "don t tell me"),             # cap artiste
    ("madonna", "4 minutes"),                 # cap artiste
    ("coldplay", "paradise"),                 # cap artiste
    ("coldplay", "adventure of a lifetime"),
    ("coldplay", "hymn for the weekend"),
    # vague 2
    ("faith hill", "this kiss"),              # country, année suspecte
    ("michael jackson", "heal the world"),    # cap artiste (MJ en garde 6)
    ("michael jackson", "they don t care about us"),
    ("michael jackson", "you are not alone"),
    ("michael jackson", "earth song"),
    ("matchbox twenty", "3am"),               # cap artiste
    ("the goo goo dolls", "slide"),           # cap artiste
    ("red hot chili peppers", "otherside"),   # cap artiste
}

# ---------- Corrections d'années (date Spotify = réédition/album tardif) ----------
YEAR_FIX = {
    ("paul anka", "put your head on my shoulder"): 1959,
    ("erma franklin", "piece of my heart"): 1967,
    ("betty everett", "it s in the kiss"): 1964,
    ("ray charles", "hit the road jack"): 1961,
    ("roy orbison", "oh pretty woman"): 1964,
    ("ben e king", "stand by me"): 1961,
    ("the ronettes", "be my baby"): 1963,
    ("the monkees", "i m a believer"): 1966,
    ("the monkees", "daydream believer"): 1967,
    ("aretha franklin", "a natural woman"): 1967,
    ("dusty springfield", "son of a preacher man"): 1968,
    ("simon garfunkel", "the boxer"): 1969,
    ("wheatus", "teenage dirtbag"): 2000,
    ("kylie minogue", "can t get you out of my head"): 2001,
    ("flo rida", "low"): 2007,
    ("rihanna", "don t stop the music"): 2007,
    ("kesha", "tik tok"): 2009,
    ("foster the people", "pumped up kicks"): 2010,
    ("calvin harris", "feel so close"): 2011,
    ("david guetta", "titanium"): 2011,
    ("one direction", "what makes you beautiful"): 2011,
    ("pitbull", "timber"): 2013,
    ("disclosure", "latch"): 2012,
    ("tom odell", "another love"): 2012,
    ("hozier", "take me to church"): 2013,
    ("magic", "rude"): 2013,
    ("dnce", "cake by the ocean"): 2015,
    ("camila cabello", "havana"): 2017,
    ("sean paul", "no lie"): 2016,
    ("lewis capaldi", "someone you loved"): 2018,
    ("post malone", "sunflower spider man into the spider verse"): 2018,
    # vague 2 (playlists)
    ("gala", "freed from desire"): 1996,
    ("ace of base", "all that she wants"): 1992,
}

# ---------- Titres affichés (nettoyage des suffixes techniques) ----------
TITLE_FIX = {
    ("the beach boys", "i get around"): "I Get Around",
    ("post malone", "sunflower spider man into the spider verse"): "Sunflower",
}

# ---------- Genres des morceaux issus des playlists (tous internationaux) ----------
GENRE_BY_ARTIST = {
    # années 60
    "etta james": "rnb", "dion": "pop", "elvis presley": "rock",
    "harry belafonte": "pop", "ben e king": "rnb", "roy orbison": "rock",
    "bob dylan": "rock", "johnny cash": "rock", "lesley gore": "pop",
    "the beach boys": "rock", "the beatles": "rock", "dionne warwick": "rnb",
    "the animals": "rock", "the drifters": "rnb", "the ronettes": "rnb",
    "the supremes": "rnb", "the lovin spoonful": "rock",
    "buffalo springfield": "rock", "frank sinatra": "pop", "sam dave": "rnb",
    "aretha franklin": "rnb", "frankie valli": "pop",
    "jefferson airplane": "rock", "jimi hendrix": "rock", "the doors": "rock",
    "the monkees": "pop", "the turtles": "pop", "bee gees": "pop",
    "cream": "rock", "dusty springfield": "rnb", "marvin gaye": "rnb",
    "simon garfunkel": "pop", "stevie wonder": "rnb",
    "creedence clearwater revival": "rock", "david bowie": "rock",
    "led zeppelin": "rock", "the archies": "pop", "the jackson 5": "rnb",
    "the rolling stones": "rock", "paul anka": "pop", "erma franklin": "rnb",
    "betty everett": "rnb", "ray charles": "rnb",
    # années 2000-2010
    "red hot chili peppers": "rock", "wheatus": "rock", "3 doors down": "rock",
    "britney spears": "pop", "coldplay": "rock", "eminem": "rap",
    "linkin park": "rock", "madonna": "pop", "outkast": "rap",
    "shaggy": "rnb", "christina aguilera": "pop", "creed": "rock",
    "mary j blige": "rnb", "nickelback": "rock", "weezer": "rock",
    "avril lavigne": "pop", "justin timberlake": "rnb",
    "kylie minogue": "pop", "nelly": "rap", "alicia keys": "rnb",
    "evanescence": "rock", "franz ferdinand": "rock", "kanye west": "rap",
    "keane": "rock", "kelly clarkson": "pop", "black eyed peas": "pop",
    "gorillaz": "electro", "plain white t s": "rock", "sean paul": "rap",
    "the fray": "rock", "gwen stefani": "pop", "nelly furtado": "pop",
    "snow patrol": "rock", "mgmt": "electro", "timbaland": "rap",
    "empire of the sun": "electro", "flo rida": "rap",
    "kings of leon": "rock", "lady gaga": "pop", "rihanna": "rnb",
    "iyaz": "pop", "jay z": "rap", "don omar": "rap", "kesha": "pop",
    "miguel": "rnb", "usher": "rnb", "foster the people": "pop",
    "gym class heroes": "rap", "pitbull": "rap", "adele": "pop",
    "calvin harris": "electro", "carly rae jepsen": "pop",
    "david guetta": "electro", "maroon 5": "pop", "one direction": "pop",
    "swedish house mafia": "electro", "arctic monkeys": "rock",
    "avicii": "electro", "disclosure": "electro", "john legend": "rnb",
    "katy perry": "pop", "lana del rey": "pop", "onerepublic": "pop",
    "tom odell": "pop", "ariana grande": "pop", "ed sheeran": "pop",
    "hozier": "pop", "j cole": "rap", "magic": "pop", "sam smith": "pop",
    "walk the moon": "pop", "demi lovato": "pop", "justin bieber": "pop",
    "omi": "pop", "tame impala": "rock", "the neighbourhood": "rock",
    "the weeknd": "pop", "twenty one pilots": "pop", "willow": "pop",
    "wiz khalifa": "rap", "bruno mars": "pop", "dnce": "pop",
    "frank ocean": "rnb", "mike posner": "pop", "the chainsmokers": "electro",
    "travis scott": "rap", "drake": "rap", "french montana": "rap",
    "imagine dragons": "rock", "khalid": "rnb", "maneskin": "rock",
    "portugal the man": "rock", "billie eilish": "pop",
    "camila cabello": "pop", "kendrick lamar": "rap", "harry styles": "pop",
    "lewis capaldi": "pop", "post malone": "rap", "taylor swift": "pop",
    # vague 2 (surtout All Out 90s)
    "depeche mode": "electro", "the smiths": "rock", "sting": "pop",
    "technotronic": "electro", "ac dc": "rock", "mc hammer": "rap",
    "roxette": "pop", "scorpions": "rock", "bryan adams": "rock",
    "lenny kravitz": "rock", "pearl jam": "rock", "r e m": "rock",
    "simply red": "pop", "spin doctors": "rock", "u2": "rock",
    "blind melon": "rock", "bon jovi": "rock", "dr dre": "rap",
    "the cure": "rock", "whitney houston": "rnb", "ace of base": "pop",
    "counting crows": "rock", "celine dion": "pop", "duran duran": "pop",
    "mazzy star": "rock", "big mountain": "pop", "green day": "rock",
    "seal": "rnb", "soundgarden": "rock", "tlc": "rnb",
    "alanis morissette": "rock", "luniz": "rap", "mariah carey": "rnb",
    "the smashing pumpkins": "rock", "blackstreet": "rnb", "fugees": "rap",
    "mark morrison": "rnb", "matchbox twenty": "rock", "robert miles": "electro",
    "spice girls": "pop", "the cardigans": "pop", "the wallflowers": "rock",
    "toni braxton": "rnb", "aqua": "pop", "backstreet boys": "pop",
    "blur": "rock", "foo fighters": "rock", "gala": "electro",
    "meredith brooks": "rock", "natalie imbruglia": "pop",
    "robbie williams": "pop", "sixpence none the richer": "pop",
    "the notorious b i g": "rap", "the verve": "rock",
    "third eye blind": "rock", "will smith": "rap", "2pac": "rap",
    "brandy": "rnb", "cher": "pop", "ms lauryn hill": "rap",
    "new radicals": "pop", "the goo goo dolls": "rock",
    "the offspring": "rock", "bloodhound gang": "rock",
    "destiny s child": "rnb", "dido": "pop", "ricky martin": "pop",
    "smash mouth": "rock", "jimmy eat world": "rock", "the game": "rap",
    "sean kingston": "rnb", "miley cyrus": "pop", "michael jackson": "pop",
}

# ---------- Tops artistes : sélection manuelle (hits uniquement) ----------
# clé (norm artiste_principal, norm titre) -> overrides {annee, titre, genre}
KEEP_ARTIST = {
    ("50 cent", "21 questions"): {},
    ("50 cent", "p i m p"): {},
    ("50 cent", "just a lil bit"): {},
    ("50 cent", "ayo technology"): {},
    ("abba", "waterloo"): {"genre": "pop"},
    ("abba", "mamma mia"): {"genre": "pop"},
    ("abba", "gimme gimme gimme"): {"genre": "pop"},
    ("abba", "the winner takes it all"): {"genre": "pop"},
    ("adele", "chasing pavements"): {},
    ("adele", "someone like you"): {},
    ("adele", "hello"): {},
    ("adele", "easy on me"): {},
    ("alain souchon", "allo maman bobo"): {},
    ("alain souchon", "la ballade de jim"): {},
    ("alain souchon", "l amour a la machine"): {},
    ("alain souchon", "et si en plus y a personne"): {},
    ("arcane", "ma meilleure ennemie"): {"titre": "Ma Meilleure Ennemie"},
    ("beyonce", "irreplaceable"): {},
    ("beyonce", "halo"): {},
    ("beyonce", "single ladies"): {},
    ("beyonce", "texas hold em"): {},
    ("billie eilish", "when the party s over"): {"annee": 2018},
    ("billie eilish", "happier than ever"): {},
    ("billie eilish", "what was i made for"): {"titre": "What Was I Made For?"},
    ("black eyed peas", "where is the love"): {},
    ("black eyed peas", "my humps"): {},
    ("black eyed peas", "boom boom pow"): {},
    ("britney spears", "circus"): {},
    ("calvin harris", "this is what you came for"): {"annee": 2016, "genre": "electro"},
    ("carole fredericks", "a nos actes manques"): {"annee": 1991},
    ("claude francois", "le lundi au soleil"): {},
    ("claude francois", "le telephone pleure"): {},
    ("claude francois", "cette annee la"): {},
    ("claude francois", "magnolias for ever"): {},
    ("daft punk", "around the world"): {},
    ("daft punk", "harder better faster stronger"): {},
    ("daft punk", "digital love"): {},
    ("daft punk", "get lucky"): {"titre": "Get Lucky"},
    ("daniel balavoine", "le chanteur"): {},
    ("daniel balavoine", "s o s d un terrien en detresse remasterise en 2009"):
        {"titre": "S.O.S. d'un terrien en détresse"},
    ("daniel balavoine", "vivre ou survivre"): {},
    ("daniel balavoine", "tous les cris les s o s"): {},
    ("desireless", "john"): {"annee": 1988},
    ("diam s", "dj"): {},
    ("diam s", "confessions nocturnes"): {},
    ("diam s", "jeune demoiselle"): {},
    ("diam s", "ma france a moi"): {},
    ("eminem", "mockingbird"): {},
    ("france gall", "la declaration d amour remasterise en 2004"):
        {"titre": "La déclaration d'amour", "annee": 1974},
    ("france gall", "il jouait du piano debout remasterise en 2004"):
        {"titre": "Il jouait du piano debout"},
    ("france gall", "resiste remasterise en 2004"): {"titre": "Résiste"},
    ("france gall", "poupee de cire poupee de son"): {"annee": 1965},
    ("gims", "est ce que tu m aimes pilule bleue"): {"titre": "Est-ce que tu m'aimes ?"},
    ("gloria gaynor", "never can say goodbye"): {"annee": 1974},
    ("guns n roses", "welcome to the jungle"): {},
    ("guns n roses", "paradise city"): {},
    ("guns n roses", "november rain"): {},
    ("guns n roses", "knockin on heaven s door"): {},
    ("haddaway", "life"): {},
    ("iam", "petit frere"): {},
    ("iam", "nes sous la meme etoile"): {},
    ("iam", "la saga"): {},
    ("iam", "demain c est loin"): {},
    ("indila", "love story"): {},
    ("indila", "tourner dans le vide"): {},
    ("indila", "s o s"): {},
    ("indila", "parle a ta tete"): {},
    ("indochine", "trois nuits par semaine"): {},
    ("indochine", "3e sexe"): {},
    ("indochine", "j ai demande a la lune"): {},
    ("indochine", "nos celebrations"): {},
    ("jean jacques goldman", "comme toi"): {},
    ("jean jacques goldman", "quand la musique est bonne"): {},
    ("jean jacques goldman", "envole moi"): {},
    ("jean jacques goldman", "je te donne"): {},
    ("joe dassin", "siffler sur la colline"): {"annee": 1968},
    ("joe dassin", "salut les amoureux city of new orleans"):
        {"titre": "Salut les amoureux"},
    ("joe dassin", "l ete indien"): {"annee": 1975},
    ("joe dassin", "et si tu n existais pas"): {"annee": 1975},
    ("les rita mitsouko", "c est comme ca"): {},
    ("les rita mitsouko", "andy"): {},
    ("les rita mitsouko", "les histoires d a"): {},
    ("les rita mitsouko", "le petit train"): {},
    ("louise attaque", "ton invitation"): {},
    ("louise attaque", "lea"): {},
    ("louise attaque", "la brune"): {},
    ("louise attaque", "tu dis rien"): {},
    ("mc solaar", "bouge de la part 1"): {"titre": "Bouge de là"},
    ("mc solaar", "nouveau western"): {},
    ("mc solaar", "solaar pleure"): {},
    ("mc solaar", "la belle et le bad boy"): {},
    ("madonna", "material girl"): {},
    ("madonna", "la isla bonita"): {},
    ("madonna", "vogue"): {},
    ("manau", "mais qui est la belette"): {},
    ("manau", "panique celtique"): {},
    ("michael jackson", "don t stop til you get enough"): {},
    ("michael jackson", "thriller"): {},
    ("michael jackson", "beat it"): {},
    ("michael jackson", "smooth criminal"): {},
    ("mylene farmer", "libertine"): {},
    ("mylene farmer", "sans contrefacon mix 2001"): {"titre": "Sans contrefaçon"},
    ("mylene farmer", "pourvu qu elles soient douces"): {},
    ("mylene farmer", "oui mais non"): {},
    ("nirvana", "come as you are"): {},
    ("nirvana", "lithium"): {},
    ("nirvana", "in bloom"): {},
    ("nirvana", "heart shaped box"): {},
    ("oasis", "supersonic"): {},
    ("oasis", "whatever"): {},
    ("oasis", "don t look back in anger"): {},
    ("oasis", "champagne supernova"): {},
    ("outkast", "b o b bombs over baghdad"): {"titre": "B.O.B. (Bombs Over Baghdad)"},
    ("outkast", "roses"): {},
    ("outkast", "the way you move"): {},
    ("queen", "we will rock you"): {},
    ("queen", "don t stop me now"): {},
    ("queen", "another one bites the dust"): {},
    ("queen", "under pressure"): {"annee": 1981},
    ("renaud", "laisse beton"): {},
    ("renaud", "des que le vent soufflera"): {},
    ("renaud", "miss maggie"): {},
    ("renaud", "manhattan kaboul"): {},
    ("rick astley", "together forever"): {},
    ("rick astley", "she wants to dance with me"): {},
    ("rihanna", "only girl"): {},
    ("rihanna", "we found love"): {},
    ("sexion d assaut", "casquette a l envers"): {},
    ("sexion d assaut", "ma direction"): {},
    ("sexion d assaut", "avant qu elle parte"): {},
    ("sinik", "le meme sang"): {},
    ("stromae", "tous les memes"): {},
    ("stromae", "formidable"): {},
    ("stromae", "sante"): {"annee": 2021},
    ("swedish house mafia", "moth to a flame"): {"annee": 2021},
    ("toto", "hold the line"): {},
    ("toto", "rosanna"): {},
    ("the killers", "somebody told me"): {},
    ("the killers", "when you were young"): {},
    ("the killers", "human"): {},
    ("the killers", "the man"): {},
    ("the weeknd", "save your tears"): {},
    ("the weeknd", "timeless"): {"annee": 2024},
    ("zaz", "les passants"): {},
    ("zaz", "eblouie par la nuit"): {},
    ("zaz", "on ira"): {},
    ("a ha", "the sun always shines on t v"): {},
    ("a ha", "hunting high and low"): {},
    ("edith piaf", "la vie en rose"): {"annee": 1947},
    ("edith piaf", "la foule"): {"annee": 1957},
    ("edith piaf", "milord"): {"annee": 1959},
    ("edith piaf", "padam padam"): {"annee": 1951},
    # ---- vague 2 (tops artistes, base 417 comme graine) ----
    ("angele", "tout oublier"): {},
    ("angele", "ta reine"): {},
    ("angele", "bruxelles je t aime"): {},
    ("aretha franklin", "think"): {},
    ("aretha franklin", "chain of fools"): {"annee": 1967},
    ("ariana grande", "into you"): {},
    ("ariana grande", "thank u next"): {"annee": 2018},
    ("avicii", "addicted to you"): {},
    ("avicii", "sos"): {},
    ("aya nakamura", "comportement"): {},
    ("aya nakamura", "copines"): {},
    ("aya nakamura", "pookie"): {},
    ("aya nakamura", "jolie nana"): {},
    ("benny blanco", "eastside"): {"genre": "pop"},
    ("bob dylan", "mr tambourine man"): {},
    ("bob dylan", "hurricane"): {},
    ("calvin harris", "one kiss"): {"annee": 2018},
    ("calvin harris", "how deep is your love"): {"annee": 2015},
    ("carly rae jepsen", "i really like you"): {},
    ("the chainsmokers", "something just like this"): {},
    ("the chainsmokers", "paris"): {},
    ("clean bandit", "solo"): {"genre": "electro", "origine": "international"},
    ("david guetta", "sexy bitch"): {"annee": 2009},
    ("david guetta", "i m good"): {},
    ("demi lovato", "heart attack"): {},
    ("demi lovato", "sorry not sorry"): {},
    ("dionne warwick", "do you know the way to san jose"): {},
    ("dionne warwick", "heartbreaker"): {},
    ("drake", "one dance"): {},
    ("dua lipa", "fever"): {"origine": "international", "genre": "pop"},
    ("ed sheeran", "castle on the hill"): {},
    ("ed sheeran", "bad habits"): {},
    ("empire of the sun", "we are the people"): {},
    ("flo rida", "club can t handle me"): {},
    ("flo rida", "whistle"): {},
    ("gims", "hola senorita"): {},
    ("harry styles", "sign of the times"): {},
    ("harry styles", "adore you"): {},
    ("harry styles", "as it was"): {},
    ("hozier", "too sweet"): {},
    ("imagine dragons", "radioactive"): {},
    ("imagine dragons", "demons"): {},
    ("imagine dragons", "enemy"): {"annee": 2021},
    ("j cole", "middle child"): {},
    ("jay z", "run this town"): {},
    ("jay z", "ni as in paris"): {},
    ("jennifer lopez", "on the floor"): {"origine": "international", "genre": "pop"},
    ("john legend", "ordinary people"): {},
    ("johnny cash", "i walk the line"): {"annee": 1956},
    ("johnny cash", "hurt"): {},
    ("justin bieber", "baby"): {},
    ("justin bieber", "sorry"): {},
    ("justin bieber", "love yourself"): {},
    ("kanye west", "runaway"): {},
    ("katy perry", "i kissed a girl"): {},
    ("katy perry", "california gurls"): {},
    ("katy perry", "firework"): {},
    ("kendrick lamar", "humble"): {},
    ("kendrick lamar", "not like us"): {},
    ("kesha", "your love is my drug"): {},
    ("kesha", "die young"): {},
    ("khalid", "location"): {},
    ("lady gaga", "shallow"): {},
    ("lady gaga", "die with a smile"): {"annee": 2024},
    ("lana del rey", "video games"): {},
    ("lana del rey", "summertime sadness"): {"annee": 2012},
    ("lesley gore", "it s my party"): {},
    ("lewis capaldi", "before you go"): {},
    ("the kid laroi", "stay"): {"origine": "international", "genre": "pop"},
    ("the lovin spoonful", "summer in the city"): {},
    ("mark ronson", "valerie version revisited"):
        {"titre": "Valerie (feat. Amy Winehouse)", "genre": "pop"},
    ("marshmello", "silence"): {"origine": "international", "genre": "electro"},
    ("mgmt", "electric feel"): {},
    ("mgmt", "little dark age"): {"annee": 2017},
    ("miguel", "adorn"): {},
    ("maneskin", "i wanna be your slave"): {},
    ("maneskin", "zitti e buoni"): {},
    ("naughty boy", "la la la"): {"origine": "international", "genre": "pop"},
    ("onerepublic", "apologize"): {},
    ("onerepublic", "secrets"): {},
    ("onerepublic", "i ain t worried"): {"annee": 2022},
    ("owl city", "good time"): {"origine": "international", "genre": "pop"},
    ("pitbull", "i know you want me"): {},
    ("post malone", "rockstar"): {"annee": 2017},
    ("post malone", "congratulations"): {},
    ("queen", "we are the champions"): {},
    ("roy orbison", "crying"): {"annee": 1961},
    ("roy orbison", "you got it"): {},
    ("sam smith", "stay with me"): {},
    ("sam smith", "unholy"): {"annee": 2022},
    ("shawn mendes", "senorita"): {"origine": "international", "genre": "pop"},
    ("tame impala", "let it happen"): {},
    ("taylor swift", "shake it off"): {},
    ("taylor swift", "blank space"): {},
    ("taylor swift", "cruel summer"): {},
    ("taylor swift", "cardigan"): {},
    ("the beach boys", "wouldn t it be nice"): {},
    ("the beach boys", "good vibrations"): {"annee": 1966},
    ("the beatles", "let it be"): {},
    ("the beatles", "come together"): {},
    ("the beatles", "here comes the sun"): {},
    ("the neighbourhood", "sweater weather"): {},
    ("the ronettes", "baby i love you"): {"annee": 1963},
    ("the supremes", "where did our love go"): {},
    ("the supremes", "stop in the name of love"): {},
    ("the weeknd", "starboy"): {},
    ("timbaland", "give it to me"): {},
    ("travis scott", "sicko mode"): {},
    ("usher", "yeah"): {},
    ("usher", "omg"): {},
}


def main():
    draft = json.load(open(SP + "/curated_draft.json", encoding="utf-8"))
    src = open(TRACKS_JS, encoding="utf-8").read()
    existing = json.loads("[" + ",".join(re.findall(r"\{[^{}]*\}", src)) + "]")
    existing_keys = {(norm(t["artiste"].split(",")[0].split(" feat")[0]), norm(t["titre"]))
                     for t in existing}
    existing_uris = {t["spotify_uri"] for t in existing}

    used = {"drop": set(), "year": set(), "title": set(), "keep": set()}
    new = []
    for c in draft:
        key = (norm(c["artiste_principal"]), norm(c["titre"]))
        from_playlist = not c["source"].startswith("artist:")

        if from_playlist:
            if key in DROP_PLAYLIST:
                used["drop"].add(key)
                continue
            genre = GENRE_BY_ARTIST.get(key[0])
            if not genre:
                sys.exit(f"genre manquant pour l'artiste playlist : {key}")
            origine, ov = "international", {}
        else:
            if key not in KEEP_ARTIST:
                continue
            used["keep"].add(key)
            ov = KEEP_ARTIST[key]
            origine = ov.get("origine") or c["origine"]
            genre = ov.get("genre") or c["genre"]
            if not origine or not genre:
                sys.exit(f"origine/genre manquant pour : {key}")

        annee = ov.get("annee") or YEAR_FIX.get(key) or c["annee"]
        if key in YEAR_FIX:
            used["year"].add(key)
        titre = ov.get("titre") or TITLE_FIX.get(key) or c["titre"]
        if key in TITLE_FIX:
            used["title"].add(key)

        if (key[0], norm(titre)) in existing_keys or c["spotify_uri"] in existing_uris:
            print(f"doublon avec la base, ignoré : {key}")
            continue
        new.append({"titre": titre, "artiste": c["artiste"], "annee": annee,
                    "origine": origine, "genre": genre,
                    "spotify_uri": c["spotify_uri"], "_main": key[0]})

    # clés non consommées = faute de frappe… sauf si le morceau est déjà dans la base
    # (le script est ré-exécutable : les vagues précédentes restent dans les tables)
    def already_in_base(key, titre_override=None):
        artist, title = key
        if (artist, title) in existing_keys:
            return True
        return bool(titre_override) and (artist, norm(titre_override)) in existing_keys

    def override_title(key):
        return (KEEP_ARTIST.get(key) or {}).get("titre") or TITLE_FIX.get(key)

    problems = []
    problems += [f"DROP_PLAYLIST sans effet : {k}"
                 for k in DROP_PLAYLIST - used["drop"] if not already_in_base(k)]
    problems += [f"KEEP_ARTIST sans effet : {k}"
                 for k in set(KEEP_ARTIST) - used["keep"]
                 if not already_in_base(k, override_title(k))]
    problems += [f"YEAR_FIX sans effet : {k}"
                 for k in set(YEAR_FIX) - used["year"]
                 if not already_in_base(k, override_title(k))]
    problems += [f"TITLE_FIX sans effet : {k}"
                 for k in set(TITLE_FIX) - used["title"]
                 if not already_in_base(k, TITLE_FIX.get(k))]
    if problems:
        print("\n".join(problems))
        sys.exit(1)

    # plafond par artiste (sécurité : les tables sont déjà censées le respecter)
    per_artist = defaultdict(list)
    for t in new:
        per_artist[t["_main"]].append(t)
    capped = []
    for artist, tracks in per_artist.items():
        if len(tracks) > MAX_PER_ARTIST:
            tracks = sorted(tracks, key=lambda t: t["annee"])[:MAX_PER_ARTIST]
            print(f"cap {MAX_PER_ARTIST} appliqué : {artist}")
        capped += tracks
    new = capped

    # fusion + tri chronologique + nouveaux ids
    merged = [{k: t[k] for k in ("titre", "artiste", "annee", "origine", "genre", "spotify_uri")}
              for t in existing + new]
    merged.sort(key=lambda t: (t["annee"], norm(t["artiste"]), norm(t["titre"])))
    for i, t in enumerate(merged, 1):
        t["id"] = f"{i:03d}"

    header = (
        "// Base de morceaux — un objet par morceau.\n"
        "// Pour en ajouter : copier une entrée, changer les champs et l'URI Spotify\n"
        "// (clic droit sur un titre dans Spotify → Partager → Copier le lien, l'ID est dans l'URL).\n"
        "// Générée par tools/finalize.py (candidats vérifiés contre Spotify + relecture manuelle).\n"
    )
    entries = []
    for t in merged:
        obj = {k: t[k] for k in ("id", "titre", "artiste", "annee", "origine", "genre", "spotify_uri")}
        entries.append("  " + json.dumps(obj, ensure_ascii=False, indent=4)
                       .replace("\n}", "\n  }"))
    with open(TRACKS_JS, "w", encoding="utf-8") as f:
        f.write(header + "const TRACKS = [\n" + ",\n".join(entries) + "\n];\n")

    fr = sum(1 for t in merged if t["origine"] == "francais")
    decades = defaultdict(int)
    for t in merged:
        decades[t["annee"] // 10 * 10] += 1
    print(f"\n{len(merged)} morceaux ({len(existing)} existants + {len(new)} nouveaux)")
    print(f"{fr} FR / {len(merged) - fr} inter.")
    print("décennies :", dict(sorted(decades.items())))


if __name__ == "__main__":
    main()
