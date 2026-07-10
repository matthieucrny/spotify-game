/* ============================================================
   Blind Test Chronologique — logique de jeu (V1)
   ============================================================ */

const EXTRACT_MS = 15000; // durée d'écoute de l'extrait
const TEAM_COLORS = ["#ff5e7a", "#8b5cf6", "#38bdf8", "#ffb84d", "#2dd4a7", "#f472b6", "#a3e635", "#fb923c"];
const GENRE_LABELS = {
  pop: "Pop", rock: "Rock", rap: "Rap / Hip-Hop", electro: "Électro",
  variete: "Variété", rnb: "R&B / Soul", "disco-funk": "Disco / Funk",
};

/* Icônes SVG inline (sprite déclaré dans index.html) — pas d'émojis structurels */
function icon(name, cls = "") {
  return `<svg class="icon${cls ? " " + cls : ""}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
}
const coinIcon = () => icon("coin", "icon-coin");

const START_TOKENS = 2;   // jetons HITSTER de départ par joueur
const MAX_TOKENS = 5;     // un joueur ne peut jamais détenir plus de 5 jetons
const STEAL_COST = 1;     // contester le placement d'un adversaire
const BUY_COST = 3;       // carte ajoutée directement à sa frise

/* ---------- État global ---------- */
const state = {
  config: {
    teams: [
      { name: "Joueur 1", color: TEAM_COLORS[0] },
      { name: "Joueur 2", color: TEAM_COLORS[1] },
    ],
    origine: "mixte",
    periode: null,          // null = toutes années, sinon [min, max]
    genres: new Set(),      // vide = tous
    target: 10,
  },
  deck: [],
  teams: [],                // { name, color, timeline: [track...], tokens }
  currentTeamIdx: 0,
  currentTrack: null,
  phase: "setup",           // setup | listen | steal | steal-place | reveal | end
  hasListened: false,
  pendingSlot: null,        // emplacement choisi par le joueur actif, avant révélation
  thief: null,              // { teamIdx, slotIndex } si un adversaire conteste (slot sur la frise du joueur actif)
  lastResult: null,
};

/* ---------- Lecteur Spotify (iFrame API) ---------- */
let embedController = null;
let embedApi = null;
let pendingUri = null;
let stopTimer = null;
let countdownInterval = null;
let playbackPaused = true;

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  embedApi = IFrameAPI;
  if (pendingUri) createController(pendingUri);
};

function createController(uri) {
  if (!embedApi) { pendingUri = uri; return; }
  const mount = document.getElementById("player-embed");
  const height = window.matchMedia("(max-width: 600px)").matches ? 80 : 152; // compact sur téléphone
  embedApi.createController(mount, { uri, width: "100%", height }, (ctrl) => {
    embedController = ctrl;
    ctrl.addListener("playback_update", (e) => {
      playbackPaused = e.data.isPaused;
      if (!e.data.isPaused && e.data.position >= EXTRACT_MS) stopPlayback();
    });
  });
}

function loadTrackInPlayer(track) {
  if (embedController) {
    embedController.loadUri(track.spotify_uri);
  } else {
    createController(track.spotify_uri);
  }
}

function playExtract() {
  if (!embedController) return;
  stopPlayback(true); // reset minuteurs si réécoute
  embedController.seek(0);
  embedController.play();
  // Garde-fou : arrêt forcé même si les events playback_update ne remontent pas
  stopTimer = setTimeout(stopPlayback, EXTRACT_MS + 1500);
  startCountdown();
}

function stopPlayback(silent = false) {
  clearTimeout(stopTimer);
  clearInterval(countdownInterval);
  if (!silent && embedController) {
    if (typeof embedController.pause === "function") embedController.pause();
    else if (!playbackPaused) embedController.togglePlay();
  }
  if (!silent) document.getElementById("countdown").classList.add("hidden");
}

function startCountdown() {
  const box = document.getElementById("countdown");
  const bar = document.getElementById("countdown-bar");
  const label = document.getElementById("countdown-label");
  box.classList.remove("hidden");
  box.classList.remove("ending");
  const start = Date.now();
  countdownInterval = setInterval(() => {
    const remaining = Math.max(0, EXTRACT_MS - (Date.now() - start));
    bar.style.transform = `scaleX(${remaining / EXTRACT_MS})`;
    label.textContent = `${Math.ceil(remaining / 1000)} s`;
    if (remaining <= 5000) box.classList.add("ending"); // alerte visuelle de fin d'extrait
    if (remaining <= 0) clearInterval(countdownInterval);
  }, 100);
}

/* ---------- Pochettes d'albums (API publique oEmbed Spotify, sans clé) ---------- */
const coverCache = new Map();

function prefetchCover(track) {
  if (!track || coverCache.has(track.spotify_uri) || typeof fetch !== "function") return;
  coverCache.set(track.spotify_uri, ""); // marque comme demandé (évite les doublons)
  const id = track.spotify_uri.split(":").pop();
  fetch(`https://open.spotify.com/oembed?url=https://open.spotify.com/track/${id}`)
    .then((r) => (r.ok ? r.json() : null))
    .then((data) => {
      if (data && data.thumbnail_url) {
        coverCache.set(track.spotify_uri, data.thumbnail_url);
        if (state.phase !== "setup" && state.phase !== "end") renderGame();
      }
    })
    .catch(() => {}); // hors-ligne : les cartes restent en mode texte
}

