// Lesson data for: Hello, 華語! Book 1, Lesson 5 (買東西 / Buying Things)
// Source: publisher teaching slides uploaded 2026-09-15.
// To add a NEW week: copy this file, change everything below, save as
// lessons/lesson-<n>.js, then add its filename to lessons/manifest.js.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "lesson-5",
  lessonNumber: 5,
  bookTitle: "Hello, 華語！ Book 1",
  title: "買東西",
  titlePinyin: "Mǎi dōngxi",
  titleEnglish: "Buying Things",
  dateAdded: "2026-09-15",

  vocabulary: [
    { hanzi: "看", pinyin: "kàn", english: "look", emoji: "👀" },
    { hanzi: "好多", pinyin: "hǎoduō", english: "many, a lot of", emoji: "🔢" },
    { hanzi: "好", pinyin: "hǎo", english: "very", emoji: "✨" },
    { hanzi: "多", pinyin: "duō", english: "many", emoji: "➕" },
    { hanzi: "人", pinyin: "rén", english: "people", emoji: "🧑" },
    { hanzi: "東西", pinyin: "dōngxi", english: "things, stuffs", emoji: "📦" },
    { hanzi: "你看", pinyin: "nǐ kàn", english: "look (you look)", emoji: "👀" },
    { hanzi: "好多人", pinyin: "hǎoduō rén", english: "so many people", emoji: "👨‍👩‍👧‍👦" },
    { hanzi: "好多東西", pinyin: "hǎoduō dōngxi", english: "a lot of things", emoji: "🛍️" },
    { hanzi: "喝的東西", pinyin: "hē de dōngxi", english: "drink(s)", emoji: "🥤" },
    { hanzi: "吃的東西", pinyin: "chī de dōngxi", english: "things to eat", emoji: "🍽️" },
    { hanzi: "水", pinyin: "shuǐ", english: "water", emoji: "💧" },
    { hanzi: "汽水", pinyin: "qìshuǐ", english: "soda", emoji: "🥤" },
    { hanzi: "蛋糕", pinyin: "dàngāo", english: "cake", emoji: "🍰" },
    { hanzi: "麵包", pinyin: "miànbāo", english: "bread", emoji: "🍞" },
    { hanzi: "果汁", pinyin: "guǒzhī", english: "juice", emoji: "🧃" },
    { hanzi: "巧克力", pinyin: "qiǎokèlì", english: "chocolate", emoji: "🍫" },
    { hanzi: "餅乾", pinyin: "bǐnggān", english: "cookie", emoji: "🍪" },
    { hanzi: "可樂", pinyin: "kělè", english: "cola", emoji: "🥫" },
    { hanzi: "牛奶", pinyin: "niúnǎi", english: "milk", emoji: "🥛" },
    { hanzi: "西瓜", pinyin: "xīguā", english: "watermelon", emoji: "🍉" },
    { hanzi: "糖果", pinyin: "tángguǒ", english: "candy", emoji: "🍬" },
    { hanzi: "香蕉", pinyin: "xiāngjiāo", english: "banana", emoji: "🍌" },
    { hanzi: "這個", pinyin: "zhège", english: "this one", emoji: "👉" },
    { hanzi: "好喝", pinyin: "hǎohē", english: "good to drink", emoji: "😋" },
    { hanzi: "好吃", pinyin: "hǎochī", english: "delicious, yummy", emoji: "🤤" },
    { hanzi: "要", pinyin: "yào", english: "want", emoji: "🙋" },
    { hanzi: "喝喝看", pinyin: "hēhēkàn", english: "try to drink", emoji: "🥤" },
    { hanzi: "吃吃看", pinyin: "chīchīkàn", english: "try to eat", emoji: "🍴" }
  ],

  sentencePatterns: [
    { hanzi: "東西在哪裡？", pinyin: "Dōngxi zài nǎlǐ?", english: "Where are the things?" },
    { hanzi: "這個是什麼？這個是……。", pinyin: "Zhège shì shénme? Zhège shì ... .", english: "What is this? This is …." },
    { hanzi: "你喜歡吃……嗎？你喜歡喝……嗎？", pinyin: "Nǐ xǐhuān chī ... ma? Nǐ xǐhuān hē ... ma?", english: "Do you like to eat …? Do you like to drink …?" },
    { hanzi: "……好吃嗎？……好喝嗎？", pinyin: "... hǎochī ma? ... hǎohē ma?", english: "Is … tasty? Is … good to drink?" },
    { hanzi: "……好吃不好吃？……好喝不好喝？", pinyin: "... hǎochī bù hǎochī? ... hǎohē bù hǎohē?", english: "Is … tasty or not? Is … good to drink or not?" },
    { hanzi: "……好吃。……也好吃。", pinyin: "... hǎochī. ... yě hǎochī.", english: "… is tasty. … is also tasty." },
    { hanzi: "……好喝。……也好喝。", pinyin: "... hǎohē. ... yě hǎohē.", english: "… is good to drink. … is also good to drink." },
    { hanzi: "你要不要喝？", pinyin: "Nǐ yào bú yào hē?", english: "Do you want to drink (it)?" },
    { hanzi: "你要不要……？", pinyin: "Nǐ yào bú yào ... ?", english: "Do you want …?" },
    { hanzi: "你要什麼東西？我要這個。", pinyin: "Nǐ yào shénme dōngxi? Wǒ yào zhège.", english: "What do you want? I want this one." },
    { hanzi: "我要……。我也要……。", pinyin: "Wǒ yào ... . Wǒ yě yào ... .", english: "I want …. I also want …." },
    { hanzi: "我不要這個。我不要……。我也不要……。", pinyin: "Wǒ bú yào zhège. Wǒ bú yào ... . Wǒ yě bú yào ... .", english: "I don't want this one. I don't want …. I don't want … either." }
  ],

  dialogues: [
    {
      title: "看一看：在超市",
      titleEnglish: "Look: At the Supermarket",
      lines: [
        { speaker: "小男孩 Boy", hanzi: "對不起！", pinyin: "Duìbùqǐ!", english: "Sorry!" },
        { speaker: "爺爺 Grandpa", hanzi: "沒關係！", pinyin: "Méiguānxi!", english: "It's okay!" },
        { speaker: "女兒 Daughter", hanzi: "你看！好多人，好多東西！", pinyin: "Nǐ kàn! Hǎoduō rén, hǎoduō dōngxi!", english: "Look! So many people, so many things!" },
        { speaker: "媽媽 Mom", hanzi: "你喜歡什麼？", pinyin: "Nǐ xǐhuān shénme?", english: "What do you like?" },
        { speaker: "女兒 Daughter", hanzi: "喝的東西在那裡。", pinyin: "Hē de dōngxi zài nàlǐ.", english: "The drinks are over there." },
        { speaker: "店員 Shopkeeper", hanzi: "吃的東西在這裡。", pinyin: "Chī de dōngxi zài zhèlǐ.", english: "The food is over here." }
      ]
    },
    {
      title: "看一看：好吃好喝",
      titleEnglish: "Look: Delicious and Tasty",
      lines: [
        { speaker: "阿姨 Auntie (vendor)", hanzi: "你要不要喝？這個好喝。", pinyin: "Nǐ yào bú yào hē? Zhège hǎohē.", english: "Do you want to drink some? This is good to drink." },
        { speaker: "奶奶 Grandma", hanzi: "謝謝！", pinyin: "Xièxie!", english: "Thank you!" },
        { speaker: "客人 Customer", hanzi: "這個好吃。", pinyin: "Zhège hǎochī.", english: "This is delicious." },
        { speaker: "店員 Shopkeeper", hanzi: "你要什麼？", pinyin: "Nǐ yào shénme?", english: "What do you want?" },
        { speaker: "小女孩 Girl", hanzi: "我要這個。", pinyin: "Wǒ yào zhège.", english: "I want this one." }
      ]
    },
    {
      title: "看一看：買派對帽",
      titleEnglish: "Look: Buying a Party Hat",
      lines: [
        { speaker: "女兒 Daughter", hanzi: "我也要這個。", pinyin: "Wǒ yě yào zhège.", english: "I want this one too." },
        { speaker: "女兒 Daughter", hanzi: "謝謝媽媽。", pinyin: "Xièxie māma.", english: "Thank you, Mom." },
        { speaker: "媽媽 Mom", hanzi: "不客氣。", pinyin: "Búkèqi.", english: "You're welcome." }
      ]
    },
    {
      title: "情境對話：吃吃看，喝喝看",
      titleEnglish: "Situational Dialogue: Try It!",
      lines: [
        { speaker: "老闆 Vendor", hanzi: "喝喝看。", pinyin: "Hēhēkàn.", english: "Try drinking this." },
        { speaker: "老闆 Vendor", hanzi: "吃吃看。", pinyin: "Chīchīkàn.", english: "Try eating this." },
        { speaker: "爸爸 Dad", hanzi: "謝謝！", pinyin: "Xièxie!", english: "Thank you!" }
      ]
    }
  ],

  writingPractice: [
    { hanzi: "看", pinyin: "kàn", english: "look" },
    { hanzi: "好", pinyin: "hǎo", english: "good / very" },
    { hanzi: "多", pinyin: "duō", english: "many" },
    { hanzi: "人", pinyin: "rén", english: "person, people" },
    { hanzi: "東", pinyin: "dōng", english: "east" },
    { hanzi: "西", pinyin: "xī", english: "west" },
    { hanzi: "你", pinyin: "nǐ", english: "you" },
    { hanzi: "喝", pinyin: "hē", english: "drink" },
    { hanzi: "的", pinyin: "de", english: "(possessive/descriptive particle)" },
    { hanzi: "吃", pinyin: "chī", english: "eat" },
    { hanzi: "水", pinyin: "shuǐ", english: "water" },
    { hanzi: "汽", pinyin: "qì", english: "steam, gas" },
    { hanzi: "蛋", pinyin: "dàn", english: "egg" },
    { hanzi: "糕", pinyin: "gāo", english: "cake" },
    { hanzi: "麵", pinyin: "miàn", english: "flour, noodle" },
    { hanzi: "包", pinyin: "bāo", english: "bun, to wrap" },
    { hanzi: "果", pinyin: "guǒ", english: "fruit" },
    { hanzi: "汁", pinyin: "zhī", english: "juice" },
    { hanzi: "巧", pinyin: "qiǎo", english: "clever" },
    { hanzi: "克", pinyin: "kè", english: "gram" },
    { hanzi: "力", pinyin: "lì", english: "strength" },
    { hanzi: "餅", pinyin: "bǐng", english: "cake, biscuit" },
    { hanzi: "乾", pinyin: "gān", english: "dry" },
    { hanzi: "可", pinyin: "kě", english: "can, may" },
    { hanzi: "樂", pinyin: "lè", english: "happy, music" },
    { hanzi: "牛", pinyin: "niú", english: "cow" },
    { hanzi: "奶", pinyin: "nǎi", english: "milk" },
    { hanzi: "瓜", pinyin: "guā", english: "melon" },
    { hanzi: "糖", pinyin: "táng", english: "sugar, candy" },
    { hanzi: "香", pinyin: "xiāng", english: "fragrant" },
    { hanzi: "蕉", pinyin: "jiāo", english: "banana" },
    { hanzi: "這", pinyin: "zhè", english: "this" },
    { hanzi: "個", pinyin: "gè", english: "(classifier); one" },
    { hanzi: "要", pinyin: "yào", english: "want" },
    { hanzi: "喜", pinyin: "xǐ", english: "like" },
    { hanzi: "歡", pinyin: "huān", english: "joyful" },
    { hanzi: "什", pinyin: "shén", english: "what" },
    { hanzi: "麼", pinyin: "me", english: "(question suffix)" },
    { hanzi: "是", pinyin: "shì", english: "to be" },
    { hanzi: "嗎", pinyin: "ma", english: "(question particle)" },
    { hanzi: "也", pinyin: "yě", english: "also" },
    { hanzi: "不", pinyin: "bù", english: "not" },
    { hanzi: "在", pinyin: "zài", english: "at, in" },
    { hanzi: "哪", pinyin: "nǎ", english: "which, where" },
    { hanzi: "裡", pinyin: "lǐ", english: "inside" },
    { hanzi: "謝", pinyin: "xiè", english: "thank" },
    { hanzi: "媽", pinyin: "mā", english: "mom" },
    { hanzi: "客", pinyin: "kè", english: "guest" },
    { hanzi: "氣", pinyin: "qì", english: "air, manner" },
    { hanzi: "對", pinyin: "duì", english: "correct" },
    { hanzi: "起", pinyin: "qǐ", english: "to rise" },
    { hanzi: "沒", pinyin: "méi", english: "not have" },
    { hanzi: "關", pinyin: "guān", english: "to relate, close" },
    { hanzi: "係", pinyin: "xì", english: "relation" },
    { hanzi: "我", pinyin: "wǒ", english: "I, me" }
  ],

  exercises: [
    {
      type: "match-emoji",
      title: "新詞語：吃的東西、喝的東西 Match the Food and Drink",
      instructions: "Match each Chinese food or drink word to the correct emoji.",
      items: [
        { hanzi: "水", pinyin: "shuǐ", emoji: "💧" },
        { hanzi: "汽水", pinyin: "qìshuǐ", emoji: "🥤" },
        { hanzi: "蛋糕", pinyin: "dàngāo", emoji: "🍰" },
        { hanzi: "麵包", pinyin: "miànbāo", emoji: "🍞" },
        { hanzi: "果汁", pinyin: "guǒzhī", emoji: "🧃" },
        { hanzi: "巧克力", pinyin: "qiǎokèlì", emoji: "🍫" },
        { hanzi: "餅乾", pinyin: "bǐnggān", emoji: "🍪" },
        { hanzi: "可樂", pinyin: "kělè", emoji: "🥫" },
        { hanzi: "牛奶", pinyin: "niúnǎi", emoji: "🥛" },
        { hanzi: "西瓜", pinyin: "xīguā", emoji: "🍉" },
        { hanzi: "糖果", pinyin: "tángguǒ", emoji: "🍬" },
        { hanzi: "香蕉", pinyin: "xiāngjiāo", emoji: "🍌" }
      ]
    },
    {
      type: "fill-blank",
      title: "一起練習：你要不要……？ (Set A)",
      instructions: "Choose the right word from the word bank to complete the shopkeeper-customer dialogue.",
      wordBank: ["蛋糕", "汽水", "西瓜", "果汁", "糖果", "餅乾", "麵包", "巧克力", "牛奶"],
      items: [
        { before: "你好！你要不要", after: "（cake）？我要蛋糕。", answer: "蛋糕", pinyinHint: "Nǐhǎo! Nǐ yào bú yào ___ (dàngāo)?" },
        { before: "你好！你要不要", after: "（soda）？我要汽水。", answer: "汽水", pinyinHint: "Nǐhǎo! Nǐ yào bú yào ___ (qìshuǐ)?" },
        { before: "你好！你要不要", after: "（watermelon）？我要西瓜。", answer: "西瓜", pinyinHint: "Nǐhǎo! Nǐ yào bú yào ___ (xīguā)?" },
        { before: "你好！你要不要", after: "（juice）？我要果汁。", answer: "果汁", pinyinHint: "Nǐhǎo! Nǐ yào bú yào ___ (guǒzhī)?" },
        { before: "你好！你要不要", after: "（candy）？我要糖果。", answer: "糖果", pinyinHint: "Nǐhǎo! Nǐ yào bú yào ___ (tángguǒ)?" },
        { before: "你好！你要不要", after: "（cookie）？我要餅乾。", answer: "餅乾", pinyinHint: "Nǐhǎo! Nǐ yào bú yào ___ (bǐnggān)?" },
        { before: "你好！你要不要", after: "（bread）？我要麵包。", answer: "麵包", pinyinHint: "Nǐhǎo! Nǐ yào bú yào ___ (miànbāo)?" },
        { before: "你好！你要不要", after: "（chocolate）？我要巧克力。", answer: "巧克力", pinyinHint: "Nǐhǎo! Nǐ yào bú yào ___ (qiǎokèlì)?" },
        { before: "你好！你要不要", after: "（milk）？我要牛奶。", answer: "牛奶", pinyinHint: "Nǐhǎo! Nǐ yào bú yào ___ (niúnǎi)?" }
      ]
    },
    {
      type: "fill-blank",
      title: "說一說：……好吃嗎？……好喝嗎？ (Set B)",
      instructions: "Choose the right word from the word bank to complete each question about whether the food or drink is tasty.",
      wordBank: ["蛋糕", "西瓜", "餅乾", "牛奶", "果汁", "可樂"],
      items: [
        { before: "", after: "好吃嗎？（cake）", answer: "蛋糕", pinyinHint: "___ hǎochī ma? (dàngāo)" },
        { before: "", after: "好吃嗎？（watermelon）", answer: "西瓜", pinyinHint: "___ hǎochī ma? (xīguā)" },
        { before: "", after: "好吃嗎？（cookie）", answer: "餅乾", pinyinHint: "___ hǎochī ma? (bǐnggān)" },
        { before: "", after: "好喝嗎？（milk）", answer: "牛奶", pinyinHint: "___ hǎohē ma? (niúnǎi)" },
        { before: "", after: "好喝嗎？（juice）", answer: "果汁", pinyinHint: "___ hǎohē ma? (guǒzhī)" },
        { before: "", after: "好喝嗎？（cola）", answer: "可樂", pinyinHint: "___ hǎohē ma? (kělè)" }
      ]
    },
    {
      type: "read-aloud",
      title: "念一念：Read It Out Loud (Set A)",
      instructions: "Tap each word and say it out loud before you hear it.",
      items: ["看", "多", "人", "東西", "要", "這個", "好吃", "好喝", "可樂"]
    },
    {
      type: "read-aloud",
      title: "說中文：看英文說中文 (Set B)",
      instructions: "Look at the English word, then read the matching Chinese word out loud.",
      items: ["東西", "這個", "要", "好吃", "看", "蛋糕", "麵包", "人", "西瓜"]
    },
    {
      type: "read-aloud",
      title: "複習問句：Review Questions",
      instructions: "Read each review question out loud, then try to answer it.",
      items: [
        "這裡有麵包嗎？",
        "這裡有喝的東西嗎？",
        "這裡有老師也有小朋友嗎？",
        "香蕉好吃嗎？",
        "你喜歡喝果汁嗎？",
        "吃的東西在哪裡？",
        "喝的東西在哪裡？",
        "誰是你的老師？",
        "你喜歡喝巧克力牛奶嗎？",
        "蛋糕好吃嗎？西瓜也好吃嗎？",
        "你明天在不在這裡？",
        "你叫什麼名字？",
        "你不喜歡喝可樂，對不對？",
        "你要吃糖果還是餅乾？",
        "老師在哪裡？"
      ]
    }
  ],

  culture: {
    title: "文化：吃元寶 To Eat Gold Ingots",
    englishText: "Chinese people say that eating gold ingots means eating dumplings. Because the shape of dumplings looks like ingots, Chinese people often eat dumplings during Chinese New Year — it means good fortune and bringing wealth. Making and cooking dumplings is very convenient: mix meat and vegetables into a filling, wrap it, then boil a pot of water to cook them, and enjoy. That is why Chinese families often wrap and eat dumplings together when there are many guests at home."
  }
});
