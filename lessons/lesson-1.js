// Lesson data for: Hello, 華語! Book 1, Lesson 1 (好朋友 / Good Friends)
// Source: publisher teaching slides uploaded 2026-09-15.
// To add a NEW week: copy this file, change everything below, save as
// lessons/lesson-<n>.js, then add its filename to lessons/manifest.js.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "lesson-1",
  lessonNumber: 1,
  bookTitle: "Hello, 華語！ Book 1",
  title: "好朋友",
  titlePinyin: "Hǎo péngyǒu",
  titleEnglish: "Good Friends",
  dateAdded: "2026-09-15",

  vocabulary: [
    { hanzi: "你好", pinyin: "nǐhǎo", english: "hello", emoji: "👋" },
    { hanzi: "你", pinyin: "nǐ", english: "you", emoji: "🫵" },
    { hanzi: "我", pinyin: "wǒ", english: "I, me", emoji: "🙋" },
    { hanzi: "叫", pinyin: "jiào", english: "to be called, named", emoji: "🏷️" },
    { hanzi: "什麼", pinyin: "shénme", english: "what", emoji: "❓" },
    { hanzi: "名字", pinyin: "míngzì", english: "name", emoji: "📛" },
    { hanzi: "謝謝你", pinyin: "xièxie nǐ", english: "thank you", emoji: "🙏" },
    { hanzi: "不客氣", pinyin: "bú kèqì", english: "you're welcome", emoji: "😊" },
    { hanzi: "他", pinyin: "tā", english: "he, him", emoji: "👦" },
    { hanzi: "她", pinyin: "tā", english: "she, her", emoji: "👧" },
    { hanzi: "是", pinyin: "shì", english: "am, is, are", emoji: "✅" },
    { hanzi: "誰", pinyin: "shéi", english: "who", emoji: "🤔" }
  ],

  sentencePatterns: [
    { hanzi: "你叫什麼名字？", pinyin: "Nǐ jiào shénme míngzì?", english: "What is your name?" },
    { hanzi: "你好，我叫……。", pinyin: "Nǐhǎo, wǒ jiào ...", english: "Hello, my name is ... ." },
    { hanzi: "他叫……。", pinyin: "Tā jiào ...", english: "His name is ... ." },
    { hanzi: "她叫……。", pinyin: "Tā jiào ...", english: "Her name is ... ." },
    { hanzi: "他是誰？", pinyin: "Tā shì shéi?", english: "Who is he?" },
    { hanzi: "他是……。", pinyin: "Tā shì ...", english: "He is ... ." },
    { hanzi: "她是誰？", pinyin: "Tā shì shéi?", english: "Who is she?" },
    { hanzi: "她是……。", pinyin: "Tā shì ...", english: "She is ... ." }
  ],

  dialogues: [
    {
      title: "看一看：好朋友",
      titleEnglish: "Look: Good Friends",
      lines: [
        { speaker: "小香 Xiaoxiang", hanzi: "你好！", pinyin: "Nǐhǎo!", english: "Hello!" },
        { speaker: "小明 Xiaoming", hanzi: "你好！", pinyin: "Nǐhǎo!", english: "Hello!" },
        { speaker: "小香 Xiaoxiang", hanzi: "我叫小香。", pinyin: "Wǒ jiào Xiǎoxiāng.", english: "My name is Xiaoxiang." },
        { speaker: "小明 Xiaoming", hanzi: "我叫小明。", pinyin: "Wǒ jiào Xiǎomíng.", english: "My name is Xiaoming." },
        { speaker: "大年 Danian", hanzi: "我叫大年，她叫佳佳。", pinyin: "Wǒ jiào Dànián, tā jiào Jiājiā.", english: "My name is Danian, and her name is Jiajia." },
        { speaker: "佳佳 Jiajia", hanzi: "你好。", pinyin: "Nǐhǎo.", english: "Hello." }
      ]
    },
    {
      title: "情境對話：謝謝你",
      titleEnglish: "Situational Dialogue: Thank You",
      lines: [
        { speaker: "小朋友 Child", hanzi: "謝謝你。", pinyin: "Xièxie nǐ.", english: "Thank you." },
        { speaker: "媽媽 Mom", hanzi: "不客氣。", pinyin: "Bú kèqì.", english: "You're welcome." }
      ]
    }
  ],

  writingPractice: [
    { hanzi: "你", pinyin: "nǐ", english: "you" },
    { hanzi: "好", pinyin: "hǎo", english: "good" },
    { hanzi: "我", pinyin: "wǒ", english: "I, me" },
    { hanzi: "叫", pinyin: "jiào", english: "to call, be named" },
    { hanzi: "什", pinyin: "shén", english: "what (part of 什麼)" },
    { hanzi: "麼", pinyin: "me", english: "what (part of 什麼)" },
    { hanzi: "名", pinyin: "míng", english: "name" },
    { hanzi: "字", pinyin: "zì", english: "character, word" },
    { hanzi: "謝", pinyin: "xiè", english: "to thank" },
    { hanzi: "不", pinyin: "bù", english: "not, no" },
    { hanzi: "客", pinyin: "kè", english: "guest" },
    { hanzi: "氣", pinyin: "qì", english: "air, manner" },
    { hanzi: "他", pinyin: "tā", english: "he, him" },
    { hanzi: "她", pinyin: "tā", english: "she, her" },
    { hanzi: "是", pinyin: "shì", english: "to be" },
    { hanzi: "誰", pinyin: "shéi", english: "who" }
  ],

  exercises: [
    {
      type: "read-aloud",
      title: "念一念：Read it out loud",
      instructions: "Look at each word and read it out loud.",
      items: ["你", "我", "他", "好", "叫", "是", "名字", "什麼", "誰"]
    },
    {
      type: "match-emoji",
      title: "說中文：Match the English to the Chinese word",
      instructions: "Look at the meaning and find the Chinese word with the matching emoji.",
      items: [
        { hanzi: "你好", pinyin: "nǐhǎo", emoji: "👋" },
        { hanzi: "名字", pinyin: "míngzì", emoji: "📛" },
        { hanzi: "是", pinyin: "shì", emoji: "✅" },
        { hanzi: "什麼", pinyin: "shénme", emoji: "❓" },
        { hanzi: "謝謝你", pinyin: "xièxie nǐ", emoji: "🙏" },
        { hanzi: "叫", pinyin: "jiào", emoji: "🏷️" },
        { hanzi: "她", pinyin: "tā", emoji: "👧" },
        { hanzi: "誰", pinyin: "shéi", emoji: "🤔" }
      ]
    }
  ],

  culture: {
    title: "中文名字 Chinese Names",
    englishText: "In Chinese, names are written with the surname first and the given name second — for example, Lǐ Xiǎobǎo (李小寶) combines the surname Lǐ with the given name Xiǎobǎo. This is the opposite of Western names, where the given name comes first. The order highlights how much Chinese culture values the family."
  }
});
