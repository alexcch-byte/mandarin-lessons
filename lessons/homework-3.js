// Homework 3 — the third set of Zhuyin (Bopomofo, 注音符號) phonetic symbols:
// ㄍㄎㄏ ㄐㄑㄒ (g k h j q x), continuing on from homework-2's ㄉㄊㄋㄌ.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "homework-3",
  category: true,
  icon: "📝",
  bookTitle: "Homework",
  title: "本週功課：注音符號",
  titlePinyin: "Běnzhōu gōngkè: zhùyīn fúhào",
  titleEnglish: "This Week's Homework: Zhuyin ㄍㄎㄏ ㄐㄑㄒ",
  dateAdded: "2026-10-04",

  vocabulary: [
    { hanzi: "公車", pinyin: "gōngchē", english: "bus", emoji: "🚌", group: "🚌 Homework Words" },
    { hanzi: "恐龍", pinyin: "kǒnglóng", english: "dinosaur", emoji: "🦖", group: "🚌 Homework Words" },
    { hanzi: "蝴蝶", pinyin: "húdié", english: "butterfly", emoji: "🦋", group: "🚌 Homework Words" },
    { hanzi: "鯨魚", pinyin: "jīngyú", english: "whale", emoji: "🐳", group: "🚌 Homework Words" },
    { hanzi: "汽車", pinyin: "qìchē", english: "car", emoji: "🚗", group: "🚌 Homework Words" },
    { hanzi: "小狗", pinyin: "xiǎogǒu", english: "puppy", emoji: "🐶", group: "🚌 Homework Words" }
  ],

  writingPractice: [
    { hanzi: "ㄍ", pinyin: "g", english: "zhuyin symbol, as in 公車 gōngchē (bus)", zhuyin: true, wordHanzi: "公車" },
    { hanzi: "ㄎ", pinyin: "k", english: "zhuyin symbol, as in 恐龍 kǒnglóng (dinosaur)", zhuyin: true, wordHanzi: "恐龍" },
    { hanzi: "ㄏ", pinyin: "h", english: "zhuyin symbol, as in 蝴蝶 húdié (butterfly)", zhuyin: true, wordHanzi: "蝴蝶" },
    { hanzi: "ㄐ", pinyin: "j", english: "zhuyin symbol, as in 鯨魚 jīngyú (whale)", zhuyin: true, wordHanzi: "鯨魚" },
    { hanzi: "ㄑ", pinyin: "q", english: "zhuyin symbol, as in 汽車 qìchē (car)", zhuyin: true, wordHanzi: "汽車" },
    { hanzi: "ㄒ", pinyin: "x", english: "zhuyin symbol, as in 小狗 xiǎogǒu (puppy)", zhuyin: true, wordHanzi: "小狗" }
  ],

  exercises: [
    {
      type: "match-emoji",
      title: "配對：Match the Homework Words",
      instructions: "Match each Chinese word to the correct picture.",
      items: [
        { hanzi: "公車", pinyin: "gōngchē", emoji: "🚌" },
        { hanzi: "恐龍", pinyin: "kǒnglóng", emoji: "🦖" },
        { hanzi: "蝴蝶", pinyin: "húdié", emoji: "🦋" },
        { hanzi: "鯨魚", pinyin: "jīngyú", emoji: "🐳" },
        { hanzi: "汽車", pinyin: "qìchē", emoji: "🚗" },
        { hanzi: "小狗", pinyin: "xiǎogǒu", emoji: "🐶" }
      ]
    },
    {
      type: "fill-blank",
      title: "填注音：Fill in the Missing Symbol",
      instructions: "Each word is missing its first sound. Choose the right zhuyin symbol.",
      wordBank: ["ㄍ", "ㄎ", "ㄏ", "ㄐ", "ㄑ", "ㄒ"],
      items: [
        { before: "", after: "ōngchē — 公車 bus 🚌", answer: "ㄍ", pinyinHint: "gōngchē" },
        { before: "", after: "ǒnglóng — 恐龍 dinosaur 🦖", answer: "ㄎ", pinyinHint: "kǒnglóng" },
        { before: "", after: "údié — 蝴蝶 butterfly 🦋", answer: "ㄏ", pinyinHint: "húdié" },
        { before: "", after: "īngyú — 鯨魚 whale 🐳", answer: "ㄐ", pinyinHint: "jīngyú" },
        { before: "", after: "ìchē — 汽車 car 🚗", answer: "ㄑ", pinyinHint: "qìchē" },
        { before: "", after: "iǎogǒu — 小狗 puppy 🐶", answer: "ㄒ", pinyinHint: "xiǎogǒu" }
      ]
    },
    {
      type: "read-aloud",
      title: "念一念：Read the Words Aloud",
      instructions: "Tap each word and say it out loud.",
      items: ["公車", "恐龍", "蝴蝶", "鯨魚", "汽車", "小狗"]
    }
  ]
});
