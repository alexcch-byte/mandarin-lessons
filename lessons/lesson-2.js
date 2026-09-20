// Lesson data for: Hello, 華語! Book 1, Lesson 2 (我的家 / My Family)
// Source: publisher teaching slides uploaded 2026-09-15.
// To add a NEW week: copy this file, change everything below, save as
// lessons/lesson-<n>.js, then add its filename to lessons/manifest.js.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "lesson-2",
  lessonNumber: 2,
  bookTitle: "Hello, 華語！ Book 1",
  title: "我的家",
  titlePinyin: "Wǒ de jiā",
  titleEnglish: "My Family",
  dateAdded: "2026-09-15",

  vocabulary: [
    { hanzi: "早安", pinyin: "zǎoān", english: "good morning", emoji: "🌅" },
    { hanzi: "爸爸", pinyin: "bàba", english: "father, dad", emoji: "👨" },
    { hanzi: "媽媽", pinyin: "māma", english: "mother, mom", emoji: "👩" },
    { hanzi: "哥哥", pinyin: "gēge", english: "elder brother", emoji: "🧑" },
    { hanzi: "姐姐", pinyin: "jiějie", english: "elder sister", emoji: "👧" },
    { hanzi: "弟弟", pinyin: "dìdi", english: "younger brother", emoji: "👦" },
    { hanzi: "妹妹", pinyin: "mèimei", english: "younger sister", emoji: "👶" },
    { hanzi: "家", pinyin: "jiā", english: "home", emoji: "🏠" },
    { hanzi: "在", pinyin: "zài", english: "at, in", emoji: "📍" },
    { hanzi: "這裡", pinyin: "zhèlǐ", english: "here", emoji: "👉" },
    { hanzi: "那裡", pinyin: "nàlǐ", english: "there", emoji: "👈" },
    { hanzi: "哪裡", pinyin: "nǎlǐ", english: "where", emoji: "🧭" },
    { hanzi: "再見", pinyin: "zàijiàn", english: "goodbye, see you", emoji: "👋" },
    { hanzi: "明天見", pinyin: "míngtiān jiàn", english: "see you tomorrow", emoji: "👋" },
    { hanzi: "明天", pinyin: "míngtiān", english: "tomorrow", emoji: "📅" }
  ],

  sentencePatterns: [
    { hanzi: "他是我……。", pinyin: "Tā shì wǒ ... .", english: "He is my ... ." },
    { hanzi: "她是我……。", pinyin: "Tā shì wǒ ... .", english: "She is my ... ." },
    { hanzi: "你家在哪裡？", pinyin: "Nǐ jiā zài nǎlǐ?", english: "Where is your home?" },
    { hanzi: "我家在這裡。", pinyin: "Wǒ jiā zài zhèlǐ.", english: "My home is here." },
    { hanzi: "我家在那裡。", pinyin: "Wǒ jiā zài nàlǐ.", english: "My home is there." },
    { hanzi: "他是誰？", pinyin: "Tā shì shéi?", english: "Who is he?" }
  ],

  dialogues: [
    {
      title: "看一看：早安",
      titleEnglish: "Look: Good morning",
      lines: [
        { speaker: "媽媽 Mom", hanzi: "早安！", pinyin: "Zǎoān!", english: "Good morning!" },
        { speaker: "爸爸 Dad", hanzi: "早安！", pinyin: "Zǎoān!", english: "Good morning!" },
        { speaker: "小朋友 Child", hanzi: "他是我爸爸。", pinyin: "Tā shì wǒ bàba.", english: "He is my dad." },
        { speaker: "小朋友 Child", hanzi: "她是我媽媽。", pinyin: "Tā shì wǒ māma.", english: "She is my mom." }
      ]
    },
    {
      title: "看一看：這是我的家人",
      titleEnglish: "Look: This is my family",
      lines: [
        { speaker: "小朋友 Child", hanzi: "他是我爸爸。", pinyin: "Tā shì wǒ bàba.", english: "He is my dad." },
        { speaker: "小朋友 Child", hanzi: "她是我媽媽。", pinyin: "Tā shì wǒ māma.", english: "She is my mom." },
        { speaker: "小朋友 Child", hanzi: "她是我姐姐。", pinyin: "Tā shì wǒ jiějie.", english: "She is my elder sister." },
        { speaker: "小朋友 Child", hanzi: "他是我哥哥。", pinyin: "Tā shì wǒ gēge.", english: "He is my elder brother." },
        { speaker: "小朋友 Child", hanzi: "她是我妹妹。", pinyin: "Tā shì wǒ mèimei.", english: "She is my younger sister." },
        { speaker: "小朋友 Child", hanzi: "他是我弟弟。", pinyin: "Tā shì wǒ dìdi.", english: "He is my younger brother." }
      ]
    },
    {
      title: "看一看：公園裡",
      titleEnglish: "Look: At the park",
      lines: [
        { speaker: "小朋友 A", hanzi: "她是我姐姐，小莉。", pinyin: "Tā shì wǒ jiějie, Xiǎolì.", english: "She is my elder sister, Xiaoli." },
        { speaker: "小朋友 B", hanzi: "早安！你叫什麼名字？", pinyin: "Zǎoān! Nǐ jiào shénme míngzì?", english: "Good morning! What is your name?" },
        { speaker: "小朋友 C", hanzi: "我叫小香。", pinyin: "Wǒ jiào Xiǎoxiāng.", english: "My name is Xiaoxiang." }
      ]
    },
    {
      title: "看一看：我家在哪裡",
      titleEnglish: "Look: Where is my home?",
      lines: [
        { speaker: "小朋友 A", hanzi: "我家在這裡。你家在哪裡？", pinyin: "Wǒ jiā zài zhèlǐ. Nǐ jiā zài nǎlǐ?", english: "My home is here. Where is your home?" },
        { speaker: "大年 Dànián", hanzi: "我家在那裡。", pinyin: "Wǒ jiā zài nàlǐ.", english: "My home is there." },
        { speaker: "小朋友 B", hanzi: "大年！", pinyin: "Dànián!", english: "Danian!" },
        { speaker: "大年 Dànián", hanzi: "我家在那裡！", pinyin: "Wǒ jiā zài nàlǐ!", english: "My home is there!" }
      ]
    },
    {
      title: "情境對話：再見",
      titleEnglish: "Situational dialogue: Goodbye",
      lines: [
        { speaker: "小朋友 A", hanzi: "再見。", pinyin: "Zàijiàn.", english: "Goodbye." },
        { speaker: "小朋友 B", hanzi: "明天見。", pinyin: "Míngtiān jiàn.", english: "See you tomorrow." }
      ]
    }
  ],

  writingPractice: [
    { hanzi: "早", pinyin: "zǎo", english: "early" },
    { hanzi: "安", pinyin: "ān", english: "peaceful" },
    { hanzi: "爸", pinyin: "bà", english: "dad" },
    { hanzi: "媽", pinyin: "mā", english: "mom" },
    { hanzi: "姐", pinyin: "jiě", english: "older sister" },
    { hanzi: "弟", pinyin: "dì", english: "younger brother" },
    { hanzi: "哥", pinyin: "gē", english: "older brother" },
    { hanzi: "妹", pinyin: "mèi", english: "younger sister" },
    { hanzi: "家", pinyin: "jiā", english: "home/family" },
    { hanzi: "在", pinyin: "zài", english: "at/in" },
    { hanzi: "這", pinyin: "zhè", english: "this" },
    { hanzi: "裡", pinyin: "lǐ", english: "inside" },
    { hanzi: "那", pinyin: "nà", english: "that" },
    { hanzi: "哪", pinyin: "nǎ", english: "which/where" },
    { hanzi: "再", pinyin: "zài", english: "again" },
    { hanzi: "見", pinyin: "jiàn", english: "to see" },
    { hanzi: "明", pinyin: "míng", english: "bright/next" },
    { hanzi: "天", pinyin: "tiān", english: "day/sky" },
    { hanzi: "他", pinyin: "tā", english: "he/him" },
    { hanzi: "是", pinyin: "shì", english: "to be" },
    { hanzi: "我", pinyin: "wǒ", english: "I/me" },
    { hanzi: "她", pinyin: "tā", english: "she/her" },
    { hanzi: "你", pinyin: "nǐ", english: "you" },
    { hanzi: "誰", pinyin: "shéi", english: "who" }
  ],

  exercises: [
    {
      type: "match-emoji",
      title: "哪個對：Match the family member",
      instructions: "Match each Chinese family word to the correct person.",
      items: [
        { hanzi: "爸爸", pinyin: "bàba", emoji: "👨" },
        { hanzi: "媽媽", pinyin: "māma", emoji: "👩" },
        { hanzi: "哥哥", pinyin: "gēge", emoji: "🧑" },
        { hanzi: "姐姐", pinyin: "jiějie", emoji: "👧" },
        { hanzi: "弟弟", pinyin: "dìdi", emoji: "👦" },
        { hanzi: "妹妹", pinyin: "mèimei", emoji: "👶" }
      ]
    },
    {
      type: "fill-blank",
      title: "填入對的詞 (Set A)",
      instructions: "Choose the right word to fill in the blank.",
      wordBank: ["在", "叫", "姐姐", "哥哥", "哪裡", "什麼"],
      items: [
        { before: "你好，我", after: "小香。", answer: "叫", pinyinHint: "Nǐ hǎo, wǒ ___ Xiǎoxiāng." },
        { before: "我是他弟弟，他是我", after: "。", answer: "哥哥", pinyinHint: "Wǒ shì tā dìdi, tā shì wǒ ___." },
        { before: "你叫", after: "名字？", answer: "什麼", pinyinHint: "Nǐ jiào ___ míngzì?" },
        { before: "你家在", after: "？", answer: "哪裡", pinyinHint: "Nǐ jiā zài ___?" }
      ]
    },
    {
      type: "fill-blank",
      title: "問一問：問答練習",
      instructions: "Read the answer, then say the matching question.",
      wordBank: ["你叫什麼名字？", "你家在哪裡？", "他是誰？"],
      items: [
        { before: "", after: "我叫小香。", answer: "你叫什麼名字？", pinyinHint: "Wǒ jiào Xiǎoxiāng." },
        { before: "", after: "我家在那裡。", answer: "你家在哪裡？", pinyinHint: "Wǒ jiā zài nàlǐ." },
        { before: "", after: "他是我哥哥。", answer: "他是誰？", pinyinHint: "Tā shì wǒ gēge." }
      ]
    },
    {
      type: "read-aloud",
      title: "念一念：Read it out loud",
      instructions: "Tap each word and say it out loud before you hear it.",
      items: ["早安", "爸爸", "媽媽", "哥哥", "姐姐", "弟弟", "妹妹", "家", "在", "這裡", "那裡", "哪裡", "再見", "明天見", "明天"]
    }
  ],

  culture: {
    title: "中文稱謂 Chinese Appellation",
    englishText: "The Chinese call to relatives is more complicated than English. This is because the Chinese pay special attention to pecking order and close and distant relationship. Such as elder brother and younger brother, elder sister and younger sister, cousins (father's brother's sons or daughters) and cousins (mother's brother's sons or daughters), are more clearly spoken than English."
  }
});
