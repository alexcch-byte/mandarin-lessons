// Homework 5 — the fifth set of Zhuyin (Bopomofo, 注音符號) phonetic symbols:
// ㄗㄘㄙ (z c s), continuing on from homework-4's ㄓㄔㄕㄖ.
// The worksheet teaches each symbol with one picture word:
//   ㄗ z — 粽子 (rice dumpling)   ㄘ c — 草莓 (strawberry)   ㄙ s — 三明治 (sandwich)
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "homework-5",
  category: true,
  icon: "📝",
  bookTitle: "Homework",
  title: "本週功課：注音符號",
  titlePinyin: "Běnzhōu gōngkè: zhùyīn fúhào",
  titleEnglish: "This Week's Homework: Zhuyin ㄗㄘㄙ (z c s)",
  dateAdded: "2026-10-26",

  vocabulary: [
    { hanzi: "粽子", pinyin: "zòngzi", english: "rice dumpling  ·  ㄗ", emoji: "🫔", group: "🍓 Homework Words" },
    { hanzi: "草莓", pinyin: "cǎoméi", english: "strawberry  ·  ㄘ", emoji: "🍓", group: "🍓 Homework Words" },
    { hanzi: "三明治", pinyin: "sānmíngzhì", english: "sandwich  ·  ㄙ", emoji: "🥪", group: "🍓 Homework Words" }
  ],

  writingPractice: [
    { hanzi: "ㄗ", pinyin: "z", english: "zhuyin symbol, as in 粽子 zòngzi (rice dumpling)", zhuyin: true, wordHanzi: "粽子" },
    { hanzi: "ㄘ", pinyin: "c", english: "zhuyin symbol, as in 草莓 cǎoméi (strawberry)", zhuyin: true, wordHanzi: "草莓" },
    { hanzi: "ㄙ", pinyin: "s", english: "zhuyin symbol, as in 三明治 sānmíngzhì (sandwich)", zhuyin: true, wordHanzi: "三明治" }
  ],

  exercises: [
    {
      type: "match-emoji",
      title: "配對：Match the Homework Words",
      instructions: "Match each Chinese word to the correct picture.",
      items: [
        { hanzi: "粽子", pinyin: "zòngzi", emoji: "🫔" },
        { hanzi: "草莓", pinyin: "cǎoméi", emoji: "🍓" },
        { hanzi: "三明治", pinyin: "sānmíngzhì", emoji: "🥪" }
      ]
    },
    {
      type: "fill-blank",
      title: "填注音：Fill in the Missing Symbol",
      instructions: "Each word is missing its first sound. Choose the right zhuyin symbol.",
      wordBank: ["ㄗ", "ㄘ", "ㄙ"],
      items: [
        { before: "", after: "òngzi — 粽子 rice dumpling 🫔", say: "粽子", answer: "ㄗ", pinyinHint: "zòngzi" },
        { before: "", after: "ǎoméi — 草莓 strawberry 🍓", say: "草莓", answer: "ㄘ", pinyinHint: "cǎoméi" },
        { before: "", after: "ānmíngzhì — 三明治 sandwich 🥪", say: "三明治", answer: "ㄙ", pinyinHint: "sānmíngzhì" }
      ]
    },
    {
      type: "fill-blank",
      title: "配對：Zhuyin → Pinyin",
      instructions: "Choose the pinyin letter that matches each zhuyin symbol.",
      wordBank: ["z", "c", "s"],
      items: [
        { before: "ㄗ  →", after: "", answer: "z", pinyinHint: "ㄗ = ?" },
        { before: "ㄘ  →", after: "", answer: "c", pinyinHint: "ㄘ = ?" },
        { before: "ㄙ  →", after: "", answer: "s", pinyinHint: "ㄙ = ?" }
      ]
    },
    {
      type: "read-aloud",
      title: "念一念：Read the Words Aloud",
      instructions: "Tap each word and say it out loud.",
      items: ["粽子", "草莓", "三明治"]
    }
  ]
});
