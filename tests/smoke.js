// Smoke test : simule une partie complète sans navigateur (DOM factice).
const fs = require("fs");
const path = __dirname + "/../js/";

function makeEl() {
  return {
    classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
    style: {},
    innerHTML: "", textContent: "",
    onclick: null, oninput: null, disabled: false, title: "", value: "10",
    append() {}, querySelector: () => makeEl(),
    querySelectorAll: () => [],
    dataset: {},
  };
}
const els = {};
global.document = {
  getElementById: (id) => (els[id] ||= makeEl()),
  createElement: () => makeEl(),
  querySelector: () => makeEl(),
  querySelectorAll: () => [],
  addEventListener() {},
  visibilityState: "visible",
};
global.document.body = makeEl();
global.window = { matchMedia: () => ({ matches: true }) };
global.navigator = {}; // pas de Wake Lock hors navigateur
global.fetch = async () => ({ ok: false }); // pas de réseau pendant les tests (pochettes)

(0, eval)(fs.readFileSync(path + "tracks.js", "utf8").replace("const TRACKS", "globalThis.TRACKS"));
(0, eval)(fs.readFileSync(path + "app.js", "utf8")
  + `\n;globalThis.G = { state, startGame, beginTurn, placeAt, onBuyClick, resolveReveal, startSteal, isSlotCorrect };`);

const G = global.G;
const st = G.state;
const assert = (cond, msg) => { if (!cond) { console.error("FAIL:", msg); process.exit(1); } console.log("ok:", msg); };

G.startGame();
assert(st.phase === "listen", "partie démarrée en phase listen");
assert(st.teams.length === 2 && st.teams.every(t => t.tokens === 2 && t.timeline.length === 1),
  "2 joueurs, 2 jetons, 1 carte de départ chacun");

// Tour 1 : placement correct (on calcule le bon emplacement) → modal contestation
st.hasListened = true;
const t0 = st.teams[0];
const goodSlot = st.currentTrack.annee <= t0.timeline[0].annee ? 0 : 1;
G.placeAt(goodSlot);
assert(st.phase === "steal", "phase contestation proposée après placement");

// Joueur 2 conteste (à tort, le placement est bon) : il désigne un autre
// emplacement sur la frise du joueur ACTIF (règle HITSTER)
G.startSteal(1);
assert(st.teams[1].tokens === 1, "jeton de contestation dépensé");
G.placeAt(goodSlot === 0 ? 1 : 0); // forcément un autre emplacement que la carte mystère
assert(st.phase === "reveal", "révélation après contestation");
assert(st.lastResult.correct === true, "placement actif correct");
assert(t0.timeline.length === 2, "carte gagnée par le joueur actif");
assert(st.teams[1].timeline.length === 1, "le contestataire ne gagne rien");

// Bonus titre + artiste (validation manuelle) → +1 jeton
els["toggle-titre"].classList.contains = () => true;
els["toggle-artiste"].classList.contains = () => true;
els["btn-next-turn"].onclick();
assert(t0.tokens === 3, "bonus titre+artiste = +1 jeton");
assert(st.currentTeamIdx === 1 && st.phase === "listen", "au tour du joueur 2");

// Placement raté volontaire du joueur 2, joueur 1 conteste en désignant
// le bon emplacement sur la frise du joueur 2 → il vole la carte
// (années forcées pour éviter les égalités qui rendraient deux emplacements corrects)
st.hasListened = true;
const t1 = st.teams[1];
t1.timeline[0].annee = 1980;
st.currentTrack.annee = 1990;
G.placeAt(0); // placer avant 1980 un morceau de 1990 → faux à coup sûr
assert(st.phase === "steal", "contestation possible (joueur 1 a des jetons)");
G.startSteal(0);
G.placeAt(1); // le bon emplacement sur la frise du joueur 2 : après 1980
assert(st.lastResult.correct === false && st.lastResult.stolen === true, "carte volée !");
assert(t1.timeline.length === 1, "la frise du joueur actif reste intacte");
assert(t0.timeline.length === 3, "la carte volée rejoint la frise du contestataire");
assert([...t0.timeline].every((c, i, a) => i === 0 || a[i - 1].annee <= c.annee),
  "la carte volée est bien placée chronologiquement chez le contestataire");

// Plafond de jetons : à 5 jetons, le bonus n'en ajoute plus
t1.tokens = 5;
els["toggle-titre"].classList.contains = () => true;
els["toggle-artiste"].classList.contains = () => true;
els["btn-next-turn"].onclick();
assert(t1.tokens === 5, "plafond de 5 jetons respecté");
assert(st.currentTeamIdx === 0, "retour au joueur 1");

// Carte gratuite contre 3 jetons
els["toggle-titre"].classList.contains = () => false;
els["toggle-artiste"].classList.contains = () => false;
t0.tokens = 2;
const cardsBefore = t0.timeline.length;
G.onBuyClick();
assert(t0.timeline.length === cardsBefore, "achat refusé avec 2 jetons");
t0.tokens = 3;
G.onBuyClick();
assert(t0.tokens === 0 && t0.timeline.length === cardsBefore + 1, "carte gratuite contre 3 jetons");
assert([...t0.timeline].every((c, i, a) => i === 0 || a[i - 1].annee <= c.annee),
  "frise toujours triée après l'achat");

// Victoire : cible atteinte à la prochaine carte bien placée (adversaire sans jeton → pas de contestation)
t1.tokens = 0;
st.config.target = t0.timeline.length + 1;
st.hasListened = true;
const lastIdx = t0.timeline.findIndex(c => c.annee > st.currentTrack.annee);
G.placeAt(lastIdx === -1 ? t0.timeline.length : lastIdx);
assert(st.phase === "reveal", "pas de contestation possible (adversaire à 0 jeton) → révélation directe");
assert(st.lastResult.correct === true, "dernière carte bien placée");
els["btn-next-turn"].onclick();
assert(st.phase === "end", "victoire détectée → écran de fin");

console.log("\nTous les tests passent ✔");
