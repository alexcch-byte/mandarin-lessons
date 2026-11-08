// Homework 7 — the seventh set of Zhuyin (Bopomofo, 注音符號) phonetic symbols:
// the four vowels ㄚㄛㄜㄝ (a, o, e, ê), continuing on from homework-6's ㄧㄨㄩ.
// The worksheet teaches each symbol with one picture word:
//   ㄚ a — 挖土機 (excavator)   ㄛ o — 火箭 (rocket)
//   ㄜ e — 鱷魚 (crocodile)     ㄝ ê — 雪人 (snowman)
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "homework-7",
  category: true,
  icon: "📝",
  bookTitle: "Homework",
  title: "本週功課：注音符號",
  titlePinyin: "Běnzhōu gōngkè: zhùyīn fúhào",
  titleEnglish: "This Week's Homework: Zhuyin ㄚㄛㄜㄝ (a, o, e, ê)",
  dateAdded: "2026-11-08",

  vocabulary: [
    { hanzi: "挖土機", pinyin: "wātǔjī", english: "excavator  ·  ㄚ", emoji: "🏗️", group: "🚀 Homework Words" },
    { hanzi: "火箭", pinyin: "huǒjiàn", english: "rocket  ·  ㄛ", emoji: "🚀", group: "🚀 Homework Words" },
    { hanzi: "鱷魚", pinyin: "èyú", english: "crocodile  ·  ㄜ", emoji: "🐊", group: "🚀 Homework Words" },
    { hanzi: "雪人", pinyin: "xuěrén", english: "snowman  ·  ㄝ", emoji: "⛄", group: "🚀 Homework Words" }
  ],

  writingPractice: [
    { hanzi: "ㄚ", pinyin: "a", english: "zhuyin symbol, as in 挖土機 wātǔjī (excavator)", zhuyin: true, wordHanzi: "挖土機" },
    { hanzi: "ㄛ", pinyin: "o", english: "zhuyin symbol, as in 火箭 huǒjiàn (rocket)", zhuyin: true, wordHanzi: "火箭" },
    { hanzi: "ㄜ", pinyin: "e", english: "zhuyin symbol, as in 鱷魚 èyú (crocodile)", zhuyin: true, wordHanzi: "鱷魚" },
    { hanzi: "ㄝ", pinyin: "ê", english: "zhuyin symbol, as in 雪人 xuěrén (snowman)", zhuyin: true, wordHanzi: "雪人" }
  ],

  exercises: [
    {
      type: "match-emoji",
      title: "配對：Match the Homework Words",
      instructions: "Match each Chinese word to the correct picture.",
      items: [
        { hanzi: "挖土機", pinyin: "wātǔjī", emoji: "🏗️" },
        { hanzi: "火箭", pinyin: "huǒjiàn", emoji: "🚀" },
        { hanzi: "鱷魚", pinyin: "èyú", emoji: "🐊" },
        { hanzi: "雪人", pinyin: "xuěrén", emoji: "⛄" }
      ]
    },
    {
      type: "fill-blank",
      title: "填注音：Fill in the Missing Symbol",
      instructions: "Tap 🔊 to hear the word. Which zhuyin vowel symbol does it go with?",
      wordBank: ["ㄚ", "ㄛ", "ㄜ", "ㄝ"],
      items: [
        { before: "", after: "— 挖土機 excavator 🏗️", say: "挖土機", answer: "ㄚ", pinyinHint: "wātǔjī" },
        { before: "", after: "— 火箭 rocket 🚀", say: "火箭", answer: "ㄛ", pinyinHint: "huǒjiàn" },
        { before: "", after: "— 鱷魚 crocodile 🐊", say: "鱷魚", answer: "ㄜ", pinyinHint: "èyú" },
        { before: "", after: "— 雪人 snowman ⛄", say: "雪人", answer: "ㄝ", pinyinHint: "xuěrén" }
      ]
    },
    {
      type: "fill-blank",
      title: "配對：Zhuyin → Pinyin",
      instructions: "Choose the pinyin letter that matches each zhuyin symbol.",
      wordBank: ["a", "o", "e", "ê"],
      items: [
        { before: "ㄚ  →", after: "", answer: "a", pinyinHint: "ㄚ = ?" },
        { before: "ㄛ  →", after: "", answer: "o", pinyinHint: "ㄛ = ?" },
        { before: "ㄜ  →", after: "", answer: "e", pinyinHint: "ㄜ = ?" },
        { before: "ㄝ  →", after: "", answer: "ê", pinyinHint: "ㄝ = ?" }
      ]
    },
    {
      type: "read-aloud",
      title: "念一念：Read the Words Aloud",
      instructions: "Tap each word and say it out loud.",
      items: ["挖土機", "火箭", "鱷魚", "雪人"]
    }
  ]
});
