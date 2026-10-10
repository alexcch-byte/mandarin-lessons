// Hello, 華語! Mandarin Lessons — app logic
// Loads lesson files listed in lessons/manifest.js, then renders tabs.

(function () {
  "use strict";

  var state = {
    lessons: [],
    currentLesson: null,
    writer: null,
    currentChar: null,
    currentUtterance: null,
    zhuyinClear: null,
    currentAudio: null,
    speakToken: 0
  };

  // ---------------- Script loading ----------------
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = function () { reject(new Error("Failed to load " + src)); };
      document.body.appendChild(s);
    });
  }

  function loadAllLessons() {
    var files = window.LESSON_FILES || [];
    var chain = Promise.resolve();
    files.forEach(function (f) {
      chain = chain.then(function () { return loadScript(f); });
    });
    return chain.then(function () {
      state.lessons = window.MANDARIN_LESSONS || [];
    });
  }

  // ---------------- Text-to-speech ----------------
  // Mobile WebView browsers (Amazon Silk, Android Chrome/WebView) have a
  // handful of well-known Web Speech API quirks this code works around:
  //  1. getVoices() can return [] on first call and never fire
  //     onvoiceschanged — so we poll for a while instead of waiting on it.
  //  2. calling cancel() immediately before speak() can silently drop the
  //     new utterance — so we only cancel when something is actually
  //     speaking, and hand off to speak() on the next tick.
  //  3. the SpeechSynthesisUtterance object can be garbage-collected mid-
  //     speech if nothing keeps a reference to it — so we hold one in
  //     `state.currentUtterance` for the life of the utterance.
  //  4. some engines mislabel language (e.g. "zh_CN", "cmn-Hant-TW", or an
  //     English lang tag with "Chinese"/"Mandarin" only in the voice name)
  //     — so matching checks both lang and name, loosely.
  var voiceCache = null;
  var voicePollAttempts = 0;

  // Match Mandarin voices only — explicitly excludes Cantonese (yue / HK /
  // "Cantonese" in the name), which is a different spoken language, not an
  // accent. A wrongly-matched Cantonese voice would mispronounce every
  // word, which is worse than falling through to no voice at all.
  function looksChinese(v) {
    var lang = v.lang || "";
    var name = v.name || "";
    if (/yue|HK|cantonese|粵|广东|廣東/i.test(lang + " " + name)) return false;
    return /^zh|cmn/i.test(lang) || /chinese|mandarin|普通话|國語/i.test(name);
  }

  function pickChineseVoice() {
    if (!window.speechSynthesis) return null;
    var voices = window.speechSynthesis.getVoices();
    if (!voices || !voices.length) return null;
    return (
      voices.find(function (v) { return /^zh-TW/i.test(v.lang); }) ||
      voices.find(function (v) { return /^zh-CN/i.test(v.lang); }) ||
      voices.find(looksChinese) ||
      null
    );
  }

  function pollForVoices() {
    voiceCache = pickChineseVoice();
    if (voiceCache) return;
    if (voicePollAttempts > 20) {
      // Recorded audio covers every phrase, so a missing system voice only
      // matters if the bundle isn't loaded.
      if (!window.AUDIO_MANIFEST) showVoiceBanner();
      return;
    }
    voicePollAttempts++;
    setTimeout(pollForVoices, 300);
  }

  function showVoiceBanner() {
    var banner = document.getElementById("voice-banner");
    if (!banner || banner.dataset.dismissed) return;
    document.getElementById("voice-banner-text").textContent =
      "🔊 This device doesn't seem to have a Chinese voice installed, so the speaker buttons may sound wrong or silent. " +
      "You can usually fix this in the tablet's Settings → Language & Input → Text-to-Speech, by adding a Chinese (Mandarin) voice.";
    banner.hidden = false;
  }

  function speakNow(text, onend) {
    var utter = new SpeechSynthesisUtterance(text);
    var voice = voiceCache || pickChineseVoice();
    utter.lang = voice ? voice.lang : "zh-TW";
    utter.rate = 0.8;
    if (voice) utter.voice = voice;
    utter.onend = function () { state.currentUtterance = null; if (onend) onend(); };
    utter.onerror = function () { state.currentUtterance = null; if (onend) onend(); };
    // Keep a strong reference so mobile WebViews don't GC it mid-utterance.
    state.currentUtterance = utter;
    window.speechSynthesis.speak(utter);
    // Some Android/Silk WebViews start a new utterance in a paused state.
    setTimeout(function () {
      if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    }, 50);
  }

  // When this page is running inside the native Android app (built with
  // Capacitor), skip the WebView's Web Speech API entirely and call
  // Android's system TextToSpeech service directly through the
  // @capacitor-community/text-to-speech plugin. This is deliberately more
  // reliable than window.speechSynthesis inside a WebView, which on some
  // Fire OS / older WebView builds is missing, stalls, or silently drops
  // utterances.
  function nativeTTS() {
    return (
      window.Capacitor &&
      window.Capacitor.isNativePlatform &&
      window.Capacitor.isNativePlatform() &&
      window.Capacitor.Plugins &&
      window.Capacitor.Plugins.TextToSpeech
    );
  }

  // Real recorded Mandarin audio (vendor/audio/*.mp3, generated offline)
  // for every word/sentence/dialogue line in the app. This is the primary
  // playback path — it sounds correct and works identically on every
  // device, regardless of what (if any) TTS voices are installed. TTS
  // (native or Web Speech) is only a fallback for text that has no
  // recording, e.g. something added after the audio bundle was last built.
  function playAudioFile(url, onend) {
    if (state.currentAudio) {
      state.currentAudio.pause();
      state.currentAudio.onended = null;
      state.currentAudio.onerror = null;
    }
    var audio = new Audio(url);
    audio.onended = function () { state.currentAudio = null; if (onend) onend(); };
    audio.onerror = function () { state.currentAudio = null; if (onend) onend(); };
    state.currentAudio = audio;
    var playPromise = audio.play();
    if (playPromise && playPromise.catch) {
      playPromise.catch(function () { state.currentAudio = null; if (onend) onend(); });
    }
  }

  function playBundledAudio(text, onend) {
    var manifest = window.AUDIO_MANIFEST;
    var fname = manifest && manifest[text];
    if (!fname) return false;
    playAudioFile("vendor/audio/" + fname, onend);
    return true;
  }

  // English read-alongs (vendor/audio-en/*.mp3) so children who can't read yet
  // still hear what the Chinese means. Played right after the Chinese clip;
  // a parent can switch it off with the 🇬🇧 button in the header.
  function englishEnabled() {
    try { return localStorage.getItem("englishAudio") !== "off"; } catch (e) { return true; }
  }

  // All English clips ship as one pack file (vendor/audio-en-pack.mp3) that is
  // sliced into per-clip Blob URLs once it has loaded. Until then — or when the
  // page is opened straight from disk and fetch() is blocked — fall back to the
  // individual files in vendor/audio-en/.
  var englishBlobUrls = null;
  function loadEnglishPack() {
    var pack = window.AUDIO_EN_PACK;
    if (!pack || !window.fetch || !window.URL || !window.Blob) return;
    fetch(pack.url)
      .then(function (r) { if (!r.ok) throw new Error("pack " + r.status); return r.arrayBuffer(); })
      .then(function (buf) {
        var urls = {};
        Object.keys(pack.ranges).forEach(function (fname) {
          var range = pack.ranges[fname];
          var blob = new Blob([buf.slice(range[0], range[0] + range[1])], { type: "audio/mpeg" });
          urls[fname] = URL.createObjectURL(blob);
        });
        englishBlobUrls = urls;
      })
      .catch(function () { /* per-file fallback stays in effect */ });
  }
  loadEnglishPack();

  function englishClipFor(text) {
    var m = window.AUDIO_EN_MANIFEST;
    if (!englishEnabled() || !m || !m[text]) return null;
    return englishBlobUrls && englishBlobUrls[m[text]]
      ? englishBlobUrls[m[text]]
      : "vendor/audio-en/" + m[text];
  }

  // opts.noEnglish: skip the English follow-up (listening tests, "great job!"
  // feedback — where a translation would give the answer away or just be noise).
  function speak(text, onend, opts) {
    var token = ++state.speakToken;
    var enUrl = !(opts && opts.noEnglish) ? englishClipFor(text) : null;
    if (enUrl) {
      var afterChinese = onend;
      onend = function () {
        if (token !== state.speakToken) return;
        setTimeout(function () {
          if (token !== state.speakToken) return;
          playAudioFile(enUrl, afterChinese);
        }, 250);
      };
    }
    if (playBundledAudio(text, onend)) return;

    var tts = nativeTTS();
    if (tts) {
      tts.speak({ text: text, lang: "zh-TW", rate: 0.8 })
        .then(function () { if (onend) onend(); })
        .catch(function () { if (onend) onend(); });
      return;
    }
    if (!window.speechSynthesis) {
      if (onend) onend();
      return;
    }
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
      window.speechSynthesis.cancel();
      setTimeout(function () { speakNow(text, onend); }, 60);
    } else {
      speakNow(text, onend);
    }
  }

  if (nativeTTS()) {
    // Native TTS is the system service itself — no voice-availability
    // banner needed; Android always has at least one built-in voice.
  } else if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = function () {
      voiceCache = pickChineseVoice();
    };
    pollForVoices();
  }

  function speakSequence(items, i, onDone) {
    i = i || 0;
    if (i >= items.length) { if (onDone) onDone(); return; }
    items[i].onStart && items[i].onStart();
    speak(items[i].text, function () {
      items[i].onEnd && items[i].onEnd();
      speakSequence(items, i + 1, onDone);
    });
  }

  // ---------------- Helpers ----------------
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function speakBtn(text, small, opts) {
    var b = el("button", "speak-btn" + (small ? " small" : ""), "🔊");
    b.title = "Play pronunciation";
    b.addEventListener("click", function (ev) {
      ev.stopPropagation();
      speak(text, null, opts);
    });
    return b;
  }

  // ---------------- Lesson picker ----------------
  function populateLessonPicker() {
    var picker = document.getElementById("lesson-picker");
    picker.innerHTML = "";
    state.lessons.forEach(function (lesson, idx) {
      var opt = el("option");
      opt.value = idx;
      opt.textContent = lesson.category
        ? (lesson.icon || "🌱") + " " + lesson.title + " (" + lesson.titleEnglish + ")"
        : "Lesson " + lesson.lessonNumber + " — " + lesson.title + " (" + lesson.titleEnglish + ")";
      picker.appendChild(opt);
    });
    picker.selectedIndex = state.lessons.length - 1;
    picker.addEventListener("change", function () {
      selectLesson(parseInt(picker.value, 10));
    });
  }

  function selectLesson(idx) {
    state.currentLesson = state.lessons[idx];
    renderVocab();
    renderSentences();
    renderDialogue();
    renderActions();
    renderWriting();
    renderExercises();
    renderCulture();
  }

  // ---------------- Tabs ----------------
  function setupTabs() {
    var buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        document.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.remove("active"); });
        document.getElementById("panel-" + btn.dataset.tab).classList.add("active");
        if (window.speechSynthesis) window.speechSynthesis.cancel();
      });
    });
  }

  // ---------------- Vocabulary ----------------
  function buildVocabGrid(list) {
    var grid = el("div", "card-grid");
    list.forEach(function (v) {
      var card = el("div", "vocab-card");
      card.appendChild(el("div", "vocab-emoji", v.emoji || "🀄"));
      card.appendChild(el("div", "vocab-hanzi hanzi", v.hanzi));
      card.appendChild(el("div", "vocab-pinyin", v.pinyin));
      card.appendChild(el("div", "vocab-english", v.english));
      // noEnglish: pronunciation-only cards (e.g. pinyin letter sounds), where
      // an English meaning of the recording's character would be misleading.
      card.appendChild(speakBtn(v.say || v.hanzi, false, v.noEnglish ? { noEnglish: true } : null));
      grid.appendChild(card);
    });
    return grid;
  }

  function renderVocab() {
    var panel = document.getElementById("panel-vocab");
    panel.innerHTML = "";
    panel.appendChild(el("h2", "section-title", "📚 New Words"));
    panel.appendChild(el("p", "section-sub", "Tap the speaker to hear each word."));

    var vocab = state.currentLesson.vocabulary;
    var hasGroups = vocab.some(function (v) { return v.group; });

    if (!hasGroups) {
      panel.appendChild(buildVocabGrid(vocab));
      return;
    }

    var groupOrder = [];
    var byGroup = {};
    vocab.forEach(function (v) {
      var g = v.group || "";
      if (!byGroup[g]) { byGroup[g] = []; groupOrder.push(g); }
      byGroup[g].push(v);
    });
    groupOrder.forEach(function (g) {
      if (g) panel.appendChild(el("h3", "vocab-group-title", g));
      panel.appendChild(buildVocabGrid(byGroup[g]));
    });
  }

  // ---------------- Sentence patterns ----------------
  function renderSentences() {
    var panel = document.getElementById("panel-sentences");
    panel.innerHTML = "";
    panel.appendChild(el("h2", "section-title", "🧩 Sentence Patterns"));
    var patterns = state.currentLesson.sentencePatterns || [];
    if (!patterns.length) {
      panel.appendChild(el("p", "section-sub", "This lesson doesn't have sentence patterns — try another tab!"));
      return;
    }
    var list = el("div", "pattern-list");
    patterns.forEach(function (p) {
      var card = el("div", "pattern-card");
      var textWrap = el("div", "pattern-text");
      textWrap.appendChild(el("div", "hanzi", p.hanzi));
      textWrap.appendChild(el("div", "pinyin", p.pinyin));
      textWrap.appendChild(el("div", "english", p.english));
      card.appendChild(textWrap);
      card.appendChild(speakBtn(p.hanzi.replace(/……|\.\.\./g, "")));
      list.appendChild(card);
    });
    panel.appendChild(list);
  }

  // ---------------- Dialogue ----------------
  function renderDialogue() {
    var panel = document.getElementById("panel-dialogue");
    panel.innerHTML = "";
    panel.appendChild(el("h2", "section-title", "💬 Dialogue Practice"));
    var dialogues = state.currentLesson.dialogues || [];
    if (!dialogues.length) {
      panel.appendChild(el("p", "section-sub", "This lesson doesn't have dialogue practice — try another tab!"));
      return;
    }
    dialogues.forEach(function (scene, sceneIdx) {
      var card = el("div", "dialogue-scene");
      card.appendChild(el("h3", null, scene.title));
      card.appendChild(el("p", "scene-en", scene.titleEnglish || ""));

      var playAll = el("button", "play-all-btn", "▶ Play whole conversation");
      var lineEls = [];
      playAll.addEventListener("click", function () {
        var items = scene.lines.map(function (line, i) {
          return {
            text: line.hanzi,
            onStart: function () {
              lineEls.forEach(function (le) { le.classList.remove("speaking"); });
              lineEls[i].classList.add("speaking");
            },
            onEnd: function () { lineEls[i].classList.remove("speaking"); }
          };
        });
        speakSequence(items, 0);
      });
      card.appendChild(playAll);

      scene.lines.forEach(function (line) {
        var row = el("div", "dialogue-line");
        row.appendChild(el("div", "speaker-tag", line.speaker));
        var textWrap = el("div", "dialogue-text");
        textWrap.appendChild(el("div", "hanzi", line.hanzi));
        textWrap.appendChild(el("div", "pinyin", line.pinyin));
        textWrap.appendChild(el("div", "english", line.english));
        row.appendChild(textWrap);
        row.appendChild(speakBtn(line.hanzi, true));
        card.appendChild(row);
        lineEls.push(row);
      });

      panel.appendChild(card);
    });
  }

  // ---------------- Actions ----------------
  function renderActions() {
    var panel = document.getElementById("panel-actions");
    panel.innerHTML = "";
    panel.appendChild(el("h2", "section-title", "🙋 Classroom Actions"));
    var actions = state.currentLesson.actions || [];
    if (!actions.length) {
      panel.appendChild(el("p", "section-sub", "This lesson doesn't have classroom action phrases — try another tab!"));
      return;
    }
    panel.appendChild(el("p", "section-sub", "Say it, then act it out!"));
    var grid = el("div", "card-grid");
    actions.forEach(function (a) {
      var card = el("div", "vocab-card");
      card.appendChild(el("div", "vocab-emoji", a.emoji || "🙆"));
      card.appendChild(el("div", "vocab-hanzi hanzi", a.hanzi));
      card.appendChild(el("div", "vocab-pinyin", a.pinyin));
      card.appendChild(el("div", "vocab-english", a.english));
      card.appendChild(speakBtn(a.hanzi));
      grid.appendChild(card);
    });
    panel.appendChild(grid);
  }

  // ---------------- Writing practice ----------------
  function renderWriting() {
    var panel = document.getElementById("panel-writing");
    panel.innerHTML = "";
    panel.appendChild(el("h2", "section-title", "✍️ Character Writing Practice"));
    panel.appendChild(el("p", "section-sub", "Pick a character, watch how it's written, then trace it yourself."));

    var layout = el("div", "writing-layout");
    var picker = el("div", "char-picker");
    var chars = state.currentLesson.writingPractice || [];

    chars.forEach(function (c, idx) {
      var chip = el("div", "char-chip hanzi", c.hanzi + '<span class="chip-pinyin">' + c.pinyin + "</span>");
      chip.addEventListener("click", function () {
        picker.querySelectorAll(".char-chip").forEach(function (ch) { ch.classList.remove("active"); });
        chip.classList.add("active");
        loadCharacter(c);
      });
      picker.appendChild(chip);
      if (idx === 0) { chip.classList.add("active"); }
    });

    layout.appendChild(picker);

    var stage = el("div", "writing-stage");
    stage.id = "writing-stage";
    stage.innerHTML =
      '<h3 id="writing-char-title">' + (chars[0] ? chars[0].hanzi : "") + "</h3>" +
      '<div id="hanzi-writer-target"></div>' +
      '<div class="writing-meaning" id="writing-char-meaning"></div>' +
      '<div class="writing-controls">' +
      '<button class="btn-show" id="btn-show">👀 Show me</button>' +
      '<button class="btn-quiz" id="btn-quiz">✍️ Practice tracing</button>' +
      '<button class="btn-reset" id="btn-reset">↺ Reset</button>' +
      "</div>" +
      '<div class="writing-status" id="writing-status"></div>';
    layout.appendChild(stage);
    panel.appendChild(layout);

    document.getElementById("btn-show").addEventListener("click", function () {
      if (state.writer) {
        document.getElementById("writing-status").textContent = "";
        state.writer.animateCharacter();
      }
    });
    document.getElementById("btn-quiz").addEventListener("click", function () {
      startQuiz();
    });
    document.getElementById("btn-reset").addEventListener("click", function () {
      document.getElementById("writing-status").textContent = "";
      if (state.writer) {
        state.writer.cancelQuiz();
        state.writer.hideCharacter();
        state.writer.showOutline();
      } else if (state.zhuyinClear) {
        state.zhuyinClear();
      }
    });

    if (chars.length) loadCharacter(chars[0]);
  }

  function loadCharacter(c) {
    state.currentChar = c;
    document.getElementById("writing-char-title").textContent = c.hanzi + "  (" + c.pinyin + ")";
    document.getElementById("writing-char-meaning").textContent = c.english;
    document.getElementById("writing-status").textContent = "";
    state.writer = null;

    var target = document.getElementById("hanzi-writer-target");
    target.innerHTML = "";

    var showBtn = document.getElementById("btn-show");
    var quizBtn = document.getElementById("btn-quiz");

    if (c.zhuyin) {
      // Zhuyin (Bopomofo) symbols aren't in the Hanzi stroke-data set (they're
      // not Han characters), so there's no stroke-by-stroke animation/quiz
      // available for them. Instead: a plain trace-over canvas, matching how
      // the paper worksheet works — the symbol is a faint guide, the child
      // draws on top with mouse/finger. "Show me" is repurposed to play the
      // example word's audio instead of a stroke animation.
      quizBtn.style.display = "none";
      showBtn.style.display = "";
      showBtn.textContent = "🔊 Hear it";
      showBtn.onclick = function () {
        document.getElementById("writing-status").textContent = "";
        if (c.wordHanzi) speak(c.wordHanzi);
      };
      renderZhuyinTracer(target, c);
      return;
    }

    quizBtn.style.display = "";
    showBtn.style.display = "";
    showBtn.textContent = "👀 Show me";
    showBtn.onclick = function () {
      if (state.writer) {
        document.getElementById("writing-status").textContent = "";
        state.writer.animateCharacter();
      }
    };

    if (typeof HanziWriter === "undefined") {
      target.innerHTML = '<p style="padding:40px 10px;color:#a66;">Writing practice could not load (Hanzi Writer script missing).</p>';
      return;
    }

    state.writer = HanziWriter.create("hanzi-writer-target", c.hanzi, {
      width: 280,
      height: 280,
      padding: 12,
      showOutline: true,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 200,
      strokeColor: "#3a2e1f",
      outlineColor: "#e6d3a0",
      drawingWidth: 24,
      charDataLoader: loadCharDataFor
    });
  }

  // A minimal freehand trace-over canvas: draws the symbol faintly as a
  // guide, lets the user draw on top with mouse/touch, no stroke checking.
  function renderZhuyinTracer(target, c) {
    var canvas = document.createElement("canvas");
    canvas.width = 280;
    canvas.height = 280;
    canvas.style.width = "280px";
    canvas.style.height = "280px";
    canvas.style.touchAction = "none";
    target.appendChild(canvas);

    var ctx = canvas.getContext("2d");
    function drawGuide() {
      ctx.clearRect(0, 0, 280, 280);
      ctx.fillStyle = "#e6d3a0";
      ctx.font = "200px 'Noto Sans TC', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(c.hanzi, 140, 150);
    }
    drawGuide();

    ctx.strokeStyle = "#3a2e1f";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    var drawing = false;
    var lastX, lastY;

    function pos(ev) {
      var rect = canvas.getBoundingClientRect();
      var point = ev.touches ? ev.touches[0] : ev;
      return {
        x: (point.clientX - rect.left) * (canvas.width / rect.width),
        y: (point.clientY - rect.top) * (canvas.height / rect.height)
      };
    }
    function start(ev) {
      ev.preventDefault();
      drawing = true;
      var p = pos(ev);
      lastX = p.x; lastY = p.y;
    }
    function move(ev) {
      if (!drawing) return;
      ev.preventDefault();
      var p = pos(ev);
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      lastX = p.x; lastY = p.y;
    }
    function end() { drawing = false; }

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", move, { passive: false });
    canvas.addEventListener("touchend", end);

    state.zhuyinClear = drawGuide;
  }

  // Prefer the locally bundled stroke data (vendor/hanzi-data.js) so writing
  // practice works offline and inside sandboxes that block cross-origin
  // fetches. Only reach out to the public CDN for a character that isn't
  // bundled yet (e.g. a brand-new lesson before vendor/hanzi-data.js has
  // been regenerated) — see vendor/build-hanzi-data.py.
  function loadCharDataFor(char, onComplete, onError) {
    var bundled = window.HANZI_DATA && window.HANZI_DATA[char];
    if (bundled) {
      onComplete(bundled);
      return;
    }
    if (window.fetch) {
      fetch("https://cdn.jsdelivr.net/npm/hanzi-writer-data@latest/" + encodeURIComponent(char) + ".json")
        .then(function (res) { return res.json(); })
        .then(onComplete)
        .catch(function () { if (onError) onError(); });
    } else if (onError) {
      onError();
    }
  }

  function startQuiz() {
    if (!state.writer) return;
    document.getElementById("writing-status").textContent = "Trace each stroke!";
    state.writer.quiz({
      onComplete: function (summary) {
        var status = document.getElementById("writing-status");
        var mistakes = summary && summary.totalMistakes ? summary.totalMistakes : 0;
        status.textContent = mistakes === 0
          ? "🌟 Perfect! Great job!"
          : "✅ Done! (" + mistakes + " little slips — try again for a perfect score)";
        speak("太棒了", null, { noEnglish: true });
      }
    });
  }

  // ---------------- Exercises ----------------
  function renderExercises() {
    var panel = document.getElementById("panel-exercises");
    panel.innerHTML = "";
    panel.appendChild(el("h2", "section-title", "🎯 Practice & Review"));

    var song = state.currentLesson.song;
    if (song && song.videoFile) {
      var songBlock = el("div", "exercise-block");
      songBlock.appendChild(el("h3", null, "🎵 " + song.title));
      if (song.titleEnglish) songBlock.appendChild(el("p", "exercise-instructions", song.titleEnglish));
      var video = document.createElement("video");
      video.src = song.videoFile;
      video.controls = true;
      video.playsInline = true;
      video.style.width = "100%";
      video.style.maxWidth = "560px";
      video.style.borderRadius = "12px";
      video.style.display = "block";
      songBlock.appendChild(video);
      panel.appendChild(songBlock);
    }

    var videos = state.currentLesson.videos || [];
    if (videos.length) {
      var vBlock = el("div", "exercise-block");
      vBlock.appendChild(el("h3", null, "🎬 Watch & Learn"));
      vBlock.appendChild(el("p", "exercise-instructions", "Videos play from YouTube, so they need an internet connection."));
      var vGrid = el("div", "video-grid");
      videos.forEach(function (v) {
        var item = el("div", "video-item");
        item.appendChild(el("h4", null, v.title));
        var frameWrap = el("div", "video-frame");
        var iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube-nocookie.com/embed/" + v.youtubeId + "?rel=0";
        iframe.title = v.title;
        iframe.loading = "lazy";
        iframe.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen";
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        frameWrap.appendChild(iframe);
        item.appendChild(frameWrap);
        var link = el("a", "video-link", "Open on YouTube ↗");
        link.href = "https://www.youtube.com/watch?v=" + v.youtubeId;
        link.target = "_blank";
        link.rel = "noopener";
        item.appendChild(link);
        vGrid.appendChild(item);
      });
      vBlock.appendChild(vGrid);
      panel.appendChild(vBlock);
    }

    (state.currentLesson.exercises || []).forEach(function (ex) {
      if (ex.type === "match-emoji") panel.appendChild(renderMatchEmoji(ex));
      else if (ex.type === "fill-blank") panel.appendChild(renderFillBlank(ex));
      else if (ex.type === "read-aloud") panel.appendChild(renderReadAloud(ex));
      else if (ex.type === "listen-pick") panel.appendChild(renderListenPick(ex));
    });
  }

  // Listening exercise: tap ▶ to hear a recorded phrase, then pick the matching
  // option (a picture/emoji or a text choice). Tracks a running score.
  function renderListenPick(ex) {
    var block = el("div", "exercise-block");
    block.appendChild(el("h3", null, ex.title));
    block.appendChild(el("p", "exercise-instructions", ex.instructions));

    var answered = 0, correct = 0;
    var total = ex.items.length;
    var score = el("div", "exercise-feedback");

    ex.items.forEach(function (item, idx) {
      var row = el("div", "listen-row");
      var head = el("div", "listen-head");
      head.appendChild(el("span", "listen-num", (idx + 1) + "."));
      var play = el("button", "play-all-btn listen-play", "▶ Listen");
      play.addEventListener("click", function () { speak(item.say, null, { noEnglish: true }); });
      head.appendChild(play);
      if (item.prompt) head.appendChild(el("span", "listen-prompt hanzi", item.prompt));
      row.appendChild(head);

      var opts = el("div", "listen-options" + (item.options[0].emoji ? " listen-options-pics" : ""));
      var done = false;
      var buttons = [];
      item.options.forEach(function (o, oi) {
        var b = el("button", "listen-option");
        if (o.emoji) b.appendChild(el("span", "listen-emoji", o.emoji));
        b.appendChild(el("span", "listen-label hanzi", o.label || ""));
        b.addEventListener("click", function () {
          if (done) return;
          done = true;
          answered++;
          if (oi === item.answer) {
            correct++;
            b.classList.add("correct");
            speak("對了", null, { noEnglish: true });
          } else {
            b.classList.add("wrong");
            buttons[item.answer].classList.add("correct");
          }
          if (answered === total) {
            score.className = "exercise-feedback " + (correct === total ? "good" : "bad");
            score.textContent = correct === total
              ? "🌟 Perfect! " + correct + " / " + total
              : "Score: " + correct + " / " + total + " — tap Try again to improve.";
            retry.hidden = false;
          }
        });
        buttons.push(b);
        opts.appendChild(b);
      });
      row.appendChild(opts);
      block.appendChild(row);
    });

    block.appendChild(score);
    var retry = el("button", "check-btn", "🔄 Try again");
    retry.hidden = true;
    retry.addEventListener("click", function () { block.replaceWith(renderListenPick(ex)); });
    block.appendChild(retry);
    return block;
  }

  function shuffled(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function renderMatchEmoji(ex) {
    var block = el("div", "exercise-block");
    block.appendChild(el("h3", null, ex.title));
    block.appendChild(el("p", "exercise-instructions", ex.instructions));

    var targetOrder = shuffled(ex.items);
    var promptWord = ex.items[Math.floor(Math.random() * ex.items.length)];
    var promptLine = el("div", null,
      '<p style="font-weight:700;">Which picture matches: <span class="hanzi" style="font-size:1.3rem;">' + promptWord.hanzi + "</span> (" + promptWord.pinyin + ")?</p>");
    block.appendChild(promptLine);

    var grid = el("div", "match-grid");
    targetOrder.forEach(function (item) {
      var card = el("div", "match-item", '<div class="m-emoji">' + item.emoji + "</div>");
      card.addEventListener("click", function () {
        if (item.hanzi === promptWord.hanzi) {
          card.classList.add("correct");
          speak("對了", null, { noEnglish: true });
        } else {
          card.classList.add("wrong");
          setTimeout(function () { card.classList.remove("wrong"); }, 600);
        }
      });
      grid.appendChild(card);
    });
    block.appendChild(grid);

    var nextBtn = el("button", "check-btn", "🔄 New question");
    nextBtn.addEventListener("click", function () {
      block.replaceWith(renderMatchEmoji(ex));
    });
    block.appendChild(nextBtn);

    return block;
  }

  function renderFillBlank(ex) {
    var block = el("div", "exercise-block");
    block.appendChild(el("h3", null, ex.title));
    block.appendChild(el("p", "exercise-instructions", ex.instructions));

    var bank = el("div", "word-bank");
    ex.wordBank.forEach(function (w) {
      var chip = el("span", "word-chip", w);
      bank.appendChild(chip);
    });
    block.appendChild(bank);

    var answers = {};

    ex.items.forEach(function (item, idx) {
      var row = el("div", "fillblank-row");
      var rowId = "fb-" + Math.random().toString(36).slice(2);

      var sentence = el("span", null,
        '<span class="hanzi">' + item.before + '</span> <span class="blank-slot" data-row="' + rowId + '"></span> <span class="hanzi">' + item.after + "</span>");
      row.appendChild(sentence);
      row.appendChild(el("div", "pinyin-hint", item.pinyinHint));
      block.appendChild(row);

      var slot = null;
      setTimeout(function () {
        slot = block.querySelector('.blank-slot[data-row="' + rowId + '"]');
        slot.addEventListener("click", function () {
          delete answers[idx];
          slot.textContent = "";
          slot.classList.remove("filled");
        });
      }, 0);

      bank.querySelectorAll(".word-chip").forEach(function () {});
      row.dataset.answer = item.answer;
      row.dataset.rowid = rowId;
    });

    bank.querySelectorAll(".word-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var emptySlot = block.querySelector(".blank-slot:empty");
        if (!emptySlot) return;
        emptySlot.textContent = chip.textContent;
        emptySlot.classList.add("filled");
        var rowId = emptySlot.dataset.row;
        var row = block.querySelector('[data-rowid="' + rowId + '"]');
        var idx = Array.prototype.indexOf.call(block.querySelectorAll(".fillblank-row"), row);
        answers[idx] = chip.textContent;
      });
    });

    var checkBtn = el("button", "check-btn", "✅ Check my answers");
    var feedback = el("div", "exercise-feedback");
    checkBtn.addEventListener("click", function () {
      var rows = block.querySelectorAll(".fillblank-row");
      var correctCount = 0;
      rows.forEach(function (row, idx) {
        var slot = row.querySelector(".blank-slot");
        var isCorrect = answers[idx] === row.dataset.answer;
        if (isCorrect) correctCount++;
        slot.style.color = isCorrect ? "#2f8f5b" : "#d94c4c";
      });
      var allGood = correctCount === rows.length;
      feedback.className = "exercise-feedback " + (allGood ? "good" : "bad");
      feedback.textContent = allGood
        ? "🌟 All correct! Great job!"
        : correctCount + " / " + rows.length + " correct — check the red ones and try again.";
      if (allGood) speak("太棒了", null, { noEnglish: true });
    });
    block.appendChild(checkBtn);
    block.appendChild(feedback);

    return block;
  }

  function renderReadAloud(ex) {
    var block = el("div", "exercise-block");
    block.appendChild(el("h3", null, ex.title));
    block.appendChild(el("p", "exercise-instructions", ex.instructions));
    var grid = el("div", "readaloud-grid");
    ex.items.forEach(function (word) {
      var chip = el("div", "readaloud-chip hanzi", word);
      chip.addEventListener("click", function () { speak(word); });
      grid.appendChild(chip);
    });
    block.appendChild(grid);
    return block;
  }

  // ---------------- Culture ----------------
  function renderCulture() {
    var panel = document.getElementById("panel-culture");
    panel.innerHTML = "";
    var culture = state.currentLesson.culture;
    if (!culture) {
      panel.appendChild(el("p", "section-sub", "No culture reading for this lesson."));
      return;
    }
    panel.appendChild(el("h2", "section-title", "🏮 Culture Corner"));
    var card = el("div", "culture-card");
    card.appendChild(el("div", "c-emoji", "🎎"));
    var textWrap = el("div");
    textWrap.appendChild(el("h3", null, culture.title));
    textWrap.appendChild(el("p", null, culture.englishText));
    card.appendChild(textWrap);
    panel.appendChild(card);
  }

  // ---------------- Init ----------------
  var voiceBannerClose = document.getElementById("voice-banner-close");
  if (voiceBannerClose) {
    voiceBannerClose.addEventListener("click", function () {
      var banner = document.getElementById("voice-banner");
      banner.hidden = true;
      banner.dataset.dismissed = "1";
    });
  }

  var enToggle = document.getElementById("english-toggle");
  function refreshEnglishToggle() {
    if (!enToggle) return;
    var on = englishEnabled();
    enToggle.textContent = on ? "🇬🇧 English: On" : "🇬🇧 English: Off";
    enToggle.setAttribute("aria-pressed", on ? "true" : "false");
    enToggle.classList.toggle("off", !on);
  }
  if (enToggle) {
    enToggle.addEventListener("click", function () {
      try { localStorage.setItem("englishAudio", englishEnabled() ? "off" : "on"); } catch (e) {}
      refreshEnglishToggle();
    });
    refreshEnglishToggle();
  }

  loadAllLessons()
    .then(function () {
      document.getElementById("loading-msg").style.display = "none";
      setupTabs();
      document.getElementById("panel-vocab").classList.add("active");
      populateLessonPicker();
      selectLesson(state.lessons.length - 1);
    })
    .catch(function (err) {
      document.getElementById("loading-msg").textContent = "Could not load lessons: " + err.message;
    });
})();
