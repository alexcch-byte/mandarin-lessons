// Lesson data for: Hello, 華語! Book 1, Lesson 4 (在商店 / At the Store)
// Source: publisher teaching slides uploaded 2026-09-15.
// To add a NEW week: copy this file, change everything below, save as
// lessons/lesson-<n>.js, then add its filename to lessons/manifest.js.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "lesson-4",
  lessonNumber: 4,
  bookTitle: "Hello, 華語！ Book 1",
  title: "在商店",
  titlePinyin: "Zài shāngdiàn",
  titleEnglish: "At the Store",
  dateAdded: "2026-09-15",

  vocabulary: [
    { hanzi: "再見", pinyin: "zàijiàn", english: "goodbye", emoji: "👋" },
    { hanzi: "明天見", pinyin: "míngtiān jiàn", english: "see you tomorrow", emoji: "📅" },
    { hanzi: "見", pinyin: "jiàn", english: "to meet, to see", emoji: "🤝" },
    { hanzi: "你好", pinyin: "nǐhǎo", english: "hello", emoji: "🙋" },
    { hanzi: "小朋友", pinyin: "xiǎopéngyǒu", english: "children", emoji: "🧒" },
    { hanzi: "喜歡", pinyin: "xǐhuān", english: "to like", emoji: "😊" },
    { hanzi: "牛奶", pinyin: "niúnǎi", english: "milk", emoji: "🥛" },
    { hanzi: "水", pinyin: "shuǐ", english: "water", emoji: "💧" },
    { hanzi: "喝", pinyin: "hē", english: "to drink", emoji: "🥤" },
    { hanzi: "果汁", pinyin: "guǒzhī", english: "juice", emoji: "🧃" },
    { hanzi: "汽水", pinyin: "qìshuǐ", english: "soda", emoji: "🥤" },
    { hanzi: "巧克力", pinyin: "qiǎokèlì", english: "chocolate", emoji: "🍫" },
    { hanzi: "糖果", pinyin: "tángguǒ", english: "candy", emoji: "🍬" },
    { hanzi: "吃", pinyin: "chī", english: "to eat", emoji: "🍽️" },
    { hanzi: "餅乾", pinyin: "bǐnggān", english: "cookie", emoji: "🍪" },
    { hanzi: "也", pinyin: "yě", english: "also, too", emoji: "➕" },
    { hanzi: "牠", pinyin: "tā", english: "it (for an animal)", emoji: "🐾" },
    { hanzi: "還是", pinyin: "háishì", english: "or (for a question)", emoji: "🔀" },
    { hanzi: "對", pinyin: "duì", english: "correct, right", emoji: "✅" },
    { hanzi: "對不起", pinyin: "duìbùqǐ", english: "sorry", emoji: "😔" },
    { hanzi: "沒關係", pinyin: "méiguānxi", english: "that's all right", emoji: "👍" }
  ],

  sentencePatterns: [
    { hanzi: "你喜歡喝什麼？", pinyin: "Nǐ xǐhuān hē shéme?", english: "What do you like to drink?" },
    { hanzi: "你喜歡／不喜歡喝……嗎？", pinyin: "Nǐ xǐhuān / bù xǐhuān hē ... ma?", english: "Do you like / not like to drink ... ?" },
    { hanzi: "你喜歡吃什麼？", pinyin: "Nǐ xǐhuān chī shéme?", english: "What do you like to eat?" },
    { hanzi: "你喜歡／不喜歡吃……嗎？", pinyin: "Nǐ xǐhuān / bù xǐhuān chī ... ma?", english: "Do you like / not like to eat ... ?" },
    { hanzi: "他喜歡吃什麼？", pinyin: "Tā xǐhuān chī shéme?", english: "What does he like to eat?" },
    { hanzi: "他也喜歡吃糖果嗎？", pinyin: "Tā yě xǐhuān chī tángguǒ ma?", english: "Does he also like candy?" },
    { hanzi: "他喜歡喝什麼？", pinyin: "Tā xǐhuān hē shéme?", english: "What does he like to drink?" },
    { hanzi: "他也喜歡喝果汁嗎？", pinyin: "Tā yě xǐhuān hē guǒzhī ma?", english: "Does he also like juice?" },
    { hanzi: "你喜歡……，還是……？", pinyin: "Nǐ xǐhuān ... , háishì ... ?", english: "Do you like ... or ... ?" },
    { hanzi: "你也喜歡……嗎？", pinyin: "Nǐ yě xǐhuān ... ma?", english: "Do you also like ... ?" },
    { hanzi: "你不喜歡什麼？", pinyin: "Nǐ bù xǐhuān shéme?", english: "What do you not like?" },
    { hanzi: "你喜歡喝……，對不對？", pinyin: "Nǐ xǐhuān hē ... , duì bú duì?", english: "You like to drink ... , right?" }
  ],

  dialogues: [
    {
      title: "看一看：在商店",
      titleEnglish: "Look: At the store",
      lines: [
        { speaker: "小朋友 Children", hanzi: "再見，明天見。", pinyin: "Zàijiàn, míngtiān jiàn.", english: "Goodbye, see you tomorrow." },
        { speaker: "老闆 Shopkeeper", hanzi: "小朋友好！", pinyin: "Xiǎopéngyǒu hǎo!", english: "Hello, children!" },
        { speaker: "小朋友 Children", hanzi: "你好！", pinyin: "Nǐhǎo!", english: "Hello!" }
      ]
    },
    {
      title: "看一看：買飲料",
      titleEnglish: "Look: Buying a drink",
      lines: [
        { speaker: "女孩 Girl", hanzi: "你喜歡喝果汁嗎？", pinyin: "Nǐ xǐhuān hē guǒzhī ma?", english: "Do you like to drink juice?" },
        { speaker: "男孩 Boy", hanzi: "喜歡。", pinyin: "Xǐhuān.", english: "Yes, I like it." }
      ]
    },
    {
      title: "看一看：買點心",
      titleEnglish: "Look: Buying snacks",
      lines: [
        { speaker: "男孩 Boy", hanzi: "你喜歡吃什麼？", pinyin: "Nǐ xǐhuān chī shéme?", english: "What do you like to eat?" },
        { speaker: "女孩 Girl", hanzi: "餅乾。", pinyin: "Bǐnggān.", english: "Cookies." },
        { speaker: "男孩 Boy", hanzi: "我也喜歡。", pinyin: "Wǒ yě xǐhuān.", english: "I like it too." }
      ]
    },
    {
      title: "看一看：鸚鵡喜歡吃什麼",
      titleEnglish: "Look: What does the parrot like to eat?",
      lines: [
        { speaker: "鸚鵡 Parrot", hanzi: "牠喜歡吃……", pinyin: "Tā xǐhuān chī......", english: "It likes to eat......" }
      ]
    },
    {
      title: "情境對話：對不起",
      titleEnglish: "Situational dialogue: Sorry",
      lines: [
        { speaker: "男孩 Boy", hanzi: "對不起！", pinyin: "Duìbùqǐ!", english: "Sorry!" },
        { speaker: "女孩 Girl", hanzi: "沒關係！", pinyin: "Méiguānxi!", english: "That's all right!" }
      ]
    }
  ],

  writingPractice: [
    { hanzi: "再", pinyin: "zài", english: "again (in 再見 goodbye)" },
    { hanzi: "見", pinyin: "jiàn", english: "to see, meet" },
    { hanzi: "明", pinyin: "míng", english: "bright (in 明天 tomorrow)" },
    { hanzi: "天", pinyin: "tiān", english: "day, sky" },
    { hanzi: "你", pinyin: "nǐ", english: "you" },
    { hanzi: "好", pinyin: "hǎo", english: "good" },
    { hanzi: "小", pinyin: "xiǎo", english: "small" },
    { hanzi: "朋", pinyin: "péng", english: "friend" },
    { hanzi: "友", pinyin: "yǒu", english: "friend" },
    { hanzi: "喜", pinyin: "xǐ", english: "happy (in 喜歡 to like)" },
    { hanzi: "歡", pinyin: "huān", english: "joyful (in 喜歡 to like)" },
    { hanzi: "牛", pinyin: "niú", english: "cow" },
    { hanzi: "奶", pinyin: "nǎi", english: "milk" },
    { hanzi: "水", pinyin: "shuǐ", english: "water" },
    { hanzi: "喝", pinyin: "hē", english: "to drink" },
    { hanzi: "果", pinyin: "guǒ", english: "fruit" },
    { hanzi: "汁", pinyin: "zhī", english: "juice" },
    { hanzi: "汽", pinyin: "qì", english: "steam, gas (in 汽水 soda)" },
    { hanzi: "巧", pinyin: "qiǎo", english: "clever (in 巧克力 chocolate)" },
    { hanzi: "克", pinyin: "kè", english: "gram (in 巧克力 chocolate)" },
    { hanzi: "力", pinyin: "lì", english: "strength (in 巧克力 chocolate)" },
    { hanzi: "糖", pinyin: "táng", english: "sugar, candy" },
    { hanzi: "吃", pinyin: "chī", english: "to eat" },
    { hanzi: "餅", pinyin: "bǐng", english: "cake (in 餅乾 cookie)" },
    { hanzi: "乾", pinyin: "gān", english: "dry (in 餅乾 cookie)" },
    { hanzi: "也", pinyin: "yě", english: "also, too" },
    { hanzi: "牠", pinyin: "tā", english: "it (for an animal)" },
    { hanzi: "還", pinyin: "hái", english: "still, also (in 還是 or)" },
    { hanzi: "是", pinyin: "shì", english: "to be" },
    { hanzi: "對", pinyin: "duì", english: "correct, right" },
    { hanzi: "不", pinyin: "bù", english: "not, no" },
    { hanzi: "起", pinyin: "qǐ", english: "to rise (in 對不起 sorry)" },
    { hanzi: "沒", pinyin: "méi", english: "not have" },
    { hanzi: "關", pinyin: "guān", english: "to close, relate to (in 關係 relationship)" },
    { hanzi: "係", pinyin: "xì", english: "relation (in 關係 relationship)" },
    { hanzi: "什", pinyin: "shén", english: "what (in 什麼)" },
    { hanzi: "麼", pinyin: "me", english: "question particle (in 什麼 what)" },
    { hanzi: "嗎", pinyin: "ma", english: "question particle" },
    { hanzi: "他", pinyin: "tā", english: "he" }
  ],

  exercises: [
    {
      type: "match-emoji",
      title: "配對：飲料和點心 Match the food and drink",
      instructions: "Match each Chinese word to the correct picture.",
      items: [
        { hanzi: "果汁", pinyin: "guǒzhī", emoji: "🧃" },
        { hanzi: "汽水", pinyin: "qìshuǐ", emoji: "🥤" },
        { hanzi: "牛奶", pinyin: "niúnǎi", emoji: "🥛" },
        { hanzi: "餅乾", pinyin: "bǐnggān", emoji: "🍪" },
        { hanzi: "巧克力", pinyin: "qiǎokèlì", emoji: "🍫" },
        { hanzi: "糖果", pinyin: "tángguǒ", emoji: "🍬" }
      ]
    },
    {
      type: "match-emoji",
      title: "說中文：Match the English to the Chinese",
      instructions: "Tap the Chinese word that matches the English meaning.",
      items: [
        { hanzi: "吃", pinyin: "chī", emoji: "🍽️" },
        { hanzi: "水", pinyin: "shuǐ", emoji: "💧" },
        { hanzi: "對", pinyin: "duì", emoji: "✅" },
        { hanzi: "喜歡", pinyin: "xǐhuān", emoji: "😊" },
        { hanzi: "喝", pinyin: "hē", emoji: "🥤" },
        { hanzi: "對不起", pinyin: "duìbùqǐ", emoji: "😔" }
      ]
    },
    {
      type: "fill-blank",
      title: "哪個對：Choose the right word",
      instructions: "Choose the correct word to fill in the blank.",
      wordBank: ["吃", "喝", "也", "還是", "對不對"],
      items: [
        { before: "你喜歡", after: "果汁嗎？", answer: "喝", pinyinHint: "Nǐ xǐhuān ___ guǒzhī ma?" },
        { before: "他是你弟弟，", after: "？", answer: "對不對", pinyinHint: "Tā shì nǐ dìdi, ___?" },
        { before: "她是你姐姐", after: "你妹妹？", answer: "還是", pinyinHint: "Tā shì nǐ jiějie ___ nǐ mèimei?" },
        { before: "我哥哥喜歡", after: "餅乾。", answer: "吃", pinyinHint: "Wǒ gēge xǐhuān ___ bǐnggān." },
        { before: "我", after: "喜歡。", answer: "也", pinyinHint: "Wǒ ___ xǐhuān." }
      ]
    },
    {
      type: "read-aloud",
      title: "念一念：Read it out loud",
      instructions: "Tap each word and say it out loud before you hear it.",
      items: ["喜歡", "喝", "吃", "汽水", "也", "牛奶", "果汁", "對", "對不起"]
    },
    {
      type: "read-aloud",
      title: "說一說：Practice questions (review)",
      instructions: "Read each question aloud and try to answer it.",
      items: [
        "你叫什麼名字？",
        "你喜歡喝果汁嗎？",
        "你喜歡喝果汁也喜歡吃餅乾嗎？",
        "你的水放在哪裡？",
        "你的媽媽喜歡喝水嗎？",
        "你的家在這裡嗎？",
        "你不喜歡吃巧克力嗎？",
        "你是不是老師？",
        "誰是你的老師？",
        "你喜歡糖果還是餅乾？",
        "請你站起來。",
        "請你舉手。",
        "你喜歡吃餅乾，對不對？",
        "你的老師喜歡喝牛奶，對不對？"
      ]
    }
  ],

  culture: {
    title: "櫃檯上的鳳梨 Pineapple on the Counter in the Store",
    englishText: "In some Chinese shops you can see a pineapple on the cashier, which is a symbol of luck. Because the pineapple pronunciation in southern Fujianese sounds like \"Wang Lai,\" it means auspicious and thriving. So businessmen like to use pineapple to represent the meaning of business booming. But, you can not put pineapples in the hospital."
  }
});