/* ---------- Ambiance : le fond se teinte selon la décennie révélée ---------- */
function setAmbiance(year) {
  if (!document.body || !document.body.dataset) return;
  const decade = Math.min(2020, Math.max(1950, Math.floor(year / 10) * 10));
  document.body.dataset.decade = String(decade).slice(2); // "50" … "20"
}

/* ---------- Wake Lock : l'écran reste allumé pendant la partie ---------- */
let wakeLock = null;

async function requestWakeLock() {
  if (!("wakeLock" in navigator)) return;
  try { wakeLock = await navigator.wakeLock.request("screen"); } catch (_) { /* refusé : tant pis */ }
}

function releaseWakeLock() {
  if (wakeLock) { wakeLock.release().catch(() => {}); wakeLock = null; }
}

// Le verrou saute quand l'onglet passe en arrière-plan : on le reprend au retour
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && state.phase !== "setup") requestWakeLock();
});

/* ---------- Filtrage et construction de la pioche ---------- */
function filterPool(cfg) {
  return TRACKS.filter((t) => {
    if (cfg.periode && (t.annee < cfg.periode[0] || t.annee > cfg.periode[1])) return false;
    if (cfg.genres.size > 0 && !cfg.genres.has(t.genre)) return false;
    if (cfg.origine === "fr100" && t.origine !== "francais") return false;
    if (cfg.origine === "int100" && t.origine !== "international") return false;
    return true;
  });
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDeck(cfg) {
  const pool = filterPool(cfg);
  if (cfg.origine !== "fr70") return shuffle(pool);
  // Tirage pondéré 70% français / 30% international
  const fr = shuffle(pool.filter((t) => t.origine === "francais"));
  const intl = shuffle(pool.filter((t) => t.origine === "international"));
  const deck = [];
  while (fr.length || intl.length) {
    const pickFr = intl.length === 0 || (fr.length > 0 && Math.random() < 0.7);
    deck.push(pickFr ? fr.pop() : intl.pop());
  }
  return deck;
}

/* ---------- Écran de configuration ---------- */
function renderTeamsEditor() {
  const box = document.getElementById("teams-editor");
  box.innerHTML = "";
  state.config.teams.forEach((team, i) => {
    const row = document.createElement("div");
    row.className = "team-row";

    const dot = document.createElement("button");
    dot.className = "color-dot";
    dot.style.background = team.color;
    dot.title = "Changer la couleur";
    dot.onclick = () => {
      const idx = TEAM_COLORS.indexOf(team.color);
      team.color = TEAM_COLORS[(idx + 1) % TEAM_COLORS.length];
      renderTeamsEditor();
    };

    const input = document.createElement("input");
    input.type = "text";
    input.value = team.name;
    input.maxLength = 24;
    input.oninput = () => { team.name = input.value; };

    row.append(dot, input);

    if (state.config.teams.length > 2) {
      const del = document.createElement("button");
      del.className = "btn-remove-team";
      del.innerHTML = icon("x");
      del.title = "Supprimer l'équipe";
      del.setAttribute("aria-label", "Supprimer le joueur");
      del.onclick = () => { state.config.teams.splice(i, 1); renderTeamsEditor(); updatePoolInfo(); };
      row.append(del);
    }
    box.append(row);
  });
}

function renderGenreChoices() {
  const box = document.getElementById("genre-choices");
  box.innerHTML = "";
  Object.entries(GENRE_LABELS).forEach(([value, label]) => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.textContent = label;
    chip.onclick = () => {
      if (state.config.genres.has(value)) state.config.genres.delete(value);
      else state.config.genres.add(value);
      chip.classList.toggle("selected");
      updatePoolInfo();
    };
    box.append(chip);
  });
}

