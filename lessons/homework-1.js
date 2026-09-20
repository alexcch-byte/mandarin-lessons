// This week's homework — not tied to the numbered book lessons. Covers the
// first four Zhuyin (Bopomofo, 注音符號) phonetic symbols: ㄅㄆㄇㄈ, plus a
// companion practice sheet reinforcing each symbol with 4 real words, and a
// sing-along video covering the first 9 zhuyin symbols.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "homework-1",
  category: true,
  bookTitle: "Homework",
  title: "本週功課：注音符號",
  titlePinyin: "Běnzhōu gōngkè: zhùyīn fúhào",
  titleEnglish: "This Week's Homework: Zhuyin ㄅㄆㄇㄈ",
  dateAdded: "2026-09-19",

  vocabulary: [
    { hanzi: "斑馬", pinyin: "bānmǎ", english: "zebra", emoji: "🦓", group: "🦓 Homework Words" },
    { hanzi: "螃蟹", pinyin: "pángxiè", english: "crab", emoji: "🦀", group: "🦓 Homework Words" },
    { hanzi: "綿羊", pinyin: "miányáng", english: "sheep", emoji: "🐑", group: "🦓 Homework Words" },
    { hanzi: "帆船", pinyin: "fánchuán", english: "sailboat", emoji: "⛵", group: "🦓 Homework Words" },

    { hanzi: "冰箱", pinyin: "bīngxiāng", english: "refrigerator", emoji: "🧊", group: "ㄅ Practice Words" },
    { hanzi: "爸爸", pinyin: "bàba", english: "dad", emoji: "👨", group: "ㄅ Practice Words" },
    { hanzi: "背包", pinyin: "bēibāo", english: "backpack", emoji: "🎒", group: "ㄅ Practice Words" },
    { hanzi: "餅乾", pinyin: "bǐnggān", english: "cracker", emoji: "🍪", group: "ㄅ Practice Words" },

    { hanzi: "葡萄", pinyin: "pútao", english: "grape", emoji: "🍇", group: "ㄆ Practice Words" },
    { hanzi: "蘋果", pinyin: "píngguǒ", english: "apple", emoji: "🍎", group: "ㄆ Practice Words" },
    { hanzi: "皮包", pinyin: "píbāo", english: "purse", emoji: "👛", group: "ㄆ Practice Words" },
    { hanzi: "爬山", pinyin: "páshān", english: "climb a mountain", emoji: "⛰️", group: "ㄆ Practice Words" },

    { hanzi: "貓熊", pinyin: "māoxióng", english: "panda", emoji: "🐼", group: "ㄇ Practice Words" },
    { hanzi: "媽媽", pinyin: "māma", english: "mom", emoji: "👩", group: "ㄇ Practice Words" },
    { hanzi: "帽子", pinyin: "màozi", english: "hat", emoji: "🧢", group: "ㄇ Practice Words" },
    { hanzi: "麵包", pinyin: "miànbāo", english: "bread", emoji: "🍞", group: "ㄇ Practice Words" },

    { hanzi: "飛機", pinyin: "fēijī", english: "airplane", emoji: "✈️", group: "ㄈ Practice Words" },
    { hanzi: "房屋", pinyin: "fángwū", english: "house", emoji: "🏠", group: "ㄈ Practice Words" },
    { hanzi: "飯糰", pinyin: "fàntuán", english: "rice ball", emoji: "🍙", group: "ㄈ Practice Words" },
    { hanzi: "風箏", pinyin: "fēngzheng", english: "kite", emoji: "🪁", group: "ㄈ Practice Words" }
  ],

  // Zhuyin symbols aren't Han characters, so they use a plain trace-over
  // canvas (see js/app.js renderZhuyinTracer) instead of Hanzi Writer's
  // stroke-order animation/quiz. `wordHanzi` is what the "🔊 Hear the word"
  // button plays, since the bare symbol itself isn't reliably speakable.
  writingPractice: [
    { hanzi: "ㄅ", pinyin: "b", english: "zhuyin symbol, as in 斑馬 bānmǎ (zebra)", zhuyin: true, wordHanzi: "斑馬" },
    { hanzi: "ㄆ", pinyin: "p", english: "zhuyin symbol, as in 螃蟹 pángxiè (crab)", zhuyin: true, wordHanzi: "螃蟹" },
    { hanzi: "ㄇ", pinyin: "m", english: "zhuyin symbol, as in 綿羊 miányáng (sheep)", zhuyin: true, wordHanzi: "綿羊" },
    { hanzi: "ㄈ", pinyin: "f", english: "zhuyin symbol, as in 帆船 fánchuán (sailboat)", zhuyin: true, wordHanzi: "帆船" }
  ],

  exercises: [
    {
      type: "match-emoji",
      title: "配對：Match the Homework Words",
      instructions: "Match each Chinese word to the correct picture.",
      items: [
        { hanzi: "斑馬", pinyin: "bānmǎ", emoji: "🦓" },
        { hanzi: "螃蟹", pinyin: "pángxiè", emoji: "🦀" },
        { hanzi: "綿羊", pinyin: "miányáng", emoji: "🐑" },
        { hanzi: "帆船", pinyin: "fánchuán", emoji: "⛵" }
      ]
    },
    {
      type: "fill-blank",
      title: "填注音：Fill in the Missing Symbol — ㄅ",
      instructions: "Each word is missing its first sound. Choose the right zhuyin symbol.",
      wordBank: ["ㄅ", "ㄆ", "ㄇ", "ㄈ"],
      items: [
        { before: "", after: "īngxiāng — 冰箱 refrigerator 🧊", answer: "ㄅ", pinyinHint: "bīngxiāng" },
        { before: "", after: "àba — 爸爸 dad 👨", answer: "ㄅ", pinyinHint: "bàba" },
        { before: "", after: "ēibāo — 背包 backpack 🎒", answer: "ㄅ", pinyinHint: "bēibāo" },
        { before: "", after: "ǐnggān — 餅乾 cracker 🍪", answer: "ㄅ", pinyinHint: "bǐnggān" }
      ]
    },
    {
      type: "match-emoji",
      title: "配對：ㄅ Practice Words",
      instructions: "Match each Chinese word to the correct picture.",
      items: [
        { hanzi: "冰箱", pinyin: "bīngxiāng", emoji: "🧊" },
        { hanzi: "爸爸", pinyin: "bàba", emoji: "👨" },
        { hanzi: "背包", pinyin: "bēibāo", emoji: "🎒" },
        { hanzi: "餅乾", pinyin: "bǐnggān", emoji: "🍪" }
      ]
    },
    {
      type: "fill-blank",
      title: "填注音：Fill in the Missing Symbol — ㄆ",
      instructions: "Each word is missing its first sound. Choose the right zhuyin symbol.",
      wordBank: ["ㄅ", "ㄆ", "ㄇ", "ㄈ"],
      items: [
        { before: "", after: "útao — 葡萄 grape 🍇", answer: "ㄆ", pinyinHint: "pútao" },
        { before: "", after: "íngguǒ — 蘋果 apple 🍎", answer: "ㄆ", pinyinHint: "píngguǒ" },
        { before: "", after: "íbāo — 皮包 purse 👛", answer: "ㄆ", pinyinHint: "píbāo" },
        { before: "", after: "áshān — 爬山 climb a mountain ⛰️", answer: "ㄆ", pinyinHint: "páshān" }
      ]
    },
    {
      type: "match-emoji",
      title: "配對：ㄆ Practice Words",
      instructions: "Match each Chinese word to the correct picture.",
      items: [
        { hanzi: "葡萄", pinyin: "pútao", emoji: "🍇" },
        { hanzi: "蘋果", pinyin: "píngguǒ", emoji: "🍎" },
        { hanzi: "皮包", pinyin: "píbāo", emoji: "👛" },
        { hanzi: "爬山", pinyin: "páshān", emoji: "⛰️" }
      ]
    },
    {
      type: "fill-blank",
      title: "填注音：Fill in the Missing Symbol — ㄇ",
      instructions: "Each word is missing its first sound. Choose the right zhuyin symbol.",
      wordBank: ["ㄅ", "ㄆ", "ㄇ", "ㄈ"],
      items: [
        { before: "", after: "āoxióng — 貓熊 panda 🐼", answer: "ㄇ", pinyinHint: "māoxióng" },
        { before: "", after: "āma — 媽媽 mom 👩", answer: "ㄇ", pinyinHint: "māma" },
        { before: "", after: "àozi — 帽子 hat 🧢", answer: "ㄇ", pinyinHint: "màozi" },
        { before: "", after: "iànbāo — 麵包 bread 🍞", answer: "ㄇ", pinyinHint: "miànbāo" }
      ]
    },
    {
      type: "match-emoji",
      title: "配對：ㄇ Practice Words",
      instructions: "Match each Chinese word to the correct picture.",
      items: [
        { hanzi: "貓熊", pinyin: "māoxióng", emoji: "🐼" },
        { hanzi: "媽媽", pinyin: "māma", emoji: "👩" },
        { hanzi: "帽子", pinyin: "màozi", emoji: "🧢" },
        { hanzi: "麵包", pinyin: "miànbāo", emoji: "🍞" }
      ]
    },
    {
      type: "fill-blank",
      title: "填注音：Fill in the Missing Symbol — ㄈ",
      instructions: "Each word is missing its first sound. Choose the right zhuyin symbol.",
      wordBank: ["ㄅ", "ㄆ", "ㄇ", "ㄈ"],
      items: [
        { before: "", after: "ēijī — 飛機 airplane ✈️", answer: "ㄈ", pinyinHint: "fēijī" },
        { before: "", after: "ángwū — 房屋 house 🏠", answer: "ㄈ", pinyinHint: "fángwū" },
        { before: "", after: "àntuán — 飯糰 rice ball 🍙", answer: "ㄈ", pinyinHint: "fàntuán" },
        { before: "", after: "ēngzheng — 風箏 kite 🪁", answer: "ㄈ", pinyinHint: "fēngzheng" }
      ]
    },
    {
      type: "match-emoji",
      title: "配對：ㄈ Practice Words",
      instructions: "Match each Chinese word to the correct picture.",
      items: [
        { hanzi: "飛機", pinyin: "fēijī", emoji: "✈️" },
        { hanzi: "房屋", pinyin: "fángwū", emoji: "🏠" },
        { hanzi: "飯糰", pinyin: "fàntuán", emoji: "🍙" },
        { hanzi: "風箏", pinyin: "fēngzheng", emoji: "🪁" }
      ]
    },
    {
      type: "read-aloud",
      title: "念一念：Read All the Words Aloud",
      instructions: "Tap each word and say it out loud.",
      items: ["冰箱", "爸爸", "背包", "餅乾", "葡萄", "蘋果", "皮包", "爬山", "貓熊", "媽媽", "帽子", "麵包", "飛機", "房屋", "飯糰", "風箏"]
    }
  ],

  song: {
    title: "注音符號歌 Zhuyin Symbols Song",
    titleEnglish: "Official sing-along video covering ㄅㄆㄇㄈㄉㄊㄋㄌㄍ — watch and sing along!",
    videoFile: "vendor/video/zhuyin-song.mp4"
  }
});
