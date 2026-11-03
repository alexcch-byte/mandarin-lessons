// Homework 6 — the sixth set of Zhuyin (Bopomofo, 注音符號) phonetic symbols:
// the three medial vowels ㄧㄨㄩ (i/y, u/w, ü/yu), continuing on from homework-5's ㄗㄘㄙ.
// The worksheet teaches each symbol with one picture word:
//   ㄧ i/y — 醫生 (doctor)   ㄨ u/w — 烏龜 (turtle)   ㄩ ü/yu — 魚 (fish)
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "homework-6",
  category: true,
  icon: "📝",
  bookTitle: "Homework",
  title: "本週功課：注音符號",
  titlePinyin: "Běnzhōu gōngkè: zhùyīn fúhào",
  titleEnglish: "This Week's Homework: Zhuyin ㄧㄨㄩ (i/y, u/w, ü/yu)",
  dateAdded: "2026-11-03",

  vocabulary: [
    { hanzi: "醫生", pinyin: "yīshēng", english: "doctor  ·  ㄧ", emoji: "🧑‍⚕️", group: "🐢 Homework Words" },
    { hanzi: "烏龜", pinyin: "wūguī", english: "turtle  ·  ㄨ", emoji: "🐢", group: "🐢 Homework Words" },
    { hanzi: "魚", pinyin: "yú", english: "fish  ·  ㄩ", emoji: "🐟", group: "🐢 Homework Words" }
  ],

  writingPractice: [
    { hanzi: "ㄧ", pinyin: "i / y", english: "zhuyin symbol, as in 醫生 yīshēng (doctor)", zhuyin: true, wordHanzi: "醫生" },
    { hanzi: "ㄨ", pinyin: "u / w", english: "zhuyin symbol, as in 烏龜 wūguī (turtle)", zhuyin: true, wordHanzi: "烏龜" },
    { hanzi: "ㄩ", pinyin: "ü / yu", english: "zhuyin symbol, as in 魚 yú (fish)", zhuyin: true, wordHanzi: "魚" }
  ],

  exercises: [
    {
      type: "match-emoji",
      title: "配對：Match the Homework Words",
      instructions: "Match each Chinese word to the correct picture.",
      items: [
        { hanzi: "醫生", pinyin: "yīshēng", emoji: "🧑‍⚕️" },
        { hanzi: "烏龜", pinyin: "wūguī", emoji: "🐢" },
        { hanzi: "魚", pinyin: "yú", emoji: "🐟" }
      ]
    },
    {
      type: "fill-blank",
      title: "填注音：Fill in the Missing Symbol",
      instructions: "Each word starts with one of these sounds. Choose the right zhuyin symbol.",
      wordBank: ["ㄧ", "ㄨ", "ㄩ"],
      items: [
        { before: "", after: "— 醫生 doctor 🧑‍⚕️", say: "醫生", answer: "ㄧ", pinyinHint: "yīshēng" },
        { before: "", after: "— 烏龜 turtle 🐢", say: "烏龜", answer: "ㄨ", pinyinHint: "wūguī" },
        { before: "", after: "— 魚 fish 🐟", say: "魚", answer: "ㄩ", pinyinHint: "yú" }
      ]
    },
    {
      type: "fill-blank",
      title: "配對：Zhuyin → Pinyin",
      instructions: "Choose the pinyin letters that match each zhuyin symbol.",
      wordBank: ["i / y", "u / w", "ü / yu"],
      items: [
        { before: "ㄧ  →", after: "", answer: "i / y", pinyinHint: "ㄧ = ?" },
        { before: "ㄨ  →", after: "", answer: "u / w", pinyinHint: "ㄨ = ?" },
        { before: "ㄩ  →", after: "", answer: "ü / yu", pinyinHint: "ㄩ = ?" }
      ]
    },
    {
      type: "read-aloud",
      title: "念一念：Read the Words Aloud",
      instructions: "Tap each word and say it out loud.",
      items: ["醫生", "烏龜", "魚"]
    }
  ]
});
