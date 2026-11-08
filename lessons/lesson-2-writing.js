// Lesson 2 character-writing sheet (Level 1A): 早 安 哥 爸 媽 明 天 見.
// From the class stroke-order slides and the Lesson 2 writing sheet. Each shows
// pinyin + zhuyin; stroke order is animated in the Writing tab, and the
// "Practice tracing" button lets the child write it stroke by stroke.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "lesson-2-writing",
  category: true,
  icon: "✍️",
  bookTitle: "Level 1A",
  title: "第二課：寫字",
  titlePinyin: "Dì-èr kè: xiě zì",
  titleEnglish: "Lesson 2 Writing: 早安哥爸媽明天見",
  dateAdded: "2026-11-08",

  vocabulary: [
    { hanzi: "早", pinyin: "zǎo", english: "early, morning  ·  ㄗㄠˇ", emoji: "🌅", group: "✍️ Lesson 2 Characters" },
    { hanzi: "安", pinyin: "ān", english: "peaceful  ·  ㄢ", emoji: "🕊️", group: "✍️ Lesson 2 Characters" },
    { hanzi: "哥", pinyin: "gē", english: "older brother  ·  ㄍㄜ", emoji: "🧑", group: "✍️ Lesson 2 Characters" },
    { hanzi: "爸", pinyin: "bà", english: "dad  ·  ㄅㄚˋ", emoji: "👨", group: "✍️ Lesson 2 Characters" },
    { hanzi: "媽", pinyin: "mā", english: "mom  ·  ㄇㄚ", emoji: "👩", group: "✍️ Lesson 2 Characters" },
    { hanzi: "明", pinyin: "míng", english: "bright, next  ·  ㄇㄧㄥˊ", emoji: "💡", group: "✍️ Lesson 2 Characters" },
    { hanzi: "天", pinyin: "tiān", english: "sky, day  ·  ㄊㄧㄢ", emoji: "☁️", group: "✍️ Lesson 2 Characters" },
    { hanzi: "見", pinyin: "jiàn", english: "to see  ·  ㄐㄧㄢˋ", emoji: "👀", group: "✍️ Lesson 2 Characters" }
  ],

  sentencePatterns: [
    { hanzi: "早安！", pinyin: "Zǎo ān!", english: "Good morning!" },
    { hanzi: "他是我爸爸。", pinyin: "Tā shì wǒ bàba.", english: "He is my dad." },
    { hanzi: "她是我媽媽。", pinyin: "Tā shì wǒ māma.", english: "She is my mom." },
    { hanzi: "他是我哥哥。", pinyin: "Tā shì wǒ gēge.", english: "He is my older brother." },
    { hanzi: "明天見！", pinyin: "Míngtiān jiàn!", english: "See you tomorrow!" }
  ],

  writingPractice: [
    { hanzi: "早", pinyin: "zǎo", english: "early, morning  (ㄗㄠˇ)" },
    { hanzi: "安", pinyin: "ān", english: "peaceful  (ㄢ)" },
    { hanzi: "哥", pinyin: "gē", english: "older brother  (ㄍㄜ)" },
    { hanzi: "爸", pinyin: "bà", english: "dad  (ㄅㄚˋ)" },
    { hanzi: "媽", pinyin: "mā", english: "mom  (ㄇㄚ)" },
    { hanzi: "明", pinyin: "míng", english: "bright, next  (ㄇㄧㄥˊ)" },
    { hanzi: "天", pinyin: "tiān", english: "sky, day  (ㄊㄧㄢ)" },
    { hanzi: "見", pinyin: "jiàn", english: "to see  (ㄐㄧㄢˋ)" }
  ],

  exercises: [
    {
      type: "read-aloud",
      title: "念一念：Read the Words Aloud",
      instructions: "Tap each phrase and say it out loud.",
      items: ["早安", "爸爸", "媽媽", "哥哥", "明天", "明天見"]
    },
    {
      type: "fill-blank",
      title: "寫一寫：Fill in the Character (1)",
      instructions: "Tap 🔊 to hear the sentence, then choose the missing character.",
      wordBank: ["早", "安", "哥", "爸", "媽", "明", "天", "見"],
      items: [
        { before: "", after: "安！", say: "早安！", answer: "早", pinyinHint: "___ ān!" },
        { before: "早", after: "！", say: "早安！", answer: "安", pinyinHint: "Zǎo ___!" },
        { before: "他是我哥", after: "。", say: "他是我哥哥。", answer: "哥", pinyinHint: "Tā shì wǒ gē___." },
        { before: "他是我", after: "爸。", say: "他是我爸爸。", answer: "爸", pinyinHint: "Tā shì wǒ ___ba." }
      ]
    },
    {
      type: "fill-blank",
      title: "寫一寫：Fill in the Character (2)",
      instructions: "Tap 🔊 to hear the sentence, then choose the missing character.",
      wordBank: ["早", "安", "哥", "爸", "媽", "明", "天", "見"],
      items: [
        { before: "她是我", after: "媽。", say: "她是我媽媽。", answer: "媽", pinyinHint: "Tā shì wǒ ___ma." },
        { before: "", after: "天見！", say: "明天見！", answer: "明", pinyinHint: "___tiān jiàn!" },
        { before: "明", after: "見！", say: "明天見！", answer: "天", pinyinHint: "Míng___ jiàn!" },
        { before: "明天", after: "！", say: "明天見！", answer: "見", pinyinHint: "Míngtiān ___!" }
      ]
    },
    {
      type: "write-blank",
      title: "默寫：Write from Memory",
      instructions: "Tap 🔊 to hear the sentence, then write the missing character in the box with your finger — from memory, no tracing! (Characters: 早 安 哥 爸 媽 明 天 見)",
      items: [
        { before: "", after: "安！", answer: "早", pinyinHint: "___ ān!", say: "早安！" },
        { before: "早", after: "！", answer: "安", pinyinHint: "Zǎo ___!", say: "早安！" },
        { before: "他是我", after: "哥。", answer: "哥", pinyinHint: "Tā shì wǒ ___ge.", say: "他是我哥哥。" },
        { before: "他是我", after: "爸。", answer: "爸", pinyinHint: "Tā shì wǒ ___ba.", say: "他是我爸爸。" },
        { before: "她是我", after: "媽。", answer: "媽", pinyinHint: "Tā shì wǒ ___ma.", say: "她是我媽媽。" },
        { before: "", after: "天見！", answer: "明", pinyinHint: "___tiān jiàn!", say: "明天見！" },
        { before: "明", after: "見！", answer: "天", pinyinHint: "Míng___ jiàn!", say: "明天見！" },
        { before: "明天", after: "！", answer: "見", pinyinHint: "Míngtiān ___!", say: "明天見！" }
      ]
    }
  ],

  culture: {
    title: "Writing tips 寫字小提醒",
    englishText: "Chinese characters are written one stroke at a time, in a set order: top to bottom, left to right, and horizontal strokes before vertical ones. In the Writing tab, tap 👀 Show me to watch the strokes in the right order, then tap ✍️ Practice tracing and follow the outline with your finger. When you are ready, try the Write from Memory exercise in the Practice tab — no outline and no hints!"
  }
});