function setupChoiceRow(rowId, onSelect) {
  const row = document.getElementById(rowId);
  row.querySelectorAll(".chip").forEach((chip) => {
    chip.onclick = () => {
      row.querySelectorAll(".chip").forEach((c) => c.classList.remove("selected"));
      chip.classList.add("selected");
      onSelect(chip.dataset.value);
      updatePoolInfo();
    };
  });
  row.querySelector(".chip").classList.add("selected");
}

function readPeriode(value) {
  if (value === "all") return null;
  if (value === "custom") {
    const min = parseInt(document.getElementById("periode-min").value, 10) || 1900;
    const max = parseInt(document.getElementById("periode-max").value, 10) || 2030;
    return [Math.min(min, max), Math.max(min, max)];
  }
  const [min, max] = value.split("-").map(Number);
  return [min, max];
}

function updatePoolInfo() {
  const pool = filterPool(state.config);
  const info = document.getElementById("pool-info");
  const needed = state.config.teams.length * state.config.target;
  const fr = pool.filter((t) => t.origine === "francais").length;
  let msg = `${pool.length} morceaux disponibles avec ces filtres (${fr} FR / ${pool.length - fr} inter.)`;
  info.classList.remove("warn");
  if (pool.length === 0) {
    msg = "Aucun morceau ne correspond à ces filtres !";
    info.classList.add("warn");
  } else if (pool.length < needed) {
    msg += ` — attention, il en faudrait idéalement ${needed} pour ${state.config.teams.length} joueurs × ${state.config.target} cartes.`;
    info.classList.add("warn");
  }
  info.textContent = msg;
  document.getElementById("btn-start").disabled = pool.length < state.config.teams.length + 2;
}

function initSetupScreen() {
  renderTeamsEditor();
  renderGenreChoices();

  document.getElementById("btn-add-team").onclick = () => {
    const n = state.config.teams.length;
    state.config.teams.push({ name: `Joueur ${n + 1}`, color: TEAM_COLORS[n % TEAM_COLORS.length] });
    renderTeamsEditor();
    updatePoolInfo();
  };

  setupChoiceRow("origine-choices", (v) => { state.config.origine = v; });
  setupChoiceRow("periode-choices", (v) => {
    document.getElementById("periode-custom").classList.toggle("hidden", v !== "custom");
    state.config.periodeChoice = v;
    state.config.periode = readPeriode(v);
  });
  ["periode-min", "periode-max"].forEach((id) => {
    document.getElementById(id).oninput = () => {
      if (state.config.periodeChoice === "custom") {
        state.config.periode = readPeriode("custom");
        updatePoolInfo();
      }
    };
  });

  document.getElementById("target-minus").onclick = () => setTarget(state.config.target - 1);
  document.getElementById("target-plus").onclick = () => setTarget(state.config.target + 1);
  document.getElementById("btn-start").onclick = startGame;

  updatePoolInfo();
}

