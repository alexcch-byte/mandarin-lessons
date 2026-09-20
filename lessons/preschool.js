// Preschool Basics — not tied to a specific textbook lesson number.
// Covers counting 1-30, common animals, everyday foods, and simple greetings.
// Designed as a foundational/supplementary category alongside the numbered
// book lessons — good starting point for the youngest learners.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "preschool-basics",
  category: true,
  bookTitle: "Preschool Basics",
  title: "學前基礎",
  titlePinyin: "Xuéqián jīchǔ",
  titleEnglish: "Counting, Animals, Food & Greetings",
  dateAdded: "2026-09-15",

  vocabulary: [
    { hanzi: "一", pinyin: "yī", english: "one", emoji: "1️⃣", group: "🔢 Counting" },
    { hanzi: "二", pinyin: "èr", english: "two", emoji: "2️⃣", group: "🔢 Counting" },
    { hanzi: "三", pinyin: "sān", english: "three", emoji: "3️⃣", group: "🔢 Counting" },
    { hanzi: "四", pinyin: "sì", english: "four", emoji: "4️⃣", group: "🔢 Counting" },
    { hanzi: "五", pinyin: "wǔ", english: "five", emoji: "5️⃣", group: "🔢 Counting" },
    { hanzi: "六", pinyin: "liù", english: "six", emoji: "6️⃣", group: "🔢 Counting" },
    { hanzi: "七", pinyin: "qī", english: "seven", emoji: "7️⃣", group: "🔢 Counting" },
    { hanzi: "八", pinyin: "bā", english: "eight", emoji: "8️⃣", group: "🔢 Counting" },
    { hanzi: "九", pinyin: "jiǔ", english: "nine", emoji: "9️⃣", group: "🔢 Counting" },
    { hanzi: "十", pinyin: "shí", english: "ten", emoji: "🔟", group: "🔢 Counting" },
    { hanzi: "十一", pinyin: "shíyī", english: "eleven", emoji: "1️⃣1️⃣", group: "🔢 Counting" },
    { hanzi: "十二", pinyin: "shí'èr", english: "twelve", emoji: "1️⃣2️⃣", group: "🔢 Counting" },
    { hanzi: "十三", pinyin: "shísān", english: "thirteen", emoji: "1️⃣3️⃣", group: "🔢 Counting" },
    { hanzi: "十四", pinyin: "shísì", english: "fourteen", emoji: "1️⃣4️⃣", group: "🔢 Counting" },
    { hanzi: "十五", pinyin: "shíwǔ", english: "fifteen", emoji: "1️⃣5️⃣", group: "🔢 Counting" },
    { hanzi: "十六", pinyin: "shíliù", english: "sixteen", emoji: "1️⃣6️⃣", group: "🔢 Counting" },
    { hanzi: "十七", pinyin: "shíqī", english: "seventeen", emoji: "1️⃣7️⃣", group: "🔢 Counting" },
    { hanzi: "十八", pinyin: "shíbā", english: "eighteen", emoji: "1️⃣8️⃣", group: "🔢 Counting" },
    { hanzi: "十九", pinyin: "shíjiǔ", english: "nineteen", emoji: "1️⃣9️⃣", group: "🔢 Counting" },
    { hanzi: "二十", pinyin: "èrshí", english: "twenty", emoji: "2️⃣0️⃣", group: "🔢 Counting" },
    { hanzi: "二十一", pinyin: "èrshíyī", english: "twenty-one", emoji: "2️⃣1️⃣", group: "🔢 Counting" },
    { hanzi: "二十二", pinyin: "èrshí'èr", english: "twenty-two", emoji: "2️⃣2️⃣", group: "🔢 Counting" },
    { hanzi: "二十三", pinyin: "èrshísān", english: "twenty-three", emoji: "2️⃣3️⃣", group: "🔢 Counting" },
    { hanzi: "二十四", pinyin: "èrshísì", english: "twenty-four", emoji: "2️⃣4️⃣", group: "🔢 Counting" },
    { hanzi: "二十五", pinyin: "èrshíwǔ", english: "twenty-five", emoji: "2️⃣5️⃣", group: "🔢 Counting" },
    { hanzi: "二十六", pinyin: "èrshíliù", english: "twenty-six", emoji: "2️⃣6️⃣", group: "🔢 Counting" },
    { hanzi: "二十七", pinyin: "èrshíqī", english: "twenty-seven", emoji: "2️⃣7️⃣", group: "🔢 Counting" },
    { hanzi: "二十八", pinyin: "èrshíbā", english: "twenty-eight", emoji: "2️⃣8️⃣", group: "🔢 Counting" },
    { hanzi: "二十九", pinyin: "èrshíjiǔ", english: "twenty-nine", emoji: "2️⃣9️⃣", group: "🔢 Counting" },
    { hanzi: "三十", pinyin: "sānshí", english: "thirty", emoji: "3️⃣0️⃣", group: "🔢 Counting" },

    { hanzi: "狗", pinyin: "gǒu", english: "dog", emoji: "🐶", group: "🐾 Animals" },
    { hanzi: "貓", pinyin: "māo", english: "cat", emoji: "🐱", group: "🐾 Animals" },
    { hanzi: "魚", pinyin: "yú", english: "fish", emoji: "🐟", group: "🐾 Animals" },
    { hanzi: "鳥", pinyin: "niǎo", english: "bird", emoji: "🐦", group: "🐾 Animals" },
    { hanzi: "兔子", pinyin: "tùzi", english: "rabbit", emoji: "🐰", group: "🐾 Animals" },
    { hanzi: "大象", pinyin: "dàxiàng", english: "elephant", emoji: "🐘", group: "🐾 Animals" },
    { hanzi: "獅子", pinyin: "shīzi", english: "lion", emoji: "🦁", group: "🐾 Animals" },
    { hanzi: "猴子", pinyin: "hóuzi", english: "monkey", emoji: "🐵", group: "🐾 Animals" },
    { hanzi: "豬", pinyin: "zhū", english: "pig", emoji: "🐷", group: "🐾 Animals" },
    { hanzi: "牛", pinyin: "niú", english: "cow", emoji: "🐮", group: "🐾 Animals" },

    { hanzi: "蘋果", pinyin: "píngguǒ", english: "apple", emoji: "🍎", group: "🍎 Food" },
    { hanzi: "香蕉", pinyin: "xiāngjiāo", english: "banana", emoji: "🍌", group: "🍎 Food" },
    { hanzi: "米飯", pinyin: "mǐfàn", english: "rice", emoji: "🍚", group: "🍎 Food" },
    { hanzi: "麵包", pinyin: "miànbāo", english: "bread", emoji: "🍞", group: "🍎 Food" },
    { hanzi: "雞蛋", pinyin: "jīdàn", english: "egg", emoji: "🥚", group: "🍎 Food" },
    { hanzi: "牛奶", pinyin: "niúnǎi", english: "milk", emoji: "🥛", group: "🍎 Food" },
    { hanzi: "水", pinyin: "shuǐ", english: "water", emoji: "💧", group: "🍎 Food" },
    { hanzi: "糖果", pinyin: "tángguǒ", english: "candy", emoji: "🍬", group: "🍎 Food" },

    { hanzi: "你好", pinyin: "nǐhǎo", english: "hello", emoji: "👋", group: "👋 Greetings" },
    { hanzi: "早安", pinyin: "zǎoān", english: "good morning", emoji: "☀️", group: "👋 Greetings" },
    { hanzi: "晚安", pinyin: "wǎnān", english: "good night", emoji: "🌙", group: "👋 Greetings" },
    { hanzi: "再見", pinyin: "zàijiàn", english: "goodbye", emoji: "👋", group: "👋 Greetings" },
    { hanzi: "謝謝", pinyin: "xièxie", english: "thank you", emoji: "🙏", group: "👋 Greetings" },
    { hanzi: "不客氣", pinyin: "bú kèqì", english: "you're welcome", emoji: "😊", group: "👋 Greetings" },
    { hanzi: "對不起", pinyin: "duìbùqǐ", english: "sorry", emoji: "😔", group: "👋 Greetings" },
    { hanzi: "沒關係", pinyin: "méiguānxi", english: "it's okay", emoji: "🤗", group: "👋 Greetings" }
  ],

  sentencePatterns: [
    { hanzi: "這是……。", pinyin: "Zhè shì ...", english: "This is a ..." },
    { hanzi: "我喜歡……。", pinyin: "Wǒ xǐhuān ...", english: "I like ..." },
    { hanzi: "我有……個……。", pinyin: "Wǒ yǒu ... ge ...", english: "I have ... (number) of ..." },
    { hanzi: "你好嗎？", pinyin: "Nǐ hǎo ma?", english: "How are you?" },
    { hanzi: "我很好，謝謝。", pinyin: "Wǒ hěn hǎo, xièxie.", english: "I'm good, thank you." }
  ],

  dialogues: [
    {
      title: "打招呼：早安！",
      titleEnglish: "Greetings: Good Morning!",
      lines: [
        { speaker: "小朋友 A", hanzi: "早安！", pinyin: "Zǎoān!", english: "Good morning!" },
        { speaker: "小朋友 B", hanzi: "早安！你好嗎？", pinyin: "Zǎoān! Nǐ hǎo ma?", english: "Good morning! How are you?" },
        { speaker: "小朋友 A", hanzi: "我很好，謝謝。你呢？", pinyin: "Wǒ hěn hǎo, xièxie. Nǐ ne?", english: "I'm good, thank you. And you?" },
        { speaker: "小朋友 B", hanzi: "我也很好。", pinyin: "Wǒ yě hěn hǎo.", english: "I'm good too." },
        { speaker: "小朋友 A", hanzi: "再見！明天見！", pinyin: "Zàijiàn! Míngtiān jiàn!", english: "Goodbye! See you tomorrow!" },
        { speaker: "小朋友 B", hanzi: "晚安！", pinyin: "Wǎnān!", english: "Good night!" }
      ]
    },
    {
      title: "數一數：一起數動物",
      titleEnglish: "Let's Count: Counting Animals Together",
      lines: [
        { speaker: "小朋友 A", hanzi: "你看！一隻狗！", pinyin: "Nǐ kàn! Yì zhī gǒu!", english: "Look! One dog!" },
        { speaker: "小朋友 B", hanzi: "還有二隻貓！", pinyin: "Hái yǒu èr zhī māo!", english: "There are also two cats!" },
        { speaker: "小朋友 A", hanzi: "我喜歡兔子。", pinyin: "Wǒ xǐhuān tùzi.", english: "I like rabbits." },
        { speaker: "小朋友 B", hanzi: "我喜歡大象。", pinyin: "Wǒ xǐhuān dàxiàng.", english: "I like elephants." }
      ]
    },
    {
      title: "吃點心：蘋果還是香蕉？",
      titleEnglish: "Snack Time: Apple or Banana?",
      lines: [
        { speaker: "媽媽 Mom", hanzi: "你要吃蘋果還是香蕉？", pinyin: "Nǐ yào chī píngguǒ háishì xiāngjiāo?", english: "Do you want to eat an apple or a banana?" },
        { speaker: "小朋友 Child", hanzi: "我要吃蘋果，謝謝媽媽。", pinyin: "Wǒ yào chī píngguǒ, xièxie māma.", english: "I want to eat an apple, thank you Mom." },
        { speaker: "媽媽 Mom", hanzi: "不客氣！", pinyin: "Bú kèqì!", english: "You're welcome!" }
      ]
    }
  ],

  writingPractice: [
    { hanzi: "一", pinyin: "yī", english: "one" },
    { hanzi: "二", pinyin: "èr", english: "two" },
    { hanzi: "三", pinyin: "sān", english: "three" },
    { hanzi: "四", pinyin: "sì", english: "four" },
    { hanzi: "五", pinyin: "wǔ", english: "five" },
    { hanzi: "六", pinyin: "liù", english: "six" },
    { hanzi: "七", pinyin: "qī", english: "seven" },
    { hanzi: "八", pinyin: "bā", english: "eight" },
    { hanzi: "九", pinyin: "jiǔ", english: "nine" },
    { hanzi: "十", pinyin: "shí", english: "ten" },
    { hanzi: "狗", pinyin: "gǒu", english: "dog" },
    { hanzi: "貓", pinyin: "māo", english: "cat" },
    { hanzi: "魚", pinyin: "yú", english: "fish" },
    { hanzi: "鳥", pinyin: "niǎo", english: "bird" },
    { hanzi: "兔", pinyin: "tù", english: "rabbit (part of 兔子)" },
    { hanzi: "子", pinyin: "zi", english: "noun suffix (child/son)" },
    { hanzi: "大", pinyin: "dà", english: "big" },
    { hanzi: "象", pinyin: "xiàng", english: "elephant (part of 大象)" },
    { hanzi: "獅", pinyin: "shī", english: "lion (part of 獅子)" },
    { hanzi: "猴", pinyin: "hóu", english: "monkey (part of 猴子)" },
    { hanzi: "豬", pinyin: "zhū", english: "pig" },
    { hanzi: "牛", pinyin: "niú", english: "cow, ox" },
    { hanzi: "蘋", pinyin: "píng", english: "apple (part of 蘋果)" },
    { hanzi: "果", pinyin: "guǒ", english: "fruit" },
    { hanzi: "香", pinyin: "xiāng", english: "fragrant (part of 香蕉)" },
    { hanzi: "蕉", pinyin: "jiāo", english: "banana (part of 香蕉)" },
    { hanzi: "米", pinyin: "mǐ", english: "rice (uncooked)" },
    { hanzi: "飯", pinyin: "fàn", english: "cooked rice, meal" },
    { hanzi: "麵", pinyin: "miàn", english: "noodles, flour" },
    { hanzi: "包", pinyin: "bāo", english: "bun, to wrap" },
    { hanzi: "雞", pinyin: "jī", english: "chicken" },
    { hanzi: "蛋", pinyin: "dàn", english: "egg" },
    { hanzi: "奶", pinyin: "nǎi", english: "milk" },
    { hanzi: "水", pinyin: "shuǐ", english: "water" },
    { hanzi: "糖", pinyin: "táng", english: "sugar, candy" },
    { hanzi: "你", pinyin: "nǐ", english: "you" },
    { hanzi: "好", pinyin: "hǎo", english: "good" },
    { hanzi: "早", pinyin: "zǎo", english: "early, morning" },
    { hanzi: "安", pinyin: "ān", english: "peace, safe" },
    { hanzi: "晚", pinyin: "wǎn", english: "evening, late" },
    { hanzi: "再", pinyin: "zài", english: "again" },
    { hanzi: "見", pinyin: "jiàn", english: "to see" },
    { hanzi: "謝", pinyin: "xiè", english: "to thank" },
    { hanzi: "不", pinyin: "bù", english: "not, no" },
    { hanzi: "客", pinyin: "kè", english: "guest" },
    { hanzi: "氣", pinyin: "qì", english: "air, manner" },
    { hanzi: "對", pinyin: "duì", english: "correct, towards" },
    { hanzi: "起", pinyin: "qǐ", english: "to rise" },
    { hanzi: "沒", pinyin: "méi", english: "not, do not have" },
    { hanzi: "關", pinyin: "guān", english: "to close, relate" },
    { hanzi: "係", pinyin: "xì", english: "relation, system" }
  ],

  exercises: [
    {
      type: "match-emoji",
      title: "數一數：Match the Number",
      instructions: "Match each Chinese number to the correct emoji.",
      items: [
        { hanzi: "一", pinyin: "yī", emoji: "1️⃣" },
        { hanzi: "二", pinyin: "èr", emoji: "2️⃣" },
        { hanzi: "三", pinyin: "sān", emoji: "3️⃣" },
        { hanzi: "四", pinyin: "sì", emoji: "4️⃣" },
        { hanzi: "五", pinyin: "wǔ", emoji: "5️⃣" },
        { hanzi: "六", pinyin: "liù", emoji: "6️⃣" },
        { hanzi: "七", pinyin: "qī", emoji: "7️⃣" },
        { hanzi: "八", pinyin: "bā", emoji: "8️⃣" },
        { hanzi: "九", pinyin: "jiǔ", emoji: "9️⃣" },
        { hanzi: "十", pinyin: "shí", emoji: "🔟" }
      ]
    },
    {
      type: "match-emoji",
      title: "數一數：Match the Number (11-30)",
      instructions: "Match each Chinese number to the correct emoji.",
      items: [
        { hanzi: "十一", pinyin: "shíyī", emoji: "1️⃣1️⃣" },
        { hanzi: "十五", pinyin: "shíwǔ", emoji: "1️⃣5️⃣" },
        { hanzi: "十九", pinyin: "shíjiǔ", emoji: "1️⃣9️⃣" },
        { hanzi: "二十", pinyin: "èrshí", emoji: "2️⃣0️⃣" },
        { hanzi: "二十一", pinyin: "èrshíyī", emoji: "2️⃣1️⃣" },
        { hanzi: "二十五", pinyin: "èrshíwǔ", emoji: "2️⃣5️⃣" },
        { hanzi: "二十九", pinyin: "èrshíjiǔ", emoji: "2️⃣9️⃣" },
        { hanzi: "三十", pinyin: "sānshí", emoji: "3️⃣0️⃣" }
      ]
    },
    {
      type: "read-aloud",
      title: "數到三十：Count to Thirty",
      instructions: "Tap each number in order and count out loud, one to thirty.",
      items: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十"]
    },
    {
      type: "match-emoji",
      title: "動物配對：Match the Animal",
      instructions: "Match each Chinese animal word to the correct picture.",
      items: [
        { hanzi: "狗", pinyin: "gǒu", emoji: "🐶" },
        { hanzi: "貓", pinyin: "māo", emoji: "🐱" },
        { hanzi: "魚", pinyin: "yú", emoji: "🐟" },
        { hanzi: "鳥", pinyin: "niǎo", emoji: "🐦" },
        { hanzi: "兔子", pinyin: "tùzi", emoji: "🐰" },
        { hanzi: "大象", pinyin: "dàxiàng", emoji: "🐘" },
        { hanzi: "獅子", pinyin: "shīzi", emoji: "🦁" },
        { hanzi: "猴子", pinyin: "hóuzi", emoji: "🐵" },
        { hanzi: "豬", pinyin: "zhū", emoji: "🐷" },
        { hanzi: "牛", pinyin: "niú", emoji: "🐮" }
      ]
    },
    {
      type: "match-emoji",
      title: "食物配對：Match the Food",
      instructions: "Match each Chinese food word to the correct picture.",
      items: [
        { hanzi: "蘋果", pinyin: "píngguǒ", emoji: "🍎" },
        { hanzi: "香蕉", pinyin: "xiāngjiāo", emoji: "🍌" },
        { hanzi: "米飯", pinyin: "mǐfàn", emoji: "🍚" },
        { hanzi: "麵包", pinyin: "miànbāo", emoji: "🍞" },
        { hanzi: "雞蛋", pinyin: "jīdàn", emoji: "🥚" },
        { hanzi: "牛奶", pinyin: "niúnǎi", emoji: "🥛" },
        { hanzi: "水", pinyin: "shuǐ", emoji: "💧" },
        { hanzi: "糖果", pinyin: "tángguǒ", emoji: "🍬" }
      ]
    },
    {
      type: "fill-blank",
      title: "打招呼填空：Greeting Fill-in",
      instructions: "Choose the right word to complete each greeting.",
      wordBank: ["好", "早安", "不客氣", "再見"],
      items: [
        { before: "你好嗎？我很", after: "，謝謝。", answer: "好", pinyinHint: "Nǐ hǎo ma? Wǒ hěn ___, xièxie." },
        { before: "", after: "，你好嗎？", answer: "早安", pinyinHint: "___, nǐ hǎo ma?" },
        { before: "謝謝你！", after: "", answer: "不客氣", pinyinHint: "Xièxie nǐ! ___." },
        { before: "我要回家了，", after: "！", answer: "再見", pinyinHint: "Wǒ yào huí jiā le, ___!" }
      ]
    },
    {
      type: "read-aloud",
      title: "念一念：Read the Greetings Aloud",
      instructions: "Tap each phrase and say it out loud before you hear it.",
      items: ["你好", "早安", "晚安", "再見", "謝謝", "不客氣", "對不起", "沒關係"]
    }
  ],

  culture: {
    title: "吉利數字 Lucky Numbers in Chinese Culture",
    englishText: "In Chinese culture, some numbers are considered lucky or unlucky because of how they sound. The number eight (八, bā) sounds like the word for \"prosperity\" (發, fā), so it's seen as very lucky — many people choose phone numbers or house addresses with lots of eights! The number four (四, sì), on the other hand, sounds like the word for \"death\" (死, sǐ), so it's often avoided — some buildings even skip the fourth floor, going straight from 3 to 5."
  },

  song: {
    title: "蘑菇濃湯 MOGU MOGU (Mushroom Soup)",
    titleEnglish: "A bilingual cooking song by PlayBIG Music — sing along while making mushroom soup!",
    videoFile: "vendor/video/mogu-mogu-song.mp4"
  }
});
