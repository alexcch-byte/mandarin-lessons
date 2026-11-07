// Pinyin blending chapter — putting pinyin sounds together: first sound
// (initial) + vowel sound (final) = syllable, e.g. b + ao = bāo.
// Letters and sounds only (no example words). Each card shows the pinyin
// syllable, the zhuyin way of writing it, and the equation; tap 🔊 to hear it.
// The recordings are single characters (包 for "bāo" ...) used only as audio,
// never shown. Follows on from the "pinyin" chapter (initials, finals, tones).
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

(function () {
  var ZY_INIT = { b: "ㄅ", p: "ㄆ", m: "ㄇ", f: "ㄈ", d: "ㄉ", t: "ㄊ", n: "ㄋ", l: "ㄌ", g: "ㄍ", k: "ㄎ", h: "ㄏ",
    j: "ㄐ", q: "ㄑ", x: "ㄒ", zh: "ㄓ", ch: "ㄔ", sh: "ㄕ", r: "ㄖ", z: "ㄗ", c: "ㄘ", s: "ㄙ" };
  var ZY_FINAL = { a: "ㄚ", o: "ㄛ", e: "ㄜ", i: "ㄧ", u: "ㄨ", "ü": "ㄩ", ai: "ㄞ", ao: "ㄠ", ou: "ㄡ",
    an: "ㄢ", en: "ㄣ", ang: "ㄤ", ia: "ㄧㄚ", ie: "ㄧㄝ", "-i": "" };
  var TONE_MARK = ["", "", "ˊ", "ˇ", "ˋ"]; // index = tone number (1st has no mark)

  var G_A = "🧩 Blend with a";
  var G_O = "🧩 Blend with o";
  var G_E = "🧩 Blend with e";
  var G_I = "🧩 Blend with i";
  var G_U = "🧩 Blend with u";
  var G_AI = "🧩 Blend with ai";
  var G_AO = "🧩 Blend with ao";
  var G_OU = "🧩 Blend with ou";
  var G_AN = "🧩 Blend with an";
  var G_EN = "🧩 Blend with en";
  var G_ANG = "🧩 Blend with ang";
  var G_JQX = "🧩 j q x  +  i, ü, ia, ie";
  var G_Z = "🧩 zh ch sh r z c s  +  the humming i";
  var G_ZA = "🧩 zh ch sh z c s  +  a, u, e";

  // [initial, final, the syllable (with tone mark), recording used for the sound, tone 1-4, group]
  var SYL = [
    // a
    ["b", "a", "bā", "八", 1, G_A], ["p", "a", "pā", "趴", 1, G_A], ["m", "a", "mā", "媽", 1, G_A], ["f", "a", "fā", "發", 1, G_A],
    ["d", "a", "dā", "搭", 1, G_A], ["t", "a", "tā", "他", 1, G_A], ["n", "a", "nà", "那", 4, G_A], ["l", "a", "lā", "拉", 1, G_A],
    ["g", "a", "gā", "嘎", 1, G_A], ["k", "a", "kā", "咖", 1, G_A], ["h", "a", "hā", "哈", 1, G_A],
    // o
    ["b", "o", "bō", "波", 1, G_O], ["p", "o", "pō", "坡", 1, G_O], ["m", "o", "mō", "摸", 1, G_O], ["f", "o", "fó", "佛", 2, G_O],
    // e
    ["d", "e", "dé", "得", 2, G_E], ["t", "e", "tè", "特", 4, G_E], ["l", "e", "lè", "樂", 4, G_E],
    ["g", "e", "gē", "哥", 1, G_E], ["k", "e", "kē", "科", 1, G_E], ["h", "e", "hé", "河", 2, G_E],
    // i
    ["b", "i", "bǐ", "比", 3, G_I], ["p", "i", "pí", "皮", 2, G_I], ["m", "i", "mǐ", "米", 3, G_I], ["d", "i", "dí", "笛", 2, G_I],
    ["t", "i", "tī", "梯", 1, G_I], ["n", "i", "nǐ", "你", 3, G_I], ["l", "i", "lì", "力", 4, G_I],
    // u
    ["b", "u", "bù", "不", 4, G_U], ["p", "u", "pū", "撲", 1, G_U], ["m", "u", "mù", "木", 4, G_U], ["f", "u", "fū", "夫", 1, G_U],
    ["d", "u", "dù", "肚", 4, G_U], ["t", "u", "tù", "兔", 4, G_U], ["n", "u", "nú", "奴", 2, G_U], ["l", "u", "lù", "路", 4, G_U],
    ["g", "u", "gǔ", "古", 3, G_U], ["k", "u", "kū", "哭", 1, G_U], ["h", "u", "hú", "湖", 2, G_U],
    // ai
    ["b", "ai", "bái", "白", 2, G_AI], ["p", "ai", "pái", "排", 2, G_AI], ["m", "ai", "mǎi", "買", 3, G_AI], ["d", "ai", "dài", "帶", 4, G_AI],
    ["t", "ai", "tài", "太", 4, G_AI], ["n", "ai", "nǎi", "奶", 3, G_AI], ["l", "ai", "lái", "來", 2, G_AI],
    ["g", "ai", "gāi", "該", 1, G_AI], ["k", "ai", "kāi", "開", 1, G_AI], ["h", "ai", "hǎi", "海", 3, G_AI],
    // ao
    ["b", "ao", "bāo", "包", 1, G_AO], ["p", "ao", "pǎo", "跑", 3, G_AO], ["m", "ao", "māo", "貓", 1, G_AO], ["d", "ao", "dào", "到", 4, G_AO],
    ["t", "ao", "táo", "桃", 2, G_AO], ["l", "ao", "lǎo", "老", 3, G_AO], ["g", "ao", "gāo", "高", 1, G_AO],
    ["k", "ao", "kǎo", "考", 3, G_AO], ["h", "ao", "hǎo", "好", 3, G_AO],
    // ou
    ["m", "ou", "mǒu", "某", 3, G_OU], ["f", "ou", "fǒu", "否", 3, G_OU], ["d", "ou", "dòu", "豆", 4, G_OU], ["t", "ou", "tóu", "頭", 2, G_OU],
    ["l", "ou", "lóu", "樓", 2, G_OU], ["g", "ou", "gǒu", "狗", 3, G_OU], ["k", "ou", "kǒu", "口", 3, G_OU], ["h", "ou", "hòu", "後", 4, G_OU],
    // an
    ["b", "an", "bān", "班", 1, G_AN], ["p", "an", "pán", "盤", 2, G_AN], ["m", "an", "màn", "慢", 4, G_AN], ["f", "an", "fàn", "飯", 4, G_AN],
    ["d", "an", "dàn", "蛋", 4, G_AN], ["t", "an", "tán", "談", 2, G_AN], ["n", "an", "nán", "男", 2, G_AN], ["l", "an", "lán", "藍", 2, G_AN],
    ["g", "an", "gān", "乾", 1, G_AN], ["k", "an", "kàn", "看", 4, G_AN], ["h", "an", "hàn", "漢", 4, G_AN],
    // en
    ["b", "en", "běn", "本", 3, G_EN], ["p", "en", "pén", "盆", 2, G_EN], ["m", "en", "mén", "門", 2, G_EN], ["f", "en", "fēn", "分", 1, G_EN],
    ["g", "en", "gēn", "跟", 1, G_EN], ["k", "en", "kěn", "肯", 3, G_EN], ["h", "en", "hěn", "很", 3, G_EN],
    // ang
    ["b", "ang", "bāng", "幫", 1, G_ANG], ["p", "ang", "pàng", "胖", 4, G_ANG], ["m", "ang", "máng", "忙", 2, G_ANG], ["f", "ang", "fáng", "房", 2, G_ANG],
    ["d", "ang", "dāng", "當", 1, G_ANG], ["t", "ang", "tāng", "湯", 1, G_ANG], ["l", "ang", "láng", "狼", 2, G_ANG],
    ["g", "ang", "gāng", "剛", 1, G_ANG], ["k", "ang", "kāng", "康", 1, G_ANG], ["h", "ang", "háng", "航", 2, G_ANG],
    // j q x
    ["j", "i", "jī", "雞", 1, G_JQX], ["q", "i", "qī", "七", 1, G_JQX], ["x", "i", "xī", "西", 1, G_JQX],
    ["j", "ü", "jū", "居", 1, G_JQX], ["q", "ü", "qù", "去", 4, G_JQX], ["x", "ü", "xū", "需", 1, G_JQX],
    ["j", "ia", "jiā", "家", 1, G_JQX], ["q", "ia", "qiā", "掐", 1, G_JQX], ["x", "ia", "xià", "下", 4, G_JQX],
    ["j", "ie", "jiě", "姐", 3, G_JQX], ["q", "ie", "qiě", "且", 3, G_JQX], ["x", "ie", "xiè", "謝", 4, G_JQX],
    // zh ch sh r z c s + the humming i
    ["zh", "-i", "zhī", "知", 1, G_Z], ["ch", "-i", "chī", "吃", 1, G_Z], ["sh", "-i", "shì", "是", 4, G_Z], ["r", "-i", "rì", "日", 4, G_Z],
    ["z", "-i", "zì", "字", 4, G_Z], ["c", "-i", "cí", "詞", 2, G_Z], ["s", "-i", "sì", "四", 4, G_Z],
    // zh ch sh z c s + a, u, e
    ["zh", "a", "zhà", "炸", 4, G_ZA], ["ch", "a", "chá", "茶", 2, G_ZA], ["sh", "a", "shā", "沙", 1, G_ZA],
    ["z", "a", "zá", "雜", 2, G_ZA], ["c", "a", "cā", "擦", 1, G_ZA], ["s", "a", "sǎ", "撒", 3, G_ZA],
    ["zh", "u", "zhū", "豬", 1, G_ZA], ["ch", "u", "chū", "出", 1, G_ZA], ["sh", "u", "shū", "書", 1, G_ZA], ["r", "u", "rú", "如", 2, G_ZA],
    ["z", "u", "zú", "足", 2, G_ZA], ["c", "u", "cù", "醋", 4, G_ZA], ["s", "u", "sù", "素", 4, G_ZA],
    ["zh", "e", "zhè", "這", 4, G_ZA], ["ch", "e", "chē", "車", 1, G_ZA], ["sh", "e", "shé", "蛇", 2, G_ZA], ["r", "e", "rè", "熱", 4, G_ZA],
    ["z", "e", "zé", "則", 2, G_ZA], ["c", "e", "cè", "冊", 4, G_ZA], ["s", "e", "sè", "色", 4, G_ZA]
  ];

  function finalLabel(f) { return f === "-i" ? "i" : f; }
  function zhuyinOf(r) { return ZY_INIT[r[0]] + ZY_FINAL[r[1]] + TONE_MARK[r[4]]; }
  function equation(r) {
    var fz = r[1] === "-i" ? "(humming i)" : (ZY_FINAL[r[1]] + " " + r[1]);
    return ZY_INIT[r[0]] + " " + r[0] + "  +  " + fz + "  =  " + zhuyinOf(r);
  }

  var bySyl = {};
  SYL.forEach(function (r) { bySyl[r[2]] = r; });

  var vocab = SYL.map(function (r) {
    return { hanzi: r[2], say: r[3], pinyin: equation(r), english: "", emoji: "🧩", noEnglish: true, group: r[5] };
  });

  // "Build the syllable": first sound + vowel = ?
  function buildItems(list) {
    return list.map(function (s) {
      var r = bySyl[s];
      var fz = r[1] === "-i" ? "(humming i)" : (ZY_FINAL[r[1]] + " " + r[1]);
      return { before: ZY_INIT[r[0]] + " " + r[0] + "  +  " + fz + "  =", after: "", answer: s, pinyinHint: zhuyinOf(r) };
    });
  }
  function buildExercise(title, instr, list) {
    return { type: "fill-blank", title: title, instructions: instr, wordBank: list.slice(), items: buildItems(list) };
  }

  // "Which vowel is hiding?" first sound + ___ = syllable
  function finalItems(list) {
    return list.map(function (s) {
      var r = bySyl[s];
      return { before: ZY_INIT[r[0]] + " " + r[0] + "  +", after: "=  " + s + "  (" + zhuyinOf(r) + ")", say: r[3], answer: finalLabel(r[1]), pinyinHint: "vowel of " + s };
    });
  }
  // "Which first sound is hiding?" ___ + vowel = syllable
  function initialItems(list) {
    return list.map(function (s) {
      var r = bySyl[s];
      var fz = r[1] === "-i" ? "(humming i)" : (ZY_FINAL[r[1]] + " " + r[1]);
      return { before: "", after: "+  " + fz + "  =  " + s + "  (" + zhuyinOf(r) + ")", say: r[3], answer: r[0], pinyinHint: "first sound of " + s };
    });
  }

  // listen-pick: hear a syllable, choose between it and a look-alike sound.
  function lp(s, wrong) {
    var r = bySyl[s];
    var wrongFirst = (s.charCodeAt(0) + s.length) % 2 === 0; // alternate which side is correct
    var right = { label: s + "  " + zhuyinOf(r) };
    var other = { label: wrong };
    return wrongFirst ? { say: r[3], answer: 1, options: [other, right] } : { say: r[3], answer: 0, options: [right, other] };
  }

  function lpItems(pairs) {
    return pairs.map(function (p) {
      var w = bySyl[p[1]];
      var wrongLabel = p[1] + "  " + (w ? zhuyinOf(w) : p[2]);
      return lp(p[0], wrongLabel);
    });
  }

  window.MANDARIN_LESSONS.push({
    id: "pinyin-blending",
    category: true,
    icon: "🧩",
    bookTitle: "Pinyin",
    title: "拼音拼讀",
    titlePinyin: "Pīnyīn pīndú",
    titleEnglish: "Pinyin Blending: put the sounds together",
    dateAdded: "2026-11-07",

    vocabulary: vocab,

    exercises: [
      buildExercise("拼一拼 1：Blend with a, o, e",
        "Blend the first sound with the vowel. Which syllable do they make?",
        ["bā", "mā", "tā", "lā", "bō", "mō", "gē", "hé"]),
      buildExercise("拼一拼 2：Blend with i and u",
        "Blend the first sound with the vowel. Which syllable do they make?",
        ["bǐ", "mǐ", "nǐ", "lì", "bù", "tù", "lù", "kū"]),
      buildExercise("拼一拼 3：Blend with ai, ao, ou",
        "Blend the first sound with the vowel sound. Which syllable do they make?",
        ["bái", "mǎi", "kāi", "bāo", "hǎo", "gāo", "dòu", "gǒu"]),
      buildExercise("拼一拼 4：Blend with an, en, ang",
        "Blend the first sound with the vowel sound. Which syllable do they make?",
        ["bān", "fàn", "kàn", "běn", "hěn", "fēn", "tāng", "fáng"]),
      buildExercise("拼一拼 5：j q x",
        "Blend j, q or x with the vowel. (Remember: ü is written u after j, q and x!)",
        ["jī", "qī", "xī", "jū", "qù", "jiā", "xià", "xiè"]),
      buildExercise("拼一拼 6：zh ch sh r z c s",
        "Blend the first sound with the vowel. Which syllable do they make?",
        ["zhī", "chī", "shì", "rì", "sì", "chá", "shū", "chē"]),

      {
        type: "fill-blank",
        title: "拆一拆 1：Which Vowel Is Hiding?",
        instructions: "Tap 🔊 to hear the syllable. Which vowel sound goes with the first sound?",
        wordBank: ["a", "o", "e", "i", "u", "ai", "ao", "ou", "an", "en", "ang"],
        items: finalItems(["bā", "mō", "hé", "nǐ", "kū", "mǎi", "pǎo", "dòu", "fàn", "hěn", "fáng"])
      },
      {
        type: "fill-blank",
        title: "拆一拆 2：Which First Sound Is Hiding?",
        instructions: "Tap 🔊 to hear the syllable. Which first sound starts it?",
        wordBank: ["b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h"],
        items: initialItems(["bāo", "pǎo", "māo", "fàn", "dào", "tóu", "nán", "lái", "gāo", "kàn", "hǎo"])
      },
      {
        type: "fill-blank",
        title: "拆一拆 3：j q x or zh ch sh?",
        instructions: "Tap 🔊 to hear the syllable. Which first sound starts it?",
        wordBank: ["j", "q", "x", "zh", "ch", "sh", "z", "c", "s"],
        items: initialItems(["jiā", "qī", "xià", "zhī", "chī", "shū", "zì", "cí", "sì"])
      },

      {
        type: "listen-pick",
        title: "聽一聽 1：Which First Sound?",
        instructions: "Tap ▶ Listen, then choose the syllable you hear. The vowel is the same — listen to the beginning!",
        items: lpItems([
          ["bāo", "pāo", "ㄆㄠ"], ["pǎo", "bǎo", "ㄅㄠˇ"], ["hǎo", "kǎo", "ㄎㄠˇ"], ["dòu", "tòu", "ㄊㄡˋ"],
          ["gǒu", "kǒu", "ㄎㄡˇ"], ["kàn", "gàn", "ㄍㄢˋ"], ["fàn", "hàn", "ㄏㄢˋ"], ["běn", "pěn", "ㄆㄣˇ"],
          ["lái", "tái", "ㄊㄞˊ"], ["mǎi", "nǎi", "ㄋㄞˇ"]
        ])
      },
      {
        type: "listen-pick",
        title: "聽一聽 2：Which Vowel Sound?",
        instructions: "Tap ▶ Listen, then choose the syllable you hear. The first sound is the same — listen to the ending!",
        items: lpItems([
          ["fēn", "fān", "ㄈㄢ"], ["fáng", "fán", "ㄈㄢˊ"], ["tāng", "tān", "ㄊㄢ"], ["bāo", "bāi", "ㄅㄞ"],
          ["gāi", "gāo", "ㄍㄠ"], ["hěn", "hǎn", "ㄏㄢˇ"], ["kāng", "kān", "ㄎㄢ"], ["gāo", "gān", "ㄍㄢ"]
        ])
      },
      {
        type: "listen-pick",
        title: "聽一聽 3：j q x and zh ch sh",
        instructions: "Tap ▶ Listen, then choose the syllable you hear.",
        items: lpItems([
          ["jiā", "xiā", "ㄒㄧㄚ"], ["xiè", "jiè", "ㄐㄧㄝˋ"], ["qī", "xī", "ㄒㄧ"], ["qù", "jù", "ㄐㄩˋ"],
          ["shì", "sì", "ㄙˋ"], ["chī", "zhī", "ㄓ"], ["chē", "shē", "ㄕㄜ"], ["zhū", "chū", "ㄔㄨ"],
          ["shū", "sū", "ㄙㄨ"], ["rì", "lì", "ㄌㄧˋ"]
        ])
      },

      {
        type: "fill-blank",
        title: "配對：Zhuyin → Pinyin Syllables",
        instructions: "Read the zhuyin and blend it. Choose the pinyin syllable.",
        wordBank: ["bāo", "hǎo", "māo", "gǒu", "fàn", "hěn", "tāng", "kāi"],
        items: [
          { before: "ㄅㄠ  →", after: "", answer: "bāo", pinyinHint: "ㄅ + ㄠ" },
          { before: "ㄏㄠˇ  →", after: "", answer: "hǎo", pinyinHint: "ㄏ + ㄠ, 3rd tone" },
          { before: "ㄇㄠ  →", after: "", answer: "māo", pinyinHint: "ㄇ + ㄠ" },
          { before: "ㄍㄡˇ  →", after: "", answer: "gǒu", pinyinHint: "ㄍ + ㄡ, 3rd tone" },
          { before: "ㄈㄢˋ  →", after: "", answer: "fàn", pinyinHint: "ㄈ + ㄢ, 4th tone" },
          { before: "ㄏㄣˇ  →", after: "", answer: "hěn", pinyinHint: "ㄏ + ㄣ, 3rd tone" },
          { before: "ㄊㄤ  →", after: "", answer: "tāng", pinyinHint: "ㄊ + ㄤ" },
          { before: "ㄎㄞ  →", after: "", answer: "kāi", pinyinHint: "ㄎ + ㄞ" }
        ]
      },
      {
        type: "fill-blank",
        title: "配對：Pinyin → Zhuyin Syllables",
        instructions: "Choose the zhuyin that spells each pinyin syllable.",
        wordBank: ["ㄅㄚ", "ㄇㄚ", "ㄋㄧˇ", "ㄌㄨˋ", "ㄐㄧㄚ", "ㄒㄧㄝˋ", "ㄔ", "ㄕㄨ"],
        items: [
          { before: "bā  →", after: "", answer: "ㄅㄚ", pinyinHint: "b + a" },
          { before: "mā  →", after: "", answer: "ㄇㄚ", pinyinHint: "m + a" },
          { before: "nǐ  →", after: "", answer: "ㄋㄧˇ", pinyinHint: "n + i, 3rd tone" },
          { before: "lù  →", after: "", answer: "ㄌㄨˋ", pinyinHint: "l + u, 4th tone" },
          { before: "jiā  →", after: "", answer: "ㄐㄧㄚ", pinyinHint: "j + ia" },
          { before: "xiè  →", after: "", answer: "ㄒㄧㄝˋ", pinyinHint: "x + ie, 4th tone" },
          { before: "chī  →", after: "", answer: "ㄔ", pinyinHint: "ch + the humming i (ㄔ alone)" },
          { before: "shū  →", after: "", answer: "ㄕㄨ", pinyinHint: "sh + u" }
        ]
      }
    ],

    culture: {
      title: "How to blend pinyin 怎麼拼拼音",
      englishText: "To read a pinyin syllable, put two sounds together: a first sound (b, p, m, f...) plus a vowel sound (a, o, e, i, u, ai, ao...). Say the first sound, slide straight into the vowel, and say it smoothly — b + a = bā, b + ao = bāo. Zhuyin works the same way: ㄅ + ㄠ = ㄅㄠ. The tone mark goes on the vowel and tells you how the voice moves (1st high and flat, 2nd rising, 3rd dipping, 4th falling). Three things to watch for: (1) after j, q and x the sound ü is written as plain u, so jū, qù and xū all use the ü sound; (2) with zh, ch, sh, r, z, c and s, the i is a short humming sound (zhī, chī, shì) and zhuyin does not write ㄧ for it at all; (3) a few combinations (like b + e or j + a) are not used, so you only need to learn the ones on the cards. Tap 🔊 on a card to hear the syllable, say it back, then try the games!"
    }
  });
})();