function setTarget(v) {
  state.config.target = Math.max(3, Math.min(20, v));
  document.getElementById("target-value").textContent = state.config.target;
  updatePoolInfo();
}

/* ---------- Déroulement de la partie ---------- */
function startGame() {
  state.deck = buildDeck(state.config);
  state.teams = state.config.teams.map((t) => ({
    name: t.name.trim() || "Joueur",
    color: t.color,
    timeline: [],
    tokens: START_TOKENS, // jetons HITSTER
  }));
  // Carte de départ révélée pour chaque joueur (comme dans le jeu original)
  state.teams.forEach((team) => {
    const starter = state.deck.pop();
    if (starter) { team.timeline.push(starter); prefetchCover(starter); }
  });
  state.currentTeamIdx = 0;
  requestWakeLock();
  showScreen("game");
  beginTurn();
}

function beginTurn() {
  state.currentTrack = state.deck.pop();
  if (!state.currentTrack) { endGame(true); return; }
  state.phase = "listen";
  state.hasListened = false;
  state.pendingSlot = null;
  state.thief = null;
  state.lastResult = null;
  stopPlayback(); // coupe l'audio du tour précédent (lecture pendant la révélation)
  loadTrackInPlayer(state.currentTrack);
  prefetchCover(state.currentTrack); // la pochette sera prête pour la révélation
  document.getElementById("player-overlay").classList.remove("hidden");
  document.getElementById("countdown").classList.add("hidden");
  document.getElementById("reveal-modal").classList.add("hidden");
  document.getElementById("steal-modal").classList.add("hidden");
  document.getElementById("btn-listen").innerHTML = `${icon("play")} Écouter l'extrait (15 s)`;
  renderGame();
}

/* ---------- Jetons HITSTER : carte gratuite ---------- */
function onBuyClick() {
  const team = state.teams[state.currentTeamIdx];
  if (state.phase !== "listen" || team.tokens < BUY_COST || state.deck.length === 0) return;
  team.tokens -= BUY_COST;
  const card = state.deck.pop();
  prefetchCover(card);
  const idx = team.timeline.findIndex((t) => t.annee > card.annee);
  const pos = idx === -1 ? team.timeline.length : idx;
  team.timeline.splice(pos, 0, card);
  if (team.timeline.length >= state.config.target) { endGame(false); return; }
  renderGame();
  document.getElementById("game-instruction").innerHTML =
    `${icon("gift")} Carte offerte : ${card.annee} — ${escapeHtml(card.titre)} (${escapeHtml(card.artiste)}) rejoint ta frise !`;
}

