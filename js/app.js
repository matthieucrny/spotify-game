/* ============================================================
   Blind Test Chronologique — logique de jeu (V1)
   ============================================================ */

const EXTRACT_MS = 20000; // durée d'écoute de l'extrait
const TEAM_COLORS = ["#1db954", "#4b9fe8", "#e05563", "#e8b04b", "#a96be8", "#e87bb2", "#4bd0c3", "#e8804b"];
const GENRE_LABELS = {
  pop: "Pop", rock: "Rock", rap: "Rap / Hip-Hop", electro: "Électro",
  variete: "Variété", rnb: "R&B / Soul", "disco-funk": "Disco / Funk",
};

const START_TOKENS = 2;   // jetons HITSTER de départ par joueur
const SKIP_COST = 1;      // passer un morceau
const STEAL_COST = 1;     // intercepter un placement adverse
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
  thief: null,              // { teamIdx, slotIndex } si un adversaire intercepte
  lastResult: null,
  guess: { transcript: "", titreOk: false, artisteOk: false, guessed: false },
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
  const start = Date.now();
  countdownInterval = setInterval(() => {
    const remaining = Math.max(0, EXTRACT_MS - (Date.now() - start));
    bar.style.transform = `scaleX(${remaining / EXTRACT_MS})`;
    label.textContent = `${Math.ceil(remaining / 1000)} s`;
    if (remaining <= 0) clearInterval(countdownInterval);
  }, 100);
}

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
      del.textContent = "✕";
      del.title = "Supprimer l'équipe";
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
    if (starter) team.timeline.push(starter);
  });
  state.currentTeamIdx = 0;
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
  state.guess = { transcript: "", titreOk: false, artisteOk: false, guessed: false };
  stopPlayback(); // coupe l'audio du tour précédent (lecture pendant la révélation)
  stopMic();
  loadTrackInPlayer(state.currentTrack);
  document.getElementById("player-overlay").classList.remove("hidden");
  document.getElementById("countdown").classList.add("hidden");
  document.getElementById("reveal-modal").classList.add("hidden");
  document.getElementById("steal-modal").classList.add("hidden");
  document.getElementById("btn-listen").textContent = "▶ Écouter l'extrait (20 s)";
  document.getElementById("guess-zone").classList.add("hidden");
  document.getElementById("guess-transcript").textContent = "";
  renderGame();
}

/* ---------- Jetons HITSTER : passer / carte gratuite ---------- */
function onSkipClick() {
  const team = state.teams[state.currentTeamIdx];
  if (state.phase !== "listen" || team.tokens < SKIP_COST) return;
  team.tokens -= SKIP_COST;
  beginTurn(); // même joueur, nouveau morceau (l'ancien est défaussé)
}

function onBuyClick() {
  const team = state.teams[state.currentTeamIdx];
  if (state.phase !== "listen" || team.tokens < BUY_COST || state.deck.length === 0) return;
  team.tokens -= BUY_COST;
  const card = state.deck.pop();
  const idx = team.timeline.findIndex((t) => t.annee > card.annee);
  const pos = idx === -1 ? team.timeline.length : idx;
  team.timeline.splice(pos, 0, card);
  if (team.timeline.length >= state.config.target) { endGame(false); return; }
  renderGame();
  document.getElementById("game-instruction").textContent =
    `🎁 Carte offerte : ${card.annee} — ${card.titre} (${card.artiste}) rejoint ta frise !`;
}

function onListenClick() {
  playExtract();
  if (!state.hasListened) {
    state.hasListened = true;
    document.getElementById("guess-zone").classList.remove("hidden");
    renderGame(); // active les emplacements de placement
  }
  document.getElementById("btn-listen").textContent = "↻ Réécouter l'extrait";
}

/* ---------- Paris bonus à l'oral (reconnaissance vocale) ---------- */
const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition || null;
let recognition = null;

