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
    "titre": "La foule",
    "artiste": "Édith Piaf",
    "annee": 1957,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:2xZfPZxInlDXDKc6NDts8Z"
  },
  {
    "id": "004",
    "titre": "Milord",
    "artiste": "Édith Piaf",
    "annee": 1959,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:18efeGygYyi4nx3haDMdAa"
  },
  {
    "id": "005",
    "titre": "Put Your Head On My Shoulder",
    "artiste": "Paul Anka",
    "annee": 1959,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2DpJ9T2RVRanZcYFHKOAfA"
  },
  {
    "id": "006",
    "titre": "Non, je ne regrette rien",
    "artiste": "Édith Piaf",
    "annee": 1960,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:3dkIE8P7hvl3tHl9KSb6dA"
  },
  {
    "id": "007",
    "titre": "A Sunday Kind Of Love",
    "artiste": "Etta James",
    "annee": 1960,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:0zGLlXbHlrAyBN1x6sY0rb"
  },
  {
    "id": "008",
    "titre": "Stand By Me",
    "artiste": "Ben E. King",
    "annee": 1961,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:7jmHyHMEqm9MJWiMAneF05"
  },
  {
    "id": "009",
    "titre": "Runaround Sue",
    "artiste": "Dion",
    "annee": 1961,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1DndHckdH9m5rp6gYP086b"
  },
  {
    "id": "010",
    "titre": "Can't Help Falling in Love",
    "artiste": "Elvis Presley",
    "annee": 1961,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:44AyOl4qVkzS48vBsbNXaC"
  },
  {
    "id": "011",
    "titre": "Jump in the Line",
    "artiste": "Harry Belafonte",
    "annee": 1961,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1zW2csx1vVJrKfvDrFQNVt"
  },
  {
    "id": "012",
    "titre": "Hit the Road Jack",
    "artiste": "Ray Charles",
    "annee": 1961,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:2HoqbEOXgbDSLZ5XCePEXt"
  },
  {
    "id": "013",
    "titre": "Blowin' in the Wind",
    "artiste": "Bob Dylan",
    "annee": 1963,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:18GiV1BaXzPVYpp9rmOg0E"
  },
  {
    "id": "014",
    "titre": "Ring of Fire",
    "artiste": "Johnny Cash",
    "annee": 1963,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6YffUZJ2R06kyxyK6onezL"
  },
  {
    "id": "015",
    "titre": "You Don't Own Me",
    "artiste": "Lesley Gore",
    "annee": 1963,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5E1pngWasYW2Y6OjV6WMUs"
  },
  {
    "id": "016",
    "titre": "Surfin' U.S.A.",
    "artiste": "The Beach Boys",
    "annee": 1963,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0wz1LjDb9ZNEYwOmDJ3Q4b"
  },
  {
    "id": "017",
    "titre": "Twist And Shout",
    "artiste": "The Beatles",
    "annee": 1963,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5ZBeML7Lf3FMEVviTyvi8l"
  },
  {
    "id": "018",
    "titre": "Be My Baby",
    "artiste": "The Ronettes",
    "annee": 1963,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:1WN4uNclrDuczTO3bCr8s1"
  },
  {
    "id": "019",
    "titre": "It's In The Kiss (The Shoop Shoop Song)",
    "artiste": "Betty Everett",
    "annee": 1964,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:35hfuechuOqaW31ogdauO7"
  },
  {
    "id": "020",
    "titre": "The Times They Are A-Changin'",
    "artiste": "Bob Dylan",
    "annee": 1964,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:52vA3CYKZqZVdQnzRrdZt6"
  },
  {
    "id": "021",
    "titre": "Walk on By",
    "artiste": "Dionne Warwick",
    "annee": 1964,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3xsOtNxtBW0oTI1OWKAzTm"
  },
  {
    "id": "022",
    "titre": "Oh, Pretty Woman",
    "artiste": "Roy Orbison",
    "annee": 1964,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:48i055G1OT5KxGGftwFxWy"
  },
  {
    "id": "023",
    "titre": "House Of The Rising Sun",
    "artiste": "The Animals",
    "annee": 1964,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:7BY005dacJkbO6EPiOh2wb"
  },
  {
    "id": "024",
    "titre": "Don't Worry Baby",
    "artiste": "The Beach Boys",
    "annee": 1964,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1GLmaPfulP0BrfijohQpN5"
  },
  {
    "id": "025",
    "titre": "I Get Around",
    "artiste": "The Beach Boys",
    "annee": 1964,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3v9xlH6BpmRbqL7hgNJhfT"
  },
  {
    "id": "026",
    "titre": "Under the Boardwalk",
    "artiste": "The Drifters",
    "annee": 1964,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:65jrjEhWfAvysKfnojk1i0"
  },
  {
    "id": "027",
    "titre": "Baby Love",
    "artiste": "The Supremes",
    "annee": 1964,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:5uES1C2NgkdrNHiCwf9jRr"
  },
  {
    "id": "028",
    "titre": "Like a Rolling Stone",
    "artiste": "Bob Dylan",
    "annee": 1965,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3AhXZa8sUQht0UEdBJgpGc"
  },
  {
    "id": "029",
    "titre": "Poupée de cire, poupée de son",
    "artiste": "France Gall",
    "annee": 1965,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:0e3LOEZR3NwbbHFGPYr3uQ"
  },
  {
    "id": "030",
    "titre": "Help!",
    "artiste": "The Beatles",
    "annee": 1965,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:7DD7eSuYSC5xk2ArU62esN"
  },
  {
    "id": "031",
    "titre": "Yesterday",
    "artiste": "The Beatles",
    "annee": 1965,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3BQHpFgAp4l80e1XslIjNI"
  },
  {
    "id": "032",
    "titre": "Do You Believe in Magic?",
    "artiste": "The Lovin' Spoonful",
    "annee": 1965,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1udKn1oNKYQSQ9OmiIWCMu"
  },
  {
    "id": "033",
    "titre": "For What It's Worth",
    "artiste": "Buffalo Springfield",
    "annee": 1966,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1qRA5BS78u3gME0loMl9AA"
  },
  {
    "id": "034",
    "titre": "Strangers In The Night",
    "artiste": "Frank Sinatra",
    "annee": 1966,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:74VR3AkGPhbYXnxcOYa16x"
  },
  {
    "id": "035",
    "titre": "Hold On, I'm Comin'",
    "artiste": "Sam & Dave",
    "annee": 1966,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:6PgVDY8GTkxF3GmhVGPzoB"
  },
  {
    "id": "036",
    "titre": "I'm a Believer",
    "artiste": "The Monkees",
    "annee": 1966,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3G7tRC24Uh09Hmp1KZ7LQ2"
  },
  {
    "id": "037",
    "titre": "You Can't Hurry Love",
    "artiste": "The Supremes",
    "annee": 1966,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:1OppEieGNdItZbE14gLBEv"
  },
  {
    "id": "038",
    "titre": "(You Make Me Feel Like) A Natural Woman",
    "artiste": "Aretha Franklin",
    "annee": 1967,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:5K09WxKdlkroDyEVyOSySy"
  },
  {
    "id": "039",
    "titre": "Respect",
    "artiste": "Aretha Franklin",
    "annee": 1967,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:7s25THrKz86DM225dOYwnr"
  },
  {
    "id": "040",
    "titre": "Comme d'habitude",
    "artiste": "Claude François",
    "annee": 1967,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:11FBMKhiuYT4doKhC4p3i6"
  },
  {
    "id": "041",
    "titre": "Piece of My Heart",
    "artiste": "Erma Franklin",
    "annee": 1967,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:2GbePPrWWSRxcmW6QRSPae"
  },
  {
    "id": "042",
    "titre": "Somethin' Stupid",
    "artiste": "Frank Sinatra, Nancy Sinatra",
    "annee": 1967,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4feXcsElKIVsGwkbnTHAfV"
  },
  {
    "id": "043",
    "titre": "Can't Take My Eyes off You",
    "artiste": "Frankie Valli",
    "annee": 1967,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0bfvHnWWOeU1U5XeKyVLbW"
  },
  {
    "id": "044",
    "titre": "Somebody to Love",
    "artiste": "Jefferson Airplane",
    "annee": 1967,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4uGIJG1jYFonGc4LGp5uQL"
  },
  {
    "id": "045",
    "titre": "White Rabbit",
    "artiste": "Jefferson Airplane",
    "annee": 1967,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4vpeKl0vMGdAXpZiQB2Dtd"
  },
  {
    "id": "046",
    "titre": "Purple Haze",
    "artiste": "Jimi Hendrix",
    "annee": 1967,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0wJoRiX5K5BxlqZTolB2LD"
  },
  {
    "id": "047",
    "titre": "Break on Through (To the Other Side)",
    "artiste": "The Doors",
    "annee": 1967,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6ToM0uwxtPKo9CMpbPGYvM"
  },
  {
    "id": "048",
    "titre": "Light My Fire",
    "artiste": "The Doors",
    "annee": 1967,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5uvosCdMlFdTXhoazkTI5R"
  },
  {
    "id": "049",
    "titre": "People Are Strange",
    "artiste": "The Doors",
    "annee": 1967,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1Jmqubf9kGkWeYQXQKImL5"
  },
  {
    "id": "050",
    "titre": "Daydream Believer",
    "artiste": "The Monkees",
    "annee": 1967,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7uEcCGtM1FBBGIhPozhJjv"
  },
  {
    "id": "051",
    "titre": "Happy Together",
    "artiste": "The Turtles",
    "annee": 1967,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1JO1xLtVc8mWhIoE3YaCL0"
  },
  {
    "id": "052",
    "titre": "I Say a Little Prayer",
    "artiste": "Aretha Franklin",
    "annee": 1968,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3NfxSdJnVdon1axzloJgba"
  },
  {
    "id": "053",
    "titre": "I Started A Joke",
    "artiste": "Bee Gees",
    "annee": 1968,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:36CKza28wMxYdjdzji7ine"
  },
  {
    "id": "054",
    "titre": "White Room",
    "artiste": "Cream",
    "annee": 1968,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3Xls4cNOwy01dtrNXb1inG"
  },
  {
    "id": "055",
    "titre": "Son of a Preacher Man",
    "artiste": "Dusty Springfield",
    "annee": 1968,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:7odHgoLFi3GQ90E9PeraI3"
  },
  {
    "id": "056",
    "titre": "I'd Rather Go Blind",
    "artiste": "Etta James",
    "annee": 1968,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:1kPBT8S2wJFNAyBMnGVZgL"
  },
  {
    "id": "057",
    "titre": "Voodoo Child (Slight Return)",
    "artiste": "Jimi Hendrix",
    "annee": 1968,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2AxCeJ6PSsBYiTckM0HLY7"
  },
  {
    "id": "058",
    "titre": "Siffler sur la colline",
    "artiste": "Joe Dassin",
    "annee": 1968,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:227wPK6nY3h8LSq8FHluYO"
  },
  {
    "id": "059",
    "titre": "I Heard It Through The Grapevine",
    "artiste": "Marvin Gaye",
    "annee": 1968,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:1tqT6DhmsrtQgyCKUwotiw"
  },
  {
    "id": "060",
    "titre": "Mrs. Robinson",
    "artiste": "Simon & Garfunkel",
    "annee": 1968,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0iOZM63lendWRTTeKhZBSC"
  },
  {
    "id": "061",
    "titre": "For Once In My Life",
    "artiste": "Stevie Wonder",
    "annee": 1968,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:4kP69y3GKHi9tXckfgp4bK"
  },
  {
    "id": "062",
    "titre": "Blackbird",
    "artiste": "The Beatles",
    "annee": 1968,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5jgFfDIR6FR0gvlA56Nakr"
  },
  {
    "id": "063",
    "titre": "Hey Jude",
    "artiste": "The Beatles",
    "annee": 1968,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0aym2LBJBk9DAYuHHutrIl"
  },
  {
    "id": "064",
    "titre": "Bad Moon Rising",
    "artiste": "Creedence Clearwater Revival",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:20OFwXhEXf12DzwXmaV7fj"
  },
  {
    "id": "065",
    "titre": "Space Oddity",
    "artiste": "David Bowie",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:72Z17vmmeQKAg8bptWvpVG"
  },
  {
    "id": "066",
    "titre": "Suspicious Minds",
    "artiste": "Elvis Presley",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1H5IfYyIIAlgDX8zguUzns"
  },
  {
    "id": "067",
    "titre": "Les Champs-Élysées",
    "artiste": "Joe Dassin",
    "annee": 1969,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:4VWbPQUPvLes814r6T11Jz"
  },
  {
    "id": "068",
    "titre": "Good Times Bad Times",
    "artiste": "Led Zeppelin",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0QwZfbw26QeUoIy82Z2jYp"
  },
  {
    "id": "069",
    "titre": "Heartbreaker",
    "artiste": "Led Zeppelin",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6WE7jSshLCuVKoCmobVKVf"
  },
  {
    "id": "070",
    "titre": "Whole Lotta Love",
    "artiste": "Led Zeppelin",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0hCB0YR03f6AmQaHbwWDe8"
  },
  {
    "id": "071",
    "titre": "The Boxer",
    "artiste": "Simon & Garfunkel",
    "annee": 1969,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:76TZCvJ8GitQ2FA1q5dKu0"
  },
  {
    "id": "072",
    "titre": "Sugar Sugar",
    "artiste": "The Archies",
    "annee": 1969,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6MTd61g9zq6CB1FnJydjEb"
  },
  {
    "id": "073",
    "titre": "Who's Lovin' You",
    "artiste": "The Jackson 5",
    "annee": 1969,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:6cZrsaNb4Zo9E5KHk7gcz5"
  },
  {
    "id": "074",
    "titre": "Gimme Shelter",
    "artiste": "The Rolling Stones",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6H3kDe7CGoWYBabAeVWGiD"
  },
  {
    "id": "075",
    "titre": "You Can't Always Get What You Want",
    "artiste": "The Rolling Stones",
    "annee": 1969,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6lFZbCc7pn6Lme1NP7qQqQ"
  },
  {
    "id": "076",
    "titre": "Le lundi au soleil",
    "artiste": "Claude François",
    "annee": 1972,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:75HyZlo5ameA4sr8aOjUSU"
  },
  {
    "id": "077",
    "titre": "Salut les amoureux",
    "artiste": "Joe Dassin",
    "annee": 1972,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:2cCtyPE0ZgoW9qWcI8YUvU"
  },
  {
    "id": "078",
    "titre": "Superstition",
    "artiste": "Stevie Wonder",
    "annee": 1972,
    "origine": "international",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:1h2xVEoJORqrg71HocgqXd"
  },
  {
    "id": "079",
    "titre": "Waterloo",
    "artiste": "ABBA",
    "annee": 1974,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3Dy4REq8O09IlgiwuHQ3sk"
  },
  {
    "id": "080",
    "titre": "Le téléphone pleure",
    "artiste": "Claude François, Frédérique",
    "annee": 1974,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:4cAeq0pjjvWxFfy7NL3XSD"
  },
  {
    "id": "081",
    "titre": "La déclaration d'amour",
    "artiste": "France Gall",
    "annee": 1974,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:76SXRuctCDXlL82Mkh5yJm"
  },
  {
    "id": "082",
    "titre": "Never Can Say Goodbye",
    "artiste": "Gloria Gaynor",
    "annee": 1974,
    "origine": "international",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:3b9Cpi8jW9jNoyx72QbfRO"
  },
  {
    "id": "083",
    "titre": "Mamma Mia",
    "artiste": "ABBA",
    "annee": 1975,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2TxCwUlqaOH3TIyJqGgR91"
  },
  {
    "id": "084",
    "titre": "Et si tu n'existais pas",
    "artiste": "Joe Dassin",
    "annee": 1975,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:2LplsM7xv7Cj5ne7pxv5Gn"
  },
  {
    "id": "085",
    "titre": "L'été indien",
    "artiste": "Joe Dassin",
    "annee": 1975,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:1Ggj10R2dFrBj9LjQscvDz"
  },
  {
    "id": "086",
    "titre": "Bohemian Rhapsody",
    "artiste": "Queen",
    "annee": 1975,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:7tFiyTwD0nx5a1eklYtX2J"
  },
  {
    "id": "087",
    "titre": "Dancing Queen",
    "artiste": "ABBA",
    "annee": 1976,
    "origine": "international",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:0GjEhVFGZW8afUYGChu3Rr"
  },
  {
    "id": "088",
    "titre": "Cette année-là",
    "artiste": "Claude François",
    "annee": 1976,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:3R4rbnUNQKpKo588EFOqTl"
  },
  {
    "id": "089",
    "titre": "Allô maman bobo",
    "artiste": "Alain Souchon",
    "annee": 1977,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:6feRXBskplLVuNov74Rep3"
  },
  {
    "id": "090",
    "titre": "Alexandrie Alexandra",
    "artiste": "Claude François",
    "annee": 1977,
    "origine": "francais",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:642v4GjCmdXlnsM4Ohx59B"
  },
  {
    "id": "091",
    "titre": "Magnolias for Ever",
    "artiste": "Claude François",
    "annee": 1977,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:1zcFnMc6ULvzH8npblFGvy"
  },
  {
    "id": "092",
    "titre": "We Will Rock You",
    "artiste": "Queen",
    "annee": 1977,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4pbJqGIASGPr0ZpGpnWkDn"
  },
  {
    "id": "093",
    "titre": "Laisse béton",
    "artiste": "Renaud",
    "annee": 1977,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:3kHDkEajJ4G02y2U6Xf0fm"
  },
  {
    "id": "094",
    "titre": "Le chanteur",
    "artiste": "Daniel Balavoine",
    "annee": 1978,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:0VKxd6VnCZMv5uQCdC7qXf"
  },
  {
    "id": "095",
    "titre": "S.O.S. d'un terrien en détresse",
    "artiste": "Daniel Balavoine, Starmania",
    "annee": 1978,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:329siE2j9wZccmieobfIVh"
  },
  {
    "id": "096",
    "titre": "I Will Survive",
    "artiste": "Gloria Gaynor",
    "annee": 1978,
    "origine": "international",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:7cv28LXcjAC3GsXbUvXKbX"
  },
  {
    "id": "097",
    "titre": "Don't Stop Me Now",
    "artiste": "Queen",
    "annee": 1978,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5T8EDUDqKcs6OSOwEsfqG7"
  },
  {
    "id": "098",
    "titre": "Hold the Line",
    "artiste": "TOTO",
    "annee": 1978,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4aVuWgvD0X63hcOCnZtNFA"
  },
  {
    "id": "099",
    "titre": "Gimme! Gimme! Gimme! (A Man After Midnight)",
    "artiste": "ABBA",
    "annee": 1979,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3vkQ5DAB1qQMYO4Mr9zJN6"
  },
  {
    "id": "100",
    "titre": "Don't Stop 'Til You Get Enough",
    "artiste": "Michael Jackson",
    "annee": 1979,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:46eu3SBuFCXWsPT39Yg3tJ"
  },
  {
    "id": "101",
    "titre": "The Winner Takes It All",
    "artiste": "ABBA",
    "annee": 1980,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3oEkrIfXfSh9zGnE7eBzSV"
  },
  {
    "id": "102",
    "titre": "Il jouait du piano debout",
    "artiste": "France Gall",
    "annee": 1980,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:3GfUHAoOSGy3hhEaTU34WV"
  },
  {
    "id": "103",
    "titre": "Another One Bites The Dust",
    "artiste": "Queen",
    "annee": 1980,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5vdp5UmvTsnMEMESIF2Ym7"
  },
  {
    "id": "104",
    "titre": "Résiste",
    "artiste": "France Gall",
    "annee": 1981,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:51BbACodhBnd9lBs2TI0YT"
  },
  {
    "id": "105",
    "titre": "Under Pressure",
    "artiste": "Queen, David Bowie",
    "annee": 1981,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2fuCquhmrzHpu5xcA1ci9x"
  },
  {
    "id": "106",
    "titre": "Vivre ou survivre",
    "artiste": "Daniel Balavoine",
    "annee": 1982,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:226aaHSePv2kRAiGEmTlsz"
  },
  {
    "id": "107",
    "titre": "L'Aventurier",
    "artiste": "Indochine",
    "annee": 1982,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:2UC5XnHA1Wn9FjQmbjNca9"
  },
  {
    "id": "108",
    "titre": "Comme toi",
    "artiste": "Jean-Jacques Goldman",
    "annee": 1982,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:7i6VLLVRwLSXgqWlvjyyOy"
  },
  {
    "id": "109",
    "titre": "Quand la musique est bonne",
    "artiste": "Jean-Jacques Goldman",
    "annee": 1982,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:0Wh6e5EkmQseBGVeJqzC9X"
  },
  {
    "id": "110",
    "titre": "Beat It",
    "artiste": "Michael Jackson",
    "annee": 1982,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3BovdzfaX4jb5KFQwoPfAw"
  },
  {
    "id": "111",
    "titre": "Billie Jean",
    "artiste": "Michael Jackson",
    "annee": 1982,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5ChkMS8OtdzJeqyybCc9R5"
  },
  {
    "id": "112",
    "titre": "Thriller",
    "artiste": "Michael Jackson",
    "annee": 1982,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2LlQb7Uoj1kKyGhlkBf9aC"
  },
  {
    "id": "113",
    "titre": "Africa",
    "artiste": "Toto",
    "annee": 1982,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2374M0fQpWi3dLnB54qaLX"
  },
  {
    "id": "114",
    "titre": "Rosanna",
    "artiste": "TOTO",
    "annee": 1982,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:37BTh5g05cxBIRYMbw8g2T"
  },
  {
    "id": "115",
    "titre": "Dès que le vent soufflera",
    "artiste": "Renaud",
    "annee": 1983,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:66oUD4UVvC2DsPaKzw8sJy"
  },
  {
    "id": "116",
    "titre": "Envole-moi",
    "artiste": "Jean-Jacques Goldman",
    "annee": 1984,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:0DVC2pMTkDmkoAW3XyIdYe"
  },
  {
    "id": "117",
    "titre": "Marcia Baila",
    "artiste": "Les Rita Mitsouko",
    "annee": 1984,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:43THPstJP6RXLMd7ryXyNf"
  },
  {
    "id": "118",
    "titre": "Material Girl",
    "artiste": "Madonna",
    "annee": 1984,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7bkyXSi4GtVfD7itZRUR3e"
  },
  {
    "id": "119",
    "titre": "Hunting High and Low",
    "artiste": "a-ha",
    "annee": 1985,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5tewIdMVsaJWN19ZnmnPNN"
  },
  {
    "id": "120",
    "titre": "Take On Me",
    "artiste": "a-ha",
    "annee": 1985,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2WfaOiMkCvy7F5fcp2zZ8L"
  },
  {
    "id": "121",
    "titre": "The Sun Always Shines on T.V.",
    "artiste": "a-ha",
    "annee": 1985,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0HoaLXRp7jJtdQFunUyUGc"
  },
  {
    "id": "122",
    "titre": "La ballade de Jim",
    "artiste": "Alain Souchon",
    "annee": 1985,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:4lI8A7xmuQqGDj28dzelH4"
  },
  {
    "id": "123",
    "titre": "L'Aziza",
    "artiste": "Daniel Balavoine",
    "annee": 1985,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:1uFWyT4KLFXisiVkiBPCTb"
  },
  {
    "id": "124",
    "titre": "Tous les cris les S.O.S.",
    "artiste": "Daniel Balavoine",
    "annee": 1985,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:2rkw1gqH62Tc9ydm9jsEJ1"
  },
  {
    "id": "125",
    "titre": "3e sexe",
    "artiste": "Indochine",
    "annee": 1985,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:6MShyf3EUHqQ04kJzovIni"
  },
  {
    "id": "126",
    "titre": "Trois nuits par semaine",
    "artiste": "Indochine",
    "annee": 1985,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:3X9XJLwQPWqRnsNaL9z6ss"
  },
  {
    "id": "127",
    "titre": "Je te donne",
    "artiste": "Jean-Jacques Goldman, Michael Jones",
    "annee": 1985,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:55mXuPsEm6aboDIM68RM74"
  },
  {
    "id": "128",
    "titre": "Miss Maggie",
    "artiste": "Renaud",
    "annee": 1985,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:3mrD89s4Ua9IS3Aw5kxMU7"
  },
  {
    "id": "129",
    "titre": "Mistral gagnant",
    "artiste": "Renaud",
    "annee": 1985,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:1MOSRjdAbUhvLNnHCdUEL5"
  },
  {
    "id": "130",
    "titre": "Voyage voyage",
    "artiste": "Desireless",
    "annee": 1986,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:2d8D7uk3tbAThjRkdfrx9c"
  },
  {
    "id": "131",
    "titre": "Andy",
    "artiste": "Les Rita Mitsouko",
    "annee": 1986,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:1QZ7Co5mBLhAQf9OFk4ovN"
  },
  {
    "id": "132",
    "titre": "C'est comme ça",
    "artiste": "Les Rita Mitsouko",
    "annee": 1986,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:3y9FzflARxBDRuARWGDWmq"
  },
  {
    "id": "133",
    "titre": "Les histoires d'a",
    "artiste": "Les Rita Mitsouko",
    "annee": 1986,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:3mmy0hmZ2xLV7EOdrUA8Ai"
  },
  {
    "id": "134",
    "titre": "La Isla Bonita",
    "artiste": "Madonna",
    "annee": 1986,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0NJdtoQ3RX5ckBjJlNXhlP"
  },
  {
    "id": "135",
    "titre": "Libertine",
    "artiste": "Mylène Farmer",
    "annee": 1986,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:6WjOjG7ujOd4uCv4wQvMjV"
  },
  {
    "id": "136",
    "titre": "Ella, elle l'a",
    "artiste": "France Gall",
    "annee": 1987,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:67CfbIKKTCKFqmQLJwUftX"
  },
  {
    "id": "137",
    "titre": "Paradise City",
    "artiste": "Guns N' Roses",
    "annee": 1987,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6eN1f9KNmiWEhpE2RhQqB5"
  },
  {
    "id": "138",
    "titre": "Sweet Child O' Mine",
    "artiste": "Guns N' Roses",
    "annee": 1987,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:7o2CTH4ctstm8TNelqjb51"
  },
  {
    "id": "139",
    "titre": "Welcome To The Jungle",
    "artiste": "Guns N' Roses",
    "annee": 1987,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0G21yYKMZoHa30cYVi1iA8"
  },
  {
    "id": "140",
    "titre": "Là-bas",
    "artiste": "Jean-Jacques Goldman",
    "annee": 1987,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:6pvfDHdFcjiIDXFxvDI879"
  },
  {
    "id": "141",
    "titre": "Smooth Criminal",
    "artiste": "Michael Jackson",
    "annee": 1987,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5T7ywazdGIydr6JCW6t02j"
  },
  {
    "id": "142",
    "titre": "Sans contrefaçon",
    "artiste": "Mylène Farmer",
    "annee": 1987,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:4lKQlYJdzLPKBc0XEDBdrq"
  },
  {
    "id": "143",
    "titre": "Never Gonna Give You Up",
    "artiste": "Rick Astley",
    "annee": 1987,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4PTG3Z6ehGkBFwjybzWkR8"
  },
  {
    "id": "144",
    "titre": "Together Forever",
    "artiste": "Rick Astley",
    "annee": 1987,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:00isIFJWVpXIQ8HkGICSQp"
  },
  {
    "id": "145",
    "titre": "John",
    "artiste": "Desireless",
    "annee": 1988,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:2qjz6ghwAQa50Gf0QbbrC5"
  },
  {
    "id": "146",
    "titre": "Le petit train",
    "artiste": "Les Rita Mitsouko",
    "annee": 1988,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:4c09RSf8d6djYaA7eULKqJ"
  },
  {
    "id": "147",
    "titre": "Pourvu qu'elles soient douces",
    "artiste": "Mylène Farmer",
    "annee": 1988,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:2gNyCHDGyHrw3lCpT9LqlY"
  },
  {
    "id": "148",
    "titre": "She Wants to Dance with Me",
    "artiste": "Rick Astley",
    "annee": 1988,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0sRaIp06gw4ZOt5VevOKnf"
  },
  {
    "id": "149",
    "titre": "Like a Prayer",
    "artiste": "Madonna",
    "annee": 1989,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:14p4jbULrRxZvnSt4NDSEs"
  },
  {
    "id": "150",
    "titre": "Vogue",
    "artiste": "Madonna",
    "annee": 1990,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7j5TIXPi0cCbSSqItmbyZy"
  },
  {
    "id": "151",
    "titre": "A nos actes manqués",
    "artiste": "Carole Fredericks, Jean-Jacques Goldman, Michael Jones",
    "annee": 1991,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:49l4Fv41jWi2TGCsPmseKY"
  },
  {
    "id": "152",
    "titre": "Knockin' On Heaven's Door",
    "artiste": "Guns N' Roses",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4JiEyzf0Md7KEFFGWDDdCr"
  },
  {
    "id": "153",
    "titre": "November Rain",
    "artiste": "Guns N' Roses",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3YRCqOhFifThpSRFJ1VWFM"
  },
  {
    "id": "154",
    "titre": "Bouge de là",
    "artiste": "MC Solaar",
    "annee": 1991,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:3RpPBJljuDR89pd9Au8JKy"
  },
  {
    "id": "155",
    "titre": "Caroline",
    "artiste": "MC Solaar",
    "annee": 1991,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:7pEn4rOtVY4UdAwDxFR7eH"
  },
  {
    "id": "156",
    "titre": "Désenchantée",
    "artiste": "Mylène Farmer",
    "annee": 1991,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:15XYdD283tK9iyJzL738bn"
  },
  {
    "id": "157",
    "titre": "Come As You Are",
    "artiste": "Nirvana",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2RsAajgo0g7bMCHxwH3Sk0"
  },
  {
    "id": "158",
    "titre": "In Bloom",
    "artiste": "Nirvana",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2mvffzYUJ9Ld9xhsF5DUjU"
  },
  {
    "id": "159",
    "titre": "Lithium",
    "artiste": "Nirvana",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5vHLwhxxlGzmClMcxRRFPr"
  },
  {
    "id": "160",
    "titre": "Smells Like Teen Spirit",
    "artiste": "Nirvana",
    "annee": 1991,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5ghIJDpPoe3CfHMGu71E6T"
  },
  {
    "id": "161",
    "titre": "Foule sentimentale",
    "artiste": "Alain Souchon",
    "annee": 1993,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:2W4ZxAHZAXOf6r65pCskGR"
  },
  {
    "id": "162",
    "titre": "L'amour à la machine",
    "artiste": "Alain Souchon",
    "annee": 1993,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:2qHYEIBD2g14bOT2YkZ2Ye"
  },
  {
    "id": "163",
    "titre": "Life",
    "artiste": "Haddaway",
    "annee": 1993,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:5ep8e1ZbIjtUajhcsskkpb"
  },
  {
    "id": "164",
    "titre": "What Is Love",
    "artiste": "Haddaway",
    "annee": 1993,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:4v6jydWBTAIqnyPVNyOAdc"
  },
  {
    "id": "165",
    "titre": "Je danse le Mia",
    "artiste": "IAM",
    "annee": 1993,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:6HjJ7gNwslUqgfTiqfTP1C"
  },
  {
    "id": "166",
    "titre": "Heart-Shaped Box",
    "artiste": "Nirvana",
    "annee": 1993,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:11LmqTE2naFULdEP94AUBa"
  },
  {
    "id": "167",
    "titre": "Nouveau western",
    "artiste": "MC Solaar",
    "annee": 1994,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:229qdMCBoifrNO40j8wmQb"
  },
  {
    "id": "168",
    "titre": "Supersonic",
    "artiste": "Oasis",
    "annee": 1994,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4jJfa4mO5JjV9Tz2aAxE2M"
  },
  {
    "id": "169",
    "titre": "Whatever",
    "artiste": "Oasis",
    "annee": 1994,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5OWsea313ovaQoXvsgWq79"
  },
  {
    "id": "170",
    "titre": "Champagne Supernova",
    "artiste": "Oasis",
    "annee": 1995,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2A7GGXmTlXuH9LOvBXgOX4"
  },
  {
    "id": "171",
    "titre": "Don't Look Back In Anger",
    "artiste": "Oasis",
    "annee": 1995,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:12dU3vAh6AFoJkisorfoUl"
  },
  {
    "id": "172",
    "titre": "Wonderwall",
    "artiste": "Oasis",
    "annee": 1995,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5wj4E6IsrVtn8IBJQOd0Cl"
  },
  {
    "id": "173",
    "titre": "Around the World",
    "artiste": "Daft Punk",
    "annee": 1997,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:1q4poN5PaGvY1RbEC5gl5s"
  },
  {
    "id": "174",
    "titre": "Demain, c'est loin",
    "artiste": "IAM",
    "annee": 1997,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:0QtKyWOrV5Vhw2n5Yf7LcF"
  },
  {
    "id": "175",
    "titre": "La saga",
    "artiste": "IAM",
    "annee": 1997,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:3mFHyDEPrWnc29OlWUBtPI"
  },
  {
    "id": "176",
    "titre": "Nés sous la même étoile",
    "artiste": "IAM",
    "annee": 1997,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:66ZtqKhYSA8XyPr0aAUFsm"
  },
  {
    "id": "177",
    "titre": "Petit frère",
    "artiste": "IAM",
    "annee": 1997,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:3jqBLwtTiUYismDiZgAgPE"
  },
  {
    "id": "178",
    "titre": "J't'emmène au vent",
    "artiste": "Louise Attaque",
    "annee": 1997,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:0Isvah1AGx9wiRg9eyPQL5"
  },
  {
    "id": "179",
    "titre": "La brune",
    "artiste": "Louise Attaque",
    "annee": 1997,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:7HG8UZcKQMp4YpkBFnXVRY"
  },
  {
    "id": "180",
    "titre": "Léa",
    "artiste": "Louise Attaque",
    "annee": 1997,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:709Vk4ahhCM6ENgRVTTYw6"
  },
  {
    "id": "181",
    "titre": "Ton invitation",
    "artiste": "Louise Attaque",
    "annee": 1997,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:1xsRqL4cvEaOQ5TbXpqaAV"
  },
  {
    "id": "182",
    "titre": "...Baby One More Time",
    "artiste": "Britney Spears",
    "annee": 1998,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3MjUtNVVq3C8Fn0MP3zhXa"
  },
  {
    "id": "183",
    "titre": "La Tribu de Dana",
    "artiste": "Manau",
    "annee": 1998,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:33DMSeRaJpamHQPHNvyYyz"
  },
  {
    "id": "184",
    "titre": "Mais qui est la belette",
    "artiste": "Manau",
    "annee": 1998,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:0h8RQIG9IdeCHXUoaTpZvo"
  },
  {
    "id": "185",
    "titre": "Panique celtique",
    "artiste": "Manau",
    "annee": 1998,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:4xwF64Jel43f1msInIZ9cH"
  },
  {
    "id": "186",
    "titre": "Music Sounds Better with You",
    "artiste": "Stardust",
    "annee": 1998,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:303ccTay2FiDTZ9fZ2AdBt"
  },
  {
    "id": "187",
    "titre": "Californication",
    "artiste": "Red Hot Chili Peppers",
    "annee": 1999,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:48UPSzbZjgc449aqz8bxox"
  },
  {
    "id": "188",
    "titre": "Kryptonite",
    "artiste": "3 Doors Down",
    "annee": 2000,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6ZOBP3NvffbU4SZcrnt1k6"
  },
  {
    "id": "189",
    "titre": "Oops!...I Did It Again",
    "artiste": "Britney Spears",
    "annee": 2000,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6naxalmIoLFWR0siv8dnQQ"
  },
  {
    "id": "190",
    "titre": "Yellow",
    "artiste": "Coldplay",
    "annee": 2000,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3AJwUDP919kvQ9QcozQPxg"
  },
  {
    "id": "191",
    "titre": "One More Time",
    "artiste": "Daft Punk",
    "annee": 2000,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:0DiWol3AO6WpXZgp0goxAV"
  },
  {
    "id": "192",
    "titre": "The Real Slim Shady",
    "artiste": "Eminem",
    "annee": 2000,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3yfqSUWxFvZELEM4PmlwIR"
  },
  {
    "id": "193",
    "titre": "In the End",
    "artiste": "Linkin Park",
    "annee": 2000,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:60a0Rd6pjrkxjPbaKzXjfq"
  },
  {
    "id": "194",
    "titre": "Tu dis rien",
    "artiste": "Louise Attaque",
    "annee": 2000,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:74yAfFHs424ILg0fwr3H2i"
  },
  {
    "id": "195",
    "titre": "Lady (Hear Me Tonight)",
    "artiste": "Modjo",
    "annee": 2000,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:7HHYgMJYAtMkQn50wmXOIN"
  },
  {
    "id": "196",
    "titre": "B.O.B. (Bombs Over Baghdad)",
    "artiste": "Outkast",
    "annee": 2000,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3WibbMr6canxRJXhNtAvLU"
  },
  {
    "id": "197",
    "titre": "Ms. Jackson",
    "artiste": "Outkast",
    "annee": 2000,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0I3q5fE6wg7LIfHGngUTnV"
  },
  {
    "id": "198",
    "titre": "It Wasn't Me",
    "artiste": "Shaggy, Rik Rok",
    "annee": 2000,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3WkibOpDF7cQ5xntM1epyf"
  },
  {
    "id": "199",
    "titre": "Teenage Dirtbag",
    "artiste": "Wheatus",
    "annee": 2000,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:25FTMokYEbEWHEdss5JLZS"
  },
  {
    "id": "200",
    "titre": "Ces soirées-là",
    "artiste": "Yannick",
    "annee": 2000,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:27lq4sDEt6OQMNWiBGSuLT"
  },
  {
    "id": "201",
    "titre": "Lady Marmalade",
    "artiste": "Christina Aguilera, Lil' Kim, Mýa, P!nk",
    "annee": 2001,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7GbqE3MlkKosIaCvf50JRK"
  },
  {
    "id": "202",
    "titre": "One Last Breath",
    "artiste": "Creed",
    "annee": 2001,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:42T2QQv3xgBlpQxaSP7lnK"
  },
  {
    "id": "203",
    "titre": "Digital Love",
    "artiste": "Daft Punk",
    "annee": 2001,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:2VEZx7NWsZ1D0eJ4uv5Fym"
  },
  {
    "id": "204",
    "titre": "Harder, Better, Faster, Stronger",
    "artiste": "Daft Punk",
    "annee": 2001,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:5W3cjX2J3tjhG8zb6u0qHn"
  },
  {
    "id": "205",
    "titre": "Can't Get You out of My Head",
    "artiste": "Kylie Minogue",
    "annee": 2001,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3E7ZwUMJFqpsDOJzEkBrQ7"
  },
  {
    "id": "206",
    "titre": "Family Affair",
    "artiste": "Mary J. Blige",
    "annee": 2001,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3aw9iWUQ3VrPQltgwvN9Xu"
  },
  {
    "id": "207",
    "titre": "La belle et le bad boy",
    "artiste": "MC Solaar",
    "annee": 2001,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:4xVLwCjKY9FzseFCRwv51D"
  },
  {
    "id": "208",
    "titre": "Solaar pleure",
    "artiste": "MC Solaar",
    "annee": 2001,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:4IFd5gfOwvN8KEkRdJr0yn"
  },
  {
    "id": "209",
    "titre": "How You Remind Me",
    "artiste": "Nickelback",
    "annee": 2001,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0gmbgwZ8iqyMPmXefof8Yf"
  },
  {
    "id": "210",
    "titre": "Island In The Sun",
    "artiste": "Weezer",
    "annee": 2001,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2MLHyLy5z5l5YRp7momlgw"
  },
  {
    "id": "211",
    "titre": "Sk8er Boi",
    "artiste": "Avril Lavigne",
    "annee": 2002,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:00Mb3DuaIH1kjrwOku9CGU"
  },
  {
    "id": "212",
    "titre": "The Scientist",
    "artiste": "Coldplay",
    "annee": 2002,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:75JFxkI2RXiU7L9VXzMkle"
  },
  {
    "id": "213",
    "titre": "Lose Yourself",
    "artiste": "Eminem",
    "annee": 2002,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:7MJQ9Nfxzh8LPZ9e9u68Fq"
  },
  {
    "id": "214",
    "titre": "Without Me",
    "artiste": "Eminem",
    "annee": 2002,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:7lQ8MOhq6IN2w8EYcFNSUk"
  },
  {
    "id": "215",
    "titre": "J'ai demandé à la lune",
    "artiste": "Indochine",
    "annee": 2002,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:2QSAj76Ba6aMFX9RlXdUdO"
  },
  {
    "id": "216",
    "titre": "Rock Your Body",
    "artiste": "Justin Timberlake",
    "annee": 2002,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:1AWQoqb9bSvzTjaLralEkT"
  },
  {
    "id": "217",
    "titre": "Dilemma",
    "artiste": "Nelly, Kelly Rowland",
    "annee": 2002,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0ARK753YaiJbpLUk7z5yIM"
  },
  {
    "id": "218",
    "titre": "Can't Stop",
    "artiste": "Red Hot Chili Peppers",
    "annee": 2002,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3ZOEytgrvLwQaqXreDs2Jx"
  },
  {
    "id": "219",
    "titre": "Manhattan-Kaboul",
    "artiste": "Renaud, Axelle Red",
    "annee": 2002,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:7eJdx83TiKsVqAzLFBelMO"
  },
  {
    "id": "220",
    "titre": "In Da Club",
    "artiste": "50 Cent",
    "annee": 2003,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:7iL6o9tox1zgHpKUfh9vuC"
  },
  {
    "id": "221",
    "titre": "P.I.M.P.",
    "artiste": "50 Cent",
    "annee": 2003,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3G0yz3DZn3lfraledmBCT0"
  },
  {
    "id": "222",
    "titre": "21 Questions",
    "artiste": "50 Cent, Nate Dogg",
    "annee": 2003,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:70FCugJxa7XW04Np6iYJdI"
  },
  {
    "id": "223",
    "titre": "If I Ain't Got You",
    "artiste": "Alicia Keys",
    "annee": 2003,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3XVBdLihbNbxUwZosxcGuJ"
  },
  {
    "id": "224",
    "titre": "Crazy In Love",
    "artiste": "Beyoncé",
    "annee": 2003,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:5IVuqXILoxVWvWEPm82Jxr"
  },
  {
    "id": "225",
    "titre": "Where Is The Love?",
    "artiste": "Black Eyed Peas",
    "annee": 2003,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0xmjwnQ3FNE6HuWCt2nHdZ"
  },
  {
    "id": "226",
    "titre": "Toxic",
    "artiste": "Britney Spears",
    "annee": 2003,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6I9VzXrHxO9rA9A5euc8Ak"
  },
  {
    "id": "227",
    "titre": "DJ",
    "artiste": "Diam's",
    "annee": 2003,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:4D0dgZLZWkaWG25NBuxOfS"
  },
  {
    "id": "228",
    "titre": "Bring Me To Life",
    "artiste": "Evanescence",
    "annee": 2003,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0COqiPhxzoWICwFCS4eZcp"
  },
  {
    "id": "229",
    "titre": "Numb",
    "artiste": "Linkin Park",
    "annee": 2003,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:2nLtzopw4rPReszdYBJU6h"
  },
  {
    "id": "230",
    "titre": "Hey Ya!",
    "artiste": "OutKast",
    "annee": 2003,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2PpruBYCo4H7WOBJ7Q2EwM"
  },
  {
    "id": "231",
    "titre": "Roses",
    "artiste": "Outkast",
    "annee": 2003,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:6bUNEbXT7HovLW6BgPCBsb"
  },
  {
    "id": "232",
    "titre": "The Way You Move (feat. Sleepy Brown)",
    "artiste": "Outkast, Sleepy Brown",
    "annee": 2003,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:5z7mYFfhw6N6f23VwrokJD"
  },
  {
    "id": "233",
    "titre": "Mockingbird",
    "artiste": "Eminem",
    "annee": 2004,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:561jH07mF1jHuk7KlaeF0s"
  },
  {
    "id": "234",
    "titre": "Take Me Out",
    "artiste": "Franz Ferdinand",
    "annee": 2004,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:20I8RduZC2PWMWTDCZuuAN"
  },
  {
    "id": "235",
    "titre": "All Falls Down",
    "artiste": "Kanye West, Syleena Johnson",
    "annee": 2004,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:5SkRLpaGtvYPhw02vZhQQ9"
  },
  {
    "id": "236",
    "titre": "Somewhere Only We Know",
    "artiste": "Keane",
    "annee": 2004,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1SKPmfSYaPsETbRHaiA18G"
  },
  {
    "id": "237",
    "titre": "Since U Been Gone",
    "artiste": "Kelly Clarkson",
    "annee": 2004,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3xrn9i8zhNZsTtcoWgQEAd"
  },
  {
    "id": "238",
    "titre": "Mr. Brightside",
    "artiste": "The Killers",
    "annee": 2004,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:003vvx7Niy0yvhvHt4a68B"
  },
  {
    "id": "239",
    "titre": "Somebody Told Me",
    "artiste": "The Killers",
    "annee": 2004,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6PwjJ58I4t7Mae9xfZ9l9v"
  },
  {
    "id": "240",
    "titre": "Just A Lil Bit",
    "artiste": "50 Cent",
    "annee": 2005,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:4nva9EpKntUTs6CRSGBCn9"
  },
  {
    "id": "241",
    "titre": "Et si en plus y'a personne",
    "artiste": "Alain Souchon",
    "annee": 2005,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:3Cgwrk8TUcu03H8HwFp3qK"
  },
  {
    "id": "242",
    "titre": "My Humps",
    "artiste": "Black Eyed Peas",
    "annee": 2005,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:20jYtEun4dUdYZ9foaOC48"
  },
  {
    "id": "243",
    "titre": "Pump It",
    "artiste": "Black Eyed Peas",
    "annee": 2005,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2ygMBIctKIAfbEBcT9065L"
  },
  {
    "id": "244",
    "titre": "Feel Good Inc.",
    "artiste": "Gorillaz, De La Soul",
    "annee": 2005,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:0d28khcov6AiegSCpG5TuT"
  },
  {
    "id": "245",
    "titre": "Hung Up",
    "artiste": "Madonna",
    "annee": 2005,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3850dYVgOFIXJh5U4BFEWH"
  },
  {
    "id": "246",
    "titre": "Hey There Delilah",
    "artiste": "Plain White T's",
    "annee": 2005,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:4RCWB3V8V0dignt99LZ8vH"
  },
  {
    "id": "247",
    "titre": "Temperature",
    "artiste": "Sean Paul",
    "annee": 2005,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0k2GOhqsrxDTAbFFSdNJjT"
  },
  {
    "id": "248",
    "titre": "Le même sang",
    "artiste": "Sinik, Diam's",
    "annee": 2005,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:0VJ4JHw63XLEzKazohwRaJ"
  },
  {
    "id": "249",
    "titre": "How to Save a Life",
    "artiste": "The Fray",
    "annee": 2005,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5fVZC9GiM4e8vu99W0Xf6J"
  },
  {
    "id": "250",
    "titre": "Irreplaceable",
    "artiste": "Beyoncé",
    "annee": 2006,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3qim3nNFg4aSTLZDLAFXhx"
  },
  {
    "id": "251",
    "titre": "Jeune Demoiselle",
    "artiste": "Diam's",
    "annee": 2006,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:42apdJFDH65Ew9RVuldbrb"
  },
  {
    "id": "252",
    "titre": "La Boulette",
    "artiste": "Diam's",
    "annee": 2006,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:4ycebyWnCg9jJXFnhnZqnz"
  },
  {
    "id": "253",
    "titre": "Ma France à Moi",
    "artiste": "Diam's",
    "annee": 2006,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:3jw5QyNE1hBE73xbtX7TSn"
  },
  {
    "id": "254",
    "titre": "Confessions Nocturnes",
    "artiste": "Diam's, Vitaa",
    "annee": 2006,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:641ONQxuNT0GpsyeUxUEdR"
  },
  {
    "id": "255",
    "titre": "The Sweet Escape",
    "artiste": "Gwen Stefani, Akon",
    "annee": 2006,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:07K4GcCDSTiXUF5ssyTRUM"
  },
  {
    "id": "256",
    "titre": "SexyBack (feat. Timbaland)",
    "artiste": "Justin Timberlake, Timbaland",
    "annee": 2006,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:0O45fw2L5vsWpdsOdXwNAR"
  },
  {
    "id": "257",
    "titre": "Maneater",
    "artiste": "Nelly Furtado",
    "annee": 2006,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4wH4dJgrsxONID6KS2tDQM"
  },
  {
    "id": "258",
    "titre": "Say It Right",
    "artiste": "Nelly Furtado",
    "annee": 2006,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2aI21FnmY7TJVKeMaoQZ0t"
  },
  {
    "id": "259",
    "titre": "Promiscuous",
    "artiste": "Nelly Furtado, Timbaland",
    "annee": 2006,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2gam98EZKrF9XuOkU13ApN"
  },
  {
    "id": "260",
    "titre": "Chasing Cars",
    "artiste": "Snow Patrol",
    "annee": 2006,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5hnyJvgoWiQUYZttV4wXy6"
  },
  {
    "id": "261",
    "titre": "When You Were Young",
    "artiste": "The Killers",
    "annee": 2006,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:70wYA8oYHoMzhRRkARoMhU"
  },
  {
    "id": "262",
    "titre": "Ayo Technology",
    "artiste": "50 Cent, Justin Timberlake, Timbaland",
    "annee": 2007,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:36Hwcla06Q5BCr59CL0sBp"
  },
  {
    "id": "263",
    "titre": "Gimme More",
    "artiste": "Britney Spears",
    "annee": 2007,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6ic8OlLUNEATToEFU3xmaH"
  },
  {
    "id": "264",
    "titre": "Low (feat. T-Pain)",
    "artiste": "Flo Rida, T-Pain",
    "annee": 2007,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0CAfXk7DXMnon4gLudAp7J"
  },
  {
    "id": "265",
    "titre": "Stronger",
    "artiste": "Kanye West",
    "annee": 2007,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0j2T0R9dR9qdJYsB7ciXhf"
  },
  {
    "id": "266",
    "titre": "Flashing Lights",
    "artiste": "Kanye West, Dwele",
    "annee": 2007,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:5TRPicyLGbAF2LGBFbHGvO"
  },
  {
    "id": "267",
    "titre": "What I've Done",
    "artiste": "Linkin Park",
    "annee": 2007,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:18lR4BzEs7e3qzc0KVkTpU"
  },
  {
    "id": "268",
    "titre": "Kids",
    "artiste": "MGMT",
    "annee": 2007,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:1jJci4qxiYcOHhQR247rEU"
  },
  {
    "id": "269",
    "titre": "Don't Stop The Music",
    "artiste": "Rihanna",
    "annee": 2007,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:0ByMNEPAPpOR5H69DVrTNy"
  },
  {
    "id": "270",
    "titre": "Umbrella",
    "artiste": "Rihanna",
    "annee": 2007,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:49FYlytm3dAAraYgpoJZux"
  },
  {
    "id": "271",
    "titre": "The Way I Are",
    "artiste": "Timbaland, Keri Hilson, D.O.E.",
    "annee": 2007,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2bLqfJjuC5syrsgDsZfGmn"
  },
  {
    "id": "272",
    "titre": "Chasing Pavements",
    "artiste": "Adele",
    "annee": 2008,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0Z5ok0QLLttAKsujOZYOXf"
  },
  {
    "id": "273",
    "titre": "Halo",
    "artiste": "Beyoncé",
    "annee": 2008,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:2CvOqDpQIMw69cCzWqr5yr"
  },
  {
    "id": "274",
    "titre": "Single Ladies (Put a Ring on It)",
    "artiste": "Beyoncé",
    "annee": 2008,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:557un1HgwYMuqfWGSTmnxw"
  },
  {
    "id": "275",
    "titre": "Circus",
    "artiste": "Britney Spears",
    "annee": 2008,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7jk7gqyEonmVVYahZN5zhW"
  },
  {
    "id": "276",
    "titre": "Viva La Vida",
    "artiste": "Coldplay",
    "annee": 2008,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1mea3bSkSGXuIRvnydlB5b"
  },
  {
    "id": "277",
    "titre": "Walking On A Dream",
    "artiste": "Empire Of The Sun",
    "annee": 2008,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:5r5cp9IpziiIsR6b93vcnQ"
  },
  {
    "id": "278",
    "titre": "Heartless",
    "artiste": "Kanye West",
    "annee": 2008,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:4EWCNWgDS8707fNSZ1oaA5"
  },
  {
    "id": "279",
    "titre": "Sex on Fire",
    "artiste": "Kings of Leon",
    "annee": 2008,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0ntQJM78wzOLVeCUAW7Y45"
  },
  {
    "id": "280",
    "titre": "Use Somebody",
    "artiste": "Kings of Leon",
    "annee": 2008,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5VGlqQANWDKJFl0MBG3sg2"
  },
  {
    "id": "281",
    "titre": "Poker Face",
    "artiste": "Lady Gaga",
    "annee": 2008,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1QV6tiMFM6fSOKOGLMHYYg"
  },
  {
    "id": "282",
    "titre": "Just Dance",
    "artiste": "Lady Gaga, Colby O'Donis",
    "annee": 2008,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1dzQoRqT5ucxXVaAhTcT0J"
  },
  {
    "id": "283",
    "titre": "Human",
    "artiste": "The Killers",
    "annee": 2008,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1sTsuZTdANkiFd7T34H3nb"
  },
  {
    "id": "284",
    "titre": "Boom Boom Pow",
    "artiste": "Black Eyed Peas",
    "annee": 2009,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3oDFtOhcN08qeDPAK6MEQG"
  },
  {
    "id": "285",
    "titre": "I Gotta Feeling",
    "artiste": "Black Eyed Peas",
    "annee": 2009,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2H1047e0oMSj10dgp7p2VG"
  },
  {
    "id": "286",
    "titre": "Right Round",
    "artiste": "Flo Rida, Kesha",
    "annee": 2009,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3GpbwCm3YxiWDvy29Uo3vP"
  },
  {
    "id": "287",
    "titre": "Replay",
    "artiste": "Iyaz",
    "annee": 2009,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4E5P1XyAFtrjpiIxkydly4"
  },
  {
    "id": "288",
    "titre": "Empire State Of Mind",
    "artiste": "JAŸ-Z, Alicia Keys",
    "annee": 2009,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2igwFfvr1OAGX9SKDCPBwO"
  },
  {
    "id": "289",
    "titre": "TiK ToK",
    "artiste": "Kesha",
    "annee": 2009,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0HPD5WQqrq7wPWR7P7Dw1i"
  },
  {
    "id": "290",
    "titre": "Bad Romance",
    "artiste": "Lady Gaga",
    "annee": 2009,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0SiywuOBRcynK0uKGWdCnn"
  },
  {
    "id": "291",
    "titre": "Alors on danse",
    "artiste": "Stromae",
    "annee": 2009,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:6uFreJoeTZVC7MgC7B6rF1"
  },
  {
    "id": "292",
    "titre": "Rolling in the Deep",
    "artiste": "Adele",
    "annee": 2010,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1c8gk2PeTE04A1pIDH9YMk"
  },
  {
    "id": "293",
    "titre": "Danza Kuduro",
    "artiste": "Don Omar, Lucenzo",
    "annee": 2010,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2a1o6ZejUi8U3wzzOtCOYw"
  },
  {
    "id": "294",
    "titre": "Love The Way You Lie",
    "artiste": "Eminem, Rihanna",
    "annee": 2010,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:15JINEqzVMv3SvJTAXAKED"
  },
  {
    "id": "295",
    "titre": "Pumped Up Kicks",
    "artiste": "Foster The People",
    "annee": 2010,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7w87IxuO7BDcJ3YUqCyMTT"
  },
  {
    "id": "296",
    "titre": "Sure Thing",
    "artiste": "Miguel",
    "annee": 2010,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:0JXXNGljqupsJaZsgSbMZV"
  },
  {
    "id": "297",
    "titre": "Oui mais... Non",
    "artiste": "Mylène Farmer",
    "annee": 2010,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:48vSXB9BiHEoYET5cnlX4F"
  },
  {
    "id": "298",
    "titre": "Only Girl (In The World)",
    "artiste": "Rihanna",
    "annee": 2010,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:2ENexcMEMsYk0rVJigVD3i"
  },
  {
    "id": "299",
    "titre": "Casquette à l'envers",
    "artiste": "Sexion d'Assaut",
    "annee": 2010,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:2x1n4oRYr2Ug6XfeOeO6Fl"
  },
  {
    "id": "300",
    "titre": "Désolé",
    "artiste": "Sexion d'Assaut",
    "annee": 2010,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:5NsOnvpjvH9sCz8TyVOmOz"
  },
  {
    "id": "301",
    "titre": "DJ Got Us Fallin' In Love (feat. Pitbull)",
    "artiste": "USHER, Pitbull",
    "annee": 2010,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:4356Typ82hUiFAynbLYbPn"
  },
  {
    "id": "302",
    "titre": "Éblouie par la nuit",
    "artiste": "Zaz",
    "annee": 2010,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:5IpgXFFwZP20UeG7JXg5SP"
  },
  {
    "id": "303",
    "titre": "Je veux",
    "artiste": "Zaz",
    "annee": 2010,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:734dz1YaFITwawPpM25fSt"
  },
  {
    "id": "304",
    "titre": "Les passants",
    "artiste": "Zaz",
    "annee": 2010,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:6x53YxdtkR2rGLptZCLgUx"
  },
  {
    "id": "305",
    "titre": "Someone Like You",
    "artiste": "Adele",
    "annee": 2011,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3bNv3VuUOKgrf5hu3YcuRo"
  },
  {
    "id": "306",
    "titre": "Feel So Close",
    "artiste": "Calvin Harris",
    "annee": 2011,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:1gihuPhrLraKYrJMAEONyc"
  },
  {
    "id": "307",
    "titre": "Titanium (feat. Sia)",
    "artiste": "David Guetta, Sia",
    "annee": 2011,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:0TDLuuLlV54CkRRUOahJb4"
  },
  {
    "id": "308",
    "titre": "Somebody That I Used to Know",
    "artiste": "Gotye",
    "annee": 2011,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4wCmqSrbyCgxEXROQE6vtV"
  },
  {
    "id": "309",
    "titre": "Stereo Hearts (feat. Adam Levine)",
    "artiste": "Gym Class Heroes, Adam Levine",
    "annee": 2011,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0qOnSQQF0yzuPWsXrQ9paz"
  },
  {
    "id": "310",
    "titre": "What Makes You Beautiful",
    "artiste": "One Direction",
    "annee": 2011,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4cluDES4hQEUhmXj6TXkSo"
  },
  {
    "id": "311",
    "titre": "Give Me Everything (feat. Nayer)",
    "artiste": "Pitbull, AFROJACK, Ne-Yo, Nayer",
    "annee": 2011,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:4QNpBfC0zvjKqPJcyqBy9W"
  },
  {
    "id": "312",
    "titre": "We Found Love",
    "artiste": "Rihanna, Calvin Harris",
    "annee": 2011,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:0U10zFw4GlBacOy9VDGfGL"
  },
  {
    "id": "313",
    "titre": "Call Me Maybe",
    "artiste": "Carly Rae Jepsen",
    "annee": 2012,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:20I6sIOMTCkB6w7ryavxtO"
  },
  {
    "id": "314",
    "titre": "Latch",
    "artiste": "Disclosure, Sam Smith",
    "annee": 2012,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:51ODNNDZm21HU7wI7cccRr"
  },
  {
    "id": "315",
    "titre": "Payphone",
    "artiste": "Maroon 5, Wiz Khalifa",
    "annee": 2012,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1XGmzt0PVuFgQYYnV2It7A"
  },
  {
    "id": "316",
    "titre": "Avant qu'elle parte",
    "artiste": "Sexion d'Assaut",
    "annee": 2012,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:53J0MZswXsuJfgG6kR3m32"
  },
  {
    "id": "317",
    "titre": "Ma direction",
    "artiste": "Sexion d'Assaut",
    "annee": 2012,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:6tFJdAZGXGsHTdMKmc1NjR"
  },
  {
    "id": "318",
    "titre": "Don't You Worry Child",
    "artiste": "Swedish House Mafia, John Martin",
    "annee": 2012,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:2V65y3PX4DkRhy1djlxd9p"
  },
  {
    "id": "319",
    "titre": "Another Love",
    "artiste": "Tom Odell",
    "annee": 2012,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3JvKfv6T31zO0ini8iNItO"
  },
  {
    "id": "320",
    "titre": "Do I Wanna Know?",
    "artiste": "Arctic Monkeys",
    "annee": 2013,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5FVd6KXrgO9B3JPmC8OPst"
  },
  {
    "id": "321",
    "titre": "Wake Me Up",
    "artiste": "Avicii",
    "annee": 2013,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:0nrRP2bk19rLc0orkWPQk2"
  },
  {
    "id": "322",
    "titre": "Get Lucky",
    "artiste": "Daft Punk, Pharrell Williams, Nile Rodgers",
    "annee": 2013,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:2Foc5Q5nqNiosCNqttzHof"
  },
  {
    "id": "323",
    "titre": "Take Me To Church",
    "artiste": "Hozier",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3dYD57lRAUcMHufyqn9GcI"
  },
  {
    "id": "324",
    "titre": "Dernière danse",
    "artiste": "Indila",
    "annee": 2013,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:65uoaqX5qcjXZRheAj1qQT"
  },
  {
    "id": "325",
    "titre": "All of Me",
    "artiste": "John Legend",
    "annee": 2013,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3U4isOIWM3VvDubwSI3y7a"
  },
  {
    "id": "326",
    "titre": "Dark Horse",
    "artiste": "Katy Perry, Juicy J",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4jbmgIyjGoXjY01XxatOx6"
  },
  {
    "id": "327",
    "titre": "Young And Beautiful",
    "artiste": "Lana Del Rey",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2nMeu6UenVvwUktBCpLMK9"
  },
  {
    "id": "328",
    "titre": "Rude",
    "artiste": "MAGIC!",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6RtPijgfPKROxEzTHNRiDp"
  },
  {
    "id": "329",
    "titre": "Bella",
    "artiste": "Maître Gims",
    "annee": 2013,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:1vELwZM3uBYWd8HrtddD4l"
  },
  {
    "id": "330",
    "titre": "Story of My Life",
    "artiste": "One Direction",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4nVBt6MZDDP6tRVdQTgxJg"
  },
  {
    "id": "331",
    "titre": "Counting Stars",
    "artiste": "OneRepublic",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2tpWsVSb9UEmDRxAl1zhX1"
  },
  {
    "id": "332",
    "titre": "Happy",
    "artiste": "Pharrell Williams",
    "annee": 2013,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:60nZcImufyMA1MKQY3dcCH"
  },
  {
    "id": "333",
    "titre": "Timber",
    "artiste": "Pitbull, Kesha",
    "annee": 2013,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3cHyrEgdyYRjgJKSOiOtcS"
  },
  {
    "id": "334",
    "titre": "Formidable",
    "artiste": "Stromae",
    "annee": 2013,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:2AMysGXOe0zzZJMtH3Nizb"
  },
  {
    "id": "335",
    "titre": "Papaoutai",
    "artiste": "Stromae",
    "annee": 2013,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:34dx8DACTJsc3rsJdaEIQw"
  },
  {
    "id": "336",
    "titre": "Tous les mêmes",
    "artiste": "Stromae",
    "annee": 2013,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:6M4nkEPZMj58acftDRTuKL"
  },
  {
    "id": "337",
    "titre": "On ira",
    "artiste": "Zaz",
    "annee": 2013,
    "origine": "francais",
    "genre": "variete",
    "spotify_uri": "spotify:track:0O7j6n6xv3XtsqAqZw0nYM"
  },
  {
    "id": "338",
    "titre": "One Last Time",
    "artiste": "Ariana Grande",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7xoUc6faLbCqZO6fQEYprd"
  },
  {
    "id": "339",
    "titre": "Love Me Harder",
    "artiste": "Ariana Grande, The Weeknd",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5J4ZkQpzMUFojo1CtAZYpn"
  },
  {
    "id": "340",
    "titre": "Break Free",
    "artiste": "Ariana Grande, Zedd",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:12KUFSHFgT0XCoiSlvdQi4"
  },
  {
    "id": "341",
    "titre": "The Nights",
    "artiste": "Avicii",
    "annee": 2014,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:0ct6r3EGTcMLPtrXHDvVjc"
  },
  {
    "id": "342",
    "titre": "Summer",
    "artiste": "Calvin Harris",
    "annee": 2014,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:6YUTL4dYpB9xZO5qExPf05"
  },
  {
    "id": "343",
    "titre": "Outside (feat. Ellie Goulding)",
    "artiste": "Calvin Harris, Ellie Goulding",
    "annee": 2014,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:7MmG8p0F9N3C4AXdK6o6Eb"
  },
  {
    "id": "344",
    "titre": "A Sky Full of Stars",
    "artiste": "Coldplay",
    "annee": 2014,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0FDzzruyVECATHXKHFs9eJ"
  },
  {
    "id": "345",
    "titre": "Photograph",
    "artiste": "Ed Sheeran",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1HNkqx9Ahdgi1Ixy2xkKkL"
  },
  {
    "id": "346",
    "titre": "Thinking out Loud",
    "artiste": "Ed Sheeran",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:34gCuhDGsG4bRPIf9bb02f"
  },
  {
    "id": "347",
    "titre": "Love Story",
    "artiste": "Indila",
    "annee": 2014,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:6nGeLlakfzlBcFdZXteDq7"
  },
  {
    "id": "348",
    "titre": "S.O.S",
    "artiste": "Indila",
    "annee": 2014,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:7FE0ThVWVTIHYKv14xlMVr"
  },
  {
    "id": "349",
    "titre": "Tourner Dans Le Vide",
    "artiste": "Indila",
    "annee": 2014,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:1MqzIgGsHP4cNjPboevsfq"
  },
  {
    "id": "350",
    "titre": "No Role Modelz",
    "artiste": "J. Cole",
    "annee": 2014,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:68Dni7IE4VyPkTOH9mRWHr"
  },
  {
    "id": "351",
    "titre": "Uptown Funk",
    "artiste": "Mark Ronson feat. Bruno Mars",
    "annee": 2014,
    "origine": "international",
    "genre": "disco-funk",
    "spotify_uri": "spotify:track:32OlwWuMpZ6b0aN2RZOeMS"
  },
  {
    "id": "352",
    "titre": "Night Changes",
    "artiste": "One Direction",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5O2P9iiztwhomNh8xkR9lJ"
  },
  {
    "id": "353",
    "titre": "Steal My Girl",
    "artiste": "One Direction",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2Bs4jQEGMycglOfWPBqrVG"
  },
  {
    "id": "354",
    "titre": "Time of Our Lives",
    "artiste": "Pitbull, Ne-Yo",
    "annee": 2014,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2bJvI42r8EF3wxjOuDav4r"
  },
  {
    "id": "355",
    "titre": "I'm Not The Only One",
    "artiste": "Sam Smith",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7795WJLVKJoAyVoOtCWqXN"
  },
  {
    "id": "356",
    "titre": "Shut Up and Dance",
    "artiste": "WALK THE MOON",
    "annee": 2014,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4kbj5MwxO1bq9wjT5g9HaA"
  },
  {
    "id": "357",
    "titre": "Hello",
    "artiste": "Adele",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1Yk0cQdMLx5RzzFTYwmuld"
  },
  {
    "id": "358",
    "titre": "Waiting For Love",
    "artiste": "Avicii",
    "annee": 2015,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:2P4OICZRVAQcYAV2JReRfj"
  },
  {
    "id": "359",
    "titre": "Cool for the Summer",
    "artiste": "Demi Lovato",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3uwnnTQcHM1rDqSfA4gQNz"
  },
  {
    "id": "360",
    "titre": "Cake By The Ocean",
    "artiste": "DNCE",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:76hfruVvmfQbw0eYn1nmeC"
  },
  {
    "id": "361",
    "titre": "Est-ce que tu m'aimes ?",
    "artiste": "GIMS",
    "annee": 2015,
    "origine": "francais",
    "genre": "rap",
    "spotify_uri": "spotify:track:3a9TMd2Yrza6HXqqlfMtfy"
  },
  {
    "id": "362",
    "titre": "What Do You Mean?",
    "artiste": "Justin Bieber",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4B0JvthVoAAuygILe3n4Bs"
  },
  {
    "id": "363",
    "titre": "Cheerleader (Felix Jaehn Remix)",
    "artiste": "OMI, felix jaehn",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7vFoFDWqTX0mHzLfrF1Cfy"
  },
  {
    "id": "364",
    "titre": "The Less I Know The Better",
    "artiste": "Tame Impala",
    "annee": 2015,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6K4t31amVTZDgR3sKmwUJJ"
  },
  {
    "id": "365",
    "titre": "Daddy Issues",
    "artiste": "The Neighbourhood",
    "annee": 2015,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5E30LdtzQTGqRvNd7l6kG5"
  },
  {
    "id": "366",
    "titre": "Can't Feel My Face",
    "artiste": "The Weeknd",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:22VdIZQfgXJea34mQxlt81"
  },
  {
    "id": "367",
    "titre": "The Hills",
    "artiste": "The Weeknd",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7fBv7CLKzipRk6EC6TWHOB"
  },
  {
    "id": "368",
    "titre": "Ride",
    "artiste": "Twenty One Pilots",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2Z8WuEywRWYTKe1NybPQEW"
  },
  {
    "id": "369",
    "titre": "Stressed Out",
    "artiste": "Twenty One Pilots",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:3CRDbSIZ4r5MsZ0YwxuEkn"
  },
  {
    "id": "370",
    "titre": "Wait a Minute!",
    "artiste": "WILLOW",
    "annee": 2015,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0y60itmpH0aPKsFiGxmtnh"
  },
  {
    "id": "371",
    "titre": "See You Again (feat. Charlie Puth)",
    "artiste": "Wiz Khalifa, Charlie Puth",
    "annee": 2015,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:2JzZzZUQj3Qff7wapcbKjc"
  },
  {
    "id": "372",
    "titre": "24K Magic",
    "artiste": "Bruno Mars",
    "annee": 2016,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6b8Be6ljOzmkOmFslEb23P"
  },
  {
    "id": "373",
    "titre": "This Is What You Came For",
    "artiste": "Calvin Harris, Rihanna",
    "annee": 2016,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:2vlDrKpOC0eSTqTDRcbYyw"
  },
  {
    "id": "374",
    "titre": "Pink + White",
    "artiste": "Frank Ocean",
    "annee": 2016,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:3xKsf9qdS1CyvXSMEid6g8"
  },
  {
    "id": "375",
    "titre": "I Took A Pill In Ibiza - Seeb Remix",
    "artiste": "Mike Posner, Seeb",
    "annee": 2016,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0vbtURX4qv1l7besfwmnD8"
  },
  {
    "id": "376",
    "titre": "Love On The Brain",
    "artiste": "Rihanna",
    "annee": 2016,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:5oO3drDxtziYU2H1X23ZIp"
  },
  {
    "id": "377",
    "titre": "No Lie",
    "artiste": "Sean Paul, Dua Lipa",
    "annee": 2016,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:48QmG1dfvMuYLxMPt7KSRA"
  },
  {
    "id": "378",
    "titre": "Don't Let Me Down",
    "artiste": "The Chainsmokers, Daya",
    "annee": 2016,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:1i1fxkWeaMmKEB4T7zqbzK"
  },
  {
    "id": "379",
    "titre": "Closer",
    "artiste": "The Chainsmokers, Halsey",
    "annee": 2016,
    "origine": "international",
    "genre": "electro",
    "spotify_uri": "spotify:track:7BKLCZ1jbUBVqRi2FVlTVw"
  },
  {
    "id": "380",
    "titre": "goosebumps",
    "artiste": "Travis Scott",
    "annee": 2016,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:6gBFPUFcJLzWGx4lenP6h2"
  },
  {
    "id": "381",
    "titre": "Heathens",
    "artiste": "Twenty One Pilots",
    "annee": 2016,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6i0V12jOa3mr6uu4WYhUBr"
  },
  {
    "id": "382",
    "titre": "Havana (feat. Young Thug)",
    "artiste": "Camila Cabello, Young Thug",
    "annee": 2017,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1rfofaqEpACxVEHIZBJe6W"
  },
  {
    "id": "383",
    "titre": "Passionfruit",
    "artiste": "Drake",
    "annee": 2017,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:5mCPDVBb16L4XQwDdbRUpz"
  },
  {
    "id": "384",
    "titre": "Perfect",
    "artiste": "Ed Sheeran",
    "annee": 2017,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0tgVpDi06FyKpA1z0VMD4v"
  },
  {
    "id": "385",
    "titre": "Shape of You",
    "artiste": "Ed Sheeran",
    "annee": 2017,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7qiZfU4dY1lWllzX7mPBI3"
  },
  {
    "id": "386",
    "titre": "Unforgettable",
    "artiste": "French Montana, Swae Lee",
    "annee": 2017,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3B54sVLJ402zGa6Xm4YGNe"
  },
  {
    "id": "387",
    "titre": "Believer",
    "artiste": "Imagine Dragons",
    "annee": 2017,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:0pqnGHJpmpxLKifKRmU6WP"
  },
  {
    "id": "388",
    "titre": "Thunder",
    "artiste": "Imagine Dragons",
    "annee": 2017,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:1zB4vmk8tFRmM9UULNzbLB"
  },
  {
    "id": "389",
    "titre": "Young Dumb & Broke",
    "artiste": "Khalid",
    "annee": 2017,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:5Z3GHaZ6ec9bsiI5BenrbY"
  },
  {
    "id": "390",
    "titre": "Despacito",
    "artiste": "Luis Fonsi feat. Daddy Yankee",
    "annee": 2017,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6habFhsOp2NvshLv26DqMb"
  },
  {
    "id": "391",
    "titre": "Beggin'",
    "artiste": "Måneskin",
    "annee": 2017,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:3Wrjm47oTz2sjIgck11l5e"
  },
  {
    "id": "392",
    "titre": "Feel It Still",
    "artiste": "Portugal. The Man",
    "annee": 2017,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:6QgjcU0zLnzq5OrUoSZ3OK"
  },
  {
    "id": "393",
    "titre": "The Man",
    "artiste": "The Killers",
    "annee": 2017,
    "origine": "international",
    "genre": "rock",
    "spotify_uri": "spotify:track:5aWhs651KYM26HYM16kRdk"
  },
  {
    "id": "394",
    "titre": "Balance ton quoi",
    "artiste": "Angèle",
    "annee": 2018,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:2jX5c5RFp0A9E1GDsvGxIa"
  },
  {
    "id": "395",
    "titre": "Djadja",
    "artiste": "Aya Nakamura",
    "annee": 2018,
    "origine": "francais",
    "genre": "rnb",
    "spotify_uri": "spotify:track:7sKDftgGirHWTVFMtJoDoh"
  },
  {
    "id": "396",
    "titre": "when the party's over",
    "artiste": "Billie Eilish",
    "annee": 2018,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:43zdsphuZLzwA9k4DJhU0I"
  },
  {
    "id": "397",
    "titre": "lovely (with Khalid)",
    "artiste": "Billie Eilish, Khalid",
    "annee": 2018,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0u2P5u6lvoDfwTYjAADbn4"
  },
  {
    "id": "398",
    "titre": "All The Stars (with SZA)",
    "artiste": "Kendrick Lamar, SZA",
    "annee": 2018,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:3GCdLUSnKSMJhs4Tj6CV3s"
  },
  {
    "id": "399",
    "titre": "Someone You Loved",
    "artiste": "Lewis Capaldi",
    "annee": 2018,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:7qEHsqek33rTcFNT9PFqLf"
  },
  {
    "id": "400",
    "titre": "Sunflower",
    "artiste": "Post Malone, Swae Lee",
    "annee": 2018,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:0RiRZpuVRbi7oqRdSMwhQY"
  },
  {
    "id": "401",
    "titre": "7 rings",
    "artiste": "Ariana Grande",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6ocbgoVGwYJhOv1GgI9NsF"
  },
  {
    "id": "402",
    "titre": "bad guy",
    "artiste": "Billie Eilish",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:2Fxmhks0bxGSBdJ92vM42m"
  },
  {
    "id": "403",
    "titre": "Watermelon Sugar",
    "artiste": "Harry Styles",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6UelLqGlWMcVH1E5c4H7lY"
  },
  {
    "id": "404",
    "titre": "Parle à ta tête",
    "artiste": "Indila",
    "annee": 2019,
    "origine": "francais",
    "genre": "pop",
    "spotify_uri": "spotify:track:3lTGqzJbMYDHXbqeV8pt7d"
  },
  {
    "id": "405",
    "titre": "Circles",
    "artiste": "Post Malone",
    "annee": 2019,
    "origine": "international",
    "genre": "rap",
    "spotify_uri": "spotify:track:21jGcNKet2qwijlDFuPiPb"
  },
  {
    "id": "406",
    "titre": "Lover",
    "artiste": "Taylor Swift",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:1dGr1c8CrMLDpV6mPbImSI"
  },
  {
    "id": "407",
    "titre": "Blinding Lights",
    "artiste": "The Weeknd",
    "annee": 2019,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0VjIjW4GlUZAMYd2vXMi3b"
  },
  {
    "id": "408",
    "titre": "Nos célébrations",
    "artiste": "Indochine",
    "annee": 2020,
    "origine": "francais",
    "genre": "rock",
    "spotify_uri": "spotify:track:6h0kUO3LKcYHH1E9yUkL4z"
  },
  {
    "id": "409",
    "titre": "Save Your Tears",
    "artiste": "The Weeknd",
    "annee": 2020,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:5QO79kh1waicV47BqGRL3g"
  },
  {
    "id": "410",
    "titre": "Easy On Me",
    "artiste": "Adele",
    "annee": 2021,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:46IZ0fSY2mpAiktS3KOqds"
  },
  {
    "id": "411",
    "titre": "Happier Than Ever",
    "artiste": "Billie Eilish",
    "annee": 2021,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:4RVwu0g32PAqgUiJoXsdF8"
  },
  {
    "id": "412",
    "titre": "Santé",
    "artiste": "Stromae",
    "annee": 2021,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:3Mcxi78U3lCjt8DMKa6YY4"
  },
  {
    "id": "413",
    "titre": "Moth To A Flame (with The Weeknd)",
    "artiste": "Swedish House Mafia, The Weeknd",
    "annee": 2021,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0VO8gYVDSwM1Qdd2GsMoYK"
  },
  {
    "id": "414",
    "titre": "What Was I Made For?",
    "artiste": "Billie Eilish",
    "annee": 2023,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:6wf7Yu7cxBSPrRlWeSeK0Q"
  },
  {
    "id": "415",
    "titre": "Ma Meilleure Ennemie",
    "artiste": "Arcane, Stromae, Pomme",
    "annee": 2024,
    "origine": "francais",
    "genre": "electro",
    "spotify_uri": "spotify:track:3pid9SdBo28hjELHNT6B8N"
  },
  {
    "id": "416",
    "titre": "TEXAS HOLD 'EM",
    "artiste": "Beyoncé",
    "annee": 2024,
    "origine": "international",
    "genre": "rnb",
    "spotify_uri": "spotify:track:7wLShogStyDeZvL0a6daN5"
  },
  {
    "id": "417",
    "titre": "Timeless (feat Playboi Carti)",
    "artiste": "The Weeknd, Playboi Carti",
    "annee": 2024,
    "origine": "international",
    "genre": "pop",
    "spotify_uri": "spotify:track:0FIDCNYYjNvPVimz5icugS"
  }
];
