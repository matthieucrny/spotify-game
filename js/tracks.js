// Base de morceaux — un objet par morceau.
// Pour en ajouter : copier une entrée, changer les champs et l'URI Spotify
// (clic droit sur un titre dans Spotify → Partager → Copier le lien, l'ID est dans l'URL).
// Générée par tools/finalize.py (candidats vérifiés contre Spotify + relecture manuelle).
const TRACKS = [
  {
    "id": "001",
    "titre": "La vie en rose",
    "artiste": "Édith Piaf",
    "annee": 1947,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:4FmiciU3ZmfgABlbCSXcWw"
  },
  {
    "id": "002",
    "titre": "Padam padam",
    "artiste": "Édith Piaf",
    "annee": 1951,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:194uD6fRM58ztn7Z1Mfyr2"
  },
  {
    "id": "003",
    "titre": "I Walk the Line",
    "artiste": "Johnny Cash",
    "annee": 1956,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4AItZ329ewZOhqmxrSPzDd"
  },
  {
    "id": "004",
    "titre": "La foule",
    "artiste": "Édith Piaf",
    "annee": 1957,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:2xZfPZxInlDXDKc6NDts8Z"
  },
  {
    "id": "005",
    "titre": "Milord",
    "artiste": "Édith Piaf",
    "annee": 1959,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:18efeGygYyi4nx3haDMdAa"
  },
  {
    "id": "006",
    "titre": "Put Your Head On My Shoulder",
    "artiste": "Paul Anka",
    "annee": 1959,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2DpJ9T2RVRanZcYFHKOAfA"
  },
  {
    "id": "007",
    "titre": "Non, je ne regrette rien",
    "artiste": "Édith Piaf",
    "annee": 1960,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:3dkIE8P7hvl3tHl9KSb6dA"
  },
  {
    "id": "008",
    "titre": "A Sunday Kind Of Love",
    "artiste": "Etta James",
    "annee": 1960,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:0zGLlXbHlrAyBN1x6sY0rb"
  },
  {
    "id": "009",
    "titre": "Stand By Me",
    "artiste": "Ben E. King",
    "annee": 1961,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:7jmHyHMEqm9MJWiMAneF05"
  },
  {
    "id": "010",
    "titre": "Runaround Sue",
    "artiste": "Dion",
    "annee": 1961,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1DndHckdH9m5rp6gYP086b"
  },
  {
    "id": "011",
    "titre": "Can't Help Falling in Love",
    "artiste": "Elvis Presley",
    "annee": 1961,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:44AyOl4qVkzS48vBsbNXaC"
  },
  {
    "id": "012",
    "titre": "Jump in the Line",
    "artiste": "Harry Belafonte",
    "annee": 1961,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1zW2csx1vVJrKfvDrFQNVt"
  },
  {
    "id": "013",
    "titre": "Hit the Road Jack",
    "artiste": "Ray Charles",
    "annee": 1961,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:2HoqbEOXgbDSLZ5XCePEXt"
  },
  {
    "id": "014",
    "titre": "Crying",
    "artiste": "Roy Orbison",
    "annee": 1961,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6eLL7QTdMWdhhG4i3jHDR9"
  },
  {
    "id": "015",
    "titre": "Blowin' in the Wind",
    "artiste": "Bob Dylan",
    "annee": 1963,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:18GiV1BaXzPVYpp9rmOg0E"
  },
  {
    "id": "016",
    "titre": "Ring of Fire",
    "artiste": "Johnny Cash",
    "annee": 1963,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6YffUZJ2R06kyxyK6onezL"
  },
  {
    "id": "017",
    "titre": "It's My Party",
    "artiste": "Lesley Gore",
    "annee": 1963,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1Pq47iFLC5U7j8xeNiNcuS"
  },
  {
    "id": "018",
    "titre": "You Don't Own Me",
    "artiste": "Lesley Gore",
    "annee": 1963,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5E1pngWasYW2Y6OjV6WMUs"
  },
  {
    "id": "019",
    "titre": "Surfin' U.S.A.",
    "artiste": "The Beach Boys",
    "annee": 1963,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0wz1LjDb9ZNEYwOmDJ3Q4b"
  },
  {
    "id": "020",
    "titre": "Twist And Shout",
    "artiste": "The Beatles",
    "annee": 1963,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5ZBeML7Lf3FMEVviTyvi8l"
  },
  {
    "id": "021",
    "titre": "Baby, I Love You",
    "artiste": "The Ronettes",
    "annee": 1963,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:7HfCWnydoXXHYqaGowmF1W"
  },
  {
    "id": "022",
    "titre": "Be My Baby",
    "artiste": "The Ronettes",
    "annee": 1963,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:1WN4uNclrDuczTO3bCr8s1"
  },
  {
    "id": "023",
    "titre": "It's In The Kiss (The Shoop Shoop Song)",
    "artiste": "Betty Everett",
    "annee": 1964,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:35hfuechuOqaW31ogdauO7"
  },
  {
    "id": "024",
    "titre": "The Times They Are A-Changin'",
    "artiste": "Bob Dylan",
    "annee": 1964,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:52vA3CYKZqZVdQnzRrdZt6"
  },
  {
    "id": "025",
    "titre": "Walk on By",
    "artiste": "Dionne Warwick",
    "annee": 1964,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3xsOtNxtBW0oTI1OWKAzTm"
  },
  {
    "id": "026",
    "titre": "Oh, Pretty Woman",
    "artiste": "Roy Orbison",
    "annee": 1964,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:48i055G1OT5KxGGftwFxWy"
  },
  {
    "id": "027",
    "titre": "House Of The Rising Sun",
    "artiste": "The Animals",
    "annee": 1964,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:7BY005dacJkbO6EPiOh2wb"
  },
  {
    "id": "028",
    "titre": "Don't Worry Baby",
    "artiste": "The Beach Boys",
    "annee": 1964,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1GLmaPfulP0BrfijohQpN5"
  },
  {
    "id": "029",
    "titre": "I Get Around",
    "artiste": "The Beach Boys",
    "annee": 1964,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3v9xlH6BpmRbqL7hgNJhfT"
  },
  {
    "id": "030",
    "titre": "Under the Boardwalk",
    "artiste": "The Drifters",
    "annee": 1964,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:65jrjEhWfAvysKfnojk1i0"
  },
  {
    "id": "031",
    "titre": "Baby Love",
    "artiste": "The Supremes",
    "annee": 1964,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:5uES1C2NgkdrNHiCwf9jRr"
  },
  {
    "id": "032",
    "titre": "Where Did Our Love Go",
    "artiste": "The Supremes",
    "annee": 1964,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:69RH84na5iUNwrwxpgjC5j"
  },
  {
    "id": "033",
    "titre": "Like a Rolling Stone",
    "artiste": "Bob Dylan",
    "annee": 1965,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3AhXZa8sUQht0UEdBJgpGc"
  },
  {
    "id": "034",
    "titre": "Mr. Tambourine Man",
    "artiste": "Bob Dylan",
    "annee": 1965,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3RkQ3UwOyPqpIiIvGVewuU"
  },
  {
    "id": "035",
    "titre": "Poupée de cire, poupée de son",
    "artiste": "France Gall",
    "annee": 1965,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:0e3LOEZR3NwbbHFGPYr3uQ"
  },
  {
    "id": "036",
    "titre": "Help!",
    "artiste": "The Beatles",
    "annee": 1965,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:7DD7eSuYSC5xk2ArU62esN"
  },
  {
    "id": "037",
    "titre": "Yesterday",
    "artiste": "The Beatles",
    "annee": 1965,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3BQHpFgAp4l80e1XslIjNI"
  },
  {
    "id": "038",
    "titre": "Do You Believe in Magic?",
    "artiste": "The Lovin' Spoonful",
    "annee": 1965,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1udKn1oNKYQSQ9OmiIWCMu"
  },
  {
    "id": "039",
    "titre": "Stop! In The Name Of Love",
    "artiste": "The Supremes",
    "annee": 1965,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:52FlwUMMDnTK8TGkCag9Jd"
  },
  {
    "id": "040",
    "titre": "For What It's Worth",
    "artiste": "Buffalo Springfield",
    "annee": 1966,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1qRA5BS78u3gME0loMl9AA"
  },
  {
    "id": "041",
    "titre": "Strangers In The Night",
    "artiste": "Frank Sinatra",
    "annee": 1966,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:74VR3AkGPhbYXnxcOYa16x"
  },
  {
    "id": "042",
    "titre": "Hold On, I'm Comin'",
    "artiste": "Sam & Dave",
    "annee": 1966,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:6PgVDY8GTkxF3GmhVGPzoB"
  },
  {
    "id": "043",
    "titre": "Good Vibrations",
    "artiste": "The Beach Boys",
    "annee": 1966,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5t9KYe0Fhd5cW6UYT4qP8f"
  },
  {
    "id": "044",
    "titre": "Wouldn't It Be Nice",
    "artiste": "The Beach Boys",
    "annee": 1966,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4IHc6SzGPnzSPuHVEPzpJc"
  },
  {
    "id": "045",
    "titre": "Summer in the City",
    "artiste": "The Lovin' Spoonful",
    "annee": 1966,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:7AzFID6u1b3zIWbd9pb8Dk"
  },
  {
    "id": "046",
    "titre": "I'm a Believer",
    "artiste": "The Monkees",
    "annee": 1966,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3G7tRC24Uh09Hmp1KZ7LQ2"
  },
  {
    "id": "047",
    "titre": "You Can't Hurry Love",
    "artiste": "The Supremes",
    "annee": 1966,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:1OppEieGNdItZbE14gLBEv"
  },
  {
    "id": "048",
    "titre": "(You Make Me Feel Like) A Natural Woman",
    "artiste": "Aretha Franklin",
    "annee": 1967,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:5K09WxKdlkroDyEVyOSySy"
  },
  {
    "id": "049",
    "titre": "Chain of Fools",
    "artiste": "Aretha Franklin",
    "annee": 1967,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:2oZmMp5M6L0Rh7G84Um2tF"
  },
  {
    "id": "050",
    "titre": "Respect",
    "artiste": "Aretha Franklin",
    "annee": 1967,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:7s25THrKz86DM225dOYwnr"
  },
  {
    "id": "051",
    "titre": "Comme d'habitude",
    "artiste": "Claude François",
    "annee": 1967,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:11FBMKhiuYT4doKhC4p3i6"
  },
  {
    "id": "052",
    "titre": "Piece of My Heart",
    "artiste": "Erma Franklin",
    "annee": 1967,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:2GbePPrWWSRxcmW6QRSPae"
  },
  {
    "id": "053",
    "titre": "Somethin' Stupid",
    "artiste": "Frank Sinatra, Nancy Sinatra",
    "annee": 1967,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4feXcsElKIVsGwkbnTHAfV"
  },
  {
    "id": "054",
    "titre": "Can't Take My Eyes off You",
    "artiste": "Frankie Valli",
    "annee": 1967,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0bfvHnWWOeU1U5XeKyVLbW"
  },
  {
    "id": "055",
    "titre": "Somebody to Love",
    "artiste": "Jefferson Airplane",
    "annee": 1967,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4uGIJG1jYFonGc4LGp5uQL"
  },
  {
    "id": "056",
    "titre": "White Rabbit",
    "artiste": "Jefferson Airplane",
    "annee": 1967,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4vpeKl0vMGdAXpZiQB2Dtd"
  },
  {
    "id": "057",
    "titre": "Purple Haze",
    "artiste": "Jimi Hendrix",
    "annee": 1967,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0wJoRiX5K5BxlqZTolB2LD"
  },
  {
    "id": "058",
    "titre": "Break on Through (To the Other Side)",
    "artiste": "The Doors",
    "annee": 1967,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6ToM0uwxtPKo9CMpbPGYvM"
  },
  {
    "id": "059",
    "titre": "Light My Fire",
    "artiste": "The Doors",
    "annee": 1967,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5uvosCdMlFdTXhoazkTI5R"
  },
  {
    "id": "060",
    "titre": "People Are Strange",
    "artiste": "The Doors",
    "annee": 1967,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1Jmqubf9kGkWeYQXQKImL5"
  },
  {
    "id": "061",
    "titre": "Daydream Believer",
    "artiste": "The Monkees",
    "annee": 1967,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7uEcCGtM1FBBGIhPozhJjv"
  },
  {
    "id": "062",
    "titre": "Happy Together",
    "artiste": "The Turtles",
    "annee": 1967,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1JO1xLtVc8mWhIoE3YaCL0"
  },
  {
    "id": "063",
    "titre": "I Say a Little Prayer",
    "artiste": "Aretha Franklin",
    "annee": 1968,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3NfxSdJnVdon1axzloJgba"
  },
  {
    "id": "064",
    "titre": "Think",
    "artiste": "Aretha Franklin",
    "annee": 1968,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:4yQw7FR9lcvL6RHtegbJBh"
  },
  {
    "id": "065",
    "titre": "I Started A Joke",
    "artiste": "Bee Gees",
    "annee": 1968,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:36CKza28wMxYdjdzji7ine"
  },
  {
    "id": "066",
    "titre": "White Room",
    "artiste": "Cream",
    "annee": 1968,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3Xls4cNOwy01dtrNXb1inG"
  },
  {
    "id": "067",
    "titre": "Do You Know the Way to San Jose",
    "artiste": "Dionne Warwick",
    "annee": 1968,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:1YIWYzMq84I46LmgX1vpye"
  },
  {
    "id": "068",
    "titre": "Son of a Preacher Man",
    "artiste": "Dusty Springfield",
    "annee": 1968,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:7odHgoLFi3GQ90E9PeraI3"
  },
  {
    "id": "069",
    "titre": "I'd Rather Go Blind",
    "artiste": "Etta James",
    "annee": 1968,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:1kPBT8S2wJFNAyBMnGVZgL"
  },
  {
    "id": "070",
    "titre": "Voodoo Child (Slight Return)",
    "artiste": "Jimi Hendrix",
    "annee": 1968,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2AxCeJ6PSsBYiTckM0HLY7"
  },
  {
    "id": "071",
    "titre": "Siffler sur la colline",
    "artiste": "Joe Dassin",
    "annee": 1968,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:227wPK6nY3h8LSq8FHluYO"
  },
  {
    "id": "072",
    "titre": "I Heard It Through The Grapevine",
    "artiste": "Marvin Gaye",
    "annee": 1968,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:1tqT6DhmsrtQgyCKUwotiw"
  },
  {
    "id": "073",
    "titre": "Mrs. Robinson",
    "artiste": "Simon & Garfunkel",
    "annee": 1968,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0iOZM63lendWRTTeKhZBSC"
  },
  {
    "id": "074",
    "titre": "For Once In My Life",
    "artiste": "Stevie Wonder",
    "annee": 1968,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:4kP69y3GKHi9tXckfgp4bK"
  },
  {
    "id": "075",
    "titre": "Blackbird",
    "artiste": "The Beatles",
    "annee": 1968,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5jgFfDIR6FR0gvlA56Nakr"
  },
  {
    "id": "076",
    "titre": "Hey Jude",
    "artiste": "The Beatles",
    "annee": 1968,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0aym2LBJBk9DAYuHHutrIl"
  },
  {
    "id": "077",
    "titre": "Bad Moon Rising",
    "artiste": "Creedence Clearwater Revival",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:20OFwXhEXf12DzwXmaV7fj"
  },
  {
    "id": "078",
    "titre": "Space Oddity",
    "artiste": "David Bowie",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:72Z17vmmeQKAg8bptWvpVG"
  },
  {
    "id": "079",
    "titre": "Suspicious Minds",
    "artiste": "Elvis Presley",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1H5IfYyIIAlgDX8zguUzns"
  },
  {
    "id": "080",
    "titre": "Les Champs-Élysées",
    "artiste": "Joe Dassin",
    "annee": 1969,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:4VWbPQUPvLes814r6T11Jz"
  },
  {
    "id": "081",
    "titre": "Good Times Bad Times",
    "artiste": "Led Zeppelin",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0QwZfbw26QeUoIy82Z2jYp"
  },
  {
    "id": "082",
    "titre": "Heartbreaker",
    "artiste": "Led Zeppelin",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6WE7jSshLCuVKoCmobVKVf"
  },
  {
    "id": "083",
    "titre": "Whole Lotta Love",
    "artiste": "Led Zeppelin",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0hCB0YR03f6AmQaHbwWDe8"
  },
  {
    "id": "084",
    "titre": "The Boxer",
    "artiste": "Simon & Garfunkel",
    "annee": 1969,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:76TZCvJ8GitQ2FA1q5dKu0"
  },
  {
    "id": "085",
    "titre": "Sugar Sugar",
    "artiste": "The Archies",
    "annee": 1969,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6MTd61g9zq6CB1FnJydjEb"
  },
  {
    "id": "086",
    "titre": "Come Together",
    "artiste": "The Beatles",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2EqlS6tkEnglzr7tkKAAYD"
  },
  {
    "id": "087",
    "titre": "Here Comes The Sun",
    "artiste": "The Beatles",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6dGnYIeXmHdcikdzNNDMm2"
  },
  {
    "id": "088",
    "titre": "Who's Lovin' You",
    "artiste": "The Jackson 5",
    "annee": 1969,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:6cZrsaNb4Zo9E5KHk7gcz5"
  },
  {
    "id": "089",
    "titre": "Gimme Shelter",
    "artiste": "The Rolling Stones",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6H3kDe7CGoWYBabAeVWGiD"
  },
  {
    "id": "090",
    "titre": "You Can't Always Get What You Want",
    "artiste": "The Rolling Stones",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6lFZbCc7pn6Lme1NP7qQqQ"
  },
  {
    "id": "091",
    "titre": "Let It Be",
    "artiste": "The Beatles",
    "annee": 1970,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:7iN1s7xHE4ifF5povM6A48"
  },
  {
    "id": "092",
    "titre": "Le lundi au soleil",
    "artiste": "Claude François",
    "annee": 1972,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:75HyZlo5ameA4sr8aOjUSU"
  },
  {
    "id": "093",
    "titre": "Salut les amoureux",
    "artiste": "Joe Dassin",
    "annee": 1972,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:2cCtyPE0ZgoW9qWcI8YUvU"
  },
  {
    "id": "094",
    "titre": "Superstition",
    "artiste": "Stevie Wonder",
    "annee": 1972,
    "origine": "international",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:1h2xVEoJORqrg71HocgqXd"
  },
  {
    "id": "095",
    "titre": "Waterloo",
    "artiste": "ABBA",
    "annee": 1974,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3Dy4REq8O09IlgiwuHQ3sk"
  },
  {
    "id": "096",
    "titre": "Le téléphone pleure",
    "artiste": "Claude François, Frédérique",
    "annee": 1974,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:4cAeq0pjjvWxFfy7NL3XSD"
  },
  {
    "id": "097",
    "titre": "La déclaration d'amour",
    "artiste": "France Gall",
    "annee": 1974,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:76SXRuctCDXlL82Mkh5yJm"
  },
  {
    "id": "098",
    "titre": "Never Can Say Goodbye",
    "artiste": "Gloria Gaynor",
    "annee": 1974,
    "origine": "international",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:3b9Cpi8jW9jNoyx72QbfRO"
  },
  {
    "id": "099",
    "titre": "Mamma Mia",
    "artiste": "ABBA",
    "annee": 1975,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2TxCwUlqaOH3TIyJqGgR91"
  },
  {
    "id": "100",
    "titre": "Et si tu n'existais pas",
    "artiste": "Joe Dassin",
    "annee": 1975,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:2LplsM7xv7Cj5ne7pxv5Gn"
  },
  {
    "id": "101",
    "titre": "L'été indien",
    "artiste": "Joe Dassin",
    "annee": 1975,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:1Ggj10R2dFrBj9LjQscvDz"
  },
  {
    "id": "102",
    "titre": "Bohemian Rhapsody",
    "artiste": "Queen",
    "annee": 1975,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:7tFiyTwD0nx5a1eklYtX2J"
  },
  {
    "id": "103",
    "titre": "Dancing Queen",
    "artiste": "ABBA",
    "annee": 1976,
    "origine": "international",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:0GjEhVFGZW8afUYGChu3Rr"
  },
  {
    "id": "104",
    "titre": "Hurricane",
    "artiste": "Bob Dylan",
    "annee": 1976,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1lqMLr9Wj7SM2F9AikGcxN"
  },
  {
    "id": "105",
    "titre": "Cette année-là",
    "artiste": "Claude François",
    "annee": 1976,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:3R4rbnUNQKpKo588EFOqTl"
  },
  {
    "id": "106",
    "titre": "Allô maman bobo",
    "artiste": "Alain Souchon",
    "annee": 1977,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:6feRXBskplLVuNov74Rep3"
  },
  {
    "id": "107",
    "titre": "Alexandrie Alexandra",
    "artiste": "Claude François",
    "annee": 1977,
    "origine": "francais",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:642v4GjCmdXlnsM4Ohx59B"
  },
  {
    "id": "108",
    "titre": "Magnolias for Ever",
    "artiste": "Claude François",
    "annee": 1977,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:1zcFnMc6ULvzH8npblFGvy"
  },
  {
    "id": "109",
    "titre": "We Are The Champions",
    "artiste": "Queen",
    "annee": 1977,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1lCRw5FEZ1gPDNPzy1K4zW"
  },
  {
    "id": "110",
    "titre": "We Will Rock You",
    "artiste": "Queen",
    "annee": 1977,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4pbJqGIASGPr0ZpGpnWkDn"
  },
  {
    "id": "111",
    "titre": "Laisse béton",
    "artiste": "Renaud",
    "annee": 1977,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:3kHDkEajJ4G02y2U6Xf0fm"
  },
  {
    "id": "112",
    "titre": "Le chanteur",
    "artiste": "Daniel Balavoine",
    "annee": 1978,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:0VKxd6VnCZMv5uQCdC7qXf"
  },
  {
    "id": "113",
    "titre": "S.O.S. d'un terrien en détresse",
    "artiste": "Daniel Balavoine, Starmania",
    "annee": 1978,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:329siE2j9wZccmieobfIVh"
  },
  {
    "id": "114",
    "titre": "I Will Survive",
    "artiste": "Gloria Gaynor",
    "annee": 1978,
    "origine": "international",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:7cv28LXcjAC3GsXbUvXKbX"
  },
  {
    "id": "115",
    "titre": "Don't Stop Me Now",
    "artiste": "Queen",
    "annee": 1978,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5T8EDUDqKcs6OSOwEsfqG7"
  },
  {
    "id": "116",
    "titre": "Hold the Line",
    "artiste": "TOTO",
    "annee": 1978,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4aVuWgvD0X63hcOCnZtNFA"
  },
  {
    "id": "117",
    "titre": "Gimme! Gimme! Gimme! (A Man After Midnight)",
    "artiste": "ABBA",
    "annee": 1979,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3vkQ5DAB1qQMYO4Mr9zJN6"
  },
  {
    "id": "118",
    "titre": "Don't Stop 'Til You Get Enough",
    "artiste": "Michael Jackson",
    "annee": 1979,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:46eu3SBuFCXWsPT39Yg3tJ"
  },
  {
    "id": "119",
    "titre": "The Winner Takes It All",
    "artiste": "ABBA",
    "annee": 1980,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3oEkrIfXfSh9zGnE7eBzSV"
  },
  {
    "id": "120",
    "titre": "Il jouait du piano debout",
    "artiste": "France Gall",
    "annee": 1980,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:3GfUHAoOSGy3hhEaTU34WV"
  },
  {
    "id": "121",
    "titre": "Another One Bites The Dust",
    "artiste": "Queen",
    "annee": 1980,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5vdp5UmvTsnMEMESIF2Ym7"
  },
  {
    "id": "122",
    "titre": "Just Can't Get Enough",
    "artiste": "Depeche Mode",
    "annee": 1981,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:0qi4b1l0eT3jpzeNHeFXDT"
  },
  {
    "id": "123",
    "titre": "Résiste",
    "artiste": "France Gall",
    "annee": 1981,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:51BbACodhBnd9lBs2TI0YT"
  },
  {
    "id": "124",
    "titre": "Under Pressure",
    "artiste": "Queen, David Bowie",
    "annee": 1981,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2fuCquhmrzHpu5xcA1ci9x"
  },
  {
    "id": "125",
    "titre": "Vivre ou survivre",
    "artiste": "Daniel Balavoine",
    "annee": 1982,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:226aaHSePv2kRAiGEmTlsz"
  },
  {
    "id": "126",
    "titre": "Heartbreaker",
    "artiste": "Dionne Warwick",
    "annee": 1982,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3iMLRCGHLQ135LtMjKLkO8"
  },
  {
    "id": "127",
    "titre": "L'Aventurier",
    "artiste": "Indochine",
    "annee": 1982,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:2UC5XnHA1Wn9FjQmbjNca9"
  },
  {
    "id": "128",
    "titre": "Comme toi",
    "artiste": "Jean-Jacques Goldman",
    "annee": 1982,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:7i6VLLVRwLSXgqWlvjyyOy"
  },
  {
    "id": "129",
    "titre": "Quand la musique est bonne",
    "artiste": "Jean-Jacques Goldman",
    "annee": 1982,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:0Wh6e5EkmQseBGVeJqzC9X"
  },
  {
    "id": "130",
    "titre": "Beat It",
    "artiste": "Michael Jackson",
    "annee": 1982,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3BovdzfaX4jb5KFQwoPfAw"
  },
  {
    "id": "131",
    "titre": "Billie Jean",
    "artiste": "Michael Jackson",
    "annee": 1982,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5ChkMS8OtdzJeqyybCc9R5"
  },
  {
    "id": "132",
    "titre": "Thriller",
    "artiste": "Michael Jackson",
    "annee": 1982,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2LlQb7Uoj1kKyGhlkBf9aC"
  },
  {
    "id": "133",
    "titre": "Africa",
    "artiste": "Toto",
    "annee": 1982,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2374M0fQpWi3dLnB54qaLX"
  },
  {
    "id": "134",
    "titre": "Rosanna",
    "artiste": "TOTO",
    "annee": 1982,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:37BTh5g05cxBIRYMbw8g2T"
  },
  {
    "id": "135",
    "titre": "Dès que le vent soufflera",
    "artiste": "Renaud",
    "annee": 1983,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:66oUD4UVvC2DsPaKzw8sJy"
  },
  {
    "id": "136",
    "titre": "Envole-moi",
    "artiste": "Jean-Jacques Goldman",
    "annee": 1984,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:0DVC2pMTkDmkoAW3XyIdYe"
  },
  {
    "id": "137",
    "titre": "Marcia Baila",
    "artiste": "Les Rita Mitsouko",
    "annee": 1984,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:43THPstJP6RXLMd7ryXyNf"
  },
  {
    "id": "138",
    "titre": "Material Girl",
    "artiste": "Madonna",
    "annee": 1984,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7bkyXSi4GtVfD7itZRUR3e"
  },
  {
    "id": "139",
    "titre": "How Soon Is Now?",
    "artiste": "The Smiths",
    "annee": 1984,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1YrnDTqvcnUKxAIeXyaEmU"
  },
  {
    "id": "140",
    "titre": "Hunting High and Low",
    "artiste": "a-ha",
    "annee": 1985,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5tewIdMVsaJWN19ZnmnPNN"
  },
  {
    "id": "141",
    "titre": "Take On Me",
    "artiste": "a-ha",
    "annee": 1985,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2WfaOiMkCvy7F5fcp2zZ8L"
  },
  {
    "id": "142",
    "titre": "The Sun Always Shines on T.V.",
    "artiste": "a-ha",
    "annee": 1985,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0HoaLXRp7jJtdQFunUyUGc"
  },
  {
    "id": "143",
    "titre": "La ballade de Jim",
    "artiste": "Alain Souchon",
    "annee": 1985,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:4lI8A7xmuQqGDj28dzelH4"
  },
  {
    "id": "144",
    "titre": "L'Aziza",
    "artiste": "Daniel Balavoine",
    "annee": 1985,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:1uFWyT4KLFXisiVkiBPCTb"
  },
  {
    "id": "145",
    "titre": "Tous les cris les S.O.S.",
    "artiste": "Daniel Balavoine",
    "annee": 1985,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:2rkw1gqH62Tc9ydm9jsEJ1"
  },
  {
    "id": "146",
    "titre": "3e sexe",
    "artiste": "Indochine",
    "annee": 1985,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:6MShyf3EUHqQ04kJzovIni"
  },
  {
    "id": "147",
    "titre": "Trois nuits par semaine",
    "artiste": "Indochine",
    "annee": 1985,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:3X9XJLwQPWqRnsNaL9z6ss"
  },
  {
    "id": "148",
    "titre": "Je te donne",
    "artiste": "Jean-Jacques Goldman, Michael Jones",
    "annee": 1985,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:55mXuPsEm6aboDIM68RM74"
  },
  {
    "id": "149",
    "titre": "Miss Maggie",
    "artiste": "Renaud",
    "annee": 1985,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:3mrD89s4Ua9IS3Aw5kxMU7"
  },
  {
    "id": "150",
    "titre": "Mistral gagnant",
    "artiste": "Renaud",
    "annee": 1985,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:1MOSRjdAbUhvLNnHCdUEL5"
  },
  {
    "id": "151",
    "titre": "Voyage voyage",
    "artiste": "Desireless",
    "annee": 1986,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:2d8D7uk3tbAThjRkdfrx9c"
  },
  {
    "id": "152",
    "titre": "Andy",
    "artiste": "Les Rita Mitsouko",
    "annee": 1986,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:1QZ7Co5mBLhAQf9OFk4ovN"
  },
  {
    "id": "153",
    "titre": "C'est comme ça",
    "artiste": "Les Rita Mitsouko",
    "annee": 1986,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:3y9FzflARxBDRuARWGDWmq"
  },
  {
    "id": "154",
    "titre": "Les histoires d'a",
    "artiste": "Les Rita Mitsouko",
    "annee": 1986,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:3mmy0hmZ2xLV7EOdrUA8Ai"
  },
  {
    "id": "155",
    "titre": "La Isla Bonita",
    "artiste": "Madonna",
    "annee": 1986,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0NJdtoQ3RX5ckBjJlNXhlP"
  },
  {
    "id": "156",
    "titre": "Libertine",
    "artiste": "Mylène Farmer",
    "annee": 1986,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:6WjOjG7ujOd4uCv4wQvMjV"
  },
  {
    "id": "157",
    "titre": "Ella, elle l'a",
    "artiste": "France Gall",
    "annee": 1987,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:67CfbIKKTCKFqmQLJwUftX"
  },
  {
    "id": "158",
    "titre": "Paradise City",
    "artiste": "Guns N' Roses",
    "annee": 1987,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6eN1f9KNmiWEhpE2RhQqB5"
  },
  {
    "id": "159",
    "titre": "Sweet Child O' Mine",
    "artiste": "Guns N' Roses",
    "annee": 1987,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:7o2CTH4ctstm8TNelqjb51"
  },
  {
    "id": "160",
    "titre": "Welcome To The Jungle",
    "artiste": "Guns N' Roses",
    "annee": 1987,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0G21yYKMZoHa30cYVi1iA8"
  },
  {
    "id": "161",
    "titre": "Là-bas",
    "artiste": "Jean-Jacques Goldman",
    "annee": 1987,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:6pvfDHdFcjiIDXFxvDI879"
  },
  {
    "id": "162",
    "titre": "Smooth Criminal",
    "artiste": "Michael Jackson",
    "annee": 1987,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5T7ywazdGIydr6JCW6t02j"
  },
  {
    "id": "163",
    "titre": "Sans contrefaçon",
    "artiste": "Mylène Farmer",
    "annee": 1987,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:4lKQlYJdzLPKBc0XEDBdrq"
  },
  {
    "id": "164",
    "titre": "Never Gonna Give You Up",
    "artiste": "Rick Astley",
    "annee": 1987,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4PTG3Z6ehGkBFwjybzWkR8"
  },
  {
    "id": "165",
    "titre": "Together Forever",
    "artiste": "Rick Astley",
    "annee": 1987,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:00isIFJWVpXIQ8HkGICSQp"
  },
  {
    "id": "166",
    "titre": "Englishman In New York",
    "artiste": "Sting",
    "annee": 1987,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4KFM3A5QF2IMcc6nHsu3Wp"
  },
  {
    "id": "167",
    "titre": "John",
    "artiste": "Desireless",
    "annee": 1988,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:2qjz6ghwAQa50Gf0QbbrC5"
  },
  {
    "id": "168",
    "titre": "Le petit train",
    "artiste": "Les Rita Mitsouko",
    "annee": 1988,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:4c09RSf8d6djYaA7eULKqJ"
  },
  {
    "id": "169",
    "titre": "Pourvu qu'elles soient douces",
    "artiste": "Mylène Farmer",
    "annee": 1988,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:2gNyCHDGyHrw3lCpT9LqlY"
  },
  {
    "id": "170",
    "titre": "She Wants to Dance with Me",
    "artiste": "Rick Astley",
    "annee": 1988,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0sRaIp06gw4ZOt5VevOKnf"
  },
  {
    "id": "171",
    "titre": "Like a Prayer",
    "artiste": "Madonna",
    "annee": 1989,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:14p4jbULrRxZvnSt4NDSEs"
  },
  {
    "id": "172",
    "titre": "You Got It",
    "artiste": "Roy Orbison",
    "annee": 1989,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6r20M5DWYdIoCDmDViBxuz"
  },
  {
    "id": "173",
    "titre": "Pump Up The Jam",
    "artiste": "Technotronic",
    "annee": 1989,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:21qnJAMtzC6S5SESuqQLEK"
  },
  {
    "id": "174",
    "titre": "Thunderstruck",
    "artiste": "AC/DC",
    "annee": 1990,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:57bgtoPSgt236HzfBOd8kj"
  },
  {
    "id": "175",
    "titre": "Vogue",
    "artiste": "Madonna",
    "annee": 1990,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7j5TIXPi0cCbSSqItmbyZy"
  },
  {
    "id": "176",
    "titre": "U Can't Touch This",
    "artiste": "MC Hammer",
    "annee": 1990,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:1B75hgRqe7A4fwee3g3Wmu"
  },
  {
    "id": "177",
    "titre": "It Must Have Been Love",
    "artiste": "Roxette",
    "annee": 1990,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6kvoHl80mfCVTv7XnZkjQn"
  },
  {
    "id": "178",
    "titre": "Wind Of Change",
    "artiste": "Scorpions",
    "annee": 1990,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3ovjw5HZZv43SxTwApooCM"
  },
  {
    "id": "179",
    "titre": "(Everything I Do) I Do It For You",
    "artiste": "Bryan Adams",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1Eb90nmqTrxylKFhcUzW8P"
  },
  {
    "id": "180",
    "titre": "A nos actes manqués",
    "artiste": "Carole Fredericks, Jean-Jacques Goldman, Michael Jones",
    "annee": 1991,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:49l4Fv41jWi2TGCsPmseKY"
  },
  {
    "id": "181",
    "titre": "Knockin' On Heaven's Door",
    "artiste": "Guns N' Roses",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4JiEyzf0Md7KEFFGWDDdCr"
  },
  {
    "id": "182",
    "titre": "November Rain",
    "artiste": "Guns N' Roses",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3YRCqOhFifThpSRFJ1VWFM"
  },
  {
    "id": "183",
    "titre": "It Ain't Over 'Til It's Over",
    "artiste": "Lenny Kravitz",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6VnpKLtfNH4Dk09YSGPSyR"
  },
  {
    "id": "184",
    "titre": "Bouge de là",
    "artiste": "MC Solaar",
    "annee": 1991,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:3RpPBJljuDR89pd9Au8JKy"
  },
  {
    "id": "185",
    "titre": "Caroline",
    "artiste": "MC Solaar",
    "annee": 1991,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:7pEn4rOtVY4UdAwDxFR7eH"
  },
  {
    "id": "186",
    "titre": "Black or White",
    "artiste": "Michael Jackson",
    "annee": 1991,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7EsjkelQuoUlJXEw7SeVV4"
  },
  {
    "id": "187",
    "titre": "Désenchantée",
    "artiste": "Mylène Farmer",
    "annee": 1991,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:15XYdD283tK9iyJzL738bn"
  },
  {
    "id": "188",
    "titre": "Come As You Are",
    "artiste": "Nirvana",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2RsAajgo0g7bMCHxwH3Sk0"
  },
  {
    "id": "189",
    "titre": "In Bloom",
    "artiste": "Nirvana",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2mvffzYUJ9Ld9xhsF5DUjU"
  },
  {
    "id": "190",
    "titre": "Lithium",
    "artiste": "Nirvana",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5vHLwhxxlGzmClMcxRRFPr"
  },
  {
    "id": "191",
    "titre": "Smells Like Teen Spirit",
    "artiste": "Nirvana",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5ghIJDpPoe3CfHMGu71E6T"
  },
  {
    "id": "192",
    "titre": "Alive",
    "artiste": "Pearl Jam",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1L94M3KIu7QluZe63g64rv"
  },
  {
    "id": "193",
    "titre": "Even Flow",
    "artiste": "Pearl Jam",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6QewNVIDKdSl8Y3ycuHIei"
  },
  {
    "id": "194",
    "titre": "Losing My Religion",
    "artiste": "R.E.M.",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:31AOj9sFz2gM0O3hMARRBx"
  },
  {
    "id": "195",
    "titre": "Give It Away",
    "artiste": "Red Hot Chili Peppers",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0uppYCG86ajpV2hSR3dJJ0"
  },
  {
    "id": "196",
    "titre": "Under the Bridge",
    "artiste": "Red Hot Chili Peppers",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3d9DChrdc6BOeFsbrZ3Is0"
  },
  {
    "id": "197",
    "titre": "Stars",
    "artiste": "Simply Red",
    "annee": 1991,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:75CgD6l7K4qMzZrn4CbZqz"
  },
  {
    "id": "198",
    "titre": "Two Princes",
    "artiste": "Spin Doctors",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0cuq829zRNq4AEdmDJA4aw"
  },
  {
    "id": "199",
    "titre": "One",
    "artiste": "U2",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3G69vJMWsX6ZohTykad2AU"
  },
  {
    "id": "200",
    "titre": "All That She Wants",
    "artiste": "Ace of Base",
    "annee": 1992,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6kWJvPfC4DgUpRsXKNa9z9"
  },
  {
    "id": "201",
    "titre": "No Rain",
    "artiste": "Blind Melon",
    "annee": 1992,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6txWz9UapYHVxEd7dDIHXT"
  },
  {
    "id": "202",
    "titre": "Bed Of Roses",
    "artiste": "Bon Jovi",
    "annee": 1992,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1zng9uqqXoPkmU05nsAlsw"
  },
  {
    "id": "203",
    "titre": "Nuthin' But A \"G\" Thang",
    "artiste": "Dr. Dre, Snoop Dogg",
    "annee": 1992,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:5Tbpp3OLLClPJF8t1DmrFD"
  },
  {
    "id": "204",
    "titre": "Everybody Hurts",
    "artiste": "R.E.M.",
    "annee": 1992,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6PypGyiu0Y2lCDBN1XZEnP"
  },
  {
    "id": "205",
    "titre": "Friday I'm In Love",
    "artiste": "The Cure",
    "annee": 1992,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4QlzkaRHtU8gAdwqjWmO8n"
  },
  {
    "id": "206",
    "titre": "I Will Always Love You",
    "artiste": "Whitney Houston",
    "annee": 1992,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:4eHbdreAnSOrDDsFfc4Fpm"
  },
  {
    "id": "207",
    "titre": "The Sign",
    "artiste": "Ace of Base",
    "annee": 1993,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0hrBpAOgrt8RXigk83LLNE"
  },
  {
    "id": "208",
    "titre": "Foule sentimentale",
    "artiste": "Alain Souchon",
    "annee": 1993,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:2W4ZxAHZAXOf6r65pCskGR"
  },
  {
    "id": "209",
    "titre": "L'amour à la machine",
    "artiste": "Alain Souchon",
    "annee": 1993,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:2qHYEIBD2g14bOT2YkZ2Ye"
  },
  {
    "id": "210",
    "titre": "The Power of Love",
    "artiste": "Céline Dion",
    "annee": 1993,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5kK1Iru9ogP3Iy1zsANU1n"
  },
  {
    "id": "211",
    "titre": "Mr. Jones",
    "artiste": "Counting Crows",
    "annee": 1993,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5DiXcVovI0FcY2s0icWWUu"
  },
  {
    "id": "212",
    "titre": "Ordinary World",
    "artiste": "Duran Duran",
    "annee": 1993,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0wokCRaKD0zPNhMRXAgVsr"
  },
  {
    "id": "213",
    "titre": "Life",
    "artiste": "Haddaway",
    "annee": 1993,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:5ep8e1ZbIjtUajhcsskkpb"
  },
  {
    "id": "214",
    "titre": "What Is Love",
    "artiste": "Haddaway",
    "annee": 1993,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:4v6jydWBTAIqnyPVNyOAdc"
  },
  {
    "id": "215",
    "titre": "Je danse le Mia",
    "artiste": "IAM",
    "annee": 1993,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:6HjJ7gNwslUqgfTiqfTP1C"
  },
  {
    "id": "216",
    "titre": "Fade Into You",
    "artiste": "Mazzy Star",
    "annee": 1993,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1LzNfuep1bnAUR9skqdHCK"
  },
  {
    "id": "217",
    "titre": "Heart-Shaped Box",
    "artiste": "Nirvana",
    "annee": 1993,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:11LmqTE2naFULdEP94AUBa"
  },
  {
    "id": "218",
    "titre": "Baby, I Love Your Way",
    "artiste": "Big Mountain",
    "annee": 1994,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2le9fblYnfoLr9dkZIsJUa"
  },
  {
    "id": "219",
    "titre": "Always",
    "artiste": "Bon Jovi",
    "annee": 1994,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2RChe0r2cMoyOvuKobZy44"
  },
  {
    "id": "220",
    "titre": "Basket Case",
    "artiste": "Green Day",
    "annee": 1994,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6L89mwZXSOwYl76YXfX13s"
  },
  {
    "id": "221",
    "titre": "When I Come Around",
    "artiste": "Green Day",
    "annee": 1994,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1Dr1fXbc2IxaK1Mu8P8Khz"
  },
  {
    "id": "222",
    "titre": "Nouveau western",
    "artiste": "MC Solaar",
    "annee": 1994,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:229qdMCBoifrNO40j8wmQb"
  },
  {
    "id": "223",
    "titre": "Supersonic",
    "artiste": "Oasis",
    "annee": 1994,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4jJfa4mO5JjV9Tz2aAxE2M"
  },
  {
    "id": "224",
    "titre": "Whatever",
    "artiste": "Oasis",
    "annee": 1994,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5OWsea313ovaQoXvsgWq79"
  },
  {
    "id": "225",
    "titre": "Kiss from a Rose",
    "artiste": "Seal",
    "annee": 1994,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3YKptz29AsOlm7WAVnztBh"
  },
  {
    "id": "226",
    "titre": "Black Hole Sun",
    "artiste": "Soundgarden",
    "annee": 1994,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2EoOZnxNgtmZaD8uUmz2nD"
  },
  {
    "id": "227",
    "titre": "Waterfalls",
    "artiste": "TLC",
    "annee": 1994,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:6qspW4YKycviDFjHBOaqUY"
  },
  {
    "id": "228",
    "titre": "Ironic",
    "artiste": "Alanis Morissette",
    "annee": 1995,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1d6KS9GH06JAd19uiBy9IE"
  },
  {
    "id": "229",
    "titre": "I Got 5 On It",
    "artiste": "Luniz, Michael Marshall",
    "annee": 1995,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:4IYKjN1DrYzxKXt0umJqsG"
  },
  {
    "id": "230",
    "titre": "Fantasy",
    "artiste": "Mariah Carey",
    "annee": 1995,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:6xkryXuiZU360Lngd4sx13"
  },
  {
    "id": "231",
    "titre": "Champagne Supernova",
    "artiste": "Oasis",
    "annee": 1995,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2A7GGXmTlXuH9LOvBXgOX4"
  },
  {
    "id": "232",
    "titre": "Don't Look Back In Anger",
    "artiste": "Oasis",
    "annee": 1995,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:12dU3vAh6AFoJkisorfoUl"
  },
  {
    "id": "233",
    "titre": "Wonderwall",
    "artiste": "Oasis",
    "annee": 1995,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5wj4E6IsrVtn8IBJQOd0Cl"
  },
  {
    "id": "234",
    "titre": "Boombastic",
    "artiste": "Shaggy",
    "annee": 1995,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:4fxF8ljwryMZX5c9EKrLFE"
  },
  {
    "id": "235",
    "titre": "1979",
    "artiste": "The Smashing Pumpkins",
    "annee": 1995,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5QLHGv0DfpeXLNFo7SFEy1"
  },
  {
    "id": "236",
    "titre": "Bullet With Butterfly Wings",
    "artiste": "The Smashing Pumpkins",
    "annee": 1995,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6GtX0jaNL8IjVQfrDBx81z"
  },
  {
    "id": "237",
    "titre": "No Diggity",
    "artiste": "Blackstreet, Dr. Dre, Queen Pen",
    "annee": 1996,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:6MdqqkQ8sSC0WB4i8PyRuQ"
  },
  {
    "id": "238",
    "titre": "It's All Coming Back to Me Now",
    "artiste": "Céline Dion",
    "annee": 1996,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5EQzuYfTZt7B2LqlvTF49l"
  },
  {
    "id": "239",
    "titre": "Killing Me Softly With His Song",
    "artiste": "Fugees, Ms. Lauryn Hill",
    "annee": 1996,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0Q0IVlqMV64kNLlwjPj0Hl"
  },
  {
    "id": "240",
    "titre": "Freed From Desire",
    "artiste": "Gala, Molella, Phil Jay",
    "annee": 1996,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:3u5N55tHf7hXATSQrjBh2q"
  },
  {
    "id": "241",
    "titre": "Return of the Mack",
    "artiste": "Mark Morrison",
    "annee": 1996,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3jDdpx9PMlfMBS5tOBHFm9"
  },
  {
    "id": "242",
    "titre": "Push",
    "artiste": "Matchbox Twenty",
    "annee": 1996,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2KVwlelhxKUy8LVV6JypH3"
  },
  {
    "id": "243",
    "titre": "Children",
    "artiste": "Robert Miles",
    "annee": 1996,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:4wtR6HB3XekEengMX17cpc"
  },
  {
    "id": "244",
    "titre": "Wannabe",
    "artiste": "Spice Girls",
    "annee": 1996,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1Je1IMUlBXcx1Fz0WE7oPT"
  },
  {
    "id": "245",
    "titre": "Lovefool",
    "artiste": "The Cardigans",
    "annee": 1996,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7aQjPecQdIuNd1sz3KCDhD"
  },
  {
    "id": "246",
    "titre": "One Headlight",
    "artiste": "The Wallflowers",
    "annee": 1996,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0z1b34WikhOH9ZxU8QDWcv"
  },
  {
    "id": "247",
    "titre": "Un-Break My Heart",
    "artiste": "Toni Braxton",
    "annee": 1996,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:5Ihd9HrPvOADyVoonH9ZjB"
  },
  {
    "id": "248",
    "titre": "Barbie Girl",
    "artiste": "Aqua",
    "annee": 1997,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5ZrDlcxIDZyjOzHdYW1ydr"
  },
  {
    "id": "249",
    "titre": "As Long as You Love Me",
    "artiste": "Backstreet Boys",
    "annee": 1997,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3UpS7kBnkVQYG13pDDFTC4"
  },
  {
    "id": "250",
    "titre": "Everybody (Backstreet's Back)",
    "artiste": "Backstreet Boys",
    "annee": 1997,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1di1BEgJYzPvXUuinsYJGP"
  },
  {
    "id": "251",
    "titre": "Song 2",
    "artiste": "Blur",
    "annee": 1997,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1FTSo4v6BOZH9QxKc3MbVM"
  },
  {
    "id": "252",
    "titre": "Around the World",
    "artiste": "Daft Punk",
    "annee": 1997,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:1q4poN5PaGvY1RbEC5gl5s"
  },
  {
    "id": "253",
    "titre": "My Hero",
    "artiste": "Foo Fighters",
    "annee": 1997,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4dVbhS6OiYvFikshyaQaCN"
  },
  {
    "id": "254",
    "titre": "Good Riddance (Time of Your Life)",
    "artiste": "Green Day",
    "annee": 1997,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6ORqU0bHbVCRjXm9AjyHyZ"
  },
  {
    "id": "255",
    "titre": "Demain, c'est loin",
    "artiste": "IAM",
    "annee": 1997,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:0QtKyWOrV5Vhw2n5Yf7LcF"
  },
  {
    "id": "256",
    "titre": "La saga",
    "artiste": "IAM",
    "annee": 1997,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:3mFHyDEPrWnc29OlWUBtPI"
  },
  {
    "id": "257",
    "titre": "Nés sous la même étoile",
    "artiste": "IAM",
    "annee": 1997,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:66ZtqKhYSA8XyPr0aAUFsm"
  },
  {
    "id": "258",
    "titre": "Petit frère",
    "artiste": "IAM",
    "annee": 1997,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:3jqBLwtTiUYismDiZgAgPE"
  },
  {
    "id": "259",
    "titre": "J't'emmène au vent",
    "artiste": "Louise Attaque",
    "annee": 1997,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:0Isvah1AGx9wiRg9eyPQL5"
  },
  {
    "id": "260",
    "titre": "La brune",
    "artiste": "Louise Attaque",
    "annee": 1997,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:7HG8UZcKQMp4YpkBFnXVRY"
  },
  {
    "id": "261",
    "titre": "Léa",
    "artiste": "Louise Attaque",
    "annee": 1997,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:709Vk4ahhCM6ENgRVTTYw6"
  },
  {
    "id": "262",
    "titre": "Ton invitation",
    "artiste": "Louise Attaque",
    "annee": 1997,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:1xsRqL4cvEaOQ5TbXpqaAV"
  },
  {
    "id": "263",
    "titre": "Bitch",
    "artiste": "Meredith Brooks",
    "annee": 1997,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3i6qNxyVgIdUZTTi5m25EM"
  },
  {
    "id": "264",
    "titre": "Torn",
    "artiste": "Natalie Imbruglia",
    "annee": 1997,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1Jaah2tmN9Hv81A87KZ1MU"
  },
  {
    "id": "265",
    "titre": "Angels",
    "artiste": "Robbie Williams",
    "annee": 1997,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1M2nd8jNUkkwrc1dgBPTJz"
  },
  {
    "id": "266",
    "titre": "Kiss Me",
    "artiste": "Sixpence None The Richer",
    "annee": 1997,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:754kgU5rWscRTfvlsuEwFp"
  },
  {
    "id": "267",
    "titre": "Mo Money Mo Problems (feat. Puff Daddy & Mase)",
    "artiste": "The Notorious B.I.G., Mase, Diddy",
    "annee": 1997,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:4INDiWSKvqSKDEu7mh8HFz"
  },
  {
    "id": "268",
    "titre": "Bitter Sweet Symphony",
    "artiste": "The Verve",
    "annee": 1997,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:57iDDD9N9tTWe75x6qhStw"
  },
  {
    "id": "269",
    "titre": "Semi-Charmed Life",
    "artiste": "Third Eye Blind",
    "annee": 1997,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:42et6fnHCw1HIPSrdPprMl"
  },
  {
    "id": "270",
    "titre": "Miami",
    "artiste": "Will Smith",
    "annee": 1997,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:6e8Ou0wiqAzIpWb2eSxll8"
  },
  {
    "id": "271",
    "titre": "Changes",
    "artiste": "2Pac, Talent",
    "annee": 1998,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:1ofhfV90EnYhEr7Un2fWiv"
  },
  {
    "id": "272",
    "titre": "The Boy Is Mine",
    "artiste": "Brandy, Monica",
    "annee": 1998,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:6sHsXIJoEN5JpdkGMQDJxt"
  },
  {
    "id": "273",
    "titre": "...Baby One More Time",
    "artiste": "Britney Spears",
    "annee": 1998,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3MjUtNVVq3C8Fn0MP3zhXa"
  },
  {
    "id": "274",
    "titre": "Believe",
    "artiste": "Cher",
    "annee": 1998,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2goLsvvODILDzeeiT4dAoR"
  },
  {
    "id": "275",
    "titre": "Fly Away",
    "artiste": "Lenny Kravitz",
    "annee": 1998,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1OxcIUqVmVYxT6427tbhDW"
  },
  {
    "id": "276",
    "titre": "La Tribu de Dana",
    "artiste": "Manau",
    "annee": 1998,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:33DMSeRaJpamHQPHNvyYyz"
  },
  {
    "id": "277",
    "titre": "Mais qui est la belette",
    "artiste": "Manau",
    "annee": 1998,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:0h8RQIG9IdeCHXUoaTpZvo"
  },
  {
    "id": "278",
    "titre": "Panique celtique",
    "artiste": "Manau",
    "annee": 1998,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:4xwF64Jel43f1msInIZ9cH"
  },
  {
    "id": "279",
    "titre": "Doo Wop (That Thing)",
    "artiste": "Ms. Lauryn Hill",
    "annee": 1998,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0uEp9E98JB5awlA084uaIg"
  },
  {
    "id": "280",
    "titre": "You Get What You Give",
    "artiste": "New Radicals",
    "annee": 1998,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1Cwsd5xI8CajJz795oy4XF"
  },
  {
    "id": "281",
    "titre": "Music Sounds Better with You",
    "artiste": "Stardust",
    "annee": 1998,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:303ccTay2FiDTZ9fZ2AdBt"
  },
  {
    "id": "282",
    "titre": "Iris",
    "artiste": "The Goo Goo Dolls",
    "annee": 1998,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6Qyc6fS4DsZjB2mRW9DsQs"
  },
  {
    "id": "283",
    "titre": "Pretty Fly (For A White Guy)",
    "artiste": "The Offspring",
    "annee": 1998,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3SFXsFpeGmBTtQvKiwYMDA"
  },
  {
    "id": "284",
    "titre": "The Kids Aren't Alright",
    "artiste": "The Offspring",
    "annee": 1998,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4EchqUKQ3qAQuRNKmeIpnf"
  },
  {
    "id": "285",
    "titre": "I Want It That Way",
    "artiste": "Backstreet Boys",
    "annee": 1999,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:47BBI51FKFwOMlIiX6m8ya"
  },
  {
    "id": "286",
    "titre": "The Bad Touch",
    "artiste": "Bloodhound Gang",
    "annee": 1999,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5EYdTPdJD74r9EVZBztqGG"
  },
  {
    "id": "287",
    "titre": "Genie In a Bottle",
    "artiste": "Christina Aguilera",
    "annee": 1999,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:11mwFrKvLXCbcVGNxffGyP"
  },
  {
    "id": "288",
    "titre": "Say My Name",
    "artiste": "Destiny's Child",
    "annee": 1999,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:7H6ev70Weq6DdpZyyTmUXk"
  },
  {
    "id": "289",
    "titre": "Thank You",
    "artiste": "Dido",
    "annee": 1999,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3yUcJwYu7fXAfqMj9krY6l"
  },
  {
    "id": "290",
    "titre": "Still D.R.E.",
    "artiste": "Dr. Dre, Snoop Dogg",
    "annee": 1999,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:503OTo2dSqe7qk76rgsbep"
  },
  {
    "id": "291",
    "titre": "Learn to Fly",
    "artiste": "Foo Fighters",
    "annee": 1999,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5OQsiBsky2k2kDKy2bX2eT"
  },
  {
    "id": "292",
    "titre": "Californication",
    "artiste": "Red Hot Chili Peppers",
    "annee": 1999,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:48UPSzbZjgc449aqz8bxox"
  },
  {
    "id": "293",
    "titre": "Scar Tissue",
    "artiste": "Red Hot Chili Peppers",
    "annee": 1999,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1G391cbiT3v3Cywg8T7DM1"
  },
  {
    "id": "294",
    "titre": "Livin' la Vida Loca",
    "artiste": "Ricky Martin",
    "annee": 1999,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0Ph6L4l8dYUuXFmb71Ajnd"
  },
  {
    "id": "295",
    "titre": "All Star",
    "artiste": "Smash Mouth",
    "annee": 1999,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3cfOd4CMv2snFaKAnMdnvK"
  },
  {
    "id": "296",
    "titre": "No Scrubs",
    "artiste": "TLC",
    "annee": 1999,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:1KGi9sZVMeszgZOWivFpxs"
  },
  {
    "id": "297",
    "titre": "Kryptonite",
    "artiste": "3 Doors Down",
    "annee": 2000,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6ZOBP3NvffbU4SZcrnt1k6"
  },
  {
    "id": "298",
    "titre": "Oops!...I Did It Again",
    "artiste": "Britney Spears",
    "annee": 2000,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6naxalmIoLFWR0siv8dnQQ"
  },
  {
    "id": "299",
    "titre": "Yellow",
    "artiste": "Coldplay",
    "annee": 2000,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3AJwUDP919kvQ9QcozQPxg"
  },
  {
    "id": "300",
    "titre": "One More Time",
    "artiste": "Daft Punk",
    "annee": 2000,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:0DiWol3AO6WpXZgp0goxAV"
  },
  {
    "id": "301",
    "titre": "The Real Slim Shady",
    "artiste": "Eminem",
    "annee": 2000,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3yfqSUWxFvZELEM4PmlwIR"
  },
  {
    "id": "302",
    "titre": "In the End",
    "artiste": "Linkin Park",
    "annee": 2000,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:60a0Rd6pjrkxjPbaKzXjfq"
  },
  {
    "id": "303",
    "titre": "Tu dis rien",
    "artiste": "Louise Attaque",
    "annee": 2000,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:74yAfFHs424ILg0fwr3H2i"
  },
  {
    "id": "304",
    "titre": "Lady (Hear Me Tonight)",
    "artiste": "Modjo",
    "annee": 2000,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:7HHYgMJYAtMkQn50wmXOIN"
  },
  {
    "id": "305",
    "titre": "B.O.B. (Bombs Over Baghdad)",
    "artiste": "Outkast",
    "annee": 2000,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3WibbMr6canxRJXhNtAvLU"
  },
  {
    "id": "306",
    "titre": "Ms. Jackson",
    "artiste": "Outkast",
    "annee": 2000,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0I3q5fE6wg7LIfHGngUTnV"
  },
  {
    "id": "307",
    "titre": "It Wasn't Me",
    "artiste": "Shaggy, Rik Rok",
    "annee": 2000,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3WkibOpDF7cQ5xntM1epyf"
  },
  {
    "id": "308",
    "titre": "Teenage Dirtbag",
    "artiste": "Wheatus",
    "annee": 2000,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:25FTMokYEbEWHEdss5JLZS"
  },
  {
    "id": "309",
    "titre": "Ces soirées-là",
    "artiste": "Yannick",
    "annee": 2000,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:27lq4sDEt6OQMNWiBGSuLT"
  },
  {
    "id": "310",
    "titre": "Lady Marmalade",
    "artiste": "Christina Aguilera, Lil' Kim, Mýa, P!nk",
    "annee": 2001,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7GbqE3MlkKosIaCvf50JRK"
  },
  {
    "id": "311",
    "titre": "One Last Breath",
    "artiste": "Creed",
    "annee": 2001,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:42T2QQv3xgBlpQxaSP7lnK"
  },
  {
    "id": "312",
    "titre": "Digital Love",
    "artiste": "Daft Punk",
    "annee": 2001,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:2VEZx7NWsZ1D0eJ4uv5Fym"
  },
  {
    "id": "313",
    "titre": "Harder, Better, Faster, Stronger",
    "artiste": "Daft Punk",
    "annee": 2001,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:5W3cjX2J3tjhG8zb6u0qHn"
  },
  {
    "id": "314",
    "titre": "The Middle",
    "artiste": "Jimmy Eat World",
    "annee": 2001,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6GG73Jik4jUlQCkKg9JuGO"
  },
  {
    "id": "315",
    "titre": "Can't Get You out of My Head",
    "artiste": "Kylie Minogue",
    "annee": 2001,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3E7ZwUMJFqpsDOJzEkBrQ7"
  },
  {
    "id": "316",
    "titre": "Family Affair",
    "artiste": "Mary J. Blige",
    "annee": 2001,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3aw9iWUQ3VrPQltgwvN9Xu"
  },
  {
    "id": "317",
    "titre": "La belle et le bad boy",
    "artiste": "MC Solaar",
    "annee": 2001,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:4xVLwCjKY9FzseFCRwv51D"
  },
  {
    "id": "318",
    "titre": "Solaar pleure",
    "artiste": "MC Solaar",
    "annee": 2001,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:4IFd5gfOwvN8KEkRdJr0yn"
  },
  {
    "id": "319",
    "titre": "How You Remind Me",
    "artiste": "Nickelback",
    "annee": 2001,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0gmbgwZ8iqyMPmXefof8Yf"
  },
  {
    "id": "320",
    "titre": "Island In The Sun",
    "artiste": "Weezer",
    "annee": 2001,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2MLHyLy5z5l5YRp7momlgw"
  },
  {
    "id": "321",
    "titre": "Sk8er Boi",
    "artiste": "Avril Lavigne",
    "annee": 2002,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:00Mb3DuaIH1kjrwOku9CGU"
  },
  {
    "id": "322",
    "titre": "Clocks",
    "artiste": "Coldplay",
    "annee": 2002,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0BCPKOYdS2jbQ8iyB56Zns"
  },
  {
    "id": "323",
    "titre": "The Scientist",
    "artiste": "Coldplay",
    "annee": 2002,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:75JFxkI2RXiU7L9VXzMkle"
  },
  {
    "id": "324",
    "titre": "Lose Yourself",
    "artiste": "Eminem",
    "annee": 2002,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:7MJQ9Nfxzh8LPZ9e9u68Fq"
  },
  {
    "id": "325",
    "titre": "Without Me",
    "artiste": "Eminem",
    "annee": 2002,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:7lQ8MOhq6IN2w8EYcFNSUk"
  },
  {
    "id": "326",
    "titre": "Till I Collapse",
    "artiste": "Eminem, Nate Dogg",
    "annee": 2002,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:4xkOaSrkexMciUUogZKVTS"
  },
  {
    "id": "327",
    "titre": "J'ai demandé à la lune",
    "artiste": "Indochine",
    "annee": 2002,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:2QSAj76Ba6aMFX9RlXdUdO"
  },
  {
    "id": "328",
    "titre": "Hurt",
    "artiste": "Johnny Cash",
    "annee": 2002,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:28cnXtME493VX9NOw9cIUh"
  },
  {
    "id": "329",
    "titre": "Rock Your Body",
    "artiste": "Justin Timberlake",
    "annee": 2002,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:1AWQoqb9bSvzTjaLralEkT"
  },
  {
    "id": "330",
    "titre": "Dilemma",
    "artiste": "Nelly, Kelly Rowland",
    "annee": 2002,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0ARK753YaiJbpLUk7z5yIM"
  },
  {
    "id": "331",
    "titre": "Can't Stop",
    "artiste": "Red Hot Chili Peppers",
    "annee": 2002,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3ZOEytgrvLwQaqXreDs2Jx"
  },
  {
    "id": "332",
    "titre": "Manhattan-Kaboul",
    "artiste": "Renaud, Axelle Red",
    "annee": 2002,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:7eJdx83TiKsVqAzLFBelMO"
  },
  {
    "id": "333",
    "titre": "In Da Club",
    "artiste": "50 Cent",
    "annee": 2003,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:7iL6o9tox1zgHpKUfh9vuC"
  },
  {
    "id": "334",
    "titre": "P.I.M.P.",
    "artiste": "50 Cent",
    "annee": 2003,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3G0yz3DZn3lfraledmBCT0"
  },
  {
    "id": "335",
    "titre": "21 Questions",
    "artiste": "50 Cent, Nate Dogg",
    "annee": 2003,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:70FCugJxa7XW04Np6iYJdI"
  },
  {
    "id": "336",
    "titre": "If I Ain't Got You",
    "artiste": "Alicia Keys",
    "annee": 2003,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3XVBdLihbNbxUwZosxcGuJ"
  },
  {
    "id": "337",
    "titre": "Crazy In Love",
    "artiste": "Beyoncé",
    "annee": 2003,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:5IVuqXILoxVWvWEPm82Jxr"
  },
  {
    "id": "338",
    "titre": "Where Is The Love?",
    "artiste": "Black Eyed Peas",
    "annee": 2003,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0xmjwnQ3FNE6HuWCt2nHdZ"
  },
  {
    "id": "339",
    "titre": "Toxic",
    "artiste": "Britney Spears",
    "annee": 2003,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6I9VzXrHxO9rA9A5euc8Ak"
  },
  {
    "id": "340",
    "titre": "DJ",
    "artiste": "Diam's",
    "annee": 2003,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:4D0dgZLZWkaWG25NBuxOfS"
  },
  {
    "id": "341",
    "titre": "Bring Me To Life",
    "artiste": "Evanescence",
    "annee": 2003,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0COqiPhxzoWICwFCS4eZcp"
  },
  {
    "id": "342",
    "titre": "Numb",
    "artiste": "Linkin Park",
    "annee": 2003,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2nLtzopw4rPReszdYBJU6h"
  },
  {
    "id": "343",
    "titre": "Hey Ya!",
    "artiste": "OutKast",
    "annee": 2003,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2PpruBYCo4H7WOBJ7Q2EwM"
  },
  {
    "id": "344",
    "titre": "Roses",
    "artiste": "Outkast",
    "annee": 2003,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:6bUNEbXT7HovLW6BgPCBsb"
  },
  {
    "id": "345",
    "titre": "The Way You Move (feat. Sleepy Brown)",
    "artiste": "Outkast, Sleepy Brown",
    "annee": 2003,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:5z7mYFfhw6N6f23VwrokJD"
  },
  {
    "id": "346",
    "titre": "Mockingbird",
    "artiste": "Eminem",
    "annee": 2004,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:561jH07mF1jHuk7KlaeF0s"
  },
  {
    "id": "347",
    "titre": "Take Me Out",
    "artiste": "Franz Ferdinand",
    "annee": 2004,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:20I8RduZC2PWMWTDCZuuAN"
  },
  {
    "id": "348",
    "titre": "All Falls Down",
    "artiste": "Kanye West, Syleena Johnson",
    "annee": 2004,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:5SkRLpaGtvYPhw02vZhQQ9"
  },
  {
    "id": "349",
    "titre": "Somewhere Only We Know",
    "artiste": "Keane",
    "annee": 2004,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1SKPmfSYaPsETbRHaiA18G"
  },
  {
    "id": "350",
    "titre": "Since U Been Gone",
    "artiste": "Kelly Clarkson",
    "annee": 2004,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3xrn9i8zhNZsTtcoWgQEAd"
  },
  {
    "id": "351",
    "titre": "Mr. Brightside",
    "artiste": "The Killers",
    "annee": 2004,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:003vvx7Niy0yvhvHt4a68B"
  },
  {
    "id": "352",
    "titre": "Somebody Told Me",
    "artiste": "The Killers",
    "annee": 2004,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6PwjJ58I4t7Mae9xfZ9l9v"
  },
  {
    "id": "353",
    "titre": "Yeah! (feat. Lil Jon & Ludacris)",
    "artiste": "USHER, Lil Jon, Ludacris",
    "annee": 2004,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:5rb9QrpfcKFHM1EUbSIurX"
  },
  {
    "id": "354",
    "titre": "Just A Lil Bit",
    "artiste": "50 Cent",
    "annee": 2005,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:4nva9EpKntUTs6CRSGBCn9"
  },
  {
    "id": "355",
    "titre": "Et si en plus y'a personne",
    "artiste": "Alain Souchon",
    "annee": 2005,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:3Cgwrk8TUcu03H8HwFp3qK"
  },
  {
    "id": "356",
    "titre": "My Humps",
    "artiste": "Black Eyed Peas",
    "annee": 2005,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:20jYtEun4dUdYZ9foaOC48"
  },
  {
    "id": "357",
    "titre": "Pump It",
    "artiste": "Black Eyed Peas",
    "annee": 2005,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2ygMBIctKIAfbEBcT9065L"
  },
  {
    "id": "358",
    "titre": "Fix You",
    "artiste": "Coldplay",
    "annee": 2005,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:7LVHVU3tWfcxj5aiPFEW4Q"
  },
  {
    "id": "359",
    "titre": "Feel Good Inc.",
    "artiste": "Gorillaz, De La Soul",
    "annee": 2005,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:0d28khcov6AiegSCpG5TuT"
  },
  {
    "id": "360",
    "titre": "Ordinary People",
    "artiste": "John Legend",
    "annee": 2005,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:2ZA4uMlSZjaoWGFqP1tsLI"
  },
  {
    "id": "361",
    "titre": "Hung Up",
    "artiste": "Madonna",
    "annee": 2005,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3850dYVgOFIXJh5U4BFEWH"
  },
  {
    "id": "362",
    "titre": "Hey There Delilah",
    "artiste": "Plain White T's",
    "annee": 2005,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4RCWB3V8V0dignt99LZ8vH"
  },
  {
    "id": "363",
    "titre": "Temperature",
    "artiste": "Sean Paul",
    "annee": 2005,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0k2GOhqsrxDTAbFFSdNJjT"
  },
  {
    "id": "364",
    "titre": "Le même sang",
    "artiste": "Sinik, Diam's",
    "annee": 2005,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:0VJ4JHw63XLEzKazohwRaJ"
  },
  {
    "id": "365",
    "titre": "How to Save a Life",
    "artiste": "The Fray",
    "annee": 2005,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5fVZC9GiM4e8vu99W0Xf6J"
  },
  {
    "id": "366",
    "titre": "Hate It Or Love It",
    "artiste": "The Game, 50 Cent",
    "annee": 2005,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2wGSgTmgSF3xjRrHkTc25R"
  },
  {
    "id": "367",
    "titre": "Irreplaceable",
    "artiste": "Beyoncé",
    "annee": 2006,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3qim3nNFg4aSTLZDLAFXhx"
  },
  {
    "id": "368",
    "titre": "Jeune Demoiselle",
    "artiste": "Diam's",
    "annee": 2006,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:42apdJFDH65Ew9RVuldbrb"
  },
  {
    "id": "369",
    "titre": "La Boulette",
    "artiste": "Diam's",
    "annee": 2006,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:4ycebyWnCg9jJXFnhnZqnz"
  },
  {
    "id": "370",
    "titre": "Ma France à Moi",
    "artiste": "Diam's",
    "annee": 2006,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:3jw5QyNE1hBE73xbtX7TSn"
  },
  {
    "id": "371",
    "titre": "Confessions Nocturnes",
    "artiste": "Diam's, Vitaa",
    "annee": 2006,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:641ONQxuNT0GpsyeUxUEdR"
  },
  {
    "id": "372",
    "titre": "The Sweet Escape",
    "artiste": "Gwen Stefani, Akon",
    "annee": 2006,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:07K4GcCDSTiXUF5ssyTRUM"
  },
  {
    "id": "373",
    "titre": "SexyBack (feat. Timbaland)",
    "artiste": "Justin Timberlake, Timbaland",
    "annee": 2006,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:0O45fw2L5vsWpdsOdXwNAR"
  },
  {
    "id": "374",
    "titre": "Maneater",
    "artiste": "Nelly Furtado",
    "annee": 2006,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4wH4dJgrsxONID6KS2tDQM"
  },
  {
    "id": "375",
    "titre": "Say It Right",
    "artiste": "Nelly Furtado",
    "annee": 2006,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2aI21FnmY7TJVKeMaoQZ0t"
  },
  {
    "id": "376",
    "titre": "Promiscuous",
    "artiste": "Nelly Furtado, Timbaland",
    "annee": 2006,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2gam98EZKrF9XuOkU13ApN"
  },
  {
    "id": "377",
    "titre": "Dani California",
    "artiste": "Red Hot Chili Peppers",
    "annee": 2006,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:10Nmj3JCNoMeBQ87uw5j8k"
  },
  {
    "id": "378",
    "titre": "Chasing Cars",
    "artiste": "Snow Patrol",
    "annee": 2006,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5hnyJvgoWiQUYZttV4wXy6"
  },
  {
    "id": "379",
    "titre": "When You Were Young",
    "artiste": "The Killers",
    "annee": 2006,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:70wYA8oYHoMzhRRkARoMhU"
  },
  {
    "id": "380",
    "titre": "Ayo Technology",
    "artiste": "50 Cent, Justin Timberlake, Timbaland",
    "annee": 2007,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:36Hwcla06Q5BCr59CL0sBp"
  },
  {
    "id": "381",
    "titre": "Gimme More",
    "artiste": "Britney Spears",
    "annee": 2007,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6ic8OlLUNEATToEFU3xmaH"
  },
  {
    "id": "382",
    "titre": "Low (feat. T-Pain)",
    "artiste": "Flo Rida, T-Pain",
    "annee": 2007,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0CAfXk7DXMnon4gLudAp7J"
  },
  {
    "id": "383",
    "titre": "Stronger",
    "artiste": "Kanye West",
    "annee": 2007,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0j2T0R9dR9qdJYsB7ciXhf"
  },
  {
    "id": "384",
    "titre": "Flashing Lights",
    "artiste": "Kanye West, Dwele",
    "annee": 2007,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:5TRPicyLGbAF2LGBFbHGvO"
  },
  {
    "id": "385",
    "titre": "What I've Done",
    "artiste": "Linkin Park",
    "annee": 2007,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:18lR4BzEs7e3qzc0KVkTpU"
  },
  {
    "id": "386",
    "titre": "Valerie (feat. Amy Winehouse)",
    "artiste": "Mark Ronson, Amy Winehouse",
    "annee": 2007,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6kopmMZiyLmw7h66uXcXR7"
  },
  {
    "id": "387",
    "titre": "Electric Feel",
    "artiste": "MGMT",
    "annee": 2007,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:3FtYbEfBqAlGO46NUDQSAt"
  },
  {
    "id": "388",
    "titre": "Kids",
    "artiste": "MGMT",
    "annee": 2007,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:1jJci4qxiYcOHhQR247rEU"
  },
  {
    "id": "389",
    "titre": "Apologize",
    "artiste": "OneRepublic",
    "annee": 2007,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3UhXPxLDFKCj1ZO6mmtV0a"
  },
  {
    "id": "390",
    "titre": "Don't Stop The Music",
    "artiste": "Rihanna",
    "annee": 2007,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:0ByMNEPAPpOR5H69DVrTNy"
  },
  {
    "id": "391",
    "titre": "Umbrella",
    "artiste": "Rihanna",
    "annee": 2007,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:49FYlytm3dAAraYgpoJZux"
  },
  {
    "id": "392",
    "titre": "Beautiful Girls",
    "artiste": "Sean Kingston",
    "annee": 2007,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:1hGy2eLcmC8eKx7qr1tOqx"
  },
  {
    "id": "393",
    "titre": "Give It To Me",
    "artiste": "Timbaland, Justin Timberlake, Nelly Furtado",
    "annee": 2007,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0wbDgMuAoy7O7pL3a69uZx"
  },
  {
    "id": "394",
    "titre": "The Way I Are",
    "artiste": "Timbaland, Keri Hilson, D.O.E.",
    "annee": 2007,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2bLqfJjuC5syrsgDsZfGmn"
  },
  {
    "id": "395",
    "titre": "Chasing Pavements",
    "artiste": "Adele",
    "annee": 2008,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0Z5ok0QLLttAKsujOZYOXf"
  },
  {
    "id": "396",
    "titre": "Halo",
    "artiste": "Beyoncé",
    "annee": 2008,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:2CvOqDpQIMw69cCzWqr5yr"
  },
  {
    "id": "397",
    "titre": "Single Ladies (Put a Ring on It)",
    "artiste": "Beyoncé",
    "annee": 2008,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:557un1HgwYMuqfWGSTmnxw"
  },
  {
    "id": "398",
    "titre": "Circus",
    "artiste": "Britney Spears",
    "annee": 2008,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7jk7gqyEonmVVYahZN5zhW"
  },
  {
    "id": "399",
    "titre": "Viva La Vida",
    "artiste": "Coldplay",
    "annee": 2008,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1mea3bSkSGXuIRvnydlB5b"
  },
  {
    "id": "400",
    "titre": "Walking On A Dream",
    "artiste": "Empire Of The Sun",
    "annee": 2008,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:5r5cp9IpziiIsR6b93vcnQ"
  },
  {
    "id": "401",
    "titre": "We Are The People",
    "artiste": "Empire Of The Sun",
    "annee": 2008,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:3zEN0ii6s4DHHBpnTp3RP7"
  },
  {
    "id": "402",
    "titre": "Heartless",
    "artiste": "Kanye West",
    "annee": 2008,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:4EWCNWgDS8707fNSZ1oaA5"
  },
  {
    "id": "403",
    "titre": "I Kissed A Girl",
    "artiste": "Katy Perry",
    "annee": 2008,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:14iN3o8ptQ8cFVZTEmyQRV"
  },
  {
    "id": "404",
    "titre": "Sex on Fire",
    "artiste": "Kings of Leon",
    "annee": 2008,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0ntQJM78wzOLVeCUAW7Y45"
  },
  {
    "id": "405",
    "titre": "Use Somebody",
    "artiste": "Kings of Leon",
    "annee": 2008,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5VGlqQANWDKJFl0MBG3sg2"
  },
  {
    "id": "406",
    "titre": "Poker Face",
    "artiste": "Lady Gaga",
    "annee": 2008,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1QV6tiMFM6fSOKOGLMHYYg"
  },
  {
    "id": "407",
    "titre": "Just Dance",
    "artiste": "Lady Gaga, Colby O'Donis",
    "annee": 2008,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1dzQoRqT5ucxXVaAhTcT0J"
  },
  {
    "id": "408",
    "titre": "Disturbia",
    "artiste": "Rihanna",
    "annee": 2008,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:2VOomzT6VavJOGBeySqaMc"
  },
  {
    "id": "409",
    "titre": "Human",
    "artiste": "The Killers",
    "annee": 2008,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1sTsuZTdANkiFd7T34H3nb"
  },
  {
    "id": "410",
    "titre": "Boom Boom Pow",
    "artiste": "Black Eyed Peas",
    "annee": 2009,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3oDFtOhcN08qeDPAK6MEQG"
  },
  {
    "id": "411",
    "titre": "I Gotta Feeling",
    "artiste": "Black Eyed Peas",
    "annee": 2009,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2H1047e0oMSj10dgp7p2VG"
  },
  {
    "id": "412",
    "titre": "Meet Me Halfway",
    "artiste": "Black Eyed Peas",
    "annee": 2009,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3F9ByoUqu31xU0I3G5xfVg"
  },
  {
    "id": "413",
    "titre": "Sexy Bitch (feat. Akon)",
    "artiste": "David Guetta, Akon",
    "annee": 2009,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:2dGxjfhFXDIUX9h5ImyKkE"
  },
  {
    "id": "414",
    "titre": "Right Round",
    "artiste": "Flo Rida, Kesha",
    "annee": 2009,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3GpbwCm3YxiWDvy29Uo3vP"
  },
  {
    "id": "415",
    "titre": "Replay",
    "artiste": "Iyaz",
    "annee": 2009,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4E5P1XyAFtrjpiIxkydly4"
  },
  {
    "id": "416",
    "titre": "Empire State Of Mind",
    "artiste": "JAŸ-Z, Alicia Keys",
    "annee": 2009,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2igwFfvr1OAGX9SKDCPBwO"
  },
  {
    "id": "417",
    "titre": "Run This Town",
    "artiste": "JAŸ-Z, Rihanna, Kanye West",
    "annee": 2009,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:7LR85XLWw2yXqKBSI5brbG"
  },
  {
    "id": "418",
    "titre": "TiK ToK",
    "artiste": "Kesha",
    "annee": 2009,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0HPD5WQqrq7wPWR7P7Dw1i"
  },
  {
    "id": "419",
    "titre": "Bad Romance",
    "artiste": "Lady Gaga",
    "annee": 2009,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0SiywuOBRcynK0uKGWdCnn"
  },
  {
    "id": "420",
    "titre": "Party In The U.S.A.",
    "artiste": "Miley Cyrus",
    "annee": 2009,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3E7dfMvvCLUddWissuqMwr"
  },
  {
    "id": "421",
    "titre": "Secrets",
    "artiste": "OneRepublic",
    "annee": 2009,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0tgnTzjIkj8mVVEh0SNH0t"
  },
  {
    "id": "422",
    "titre": "I Know You Want Me (Calle Ocho)",
    "artiste": "Pitbull",
    "annee": 2009,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:5RzFJd6W40SDTyZkX6xx45"
  },
  {
    "id": "423",
    "titre": "Alors on danse",
    "artiste": "Stromae",
    "annee": 2009,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:6uFreJoeTZVC7MgC7B6rF1"
  },
  {
    "id": "424",
    "titre": "Rolling in the Deep",
    "artiste": "Adele",
    "annee": 2010,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1c8gk2PeTE04A1pIDH9YMk"
  },
  {
    "id": "425",
    "titre": "Danza Kuduro",
    "artiste": "Don Omar, Lucenzo",
    "annee": 2010,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2a1o6ZejUi8U3wzzOtCOYw"
  },
  {
    "id": "426",
    "titre": "Love The Way You Lie",
    "artiste": "Eminem, Rihanna",
    "annee": 2010,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:15JINEqzVMv3SvJTAXAKED"
  },
  {
    "id": "427",
    "titre": "Club Can't Handle Me (feat. David Guetta)",
    "artiste": "Flo Rida, David Guetta",
    "annee": 2010,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:6ebkx7Q5tTxrCxKq4GYj0Y"
  },
  {
    "id": "428",
    "titre": "Pumped Up Kicks",
    "artiste": "Foster The People",
    "annee": 2010,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7w87IxuO7BDcJ3YUqCyMTT"
  },
  {
    "id": "429",
    "titre": "Baby",
    "artiste": "Justin Bieber, Ludacris",
    "annee": 2010,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6epn3r7S14KUqlReYr77hA"
  },
  {
    "id": "430",
    "titre": "Runaway",
    "artiste": "Kanye West, Pusha T",
    "annee": 2010,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3DK6m7It6Pw857FcQftMds"
  },
  {
    "id": "431",
    "titre": "Firework",
    "artiste": "Katy Perry",
    "annee": 2010,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3lXbHd0EoryoQh3vpevNEP"
  },
  {
    "id": "432",
    "titre": "California Gurls",
    "artiste": "Katy Perry, Snoop Dogg",
    "annee": 2010,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1GhbQDYGEOjyFwfT8lojcx"
  },
  {
    "id": "433",
    "titre": "Your Love Is My Drug",
    "artiste": "Kesha",
    "annee": 2010,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6vc2Jq2vaGu8z326kSrw92"
  },
  {
    "id": "434",
    "titre": "Sure Thing",
    "artiste": "Miguel",
    "annee": 2010,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:0JXXNGljqupsJaZsgSbMZV"
  },
  {
    "id": "435",
    "titre": "Oui mais... Non",
    "artiste": "Mylène Farmer",
    "annee": 2010,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:48vSXB9BiHEoYET5cnlX4F"
  },
  {
    "id": "436",
    "titre": "Only Girl (In The World)",
    "artiste": "Rihanna",
    "annee": 2010,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:2ENexcMEMsYk0rVJigVD3i"
  },
  {
    "id": "437",
    "titre": "Casquette à l'envers",
    "artiste": "Sexion d'Assaut",
    "annee": 2010,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:2x1n4oRYr2Ug6XfeOeO6Fl"
  },
  {
    "id": "438",
    "titre": "Désolé",
    "artiste": "Sexion d'Assaut",
    "annee": 2010,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:5NsOnvpjvH9sCz8TyVOmOz"
  },
  {
    "id": "439",
    "titre": "DJ Got Us Fallin' In Love (feat. Pitbull)",
    "artiste": "USHER, Pitbull",
    "annee": 2010,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:4356Typ82hUiFAynbLYbPn"
  },
  {
    "id": "440",
    "titre": "OMG (feat. will.i.am)",
    "artiste": "USHER, will.i.am",
    "annee": 2010,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:1bM50INir8voAkVoKuvEUI"
  },
  {
    "id": "441",
    "titre": "Éblouie par la nuit",
    "artiste": "Zaz",
    "annee": 2010,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:5IpgXFFwZP20UeG7JXg5SP"
  },
  {
    "id": "442",
    "titre": "Je veux",
    "artiste": "Zaz",
    "annee": 2010,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:734dz1YaFITwawPpM25fSt"
  },
  {
    "id": "443",
    "titre": "Les passants",
    "artiste": "Zaz",
    "annee": 2010,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:6x53YxdtkR2rGLptZCLgUx"
  },
  {
    "id": "444",
    "titre": "Someone Like You",
    "artiste": "Adele",
    "annee": 2011,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3bNv3VuUOKgrf5hu3YcuRo"
  },
  {
    "id": "445",
    "titre": "Feel So Close",
    "artiste": "Calvin Harris",
    "annee": 2011,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:1gihuPhrLraKYrJMAEONyc"
  },
  {
    "id": "446",
    "titre": "Titanium (feat. Sia)",
    "artiste": "David Guetta, Sia",
    "annee": 2011,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:0TDLuuLlV54CkRRUOahJb4"
  },
  {
    "id": "447",
    "titre": "Somebody That I Used to Know",
    "artiste": "Gotye",
    "annee": 2011,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4wCmqSrbyCgxEXROQE6vtV"
  },
  {
    "id": "448",
    "titre": "Stereo Hearts (feat. Adam Levine)",
    "artiste": "Gym Class Heroes, Adam Levine",
    "annee": 2011,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0qOnSQQF0yzuPWsXrQ9paz"
  },
  {
    "id": "449",
    "titre": "Ni**as In Paris",
    "artiste": "JAŸ-Z, Kanye West",
    "annee": 2011,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:1auxYwYrFRqZP7t3s7w4um"
  },
  {
    "id": "450",
    "titre": "On The Floor",
    "artiste": "Jennifer Lopez, Pitbull",
    "annee": 2011,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3C0nOe05EIt1390bVABLyN"
  },
  {
    "id": "451",
    "titre": "Video Games",
    "artiste": "Lana Del Rey",
    "annee": 2011,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:33HucJaMg7OBQLqmaVx58p"
  },
  {
    "id": "452",
    "titre": "What Makes You Beautiful",
    "artiste": "One Direction",
    "annee": 2011,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4cluDES4hQEUhmXj6TXkSo"
  },
  {
    "id": "453",
    "titre": "Give Me Everything (feat. Nayer)",
    "artiste": "Pitbull, AFROJACK, Ne-Yo, Nayer",
    "annee": 2011,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:4QNpBfC0zvjKqPJcyqBy9W"
  },
  {
    "id": "454",
    "titre": "We Found Love",
    "artiste": "Rihanna, Calvin Harris",
    "annee": 2011,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:0U10zFw4GlBacOy9VDGfGL"
  },
  {
    "id": "455",
    "titre": "Skyfall",
    "artiste": "Adele",
    "annee": 2012,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6VObnIkLVruX4UVyxWhlqm"
  },
  {
    "id": "456",
    "titre": "Call Me Maybe",
    "artiste": "Carly Rae Jepsen",
    "annee": 2012,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:20I6sIOMTCkB6w7ryavxtO"
  },
  {
    "id": "457",
    "titre": "Latch",
    "artiste": "Disclosure, Sam Smith",
    "annee": 2012,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:51ODNNDZm21HU7wI7cccRr"
  },
  {
    "id": "458",
    "titre": "Whistle",
    "artiste": "Flo Rida",
    "annee": 2012,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3bC1ahPIYt1btJzSSEyyrF"
  },
  {
    "id": "459",
    "titre": "Demons",
    "artiste": "Imagine Dragons",
    "annee": 2012,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5qaEfEh1AtSdrdrByCP7qR"
  },
  {
    "id": "460",
    "titre": "Radioactive",
    "artiste": "Imagine Dragons",
    "annee": 2012,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:62yJjFtgkhUrXktIoSjgP2"
  },
  {
    "id": "461",
    "titre": "Die Young",
    "artiste": "Kesha",
    "annee": 2012,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7EQGXaVSyEDsCWKmUcfpLk"
  },
  {
    "id": "462",
    "titre": "Summertime Sadness",
    "artiste": "Lana Del Rey",
    "annee": 2012,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1FEiijYPJtyswChfcpv3p0"
  },
  {
    "id": "463",
    "titre": "Payphone",
    "artiste": "Maroon 5, Wiz Khalifa",
    "annee": 2012,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1XGmzt0PVuFgQYYnV2It7A"
  },
  {
    "id": "464",
    "titre": "Adorn",
    "artiste": "Miguel",
    "annee": 2012,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:5hJFhO9dvhJoDvUZZ9iWSw"
  },
  {
    "id": "465",
    "titre": "Good Time",
    "artiste": "Owl City, Carly Rae Jepsen",
    "annee": 2012,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1kPpge9JDLpcj15qgrPbYX"
  },
  {
    "id": "466",
    "titre": "Avant qu'elle parte",
    "artiste": "Sexion d'Assaut",
    "annee": 2012,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:53J0MZswXsuJfgG6kR3m32"
  },
  {
    "id": "467",
    "titre": "Ma direction",
    "artiste": "Sexion d'Assaut",
    "annee": 2012,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:6tFJdAZGXGsHTdMKmc1NjR"
  },
  {
    "id": "468",
    "titre": "Don't You Worry Child",
    "artiste": "Swedish House Mafia, John Martin",
    "annee": 2012,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:2V65y3PX4DkRhy1djlxd9p"
  },
  {
    "id": "469",
    "titre": "Another Love",
    "artiste": "Tom Odell",
    "annee": 2012,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3JvKfv6T31zO0ini8iNItO"
  },
  {
    "id": "470",
    "titre": "Do I Wanna Know?",
    "artiste": "Arctic Monkeys",
    "annee": 2013,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5FVd6KXrgO9B3JPmC8OPst"
  },
  {
    "id": "471",
    "titre": "Addicted To You",
    "artiste": "Avicii",
    "annee": 2013,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:4eDYMhIin1pSLIG96f1aD0"
  },
  {
    "id": "472",
    "titre": "Wake Me Up",
    "artiste": "Avicii",
    "annee": 2013,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:0nrRP2bk19rLc0orkWPQk2"
  },
  {
    "id": "473",
    "titre": "Get Lucky",
    "artiste": "Daft Punk, Pharrell Williams, Nile Rodgers",
    "annee": 2013,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:2Foc5Q5nqNiosCNqttzHof"
  },
  {
    "id": "474",
    "titre": "Heart Attack",
    "artiste": "Demi Lovato",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1V6gIisPpYqgFeWbMLI0bA"
  },
  {
    "id": "475",
    "titre": "Take Me To Church",
    "artiste": "Hozier",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3dYD57lRAUcMHufyqn9GcI"
  },
  {
    "id": "476",
    "titre": "Dernière danse",
    "artiste": "Indila",
    "annee": 2013,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:65uoaqX5qcjXZRheAj1qQT"
  },
  {
    "id": "477",
    "titre": "All of Me",
    "artiste": "John Legend",
    "annee": 2013,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3U4isOIWM3VvDubwSI3y7a"
  },
  {
    "id": "478",
    "titre": "Dark Horse",
    "artiste": "Katy Perry, Juicy J",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4jbmgIyjGoXjY01XxatOx6"
  },
  {
    "id": "479",
    "titre": "Young And Beautiful",
    "artiste": "Lana Del Rey",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2nMeu6UenVvwUktBCpLMK9"
  },
  {
    "id": "480",
    "titre": "Rude",
    "artiste": "MAGIC!",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6RtPijgfPKROxEzTHNRiDp"
  },
  {
    "id": "481",
    "titre": "Bella",
    "artiste": "Maître Gims",
    "annee": 2013,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:1vELwZM3uBYWd8HrtddD4l"
  },
  {
    "id": "482",
    "titre": "La La La",
    "artiste": "Naughty Boy, Sam Smith",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3wPPWcVuinAU7dXcJXtCID"
  },
  {
    "id": "483",
    "titre": "Story of My Life",
    "artiste": "One Direction",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4nVBt6MZDDP6tRVdQTgxJg"
  },
  {
    "id": "484",
    "titre": "Counting Stars",
    "artiste": "OneRepublic",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2tpWsVSb9UEmDRxAl1zhX1"
  },
  {
    "id": "485",
    "titre": "Happy",
    "artiste": "Pharrell Williams",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:60nZcImufyMA1MKQY3dcCH"
  },
  {
    "id": "486",
    "titre": "Timber",
    "artiste": "Pitbull, Kesha",
    "annee": 2013,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3cHyrEgdyYRjgJKSOiOtcS"
  },
  {
    "id": "487",
    "titre": "Formidable",
    "artiste": "Stromae",
    "annee": 2013,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:2AMysGXOe0zzZJMtH3Nizb"
  },
  {
    "id": "488",
    "titre": "Papaoutai",
    "artiste": "Stromae",
    "annee": 2013,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:34dx8DACTJsc3rsJdaEIQw"
  },
  {
    "id": "489",
    "titre": "Tous les mêmes",
    "artiste": "Stromae",
    "annee": 2013,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:6M4nkEPZMj58acftDRTuKL"
  },
  {
    "id": "490",
    "titre": "Sweater Weather",
    "artiste": "The Neighbourhood",
    "annee": 2013,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2QjOHCTQ1Jl3zawyYOpxh6"
  },
  {
    "id": "491",
    "titre": "On ira",
    "artiste": "Zaz",
    "annee": 2013,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:0O7j6n6xv3XtsqAqZw0nYM"
  },
  {
    "id": "492",
    "titre": "One Last Time",
    "artiste": "Ariana Grande",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7xoUc6faLbCqZO6fQEYprd"
  },
  {
    "id": "493",
    "titre": "Love Me Harder",
    "artiste": "Ariana Grande, The Weeknd",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5J4ZkQpzMUFojo1CtAZYpn"
  },
  {
    "id": "494",
    "titre": "Break Free",
    "artiste": "Ariana Grande, Zedd",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:12KUFSHFgT0XCoiSlvdQi4"
  },
  {
    "id": "495",
    "titre": "The Nights",
    "artiste": "Avicii",
    "annee": 2014,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:0ct6r3EGTcMLPtrXHDvVjc"
  },
  {
    "id": "496",
    "titre": "Summer",
    "artiste": "Calvin Harris",
    "annee": 2014,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:6YUTL4dYpB9xZO5qExPf05"
  },
  {
    "id": "497",
    "titre": "Outside (feat. Ellie Goulding)",
    "artiste": "Calvin Harris, Ellie Goulding",
    "annee": 2014,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:7MmG8p0F9N3C4AXdK6o6Eb"
  },
  {
    "id": "498",
    "titre": "A Sky Full of Stars",
    "artiste": "Coldplay",
    "annee": 2014,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0FDzzruyVECATHXKHFs9eJ"
  },
  {
    "id": "499",
    "titre": "Photograph",
    "artiste": "Ed Sheeran",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1HNkqx9Ahdgi1Ixy2xkKkL"
  },
  {
    "id": "500",
    "titre": "Thinking out Loud",
    "artiste": "Ed Sheeran",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:34gCuhDGsG4bRPIf9bb02f"
  },
  {
    "id": "501",
    "titre": "Love Story",
    "artiste": "Indila",
    "annee": 2014,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:6nGeLlakfzlBcFdZXteDq7"
  },
  {
    "id": "502",
    "titre": "S.O.S",
    "artiste": "Indila",
    "annee": 2014,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:7FE0ThVWVTIHYKv14xlMVr"
  },
  {
    "id": "503",
    "titre": "Tourner Dans Le Vide",
    "artiste": "Indila",
    "annee": 2014,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:1MqzIgGsHP4cNjPboevsfq"
  },
  {
    "id": "504",
    "titre": "No Role Modelz",
    "artiste": "J. Cole",
    "annee": 2014,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:68Dni7IE4VyPkTOH9mRWHr"
  },
  {
    "id": "505",
    "titre": "Uptown Funk",
    "artiste": "Mark Ronson feat. Bruno Mars",
    "annee": 2014,
    "origine": "international",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:32OlwWuMpZ6b0aN2RZOeMS"
  },
  {
    "id": "506",
    "titre": "Night Changes",
    "artiste": "One Direction",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5O2P9iiztwhomNh8xkR9lJ"
  },
  {
    "id": "507",
    "titre": "Steal My Girl",
    "artiste": "One Direction",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2Bs4jQEGMycglOfWPBqrVG"
  },
  {
    "id": "508",
    "titre": "Time of Our Lives",
    "artiste": "Pitbull, Ne-Yo",
    "annee": 2014,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2bJvI42r8EF3wxjOuDav4r"
  },
  {
    "id": "509",
    "titre": "I'm Not The Only One",
    "artiste": "Sam Smith",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7795WJLVKJoAyVoOtCWqXN"
  },
  {
    "id": "510",
    "titre": "Stay With Me",
    "artiste": "Sam Smith",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5Nm9ERjJZ5oyfXZTECKmRt"
  },
  {
    "id": "511",
    "titre": "Blank Space",
    "artiste": "Taylor Swift",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1u8c2t2Cy7UBoG4ArRcF5g"
  },
  {
    "id": "512",
    "titre": "Shake It Off",
    "artiste": "Taylor Swift",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0cqRj7pUJDkTCEsJkx8snD"
  },
  {
    "id": "513",
    "titre": "Shut Up and Dance",
    "artiste": "WALK THE MOON",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4kbj5MwxO1bq9wjT5g9HaA"
  },
  {
    "id": "514",
    "titre": "Hello",
    "artiste": "Adele",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1Yk0cQdMLx5RzzFTYwmuld"
  },
  {
    "id": "515",
    "titre": "Waiting For Love",
    "artiste": "Avicii",
    "annee": 2015,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:2P4OICZRVAQcYAV2JReRfj"
  },
  {
    "id": "516",
    "titre": "How Deep Is Your Love",
    "artiste": "Calvin Harris, Disciples",
    "annee": 2015,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:4slBllHFZYlpg3IjeX5CBl"
  },
  {
    "id": "517",
    "titre": "I Really Like You",
    "artiste": "Carly Rae Jepsen",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1mKXfxIOA7eQQJ844OFm7L"
  },
  {
    "id": "518",
    "titre": "Cool for the Summer",
    "artiste": "Demi Lovato",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3uwnnTQcHM1rDqSfA4gQNz"
  },
  {
    "id": "519",
    "titre": "Cake By The Ocean",
    "artiste": "DNCE",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:76hfruVvmfQbw0eYn1nmeC"
  },
  {
    "id": "520",
    "titre": "Est-ce que tu m'aimes ?",
    "artiste": "GIMS",
    "annee": 2015,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:3a9TMd2Yrza6HXqqlfMtfy"
  },
  {
    "id": "521",
    "titre": "Love Yourself",
    "artiste": "Justin Bieber",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:50kpGaPAhYJ3sGmk6vplg0"
  },
  {
    "id": "522",
    "titre": "Sorry",
    "artiste": "Justin Bieber",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:09CtPGIpYB4BrO8qb1RGsF"
  },
  {
    "id": "523",
    "titre": "What Do You Mean?",
    "artiste": "Justin Bieber",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4B0JvthVoAAuygILe3n4Bs"
  },
  {
    "id": "524",
    "titre": "Cheerleader (Felix Jaehn Remix)",
    "artiste": "OMI, felix jaehn",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7vFoFDWqTX0mHzLfrF1Cfy"
  },
  {
    "id": "525",
    "titre": "Let It Happen",
    "artiste": "Tame Impala",
    "annee": 2015,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2X485T9Z5Ly0xyaghN73ed"
  },
  {
    "id": "526",
    "titre": "The Less I Know The Better",
    "artiste": "Tame Impala",
    "annee": 2015,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6K4t31amVTZDgR3sKmwUJJ"
  },
  {
    "id": "527",
    "titre": "Daddy Issues",
    "artiste": "The Neighbourhood",
    "annee": 2015,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5E30LdtzQTGqRvNd7l6kG5"
  },
  {
    "id": "528",
    "titre": "Can't Feel My Face",
    "artiste": "The Weeknd",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:22VdIZQfgXJea34mQxlt81"
  },
  {
    "id": "529",
    "titre": "The Hills",
    "artiste": "The Weeknd",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7fBv7CLKzipRk6EC6TWHOB"
  },
  {
    "id": "530",
    "titre": "Ride",
    "artiste": "Twenty One Pilots",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2Z8WuEywRWYTKe1NybPQEW"
  },
  {
    "id": "531",
    "titre": "Stressed Out",
    "artiste": "Twenty One Pilots",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3CRDbSIZ4r5MsZ0YwxuEkn"
  },
  {
    "id": "532",
    "titre": "Wait a Minute!",
    "artiste": "WILLOW",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0y60itmpH0aPKsFiGxmtnh"
  },
  {
    "id": "533",
    "titre": "See You Again (feat. Charlie Puth)",
    "artiste": "Wiz Khalifa, Charlie Puth",
    "annee": 2015,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2JzZzZUQj3Qff7wapcbKjc"
  },
  {
    "id": "534",
    "titre": "Into You",
    "artiste": "Ariana Grande",
    "annee": 2016,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:76FZM38RC8XaAjJ77CVTNe"
  },
  {
    "id": "535",
    "titre": "24K Magic",
    "artiste": "Bruno Mars",
    "annee": 2016,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6b8Be6ljOzmkOmFslEb23P"
  },
  {
    "id": "536",
    "titre": "This Is What You Came For",
    "artiste": "Calvin Harris, Rihanna",
    "annee": 2016,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:2vlDrKpOC0eSTqTDRcbYyw"
  },
  {
    "id": "537",
    "titre": "One Dance",
    "artiste": "Drake, Wizkid, Kyla",
    "annee": 2016,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:1zi7xx7UVEFkmKfv06H8x0"
  },
  {
    "id": "538",
    "titre": "Pink + White",
    "artiste": "Frank Ocean",
    "annee": 2016,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3xKsf9qdS1CyvXSMEid6g8"
  },
  {
    "id": "539",
    "titre": "I Took A Pill In Ibiza - Seeb Remix",
    "artiste": "Mike Posner, Seeb",
    "annee": 2016,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0vbtURX4qv1l7besfwmnD8"
  },
  {
    "id": "540",
    "titre": "Congratulations",
    "artiste": "Post Malone, Quavo",
    "annee": 2016,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3a1lNhkSLSkpJE4MSHpDu9"
  },
  {
    "id": "541",
    "titre": "Love On The Brain",
    "artiste": "Rihanna",
    "annee": 2016,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:5oO3drDxtziYU2H1X23ZIp"
  },
  {
    "id": "542",
    "titre": "No Lie",
    "artiste": "Sean Paul, Dua Lipa",
    "annee": 2016,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:48QmG1dfvMuYLxMPt7KSRA"
  },
  {
    "id": "543",
    "titre": "Don't Let Me Down",
    "artiste": "The Chainsmokers, Daya",
    "annee": 2016,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:1i1fxkWeaMmKEB4T7zqbzK"
  },
  {
    "id": "544",
    "titre": "Closer",
    "artiste": "The Chainsmokers, Halsey",
    "annee": 2016,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:7BKLCZ1jbUBVqRi2FVlTVw"
  },
  {
    "id": "545",
    "titre": "Starboy",
    "artiste": "The Weeknd, Daft Punk",
    "annee": 2016,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7MXVkk9YMctZqd1Srtv4MB"
  },
  {
    "id": "546",
    "titre": "goosebumps",
    "artiste": "Travis Scott",
    "annee": 2016,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:6gBFPUFcJLzWGx4lenP6h2"
  },
  {
    "id": "547",
    "titre": "Heathens",
    "artiste": "Twenty One Pilots",
    "annee": 2016,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6i0V12jOa3mr6uu4WYhUBr"
  },
  {
    "id": "548",
    "titre": "Comportement",
    "artiste": "Aya Nakamura",
    "annee": 2017,
    "origine": "francais",
    "genre": "rnb",
    "spotify_uri": "spotify:track:2nOZaGwMYt07nXtIeYbEiu"
  },
  {
    "id": "549",
    "titre": "Havana (feat. Young Thug)",
    "artiste": "Camila Cabello, Young Thug",
    "annee": 2017,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1rfofaqEpACxVEHIZBJe6W"
  },
  {
    "id": "550",
    "titre": "Sorry Not Sorry",
    "artiste": "Demi Lovato",
    "annee": 2017,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0yvPEnB032fojLfVluFjUv"
  },
  {
    "id": "551",
    "titre": "Passionfruit",
    "artiste": "Drake",
    "annee": 2017,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:5mCPDVBb16L4XQwDdbRUpz"
  },
  {
    "id": "552",
    "titre": "Castle on the Hill",
    "artiste": "Ed Sheeran",
    "annee": 2017,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6PCUP3dWmTjcTtXY02oFdT"
  },
  {
    "id": "553",
    "titre": "Perfect",
    "artiste": "Ed Sheeran",
    "annee": 2017,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0tgVpDi06FyKpA1z0VMD4v"
  },
  {
    "id": "554",
    "titre": "Shape of You",
    "artiste": "Ed Sheeran",
    "annee": 2017,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7qiZfU4dY1lWllzX7mPBI3"
  },
  {
    "id": "555",
    "titre": "Unforgettable",
    "artiste": "French Montana, Swae Lee",
    "annee": 2017,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3B54sVLJ402zGa6Xm4YGNe"
  },
  {
    "id": "556",
    "titre": "Sign of the Times",
    "artiste": "Harry Styles",
    "annee": 2017,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5Ohxk2dO5COHF1krpoPigN"
  },
  {
    "id": "557",
    "titre": "Believer",
    "artiste": "Imagine Dragons",
    "annee": 2017,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0pqnGHJpmpxLKifKRmU6WP"
  },
  {
    "id": "558",
    "titre": "Thunder",
    "artiste": "Imagine Dragons",
    "annee": 2017,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1zB4vmk8tFRmM9UULNzbLB"
  },
  {
    "id": "559",
    "titre": "HUMBLE.",
    "artiste": "Kendrick Lamar",
    "annee": 2017,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:7KXjTSCq5nL1LoYtL7XAwS"
  },
  {
    "id": "560",
    "titre": "Location",
    "artiste": "Khalid",
    "annee": 2017,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:152lZdxL1OR0ZMW6KquMif"
  },
  {
    "id": "561",
    "titre": "Young Dumb & Broke",
    "artiste": "Khalid",
    "annee": 2017,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:5Z3GHaZ6ec9bsiI5BenrbY"
  },
  {
    "id": "562",
    "titre": "Despacito",
    "artiste": "Luis Fonsi feat. Daddy Yankee",
    "annee": 2017,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6habFhsOp2NvshLv26DqMb"
  },
  {
    "id": "563",
    "titre": "Beggin'",
    "artiste": "Måneskin",
    "annee": 2017,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3Wrjm47oTz2sjIgck11l5e"
  },
  {
    "id": "564",
    "titre": "Silence",
    "artiste": "Marshmello, Khalid",
    "annee": 2017,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:7vGuf3Y35N4wmASOKLUVVU"
  },
  {
    "id": "565",
    "titre": "Little Dark Age",
    "artiste": "MGMT",
    "annee": 2017,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:2Y0iGXY6m6immVb2ktbseM"
  },
  {
    "id": "566",
    "titre": "Feel It Still",
    "artiste": "Portugal. The Man",
    "annee": 2017,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6QgjcU0zLnzq5OrUoSZ3OK"
  },
  {
    "id": "567",
    "titre": "rockstar (feat. 21 Savage)",
    "artiste": "Post Malone, 21 Savage",
    "annee": 2017,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0e7ipj03S05BNilyu5bRzt"
  },
  {
    "id": "568",
    "titre": "Paris",
    "artiste": "The Chainsmokers",
    "annee": 2017,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:72jbDTw1piOOj770jWNeaG"
  },
  {
    "id": "569",
    "titre": "Something Just Like This",
    "artiste": "The Chainsmokers, Coldplay",
    "annee": 2017,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:6RUKPb4LETWmmr3iAEQktW"
  },
  {
    "id": "570",
    "titre": "The Man",
    "artiste": "The Killers",
    "annee": 2017,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5aWhs651KYM26HYM16kRdk"
  },
  {
    "id": "571",
    "titre": "Balance ton quoi",
    "artiste": "Angèle",
    "annee": 2018,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:2jX5c5RFp0A9E1GDsvGxIa"
  },
  {
    "id": "572",
    "titre": "Ta reine",
    "artiste": "Angèle",
    "annee": 2018,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:3iXhLi33EpUfcOwasC8un1"
  },
  {
    "id": "573",
    "titre": "Tout oublier",
    "artiste": "Angèle, Roméo Elvis",
    "annee": 2018,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:06O3hxudc6V0BOuoCFSy71"
  },
  {
    "id": "574",
    "titre": "thank u, next",
    "artiste": "Ariana Grande",
    "annee": 2018,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3e9HZxeyfWwjeyPAMmWSSQ"
  },
  {
    "id": "575",
    "titre": "Copines",
    "artiste": "Aya Nakamura",
    "annee": 2018,
    "origine": "francais",
    "genre": "rnb",
    "spotify_uri": "spotify:track:1Bhm5HNO1cq8olDbBmokyL"
  },
  {
    "id": "576",
    "titre": "Djadja",
    "artiste": "Aya Nakamura",
    "annee": 2018,
    "origine": "francais",
    "genre": "rnb",
    "spotify_uri": "spotify:track:7sKDftgGirHWTVFMtJoDoh"
  },
  {
    "id": "577",
    "titre": "Pookie",
    "artiste": "Aya Nakamura",
    "annee": 2018,
    "origine": "francais",
    "genre": "rnb",
    "spotify_uri": "spotify:track:2QpUWi6VSNOt2WyH5FIeLD"
  },
  {
    "id": "578",
    "titre": "Eastside (with Halsey & Khalid)",
    "artiste": "benny blanco, Halsey, Khalid",
    "annee": 2018,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7FGq80cy8juXBCD2nrqdWU"
  },
  {
    "id": "579",
    "titre": "when the party's over",
    "artiste": "Billie Eilish",
    "annee": 2018,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:43zdsphuZLzwA9k4DJhU0I"
  },
  {
    "id": "580",
    "titre": "lovely (with Khalid)",
    "artiste": "Billie Eilish, Khalid",
    "annee": 2018,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0u2P5u6lvoDfwTYjAADbn4"
  },
  {
    "id": "581",
    "titre": "One Kiss (with Dua Lipa)",
    "artiste": "Calvin Harris, Dua Lipa",
    "annee": 2018,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:76dIZzTdrNO15mGBrU3MHi"
  },
  {
    "id": "582",
    "titre": "Solo (feat. Demi Lovato)",
    "artiste": "Clean Bandit, Demi Lovato",
    "annee": 2018,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:3NuK5xMlSlB6K2Qp16zf3h"
  },
  {
    "id": "583",
    "titre": "All The Stars (with SZA)",
    "artiste": "Kendrick Lamar, SZA",
    "annee": 2018,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3GCdLUSnKSMJhs4Tj6CV3s"
  },
  {
    "id": "584",
    "titre": "Shallow",
    "artiste": "Lady Gaga, Bradley Cooper",
    "annee": 2018,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2VxeLyX666F8uXCJ0dZF8B"
  },
  {
    "id": "585",
    "titre": "Someone You Loved",
    "artiste": "Lewis Capaldi",
    "annee": 2018,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7qEHsqek33rTcFNT9PFqLf"
  },
  {
    "id": "586",
    "titre": "Sunflower",
    "artiste": "Post Malone, Swae Lee",
    "annee": 2018,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0RiRZpuVRbi7oqRdSMwhQY"
  },
  {
    "id": "587",
    "titre": "SICKO MODE",
    "artiste": "Travis Scott",
    "annee": 2018,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2xLMifQCjDGFmkHkpNLD9h"
  },
  {
    "id": "588",
    "titre": "7 rings",
    "artiste": "Ariana Grande",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6ocbgoVGwYJhOv1GgI9NsF"
  },
  {
    "id": "589",
    "titre": "SOS (feat. Aloe Blacc)",
    "artiste": "Avicii, Aloe Blacc",
    "annee": 2019,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:2x0RZdkZcD8QRI53XT4GI5"
  },
  {
    "id": "590",
    "titre": "bad guy",
    "artiste": "Billie Eilish",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2Fxmhks0bxGSBdJ92vM42m"
  },
  {
    "id": "591",
    "titre": "Hola Señorita",
    "artiste": "GIMS, Maluma",
    "annee": 2019,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:5V02xs2x8SvZKmg3WygwiZ"
  },
  {
    "id": "592",
    "titre": "Adore You",
    "artiste": "Harry Styles",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3jjujdWJ72nww5eGnfs2E7"
  },
  {
    "id": "593",
    "titre": "Watermelon Sugar",
    "artiste": "Harry Styles",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6UelLqGlWMcVH1E5c4H7lY"
  },
  {
    "id": "594",
    "titre": "Parle à ta tête",
    "artiste": "Indila",
    "annee": 2019,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:3lTGqzJbMYDHXbqeV8pt7d"
  },
  {
    "id": "595",
    "titre": "MIDDLE CHILD",
    "artiste": "J. Cole",
    "annee": 2019,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2JvzF1RMd7lE3KmFlsyZD8"
  },
  {
    "id": "596",
    "titre": "Before You Go",
    "artiste": "Lewis Capaldi",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2gMXnyrvIjhVBUZwvLZDMP"
  },
  {
    "id": "597",
    "titre": "Circles",
    "artiste": "Post Malone",
    "annee": 2019,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:21jGcNKet2qwijlDFuPiPb"
  },
  {
    "id": "598",
    "titre": "Señorita",
    "artiste": "Shawn Mendes, Camila Cabello",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6v3KW9xbzN5yKLt9YKDYA2"
  },
  {
    "id": "599",
    "titre": "Cruel Summer",
    "artiste": "Taylor Swift",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1BxfuPKGuaTgP7aM0Bbdwr"
  },
  {
    "id": "600",
    "titre": "Lover",
    "artiste": "Taylor Swift",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1dGr1c8CrMLDpV6mPbImSI"
  },
  {
    "id": "601",
    "titre": "Blinding Lights",
    "artiste": "The Weeknd",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0VjIjW4GlUZAMYd2vXMi3b"
  },
  {
    "id": "602",
    "titre": "Jolie nana",
    "artiste": "Aya Nakamura",
    "annee": 2020,
    "origine": "francais",
    "genre": "rnb",
    "spotify_uri": "spotify:track:65RWVU6N81CeH65nu52K1U"
  },
  {
    "id": "603",
    "titre": "Fever",
    "artiste": "Dua Lipa, Angèle",
    "annee": 2020,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3F1P0QzdXtBz0MXy7KIO5w"
  },
  {
    "id": "604",
    "titre": "Nos célébrations",
    "artiste": "Indochine",
    "annee": 2020,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:6h0kUO3LKcYHH1E9yUkL4z"
  },
  {
    "id": "605",
    "titre": "cardigan",
    "artiste": "Taylor Swift",
    "annee": 2020,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4R2kfaDFhslZEMJqAFNpdd"
  },
  {
    "id": "606",
    "titre": "Save Your Tears",
    "artiste": "The Weeknd",
    "annee": 2020,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5QO79kh1waicV47BqGRL3g"
  },
  {
    "id": "607",
    "titre": "Easy On Me",
    "artiste": "Adele",
    "annee": 2021,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:46IZ0fSY2mpAiktS3KOqds"
  },
  {
    "id": "608",
    "titre": "Bruxelles je t’aime",
    "artiste": "Angèle",
    "annee": 2021,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:0iqk44gA8PaId0Fwa6eesN"
  },
  {
    "id": "609",
    "titre": "Happier Than Ever",
    "artiste": "Billie Eilish",
    "annee": 2021,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4RVwu0g32PAqgUiJoXsdF8"
  },
  {
    "id": "610",
    "titre": "Bad Habits",
    "artiste": "Ed Sheeran",
    "annee": 2021,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3rmo8F54jFF8OgYsqTxm5d"
  },
  {
    "id": "611",
    "titre": "Enemy (with JID)",
    "artiste": "Imagine Dragons, JID, Arcane, League of Legends",
    "annee": 2021,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3CIyK1V4JEJkg02E4EJnDl"
  },
  {
    "id": "612",
    "titre": "I WANNA BE YOUR SLAVE",
    "artiste": "Måneskin",
    "annee": 2021,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4pt5fDVTg5GhEvEtlz9dKk"
  },
  {
    "id": "613",
    "titre": "ZITTI E BUONI",
    "artiste": "Måneskin",
    "annee": 2021,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:776AftMmFFAWUIEAb3lHhw"
  },
  {
    "id": "614",
    "titre": "Santé",
    "artiste": "Stromae",
    "annee": 2021,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:3Mcxi78U3lCjt8DMKa6YY4"
  },
  {
    "id": "615",
    "titre": "Moth To A Flame (with The Weeknd)",
    "artiste": "Swedish House Mafia, The Weeknd",
    "annee": 2021,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0VO8gYVDSwM1Qdd2GsMoYK"
  },
  {
    "id": "616",
    "titre": "STAY (with Justin Bieber)",
    "artiste": "The Kid LAROI, Justin Bieber",
    "annee": 2021,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:567e29TDzLwZwfDuEpGTwo"
  },
  {
    "id": "617",
    "titre": "I'm Good (Blue)",
    "artiste": "David Guetta, Bebe Rexha",
    "annee": 2022,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:4uUG5RXrOk84mYEfFvj3cK"
  },
  {
    "id": "618",
    "titre": "As It Was",
    "artiste": "Harry Styles",
    "annee": 2022,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4Dvkj6JhhA12EX05fT7y2e"
  },
  {
    "id": "619",
    "titre": "I Ain't Worried",
    "artiste": "OneRepublic",
    "annee": 2022,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0oF9jpn0n8afMpbHKgRd6J"
  },
  {
    "id": "620",
    "titre": "Unholy (feat. Kim Petras)",
    "artiste": "Sam Smith, Kim Petras",
    "annee": 2022,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0NZPBYD5qbEWRs3PrGiRkT"
  },
  {
    "id": "621",
    "titre": "What Was I Made For?",
    "artiste": "Billie Eilish",
    "annee": 2023,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6wf7Yu7cxBSPrRlWeSeK0Q"
  },
  {
    "id": "622",
    "titre": "Ma Meilleure Ennemie",
    "artiste": "Arcane, Stromae, Pomme",
    "annee": 2024,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:3pid9SdBo28hjELHNT6B8N"
  },
  {
    "id": "623",
    "titre": "TEXAS HOLD 'EM",
    "artiste": "Beyoncé",
    "annee": 2024,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:7wLShogStyDeZvL0a6daN5"
  },
  {
    "id": "624",
    "titre": "Too Sweet",
    "artiste": "Hozier",
    "annee": 2024,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:19XpFsce28aByvCC4g89tJ"
  },
  {
    "id": "625",
    "titre": "Not Like Us",
    "artiste": "Kendrick Lamar",
    "annee": 2024,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:6AI3ezQ4o3HUoP6Dhudph3"
  },
  {
    "id": "626",
    "titre": "Die With A Smile",
    "artiste": "Lady Gaga, Bruno Mars",
    "annee": 2024,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7so0lgd0zP2Sbgs2d7a1SZ"
  },
  {
    "id": "627",
    "titre": "Timeless (feat Playboi Carti)",
    "artiste": "The Weeknd, Playboi Carti",
    "annee": 2024,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0FIDCNYYjNvPVimz5icugS"
  }
];
