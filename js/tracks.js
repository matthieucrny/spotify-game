// Base de morceaux — un objet par morceau.
// Pour en ajouter : copier une entrée, changer les champs et l'URI Spotify
// (clic droit sur un titre dans Spotify → Partager → Copier le lien, l'ID est dans l'URL).
const TRACKS = [
  {
    "id": "001",
    "titre": "Non, je ne regrette rien",
    "artiste": "Édith Piaf",
    "annee": 1960,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:3dkIE8P7hvl3tHl9KSb6dA"
  },
  {
    "id": "002",
    "titre": "Comme d'habitude",
    "artiste": "Claude François",
    "annee": 1967,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:11FBMKhiuYT4doKhC4p3i6"
  },
  {
    "id": "003",
    "titre": "Les Champs-Élysées",
    "artiste": "Joe Dassin",
    "annee": 1969,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:4VWbPQUPvLes814r6T11Jz"
  },
  {
    "id": "004",
    "titre": "Alexandrie Alexandra",
    "artiste": "Claude François",
    "annee": 1977,
    "origine": "francais",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:642v4GjCmdXlnsM4Ohx59B"
  },
  {
    "id": "005",
    "titre": "L'Aventurier",
    "artiste": "Indochine",
    "annee": 1982,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:2UC5XnHA1Wn9FjQmbjNca9"
  },
  {
    "id": "006",
    "titre": "Marcia Baila",
    "artiste": "Les Rita Mitsouko",
    "annee": 1984,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:43THPstJP6RXLMd7ryXyNf"
  },
  {
    "id": "007",
    "titre": "L'Aziza",
    "artiste": "Daniel Balavoine",
    "annee": 1985,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:1uFWyT4KLFXisiVkiBPCTb"
  },
  {
    "id": "008",
    "titre": "Mistral gagnant",
    "artiste": "Renaud",
    "annee": 1985,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:1MOSRjdAbUhvLNnHCdUEL5"
  },
  {
    "id": "009",
    "titre": "Voyage voyage",
    "artiste": "Desireless",
    "annee": 1986,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:2d8D7uk3tbAThjRkdfrx9c"
  },
  {
    "id": "010",
    "titre": "Ella, elle l'a",
    "artiste": "France Gall",
    "annee": 1987,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:67CfbIKKTCKFqmQLJwUftX"
  },
  {
    "id": "011",
    "titre": "Là-bas",
    "artiste": "Jean-Jacques Goldman",
    "annee": 1987,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:6pvfDHdFcjiIDXFxvDI879"
  },
  {
    "id": "012",
    "titre": "Désenchantée",
    "artiste": "Mylène Farmer",
    "annee": 1991,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:15XYdD283tK9iyJzL738bn"
  },
  {
    "id": "013",
    "titre": "Caroline",
    "artiste": "MC Solaar",
    "annee": 1991,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:7pEn4rOtVY4UdAwDxFR7eH"
  },
  {
    "id": "014",
    "titre": "Je danse le Mia",
    "artiste": "IAM",
    "annee": 1993,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:6HjJ7gNwslUqgfTiqfTP1C"
  },
  {
    "id": "015",
    "titre": "Foule sentimentale",
    "artiste": "Alain Souchon",
    "annee": 1993,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:2W4ZxAHZAXOf6r65pCskGR"
  },
  {
    "id": "016",
    "titre": "J't'emmène au vent",
    "artiste": "Louise Attaque",
    "annee": 1997,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:0Isvah1AGx9wiRg9eyPQL5"
  },
  {
    "id": "017",
    "titre": "La Tribu de Dana",
    "artiste": "Manau",
    "annee": 1998,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:33DMSeRaJpamHQPHNvyYyz"
  },
  {
    "id": "018",
    "titre": "Music Sounds Better with You",
    "artiste": "Stardust",
    "annee": 1998,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:303ccTay2FiDTZ9fZ2AdBt"
  },
  {
    "id": "019",
    "titre": "Ces soirées-là",
    "artiste": "Yannick",
    "annee": 2000,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:27lq4sDEt6OQMNWiBGSuLT"
  },
  {
    "id": "020",
    "titre": "Lady (Hear Me Tonight)",
    "artiste": "Modjo",
    "annee": 2000,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:7HHYgMJYAtMkQn50wmXOIN"
  },
  {
    "id": "021",
    "titre": "One More Time",
    "artiste": "Daft Punk",
    "annee": 2000,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:0DiWol3AO6WpXZgp0goxAV"
  },
  {
    "id": "022",
    "titre": "La Boulette",
    "artiste": "Diam's",
    "annee": 2006,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:4ycebyWnCg9jJXFnhnZqnz"
  },
  {
    "id": "023",
    "titre": "Alors on danse",
    "artiste": "Stromae",
    "annee": 2009,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:6uFreJoeTZVC7MgC7B6rF1"
  },
  {
    "id": "024",
    "titre": "Je veux",
    "artiste": "Zaz",
    "annee": 2010,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:734dz1YaFITwawPpM25fSt"
  },
  {
    "id": "025",
    "titre": "Désolé",
    "artiste": "Sexion d'Assaut",
    "annee": 2010,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:5NsOnvpjvH9sCz8TyVOmOz"
  },
  {
    "id": "026",
    "titre": "Papaoutai",
    "artiste": "Stromae",
    "annee": 2013,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:34dx8DACTJsc3rsJdaEIQw"
  },
  {
    "id": "027",
    "titre": "Dernière danse",
    "artiste": "Indila",
    "annee": 2013,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:65uoaqX5qcjXZRheAj1qQT"
  },
  {
    "id": "028",
    "titre": "Bella",
    "artiste": "Maître Gims",
    "annee": 2013,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:1vELwZM3uBYWd8HrtddD4l"
  },
  {
    "id": "029",
    "titre": "Djadja",
    "artiste": "Aya Nakamura",
    "annee": 2018,
    "origine": "francais",
    "genre": "rnb",
    "spotify_uri": "spotify:track:7sKDftgGirHWTVFMtJoDoh"
  },
  {
    "id": "030",
    "titre": "Balance ton quoi",
    "artiste": "Angèle",
    "annee": 2018,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:2jX5c5RFp0A9E1GDsvGxIa"
  },
  {
    "id": "031",
    "titre": "Hey Jude",
    "artiste": "The Beatles",
    "annee": 1968,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0aym2LBJBk9DAYuHHutrIl"
  },
  {
    "id": "032",
    "titre": "Superstition",
    "artiste": "Stevie Wonder",
    "annee": 1972,
    "origine": "international",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:1h2xVEoJORqrg71HocgqXd"
  },
  {
    "id": "033",
    "titre": "Bohemian Rhapsody",
    "artiste": "Queen",
    "annee": 1975,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:7tFiyTwD0nx5a1eklYtX2J"
  },
  {
    "id": "034",
    "titre": "Dancing Queen",
    "artiste": "ABBA",
    "annee": 1976,
    "origine": "international",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:0GjEhVFGZW8afUYGChu3Rr"
  },
  {
    "id": "035",
    "titre": "I Will Survive",
    "artiste": "Gloria Gaynor",
    "annee": 1978,
    "origine": "international",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:7cv28LXcjAC3GsXbUvXKbX"
  },
  {
    "id": "036",
    "titre": "Billie Jean",
    "artiste": "Michael Jackson",
    "annee": 1982,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5ChkMS8OtdzJeqyybCc9R5"
  },
  {
    "id": "037",
    "titre": "Africa",
    "artiste": "Toto",
    "annee": 1982,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2374M0fQpWi3dLnB54qaLX"
  },
  {
    "id": "038",
    "titre": "Take On Me",
    "artiste": "a-ha",
    "annee": 1985,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2WfaOiMkCvy7F5fcp2zZ8L"
  },
  {
    "id": "039",
    "titre": "Sweet Child O' Mine",
    "artiste": "Guns N' Roses",
    "annee": 1987,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:7o2CTH4ctstm8TNelqjb51"
  },
  {
    "id": "040",
    "titre": "Never Gonna Give You Up",
    "artiste": "Rick Astley",
    "annee": 1987,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4PTG3Z6ehGkBFwjybzWkR8"
  },
  {
    "id": "041",
    "titre": "Like a Prayer",
    "artiste": "Madonna",
    "annee": 1989,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:14p4jbULrRxZvnSt4NDSEs"
  },
  {
    "id": "042",
    "titre": "Smells Like Teen Spirit",
    "artiste": "Nirvana",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5ghIJDpPoe3CfHMGu71E6T"
  },
  {
    "id": "043",
    "titre": "What Is Love",
    "artiste": "Haddaway",
    "annee": 1993,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:4v6jydWBTAIqnyPVNyOAdc"
  },
  {
    "id": "044",
    "titre": "Wonderwall",
    "artiste": "Oasis",
    "annee": 1995,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5wj4E6IsrVtn8IBJQOd0Cl"
  },
  {
    "id": "045",
    "titre": "...Baby One More Time",
    "artiste": "Britney Spears",
    "annee": 1998,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3MjUtNVVq3C8Fn0MP3zhXa"
  },
  {
    "id": "046",
    "titre": "Lose Yourself",
    "artiste": "Eminem",
    "annee": 2002,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:7MJQ9Nfxzh8LPZ9e9u68Fq"
  },
  {
    "id": "047",
    "titre": "In Da Club",
    "artiste": "50 Cent",
    "annee": 2003,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:7iL6o9tox1zgHpKUfh9vuC"
  },
  {
    "id": "048",
    "titre": "Crazy In Love",
    "artiste": "Beyoncé",
    "annee": 2003,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:5IVuqXILoxVWvWEPm82Jxr"
  },
  {
    "id": "049",
    "titre": "Hey Ya!",
    "artiste": "OutKast",
    "annee": 2003,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2PpruBYCo4H7WOBJ7Q2EwM"
  },
  {
    "id": "050",
    "titre": "Mr. Brightside",
    "artiste": "The Killers",
    "annee": 2004,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:003vvx7Niy0yvhvHt4a68B"
  },
  {
    "id": "051",
    "titre": "Umbrella",
    "artiste": "Rihanna",
    "annee": 2007,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:49FYlytm3dAAraYgpoJZux"
  },
  {
    "id": "052",
    "titre": "I Gotta Feeling",
    "artiste": "Black Eyed Peas",
    "annee": 2009,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2H1047e0oMSj10dgp7p2VG"
  },
  {
    "id": "053",
    "titre": "Rolling in the Deep",
    "artiste": "Adele",
    "annee": 2010,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1c8gk2PeTE04A1pIDH9YMk"
  },
  {
    "id": "054",
    "titre": "Somebody That I Used to Know",
    "artiste": "Gotye",
    "annee": 2011,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4wCmqSrbyCgxEXROQE6vtV"
  },
  {
    "id": "055",
    "titre": "Happy",
    "artiste": "Pharrell Williams",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:60nZcImufyMA1MKQY3dcCH"
  },
  {
    "id": "056",
    "titre": "Uptown Funk",
    "artiste": "Mark Ronson feat. Bruno Mars",
    "annee": 2014,
    "origine": "international",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:32OlwWuMpZ6b0aN2RZOeMS"
  },
  {
    "id": "057",
    "titre": "Shape of You",
    "artiste": "Ed Sheeran",
    "annee": 2017,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7qiZfU4dY1lWllzX7mPBI3"
  },
  {
    "id": "058",
    "titre": "Despacito",
    "artiste": "Luis Fonsi feat. Daddy Yankee",
    "annee": 2017,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6habFhsOp2NvshLv26DqMb"
  },
  {
    "id": "059",
    "titre": "bad guy",
    "artiste": "Billie Eilish",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2Fxmhks0bxGSBdJ92vM42m"
  },
  {
    "id": "060",
    "titre": "Blinding Lights",
    "artiste": "The Weeknd",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0VjIjW4GlUZAMYd2vXMi3b"
  }
];
