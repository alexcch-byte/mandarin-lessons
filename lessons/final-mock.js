// Mock final — Calgary Mandarin School, Level 1A, First Semester (Nov 21, 2026).
// An interactive version of the paper test: the listening parts are read aloud
// by the app, the other parts are self-checking, and the answer key from the
// teacher's marked copy is built in. Pictures in Section A are simple emoji
// stand-ins for the worksheet's illustrations.
//   A. Listen and Check (25%)     B. Listen and Select (16%)
//   C. Listen and Write the Vowel Phonics (16%)
//   D. Character Writing (23%)    E. Speaking (20%)
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

(function () {
  var ZHUYIN_C = ["ㄑ", "ㄩ", "ㄒ", "ㄖ", "ㄐ", "ㄜ", "ㄠ", "ㄟ"];
  var PINYIN_C = ["q", "yu", "x", "r", "j", "e", "ao", "ei"];

  window.MANDARIN_LESSONS.push({
    id: "final-mock",
    category: true,
    icon: "🏆",
    bookTitle: "Level 1A",
    title: "期末考（模擬）",
    titlePinyin: "Qīmòkǎo (mónǐ)",
    titleEnglish: "Mock Final — Level 1A",
    dateAdded: "2026-11-22",

    vocabulary: [
      { hanzi: "早安", pinyin: "zǎo ān", english: "good morning", emoji: "☀️", group: "📖 Words to Review" },
      { hanzi: "明天見", pinyin: "míngtiān jiàn", english: "see you tomorrow", emoji: "📅", group: "📖 Words to Review" },
      { hanzi: "謝謝你", pinyin: "xièxie nǐ", english: "thank you", emoji: "🙏", group: "📖 Words to Review" },
      { hanzi: "不客氣", pinyin: "bú kèqì", english: "you're welcome", emoji: "😊", group: "📖 Words to Review" },
      { hanzi: "姐姐", pinyin: "jiějie", english: "older sister", emoji: "👧", group: "📖 Words to Review" },
      { hanzi: "再見", pinyin: "zàijiàn", english: "goodbye", emoji: "👋", group: "📖 Words to Review" },
      { hanzi: "我家", pinyin: "wǒ jiā", english: "my home", emoji: "🏠", group: "📖 Words to Review" },
      { hanzi: "這裡", pinyin: "zhèlǐ", english: "here", emoji: "👇", group: "📖 Words to Review" },
      { hanzi: "那裡", pinyin: "nàlǐ", english: "there", emoji: "👉", group: "📖 Words to Review" }
    ],

    dialogues: [
      {
        title: "E. 說一說：Speaking (20%)",
        titleEnglish: "Say each one out loud, then tap 🔊 to check how it should sound.",
        lines: [
          { speaker: "1. Good morning.", hanzi: "早安。", pinyin: "Zǎo ān.", english: "Good morning." },
          { speaker: "2. See you tomorrow.", hanzi: "明天見。", pinyin: "Míngtiān jiàn.", english: "See you tomorrow." },
          { speaker: "3. Thank you! You're welcome.", hanzi: "謝謝你！不客氣。", pinyin: "Xièxie nǐ! Bú kèqì.", english: "Thank you! You're welcome." },
          { speaker: "4. My home is here / there.", hanzi: "我家在這裡。我家在那裡。", pinyin: "Wǒ jiā zài zhèlǐ. Wǒ jiā zài nàlǐ.", english: "My home is here. My home is there. (The worksheet writes 這裏／那裏 — same words.)" }
        ]
      }
    ],

    exercises: [
      {
        type: "listen-pick",
        title: "A. 聽一聽，對的打√ — Listen and Check (25%)",
        instructions: "Tap ▶ Listen, then choose the picture that matches what you hear. (Pictures are simple stand-ins for the worksheet's illustrations.)",
        items: [
          { say: "她是我姐姐。", answer: 0, options: [{ emoji: "👧", label: "A girl (she is my older sister)" }, { emoji: "👦", label: "A boy" }] },
          { say: "謝謝你，不客氣。", answer: 1, options: [{ emoji: "🏪", label: "At the shop" }, { emoji: "📘🤝", label: "Handing over a book — thank you!" }] },
          { say: "你好，我是大年。", answer: 0, options: [{ emoji: "🗣️🤝", label: "Meeting someone and introducing yourself" }, { emoji: "🚪🎒", label: "Arriving at the door" }] },
          { say: "我家在那裡。", answer: 1, options: [{ emoji: "🚪🎒", label: "Arriving at the door" }, { emoji: "👉🏠", label: "Pointing: my home is over there" }] },
          { say: "再見。", answer: 0, options: [{ emoji: "👋🎒", label: "Waving goodbye" }, { emoji: "🎂🎁", label: "A birthday card" }] }
        ]
      },
      {
        type: "listen-pick",
        title: "B. 聽一聽，選一選 — Listen and Select (16%)",
        instructions: "Tap ▶ Listen to the word, then choose the sound that matches the character you hear.",
        items: [
          { say: "房屋的屋", prompt: "房屋的屋", answer: 0, options: [{ label: "ㄨ  wu" }, { label: "ㄆ  p" }] },
          { say: "喝水的喝", prompt: "喝水的喝", answer: 1, options: [{ label: "ㄈ  f" }, { label: "ㄏ  h" }] },
          { say: "按鈕的按", prompt: "按鈕的按", answer: 0, options: [{ label: "ㄢ  an" }, { label: "ㄇ  m" }] },
          { say: "吃飯的吃", prompt: "吃飯的吃", answer: 0, options: [{ label: "ㄔ  ch" }, { label: "ㄋ  n" }] },
          { say: "愛心的愛", prompt: "愛心的愛", answer: 0, options: [{ label: "ㄞ  ai" }, { label: "ㄌ  l" }] },
          { say: "自己的自", prompt: "自己的自", answer: 1, options: [{ label: "ㄍ  g" }, { label: "ㄗ  z" }] },
          { say: "兒童的兒", prompt: "兒童的兒", answer: 1, options: [{ label: "ㄇ  m" }, { label: "ㄦ  er" }] },
          { say: "海鷗的鷗", prompt: "海鷗的鷗", answer: 1, options: [{ label: "ㄑ  q" }, { label: "ㄡ  ou" }] }
        ]
      },
      {
        type: "fill-blank",
        title: "C1. 聽一聽，寫注音 — Listen and Write the Zhuyin (8%)",
        instructions: "Tap 🔊 to hear the sound, then choose its zhuyin symbol.",
        wordBank: ZHUYIN_C,
        items: [
          { before: "1. 🔊", after: "", say: "七", answer: "ㄑ", pinyinHint: "the first sound of qī" },
          { before: "2. 🔊", after: "", say: "魚", answer: "ㄩ", pinyinHint: "yú" },
          { before: "3. 🔊", after: "", say: "西", answer: "ㄒ", pinyinHint: "the first sound of xī" },
          { before: "4. 🔊", after: "", say: "日", answer: "ㄖ", pinyinHint: "the first sound of rì" },
          { before: "5. 🔊", after: "", say: "雞", answer: "ㄐ", pinyinHint: "the first sound of jī" },
          { before: "6. 🔊", after: "", say: "鵝", answer: "ㄜ", pinyinHint: "é" },
          { before: "7. 🔊", after: "", say: "熬", answer: "ㄠ", pinyinHint: "áo" },
          { before: "8. 🔊", after: "", say: "誒", answer: "ㄟ", pinyinHint: "ēi" }
        ]
      },
      {
        type: "fill-blank",
        title: "C2. 聽一聽，寫拼音 — Listen and Write the Pinyin (8%)",
        instructions: "Tap 🔊 to hear the sound, then choose its pinyin letters.",
        wordBank: PINYIN_C,
        items: [
          { before: "1. 🔊", after: "", say: "七", answer: "q", pinyinHint: "the first sound of qī" },
          { before: "2. 🔊", after: "", say: "魚", answer: "yu", pinyinHint: "yú" },
          { before: "3. 🔊", after: "", say: "西", answer: "x", pinyinHint: "the first sound of xī" },
          { before: "4. 🔊", after: "", say: "日", answer: "r", pinyinHint: "the first sound of rì" },
          { before: "5. 🔊", after: "", say: "雞", answer: "j", pinyinHint: "the first sound of jī" },
          { before: "6. 🔊", after: "", say: "鵝", answer: "e", pinyinHint: "é" },
          { before: "7. 🔊", after: "", say: "熬", answer: "ao", pinyinHint: "áo" },
          { before: "8. 🔊", after: "", say: "誒", answer: "ei", pinyinHint: "ēi" }
        ]
      },
      {
        type: "write-blank",
        title: "D1. 寫國字 — Character Writing (12%)",
        instructions: "Tap 🔊 to hear the sentence, then write the missing character in the box with your finger — from memory, no tracing! (Characters: 早 安 哥 爸 媽 明 天 見)",
        items: [
          { before: "", after: "天見！", answer: "明", pinyinHint: "See you tomorrow! ___ tiān jiàn!", say: "明天見！" },
          { before: "明", after: "見！", answer: "天", pinyinHint: "See you tomorrow! Míng ___ jiàn!", say: "明天見！" },
          { before: "明天", after: "！", answer: "見", pinyinHint: "See you tomorrow! Míngtiān ___!", say: "明天見！" },
          { before: "", after: "安！", answer: "早", pinyinHint: "Good morning! ___ ān!", say: "早安！" },
          { before: "早", after: "！", answer: "安", pinyinHint: "Good morning! Zǎo ___!", say: "早安！" }
        ]
      },
      {
        type: "write-blank",
        title: "D2. 寫國字 — Character Writing (11%)",
        instructions: "Tap 🔊 to hear the sentence, then write the missing character in the box with your finger — from memory, no tracing! (Characters: 早 安 哥 爸 媽 明 天 見)",
        items: [
          { before: "她是我", after: "媽。", answer: "媽", pinyinHint: "She is my mommy. ___ma.", say: "她是我媽媽。" },
          { before: "她是我媽", after: "。", answer: "媽", pinyinHint: "She is my mommy. Mā___.", say: "她是我媽媽。" },
          { before: "他是我", after: "爸。", answer: "爸", pinyinHint: "He is my daddy. ___ba.", say: "他是我爸爸。" },
          { before: "他是我爸", after: "。", answer: "爸", pinyinHint: "He is my daddy. Bà___.", say: "他是我爸爸。" },
          { before: "他是我", after: "哥。", answer: "哥", pinyinHint: "He is my older brother. ___ge.", say: "他是我哥哥。" },
          { before: "他是我哥", after: "。", answer: "哥", pinyinHint: "He is my older brother. Gē___.", say: "他是我哥哥。" }
        ]
      },
      {
        type: "read-aloud",
        title: "E. 說一說：Speaking (20%) — Read Aloud",
        instructions: "Tap each phrase and say it out loud. More practice is in the Dialogue tab.",
        items: ["早安。", "明天見。", "謝謝你！不客氣。", "我家在這裡。", "我家在那裡。"]
      }
    ],

    culture: {
      title: "About this mock test 關於模擬考",
      englishText: "This is a practice version of the Calgary Mandarin School Level 1A first-semester final (A: Listen and Check 25%, B: Listen and Select 16%, C: Listen and Write the Vowel Phonics 16%, D: Character Writing 23%, E: Speaking 20%). In the listening sections the app reads each question aloud — tap ▶ Listen as many times as you like. Section C is split in two so you can choose the zhuyin first and the pinyin second, and in Section D you write each missing character from memory in an empty box — there is no tracing and no hint, and the app checks your strokes when you finish. Section E (Speaking) is in the Dialogue tab: say each sentence aloud, then tap 🔊 to compare. To practise tracing the eight characters 早 安 哥 爸 媽 明 天 見 first, use the “Lesson 2 Writing” entry. The pictures are simple stand-ins for the worksheet's illustrations."
    }
  });
})();
