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
};
global.window = { matchMedia: () => ({ matches: true }) };

(0, eval)(fs.readFileSync(path + "tracks.js", "utf8").replace("const TRACKS", "globalThis.TRACKS"));
(0, eval)(fs.readFileSync(path + "app.js", "utf8")
  + `\n;globalThis.G = { state, startGame, beginTurn, placeAt, onSkipClick, onBuyClick, resolveReveal, startSteal, isSlotCorrect };`);

const G = global.G;
const st = G.state;
const assert = (cond, msg) => { if (!cond) { console.error("FAIL:", msg); process.exit(1); } console.log("ok:", msg); };

G.startGame();
assert(st.phase === "listen", "partie démarrée en phase listen");
assert(st.teams.length === 2 && st.teams.every(t => t.tokens === 2 && t.timeline.length === 1),
  "2 joueurs, 2 jetons, 1 carte de départ chacun");

// Tour 1 : placement correct (on calcule le bon emplacement) → modal interception
st.hasListened = true;
const t0 = st.teams[0];
const goodSlot = st.currentTrack.annee <= t0.timeline[0].annee ? 0 : 1;
G.placeAt(goodSlot);
assert(st.phase === "steal", "phase interception proposée après placement");

// Joueur 2 intercepte (à tort, le placement est bon)
G.startSteal(1);
assert(st.teams[1].tokens === 1, "jeton d'interception dépensé");
G.placeAt(0); // le voleur place dans sa frise
assert(st.phase === "reveal", "révélation après interception");
assert(st.lastResult.correct === true, "placement actif correct");
assert(t0.timeline.length === 2, "carte gagnée par le joueur actif");
assert(st.teams[1].timeline.length === 1, "le voleur ne gagne rien");

// Tour suivant : bonus titre+artiste → jeton
els["toggle-titre"].classList.contains = () => true;
els["toggle-artiste"].classList.contains = () => true;
els["btn-next-turn"].onclick();
assert(t0.tokens === 3, "bonus titre+artiste = +1 jeton");
assert(st.currentTeamIdx === 1 && st.phase === "listen", "au tour du joueur 2");

// Joueur 2 passe le morceau (1 jeton)
const trackBefore = st.currentTrack.id;
G.onSkipClick();
assert(st.teams[1].tokens === 0, "jeton du skip dépensé");
assert(st.currentTrack.id !== trackBefore, "nouveau morceau après skip");
G.onSkipClick();
assert(st.teams[1].tokens === 0, "skip refusé sans jeton");

// Placement raté volontaire du joueur 2, joueur 1 intercepte au bon endroit
// (années forcées pour éviter les égalités qui rendraient deux emplacements corrects)
st.hasListened = true;
const t1 = st.teams[1];
t1.timeline[0].annee = 1980;
st.currentTrack.annee = 1990;
const badSlot = 0; // placer avant 1980 un morceau de 1990 → faux à coup sûr
G.placeAt(badSlot);
assert(st.phase === "steal", "interception possible (joueur 1 a des jetons)");
G.startSteal(0);
const after = t0.timeline.findIndex(c => c.annee > st.currentTrack.annee);
G.placeAt(after === -1 ? t0.timeline.length : after);
assert(st.lastResult.correct === false && st.lastResult.stolen === true, "carte volée !");
assert(t0.timeline.length === 3, "la carte volée rejoint la frise du voleur");

// Fin de tour, retour au joueur 1 : carte gratuite contre 3 jetons
els["toggle-titre"].classList.contains = () => false;
els["toggle-artiste"].classList.contains = () => false;
els["btn-next-turn"].onclick();
assert(st.currentTeamIdx === 0, "retour au joueur 1");
t0.tokens = 2;
const cardsBefore = t0.timeline.length;
G.onBuyClick();
assert(t0.timeline.length === cardsBefore, "achat refusé avec 2 jetons");
t0.tokens = 3;
G.onBuyClick();
assert(t0.tokens === 0 && t0.timeline.length === cardsBefore + 1, "carte gratuite contre 3 jetons");
assert([...t0.timeline].every((c, i, a) => i === 0 || a[i - 1].annee <= c.annee),
  "frise toujours triée après l'achat");

// Victoire : cible atteinte à la prochaine carte bien placée (adversaire sans jeton → pas d'interception)
st.config.target = t0.timeline.length + 1;
st.hasListened = true;
const lastIdx = t0.timeline.findIndex(c => c.annee > st.currentTrack.annee);
G.placeAt(lastIdx === -1 ? t0.timeline.length : lastIdx);
assert(st.phase === "reveal", "pas d'interception possible (adversaire à 0 jeton) → révélation directe");
assert(st.lastResult.correct === true, "dernière carte bien placée");
els["btn-next-turn"].onclick();
assert(st.phase === "end", "victoire détectée → écran de fin");

console.log("\nTous les tests passent ✔");
