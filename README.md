# 🎵 Blind Test Chronologique

Jeu musical façon **HITSTER**, pensé pour être joué **à plusieurs sur un même téléphone** (pass-and-play) : écoute à l'aveugle d'un extrait de 20 s, placement chronologique sur sa frise, jetons HITSTER (passer, intercepter, carte gratuite), victoire à 10 cartes.

## Lancer le jeu

```bash
cd spotify-game
python3 -m http.server 8000
```

Puis ouvrir **http://localhost:8000** dans un navigateur (Chrome/Safari/Firefox, ordinateur ou tablette).

> Un simple double-clic sur `index.html` fonctionne aussi dans la plupart des navigateurs, mais le serveur local est recommandé pour la fiabilité du lecteur Spotify.

## Comment jouer (règles HITSTER)

Un seul téléphone, qu'on se passe de main en main. Les frises sont publiques, comme dans le jeu de société.

1. **Configuration** : créer les joueurs (nom + couleur), choisir l'origine (mixte / 100 % FR / 70-30 / 100 % inter.), la période, les styles, et le nombre de cartes pour gagner (10 par défaut, comme dans HITSTER).
2. Chaque joueur démarre avec **une carte révélée** sur sa frise et **2 jetons HITSTER 🪙**.
3. À son tour, le joueur clique sur **Écouter** (extrait de 20 s, lecteur masqué), puis clique sur un emplacement **⊕** de sa frise pour placer le morceau.
4. **Bonus à l'oral** : avant de placer, le joueur peut cliquer sur 🎤 et annoncer le titre et l'artiste. Titre **et** artiste corrects = **+1 jeton 🪙**. La reconnaissance vocale (fr-FR) pré-remplit le verdict, corrigeable à la main à la révélation (et validation manuelle sur les navigateurs sans reconnaissance vocale).
5. **Interception 🃏** : une fois la carte placée (marquée « ? »), chaque adversaire ayant au moins 1 jeton peut **contester pour 1 🪙** : il place la même carte dans **sa propre** frise. À la révélation, si le placement du joueur actif était faux et le sien juste, il **vole la carte**. Sinon le jeton est perdu.
6. **Révélation** : année, titre, artiste et pochette s'affichent. Bien placé → la carte reste ; mal placé → elle est écartée (ou volée).
7. **Autres usages des jetons** (à son tour) : **1 🪙** = passer le morceau en cours et en tirer un autre ; **3 🪙** = recevoir une carte de la pioche directement bien placée dans sa frise.
8. Premier joueur à **N cartes** alignées : victoire. Si la pioche s'épuise avant, classement au nombre de cartes (puis jetons restants).

## Base de morceaux

`js/tracks.js` contient 60 morceaux (30 français / 30 internationaux, 1960 → 2019), chacun tagué :

```js
{
  "id": "023",
  "titre": "Alors on danse",
  "artiste": "Stromae",
  "annee": 2009,
  "origine": "francais",      // "francais" | "international"
  "genre": "electro",          // pop | rock | rap | electro | variete | rnb | disco-funk
  "spotify_uri": "spotify:track:6uFreJoeTZVC7MgC7B6rF1"
}
```

**Ajouter un morceau** : copier une entrée et remplir les champs. Pour l'URI Spotify : clic droit sur le titre dans Spotify → *Partager* → *Copier le lien du titre* ; l'ID est la partie après `/track/` → `spotify:track:<ID>`. Aucune modification de code nécessaire.

Tous les IDs de la base ont été vérifiés automatiquement contre Spotify (titre + artiste).

## Technique

- **HTML/CSS/JS vanilla**, aucun build, aucune dépendance.
- **Spotify iFrame API** (widget Embed officiel) : gratuit, sans compte Premium ni OAuth. Le lecteur est recouvert d'un cache opaque tant que le morceau n'est pas révélé.
- L'extrait s'arrête automatiquement à 20 s (minuteur applicatif + événements `playback_update`).
- La lecture démarre sur clic utilisateur (contrainte autoplay des navigateurs).
- Sans session Spotify ouverte dans le navigateur, le widget lit un extrait de 30 s — largement suffisant pour les 20 s du jeu.

## Choix faits sur les questions ouvertes (section 7 du cahier des charges)

1. **60 morceaux** au lancement (au-dessus de la cible 30-50).
2. Base constituée automatiquement (recherche + validation des URI contre Spotify) ; enrichissable à la main.
3. Le mode « sans thème » existe : laisser *Mixte libre* + *Toutes années* + aucun style coché.
4. Cartes pour gagner **paramétrable dès la V1** (3 à 20, défaut 10).

## Hors périmètre (pistes futures)

Multijoueur à distance, métadonnées auto via API Spotify, application native.
