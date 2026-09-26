// This week's homework — not tied to the numbered book lessons. Covers the
// second set of four Zhuyin (Bopomofo, 注音符號) phonetic symbols: ㄉㄊㄋㄌ,
// continuing on from homework-1.js's ㄅㄆㄇㄈ.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "homework-2",
  category: true,
  bookTitle: "Homework",
  title: "本週功課：注音符號",
  titlePinyin: "Běnzhōu gōngkè: zhùyīn fúhào",
  titleEnglish: "This Week's Homework: Zhuyin ㄉㄊㄋㄌ",
  dateAdded: "2026-09-26",

  vocabulary: [
    { hanzi: "蛋糕", pinyin: "dàngāo", english: "cake", emoji: "🎂", group: "🎂 Homework Words" },
    { hanzi: "太陽", pinyin: "tàiyáng", english: "sun", emoji: "☀️", group: "🎂 Homework Words" },
    { hanzi: "南瓜", pinyin: "nánguā", english: "pumpkin", emoji: "🎃", group: "🎂 Homework Words" },
    { hanzi: "老虎", pinyin: "lǎohǔ", english: "tiger", emoji: "🐯", group: "🎂 Homework Words" }
  ],

  // Zhuyin symbols aren't Han characters, so they use the plain trace-over
  // canvas (see js/app.js renderZhuyinTracer) instead of Hanzi Writer's
  // stroke-order animation/quiz. `wordHanzi` is what the "🔊 Hear the word"
  // button plays, since the bare symbol itself isn't reliably speakable.
  writingPractice: [
    { hanzi: "ㄉ", pinyin: "d", english: "zhuyin symbol, as in 蛋糕 dàngāo (cake)", zhuyin: true, wordHanzi: "蛋糕" },
    { hanzi: "ㄊ", pinyin: "t", english: "zhuyin symbol, as in 太陽 tàiyáng (sun)", zhuyin: true, wordHanzi: "太陽" },
    { hanzi: "ㄋ", pinyin: "n", english: "zhuyin symbol, as in 南瓜 nánguā (pumpkin)", zhuyin: true, wordHanzi: "南瓜" },
    { hanzi: "ㄌ", pinyin: "l", english: "zhuyin symbol, as in 老虎 lǎohǔ (tiger)", zhuyin: true, wordHanzi: "老虎" }
  ],

  exercises: [
    {
      type: "match-emoji",
      title: "配對：Match the Homework Words",
      instructions: "Match each Chinese word to the correct picture.",
      items: [
        { hanzi: "蛋糕", pinyin: "dàngāo", emoji: "🎂" },
        { hanzi: "太陽", pinyin: "tàiyáng", emoji: "☀️" },
        { hanzi: "南瓜", pinyin: "nánguā", emoji: "🎃" },
        { hanzi: "老虎", pinyin: "lǎohǔ", emoji: "🐯" }
      ]
    },
    {
      type: "fill-blank",
      title: "填注音：Fill in the Missing Symbol",
      instructions: "Each word is missing its first sound. Choose the right zhuyin symbol.",
      wordBank: ["ㄉ", "ㄊ", "ㄋ", "ㄌ"],
      items: [
        { before: "", after: "àngāo — 蛋糕 cake 🎂", answer: "ㄉ", pinyinHint: "dàngāo" },
        { before: "", after: "àiyáng — 太陽 sun ☀️", answer: "ㄊ", pinyinHint: "tàiyáng" },
        { before: "", after: "ánguā — 南瓜 pumpkin 🎃", answer: "ㄋ", pinyinHint: "nánguā" },
        { before: "", after: "ǎohǔ — 老虎 tiger 🐯", answer: "ㄌ", pinyinHint: "lǎohǔ" }
      ]
    },
    {
      type: "read-aloud",
      title: "念一念：Read the Words Aloud",
      instructions: "Tap each word and say it out loud.",
      items: ["蛋糕", "太陽", "南瓜", "老虎"]
    }
  ]
});
