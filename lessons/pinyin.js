// Pinyin phonics chapter — letters and sounds only (no example words).
// Each card shows the pinyin letter(s) with its zhuyin twin; tap 🔊 to hear the
// sound. The recordings are single syllables (波 for "bo", 八 for "bā" ...) that
// are only used as audio, never shown. Teaches: the 21 initials, the main
// finals, blending an initial with a vowel (b + a = bā), and the four tones.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

(function () {
  var ZY_INIT = { b: "ㄅ", p: "ㄆ", m: "ㄇ", f: "ㄈ", d: "ㄉ", t: "ㄊ", n: "ㄋ", l: "ㄌ", g: "ㄍ", k: "ㄎ", h: "ㄏ",
    j: "ㄐ", q: "ㄑ", x: "ㄒ", zh: "ㄓ", ch: "ㄔ", sh: "ㄕ", r: "ㄖ", z: "ㄗ", c: "ㄘ", s: "ㄙ" };
  var ZY_FINAL = { a: "ㄚ", o: "ㄛ", e: "ㄜ", i: "ㄧ", u: "ㄨ", "ü": "ㄩ", ai: "ㄞ", ao: "ㄠ", ou: "ㄡ",
    an: "ㄢ", en: "ㄣ", ang: "ㄤ" };
  var TONE_MARK = ["", "", "ˊ", "ˇ", "ˋ"]; // index = tone number (1st has no mark)

  var G_I1 = "🔊 Initials 1: b p m f";
  var G_I2 = "🔊 Initials 2: d t n l";
  var G_I3 = "🔊 Initials 3: g k h";
  var G_I4 = "🔊 Initials 4: j q x";
  var G_I5 = "🔊 Initials 5: zh ch sh r";
  var G_I6 = "🔊 Initials 6: z c s";
  var G_F = "🅰️ Finals (the vowel sounds)";
  var G_B1 = "🧩 Blend with a:  b + a = bā";
  var G_B2 = "🧩 Blend with i:  b + i = bǐ";
  var G_B3 = "🧩 Blend with u:  b + u = bù";
  var G_T = "🎵 The 4 Tones";

  // [pinyin letter, recording used for the sound, group]
  var INITIALS = [
    ["b", "波", G_I1], ["p", "坡", G_I1], ["m", "摸", G_I1], ["f", "佛", G_I1],
    ["d", "得", G_I2], ["t", "特", G_I2], ["n", "呢", G_I2], ["l", "樂", G_I2],
    ["g", "哥", G_I3], ["k", "科", G_I3], ["h", "河", G_I3],
    ["j", "雞", G_I4], ["q", "七", G_I4], ["x", "西", G_I4],
    ["zh", "知", G_I5], ["ch", "吃", G_I5], ["sh", "是", G_I5], ["r", "日", G_I5],
    ["z", "資", G_I6], ["c", "詞", G_I6], ["s", "四", G_I6]
  ];
  var FINALS = [
    ["a", "啊"], ["o", "喔"], ["e", "鵝"], ["i", "衣"], ["u", "屋"], ["ü", "魚"],
    ["ai", "哀"], ["ao", "熬"], ["ou", "歐"], ["an", "安"], ["en", "恩"], ["ang", "昂"]
  ];
  // [initial, final letter shown, tone 1-4, recording, group]
  var BLENDS = [
    ["b", "a", 1, "八", G_B1], ["p", "a", 1, "趴", G_B1], ["m", "a", 1, "媽", G_B1], ["f", "a", 1, "發", G_B1],
    ["d", "a", 1, "搭", G_B1], ["t", "a", 1, "他", G_B1], ["n", "a", 2, "拿", G_B1], ["l", "a", 1, "拉", G_B1],
    ["b", "i", 3, "比", G_B2], ["p", "i", 2, "皮", G_B2], ["m", "i", 3, "米", G_B2], ["d", "i", 2, "笛", G_B2],
    ["t", "i", 1, "梯", G_B2], ["n", "i", 3, "你", G_B2], ["l", "i", 4, "力", G_B2],
    ["b", "u", 4, "不", G_B3], ["p", "u", 1, "撲", G_B3], ["m", "u", 4, "木", G_B3], ["d", "u", 4, "肚", G_B3],
    ["t", "u", 4, "兔", G_B3], ["l", "u", 4, "路", G_B3], ["k", "u", 1, "哭", G_B3], ["h", "u", 2, "湖", G_B3]
  ];

  var TONED = { a: ["ā", "á", "ǎ", "à"], i: ["ī", "í", "ǐ", "ì"], u: ["ū", "ú", "ǔ", "ù"] };
  function toned(v, tone) { return TONED[v][tone - 1]; }

  var vocab = [];

  INITIALS.forEach(function (r) {
    var zy = ZY_INIT[r[0]];
    vocab.push({ hanzi: r[0], say: r[1], pinyin: zy, english: "", emoji: "🗣️", noEnglish: true, group: r[2] });
  });

  FINALS.forEach(function (r) {
    vocab.push({ hanzi: r[0], say: r[1], pinyin: ZY_FINAL[r[0]], english: "", emoji: "🗣️", noEnglish: true, group: G_F });
  });

  BLENDS.forEach(function (r) {
    var syl = r[0] + toned(r[1], r[2]);
    var zy = ZY_INIT[r[0]] + ZY_FINAL[r[1]] + TONE_MARK[r[2]];
    vocab.push({
      hanzi: syl,
      say: r[3],
      pinyin: ZY_INIT[r[0]] + " " + r[0] + "  +  " + ZY_FINAL[r[1]] + " " + r[1] + "  =  " + zy,
      english: "",
      emoji: "🧩",
      noEnglish: true,
      group: r[4]
    });
  });

  [
    ["mā", "媽", "ㄇㄚ", "1st tone ˉ  high and flat  ▬"],
    ["má", "麻", "ㄇㄚˊ", "2nd tone ˊ  rising  ↗"],
    ["mǎ", "馬", "ㄇㄚˇ", "3rd tone ˇ  dips down, then up  ↘↗"],
    ["mà", "罵", "ㄇㄚˋ", "4th tone ˋ  short and falling  ↘"]
  ].forEach(function (r) {
    vocab.push({ hanzi: r[0], say: r[1], pinyin: r[2], english: r[3], emoji: "🎵", noEnglish: true, group: G_T });
  });

  // Tracing: every initial and final symbol.
  var tracing = [];
  INITIALS.forEach(function (r) {
    tracing.push({ hanzi: ZY_INIT[r[0]], pinyin: r[0], english: "zhuyin symbol for  " + r[0], zhuyin: true, wordHanzi: r[1] });
  });
  FINALS.forEach(function (r) {
    tracing.push({ hanzi: ZY_FINAL[r[0]], pinyin: r[0], english: "zhuyin symbol for  " + r[0], zhuyin: true, wordHanzi: r[1] });
  });

  // zhuyin → pinyin match-up helper
  function zyItems(letters) {
    return letters.map(function (l) {
      return { before: ZY_INIT[l] + "  →", after: "", answer: l, pinyinHint: ZY_INIT[l] + " = ?" };
    });
  }
  var ALL_INITIALS = INITIALS.map(function (r) { return r[0]; });

  window.MANDARIN_LESSONS.push({
    id: "pinyin",
    category: true,
    icon: "🔤",
    bookTitle: "Pinyin",
    title: "拼音自然發音",
    titlePinyin: "Pīnyīn zìrán fāyīn",
    titleEnglish: "Pinyin Phonics: letter sounds, blending & tones",
    dateAdded: "2026-10-10",

    vocabulary: vocab,

    writingPractice: tracing,

    exercises: [
      {
        type: "listen-pick",
        title: "聽一聽：Which Sound?",
        instructions: "Tap ▶ Listen, then choose the sound you hear. Say it out loud too!",
        items: [
          { say: "波", answer: 0, options: [{ label: "b  ㄅ" }, { label: "p  ㄆ" }] },
          { say: "摸", answer: 1, options: [{ label: "f  ㄈ" }, { label: "m  ㄇ" }] },
          { say: "得", answer: 0, options: [{ label: "d  ㄉ" }, { label: "t  ㄊ" }] },
          { say: "樂", answer: 1, options: [{ label: "n  ㄋ" }, { label: "l  ㄌ" }] },
          { say: "科", answer: 1, options: [{ label: "g  ㄍ" }, { label: "k  ㄎ" }] },
          { say: "七", answer: 1, options: [{ label: "j  ㄐ" }, { label: "q  ㄑ" }] },
          { say: "吃", answer: 0, options: [{ label: "ch  ㄔ" }, { label: "sh  ㄕ" }] },
          { say: "四", answer: 1, options: [{ label: "c  ㄘ" }, { label: "s  ㄙ" }] }
        ]
      },
      {
        type: "listen-pick",
        title: "聽一聽：Blending — Which Syllable?",
        instructions: "Tap ▶ Listen, then choose the syllable you hear (first sound + vowel).",
        items: [
          { say: "八", answer: 0, options: [{ label: "bā  (b + ā)" }, { label: "pā  (p + ā)" }] },
          { say: "媽", answer: 1, options: [{ label: "nā  (n + ā)" }, { label: "mā  (m + ā)" }] },
          { say: "他", answer: 0, options: [{ label: "tā  (t + ā)" }, { label: "dā  (d + ā)" }] },
          { say: "米", answer: 1, options: [{ label: "nǐ  (n + ǐ)" }, { label: "mǐ  (m + ǐ)" }] },
          { say: "你", answer: 0, options: [{ label: "nǐ  (n + ǐ)" }, { label: "lǐ  (l + ǐ)" }] },
          { say: "不", answer: 0, options: [{ label: "bù  (b + ù)" }, { label: "pù  (p + ù)" }] },
          { say: "兔", answer: 1, options: [{ label: "dù  (d + ù)" }, { label: "tù  (t + ù)" }] },
          { say: "路", answer: 0, options: [{ label: "lù  (l + ù)" }, { label: "nù  (n + ù)" }] }
        ]
      },
      {
        type: "fill-blank",
        title: "配對：Zhuyin → Pinyin (1)",
        instructions: "Choose the pinyin letter that matches each zhuyin symbol.",
        wordBank: ["b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h"],
        items: zyItems(["b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h"])
      },
      {
        type: "fill-blank",
        title: "配對：Zhuyin → Pinyin (2)",
        instructions: "Choose the pinyin letters that match each zhuyin symbol.",
        wordBank: ["j", "q", "x", "zh", "ch", "sh", "r", "z", "c", "s"],
        items: zyItems(["j", "q", "x", "zh", "ch", "sh", "r", "z", "c", "s"])
      },
      {
        type: "fill-blank",
        title: "配對：Pinyin → Zhuyin",
        instructions: "Choose the zhuyin symbol that matches each pinyin letter.",
        wordBank: ALL_INITIALS.map(function (l) { return ZY_INIT[l]; }),
        items: ["b", "m", "d", "n", "g", "h", "j", "x", "sh", "z"].map(function (l) {
          return { before: l + "  →", after: "", answer: ZY_INIT[l], pinyinHint: l + " = ?" };
        })
      },
      {
        type: "fill-blank",
        title: "拼一拼：Build the Syllable",
        instructions: "Blend the first sound with the vowel. Which syllable do they make?",
        wordBank: ["bā", "mā", "tā", "nǐ", "mǐ", "bù", "tù", "lù"],
        items: [
          { before: "ㄅ b + ㄚ a  =", after: "", answer: "bā", pinyinHint: "ㄅㄚ" },
          { before: "ㄇ m + ㄚ a  =", after: "", answer: "mā", pinyinHint: "ㄇㄚ" },
          { before: "ㄊ t + ㄚ a  =", after: "", answer: "tā", pinyinHint: "ㄊㄚ" },
          { before: "ㄋ n + ㄧ i  =", after: "", answer: "nǐ", pinyinHint: "ㄋㄧˇ" },
          { before: "ㄇ m + ㄧ i  =", after: "", answer: "mǐ", pinyinHint: "ㄇㄧˇ" },
          { before: "ㄅ b + ㄨ u  =", after: "", answer: "bù", pinyinHint: "ㄅㄨˋ" },
          { before: "ㄊ t + ㄨ u  =", after: "", answer: "tù", pinyinHint: "ㄊㄨˋ" },
          { before: "ㄌ l + ㄨ u  =", after: "", answer: "lù", pinyinHint: "ㄌㄨˋ" }
        ]
      },
      {
        type: "fill-blank",
        title: "拆一拆：Break the Syllable Apart",
        instructions: "Which first sound is hiding in each syllable?",
        wordBank: ["b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h"],
        items: [
          { before: "", after: "+ ㄚ a  =  bā  (ㄅㄚ)", answer: "b", pinyinHint: "first sound of bā  ㄅ" },
          { before: "", after: "+ ㄚ a  =  mā  (ㄇㄚ)", answer: "m", pinyinHint: "first sound of mā  ㄇ" },
          { before: "", after: "+ ㄧ i  =  nǐ  (ㄋㄧˇ)", answer: "n", pinyinHint: "first sound of nǐ  ㄋ" },
          { before: "", after: "+ ㄧ i  =  pí  (ㄆㄧˊ)", answer: "p", pinyinHint: "first sound of pí  ㄆ" },
          { before: "", after: "+ ㄨ u  =  tù  (ㄊㄨˋ)", answer: "t", pinyinHint: "first sound of tù  ㄊ" },
          { before: "", after: "+ ㄨ u  =  lù  (ㄌㄨˋ)", answer: "l", pinyinHint: "first sound of lù  ㄌ" },
          { before: "", after: "+ ㄨ u  =  kū  (ㄎㄨ)", answer: "k", pinyinHint: "first sound of kū  ㄎ" },
          { before: "", after: "+ ㄨ u  =  hú  (ㄏㄨˊ)", answer: "h", pinyinHint: "first sound of hú  ㄏ" }
        ]
      },
      {
        type: "listen-pick",
        title: "聽一聽：Which Tone Did You Hear?",
        instructions: "Tap ▶ Listen, then choose the pinyin with the matching tone.",
        items: [
          { say: "媽", answer: 0, options: [{ label: "mā  ˉ  1st (flat)" }, { label: "mà  ˋ  4th (falling)" }] },
          { say: "麻", answer: 1, options: [{ label: "mā  ˉ  1st (flat)" }, { label: "má  ˊ  2nd (rising)" }] },
          { say: "馬", answer: 0, options: [{ label: "mǎ  ˇ  3rd (dip)" }, { label: "má  ˊ  2nd (rising)" }] },
          { say: "罵", answer: 1, options: [{ label: "mǎ  ˇ  3rd (dip)" }, { label: "mà  ˋ  4th (falling)" }] },
          { say: "爸", answer: 1, options: [{ label: "bā  ˉ  1st (flat)" }, { label: "bà  ˋ  4th (falling)" }] },
          { say: "哥", answer: 0, options: [{ label: "gē  ˉ  1st (flat)" }, { label: "gě  ˇ  3rd (dip)" }] },
          { say: "姐", answer: 0, options: [{ label: "jiě  ˇ  3rd (dip)" }, { label: "jiè  ˋ  4th (falling)" }] },
          { say: "弟", answer: 0, options: [{ label: "dì  ˋ  4th (falling)" }, { label: "dí  ˊ  2nd (rising)" }] }
        ]
      },
      {
        type: "fill-blank",
        title: "第幾聲：Which Tone?",
        instructions: "Choose the tone for each syllable.",
        wordBank: ["1st ˉ", "2nd ˊ", "3rd ˇ", "4th ˋ"],
        items: [
          { before: "mā  (ㄇㄚ)  is", after: "tone", answer: "1st ˉ", pinyinHint: "high and flat" },
          { before: "má  (ㄇㄚˊ)  is", after: "tone", answer: "2nd ˊ", pinyinHint: "rising" },
          { before: "mǎ  (ㄇㄚˇ)  is", after: "tone", answer: "3rd ˇ", pinyinHint: "dips down then up" },
          { before: "mà  (ㄇㄚˋ)  is", after: "tone", answer: "4th ˋ", pinyinHint: "falling" },
          { before: "bà  (ㄅㄚˋ)  is", after: "tone", answer: "4th ˋ", pinyinHint: "falling" },
          { before: "nǐ  (ㄋㄧˇ)  is", after: "tone", answer: "3rd ˇ", pinyinHint: "dips down then up" }
        ]
      }
    ],

    culture: {
      title: "What is pinyin? 什麼是拼音？",
      englishText: "Pinyin phonics works like English phonics: first learn the sound each letter makes (b, p, m, f...), then blend a first sound with a vowel to build a syllable — b + a = bā. Every sound has two writings: the pinyin letter and its zhuyin symbol, shown together on each card (ㄅ b + ㄚ a = ㄅㄚ). Tap 🔊 on a card to hear the sound, and say it back out loud. Every syllable also has a tone: 1st (high and flat), 2nd (rising), 3rd (dipping), 4th (falling) — the same sound with a different tone is a different word. The Writing tab lets you trace each zhuyin symbol. Tip for the sounds: the first sound is just the beginning of the syllable, so say 'bo', then try to say only the 'b' part."
    }
  });
})();
