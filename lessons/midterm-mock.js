// Mock midterm — Calgary Mandarin School, Level 1A, First Semester (Oct 3, 2026).
// An interactive version of the paper test: the listening parts play recorded
// audio, the other parts are self-checking, and the answer key from the
// teacher's marked copy is built in. Pictures in Section A are simple emoji
// stand-ins for the worksheet's illustrations.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

(function () {
  var ZHUYIN = ["ㄅ", "ㄆ", "ㄇ", "ㄈ", "ㄉ", "ㄊ", "ㄋ", "ㄌ", "ㄍ", "ㄎ", "ㄏ", "ㄐ", "ㄑ", "ㄒ"];
  var PINYIN = ["b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h", "j", "q", "x"];
  var CHARS = ["你", "好", "我", "不", "他", "的", "名", "字"];

  window.MANDARIN_LESSONS.push({
    id: "midterm-mock",
    category: true,
    icon: "🎓",
    bookTitle: "Level 1A",
    title: "期中考（模擬）",
    titlePinyin: "Qīzhōngkǎo (mónǐ)",
    titleEnglish: "Mock Midterm — Level 1A",
    dateAdded: "2026-10-04",

    vocabulary: [
      { hanzi: "早安", pinyin: "zǎoān", english: "good morning", emoji: "☀️", group: "📖 Words to Review" },
      { hanzi: "你好", pinyin: "nǐhǎo", english: "hello", emoji: "👋", group: "📖 Words to Review" },
      { hanzi: "謝謝你", pinyin: "xièxie nǐ", english: "thank you", emoji: "🙏", group: "📖 Words to Review" },
      { hanzi: "不客氣", pinyin: "bú kèqì", english: "you're welcome", emoji: "😊", group: "📖 Words to Review" },
      { hanzi: "名字", pinyin: "míngzì", english: "name", emoji: "📛", group: "📖 Words to Review" },
      { hanzi: "我的名字是……", say: "我的名字是小明", pinyin: "wǒ de míngzì shì ...", english: "my name is ...", emoji: "🙋", group: "📖 Words to Review" }
    ],

    dialogues: [
      {
        title: "說一說：Speaking (20%)",
        titleEnglish: "Say each one out loud, then tap 🔊 to check how it should sound.",
        lines: [
          { speaker: "1. Good morning.", hanzi: "早安。", pinyin: "Zǎoān.", english: "Good morning." },
          { speaker: "2. Hello! My name is ___.", hanzi: "你好，我的名字是小明。", pinyin: "Nǐ hǎo, wǒ de míngzì shì Xiǎomíng.", english: "Hello! My name is ___. (Use your own name.)" },
          { speaker: "3. Thank you! You're welcome.", hanzi: "謝謝你！不客氣。", pinyin: "Xièxie nǐ! Bú kèqì.", english: "Thank you! You're welcome." },
          { speaker: "4. Her name is Judy.", hanzi: "她的名字是Judy。", pinyin: "Tā de míngzì shì Judy.", english: "Her name is Judy." }
        ]
      }
    ],

    exercises: [
      {
        type: "listen-pick",
        title: "A. 聽一聽，對的打√ — Listen and Check (20%)",
        instructions: "Tap ▶ Listen, then choose the picture that matches what you hear. (Pictures are simple stand-ins for the worksheet's illustrations.)",
        items: [
          { say: "謝謝你，不客氣。", answer: 1, options: [{ emoji: "🙋‍♂️🙋‍♀️", label: "Kids waving hello" }, { emoji: "🎁", label: "Receiving a gift" }] },
          { say: "謝謝你。", answer: 1, options: [{ emoji: "🎒🚶", label: "Walking to school" }, { emoji: "🎂", label: "Birthday card" }] },
          { say: "你好，我是大年。", answer: 0, options: [{ emoji: "🗣️", label: "Introducing yourself" }, { emoji: "🚪", label: "Arriving at the door" }] },
          { say: "你好。", answer: 0, options: [{ emoji: "🏪", label: "Saying hello at the store" }, { emoji: "📚", label: "Handing over a book" }] }
        ]
      },
      {
        type: "fill-blank",
        title: "B1. 寫出正確的拼音 — Write the Phonics: zhuyin → pinyin (7%)",
        instructions: "Choose the pinyin letter that matches each zhuyin symbol.",
        wordBank: PINYIN,
        items: [
          { before: "ㄅ  →", after: "", answer: "b", pinyinHint: "ㄅ = ?" },
          { before: "ㄇ  →", after: "", answer: "m", pinyinHint: "ㄇ = ?" },
          { before: "ㄊ  →", after: "", answer: "t", pinyinHint: "ㄊ = ?" },
          { before: "ㄌ  →", after: "", answer: "l", pinyinHint: "ㄌ = ?" },
          { before: "ㄍ  →", after: "", answer: "g", pinyinHint: "ㄍ = ?" },
          { before: "ㄎ  →", after: "", answer: "k", pinyinHint: "ㄎ = ?" },
          { before: "ㄒ  →", after: "", answer: "x", pinyinHint: "ㄒ = ?" }
        ]
      },
      {
        type: "fill-blank",
        title: "B2. 寫出正確的注音 — Write the Phonics: pinyin → zhuyin (7%)",
        instructions: "Choose the zhuyin symbol that matches each pinyin letter.",
        wordBank: ZHUYIN,
        items: [
          { before: "p  →", after: "", answer: "ㄆ", pinyinHint: "p = ?" },
          { before: "f  →", after: "", answer: "ㄈ", pinyinHint: "f = ?" },
          { before: "d  →", after: "", answer: "ㄉ", pinyinHint: "d = ?" },
          { before: "n  →", after: "", answer: "ㄋ", pinyinHint: "n = ?" },
          { before: "h  →", after: "", answer: "ㄏ", pinyinHint: "h = ?" },
          { before: "j  →", after: "", answer: "ㄐ", pinyinHint: "j = ?" },
          { before: "q  →", after: "", answer: "ㄑ", pinyinHint: "q = ?" }
        ]
      },
      {
        type: "listen-pick",
        title: "C. 聽一聽，選一選聲母 — Listen and Select the Consonant (30%)",
        instructions: "Tap ▶ Listen, then choose the first sound of the word you hear.",
        items: [
          { say: "爸爸的爸", prompt: "爸爸的爸", answer: 0, options: [{ label: "ㄅ  b" }, { label: "ㄆ  p" }] },
          { say: "汽車的汽", prompt: "汽車的汽", answer: 1, options: [{ label: "ㄐ  j" }, { label: "ㄑ  q" }] },
          { say: "姐姐的姐", prompt: "姐姐的姐", answer: 1, options: [{ label: "ㄑ  q" }, { label: "ㄐ  j" }] },
          { say: "太陽的太", prompt: "太陽的太", answer: 0, options: [{ label: "ㄊ  t" }, { label: "ㄇ  m" }] },
          { say: "哥哥的哥", prompt: "哥哥的哥", answer: 0, options: [{ label: "ㄍ  g" }, { label: "ㄒ  x" }] },
          { say: "弟弟的弟", prompt: "弟弟的弟", answer: 0, options: [{ label: "ㄉ  d" }, { label: "ㄌ  l" }] },
          { say: "婆婆的婆", prompt: "婆婆的婆", answer: 1, options: [{ label: "ㄈ  f" }, { label: "ㄆ  p" }] },
          { say: "奶奶的奶", prompt: "奶奶的奶", answer: 1, options: [{ label: "ㄎ  k" }, { label: "ㄋ  n" }] },
          { say: "飛機的飛", prompt: "飛機的飛", answer: 0, options: [{ label: "ㄈ  f" }, { label: "ㄇ  m" }] },
          { say: "媽媽的媽", prompt: "媽媽的媽", answer: 0, options: [{ label: "ㄇ  m" }, { label: "ㄊ  t" }] }
        ]
      },
      {
        type: "write-blank",
        title: "D1. 寫一寫 — Writing (8%)",
        instructions: "Tap 🔊 to hear the sentence, then write the missing character in the box with your finger — from memory, no tracing! (Characters: 你 好 我 不 他 的 名 字)",
        items: [
          { before: "問：你叫什麼名字？　答：", after: "叫大年。", answer: "我", pinyinHint: "___ jiào Dànián.", say: "你叫什麼名字？我叫大年。" },
          { before: "謝謝謝謝", after: "。", answer: "你", pinyinHint: "Xièxie xièxie ___.", say: "謝謝，謝謝你。" },
          { before: "答：", after: "客氣。", answer: "不", pinyinHint: "(You're welcome) ___ kèqì.", say: "謝謝你。不客氣。" },
          { before: "問：他是誰？　答：", after: "叫小明。", answer: "他", pinyinHint: "___ jiào Xiǎomíng.", say: "他是誰？他叫小明。" }
        ]
      },
      {
        type: "write-blank",
        title: "D2. 寫一寫 — Writing (8%)",
        instructions: "Tap 🔊 to hear the sentence, then write the missing character in the box with your finger — from memory, no tracing! (Characters: 你 好 我 不 他 的 名 字)",
        items: [
          { before: "你好！　你", after: "！", answer: "好", pinyinHint: "Nǐ hǎo! Nǐ ___!", say: "你好！你好！" },
          { before: "你好！我", after: "名字是佳佳。", answer: "的", pinyinHint: "Nǐ hǎo! Wǒ ___ míngzì shì Jiājiā.", say: "你好！我的名字是佳佳。" },
          { before: "你好！我的", after: "字是小明。", answer: "名", pinyinHint: "Nǐ hǎo! Wǒ de ___zì shì Xiǎomíng.", say: "你好！我的名字是小明。" },
          { before: "你好！我的名", after: "是小明。", answer: "字", pinyinHint: "Nǐ hǎo! Wǒ de míng___ shì Xiǎomíng.", say: "你好！我的名字是小明。" }
        ]
      }
    ],

    culture: {
      title: "About this mock test 關於模擬考",
      englishText: "This is a practice version of the Calgary Mandarin School Level 1A first-semester midterm (A: Listen and Check 20%, B: Write the Phonics 14%, C: Listen and Select the Consonant 30%, D: Writing 16%, E: Speaking 20%). Sections A and C play recorded audio — tap ▶ Listen as many times as you like. Section B checks itself. In Section D you write each missing character from memory in an empty box — there is no tracing and no hint, and the app checks your strokes when you finish. Section E (Speaking) is in the Dialogue tab: say each sentence aloud, then tap 🔊 to compare. To practise tracing the eight characters 你 好 我 不 他 的 名 字 first, use the “Lesson 1 Writing” entry."
    }
  });
})();
