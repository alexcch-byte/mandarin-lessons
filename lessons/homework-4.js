// Homework 4 — the fourth set of Zhuyin (Bopomofo, 注音符號) phonetic symbols:
// ㄓㄔㄕㄖ (zh ch sh r), continuing on from homework-3's ㄍㄎㄏ ㄐㄑㄒ.
// The worksheet teaches each symbol with one picture word:
//   ㄓ zh — 直升機 (helicopter)   ㄔ ch — 長頸鹿 (giraffe)
//   ㄕ sh — 獅子 (lion)           ㄖ r  — 熱氣球 (hot air balloon)
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "homework-4",
  category: true,
  icon: "📝",
  bookTitle: "Homework",
  title: "本週功課：注音符號",
  titlePinyin: "Běnzhōu gōngkè: zhùyīn fúhào",
  titleEnglish: "This Week's Homework: Zhuyin ㄓㄔㄕㄖ (zh ch sh r)",
  dateAdded: "2026-10-18",

  vocabulary: [
    { hanzi: "直升機", pinyin: "zhíshēngjī", english: "helicopter  ·  ㄓ", emoji: "🚁", group: "🚁 Homework Words" },
    { hanzi: "長頸鹿", pinyin: "chángjǐnglù", english: "giraffe  ·  ㄔ", emoji: "🦒", group: "🚁 Homework Words" },
    { hanzi: "獅子", pinyin: "shīzi", english: "lion  ·  ㄕ", emoji: "🦁", group: "🚁 Homework Words" },
    { hanzi: "熱氣球", pinyin: "rèqìqiú", english: "hot air balloon  ·  ㄖ", emoji: "🎈", group: "🚁 Homework Words" }
  ],

  writingPractice: [
    { hanzi: "ㄓ", pinyin: "zh", english: "zhuyin symbol, as in 直升機 zhíshēngjī (helicopter)", zhuyin: true, wordHanzi: "直升機" },
    { hanzi: "ㄔ", pinyin: "ch", english: "zhuyin symbol, as in 長頸鹿 chángjǐnglù (giraffe)", zhuyin: true, wordHanzi: "長頸鹿" },
    { hanzi: "ㄕ", pinyin: "sh", english: "zhuyin symbol, as in 獅子 shīzi (lion)", zhuyin: true, wordHanzi: "獅子" },
    { hanzi: "ㄖ", pinyin: "r", english: "zhuyin symbol, as in 熱氣球 rèqìqiú (hot air balloon)", zhuyin: true, wordHanzi: "熱氣球" }
  ],

  exercises: [
    {
      type: "match-emoji",
      title: "配對：Match the Homework Words",
      instructions: "Match each Chinese word to the correct picture.",
      items: [
        { hanzi: "直升機", pinyin: "zhíshēngjī", emoji: "🚁" },
        { hanzi: "長頸鹿", pinyin: "chángjǐnglù", emoji: "🦒" },
        { hanzi: "獅子", pinyin: "shīzi", emoji: "🦁" },
        { hanzi: "熱氣球", pinyin: "rèqìqiú", emoji: "🎈" }
      ]
    },
    {
      type: "fill-blank",
      title: "填注音：Fill in the Missing Symbol",
      instructions: "Each word is missing its first sound. Choose the right zhuyin symbol.",
      wordBank: ["ㄓ", "ㄔ", "ㄕ", "ㄖ"],
      items: [
        { before: "", after: "íshēngjī — 直升機 helicopter 🚁", say: "直升機", answer: "ㄓ", pinyinHint: "zhíshēngjī" },
        { before: "", after: "ángjǐnglù — 長頸鹿 giraffe 🦒", say: "長頸鹿", answer: "ㄔ", pinyinHint: "chángjǐnglù" },
        { before: "", after: "īzi — 獅子 lion 🦁", say: "獅子", answer: "ㄕ", pinyinHint: "shīzi" },
        { before: "", after: "èqìqiú — 熱氣球 hot air balloon 🎈", say: "熱氣球", answer: "ㄖ", pinyinHint: "rèqìqiú" }
      ]
    },
    {
      type: "fill-blank",
      title: "配對：Zhuyin → Pinyin",
      instructions: "Choose the pinyin letters that match each zhuyin symbol.",
      wordBank: ["zh", "ch", "sh", "r"],
      items: [
        { before: "ㄓ  →", after: "", answer: "zh", pinyinHint: "ㄓ = ?" },
        { before: "ㄔ  →", after: "", answer: "ch", pinyinHint: "ㄔ = ?" },
        { before: "ㄕ  →", after: "", answer: "sh", pinyinHint: "ㄕ = ?" },
        { before: "ㄖ  →", after: "", answer: "r", pinyinHint: "ㄖ = ?" }
      ]
    },
    {
      type: "read-aloud",
      title: "念一念：Read the Words Aloud",
      instructions: "Tap each word and say it out loud.",
      items: ["直升機", "長頸鹿", "獅子", "熱氣球"]
    }
  ]
});
