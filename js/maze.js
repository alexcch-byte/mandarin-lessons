// Maze game — a sub-game for children who can't read yet.
// A Chinese word is spoken; the child taps the matching picture. A right answer
// moves the explorer one step along the path through the maze; reaching the
// star finishes the level. Levels follow the lesson plan, starting with colours
// and shapes, and unlock one at a time. Uses window.HelloHuayu (js/app.js) for
// speech and the lesson data.
(function () {
  "use strict";

  var STORAGE_KEY = "mazeProgress";
  // Curriculum order. Anything not listed follows in manifest order.
  var LESSON_ORDER = ["colours-shapes", "preschool-basics", "miss-panda", "song-topics",
    "lesson-1", "lesson-2", "lesson-3", "lesson-4", "lesson-5",
    "homework-1", "homework-2", "homework-3", "homework-4"];
  // Emoji used as a card's "picture" for every word of a chapter are not useful.
  var GENERIC_EMOJI = { "🗣️": 1, "🧩": 1, "🀄": 1, "🎵": 1 };

  var CELL = 56;       // maze cell size (px, in SVG units)
  var COLS = 5, ROWS = 4;
  var MIN_STEPS = 8, MAX_STEPS = 12;

  var api = function () { return window.HelloHuayu; };
  var root, body, titleEl, progressEl, backBtn;
  var progress = loadProgress();
  var levels = [];
  var game = null;

  // ---------- storage (per-device conveniences; must never throw) ----------
  function loadProgress() {
    try {
      var p = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return { stars: p.stars || {}, unlockAll: !!p.unlockAll };
    } catch (e) { return { stars: {}, unlockAll: false }; }
  }
  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (e) {}
  }

  // ---------- helpers ----------
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function say(text) {
    if (api() && api().speak) api().speak(text, null, { noEnglish: true });
  }

  // ---------- levels built from the lessons ----------
  function visualOf(v) {
    if (v.swatch) return { kind: "swatch", value: v.swatch, key: "s:" + v.swatch };
    if (v.svg) return { kind: "svg", value: v.svg, key: "g:" + v.svg };
    if (v.emoji && !GENERIC_EMOJI[v.emoji]) return { kind: "emoji", value: v.emoji, key: "e:" + v.emoji };
    return null;
  }

  function rank(lesson, idx) {
    var i = LESSON_ORDER.indexOf(lesson.id);
    return i >= 0 ? i : 100 + idx;
  }

  function lessonLabel(lesson) {
    if (lesson.category) return (lesson.icon || "📘") + " " + lesson.titleEnglish;
    return "Lesson " + lesson.lessonNumber + " — " + lesson.titleEnglish;
  }

  function buildLevels() {
    var lessons = (api() && api().lessons()) || [];
    var ordered = lessons.map(function (l, i) { return { l: l, r: rank(l, i) }; })
      .sort(function (a, b) { return a.r - b.r; })
      .map(function (x) { return x.l; });
    var out = [];
    ordered.forEach(function (lesson) {
      var vocab = lesson.vocabulary || [];
      var groups = [];
      vocab.forEach(function (v) { if (v.group && groups.indexOf(v.group) < 0) groups.push(v.group); });
      if (!groups.length) groups = [null];
      groups.forEach(function (g) {
        var seen = {};
        var items = [];
        vocab.forEach(function (v) {
          if (g !== null && v.group !== g) return;
          var vis = visualOf(v);
          if (!vis || seen[vis.key]) return;
          seen[vis.key] = true;
          items.push({ say: v.say || v.hanzi, hanzi: v.hanzi, visual: vis });
        });
        if (items.length < 4) return;
        out.push({
          id: lesson.id + "|" + (g || ""),
          title: g ? g : lessonLabel(lesson),
          subtitle: g ? lessonLabel(lesson) : "",
          items: items
        });
      });
    });
    return out;
  }

  function isUnlocked(i) {
    if (progress.unlockAll || i === 0) return true;
    return !!progress.stars[levels[i - 1].id];
  }

  // ---------- maze generation ----------
  function generateMaze(cols, rows) {
    // cells[r][c] = { n, e, s, w } walls (true = wall present)
    var cells = [];
    for (var r = 0; r < rows; r++) {
      cells.push([]);
      for (var c = 0; c < cols; c++) cells[r].push({ n: true, e: true, s: true, w: true, seen: false });
    }
    var stack = [[0, 0]];
    cells[0][0].seen = true;
    var dirs = [["n", 0, -1, "s"], ["e", 1, 0, "w"], ["s", 0, 1, "n"], ["w", -1, 0, "e"]];
    while (stack.length) {
      var cur = stack[stack.length - 1];
      var opts = shuffle(dirs).filter(function (d) {
        var nc = cur[0] + d[1], nr = cur[1] + d[2];
        return nc >= 0 && nc < cols && nr >= 0 && nr < rows && !cells[nr][nc].seen;
      });
      if (!opts.length) { stack.pop(); continue; }
      var d = opts[0];
      var nc = cur[0] + d[1], nr = cur[1] + d[2];
      cells[cur[1]][cur[0]][d[0]] = false;
      cells[nr][nc][d[3]] = false;
      cells[nr][nc].seen = true;
      stack.push([nc, nr]);
    }
    return cells;
  }

  // Shortest path from the top-left to the bottom-right cell.
  function solve(cells, cols, rows) {
    var prev = {};
    var q = [[0, 0]];
    prev["0,0"] = null;
    var moves = [["n", 0, -1], ["e", 1, 0], ["s", 0, 1], ["w", -1, 0]];
    while (q.length) {
      var cur = q.shift();
      if (cur[0] === cols - 1 && cur[1] === rows - 1) break;
      moves.forEach(function (m) {
        if (cells[cur[1]][cur[0]][m[0]]) return;
        var nc = cur[0] + m[1], nr = cur[1] + m[2];
        var key = nc + "," + nr;
        if (prev.hasOwnProperty(key)) return;
        prev[key] = cur;
        q.push([nc, nr]);
      });
    }
    var path = [];
    var node = [cols - 1, rows - 1];
    while (node) { path.unshift(node); node = prev[node[0] + "," + node[1]]; }
    return path;
  }

  function makeMaze() {
    var best = null;
    for (var i = 0; i < 80; i++) {
      var cells = generateMaze(COLS, ROWS);
      var path = solve(cells, COLS, ROWS);
      var steps = path.length - 1;
      if (!best || Math.abs(steps - 10) < Math.abs(best.path.length - 1 - 10)) best = { cells: cells, path: path };
      if (steps >= MIN_STEPS && steps <= MAX_STEPS) return { cells: cells, path: path };
    }
    return best;
  }

  function mazeSvg(maze) {
    var w = COLS * CELL, h = ROWS * CELL, pad = 6;
    var s = '<svg class="maze-svg" viewBox="' + (-pad) + " " + (-pad) + " " + (w + pad * 2) + " " + (h + pad * 2) + '" aria-hidden="true">';
    s += '<rect x="0" y="0" width="' + w + '" height="' + h + '" fill="#fffaf0"/>';
    s += '<polyline class="maze-trail" points="" fill="none" stroke="#f6c453" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/>';
    var lines = "";
    for (var r = 0; r < ROWS; r++) {
      for (var c = 0; c < COLS; c++) {
        var cell = maze.cells[r][c], x = c * CELL, y = r * CELL;
        if (cell.n) lines += '<line x1="' + x + '" y1="' + y + '" x2="' + (x + CELL) + '" y2="' + y + '"/>';
        if (cell.w) lines += '<line x1="' + x + '" y1="' + y + '" x2="' + x + '" y2="' + (y + CELL) + '"/>';
        if (r === ROWS - 1 && cell.s) lines += '<line x1="' + x + '" y1="' + (y + CELL) + '" x2="' + (x + CELL) + '" y2="' + (y + CELL) + '"/>';
        if (c === COLS - 1 && cell.e) lines += '<line x1="' + (x + CELL) + '" y1="' + y + '" x2="' + (x + CELL) + '" y2="' + (y + CELL) + '"/>';
      }
    }
    s += '<g stroke="#8a5a2b" stroke-width="5" stroke-linecap="round">' + lines + "</g>";
    var last = maze.path[maze.path.length - 1];
    s += '<text x="' + (last[0] * CELL + CELL / 2) + '" y="' + (last[1] * CELL + CELL / 2 + 12) + '" font-size="34" text-anchor="middle">⭐</text>';
    s += '<g class="maze-player" style="transform:translate(' + (maze.path[0][0] * CELL + CELL / 2) + "px," + (maze.path[0][1] * CELL + CELL / 2) + 'px)"><text y="12" font-size="34" text-anchor="middle">🐼</text></g>';
    return s + "</svg>";
  }

  // ---------- views ----------
  function open() {
    levels = buildLevels();
    root.hidden = false;
    document.body.style.overflow = "hidden";
    showLevelList();
  }
  function close() {
    root.hidden = true;
    document.body.style.overflow = "";
    game = null;
  }

  function setHeader(title, progressText, onBack) {
    titleEl.textContent = title;
    progressEl.textContent = progressText || "";
    backBtn.onclick = onBack;
  }

  function showLevelList() {
    game = null;
    setHeader("🎮 Maze Game", "", close);
    backBtn.textContent = "✕ Close";
    body.innerHTML = "";
    body.appendChild(el("p", "maze-intro",
      "Listen to the word, tap the matching picture, and help the 🐼 find the ⭐!"));
    var list = el("div", "maze-levels");
    levels.forEach(function (lv, i) {
      var open_ = isUnlocked(i);
      var stars = progress.stars[lv.id] || 0;
      var card = el("button", "maze-level" + (open_ ? "" : " locked"));
      card.type = "button";
      card.innerHTML =
        '<span class="maze-level-num">' + (open_ ? i + 1 : "🔒") + "</span>" +
        '<span class="maze-level-text"><b>' + lv.title + "</b>" +
        (lv.subtitle ? "<small>" + lv.subtitle + "</small>" : "") + "</span>" +
        '<span class="maze-level-stars">' + (stars ? "⭐".repeat(stars) : "") + "</span>";
      if (open_) card.addEventListener("click", function () { startLevel(i); });
      list.appendChild(card);
    });
    body.appendChild(list);
    var unlock = el("button", "maze-unlock", progress.unlockAll ? "🔒 Lock levels again" : "🔓 Unlock all levels (grown-ups)");
    unlock.type = "button";
    unlock.addEventListener("click", function () {
      progress.unlockAll = !progress.unlockAll;
      saveProgress();
      showLevelList();
    });
    body.appendChild(unlock);
    backBtn.textContent = "✕ Close";
  }

  function startLevel(index) {
    var lv = levels[index];
    var maze = makeMaze();
    var steps = maze.path.length - 1;
    // A bag of words long enough for every step, with no immediate repeats.
    var bag = [];
    while (bag.length < steps) {
      var round = shuffle(lv.items);
      if (bag.length && round[0] === bag[bag.length - 1]) round.push(round.shift());
      bag = bag.concat(round);
    }
    game = { index: index, level: lv, maze: maze, steps: steps, bag: bag.slice(0, steps), step: 0, mistakes: 0, busy: false, current: null };

    setHeader(lv.title, "", showLevelList);
    backBtn.textContent = "← Levels";
    body.innerHTML = "";
    var layout = el("div", "maze-layout");
    var left = el("div", "maze-left");
    left.innerHTML = mazeSvg(maze);
    layout.appendChild(left);
    var right = el("div", "maze-right");
    var playBtn = el("button", "maze-play", "🔊 Hear the word");
    playBtn.type = "button";
    playBtn.addEventListener("click", function () { if (game && game.current) say(game.current.say); });
    right.appendChild(playBtn);
    right.appendChild(el("div", "maze-prompt", "Tap the picture that matches!"));
    var choices = el("div", "maze-choices");
    right.appendChild(choices);
    layout.appendChild(right);
    body.appendChild(layout);
    game.choicesEl = choices;
    game.player = left.querySelector(".maze-player");
    game.trail = left.querySelector(".maze-trail");
    game.trailPoints = [pt(maze.path[0])];
    nextQuestion();
  }

  function pt(cell) { return (cell[0] * CELL + CELL / 2) + "," + (cell[1] * CELL + CELL / 2); }

  function visualHtml(vis) {
    if (vis.kind === "swatch") return '<span class="maze-swatch" style="background:' + vis.value + '"></span>';
    if (vis.kind === "svg") return '<span class="maze-shape">' + vis.value + "</span>";
    return '<span class="maze-emoji">' + vis.value + "</span>";
  }

  function nextQuestion() {
    var g = game;
    if (!g) return;
    progressEl.textContent = "Step " + (g.step + 1) + " of " + g.steps;
    var item = g.bag[g.step];
    g.current = item;
    var others = shuffle(g.level.items.filter(function (it) { return it.visual.key !== item.visual.key; })).slice(0, 3);
    var options = shuffle([item].concat(others));
    g.choicesEl.innerHTML = "";
    g.busy = false;
    options.forEach(function (opt) {
      var b = el("button", "maze-choice", visualHtml(opt.visual));
      b.type = "button";
      b.dataset.correct = opt === item ? "1" : "0";
      b.addEventListener("click", function () { answer(b, opt === item); });
      g.choicesEl.appendChild(b);
    });
    say(item.say);
  }

  function answer(btn, correct) {
    var g = game;
    if (!g || g.busy) return;
    if (!correct) {
      g.mistakes++;
      btn.classList.add("wrong");
      setTimeout(function () { btn.classList.remove("wrong"); }, 600);
      setTimeout(function () { if (game === g) say(g.current.say); }, 500);
      return;
    }
    g.busy = true;
    btn.classList.add("right");
    say("對了");
    g.step++;
    var cell = g.maze.path[g.step];
    g.player.style.transform = "translate(" + (cell[0] * CELL + CELL / 2) + "px," + (cell[1] * CELL + CELL / 2) + "px)";
    g.trailPoints.push(pt(cell));
    g.trail.setAttribute("points", g.trailPoints.join(" "));
    if (g.step >= g.steps) {
      setTimeout(function () { if (game === g) finishLevel(); }, 900);
    } else {
      setTimeout(function () { if (game === g) nextQuestion(); }, 1000);
    }
  }

  function finishLevel() {
    var g = game;
    var stars = g.mistakes <= 1 ? 3 : (g.mistakes <= 4 ? 2 : 1);
    if ((progress.stars[g.level.id] || 0) < stars) progress.stars[g.level.id] = stars;
    saveProgress();
    say("太棒了");
    progressEl.textContent = "";
    body.innerHTML = "";
    var box = el("div", "maze-win");
    box.innerHTML =
      '<div class="maze-win-emoji">🎉🐼⭐</div>' +
      "<h2>You found the star!</h2>" +
      '<div class="maze-win-stars">' + "⭐".repeat(stars) + "</div>" +
      "<p>" + (g.mistakes === 0 ? "Perfect — no mistakes!" : g.mistakes + (g.mistakes === 1 ? " mistake" : " mistakes")) + "</p>";
    var row = el("div", "maze-win-actions");
    var again = el("button", "maze-btn", "↺ Play again");
    again.type = "button";
    again.addEventListener("click", function () { startLevel(g.index); });
    row.appendChild(again);
    if (g.index + 1 < levels.length) {
      var next = el("button", "maze-btn primary", "Next level →");
      next.type = "button";
      next.addEventListener("click", function () { startLevel(g.index + 1); });
      row.appendChild(next);
    }
    var list = el("button", "maze-btn", "☰ All levels");
    list.type = "button";
    list.addEventListener("click", showLevelList);
    row.appendChild(list);
    box.appendChild(row);
    body.appendChild(box);
    game = null;
  }

  // ---------- setup ----------
  function init() {
    var openBtn = document.getElementById("maze-open");
    if (!openBtn) return;
    root = el("div", "maze-overlay");
    root.hidden = true;
    var top = el("div", "maze-top");
    backBtn = el("button", "maze-back", "✕ Close");
    backBtn.type = "button";
    titleEl = el("div", "maze-title", "");
    progressEl = el("div", "maze-progress", "");
    top.appendChild(backBtn);
    top.appendChild(titleEl);
    top.appendChild(progressEl);
    body = el("div", "maze-body");
    root.appendChild(top);
    root.appendChild(body);
    document.body.appendChild(root);
    openBtn.addEventListener("click", open);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