function onListenClick() {
  playExtract();
  if (!state.hasListened) {
    state.hasListened = true;
    renderGame(); // active les emplacements de placement
    // Sur téléphone, la frise est sous la ligne de flottaison : on l'amène en vue
    const tl = document.getElementById("active-timeline");
    if (tl.scrollIntoView) tl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  document.getElementById("btn-listen").innerHTML = `${icon("replay")} Réécouter l'extrait`;
}

/* ---------- Placement, interception (règle HITSTER) et révélation ---------- */
function isSlotCorrect(timeline, slotIndex, year) {
  const left = slotIndex > 0 ? timeline[slotIndex - 1].annee : -Infinity;
  const right = slotIndex < timeline.length ? timeline[slotIndex].annee : Infinity;
  return left <= year && year <= right;
}

function placeAt(slotIndex) {
  if (state.phase === "steal-place") {
    state.thief.slotIndex = slotIndex;
    resolveReveal();
    return;
  }
  if (state.phase !== "listen" || !state.hasListened) return;
  stopPlayback();
  state.pendingSlot = slotIndex;

  // Interception : les adversaires avec au moins 1 jeton peuvent contester
  const challengers = state.teams
    .map((t, i) => ({ team: t, idx: i }))
    .filter(({ team, idx }) => idx !== state.currentTeamIdx && team.tokens >= STEAL_COST);
  if (challengers.length === 0) { resolveReveal(); return; }

  state.phase = "steal";
  renderGame();
  openStealModal(challengers);
}

function openStealModal(challengers) {
  const active = state.teams[state.currentTeamIdx];
  document.getElementById("steal-info").innerHTML =
    `<strong style="color:${active.color}">${escapeHtml(active.name)}</strong> a placé la carte
     (emplacement marqué <strong>?</strong> sur sa frise).<br>
     Un adversaire pense que c'est raté ? Criez « HITSTER » et posez ${STEAL_COST} ${coinIcon()} sur sa frise,
     à l'endroit où la carte va vraiment : si vous avez raison, elle est pour vous !`;
  const box = document.getElementById("steal-buttons");
  box.innerHTML = "";
  challengers.forEach(({ team, idx }) => {
    const b = document.createElement("button");
    b.className = "btn";
    b.innerHTML = `${icon("card")} <strong style="color:${team.color}">${escapeHtml(team.name)}</strong> crie HITSTER (−${STEAL_COST} ${coinIcon()})`;
    b.onclick = () => startSteal(idx);
    box.append(b);
  });
  const none = document.createElement("button");
  none.className = "btn btn-primary";
  none.textContent = "Personne ne conteste → Révéler";
  none.onclick = () => { document.getElementById("steal-modal").classList.add("hidden"); resolveReveal(); };
  box.append(none);
  document.getElementById("steal-modal").classList.remove("hidden");
}

function startSteal(teamIdx) {
  state.teams[teamIdx].tokens -= STEAL_COST; // le jeton est dépensé, gagné ou perdu
  state.thief = { teamIdx, slotIndex: null };
  state.phase = "steal-place";
  document.getElementById("steal-modal").classList.add("hidden");
  renderGame();
}

function resolveReveal() {
  const team = state.teams[state.currentTeamIdx];
  const year = state.currentTrack.annee;
  const correct = isSlotCorrect(team.timeline, state.pendingSlot, year);

  let stolen = false;
  if (correct) {
    team.timeline.splice(state.pendingSlot, 0, state.currentTrack);
  } else if (state.thief) {
    // Le contestataire a désigné le « vrai » emplacement sur la frise du joueur actif ;
    // s'il a raison, la carte rejoint sa propre frise, bien placée.
    stolen = isSlotCorrect(team.timeline, state.thief.slotIndex, year);
    if (stolen) {
      const thiefTeam = state.teams[state.thief.teamIdx];
      const idx = thiefTeam.timeline.findIndex((t) => t.annee > year);
      thiefTeam.timeline.splice(idx === -1 ? thiefTeam.timeline.length : idx, 0, state.currentTrack);
    }
  }
  state.lastResult = { correct, slotIndex: state.pendingSlot, stolen };
  state.phase = "reveal";

  // Retour haptique discret au verdict (si le téléphone le permet)
  if (navigator.vibrate) navigator.vibrate(correct ? 30 : [40, 60, 40]);

  setAmbiance(year); // le fond voyage dans la décennie du morceau

  // Révèle le lecteur (pochette, titre, artiste visibles)
  document.getElementById("player-overlay").classList.add("hidden");
  renderGame();
  renderReveal(correct, stolen, team);
}

function renderReveal(correct, stolen, team) {
  const t = state.currentTrack;
  const thiefTeam = state.thief ? state.teams[state.thief.teamIdx] : null;
  const verdict = document.getElementById("reveal-verdict");
  verdict.innerHTML = correct ? `${icon("check")} Bien joué !` : stolen ? `${icon("card")} Intercepté !` : `${icon("x")} Raté !`;
  verdict.className = "reveal-verdict " + (correct ? "ok" : "ko");

  const owner = correct ? team : stolen ? thiefTeam : null;
  const won = owner && owner.timeline.length >= state.config.target;
  const cover = coverCache.get(t.spotify_uri) || "";
  document.getElementById("reveal-info").innerHTML = `
    <div class="flip-stage">
      <div class="flip-card" id="flip-card">
        <div class="flip-face flip-back"><span>?</span></div>
        <div class="flip-face flip-front"${cover ? ` style="background-image:linear-gradient(180deg, rgba(10,6,24,0.2), rgba(10,6,24,0.78)), url('${cover}')"` : ""}>
          <span class="flip-year">${t.annee}</span>
          <span class="flip-title">${escapeHtml(t.titre)}</span>
          <span class="flip-artist">${escapeHtml(t.artiste)}</span>
        </div>
      </div>
    </div>
    <div class="reveal-details">
      <div class="reveal-bonus">
        <button id="toggle-titre" class="bonus-toggle">${icon("target")} Titre trouvé</button>
        <button id="toggle-artiste" class="bonus-toggle">${icon("target")} Artiste trouvé</button>
      </div>
      <span class="bonus-hint">${escapeHtml(team.name)} a nommé le titre et l'artiste ? Cochez les deux = +1 ${coinIcon()} (${MAX_TOKENS} max), même si la carte est mal placée.</span><br>
      ${thiefTeam && !correct && !stolen ? `<span class="track-artist">${escapeHtml(thiefTeam.name)} a contesté… mais s'est trompé d'emplacement aussi. Jeton perdu !</span><br>` : ""}
      ${thiefTeam && correct ? `<span class="track-artist">${escapeHtml(thiefTeam.name)} a contesté pour rien : le placement était bon. Jeton perdu !</span><br>` : ""}
      ${owner
        ? `<strong style="color:${owner.color}">${escapeHtml(owner.name)}</strong> ${stolen ? "vole la carte" : "garde la carte"} : ${owner.timeline.length} / ${state.config.target}`
        : "Le morceau est écarté."}
    </div>
  `;
  // Suspense : la carte arrive face cachée, puis se retourne
  setTimeout(() => {
    const fc = document.getElementById("flip-card");
    if (fc) fc.classList.add("flipped");
  }, 450);
  // Le verdict n'apparaît qu'une fois la carte retournée (rejoue l'animation à chaque tour)
  if (verdict.style) {
    verdict.style.animation = "none";
    void verdict.offsetWidth;
    verdict.style.animation = "";
  }
  ["toggle-titre", "toggle-artiste"].forEach((id) => {
    const el = document.getElementById(id);
    el.onclick = () => el.classList.toggle("on");
  });
  const btn = document.getElementById("btn-next-turn");
  btn.innerHTML = won ? `${icon("trophy")} Voir les résultats` : "Joueur suivant →";
  btn.onclick = () => {
    const both = document.getElementById("toggle-titre").classList.contains("on")
      && document.getElementById("toggle-artiste").classList.contains("on");
    if (both) team.tokens = Math.min(MAX_TOKENS, team.tokens + 1);
    if (won) { endGame(false); return; }
    state.currentTeamIdx = (state.currentTeamIdx + 1) % state.teams.length;
    beginTurn();
  };
  document.getElementById("reveal-modal").classList.remove("hidden");
}

function launchConfetti() {
  const box = document.getElementById("confetti");
  box.innerHTML = "";
  // Rendu couleur fiable partout (🎵/🪙 tombent en glyphes monochromes sur certains systèmes)
  const emojis = ["🎉", "🎊", "✨", "⭐"];
  for (let i = 0; i < 36; i++) {
    const s = document.createElement("span");
    s.textContent = emojis[i % emojis.length];
    s.style.left = `${Math.random() * 100}%`;
    s.style.animationDuration = `${2.2 + Math.random() * 2.5}s`;
    s.style.animationDelay = `${Math.random() * 1.2}s`;
    box.append(s);
  }
  setTimeout(() => { box.innerHTML = ""; }, 7000); // nettoyage après la pluie
}

function endGame(deckExhausted) {
  state.phase = "end";
  stopPlayback();
  const ranking = [...state.teams].sort(
    (a, b) => b.timeline.length - a.timeline.length || b.tokens - a.tokens
  );
  const winner = ranking[0];
  document.getElementById("end-title").innerHTML = deckExhausted
    ? `${icon("note")} Pioche épuisée — fin de partie !`
    : `${icon("trophy")} ${escapeHtml(winner.name)} remporte la partie !`;
  if (!deckExhausted) launchConfetti();

  document.getElementById("end-ranking").innerHTML = ranking.map((team, i) => `
    <div class="rank-row" style="--i:${i}">
      <span class="medal${i < 3 ? ` rank-${i + 1}` : ""}">${i + 1}</span>
      <span class="dot" style="background:${team.color}"></span>
      <span class="name">${escapeHtml(team.name)}</span>
      <span class="pts">${team.timeline.length} carte${team.timeline.length > 1 ? "s" : ""} · ${team.tokens} ${coinIcon()}</span>
    </div>
  `).join("");
  showScreen("end");
}

/* ---------- Rendu de l'écran de jeu ---------- */
function renderGame() {
  const team = state.teams[state.currentTeamIdx];
  const stealing = state.phase === "steal-place";
  // Même pendant une contestation, c'est la frise du joueur actif qui est affichée :
  // le contestataire y désigne l'emplacement où la carte va vraiment (règle HITSTER)
  const shownTeam = team;
  const thiefTeam = stealing ? state.teams[state.thief.teamIdx] : null;

  const banner = document.getElementById("turn-banner");
  const bannerKey = stealing ? `steal-${state.thief.teamIdx}` : `turn-${state.currentTeamIdx}`;
  if (banner.dataset.key !== bannerKey && banner.style.setProperty) {
    // Nouveau tour ou contestation : rejoue l'animation d'entrée du bandeau
    banner.style.animation = "none";
    void banner.offsetWidth;
    banner.style.animation = "";
  }
  banner.dataset.key = bannerKey;
  banner.innerHTML = stealing
    ? `${icon("card")} ${escapeHtml(thiefTeam.name)} conteste — passez-lui le téléphone !`
    : `${icon("smartphone")} Au tour de ${escapeHtml(team.name)}`;
  if (banner.style.setProperty) {
    banner.style.setProperty("--team-color", stealing ? thiefTeam.color : team.color);
  }

  const spotlight = stealing ? thiefTeam : team;
  document.getElementById("scoreboard").innerHTML = state.teams.map((t) => `
    <span class="score-chip${t === spotlight ? " active" : ""}" style="--team-color:${t.color}">
      <span class="dot" style="background:${t.color}"></span>
      ${escapeHtml(t.name)} <strong>${t.timeline.length}</strong>/${state.config.target}
      <span class="bonus-pts">· ${t.tokens} ${coinIcon()}</span>
      <span class="chip-bar"><span style="width:${Math.min(100, (t.timeline.length / state.config.target) * 100)}%"></span></span>
    </span>
  `).join("");

  document.getElementById("game-instruction").innerHTML =
    state.phase === "reveal" || state.phase === "steal"
      ? ""
      : stealing
        ? `Pose ton jeton sur la frise de ${escapeHtml(team.name)} : clique l'emplacement ${icon("plus")} où la carte va VRAIMENT`
        : state.hasListened
          ? `Annoncez titre + artiste à voix haute (bonus ${coinIcon()} à la révélation), puis placez le morceau sur un emplacement ${icon("plus")}`
          : "Écoutez l'extrait, puis placez le morceau sur votre frise.";

  const buy = document.getElementById("btn-buy");
  buy.disabled = state.phase !== "listen" || team.tokens < BUY_COST || state.deck.length === 0;

  document.getElementById("active-timeline-title").innerHTML =
    `Frise de <span style="color:${shownTeam.color}">${escapeHtml(shownTeam.name)}</span> — ${state.deck.length} morceau${state.deck.length > 1 ? "x" : ""} dans la pioche`;

  renderTimeline(shownTeam);
  renderOtherTimelines(shownTeam);
}

function renderTimeline(team) {
  const box = document.getElementById("active-timeline");
  box.innerHTML = "";
  const canPlace = (state.phase === "listen" && state.hasListened) || state.phase === "steal-place";
  const justPlaced = state.phase === "reveal" && state.lastResult && state.lastResult.correct
    ? state.lastResult.slotIndex : -1;
  // Carte mystère « ? » sur l'emplacement choisi, tant que la révélation n'a pas eu lieu
  const mysterySlot = (state.phase === "steal" || state.phase === "steal-place")
    && team === state.teams[state.currentTeamIdx] ? state.pendingSlot : null;

  const addSlot = (index) => {
    if (index === mysterySlot) {
      const mystery = document.createElement("div");
      mystery.className = "timeline-card mystery";
      mystery.innerHTML = `<span class="year">?</span><span class="title">Morceau mystère</span>`;
      box.append(mystery);
      return;
    }
    const slot = document.createElement("button");
    slot.className = "slot";
    slot.innerHTML = icon("plus");
    slot.disabled = !canPlace;
    slot.title = "Placer le morceau ici";
    slot.setAttribute("aria-label", "Placer le morceau ici");
    slot.onclick = () => placeAt(index);
    box.append(slot);
  };

  addSlot(0);
  team.timeline.forEach((track, i) => {
    const card = document.createElement("div");
    const cover = coverCache.get(track.spotify_uri);
    card.className = "timeline-card" + (i === justPlaced ? " just-placed" : "") + (cover ? " has-cover" : "");
    card.style.borderTopColor = team.color;
    if (cover) {
      card.style.backgroundImage =
        `linear-gradient(180deg, rgba(10,6,24,0.25), rgba(10,6,24,0.85)), url('${cover}')`;
    }
    card.innerHTML = `
      <span class="year">${track.annee}</span>
      <span class="title">${escapeHtml(track.titre)}</span>
      <span class="artist">${escapeHtml(track.artiste)}</span>
    `;
    box.append(card);
    addSlot(i + 1);
  });
}

function renderOtherTimelines(shownTeam) {
  const box = document.getElementById("other-timelines");
  box.innerHTML = "";
  state.teams.forEach((team) => {
    if (team === shownTeam) return;
    const panel = document.createElement("div");
    panel.className = "panel";
    panel.innerHTML = `
      <h3><span class="dot" style="background:${team.color}"></span><span>${escapeHtml(team.name)} — ${team.timeline.length}/${state.config.target} · ${team.tokens} ${coinIcon()}</span></h3>
      <div class="mini-timeline">
        ${team.timeline.map((t) => `<span class="mini-card" title="${escapeHtml(t.titre)} — ${escapeHtml(t.artiste)}">${t.annee}</span>`).join("")
          || '<span class="timeline-empty">Frise vide</span>'}
      </div>
    `;
    box.append(panel);
  });
}

/* ---------- Navigation & utilitaires ---------- */
function showScreen(name) {
  ["setup", "game", "end"].forEach((s) => {
    document.getElementById(`screen-${s}`).classList.toggle("hidden", s !== name);
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

/* ---------- Initialisation ---------- */
document.getElementById("btn-listen").onclick = onListenClick;
document.getElementById("btn-buy").onclick = onBuyClick;
document.getElementById("btn-replay").onclick = startGame;
document.getElementById("btn-new-game").onclick = () => {
  stopPlayback();
  releaseWakeLock();
  state.phase = "setup";
  showScreen("setup");
  updatePoolInfo();
};
initSetupScreen();
