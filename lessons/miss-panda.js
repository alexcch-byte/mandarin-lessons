// "Let's Learn Mandarin Chinese with Miss Panda" — a beginner series of 13 short
// lessons. Only the lesson TOPICS (the track titles) come from the series; all
// vocabulary, dialogues and exercises here are our own, written for each topic.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

(function () {
  var G1 = "👋 1-2 Welcome & Hello";
  var G3 = "🔢 3 Numbers 1-10";
  var G4 = "🦨 4 Stinky Skunk";
  var G5 = "🙏 5 Thank You & You're Welcome";
  var G6 = "🙇 6 Excuse Me & That's All Right";
  var G7 = "🦆 7 Little Duckling";
  var G8 = "🤲 8 Please Give Me...";
  var G9 = "👀 9 Eyes, Ears, Nose & Mouth";
  var G10 = "🥋 10 Kung Fu";
  var G11 = "🐾 11 Animals";
  var G12 = "🎉 12 Happy Time";
  var G13 = "🖐️ 13 Goodbye";

  window.MANDARIN_LESSONS.push({
    id: "miss-panda",
    category: true,
    icon: "🐼",
    bookTitle: "Miss Panda",
    title: "熊貓老師學華語",
    titlePinyin: "Xióngmāo lǎoshī xué Huáyǔ",
    titleEnglish: "Learn Mandarin with Miss Panda (13 topics)",
    dateAdded: "2026-10-10",

    vocabulary: [
      { hanzi: "歡迎", pinyin: "huānyíng", english: "welcome", emoji: "🎊", group: G1 },
      { hanzi: "華語", pinyin: "Huáyǔ", english: "Mandarin (Chinese)", emoji: "🇹🇼", group: G1 },
      { hanzi: "你好", pinyin: "nǐ hǎo", english: "hello", emoji: "👋", group: G1 },
      { hanzi: "你好嗎？", pinyin: "nǐ hǎo ma?", english: "how are you?", emoji: "🙂", group: G1 },
      { hanzi: "我很好", pinyin: "wǒ hěn hǎo", english: "I'm fine / I'm good", emoji: "👍", group: G1 },
      { hanzi: "老師好", pinyin: "lǎoshī hǎo", english: "hello, teacher", emoji: "🧑‍🏫", group: G1 },

      { hanzi: "一", pinyin: "yī", english: "one", emoji: "1️⃣", group: G3 },
      { hanzi: "二", pinyin: "èr", english: "two", emoji: "2️⃣", group: G3 },
      { hanzi: "三", pinyin: "sān", english: "three", emoji: "3️⃣", group: G3 },
      { hanzi: "四", pinyin: "sì", english: "four", emoji: "4️⃣", group: G3 },
      { hanzi: "五", pinyin: "wǔ", english: "five", emoji: "5️⃣", group: G3 },
      { hanzi: "六", pinyin: "liù", english: "six", emoji: "6️⃣", group: G3 },
      { hanzi: "七", pinyin: "qī", english: "seven", emoji: "7️⃣", group: G3 },
      { hanzi: "八", pinyin: "bā", english: "eight", emoji: "8️⃣", group: G3 },
      { hanzi: "九", pinyin: "jiǔ", english: "nine", emoji: "9️⃣", group: G3 },
      { hanzi: "十", pinyin: "shí", english: "ten", emoji: "🔟", group: G3 },

      { hanzi: "臭鼬", pinyin: "chòuyòu", english: "skunk", emoji: "🦨", group: G4 },
      { hanzi: "臭", pinyin: "chòu", english: "stinky", emoji: "💨", group: G4 },
      { hanzi: "好臭", pinyin: "hǎo chòu", english: "so stinky!", emoji: "🤢", group: G4 },
      { hanzi: "香", pinyin: "xiāng", english: "good-smelling", emoji: "🌸", group: G4 },

      { hanzi: "謝謝", pinyin: "xièxie", english: "thank you", emoji: "🙏", group: G5 },
      { hanzi: "不客氣", pinyin: "bú kèqì", english: "you're welcome", emoji: "😊", group: G5 },

      { hanzi: "對不起", pinyin: "duìbuqǐ", english: "I'm sorry", emoji: "😔", group: G6 },
      { hanzi: "不好意思", pinyin: "bù hǎoyìsi", english: "excuse me", emoji: "🙋", group: G6 },
      { hanzi: "沒關係", pinyin: "méi guānxi", english: "that's all right", emoji: "🤗", group: G6 },

      { hanzi: "小鴨子", pinyin: "xiǎo yāzi", english: "little duckling", emoji: "🐥", group: G7 },
      { hanzi: "鴨子", pinyin: "yāzi", english: "duck", emoji: "🦆", group: G7 },
      { hanzi: "游泳", pinyin: "yóuyǒng", english: "to swim", emoji: "🏊", group: G7 },
      { hanzi: "水", pinyin: "shuǐ", english: "water", emoji: "💧", group: G7 },
      { hanzi: "呱呱", pinyin: "guāguā", english: "quack quack", emoji: "🔊", group: G7 },

      { hanzi: "請", pinyin: "qǐng", english: "please", emoji: "🙏", group: G8 },
      { hanzi: "給我", pinyin: "gěi wǒ", english: "give me", emoji: "🤲", group: G8 },
      { hanzi: "請給我水", pinyin: "qǐng gěi wǒ shuǐ", english: "please give me water", emoji: "🥤", group: G8 },
      { hanzi: "請給我蘋果", pinyin: "qǐng gěi wǒ píngguǒ", english: "please give me an apple", emoji: "🍎", group: G8 },
      { hanzi: "請給我麵包", pinyin: "qǐng gěi wǒ miànbāo", english: "please give me bread", emoji: "🍞", group: G8 },

      { hanzi: "眼睛", pinyin: "yǎnjing", english: "eyes", emoji: "👀", group: G9 },
      { hanzi: "耳朵", pinyin: "ěrduo", english: "ears", emoji: "👂", group: G9 },
      { hanzi: "鼻子", pinyin: "bízi", english: "nose", emoji: "👃", group: G9 },
      { hanzi: "嘴巴", pinyin: "zuǐba", english: "mouth", emoji: "👄", group: G9 },
      { hanzi: "頭", pinyin: "tóu", english: "head", emoji: "🧒", group: G9 },
      { hanzi: "手", pinyin: "shǒu", english: "hand", emoji: "✋", group: G9 },

      { hanzi: "功夫", pinyin: "gōngfu", english: "kung fu", emoji: "🥋", group: G10 },
      { hanzi: "出拳", pinyin: "chū quán", english: "punch", emoji: "👊", group: G10 },
      { hanzi: "踢", pinyin: "tī", english: "kick", emoji: "🦵", group: G10 },
      { hanzi: "跳", pinyin: "tiào", english: "jump", emoji: "🤸", group: G10 },
      { hanzi: "加油", pinyin: "jiāyóu", english: "go! keep going!", emoji: "💪", group: G10 },

      { hanzi: "貓", pinyin: "māo", english: "cat", emoji: "🐱", group: G11 },
      { hanzi: "狗", pinyin: "gǒu", english: "dog", emoji: "🐶", group: G11 },
      { hanzi: "鳥", pinyin: "niǎo", english: "bird", emoji: "🐦", group: G11 },
      { hanzi: "魚", pinyin: "yú", english: "fish", emoji: "🐟", group: G11 },
      { hanzi: "馬", pinyin: "mǎ", english: "horse", emoji: "🐴", group: G11 },
      { hanzi: "豬", pinyin: "zhū", english: "pig", emoji: "🐷", group: G11 },
      { hanzi: "牛", pinyin: "niú", english: "cow", emoji: "🐮", group: G11 },
      { hanzi: "羊", pinyin: "yáng", english: "sheep", emoji: "🐑", group: G11 },
      { hanzi: "熊貓", pinyin: "xióngmāo", english: "panda", emoji: "🐼", group: G11 },
      { hanzi: "老虎", pinyin: "lǎohǔ", english: "tiger", emoji: "🐯", group: G11 },

      { hanzi: "開心", pinyin: "kāixīn", english: "happy", emoji: "😄", group: G12 },
      { hanzi: "唱歌", pinyin: "chànggē", english: "sing", emoji: "🎤", group: G12 },
      { hanzi: "跳舞", pinyin: "tiàowǔ", english: "dance", emoji: "💃", group: G12 },
      { hanzi: "拍手", pinyin: "pāishǒu", english: "clap hands", emoji: "👏", group: G12 },
      { hanzi: "一起玩", pinyin: "yìqǐ wán", english: "play together", emoji: "🧸", group: G12 },

      { hanzi: "再見", pinyin: "zàijiàn", english: "goodbye", emoji: "👋", group: G13 },
      { hanzi: "下次見", pinyin: "xiàcì jiàn", english: "see you next time", emoji: "📅", group: G13 }
    ],

    sentencePatterns: [
      { hanzi: "你好嗎？ ─ 我很好。", pinyin: "Nǐ hǎo ma? ─ Wǒ hěn hǎo.", english: "How are you? ─ I'm fine." },
      { hanzi: "謝謝。 ─ 不客氣。", pinyin: "Xièxie. ─ Bú kèqì.", english: "Thank you. ─ You're welcome." },
      { hanzi: "對不起。 ─ 沒關係。", pinyin: "Duìbuqǐ. ─ Méi guānxi.", english: "I'm sorry. ─ That's all right." },
      { hanzi: "請給我……。", pinyin: "Qǐng gěi wǒ ...", english: "Please give me ..." },
      { hanzi: "這是什麼？ ─ 這是……。", pinyin: "Zhè shì shénme? ─ Zhè shì ...", english: "What is this? ─ This is ..." },
      { hanzi: "好臭！", pinyin: "Hǎo chòu!", english: "So stinky!" },
      { hanzi: "再見！下次見！", pinyin: "Zàijiàn! Xiàcì jiàn!", english: "Goodbye! See you next time!" }
    ],

    dialogues: [
      {
        title: "你好！",
        titleEnglish: "Hello!",
        lines: [
          { speaker: "熊貓老師", hanzi: "歡迎！小朋友好！", pinyin: "Huānyíng! Xiǎopéngyǒu hǎo!", english: "Welcome! Hello, children!" },
          { speaker: "小朋友", hanzi: "老師好！", pinyin: "Lǎoshī hǎo!", english: "Hello, teacher!" },
          { speaker: "熊貓老師", hanzi: "你好嗎？", pinyin: "Nǐ hǎo ma?", english: "How are you?" },
          { speaker: "小朋友", hanzi: "我很好。", pinyin: "Wǒ hěn hǎo.", english: "I'm fine." }
        ]
      },
      {
        title: "謝謝你！",
        titleEnglish: "Thank you!",
        lines: [
          { speaker: "小朋友 A", hanzi: "請給我水。", pinyin: "Qǐng gěi wǒ shuǐ.", english: "Please give me water." },
          { speaker: "小朋友 B", hanzi: "給你。", pinyin: "Gěi nǐ.", english: "Here you are." },
          { speaker: "小朋友 A", hanzi: "謝謝。", pinyin: "Xièxie.", english: "Thank you." },
          { speaker: "小朋友 B", hanzi: "不客氣。", pinyin: "Bú kèqì.", english: "You're welcome." }
        ]
      },
      {
        title: "對不起！",
        titleEnglish: "I'm sorry!",
        lines: [
          { speaker: "小朋友 A", hanzi: "不好意思，對不起。", pinyin: "Bù hǎoyìsi, duìbuqǐ.", english: "Excuse me, I'm sorry." },
          { speaker: "小朋友 B", hanzi: "沒關係。", pinyin: "Méi guānxi.", english: "That's all right." }
        ]
      },
      {
        title: "好臭的臭鼬",
        titleEnglish: "The stinky skunk",
        lines: [
          { speaker: "小朋友 A", hanzi: "看！臭鼬！", pinyin: "Kàn! Chòuyòu!", english: "Look! A skunk!" },
          { speaker: "小朋友 B", hanzi: "好臭！我的鼻子。", pinyin: "Hǎo chòu! Wǒ de bízi.", english: "So stinky! My nose!" }
        ]
      },
      {
        title: "再見！",
        titleEnglish: "Goodbye!",
        lines: [
          { speaker: "熊貓老師", hanzi: "再見！下次見！", pinyin: "Zàijiàn! Xiàcì jiàn!", english: "Goodbye! See you next time!" },
          { speaker: "小朋友", hanzi: "老師再見！", pinyin: "Lǎoshī zàijiàn!", english: "Goodbye, teacher!" }
        ]
      }
    ],

    actions: [
      { hanzi: "拍手", pinyin: "pāishǒu", english: "clap your hands", emoji: "👏" },
      { hanzi: "跳", pinyin: "tiào", english: "jump", emoji: "🤸" },
      { hanzi: "踢", pinyin: "tī", english: "kick", emoji: "🦵" },
      { hanzi: "出拳", pinyin: "chū quán", english: "punch", emoji: "👊" },
      { hanzi: "摸鼻子", pinyin: "mō bízi", english: "touch your nose", emoji: "👃" },
      { hanzi: "摸耳朵", pinyin: "mō ěrduo", english: "touch your ears", emoji: "👂" }
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
      { hanzi: "口", pinyin: "kǒu", english: "mouth" },
      { hanzi: "耳", pinyin: "ěr", english: "ear" },
      { hanzi: "手", pinyin: "shǒu", english: "hand" },
      { hanzi: "目", pinyin: "mù", english: "eye" },
      { hanzi: "牛", pinyin: "niú", english: "cow" },
      { hanzi: "羊", pinyin: "yáng", english: "sheep" },
      { hanzi: "水", pinyin: "shuǐ", english: "water" },
      { hanzi: "魚", pinyin: "yú", english: "fish" }
    ],

    exercises: [
      {
        type: "match-emoji",
        title: "數一數：Match the Number",
        instructions: "Match each Chinese number to the correct emoji.",
        items: [
          { hanzi: "三", pinyin: "sān", emoji: "3️⃣" },
          { hanzi: "五", pinyin: "wǔ", emoji: "5️⃣" },
          { hanzi: "七", pinyin: "qī", emoji: "7️⃣" },
          { hanzi: "八", pinyin: "bā", emoji: "8️⃣" },
          { hanzi: "十", pinyin: "shí", emoji: "🔟" }
        ]
      },
      {
        type: "match-emoji",
        title: "身體配對：Match the Body Part",
        instructions: "Match each Chinese word to the correct picture.",
        items: [
          { hanzi: "眼睛", pinyin: "yǎnjing", emoji: "👀" },
          { hanzi: "耳朵", pinyin: "ěrduo", emoji: "👂" },
          { hanzi: "鼻子", pinyin: "bízi", emoji: "👃" },
          { hanzi: "嘴巴", pinyin: "zuǐba", emoji: "👄" },
          { hanzi: "手", pinyin: "shǒu", emoji: "✋" }
        ]
      },
      {
        type: "match-emoji",
        title: "動物配對：Match the Animal",
        instructions: "Match each Chinese animal word to the correct picture.",
        items: [
          { hanzi: "熊貓", pinyin: "xióngmāo", emoji: "🐼" },
          { hanzi: "老虎", pinyin: "lǎohǔ", emoji: "🐯" },
          { hanzi: "鴨子", pinyin: "yāzi", emoji: "🦆" },
          { hanzi: "臭鼬", pinyin: "chòuyòu", emoji: "🦨" },
          { hanzi: "羊", pinyin: "yáng", emoji: "🐑" },
          { hanzi: "豬", pinyin: "zhū", emoji: "🐷" }
        ]
      },
      {
        type: "listen-pick",
        title: "聽一聽：Listen and Pick the Number",
        instructions: "Tap ▶ Listen, then choose the number you hear.",
        items: [
          { say: "三", answer: 0, options: [{ emoji: "3️⃣" }, { emoji: "8️⃣" }] },
          { say: "六", answer: 1, options: [{ emoji: "9️⃣" }, { emoji: "6️⃣" }] },
          { say: "九", answer: 0, options: [{ emoji: "9️⃣" }, { emoji: "5️⃣" }] },
          { say: "十", answer: 1, options: [{ emoji: "4️⃣" }, { emoji: "🔟" }] }
        ]
      },
      {
        type: "listen-pick",
        title: "聽一聽：Listen and Pick the Animal",
        instructions: "Tap ▶ Listen, then choose the animal you hear.",
        items: [
          { say: "熊貓", answer: 0, options: [{ emoji: "🐼", label: "Panda" }, { emoji: "🐯", label: "Tiger" }] },
          { say: "鴨子", answer: 1, options: [{ emoji: "🐱", label: "Cat" }, { emoji: "🦆", label: "Duck" }] },
          { say: "臭鼬", answer: 0, options: [{ emoji: "🦨", label: "Skunk" }, { emoji: "🐷", label: "Pig" }] },
          { say: "老虎", answer: 1, options: [{ emoji: "🐑", label: "Sheep" }, { emoji: "🐯", label: "Tiger" }] }
        ]
      },
      {
        type: "fill-blank",
        title: "說說看：Polite Words",
        instructions: "Choose the right word to complete each sentence.",
        wordBank: ["謝謝", "不客氣", "對不起", "沒關係", "請", "再見"],
        items: [
          { before: "請給我水。　答：", after: "。", answer: "謝謝", pinyinHint: "Qǐng gěi wǒ shuǐ. ___." },
          { before: "謝謝你。　答：", after: "。", answer: "不客氣", pinyinHint: "Xièxie nǐ. ___." },
          { before: "", after: "，我踩到你了。", answer: "對不起", pinyinHint: "___, I stepped on you." },
          { before: "對不起。　答：", after: "。", answer: "沒關係", pinyinHint: "Duìbuqǐ. ___." },
          { before: "", after: "給我蘋果。", answer: "請", pinyinHint: "___ gěi wǒ píngguǒ." },
          { before: "下課了，老師", after: "！", answer: "再見", pinyinHint: "Class is over, teacher ___!" }
        ]
      },
      {
        type: "fill-blank",
        title: "填一填：Body Parts",
        instructions: "Choose the right body part for each sentence.",
        wordBank: ["眼睛", "耳朵", "鼻子", "嘴巴"],
        items: [
          { before: "我用", after: "看。", answer: "眼睛", pinyinHint: "I see with my ___." },
          { before: "我用", after: "聽。", answer: "耳朵", pinyinHint: "I hear with my ___." },
          { before: "我用", after: "聞。", answer: "鼻子", pinyinHint: "I smell with my ___." },
          { before: "我用", after: "吃東西。", answer: "嘴巴", pinyinHint: "I eat with my ___." }
        ]
      },
      {
        type: "read-aloud",
        title: "念一念：Say It Out Loud",
        instructions: "Tap each phrase and say it out loud.",
        items: ["歡迎", "你好嗎", "我很好", "謝謝", "不客氣", "對不起", "沒關係", "請給我水", "好臭", "加油", "再見", "下次見"]
      }
    ],

    culture: {
      title: "About this unit 關於這個單元",
      englishText: "This entry follows the 13 topics of the 'Let's Learn Mandarin Chinese with Miss Panda' series — Welcome, Hello, Numbers 1-10, Stinky Skunk, Thank You and You're Welcome, Excuse Me and That's All Right, Little Duckling, Please Give Me, Eyes Ears Nose and Mouth, Kung Fu, Animals, Happy Time, and Goodbye. The words, dialogues and games are our own, written to match each topic, so they won't be word-for-word what the songs say. Listen to the series on Spotify alongside these lessons, then use the Writing tab to practice numbers and body-part characters."
    }
  });
})();
