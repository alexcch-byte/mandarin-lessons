// Lesson data for: Hello, 華語! Book 1, Lesson 3 (上課了 / Class Has Started)
// Source: publisher teaching slides uploaded 2026-09-15.
// To add a NEW week: copy this file, change everything below, save as
// lessons/lesson-<n>.js, then add its filename to lessons/manifest.js.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "lesson-3",
  lessonNumber: 3,
  bookTitle: "Hello, 華語！ Book 1",
  title: "上課了",
  titlePinyin: "Shàngkè le",
  titleEnglish: "Class Has Started",
  dateAdded: "2026-09-15",

  vocabulary: [
    { hanzi: "大家好", pinyin: "dàjiā hǎo", english: "hello everybody", emoji: "👋" },
    { hanzi: "小朋友", pinyin: "xiǎopéngyǒu", english: "children", emoji: "🧒" },
    { hanzi: "大家", pinyin: "dàjiā", english: "everybody, everyone", emoji: "👨‍👩‍👧‍👦" },
    { hanzi: "老師", pinyin: "lǎoshī", english: "teacher", emoji: "🧑‍🏫" },
    { hanzi: "還是", pinyin: "háishì", english: "or (for a question)", emoji: "🤔" },
    { hanzi: "不", pinyin: "bù", english: "not, no", emoji: "🙅" },
    { hanzi: "嗎", pinyin: "ma", english: "question particle", emoji: "❓" },
    { hanzi: "在", pinyin: "zài", english: "at, in", emoji: "📍" },
    { hanzi: "這裡", pinyin: "zhèlǐ", english: "here", emoji: "👉" },
    { hanzi: "那裡", pinyin: "nàlǐ", english: "there", emoji: "👈" },
    { hanzi: "哪裡", pinyin: "nǎlǐ", english: "where", emoji: "🧭" },
    { hanzi: "請", pinyin: "qǐng", english: "please", emoji: "🙏" },
    { hanzi: "站起來", pinyin: "zhàn qǐlái", english: "stand up", emoji: "🧍" },
    { hanzi: "坐下", pinyin: "zuòxià", english: "sit down", emoji: "🪑" },
    { hanzi: "舉手", pinyin: "jǔshǒu", english: "raise hand", emoji: "🙋" },
    { hanzi: "放下", pinyin: "fàngxià", english: "lay down, put down", emoji: "✋" }
  ],

  sentencePatterns: [
    { hanzi: "你是……還是……？", pinyin: "Nǐ shì ... háishì ... ?", english: "Are you ... or ... ?" },
    { hanzi: "我是……，不是……。", pinyin: "Wǒ shì ..., bú shì ...", english: "I'm ..., not ..." },
    { hanzi: "你是……嗎？", pinyin: "Nǐ shì ... ma?", english: "Are you ... ?" },
    { hanzi: "誰是……？", pinyin: "Shéi shì ... ?", english: "Who is ... ?" },
    { hanzi: "……在哪裡？", pinyin: "... zài nǎlǐ?", english: "Where is ... ?" },
    { hanzi: "……在這裡。", pinyin: "... zài zhèlǐ.", english: "... is here." },
    { hanzi: "……在那裡。", pinyin: "... zài nàlǐ.", english: "... is there." }
  ],

  dialogues: [
    {
      title: "看一看：老師和小朋友",
      titleEnglish: "Look: Teacher and the children",
      lines: [
        { speaker: "老師 Teacher", hanzi: "小朋友，大家好！", pinyin: "Xiǎopéngyǒu, dàjiā hǎo!", english: "Children, hello everyone!" },
        { speaker: "學生 Students", hanzi: "老師好！", pinyin: "Lǎoshī hǎo!", english: "Hello teacher!" },
        { speaker: "老師 Teacher", hanzi: "你是佳佳，還是小香？", pinyin: "Nǐ shì Jiājiā, háishì Xiǎoxiāng?", english: "Are you Jiajia or Xiaoxiang?" },
        { speaker: "學生 Student", hanzi: "我是小香，不是佳佳。", pinyin: "Wǒ shì Xiǎoxiāng, bú shì Jiājiā.", english: "I'm Xiaoxiang, not Jiajia." },
        { speaker: "老師 Teacher", hanzi: "誰是佳佳？", pinyin: "Shéi shì Jiājiā?", english: "Who is Jiajia?" },
        { speaker: "學生 Student", hanzi: "老師，她是佳佳。", pinyin: "Lǎoshī, tā shì Jiājiā.", english: "Teacher, she is Jiajia." }
      ]
    },
    {
      title: "找一找：小明在哪裡？",
      titleEnglish: "Find it: Where is Xiaoming?",
      lines: [
        { speaker: "老師 Teacher", hanzi: "你是小明嗎？", pinyin: "Nǐ shì Xiǎomíng ma?", english: "Are you Xiaoming?" },
        { speaker: "學生 Student", hanzi: "我不是小明，我是大年。", pinyin: "Wǒ bú shì Xiǎomíng, wǒ shì Dànián.", english: "I'm not Xiaoming, I'm Danian." },
        { speaker: "老師 Teacher", hanzi: "小明在哪裡？", pinyin: "Xiǎomíng zài nǎlǐ?", english: "Where is Xiaoming?" },
        { speaker: "學生 Student", hanzi: "老師，我在這裡。", pinyin: "Lǎoshī, wǒ zài zhèlǐ.", english: "Teacher, I'm here." }
      ]
    },
    {
      title: "情境對話：放在哪裡？",
      titleEnglish: "Situational dialogue: Where should it go?",
      lines: [
        { speaker: "小朋友 A", hanzi: "放在哪裡？", pinyin: "Fàng zài nǎlǐ?", english: "Where should I put it?" },
        { speaker: "小朋友 B", hanzi: "放在這裡。", pinyin: "Fàng zài zhèlǐ.", english: "Put it here." }
      ]
    }
  ],

  actions: [
    { hanzi: "請站起來。", pinyin: "Qǐng zhàn qǐlái.", english: "Please stand up.", emoji: "🧍" },
    { hanzi: "請坐下。", pinyin: "Qǐng zuòxià.", english: "Please sit down.", emoji: "🪑" },
    { hanzi: "請舉手。", pinyin: "Qǐng jǔshǒu.", english: "Please raise your hand.", emoji: "🙋" },
    { hanzi: "手放下。", pinyin: "Shǒu fàngxià.", english: "Put your hand down.", emoji: "✋" }
  ],

  writingPractice: [
    { hanzi: "大", pinyin: "dà", english: "big" },
    { hanzi: "家", pinyin: "jiā", english: "home/family" },
    { hanzi: "好", pinyin: "hǎo", english: "good" },
    { hanzi: "小", pinyin: "xiǎo", english: "small" },
    { hanzi: "朋", pinyin: "péng", english: "friend" },
    { hanzi: "友", pinyin: "yǒu", english: "friend" },
    { hanzi: "老", pinyin: "lǎo", english: "old" },
    { hanzi: "師", pinyin: "shī", english: "teacher/master" },
    { hanzi: "是", pinyin: "shì", english: "to be" },
    { hanzi: "不", pinyin: "bù", english: "not" },
    { hanzi: "還", pinyin: "hái", english: "still/also" },
    { hanzi: "嗎", pinyin: "ma", english: "question word" },
    { hanzi: "在", pinyin: "zài", english: "at/in" },
    { hanzi: "這", pinyin: "zhè", english: "this" },
    { hanzi: "裡", pinyin: "lǐ", english: "inside" },
    { hanzi: "那", pinyin: "nà", english: "that" },
    { hanzi: "哪", pinyin: "nǎ", english: "which/where" },
    { hanzi: "請", pinyin: "qǐng", english: "please" },
    { hanzi: "站", pinyin: "zhàn", english: "to stand" },
    { hanzi: "起", pinyin: "qǐ", english: "to rise" },
    { hanzi: "來", pinyin: "lái", english: "to come" },
    { hanzi: "坐", pinyin: "zuò", english: "to sit" },
    { hanzi: "下", pinyin: "xià", english: "down" },
    { hanzi: "舉", pinyin: "jǔ", english: "to raise" },
    { hanzi: "手", pinyin: "shǒu", english: "hand" },
    { hanzi: "放", pinyin: "fàng", english: "to place/put" }
  ],

  exercises: [
    {
      type: "match-emoji",
      title: "哪個對：Match the action",
      instructions: "Match each Chinese action word to the correct action.",
      items: [
        { hanzi: "站起來", pinyin: "zhàn qǐlái", emoji: "🧍" },
        { hanzi: "坐下", pinyin: "zuòxià", emoji: "🪑" },
        { hanzi: "舉手", pinyin: "jǔshǒu", emoji: "🙋" },
        { hanzi: "手放下", pinyin: "shǒu fàngxià", emoji: "✋" }
      ]
    },
    {
      type: "fill-blank",
      title: "填入對的疑問詞 (Set A)",
      instructions: "Choose the right question word to fill in the blank.",
      wordBank: ["什麼", "誰", "哪裡", "還是", "嗎", "是不是"],
      items: [
        { before: "他", after: "你哥哥？", answer: "是不是", pinyinHint: "Tā ___ nǐ gēge?" },
        { before: "你是小明", after: "大年？", answer: "還是", pinyinHint: "Nǐ shì Xiǎomíng ___ Dànián?" },
        { before: "你哥哥叫", after: "名字？", answer: "什麼", pinyinHint: "Nǐ gēge jiào ___ míngzi?" }
      ]
    },
    {
      type: "fill-blank",
      title: "填入對的疑問詞 (Set B)",
      instructions: "Choose the right question word to fill in the blank.",
      wordBank: ["什麼", "誰", "哪裡", "還是", "嗎", "是不是"],
      items: [
        { before: "", after: "是佳佳？", answer: "誰", pinyinHint: "___ shì Jiājiā?" },
        { before: "放在", after: "？", answer: "哪裡", pinyinHint: "Fàng zài ___?" },
        { before: "你是大年", after: "？", answer: "嗎", pinyinHint: "Nǐ shì Dànián ___?" }
      ]
    },
    {
      type: "read-aloud",
      title: "念一念：Read it out loud",
      instructions: "Tap each word and say it out loud before you hear it.",
      items: ["大家", "老師", "不是", "請", "站起來", "坐下", "還是", "舉手", "放下"]
    }
  ],

  culture: {
    title: "最偉大的老師 The Greatest Teacher in China",
    englishText: "The greatest teacher in China is Confucius. In ancient China, before Confucius, only the nobility could be educated. Confucius is the first person to bring education to the people. Confucianism also deeply affects China for thousands of years."
  }
});
