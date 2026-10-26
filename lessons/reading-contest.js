// Reading Contest — November 7, 2026. The piece is "我們的家" (Our Home), the
// short song-poem on the class handout (textbook p. 35). The four lines, their
// pinyin and the English meanings below come from that handout; the vocabulary
// cards, describe sentences, extra practice verses and games are our own.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

(function () {
  var G = "🏠 Words in the poem";

  window.MANDARIN_LESSONS.push({
    id: "reading-contest",
    category: true,
    icon: "🏆",
    bookTitle: "Reading Contest",
    title: "朗讀比賽：我們的家",
    titlePinyin: "Lǎngdú bǐsài: Wǒmen de jiā",
    titleEnglish: "Reading Contest: Our Home (November 7, 2026)",
    dateAdded: "2026-10-26",

    vocabulary: [
      { hanzi: "家", pinyin: "jiā", english: "home", emoji: "🏠", group: G,
        describe: { zh: "家是我們住的地方。", en: "Home is the place where we live." } },
      { hanzi: "天空", pinyin: "tiānkōng", english: "sky", emoji: "🌌", group: G,
        describe: { zh: "晚上的天空有星星。", en: "The night sky has stars." } },
      { hanzi: "星星", pinyin: "xīngxing", english: "star", emoji: "⭐", group: G,
        describe: { zh: "星星在天空裡閃閃發亮。", en: "Stars twinkle in the sky." } },
      { hanzi: "小河", pinyin: "xiǎo hé", english: "little river", emoji: "🏞️", group: G,
        describe: { zh: "小河裡的水慢慢流。", en: "The water in the little river flows slowly." } },
      { hanzi: "小魚", pinyin: "xiǎo yú", english: "little fish", emoji: "🐟", group: G,
        describe: { zh: "小魚在水裡游來游去。", en: "The little fish swims around in the water." } },
      { hanzi: "大樹", pinyin: "dà shù", english: "big tree", emoji: "🌳", group: G,
        describe: { zh: "大樹高高的，有很多葉子。", en: "A big tree is tall and has many leaves." } },
      { hanzi: "小鳥", pinyin: "xiǎo niǎo", english: "little bird", emoji: "🐦", group: G,
        describe: { zh: "小鳥在樹上唱歌。", en: "The little bird sings in the tree." } },
      { hanzi: "美麗", pinyin: "měilì", english: "beautiful", emoji: "✨", group: G,
        describe: { zh: "花很美麗。", en: "Flowers are beautiful." } },
      { hanzi: "地球", pinyin: "dìqiú", english: "Earth", emoji: "🌍", group: G,
        describe: { zh: "地球是圓的，我們都住在這裡。", en: "The Earth is round, and we all live here." } },
      { hanzi: "我們", pinyin: "wǒmen", english: "we, us", emoji: "👨‍👩‍👧‍👦", group: G,
        describe: { zh: "我們一起讀書，一起唱歌。", en: "We read together and sing together." } }
    ],

    sentencePatterns: [
      { hanzi: "天空，是星星的家。", pinyin: "Tiānkōng, shì xīngxing de jiā.", english: "The sky is the stars' home." },
      { hanzi: "小河，是小魚的家。", pinyin: "Xiǎo hé, shì xiǎo yú de jiā.", english: "The little river is the little fish's home." },
      { hanzi: "大樹，是小鳥的家。", pinyin: "Dà shù, shì xiǎo niǎo de jiā.", english: "The big tree is the little bird's home." },
      { hanzi: "美麗的地球，是我們的家。", pinyin: "Měilì de dìqiú, shì wǒmen de jiā.", english: "The beautiful Earth is our home." },
      // Our own extra practice, using the same pattern: ___，是___的家。
      { hanzi: "草地，是小羊的家。", pinyin: "Cǎodì, shì xiǎo yáng de jiā.", english: "Practice verse: the grass is the little sheep's home." },
      { hanzi: "花園，是蝴蝶的家。", pinyin: "Huāyuán, shì húdié de jiā.", english: "Practice verse: the garden is the butterfly's home." }
    ],

    dialogues: [
      {
        title: "我們的家（朗讀）",
        titleEnglish: "Our Home — read it line by line",
        lines: [
          { speaker: "第一行", hanzi: "天空，是星星的家。", pinyin: "Tiānkōng, shì xīngxing de jiā.", english: "The sky is the stars' home." },
          { speaker: "第二行", hanzi: "小河，是小魚的家。", pinyin: "Xiǎo hé, shì xiǎo yú de jiā.", english: "The little river is the little fish's home." },
          { speaker: "第三行", hanzi: "大樹，是小鳥的家。", pinyin: "Dà shù, shì xiǎo niǎo de jiā.", english: "The big tree is the little bird's home." },
          { speaker: "第四行", hanzi: "美麗的地球，是我們的家。", pinyin: "Měilì de dìqiú, shì wǒmen de jiā.", english: "The beautiful Earth is our home." }
        ]
      }
    ],

    actions: [
      { hanzi: "大聲念", pinyin: "dà shēng niàn", english: "read out loud", emoji: "📢" },
      { hanzi: "慢慢念", pinyin: "mànmàn niàn", english: "read slowly", emoji: "🐢" },
      { hanzi: "停一停", pinyin: "tíng yi tíng", english: "pause", emoji: "⏸️" },
      { hanzi: "再念一次", pinyin: "zài niàn yí cì", english: "read it once more", emoji: "🔁" },
      { hanzi: "看著大家", pinyin: "kàn zhe dàjiā", english: "look at everyone", emoji: "👀" },
      { hanzi: "微笑", pinyin: "wéixiào", english: "smile", emoji: "😊" }
    ],

    writingPractice: [
      { hanzi: "家", pinyin: "jiā", english: "home" },
      { hanzi: "天", pinyin: "tiān", english: "sky, day" },
      { hanzi: "空", pinyin: "kōng", english: "empty, sky" },
      { hanzi: "星", pinyin: "xīng", english: "star" },
      { hanzi: "魚", pinyin: "yú", english: "fish" },
      { hanzi: "鳥", pinyin: "niǎo", english: "bird" },
      { hanzi: "樹", pinyin: "shù", english: "tree" },
      { hanzi: "我", pinyin: "wǒ", english: "I, me" }
    ],

    exercises: [
      {
        type: "match-emoji",
        title: "配對：Match the Poem's Words",
        instructions: "Tap the word to hear it, then match it to the right picture.",
        items: [
          { hanzi: "天空", pinyin: "tiānkōng", emoji: "🌌" },
          { hanzi: "星星", pinyin: "xīngxing", emoji: "⭐" },
          { hanzi: "小河", pinyin: "xiǎo hé", emoji: "🏞️" },
          { hanzi: "小魚", pinyin: "xiǎo yú", emoji: "🐟" },
          { hanzi: "大樹", pinyin: "dà shù", emoji: "🌳" },
          { hanzi: "小鳥", pinyin: "xiǎo niǎo", emoji: "🐦" },
          { hanzi: "地球", pinyin: "dìqiú", emoji: "🌍" }
        ]
      },
      {
        type: "listen-pick",
        title: "聽一聽：Whose Home?",
        instructions: "Tap ▶ Listen to a line of the poem, then tap who lives there.",
        items: [
          { say: "天空，是星星的家。", answer: 0, options: [{ emoji: "⭐" }, { emoji: "🐟" }] },
          { say: "小河，是小魚的家。", answer: 1, options: [{ emoji: "🐦" }, { emoji: "🐟" }] },
          { say: "大樹，是小鳥的家。", answer: 0, options: [{ emoji: "🐦" }, { emoji: "⭐" }] },
          { say: "美麗的地球，是我們的家。", answer: 1, options: [{ emoji: "🌌" }, { emoji: "🌍" }] }
        ]
      },
      {
        type: "fill-blank",
        title: "填一填：Whose Home? (1)",
        instructions: "Choose who lives there to finish each line.",
        wordBank: ["星星", "小魚", "小鳥", "我們"],
        items: [
          { before: "天空，是", after: "的家。", say: "天空，是星星的家。", answer: "星星", pinyinHint: "The sky is the ___'s home." },
          { before: "小河，是", after: "的家。", say: "小河，是小魚的家。", answer: "小魚", pinyinHint: "The little river is the ___'s home." },
          { before: "大樹，是", after: "的家。", say: "大樹，是小鳥的家。", answer: "小鳥", pinyinHint: "The big tree is the ___'s home." },
          { before: "美麗的地球，是", after: "的家。", say: "美麗的地球，是我們的家。", answer: "我們", pinyinHint: "The beautiful Earth is ___ home." }
        ]
      },
      {
        type: "fill-blank",
        title: "填一填：Where Is the Home? (2)",
        instructions: "Choose the place to start each line.",
        wordBank: ["天空", "小河", "大樹", "地球"],
        items: [
          { before: "", after: "，是星星的家。", say: "天空，是星星的家。", answer: "天空", pinyinHint: "The ___ is the stars' home." },
          { before: "", after: "，是小魚的家。", say: "小河，是小魚的家。", answer: "小河", pinyinHint: "The little ___ is the little fish's home." },
          { before: "", after: "，是小鳥的家。", say: "大樹，是小鳥的家。", answer: "大樹", pinyinHint: "The big ___ is the little bird's home." },
          { before: "美麗的", after: "，是我們的家。", say: "美麗的地球，是我們的家。", answer: "地球", pinyinHint: "The beautiful ___ is our home." }
        ]
      },
      {
        type: "read-aloud",
        title: "朗讀練習：Read Each Line Aloud",
        instructions: "Tap a line, read it out loud slowly and clearly, then listen to check your reading.",
        items: ["天空，是星星的家。", "小河，是小魚的家。", "大樹，是小鳥的家。", "美麗的地球，是我們的家。"]
      }
    ],

    culture: {
      title: "Reading Contest tips 朗讀比賽小提醒",
      englishText: "The reading contest is on November 7, 2026, and the piece is 「我們的家」 (Our Home), the song-poem on page 35 of the textbook (CD track 28 in the book). To practise: (1) Tap 🔊 on a line in the Dialogue tab to hear it, then say it back. (2) Read slowly and clearly — give every sound its right tone. (3) Pause for a breath at each comma. (4) Look up, smile, and read loudly enough for everyone to hear. (5) Use \"Play all\" to hear the whole poem, then try reading along. The Practice tab has games to help you remember who lives in each home. Good luck! 加油！"
    }
  });
})();
