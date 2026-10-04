// Lesson 1 character-writing sheet (Level 1A): 你 好 我 不 他 的 名 字.
// These are the eight characters the midterm's Writing section tests.
// Each shows pinyin + zhuyin; stroke order is animated in the Writing tab.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "lesson-1-writing",
  category: true,
  icon: "✍️",
  bookTitle: "Level 1A",
  title: "第一課：寫字",
  titlePinyin: "Dì-yī kè: xiě zì",
  titleEnglish: "Lesson 1 Writing: 你好我不他的名字",
  dateAdded: "2026-10-04",

  vocabulary: [
    { hanzi: "你", pinyin: "nǐ", english: "you  ·  ㄋㄧˇ", emoji: "👉", group: "✍️ Lesson 1 Characters" },
    { hanzi: "好", pinyin: "hǎo", english: "good  ·  ㄏㄠˇ", emoji: "👍", group: "✍️ Lesson 1 Characters" },
    { hanzi: "我", pinyin: "wǒ", english: "I, me  ·  ㄨㄛˇ", emoji: "🙋", group: "✍️ Lesson 1 Characters" },
    { hanzi: "不", pinyin: "bù", english: "not, no  ·  ㄅㄨˋ", emoji: "🚫", group: "✍️ Lesson 1 Characters" },
    { hanzi: "他", pinyin: "tā", english: "he, him  ·  ㄊㄚ", emoji: "👦", group: "✍️ Lesson 1 Characters" },
    { hanzi: "的", say: "我的", pinyin: "de", english: "'s (belonging to)  ·  ˙ㄉㄜ", emoji: "🔗", group: "✍️ Lesson 1 Characters" },
    { hanzi: "名", pinyin: "míng", english: "name  ·  ㄇㄧㄥˊ", emoji: "📛", group: "✍️ Lesson 1 Characters" },
    { hanzi: "字", pinyin: "zì", english: "word, character  ·  ㄗˋ", emoji: "🔤", group: "✍️ Lesson 1 Characters" }
  ],

  sentencePatterns: [
    { hanzi: "你叫什麼名字？", pinyin: "Nǐ jiào shénme míngzì?", english: "What is your name?" },
    { hanzi: "我叫……。", pinyin: "Wǒ jiào ...", english: "My name is ..." },
    { hanzi: "我的名字是……。", pinyin: "Wǒ de míngzì shì ...", english: "My name is ..." },
    { hanzi: "他是誰？", pinyin: "Tā shì shéi?", english: "Who is he?" },
    { hanzi: "謝謝你。不客氣。", pinyin: "Xièxie nǐ. Bú kèqì.", english: "Thank you. You're welcome." }
  ],

  dialogues: [
    {
      title: "你叫什麼名字？",
      titleEnglish: "What is your name?",
      lines: [
        { speaker: "小朋友 A", hanzi: "你叫什麼名字？", pinyin: "Nǐ jiào shénme míngzì?", english: "What is your name?" },
        { speaker: "小朋友 B", hanzi: "我叫大年。", pinyin: "Wǒ jiào Dànián.", english: "My name is Danian." },
        { speaker: "小朋友 A", hanzi: "他是誰？", pinyin: "Tā shì shéi?", english: "Who is he?" },
        { speaker: "小朋友 B", hanzi: "他叫小明。", pinyin: "Tā jiào Xiǎomíng.", english: "His name is Xiaoming." }
      ]
    },
    {
      title: "謝謝你！",
      titleEnglish: "Thank you!",
      lines: [
        { speaker: "小朋友 A", hanzi: "謝謝你！", pinyin: "Xièxie nǐ!", english: "Thank you!" },
        { speaker: "小朋友 B", hanzi: "不客氣。", pinyin: "Bú kèqì.", english: "You're welcome." }
      ]
    },
    {
      title: "你好！",
      titleEnglish: "Hello!",
      lines: [
        { speaker: "小朋友 A", hanzi: "你好！我的名字是佳佳。", pinyin: "Nǐ hǎo! Wǒ de míngzì shì Jiājiā.", english: "Hello! My name is Jiajia." },
        { speaker: "小朋友 B", hanzi: "你好！我的名字是小明。", pinyin: "Nǐ hǎo! Wǒ de míngzì shì Xiǎomíng.", english: "Hello! My name is Xiaoming." }
      ]
    }
  ],

  writingPractice: [
    { hanzi: "你", pinyin: "nǐ", english: "you  (ㄋㄧˇ)" },
    { hanzi: "好", pinyin: "hǎo", english: "good  (ㄏㄠˇ)" },
    { hanzi: "我", pinyin: "wǒ", english: "I, me  (ㄨㄛˇ)" },
    { hanzi: "不", pinyin: "bù", english: "not, no  (ㄅㄨˋ)" },
    { hanzi: "他", pinyin: "tā", english: "he, him  (ㄊㄚ)" },
    { hanzi: "的", pinyin: "de", english: "'s, of  (˙ㄉㄜ)" },
    { hanzi: "名", pinyin: "míng", english: "name  (ㄇㄧㄥˊ)" },
    { hanzi: "字", pinyin: "zì", english: "word, character  (ㄗˋ)" }
  ],

  exercises: [
    {
      type: "read-aloud",
      title: "念一念：Read the Characters Aloud",
      instructions: "Tap each phrase and say it out loud.",
      items: ["你好", "我", "不", "他", "我的", "名字"]
    },
    {
      type: "fill-blank",
      title: "寫一寫：Fill in the Character (1)",
      instructions: "Choose the right character to complete each sentence.",
      wordBank: ["你", "好", "我", "不", "他", "的", "名", "字"],
      items: [
        { before: "", after: "叫大年。", answer: "我", pinyinHint: "___ jiào Dànián." },
        { before: "謝謝謝謝", after: "。", answer: "你", pinyinHint: "Xièxie xièxie ___." },
        { before: "", after: "客氣。", answer: "不", pinyinHint: "___ kèqì." },
        { before: "", after: "叫小明。", answer: "他", pinyinHint: "___ jiào Xiǎomíng." }
      ]
    },
    {
      type: "fill-blank",
      title: "寫一寫：Fill in the Character (2)",
      instructions: "Choose the right character to complete each sentence.",
      wordBank: ["你", "好", "我", "不", "他", "的", "名", "字"],
      items: [
        { before: "你", after: "！", answer: "好", pinyinHint: "Nǐ ___!" },
        { before: "你好！我", after: "名字是佳佳。", answer: "的", pinyinHint: "Nǐ hǎo! Wǒ ___ míngzì shì Jiājiā." },
        { before: "你好！我的", after: "字是小明。", answer: "名", pinyinHint: "Nǐ hǎo! Wǒ de ___zì shì Xiǎomíng." },
        { before: "你好！我的名", after: "是小明。", answer: "字", pinyinHint: "Nǐ hǎo! Wǒ de míng___ shì Xiǎomíng." }
      ]
    }
  ]
});
