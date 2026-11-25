// Flash cards from a shared Gemini deck (6 cards): greetings, asking and telling
// names, and thanking. Each card shows the Chinese on the front; the back has
// the zhuyin, pinyin and English exactly as in the deck.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

(function () {
  var CARDS = [
    { front: "你好。", say: "你好。", zhuyin: "ㄋㄧˇ ㄏㄠˇ。", pinyin: "Nǐ hǎo.", english: "Hello." },
    { front: "你叫什麼名字？", say: "你叫什麼名字？", zhuyin: "ㄋㄧˇ ㄐㄧㄠˋ ㄕㄜˊ ˙ㄇㄜ ㄇㄧㄥˊ ㄗˋ？", pinyin: "Nǐ jiào shéme míngzì?", english: "What is your name?" },
    { front: "她/他是誰？", say: "她是誰？他是誰？", zhuyin: "ㄊㄚ ㄕˋ ㄕㄟˊ？", pinyin: "Tā shì shéi?", english: "Who is she / he?" },
    { front: "她/他叫什麼名字？", say: "她叫什麼名字？他叫什麼名字？", zhuyin: "ㄊㄚ ㄐㄧㄠˋ ㄕㄜˊ ˙ㄇㄜ ㄇㄧㄥˊ ㄗˋ？", pinyin: "Tā jiào shéme míngzì?", english: "What is her / his name?" },
    { front: "謝謝你。", say: "謝謝你。", zhuyin: "ㄒㄧㄝˋ ㄒㄧㄝˋ ㄋㄧˇ。", pinyin: "Xièxiè nǐ.", english: "Thank you." },
    { front: "不客氣。", say: "不客氣。", zhuyin: "ㄅㄨˊ ㄎㄜˋ ㄑㄧˋ。", pinyin: "Bú kèqì.", english: "You're welcome." }
  ];

  window.MANDARIN_LESSONS.push({
    id: "gemini-flashcards",
    category: true,
    icon: "🗂️",
    bookTitle: "Flash Cards",
    title: "閃卡：你好、名字、謝謝",
    titlePinyin: "Shǎnkǎ: nǐ hǎo, míngzì, xièxie",
    titleEnglish: "Flashcards: Hello, Names & Thank You",
    dateAdded: "2026-11-25",

    vocabulary: [
      { hanzi: "你好", pinyin: "nǐ hǎo", english: "hello  ·  ㄋㄧˇ ㄏㄠˇ", emoji: "👋", group: "🗂️ Flashcard Phrases" },
      { hanzi: "你叫什麼名字？", pinyin: "Nǐ jiào shéme míngzì?", english: "What is your name?  ·  ㄋㄧˇ ㄐㄧㄠˋ ㄕㄜˊ ˙ㄇㄜ ㄇㄧㄥˊ ㄗˋ", emoji: "📛", group: "🗂️ Flashcard Phrases" },
      { hanzi: "她/他是誰？", say: "她是誰？他是誰？", pinyin: "Tā shì shéi?", english: "Who is she / he?  ·  ㄊㄚ ㄕˋ ㄕㄟˊ", emoji: "🧒", group: "🗂️ Flashcard Phrases" },
      { hanzi: "她/他叫什麼名字？", say: "她叫什麼名字？他叫什麼名字？", pinyin: "Tā jiào shéme míngzì?", english: "What is her / his name?  ·  ㄊㄚ ㄐㄧㄠˋ ㄕㄜˊ ˙ㄇㄜ ㄇㄧㄥˊ ㄗˋ", emoji: "🏷️", group: "🗂️ Flashcard Phrases" },
      { hanzi: "謝謝你", pinyin: "xièxie nǐ", english: "thank you  ·  ㄒㄧㄝˋ ㄒㄧㄝˋ ㄋㄧˇ", emoji: "🙏", group: "🗂️ Flashcard Phrases" },
      { hanzi: "不客氣", pinyin: "bú kèqì", english: "you're welcome  ·  ㄅㄨˊ ㄎㄜˋ ㄑㄧˋ", emoji: "😊", group: "🗂️ Flashcard Phrases" }
    ],

    sentencePatterns: [
      { hanzi: "你叫什麼名字？", pinyin: "Nǐ jiào shéme míngzì?", english: "What is your name?" },
      { hanzi: "我叫……。", pinyin: "Wǒ jiào ...", english: "My name is ..." },
      { hanzi: "她/他叫什麼名字？", pinyin: "Tā jiào shéme míngzì?", english: "What is her / his name?" },
      { hanzi: "她/他是誰？", pinyin: "Tā shì shéi?", english: "Who is she / he?" },
      { hanzi: "謝謝你。不客氣。", pinyin: "Xièxiè nǐ. Bú kèqì.", english: "Thank you. You're welcome." }
    ],

    dialogues: [
      {
        title: "認識新朋友 Meeting a new friend",
        titleEnglish: "Using the flashcard phrases",
        lines: [
          { speaker: "小明 Xiaoming", hanzi: "你好。", pinyin: "Nǐ hǎo.", english: "Hello." },
          { speaker: "大年 Danian", hanzi: "你好。", pinyin: "Nǐ hǎo.", english: "Hello." },
          { speaker: "小明 Xiaoming", hanzi: "你叫什麼名字？", pinyin: "Nǐ jiào shéme míngzì?", english: "What is your name?" },
          { speaker: "大年 Danian", hanzi: "我叫大年。", pinyin: "Wǒ jiào Dànián.", english: "My name is Danian." },
          { speaker: "小明 Xiaoming", hanzi: "她是誰？", pinyin: "Tā shì shéi?", english: "Who is she?" },
          { speaker: "大年 Danian", hanzi: "她是佳佳。", pinyin: "Tā shì Jiājiā.", english: "She is Jiajia." },
          { speaker: "小明 Xiaoming", hanzi: "謝謝你。", pinyin: "Xièxiè nǐ.", english: "Thank you." },
          { speaker: "大年 Danian", hanzi: "不客氣。", pinyin: "Bú kèqì.", english: "You're welcome." }
        ]
      }
    ],

    exercises: [
      {
        type: "flashcards",
        title: "閃卡：Flashcards",
        instructions: "Read the Chinese on the front, say it out loud, then tap the card to flip it and check. Tap 🔊 Hear it to listen.",
        items: CARDS
      },
      {
        type: "read-aloud",
        title: "念一念：Read Aloud",
        instructions: "Tap each phrase and say it out loud.",
        items: ["你好。", "你叫什麼名字？", "她是誰？", "他叫什麼名字？", "謝謝你。", "不客氣。"]
      },
      {
        type: "listen-pick",
        title: "聽一聽：Listen and Pick",
        instructions: "Tap ▶ Listen, then choose what it means.",
        items: [
          { say: "你好。", prompt: "你好。", answer: 0, options: [{ label: "Hello." }, { label: "Thank you." }] },
          { say: "你叫什麼名字？", prompt: "你叫什麼名字？", answer: 1, options: [{ label: "Who is she?" }, { label: "What is your name?" }] },
          { say: "她是誰？", prompt: "她是誰？", answer: 0, options: [{ label: "Who is she?" }, { label: "What is her name?" }] },
          { say: "他叫什麼名字？", prompt: "他叫什麼名字？", answer: 1, options: [{ label: "Who is he?" }, { label: "What is his name?" }] },
          { say: "謝謝你。", prompt: "謝謝你。", answer: 0, options: [{ label: "Thank you." }, { label: "You're welcome." }] },
          { say: "不客氣。", prompt: "不客氣。", answer: 1, options: [{ label: "Hello." }, { label: "You're welcome." }] }
        ]
      },
      {
        type: "match-emoji",
        title: "配對：Match the Phrase",
        instructions: "Match each phrase to the picture that goes with it.",
        items: [
          { hanzi: "你好", pinyin: "nǐ hǎo", emoji: "👋" },
          { hanzi: "你叫什麼名字？", pinyin: "Nǐ jiào shéme míngzì?", emoji: "📛" },
          { hanzi: "謝謝你", pinyin: "xièxie nǐ", emoji: "🙏" },
          { hanzi: "不客氣", pinyin: "bú kèqì", emoji: "😊" }
        ]
      },
      {
        type: "fill-blank",
        title: "填一填：Who? (你 · 她 · 他)",
        instructions: "Tap 🔊 to hear the question, then choose the missing word: 你 you, 她 she, 他 he.",
        wordBank: ["你", "她", "他"],
        items: [
          { before: "", after: "叫什麼名字？", say: "你叫什麼名字？", answer: "你", pinyinHint: "___ jiào shéme míngzì? (What is your name?)" },
          { before: "", after: "是誰？", say: "她是誰？", answer: "她", pinyinHint: "___ shì shéi? (Who is she?)" },
          { before: "", after: "叫什麼名字？", say: "他叫什麼名字？", answer: "他", pinyinHint: "___ jiào shéme míngzì? (What is his name?)" }
        ]
      }
    ],

    culture: {
      title: "Names and manners 名字與禮貌",
      englishText: "Asking someone's name is one of the first things we do when we meet a new friend: 你叫什麼名字？ To answer, say 我叫 and then your name. To ask about someone else, swap 你 (you) for 她 (she) or 他 (he) — in speech, 她 and 他 sound exactly the same, Tā! When someone helps you, say 謝謝你, and the polite answer is 不客氣 (literally “don't be polite” — it means you're welcome). These cards come from a Gemini flashcard deck: tap a card to flip it and see the zhuyin, pinyin and English."
    }
  });
})();
