// Colours & Shapes: the colours, flat shapes (drawn on the card) and solid
// "physical" shapes (a real object stands in for each, like a ball or a dice).
// Every card has a 🔊 for the word and a 🎧 "Tell me" button that plays a short
// description in Chinese and then in English, so pre-readers understand it.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

(function () {
  var G_C = "🎨 Colours (顏色)";
  var G_S = "🔷 Flat shapes (形狀)";
  var G_P = "🧊 Solid shapes you can hold (立體形狀)";

  // Simple drawn shapes for the flat-shape cards.
  var FILL = "#4a90d9";
  function svg(inner) {
    return '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="' + FILL + '" stroke="#2b5d96" stroke-width="3" stroke-linejoin="round">' + inner + "</g></svg>";
  }
  var SHAPES = {
    circle: svg('<circle cx="50" cy="50" r="40"/>'),
    square: svg('<rect x="15" y="15" width="70" height="70"/>'),
    triangle: svg('<polygon points="50,10 90,85 10,85"/>'),
    rectangle: svg('<rect x="6" y="28" width="88" height="44"/>'),
    oval: svg('<ellipse cx="50" cy="50" rx="44" ry="28"/>'),
    star: svg('<polygon points="50,8 61,38 93,38 67,57 77,90 50,70 23,90 33,57 7,38 39,38"/>'),
    heart: svg('<path d="M50 88 C10 55 8 22 30 18 C42 16 50 26 50 32 C50 26 58 16 70 18 C92 22 90 55 50 88Z"/>'),
    diamond: svg('<polygon points="50,6 90,50 50,94 10,50"/>')
  };

  window.MANDARIN_LESSONS.push({
    id: "colours-shapes",
    category: true,
    icon: "🎨",
    bookTitle: "Colours & Shapes",
    title: "顏色和形狀",
    titlePinyin: "Yánsè hé xíngzhuàng",
    titleEnglish: "Colours & Shapes",
    dateAdded: "2026-10-18",

    vocabulary: [
      // ---- Colours ----
      { hanzi: "紅色", pinyin: "hóngsè", english: "red", swatch: "#e53935", emoji: "🔴", group: G_C,
        describe: { zh: "蘋果是紅色的。", en: "An apple is red." } },
      { hanzi: "橘色", pinyin: "júsè", english: "orange", swatch: "#fb8c00", emoji: "🟠", group: G_C,
        describe: { zh: "橘子是橘色的。", en: "An orange is orange." } },
      { hanzi: "黃色", pinyin: "huángsè", english: "yellow", swatch: "#fdd835", emoji: "🟡", group: G_C,
        describe: { zh: "香蕉是黃色的。", en: "A banana is yellow." } },
      { hanzi: "綠色", pinyin: "lǜsè", english: "green", swatch: "#43a047", emoji: "🟢", group: G_C,
        describe: { zh: "青蛙是綠色的。", en: "A frog is green." } },
      { hanzi: "藍色", pinyin: "lánsè", english: "blue", swatch: "#1e88e5", emoji: "🔵", group: G_C,
        describe: { zh: "天空是藍色的。", en: "The sky is blue." } },
      { hanzi: "紫色", pinyin: "zǐsè", english: "purple", swatch: "#8e24aa", emoji: "🟣", group: G_C,
        describe: { zh: "葡萄是紫色的。", en: "Grapes are purple." } },
      { hanzi: "粉紅色", pinyin: "fěnhóngsè", english: "pink", swatch: "#f48fb1", emoji: "🩷", group: G_C,
        describe: { zh: "小豬是粉紅色的。", en: "A little pig is pink." } },
      { hanzi: "咖啡色", pinyin: "kāfēisè", english: "brown", swatch: "#795548", emoji: "🟤", group: G_C,
        describe: { zh: "巧克力是咖啡色的。", en: "Chocolate is brown." } },
      { hanzi: "黑色", pinyin: "hēisè", english: "black", swatch: "#212121", emoji: "⚫", group: G_C,
        describe: { zh: "晚上的天空是黑色的。", en: "The sky at night is black." } },
      { hanzi: "白色", pinyin: "báisè", english: "white", swatch: "#ffffff", emoji: "⚪", group: G_C,
        describe: { zh: "雲是白色的。", en: "Clouds are white." } },
      { hanzi: "灰色", pinyin: "huīsè", english: "gray", swatch: "#9e9e9e", emoji: "🩶", group: G_C,
        describe: { zh: "大象是灰色的。", en: "An elephant is gray." } },

      // ---- Flat shapes ----
      { hanzi: "圓形", pinyin: "yuánxíng", english: "circle", svg: SHAPES.circle, emoji: "⭕", group: G_S,
        describe: { zh: "圓形是圓圓的，沒有角。", en: "A circle is round and has no corners." } },
      { hanzi: "正方形", pinyin: "zhèngfāngxíng", english: "square", svg: SHAPES.square, emoji: "🟦", group: G_S,
        describe: { zh: "正方形有四個邊，每個邊一樣長。", en: "A square has four sides, and every side is the same length." } },
      { hanzi: "三角形", pinyin: "sānjiǎoxíng", english: "triangle", svg: SHAPES.triangle, emoji: "🔺", group: G_S,
        describe: { zh: "三角形有三個邊，三個角。", en: "A triangle has three sides and three corners." } },
      { hanzi: "長方形", pinyin: "chángfāngxíng", english: "rectangle", svg: SHAPES.rectangle, emoji: "🚪", group: G_S,
        describe: { zh: "長方形有四個角，兩個邊長，兩個邊短。", en: "A rectangle has four corners, two long sides and two short sides." } },
      { hanzi: "橢圓形", pinyin: "tuǒyuánxíng", english: "oval", svg: SHAPES.oval, emoji: "🥚", group: G_S,
        describe: { zh: "橢圓形像一顆蛋。", en: "An oval looks like an egg." } },
      { hanzi: "星形", pinyin: "xīngxíng", english: "star", svg: SHAPES.star, emoji: "⭐", group: G_S,
        describe: { zh: "星形有五個尖尖的角。", en: "A star has five pointy tips." } },
      { hanzi: "愛心", pinyin: "àixīn", english: "heart", svg: SHAPES.heart, emoji: "❤️", group: G_S,
        describe: { zh: "愛心表示我愛你。", en: "A heart means I love you." } },
      { hanzi: "菱形", pinyin: "língxíng", english: "diamond", svg: SHAPES.diamond, emoji: "🔶", group: G_S,
        describe: { zh: "菱形像一個站起來的正方形。", en: "A diamond looks like a square standing on its corner." } },

      // ---- Solid shapes (a real object stands in for each) ----
      { hanzi: "球體", pinyin: "qiútǐ", english: "sphere, like a ball", emoji: "⚽", group: G_P,
        describe: { zh: "球是圓圓的，可以滾。", en: "A ball is round and it can roll." } },
      { hanzi: "正方體", pinyin: "zhèngfāngtǐ", english: "cube, like a dice", emoji: "🎲", group: G_P,
        describe: { zh: "骰子是正方體，有六個一樣大的面。", en: "A dice is a cube. It has six faces that are the same size." } },
      { hanzi: "長方體", pinyin: "chángfāngtǐ", english: "box shape, like a gift box", emoji: "📦", group: G_P,
        describe: { zh: "盒子是長方體，可以裝東西。", en: "A box is a box shape, and you can put things in it." } },
      { hanzi: "圓柱", pinyin: "yuánzhù", english: "cylinder, like a can", emoji: "🥫", group: G_P,
        describe: { zh: "罐頭是圓柱，可以站起來，也可以滾。", en: "A can is a cylinder. It can stand up, and it can roll too." } },
      { hanzi: "圓錐", pinyin: "yuánzhuī", english: "cone, like an ice cream cone", emoji: "🍦", group: G_P,
        describe: { zh: "冰淇淋的甜筒是圓錐，上面大，下面尖。", en: "An ice cream cone is a cone. It is wide on top and pointy at the bottom." } }
    ],

    sentencePatterns: [
      { hanzi: "這是什麼顏色？", pinyin: "Zhè shì shénme yánsè?", english: "What colour is this?" },
      { hanzi: "這是紅色。", pinyin: "Zhè shì hóngsè.", english: "This is red." },
      { hanzi: "這是什麼形狀？", pinyin: "Zhè shì shénme xíngzhuàng?", english: "What shape is this?" },
      { hanzi: "這是圓形。", pinyin: "Zhè shì yuánxíng.", english: "This is a circle." },
      { hanzi: "我喜歡藍色。", pinyin: "Wǒ xǐhuān lánsè.", english: "I like blue." },
      { hanzi: "球是圓的。", pinyin: "Qiú shì yuán de.", english: "A ball is round." }
    ],

    dialogues: [
      {
        title: "這是什麼顏色？",
        titleEnglish: "What colour is this?",
        lines: [
          { speaker: "小朋友 A", hanzi: "這是什麼顏色？", pinyin: "Zhè shì shénme yánsè?", english: "What colour is this?" },
          { speaker: "小朋友 B", hanzi: "這是黃色。", pinyin: "Zhè shì huángsè.", english: "This is yellow." },
          { speaker: "小朋友 A", hanzi: "你喜歡黃色嗎？", pinyin: "Nǐ xǐhuān huángsè ma?", english: "Do you like yellow?" },
          { speaker: "小朋友 B", hanzi: "我喜歡黃色。", pinyin: "Wǒ xǐhuān huángsè.", english: "I like yellow." }
        ]
      },
      {
        title: "這是什麼形狀？",
        titleEnglish: "What shape is this?",
        lines: [
          { speaker: "老師", hanzi: "這是什麼形狀？", pinyin: "Zhè shì shénme xíngzhuàng?", english: "What shape is this?" },
          { speaker: "小朋友", hanzi: "這是三角形。", pinyin: "Zhè shì sānjiǎoxíng.", english: "This is a triangle." },
          { speaker: "老師", hanzi: "對了！三角形有三個角。", pinyin: "Duì le! Sānjiǎoxíng yǒu sān ge jiǎo.", english: "That's right! A triangle has three corners." }
        ]
      }
    ],

    actions: [
      { hanzi: "找一找紅色的東西", pinyin: "zhǎo yi zhǎo hóngsè de dōngxi", english: "find something red", emoji: "🔍" },
      { hanzi: "指一指圓形", pinyin: "zhǐ yi zhǐ yuánxíng", english: "point to the circle", emoji: "👉" },
      { hanzi: "拿一個球", pinyin: "ná yí ge qiú", english: "pick up a ball", emoji: "⚽" },
      { hanzi: "畫一個三角形", pinyin: "huà yí ge sānjiǎoxíng", english: "draw a triangle", emoji: "✏️" },
      { hanzi: "摸一摸盒子", pinyin: "mō yi mō hézi", english: "touch the box", emoji: "📦" },
      { hanzi: "說說看，這是什麼顏色", pinyin: "shuō shuo kàn, zhè shì shénme yánsè", english: "tell me, what colour is this?", emoji: "🗣️" }
    ],

    writingPractice: [
      { hanzi: "色", pinyin: "sè", english: "colour" },
      { hanzi: "紅", pinyin: "hóng", english: "red" },
      { hanzi: "黃", pinyin: "huáng", english: "yellow" },
      { hanzi: "綠", pinyin: "lǜ", english: "green" },
      { hanzi: "藍", pinyin: "lán", english: "blue" },
      { hanzi: "白", pinyin: "bái", english: "white" },
      { hanzi: "黑", pinyin: "hēi", english: "black" },
      { hanzi: "方", pinyin: "fāng", english: "square" },
      { hanzi: "圓", pinyin: "yuán", english: "round" }
    ],

    exercises: [
      {
        type: "match-emoji",
        title: "顏色配對：Match the Colour",
        instructions: "Tap the word to hear it, then match it to the right colour.",
        items: [
          { hanzi: "紅色", pinyin: "hóngsè", emoji: "🔴" },
          { hanzi: "橘色", pinyin: "júsè", emoji: "🟠" },
          { hanzi: "黃色", pinyin: "huángsè", emoji: "🟡" },
          { hanzi: "綠色", pinyin: "lǜsè", emoji: "🟢" },
          { hanzi: "藍色", pinyin: "lánsè", emoji: "🔵" },
          { hanzi: "紫色", pinyin: "zǐsè", emoji: "🟣" },
          { hanzi: "咖啡色", pinyin: "kāfēisè", emoji: "🟤" },
          { hanzi: "黑色", pinyin: "hēisè", emoji: "⚫" }
        ]
      },
      {
        type: "match-emoji",
        title: "形狀配對：Match the Shape",
        instructions: "Match each shape word to something with that shape.",
        items: [
          { hanzi: "圓形", pinyin: "yuánxíng", emoji: "⭕" },
          { hanzi: "三角形", pinyin: "sānjiǎoxíng", emoji: "🔺" },
          { hanzi: "正方形", pinyin: "zhèngfāngxíng", emoji: "🟦" },
          { hanzi: "長方形", pinyin: "chángfāngxíng", emoji: "🚪" },
          { hanzi: "橢圓形", pinyin: "tuǒyuánxíng", emoji: "🥚" },
          { hanzi: "星形", pinyin: "xīngxíng", emoji: "⭐" },
          { hanzi: "愛心", pinyin: "àixīn", emoji: "❤️" },
          { hanzi: "菱形", pinyin: "língxíng", emoji: "🔶" }
        ]
      },
      {
        type: "match-emoji",
        title: "立體形狀配對：Match the Solid Shape",
        instructions: "Match each solid shape to the real thing.",
        items: [
          { hanzi: "球體", pinyin: "qiútǐ", emoji: "⚽" },
          { hanzi: "正方體", pinyin: "zhèngfāngtǐ", emoji: "🎲" },
          { hanzi: "長方體", pinyin: "chángfāngtǐ", emoji: "📦" },
          { hanzi: "圓柱", pinyin: "yuánzhù", emoji: "🥫" },
          { hanzi: "圓錐", pinyin: "yuánzhuī", emoji: "🍦" }
        ]
      },
      {
        type: "listen-pick",
        title: "聽一聽：Which Colour?",
        instructions: "Tap ▶ Listen, then tap the colour you hear.",
        items: [
          { say: "紅色", answer: 0, options: [{ emoji: "🔴" }, { emoji: "🔵" }] },
          { say: "黃色", answer: 1, options: [{ emoji: "🟢" }, { emoji: "🟡" }] },
          { say: "綠色", answer: 0, options: [{ emoji: "🟢" }, { emoji: "🟣" }] },
          { say: "藍色", answer: 1, options: [{ emoji: "🟠" }, { emoji: "🔵" }] },
          { say: "紫色", answer: 0, options: [{ emoji: "🟣" }, { emoji: "🟤" }] },
          { say: "黑色", answer: 1, options: [{ emoji: "⚪" }, { emoji: "⚫" }] }
        ]
      },
      {
        type: "listen-pick",
        title: "聽一聽：Which Shape?",
        instructions: "Tap ▶ Listen, then tap the shape you hear.",
        items: [
          { say: "圓形", answer: 0, options: [{ emoji: "⭕" }, { emoji: "🔺" }] },
          { say: "三角形", answer: 1, options: [{ emoji: "🟦" }, { emoji: "🔺" }] },
          { say: "星形", answer: 0, options: [{ emoji: "⭐" }, { emoji: "❤️" }] },
          { say: "愛心", answer: 1, options: [{ emoji: "🔶" }, { emoji: "❤️" }] },
          { say: "正方形", answer: 0, options: [{ emoji: "🟦" }, { emoji: "🥚" }] },
          { say: "球體", answer: 1, options: [{ emoji: "🎲" }, { emoji: "⚽" }] }
        ]
      },
      {
        type: "listen-pick",
        title: "聽一聽：Listen to the Clue",
        instructions: "Tap ▶ Listen to the clue, then tap what it is about.",
        items: [
          { say: "香蕉是黃色的。", answer: 0, options: [{ emoji: "🍌" }, { emoji: "🍎" }] },
          { say: "青蛙是綠色的。", answer: 1, options: [{ emoji: "🐘" }, { emoji: "🐸" }] },
          { say: "球是圓圓的，可以滾。", answer: 0, options: [{ emoji: "⚽" }, { emoji: "📦" }] },
          { say: "三角形有三個邊，三個角。", answer: 1, options: [{ emoji: "🟦" }, { emoji: "🔺" }] },
          { say: "骰子是正方體，有六個一樣大的面。", answer: 0, options: [{ emoji: "🎲" }, { emoji: "🥫" }] },
          { say: "冰淇淋的甜筒是圓錐，上面大，下面尖。", answer: 1, options: [{ emoji: "🥫" }, { emoji: "🍦" }] }
        ]
      },
      {
        type: "fill-blank",
        title: "填一填：Fill in the Colour",
        instructions: "Choose the right colour word for each sentence.",
        wordBank: ["紅色", "黃色", "綠色", "藍色", "紫色", "白色"],
        items: [
          { before: "蘋果是", after: "的。", answer: "紅色", pinyinHint: "An apple is ___." },
          { before: "香蕉是", after: "的。", answer: "黃色", pinyinHint: "A banana is ___." },
          { before: "青蛙是", after: "的。", answer: "綠色", pinyinHint: "A frog is ___." },
          { before: "天空是", after: "的。", answer: "藍色", pinyinHint: "The sky is ___." },
          { before: "葡萄是", after: "的。", answer: "紫色", pinyinHint: "Grapes are ___." },
          { before: "雲是", after: "的。", answer: "白色", pinyinHint: "Clouds are ___." }
        ]
      },
      {
        type: "fill-blank",
        title: "填一填：Fill in the Shape",
        instructions: "Choose the right shape word for each clue.",
        wordBank: ["圓形", "三角形", "正方形", "星形", "愛心", "球體"],
        items: [
          { before: "圓圓的，沒有角：", after: "", answer: "圓形", pinyinHint: "round, no corners" },
          { before: "三個邊，三個角：", after: "", answer: "三角形", pinyinHint: "three sides, three corners" },
          { before: "四個邊一樣長：", after: "", answer: "正方形", pinyinHint: "four equal sides" },
          { before: "有五個尖尖的角：", after: "", answer: "星形", pinyinHint: "five pointy tips" },
          { before: "表示我愛你：", after: "", answer: "愛心", pinyinHint: "means I love you" },
          { before: "會滾的球：", after: "", answer: "球體", pinyinHint: "a ball that rolls" }
        ]
      },
      {
        type: "read-aloud",
        title: "念一念：Say It Out Loud",
        instructions: "Tap each one, say it out loud, then listen to check.",
        items: ["紅色", "黃色", "綠色", "藍色", "圓形", "三角形", "正方形", "這是什麼顏色？", "這是什麼形狀？", "我喜歡藍色。", "球是圓的。"]
      }
    ],

    culture: {
      title: "Colours and shapes all around 身邊的顏色和形狀",
      englishText: "Colours and shapes are everywhere: a red apple, a round ball, a triangle roof. On each card, tap 🔊 to hear the word, and tap 🎧 \"Tell me\" to hear a short description in Chinese and then in English — you don't need to read. The solid shapes (ball, dice, box, can, ice cream cone) are real things you can pick up, so try finding them at home! In Chinese, colour words usually end in 色 (sè), which means colour, and shape words usually end in 形 (xíng), which means shape."
    }
  });
})();
