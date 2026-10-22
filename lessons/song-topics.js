// Song Topics — vocabulary and phrases for the TOPICS of the songs in the
// Watch & Learn videos (a bus ride, counting, colours, round things, and stars
// at night). Everything here — words, sentences, dialogues, games — is original
// teaching material written for these topics; it does not reproduce any song's
// lyrics. Watch a video on the Practice tab, then learn the words behind it.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

(function () {
  var G_BUS = "🚌 The Bus Ride";
  var G_NUM = "🔢 Counting Things";
  var G_COL = "🌈 Colours Around Us";
  var G_RND = "⭕ Round Things";
  var G_NIT = "🌙 Stars & the Night Sky";

  // [hanzi, pinyin, english, emoji, group, Chinese description, English description]
  var ROWS = [
    // ---- The bus ride ----
    ["巴士", "bāshì", "bus", "🚌", G_BUS, "巴士很大，可以載很多人。", "A bus is big and can carry many people."],
    ["司機", "sījī", "driver", "🧑‍✈️", G_BUS, "司機開巴士。", "The driver drives the bus."],
    ["輪子", "lúnzi", "wheel", "🛞", G_BUS, "輪子是圓的，會轉。", "A wheel is round and it turns."],
    ["車門", "chēmén", "bus door", "🚪", G_BUS, "車門打開了，我們上車。", "The door opens and we get on."],
    ["窗戶", "chuānghu", "window", "🪟", G_BUS, "我從窗戶看外面。", "I look outside through the window."],
    ["喇叭", "lǎba", "horn", "📯", G_BUS, "司機按喇叭，嗶嗶！", "The driver presses the horn. Beep beep!"],
    ["座位", "zuòwèi", "seat", "💺", G_BUS, "我坐在座位上。", "I sit on a seat."],
    ["上車", "shàngchē", "get on the bus", "⬆️", G_BUS, "小朋友排隊上車。", "The children line up to get on."],
    ["下車", "xiàchē", "get off the bus", "⬇️", G_BUS, "到學校了，我們下車。", "We arrived at school, so we get off."],

    // ---- Counting things (number + measure word + thing) ----
    ["一個蘋果", "yí ge píngguǒ", "one apple", "🍎", G_NUM, "我有一個蘋果。", "I have one apple."],
    ["兩隻貓", "liǎng zhī māo", "two cats", "🐱", G_NUM, "那裡有兩隻貓。", "There are two cats over there."],
    ["三顆星星", "sān kē xīngxing", "three stars", "⭐", G_NUM, "天上有三顆星星。", "There are three stars in the sky."],
    ["四輛巴士", "sì liàng bāshì", "four buses", "🚌", G_NUM, "路上有四輛巴士。", "There are four buses on the road."],
    ["五朵花", "wǔ duǒ huā", "five flowers", "🌸", G_NUM, "花園裡有五朵花。", "There are five flowers in the garden."],
    ["六隻鳥", "liù zhī niǎo", "six birds", "🐦", G_NUM, "樹上有六隻鳥。", "There are six birds in the tree."],
    ["七個球", "qī ge qiú", "seven balls", "⚽", G_NUM, "我有七個球。", "I have seven balls."],
    ["八條魚", "bā tiáo yú", "eight fish", "🐟", G_NUM, "水裡有八條魚。", "There are eight fish in the water."],
    ["九本書", "jiǔ běn shū", "nine books", "📚", G_NUM, "桌上有九本書。", "There are nine books on the table."],
    ["十根手指", "shí gēn shǒuzhǐ", "ten fingers", "🖐️", G_NUM, "我有十根手指。", "I have ten fingers."],

    // ---- Colours around us ----
    ["彩虹", "cǎihóng", "rainbow", "🌈", G_COL, "彩虹有很多顏色：紅、橘、黃、綠、藍、紫。", "A rainbow has many colours: red, orange, yellow, green, blue and purple."],
    ["紅色的花", "hóngsè de huā", "red flower", "🌹", G_COL, "這朵花是紅色的。", "This flower is red."],
    ["黃色的星星", "huángsè de xīngxing", "yellow star", "🌟", G_COL, "黃色的星星很亮。", "The yellow star is bright."],
    ["綠色的樹", "lǜsè de shù", "green tree", "🌳", G_COL, "樹葉是綠色的。", "The leaves are green."],
    ["藍色的海", "lánsè de hǎi", "blue sea", "🌊", G_COL, "海是藍色的。", "The sea is blue."],
    ["紫色的葡萄", "zǐsè de pútáo", "purple grapes", "🍇", G_COL, "葡萄是紫色的，很好吃。", "Grapes are purple and tasty."],

    // ---- Round things ----
    ["圓圓的", "yuányuán de", "nice and round", "⭕", G_RND, "圓圓的東西沒有角。", "Round things have no corners."],
    ["太陽", "tàiyáng", "sun", "☀️", G_RND, "太陽圓圓的，很熱。", "The sun is round and hot."],
    ["餅乾", "bǐnggān", "cookie", "🍪", G_RND, "這塊餅乾是圓形的。", "This cookie is round."],
    ["時鐘", "shízhōng", "clock", "🕐", G_RND, "時鐘是圓的，可以看時間。", "A clock is round, and it tells the time."],
    ["硬幣", "yìngbì", "coin", "🪙", G_RND, "硬幣是小小的圓形。", "A coin is a small circle."],

    // ---- Stars and the night sky ----
    ["星星", "xīngxing", "star", "⭐", G_NIT, "星星在天上。", "Stars are up in the sky."],
    ["月亮", "yuèliang", "moon", "🌙", G_NIT, "晚上可以看到月亮。", "You can see the moon at night."],
    ["天空", "tiānkōng", "sky", "🌌", G_NIT, "晚上的天空很黑。", "The sky at night is very dark."],
    ["晚上", "wǎnshang", "night, evening", "🌃", G_NIT, "晚上我們要睡覺。", "At night we go to sleep."],
    ["閃閃發亮", "shǎnshǎn fāliàng", "twinkling, sparkling", "✨", G_NIT, "星星閃閃發亮。", "The stars twinkle and shine."],
    ["高高的", "gāogāo de", "high up", "⬆️", G_NIT, "星星在高高的天上。", "The stars are high up in the sky."],
    ["唱歌", "chànggē", "to sing", "🎤", G_NIT, "我們一起唱歌吧！", "Let's sing together!"],
    ["晚安", "wǎn'ān", "good night", "😴", G_NIT, "睡覺前，我說晚安。", "Before sleeping, I say good night."]
  ];

  var vocabulary = ROWS.map(function (r) {
    return { hanzi: r[0], pinyin: r[1], english: r[2], emoji: r[3], group: r[4], describe: { zh: r[5], en: r[6] } };
  });

  window.MANDARIN_LESSONS.push({
    id: "song-topics",
    category: true,
    icon: "🎶",
    bookTitle: "Song Topics",
    title: "歌曲主題",
    titlePinyin: "Gēqǔ zhǔtí",
    titleEnglish: "Song Topics: words behind the songs",
    dateAdded: "2026-10-22",

    vocabulary: vocabulary,

    sentencePatterns: [
      { hanzi: "巴士是紅色的。", pinyin: "Bāshì shì hóngsè de.", english: "The bus is red." },
      { hanzi: "巴士有四個輪子。", pinyin: "Bāshì yǒu sì ge lúnzi.", english: "A bus has four wheels." },
      { hanzi: "我有三顆星星。", pinyin: "Wǒ yǒu sān kē xīngxing.", english: "I have three stars." },
      { hanzi: "太陽圓圓的。", pinyin: "Tàiyáng yuányuán de.", english: "The sun is round." },
      { hanzi: "晚上的天空有月亮和星星。", pinyin: "Wǎnshang de tiānkōng yǒu yuèliang hé xīngxing.", english: "The night sky has the moon and stars." },
      { hanzi: "我們一起唱歌吧！", pinyin: "Wǒmen yìqǐ chànggē ba!", english: "Let's sing together!" }
    ],

    dialogues: [
      {
        title: "坐巴士",
        titleEnglish: "Taking the bus",
        lines: [
          { speaker: "老師", hanzi: "小朋友，巴士來了！", pinyin: "Xiǎopéngyǒu, bāshì lái le!", english: "Children, the bus is here!" },
          { speaker: "小朋友", hanzi: "我們上車吧！", pinyin: "Wǒmen shàngchē ba!", english: "Let's get on!" },
          { speaker: "老師", hanzi: "請坐在座位上。", pinyin: "Qǐng zuò zài zuòwèi shàng.", english: "Please sit on a seat." },
          { speaker: "小朋友", hanzi: "司機再見，我們下車了。", pinyin: "Sījī zàijiàn, wǒmen xiàchē le.", english: "Goodbye, driver, we are getting off." }
        ]
      },
      {
        title: "數一數",
        titleEnglish: "Let's count",
        lines: [
          { speaker: "小朋友 A", hanzi: "你有幾個球？", pinyin: "Nǐ yǒu jǐ ge qiú?", english: "How many balls do you have?" },
          { speaker: "小朋友 B", hanzi: "我有七個球。", pinyin: "Wǒ yǒu qī ge qiú.", english: "I have seven balls." },
          { speaker: "小朋友 A", hanzi: "哇，好多！", pinyin: "Wa, hǎo duō!", english: "Wow, so many!" }
        ]
      },
      {
        title: "看星星",
        titleEnglish: "Looking at the stars",
        lines: [
          { speaker: "小朋友 A", hanzi: "你看，天空有什麼？", pinyin: "Nǐ kàn, tiānkōng yǒu shénme?", english: "Look, what is in the sky?" },
          { speaker: "小朋友 B", hanzi: "有月亮，也有星星。", pinyin: "Yǒu yuèliang, yě yǒu xīngxing.", english: "There is a moon, and also stars." },
          { speaker: "小朋友 A", hanzi: "星星閃閃發亮！", pinyin: "Xīngxing shǎnshǎn fāliàng!", english: "The stars are twinkling!" }
        ]
      }
    ],

    actions: [
      { hanzi: "上車", pinyin: "shàngchē", english: "get on the bus", emoji: "🚌" },
      { hanzi: "下車", pinyin: "xiàchē", english: "get off the bus", emoji: "🚏" },
      { hanzi: "數一數", pinyin: "shǔ yi shǔ", english: "count them", emoji: "🔢" },
      { hanzi: "指一指月亮", pinyin: "zhǐ yi zhǐ yuèliang", english: "point to the moon", emoji: "🌙" },
      { hanzi: "拍拍手", pinyin: "pāi pai shǒu", english: "clap your hands", emoji: "👏" },
      { hanzi: "唱歌", pinyin: "chànggē", english: "sing", emoji: "🎤" }
    ],

    writingPractice: [
      { hanzi: "星", pinyin: "xīng", english: "star" },
      { hanzi: "月", pinyin: "yuè", english: "moon" },
      { hanzi: "日", pinyin: "rì", english: "sun, day" },
      { hanzi: "天", pinyin: "tiān", english: "sky, day" },
      { hanzi: "小", pinyin: "xiǎo", english: "small" },
      { hanzi: "高", pinyin: "gāo", english: "high, tall" },
      { hanzi: "車", pinyin: "chē", english: "vehicle" },
      { hanzi: "門", pinyin: "mén", english: "door" }
    ],

    videos: [
      { title: "五顏六色的巴士 (Colourful Bus Song — Pinkfong)", youtubeId: "9nqIOvWuG0M" },
      { title: "巧虎數字歌 1-10 (Numbers Song)", youtubeId: "b-bXtLP0iBE" },
      { title: "Colors Song 顏色歌 (Little Fox Chinese)", youtubeId: "UulTlStNp5k" },
      { title: "巧虎聰明小學堂：圓形 (Learn the Circle)", youtubeId: "Vjedvs5GOko" },
      { title: "一閃一閃亮晶晶 (Twinkle Twinkle Little Star — Galaxy Kids Chinese)", youtubeId: "UiS46gi8sho" }
    ],

    exercises: [
      {
        type: "match-emoji",
        title: "巴士配對：Match the Bus Words",
        instructions: "Tap the word to hear it, then match it to the right picture.",
        items: [
          { hanzi: "巴士", pinyin: "bāshì", emoji: "🚌" },
          { hanzi: "輪子", pinyin: "lúnzi", emoji: "🛞" },
          { hanzi: "車門", pinyin: "chēmén", emoji: "🚪" },
          { hanzi: "窗戶", pinyin: "chuānghu", emoji: "🪟" },
          { hanzi: "座位", pinyin: "zuòwèi", emoji: "💺" },
          { hanzi: "喇叭", pinyin: "lǎba", emoji: "📯" }
        ]
      },
      {
        type: "match-emoji",
        title: "夜空配對：Match the Night Sky",
        instructions: "Match each word to the right picture.",
        items: [
          { hanzi: "星星", pinyin: "xīngxing", emoji: "⭐" },
          { hanzi: "月亮", pinyin: "yuèliang", emoji: "🌙" },
          { hanzi: "太陽", pinyin: "tàiyáng", emoji: "☀️" },
          { hanzi: "天空", pinyin: "tiānkōng", emoji: "🌌" },
          { hanzi: "彩虹", pinyin: "cǎihóng", emoji: "🌈" }
        ]
      },
      {
        type: "listen-pick",
        title: "聽一聽：How Many?",
        instructions: "Tap ▶ Listen, then tap the picture with the right number.",
        items: [
          { say: "三顆星星", answer: 0, options: [{ emoji: "⭐⭐⭐" }, { emoji: "⭐⭐⭐⭐⭐" }] },
          { say: "兩隻貓", answer: 1, options: [{ emoji: "🐱🐱🐱" }, { emoji: "🐱🐱" }] },
          { say: "五朵花", answer: 0, options: [{ emoji: "🌸🌸🌸🌸🌸" }, { emoji: "🌸🌸" }] },
          { say: "四輛巴士", answer: 1, options: [{ emoji: "🚌🚌" }, { emoji: "🚌🚌🚌🚌" }] },
          { say: "六隻鳥", answer: 0, options: [{ emoji: "🐦🐦🐦🐦🐦🐦" }, { emoji: "🐦🐦🐦" }] }
        ]
      },
      {
        type: "listen-pick",
        title: "聽一聽：Listen to the Clue",
        instructions: "Tap ▶ Listen to the clue, then tap what it is about.",
        items: [
          { say: "巴士有四個輪子。", answer: 0, options: [{ emoji: "🚌" }, { emoji: "✈️" }] },
          { say: "晚上的天空有月亮和星星。", answer: 1, options: [{ emoji: "☀️" }, { emoji: "🌌" }] },
          { say: "太陽圓圓的，很熱。", answer: 0, options: [{ emoji: "☀️" }, { emoji: "🧊" }] },
          { say: "海是藍色的。", answer: 1, options: [{ emoji: "🌳" }, { emoji: "🌊" }] },
          { say: "司機開巴士。", answer: 0, options: [{ emoji: "🧑‍✈️" }, { emoji: "🐶" }] },
          { say: "葡萄是紫色的，很好吃。", answer: 1, options: [{ emoji: "🍌" }, { emoji: "🍇" }] }
        ]
      },
      {
        type: "fill-blank",
        title: "填一填：Fill in the Word",
        instructions: "Choose the right word to finish each sentence.",
        wordBank: ["輪子", "司機", "星星", "太陽", "巴士", "座位"],
        items: [
          { before: "巴士有四個", after: "。", say: "巴士有四個輪子。", answer: "輪子", pinyinHint: "A bus has four ___." },
          { before: "", after: "開巴士。", say: "司機開巴士。", answer: "司機", pinyinHint: "The ___ drives the bus." },
          { before: "晚上的天空有月亮和", after: "。", say: "晚上的天空有月亮和星星。", answer: "星星", pinyinHint: "The night sky has the moon and ___." },
          { before: "", after: "圓圓的，很熱。", say: "太陽圓圓的，很熱。", answer: "太陽", pinyinHint: "The ___ is round and hot." },
          { before: "我們坐", after: "去學校。", say: "我們坐巴士去學校。", answer: "巴士", pinyinHint: "We ride the ___ to school." },
          { before: "我坐在", after: "上。", say: "我坐在座位上。", answer: "座位", pinyinHint: "I sit on a ___." }
        ]
      },
      {
        type: "read-aloud",
        title: "念一念：Say It Out Loud",
        instructions: "Tap each one, say it out loud, then listen to check.",
        items: ["巴士", "輪子", "三顆星星", "七個球", "彩虹", "太陽圓圓的。", "星星閃閃發亮。", "我們一起唱歌吧！", "晚安"]
      }
    ],

    culture: {
      title: "Words behind the songs 歌曲裡的詞",
      englishText: "Songs are a wonderful way to learn Mandarin, and each one is about an everyday topic: riding a bus, counting, colours, round shapes, and stars at night. This chapter teaches the words and phrases for those topics, written fresh for this app — they are not the songs' own words. Watch a video on the Practice tab, then come back to the cards: tap 🔊 to hear a word, and tap 🎧 \"Tell me\" for a short description in Chinese and English. When you know the words, see how many you can spot when you watch the video again!"
    }
  });
})();