function normGuess(s) {
  return String(s).toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/\(.*?\)|\[.*?\]/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (!m || !n) return Math.max(m, n);
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

// La réponse (titre ou artiste) est-elle contenue dans la phrase prononcée ?
function matchInTranscript(transcript, answer) {
  const t = normGuess(transcript);
  if (!t) return false;
  // "Luis Fonsi feat. Daddy Yankee" : l'artiste principal suffit
  const variants = new Set([normGuess(answer), normGuess(answer.split(/\bfeat\.?\b/i)[0])]);
  // Article initial facultatif ("champs élysées" vaut "Les Champs-Élysées")
  for (const v of [...variants]) {
    const stripped = v.replace(/^(les|le|la|l|un|une|des|du|de|d)\s+/, "");
    if (stripped) variants.add(stripped);
  }
  const words = t.split(" ");
  for (const a of variants) {
    if (!a) continue;
    if (t.includes(a)) return true;
    // Fenêtre glissante de mots, comparée sans espaces : la reconnaissance vocale
    // découpe parfois autrement ("papa où t es" vs "Papaoutai")
    const aFlat = a.replace(/ /g, "");
    const k = a.split(" ").length;
    const tol = aFlat.length >= 8 ? 2 : 1;
    for (const size of [k - 1, k, k + 1, k + 2]) {
      if (size < 1) continue;
      for (let i = 0; i + size <= words.length; i++) {
        const win = words.slice(i, i + size).join("");
        if (win.length >= 3 && levenshtein(win, aFlat) <= tol) return true;
      }
    }
  }
  return false;
}

function evaluateTranscripts(alternatives) {
  const track = state.currentTrack;
  state.guess.guessed = true;
  state.guess.transcript = alternatives[0] || "";
  state.guess.titreOk = alternatives.some((t) => matchInTranscript(t, track.titre));
  state.guess.artisteOk = alternatives.some((t) => matchInTranscript(t, track.artiste));
  document.getElementById("guess-transcript").textContent =
    `Vous avez dit : « ${state.guess.transcript} » — verdict à la révélation ! (recliquez sur 🎤 pour réessayer)`;
}

function startMic() {
  if (!SpeechRec || state.phase !== "listen") return;
  stopMic();
  const btn = document.getElementById("btn-mic");
  recognition = new SpeechRec();
  recognition.lang = "fr-FR";
  recognition.interimResults = false;
  recognition.maxAlternatives = 5;
  btn.textContent = "🎙️ Parlez… (titre et artiste)";
  btn.classList.add("listening");
  recognition.onresult = (e) => {
    const alts = Array.from(e.results[0]).map((r) => r.transcript);
    evaluateTranscripts(alts);
  };
  recognition.onerror = (e) => {
    const msg = e.error === "not-allowed"
      ? "Micro refusé — vous pourrez valider à la main lors de la révélation."
      : "Rien entendu — recliquez sur 🎤 pour réessayer.";
    document.getElementById("guess-transcript").textContent = msg;
  };
  recognition.onend = () => {
    btn.textContent = "🎤 Deviner à l'oral";
    btn.classList.remove("listening");
  };
  try { recognition.start(); } catch (_) { /* déjà démarré */ }
}

function stopMic() {
  if (recognition) {
    recognition.onresult = recognition.onerror = recognition.onend = null;
    try { recognition.abort(); } catch (_) {}
    recognition = null;
  }
  const btn = document.getElementById("btn-mic");
  btn.textContent = "🎤 Deviner à l'oral";
  btn.classList.remove("listening");
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
  stopMic();
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
     Un adversaire pense que c'est raté ? Interceptez pour ${STEAL_COST} 🪙 :
     si le placement est bien faux et que le vôtre est juste, la carte est pour vous !`;
  const box = document.getElementById("steal-buttons");
  box.innerHTML = "";
  challengers.forEach(({ team, idx }) => {
    const b = document.createElement("button");
    b.className = "btn";
    b.innerHTML = `🃏 <strong style="color:${team.color}">${escapeHtml(team.name)}</strong> intercepte (−${STEAL_COST} 🪙)`;
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
    const thiefTeam = state.teams[state.thief.teamIdx];
    stolen = isSlotCorrect(thiefTeam.timeline, state.thief.slotIndex, year);
    if (stolen) thiefTeam.timeline.splice(state.thief.slotIndex, 0, state.currentTrack);
  }
  state.lastResult = { correct, slotIndex: state.pendingSlot, stolen };
  state.phase = "reveal";

  // Révèle le lecteur (pochette, titre, artiste visibles)
  document.getElementById("player-overlay").classList.add("hidden");
  renderGame();
  renderReveal(correct, stolen, team);
}

function renderReveal(correct, stolen, team) {
  const t = state.currentTrack;
  const thiefTeam = state.thief ? state.teams[state.thief.teamIdx] : null;
  const verdict = document.getElementById("reveal-verdict");
  verdict.textContent = correct ? "✔ Bien joué !" : stolen ? "🃏 Intercepté !" : "✘ Raté !";
  verdict.className = "reveal-verdict " + (correct ? "ok" : "ko");

  const owner = correct ? team : stolen ? thiefTeam : null;
  const won = owner && owner.timeline.length >= state.config.target;
  const g = state.guess;
  document.getElementById("reveal-info").innerHTML = `
    <span class="big-year">${t.annee}</span>
    <span class="track-name">${escapeHtml(t.titre)}</span><br>
    <span class="track-artist">${escapeHtml(t.artiste)}</span><br>
    ${g.guessed ? `<span class="guess-transcript">Vous avez dit : « ${escapeHtml(g.transcript)} »</span><br>` : ""}
    <div class="reveal-bonus">
      <button id="toggle-titre" class="bonus-toggle${g.titreOk ? " on" : ""}">🎯 Titre trouvé</button>
      <button id="toggle-artiste" class="bonus-toggle${g.artisteOk ? " on" : ""}">🎯 Artiste trouvé</button>
    </div>
    <span class="bonus-hint">Titre + artiste tous les deux corrects = +1 🪙 — corrigez à la main si besoin.</span><br>
    ${thiefTeam && !correct && !stolen ? `<span class="track-artist">${escapeHtml(thiefTeam.name)} a intercepté… et s'est trompé aussi. Jeton perdu !</span><br>` : ""}
    ${thiefTeam && correct ? `<span class="track-artist">${escapeHtml(thiefTeam.name)} a intercepté pour rien : le placement était bon. Jeton perdu !</span><br>` : ""}
    ${owner
      ? `<strong style="color:${owner.color}">${escapeHtml(owner.name)}</strong> ${stolen ? "vole la carte" : "garde la carte"} : ${owner.timeline.length} / ${state.config.target}`
      : "Le morceau est écarté."}
  `;
  ["toggle-titre", "toggle-artiste"].forEach((id) => {
    const el = document.getElementById(id);
    el.onclick = () => el.classList.toggle("on");
  });
  const btn = document.getElementById("btn-next-turn");
  btn.textContent = won ? "🏆 Voir les résultats" : "Joueur suivant →";
  btn.onclick = () => {
    const both = document.getElementById("toggle-titre").classList.contains("on")
      && document.getElementById("toggle-artiste").classList.contains("on");
    if (both) team.tokens += 1;
    if (won) { endGame(false); return; }
    state.currentTeamIdx = (state.currentTeamIdx + 1) % state.teams.length;
    beginTurn();
  };
  document.getElementById("reveal-modal").classList.remove("hidden");
}

function endGame(deckExhausted) {
  state.phase = "end";
  stopPlayback();
  const ranking = [...state.teams].sort(
    (a, b) => b.timeline.length - a.timeline.length || b.tokens - a.tokens
  );
  const winner = ranking[0];
  document.getElementById("end-title").textContent = deckExhausted
    ? "🎵 Pioche épuisée — fin de partie !"
    : `🏆 ${winner.name} remporte la partie !`;

  const medals = ["🥇", "🥈", "🥉"];
  document.getElementById("end-ranking").innerHTML = ranking.map((team, i) => `
    <div class="rank-row">
      <span class="medal">${medals[i] || i + 1 + "."}</span>
      <span class="dot" style="background:${team.color}"></span>
      <span class="name">${escapeHtml(team.name)}</span>
      <span class="pts">${team.timeline.length} carte${team.timeline.length > 1 ? "s" : ""} · ${team.tokens} 🪙</span>
    </div>
  `).join("");
  showScreen("end");
}

/* ---------- Rendu de l'écran de jeu ---------- */
function renderGame() {
  const team = state.teams[state.currentTeamIdx];
  const stealing = state.phase === "steal-place";
  // Pendant une interception, c'est la frise du voleur qui est affichée et jouable
  const shownTeam = stealing ? state.teams[state.thief.teamIdx] : team;

  const banner = document.getElementById("turn-banner");
  banner.textContent = stealing
    ? `🃏 ${shownTeam.name} intercepte — passez-lui le téléphone !`
    : `📱 Au tour de ${team.name}`;
  banner.style.borderLeftColor = shownTeam.color;

  document.getElementById("scoreboard").innerHTML = state.teams.map((t) => `
    <span class="score-chip">
      <span class="dot" style="background:${t.color}"></span>
      ${escapeHtml(t.name)} <strong>${t.timeline.length}</strong>/${state.config.target}
      <span class="bonus-pts">· ${t.tokens} 🪙</span>
    </span>
  `).join("");

  document.getElementById("game-instruction").textContent =
    state.phase === "reveal" || state.phase === "steal"
      ? ""
      : stealing
        ? "Place la carte là où TU penses qu'elle va, dans TA frise ⊕"
        : state.hasListened
          ? "Annoncez titre + artiste au micro 🎤 (bonus 🪙), puis placez le morceau sur un emplacement ⊕"
          : "Écoutez l'extrait, puis placez le morceau sur votre frise.";

  const skip = document.getElementById("btn-skip");
  const buy = document.getElementById("btn-buy");
  skip.disabled = state.phase !== "listen" || team.tokens < SKIP_COST;
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
    slot.textContent = "⊕";
    slot.disabled = !canPlace;
    slot.title = "Placer le morceau ici";
    slot.onclick = () => placeAt(index);
    box.append(slot);
  };

  addSlot(0);
  team.timeline.forEach((track, i) => {
    const card = document.createElement("div");
    card.className = "timeline-card" + (i === justPlaced ? " just-placed" : "");
    card.style.borderTopColor = team.color;
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
      <h3><span class="dot" style="background:${team.color}"></span>${escapeHtml(team.name)} — ${team.timeline.length}/${state.config.target} · ${team.tokens} 🪙</h3>
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
document.getElementById("btn-skip").onclick = onSkipClick;
document.getElementById("btn-buy").onclick = onBuyClick;
document.getElementById("btn-mic").onclick = startMic;
if (!SpeechRec) {
  // Navigateur sans reconnaissance vocale : annonce à l'oral quand même,
  // la validation se fait à la main sur l'écran de révélation.
  document.getElementById("btn-mic").classList.add("hidden");
  document.querySelector(".guess-label").innerHTML =
    "Bonus HITSTER — annoncez le titre <strong>et</strong> l'artiste à voix haute, validation à la révélation (les deux corrects = +1 jeton 🪙)";
}
document.getElementById("btn-replay").onclick = startGame;
document.getElementById("btn-new-game").onclick = () => {
  stopPlayback();
  showScreen("setup");
  updatePoolInfo();
};
initSetupScreen();
