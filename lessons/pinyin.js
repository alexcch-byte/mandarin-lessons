// Pinyin phonics chapter: the sound of each letter (聲母 initials, 韻母 finals),
// blending letters into syllables (b + a = bā), and the four tones. Every
// sound is taught through a real character you can tap and hear, with a
// picture, so pre-readers can learn by ear. Tap a card to hear the word; the English
// read-along says what it means. Pinyin sits beside zhuyin, which the school
// teaches, so each initial shows its zhuyin twin in the card text.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

(function () {
  var P0 = "🔊 Phonics 1: the letter sounds (say them!)";
  var B1 = "🧩 Phonics 2: blend with a  (b + a = bā)";
  var B2 = "🧩 Phonics 3: blend with i  (b + i = bǐ)";
  var B3 = "🧩 Phonics 4: blend with u  (b + u = bù)";
  var I1 = "🖼️ Picture words 1: b p m f  (ㄅㄆㄇㄈ)";
  var I2 = "🖼️ Picture words 2: d t n l  (ㄉㄊㄋㄌ)";
  var I3 = "🖼️ Picture words 3: g k h  (ㄍㄎㄏ)";
  var I4 = "🖼️ Picture words 4: j q x  (ㄐㄑㄒ)";
  var I5 = "🖼️ Picture words 5: zh ch sh r  (ㄓㄔㄕㄖ)";
  var I6 = "🖼️ Picture words 6: z c s  (ㄗㄘㄙ)";
  var F1 = "🅰️ Finals: single vowels";
  var F2 = "🔀 Finals: double vowels & nasal endings";
  var T = "🎵 The 4 Tones";

  window.MANDARIN_LESSONS.push({
    id: "pinyin",
    category: true,
    icon: "🔤",
    bookTitle: "Pinyin",
    title: "拼音自然發音",
    titlePinyin: "Pīnyīn zìrán fāyīn",
    titleEnglish: "Pinyin Phonics: letter sounds, blending & tones",
    dateAdded: "2026-10-10",

    vocabulary: [
      // ---- Phonics 1: the sound each letter makes (taught with o / e / i, as in zhuyin) ----
      { hanzi: "波", pinyin: "b + o = bo", english: "wave  ·  ㄅㄛ", sayEnglish: "wave", emoji: "🌊", group: P0 },
      { hanzi: "坡", pinyin: "p + o = po", english: "slope  ·  ㄆㄛ", sayEnglish: "slope", emoji: "⛰️", group: P0 },
      { hanzi: "摸", pinyin: "m + o = mo", english: "to touch  ·  ㄇㄛ", sayEnglish: "to touch", emoji: "🤲", group: P0 },
      { hanzi: "佛", pinyin: "f + o = fo", english: "Buddha  ·  ㄈㄛ", sayEnglish: "Buddha", emoji: "🙏", group: P0 },
      { hanzi: "得", pinyin: "d + e = de", english: "to get  ·  ㄉㄜ", sayEnglish: "to get", emoji: "🏆", group: P0 },
      { hanzi: "特", pinyin: "t + e = te", english: "special  ·  ㄊㄜ", sayEnglish: "special", emoji: "⭐", group: P0 },
      { hanzi: "呢", pinyin: "n + e = ne", english: "and you? (a question word)  ·  ㄋㄜ", sayEnglish: "and you?", emoji: "❓", group: P0 },
      { hanzi: "樂", pinyin: "l + e = le", english: "happy  ·  ㄌㄜ", sayEnglish: "happy", emoji: "😄", group: P0 },
      { hanzi: "哥", pinyin: "g + e = ge", english: "older brother  ·  ㄍㄜ", sayEnglish: "older brother", emoji: "🧑", group: P0 },
      { hanzi: "科", pinyin: "k + e = ke", english: "science  ·  ㄎㄜ", sayEnglish: "science", emoji: "🔬", group: P0 },
      { hanzi: "河", pinyin: "h + e = he", english: "river  ·  ㄏㄜ", sayEnglish: "river", emoji: "🏞️", group: P0 },
      { hanzi: "雞", pinyin: "j + i = ji", english: "chicken  ·  ㄐㄧ", sayEnglish: "chicken", emoji: "🐔", group: P0 },
      { hanzi: "七", pinyin: "q + i = qi", english: "seven  ·  ㄑㄧ", sayEnglish: "seven", emoji: "7️⃣", group: P0 },
      { hanzi: "西", pinyin: "x + i = xi", english: "west  ·  ㄒㄧ", sayEnglish: "west", emoji: "🧭", group: P0 },
      { hanzi: "知", pinyin: "zh + i = zhi", english: "to know  ·  ㄓ", sayEnglish: "to know", emoji: "💡", group: P0 },
      { hanzi: "吃", pinyin: "ch + i = chi", english: "to eat  ·  ㄔ", sayEnglish: "to eat", emoji: "🍚", group: P0 },
      { hanzi: "是", pinyin: "sh + i = shi", english: "is, yes  ·  ㄕ", sayEnglish: "is, yes", emoji: "✅", group: P0 },
      { hanzi: "日", pinyin: "r + i = ri", english: "sun, day  ·  ㄖ", sayEnglish: "sun, day", emoji: "🌞", group: P0 },
      { hanzi: "資", pinyin: "z + i = zi", english: "money, resources  ·  ㄗ", sayEnglish: "resources", emoji: "💰", group: P0 },
      { hanzi: "詞", pinyin: "c + i = ci", english: "word  ·  ㄘ", sayEnglish: "word", emoji: "📖", group: P0 },
      { hanzi: "四", pinyin: "s + i = si", english: "four  ·  ㄙ", sayEnglish: "four", emoji: "4️⃣", group: P0 },

      // ---- Phonics 2-4: blending an initial with a final to make a syllable ----
      { hanzi: "八", pinyin: "b + ā = bā", english: "eight  ·  ㄅ + ㄚ", sayEnglish: "eight", emoji: "8️⃣", group: B1 },
      { hanzi: "趴", pinyin: "p + ā = pā", english: "to lie on your tummy  ·  ㄆ + ㄚ", sayEnglish: "to lie on your tummy", emoji: "🛌", group: B1 },
      { hanzi: "發", pinyin: "f + ā = fā", english: "to send out  ·  ㄈ + ㄚ", sayEnglish: "to send out", emoji: "📤", group: B1 },
      { hanzi: "搭", pinyin: "d + ā = dā", english: "to ride (a bus)  ·  ㄉ + ㄚ", sayEnglish: "to ride a bus", emoji: "🚌", group: B1 },
      { hanzi: "他", pinyin: "t + ā = tā", english: "he, him  ·  ㄊ + ㄚ", sayEnglish: "he", emoji: "👦", group: B1 },
      { hanzi: "拿", pinyin: "n + á = ná", english: "to hold, to take  ·  ㄋ + ㄚˊ", sayEnglish: "to take", emoji: "🤝", group: B1 },
      { hanzi: "拉", pinyin: "l + ā = lā", english: "to pull  ·  ㄌ + ㄚ", sayEnglish: "to pull", emoji: "🪢", group: B1 },

      { hanzi: "比", pinyin: "b + ǐ = bǐ", english: "to compare  ·  ㄅ + ㄧˇ", sayEnglish: "to compare", emoji: "⚖️", group: B2 },
      { hanzi: "皮", pinyin: "p + í = pí", english: "skin  ·  ㄆ + ㄧˊ", sayEnglish: "skin", emoji: "🍌", group: B2 },
      { hanzi: "米", pinyin: "m + ǐ = mǐ", english: "rice  ·  ㄇ + ㄧˇ", sayEnglish: "rice", emoji: "🍚", group: B2 },
      { hanzi: "笛", pinyin: "d + í = dí", english: "flute  ·  ㄉ + ㄧˊ", sayEnglish: "flute", emoji: "🎶", group: B2 },
      { hanzi: "梯", pinyin: "t + ī = tī", english: "ladder  ·  ㄊ + ㄧ", sayEnglish: "ladder", emoji: "🪜", group: B2 },
      { hanzi: "你", pinyin: "n + ǐ = nǐ", english: "you  ·  ㄋ + ㄧˇ", sayEnglish: "you", emoji: "👉", group: B2 },
      { hanzi: "力", pinyin: "l + ì = lì", english: "strength  ·  ㄌ + ㄧˋ", sayEnglish: "strength", emoji: "💪", group: B2 },

      { hanzi: "不", pinyin: "b + ù = bù", english: "no, not  ·  ㄅ + ㄨˋ", sayEnglish: "no, not", emoji: "🚫", group: B3 },
      { hanzi: "撲", pinyin: "p + ū = pū", english: "to pounce  ·  ㄆ + ㄨ", sayEnglish: "to pounce", emoji: "🐱", group: B3 },
      { hanzi: "木", pinyin: "m + ù = mù", english: "wood  ·  ㄇ + ㄨˋ", sayEnglish: "wood", emoji: "🪵", group: B3 },
      { hanzi: "肚", pinyin: "d + ù = dù", english: "tummy  ·  ㄉ + ㄨˋ", sayEnglish: "tummy", emoji: "🫃", group: B3 },
      { hanzi: "兔", pinyin: "t + ù = tù", english: "rabbit  ·  ㄊ + ㄨˋ", sayEnglish: "rabbit", emoji: "🐰", group: B3 },
      { hanzi: "路", pinyin: "l + ù = lù", english: "road  ·  ㄌ + ㄨˋ", sayEnglish: "road", emoji: "🛣️", group: B3 },
      { hanzi: "哭", pinyin: "k + ū = kū", english: "to cry  ·  ㄎ + ㄨ", sayEnglish: "to cry", emoji: "😢", group: B3 },
      { hanzi: "湖", pinyin: "h + ú = hú", english: "lake  ·  ㄏ + ㄨˊ", sayEnglish: "lake", emoji: "🏞️", group: B3 },

      // ---- Picture words: one familiar word per letter ----
      { hanzi: "爸爸", pinyin: "bàba", english: "b as in dad  ·  ㄅ", sayEnglish: "dad", emoji: "👨", group: I1 },
      { hanzi: "蘋果", pinyin: "píngguǒ", english: "p as in apple  ·  ㄆ", sayEnglish: "apple", emoji: "🍎", group: I1 },
      { hanzi: "媽媽", pinyin: "māma", english: "m as in mom  ·  ㄇ", sayEnglish: "mom", emoji: "👩", group: I1 },
      { hanzi: "飛機", pinyin: "fēijī", english: "f as in airplane  ·  ㄈ", sayEnglish: "airplane", emoji: "✈️", group: I1 },

      { hanzi: "弟弟", pinyin: "dìdi", english: "d as in little brother  ·  ㄉ", sayEnglish: "little brother", emoji: "👦", group: I2 },
      { hanzi: "太陽", pinyin: "tàiyáng", english: "t as in sun  ·  ㄊ", sayEnglish: "sun", emoji: "☀️", group: I2 },
      { hanzi: "奶奶", pinyin: "nǎinai", english: "n as in grandma  ·  ㄋ", sayEnglish: "grandma", emoji: "👵", group: I2 },
      { hanzi: "老虎", pinyin: "lǎohǔ", english: "l as in tiger  ·  ㄌ", sayEnglish: "tiger", emoji: "🐯", group: I2 },

      { hanzi: "哥哥", pinyin: "gēge", english: "g as in older brother  ·  ㄍ", sayEnglish: "older brother", emoji: "🧑", group: I3 },
      { hanzi: "可樂", pinyin: "kělè", english: "k as in cola  ·  ㄎ", sayEnglish: "cola", emoji: "🥤", group: I3 },
      { hanzi: "蝴蝶", pinyin: "húdié", english: "h as in butterfly  ·  ㄏ", sayEnglish: "butterfly", emoji: "🦋", group: I3 },

      { hanzi: "橘子", pinyin: "júzi", english: "j as in tangerine  ·  ㄐ", sayEnglish: "tangerine", emoji: "🍊", group: I4 },
      { hanzi: "汽車", pinyin: "qìchē", english: "q as in car  ·  ㄑ", sayEnglish: "car", emoji: "🚗", group: I4 },
      { hanzi: "西瓜", pinyin: "xīguā", english: "x as in watermelon  ·  ㄒ", sayEnglish: "watermelon", emoji: "🍉", group: I4 },

      { hanzi: "豬", pinyin: "zhū", english: "zh as in pig  ·  ㄓ", sayEnglish: "pig", emoji: "🐷", group: I5 },
      { hanzi: "茶", pinyin: "chá", english: "ch as in tea  ·  ㄔ", sayEnglish: "tea", emoji: "🍵", group: I5 },
      { hanzi: "手", pinyin: "shǒu", english: "sh as in hand  ·  ㄕ", sayEnglish: "hand", emoji: "✋", group: I5 },
      { hanzi: "肉", pinyin: "ròu", english: "r as in meat  ·  ㄖ", sayEnglish: "meat", emoji: "🥩", group: I5 },

      { hanzi: "字", pinyin: "zì", english: "z as in written character  ·  ㄗ", sayEnglish: "character", emoji: "🔤", group: I6 },
      { hanzi: "草", pinyin: "cǎo", english: "c as in grass  ·  ㄘ", sayEnglish: "grass", emoji: "🌱", group: I6 },
      { hanzi: "三", pinyin: "sān", english: "s as in three  ·  ㄙ", sayEnglish: "three", emoji: "3️⃣", group: I6 },

      // ---- Finals ----
      { hanzi: "大", pinyin: "dà", english: "a as in big  ·  ㄚ", sayEnglish: "big", emoji: "🐘", group: F1 },
      { hanzi: "婆婆", pinyin: "pópo", english: "o as in grandma (mom's mom)  ·  ㄛ", sayEnglish: "grandma, mom's mom", emoji: "👵", group: F1 },
      { hanzi: "喝", pinyin: "hē", english: "e as in drink  ·  ㄜ", sayEnglish: "drink", emoji: "🥛", group: F1 },
      { hanzi: "一", pinyin: "yī", english: "i as in one  ·  ㄧ", sayEnglish: "one", emoji: "1️⃣", group: F1 },
      { hanzi: "五", pinyin: "wǔ", english: "u as in five  ·  ㄨ", sayEnglish: "five", emoji: "5️⃣", group: F1 },
      { hanzi: "魚", pinyin: "yú", english: "ü as in fish  ·  ㄩ", sayEnglish: "fish", emoji: "🐟", group: F1 },

      { hanzi: "愛", pinyin: "ài", english: "ai as in love  ·  ㄞ", sayEnglish: "love", emoji: "❤️", group: F2 },
      { hanzi: "黑", pinyin: "hēi", english: "ei as in black  ·  ㄟ", sayEnglish: "black", emoji: "⚫", group: F2 },
      { hanzi: "貓", pinyin: "māo", english: "ao as in cat  ·  ㄠ", sayEnglish: "cat", emoji: "🐱", group: F2 },
      { hanzi: "狗", pinyin: "gǒu", english: "ou as in dog  ·  ㄡ", sayEnglish: "dog", emoji: "🐶", group: F2 },
      { hanzi: "山", pinyin: "shān", english: "an as in mountain  ·  ㄢ", sayEnglish: "mountain", emoji: "⛰️", group: F2 },
      { hanzi: "人", pinyin: "rén", english: "en as in person  ·  ㄣ", sayEnglish: "person", emoji: "🧍", group: F2 },
      { hanzi: "羊", pinyin: "yáng", english: "ang as in sheep  ·  ㄤ", sayEnglish: "sheep", emoji: "🐑", group: F2 },
      { hanzi: "風", pinyin: "fēng", english: "eng as in wind  ·  ㄥ", sayEnglish: "wind", emoji: "💨", group: F2 },
      { hanzi: "龍", pinyin: "lóng", english: "ong as in dragon  ·  ㄨㄥ", sayEnglish: "dragon", emoji: "🐉", group: F2 },

      // ---- Tones ----
      { hanzi: "媽", pinyin: "mā", english: "1st tone ˉ  high and flat, like singing one note  ▬", sayEnglish: "first tone. mom", emoji: "👩", group: T },
      { hanzi: "麻", pinyin: "má", english: "2nd tone ˊ  rising, like asking 'what?'  ↗", sayEnglish: "second tone. hemp", emoji: "🌾", group: T },
      { hanzi: "馬", pinyin: "mǎ", english: "3rd tone ˇ  dips down then up  ↘↗", sayEnglish: "third tone. horse", emoji: "🐴", group: T },
      { hanzi: "罵", pinyin: "mà", english: "4th tone ˋ  short and falling, like saying 'no!'  ↘", sayEnglish: "fourth tone. to scold", emoji: "😠", group: T }
    ],

    sentencePatterns: [
      { hanzi: "媽媽騎馬，馬慢，媽媽罵馬。", pinyin: "Māma qí mǎ, mǎ màn, māma mà mǎ.", english: "Mom rides a horse. The horse is slow. Mom scolds the horse. (All four tones!)" },
      { hanzi: "你好", pinyin: "nǐ hǎo  →  say: ní hǎo", english: "Two 3rd tones in a row: the first one sounds like a 2nd tone." },
      { hanzi: "不客氣", pinyin: "bù kèqì  →  say: bú kèqì", english: "The word 'bù' turns into 'bú' before a 4th tone." },
      { hanzi: "不好", pinyin: "bù hǎo", english: "The word 'bù' stays 'bù' before a 3rd tone." },
      { hanzi: "老虎", pinyin: "lǎohǔ  →  say: láohǔ", english: "Tiger has two 3rd tones, so the first one sounds like a 2nd tone." }
    ],

    writingPractice: [
      { hanzi: "八", pinyin: "bā", english: "eight  (ㄅㄚ)" },
      { hanzi: "五", pinyin: "wǔ", english: "five  (ㄨˇ)" },
      { hanzi: "人", pinyin: "rén", english: "person  (ㄖㄣˊ)" },
      { hanzi: "山", pinyin: "shān", english: "mountain  (ㄕㄢ)" },
      { hanzi: "羊", pinyin: "yáng", english: "sheep  (ㄧㄤˊ)" },
      { hanzi: "魚", pinyin: "yú", english: "fish  (ㄩˊ)" },
      { hanzi: "狗", pinyin: "gǒu", english: "dog  (ㄍㄡˇ)" },
      { hanzi: "貓", pinyin: "māo", english: "cat  (ㄇㄠ)" }
    ],

    exercises: [
      {
        type: "match-emoji",
        title: "配對：Match the Sound Word",
        instructions: "Tap the word, listen, and match it to the right picture.",
        items: [
          { hanzi: "爸爸", pinyin: "bàba", emoji: "👨" },
          { hanzi: "蘋果", pinyin: "píngguǒ", emoji: "🍎" },
          { hanzi: "飛機", pinyin: "fēijī", emoji: "✈️" },
          { hanzi: "太陽", pinyin: "tàiyáng", emoji: "☀️" },
          { hanzi: "蝴蝶", pinyin: "húdié", emoji: "🦋" },
          { hanzi: "西瓜", pinyin: "xīguā", emoji: "🍉" }
        ]
      },
      {
        type: "listen-pick",
        title: "聽一聽：Phonics — Which Sound?",
        instructions: "Tap ▶ Listen, then choose the sound you hear. Say it out loud too!",
        items: [
          { say: "波", answer: 0, options: [{ label: "bo  ㄅㄛ" }, { label: "po  ㄆㄛ" }] },
          { say: "摸", answer: 1, options: [{ label: "fo  ㄈㄛ" }, { label: "mo  ㄇㄛ" }] },
          { say: "得", answer: 0, options: [{ label: "de  ㄉㄜ" }, { label: "te  ㄊㄜ" }] },
          { say: "樂", answer: 1, options: [{ label: "ne  ㄋㄜ" }, { label: "le  ㄌㄜ" }] },
          { say: "科", answer: 1, options: [{ label: "ge  ㄍㄜ" }, { label: "ke  ㄎㄜ" }] },
          { say: "七", answer: 1, options: [{ label: "ji  ㄐㄧ" }, { label: "qi  ㄑㄧ" }] },
          { say: "吃", answer: 0, options: [{ label: "chi  ㄔ" }, { label: "shi  ㄕ" }] },
          { say: "四", answer: 1, options: [{ label: "ci  ㄘ" }, { label: "si  ㄙ" }] }
        ]
      },
      {
        type: "listen-pick",
        title: "聽一聽：Blending — Which Syllable?",
        instructions: "Tap ▶ Listen, then choose the syllable you hear (first sound + vowel).",
        items: [
          { say: "八", answer: 0, options: [{ label: "bā  (b + ā)" }, { label: "pā  (p + ā)" }] },
          { say: "媽", answer: 1, options: [{ label: "nā  (n + ā)" }, { label: "mā  (m + ā)" }] },
          { say: "他", answer: 0, options: [{ label: "tā  (t + ā)" }, { label: "dā  (d + ā)" }] },
          { say: "米", answer: 1, options: [{ label: "nǐ  (n + ǐ)" }, { label: "mǐ  (m + ǐ)" }] },
          { say: "你", answer: 0, options: [{ label: "nǐ  (n + ǐ)" }, { label: "lǐ  (l + ǐ)" }] },
          { say: "不", answer: 0, options: [{ label: "bù  (b + ù)" }, { label: "pù  (p + ù)" }] },
          { say: "兔", answer: 1, options: [{ label: "dù  (d + ù)" }, { label: "tù  (t + ù)" }] },
          { say: "路", answer: 0, options: [{ label: "lù  (l + ù)" }, { label: "nù  (n + ù)" }] }
        ]
      },
      {
        type: "fill-blank",
        title: "拼一拼：Build the Syllable",
        instructions: "Blend the first sound with the vowel. Which syllable do they make?",
        wordBank: ["bā", "mā", "tā", "nǐ", "mǐ", "bù", "tù", "lù"],
        items: [
          { before: "b + ā  =", after: "", answer: "bā", pinyinHint: "八 eight" },
          { before: "m + ā  =", after: "", answer: "mā", pinyinHint: "媽 mom" },
          { before: "t + ā  =", after: "", answer: "tā", pinyinHint: "他 he" },
          { before: "n + ǐ  =", after: "", answer: "nǐ", pinyinHint: "你 you" },
          { before: "m + ǐ  =", after: "", answer: "mǐ", pinyinHint: "米 rice" },
          { before: "b + ù  =", after: "", answer: "bù", pinyinHint: "不 no" },
          { before: "t + ù  =", after: "", answer: "tù", pinyinHint: "兔 rabbit" },
          { before: "l + ù  =", after: "", answer: "lù", pinyinHint: "路 road" }
        ]
      },
      {
        type: "fill-blank",
        title: "拆一拆：Break the Syllable Apart",
        instructions: "Which first sound is hiding in each syllable?",
        wordBank: ["b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h"],
        items: [
          { before: "", after: "+ ā  =  bā 八", answer: "b", pinyinHint: "first sound of bā" },
          { before: "", after: "+ ā  =  mā 媽", answer: "m", pinyinHint: "first sound of mā" },
          { before: "", after: "+ ǐ  =  nǐ 你", answer: "n", pinyinHint: "first sound of nǐ" },
          { before: "", after: "+ í  =  pí 皮", answer: "p", pinyinHint: "first sound of pí" },
          { before: "", after: "+ ù  =  tù 兔", answer: "t", pinyinHint: "first sound of tù" },
          { before: "", after: "+ ù  =  lù 路", answer: "l", pinyinHint: "first sound of lù" },
          { before: "", after: "+ ū  =  kū 哭", answer: "k", pinyinHint: "first sound of kū" },
          { before: "", after: "+ ú  =  hú 湖", answer: "h", pinyinHint: "first sound of hú" }
        ]
      },
      {
        type: "listen-pick",
        title: "聽一聽：Which Tone Did You Hear?",
        instructions: "Tap ▶ Listen, then choose the pinyin with the matching tone.",
        items: [
          { say: "媽", answer: 0, options: [{ label: "mā  ˉ  1st (flat)" }, { label: "mà  ˋ  4th (falling)" }] },
          { say: "麻", answer: 1, options: [{ label: "mā  ˉ  1st (flat)" }, { label: "má  ˊ  2nd (rising)" }] },
          { say: "馬", answer: 0, options: [{ label: "mǎ  ˇ  3rd (dip)" }, { label: "má  ˊ  2nd (rising)" }] },
          { say: "罵", answer: 1, options: [{ label: "mǎ  ˇ  3rd (dip)" }, { label: "mà  ˋ  4th (falling)" }] },
          { say: "爸", answer: 1, options: [{ label: "bā  ˉ  1st (flat)" }, { label: "bà  ˋ  4th (falling)" }] },
          { say: "哥", answer: 0, options: [{ label: "gē  ˉ  1st (flat)" }, { label: "gě  ˇ  3rd (dip)" }] },
          { say: "姐", answer: 0, options: [{ label: "jiě  ˇ  3rd (dip)" }, { label: "jiè  ˋ  4th (falling)" }] },
          { say: "弟", answer: 0, options: [{ label: "dì  ˋ  4th (falling)" }, { label: "dí  ˊ  2nd (rising)" }] }
        ]
      },
      {
        type: "listen-pick",
        title: "聽一聽：Which First Sound?",
        instructions: "Tap ▶ Listen, then choose the first sound of the word you hear.",
        items: [
          { say: "爸爸", answer: 0, options: [{ label: "b  ㄅ" }, { label: "p  ㄆ" }] },
          { say: "蘋果", answer: 1, options: [{ label: "b  ㄅ" }, { label: "p  ㄆ" }] },
          { say: "弟弟", answer: 0, options: [{ label: "d  ㄉ" }, { label: "t  ㄊ" }] },
          { say: "太陽", answer: 1, options: [{ label: "d  ㄉ" }, { label: "t  ㄊ" }] },
          { say: "哥哥", answer: 0, options: [{ label: "g  ㄍ" }, { label: "k  ㄎ" }] },
          { say: "可樂", answer: 1, options: [{ label: "g  ㄍ" }, { label: "k  ㄎ" }] },
          { say: "橘子", answer: 0, options: [{ label: "j  ㄐ" }, { label: "q  ㄑ" }] },
          { say: "汽車", answer: 1, options: [{ label: "j  ㄐ" }, { label: "q  ㄑ" }] },
          { say: "豬", answer: 1, options: [{ label: "z  ㄗ" }, { label: "zh  ㄓ" }] },
          { say: "草", answer: 0, options: [{ label: "c  ㄘ" }, { label: "ch  ㄔ" }] },
          { say: "手", answer: 1, options: [{ label: "s  ㄙ" }, { label: "sh  ㄕ" }] },
          { say: "西瓜", answer: 1, options: [{ label: "sh  ㄕ" }, { label: "x  ㄒ" }] }
        ]
      },
      {
        type: "fill-blank",
        title: "填聲母：Fill in the First Sound",
        instructions: "Each word is missing its first sound. Choose the right pinyin letter(s).",
        wordBank: ["b", "p", "m", "f", "d", "t", "g", "k", "h", "j", "q", "x", "zh", "ch", "sh", "z", "c", "s"],
        items: [
          { before: "", after: "àba — 爸爸 dad 👨", answer: "b", pinyinHint: "bàba" },
          { before: "", after: "íngguǒ — 蘋果 apple 🍎", answer: "p", pinyinHint: "píngguǒ" },
          { before: "", after: "ēijī — 飛機 airplane ✈️", answer: "f", pinyinHint: "fēijī" },
          { before: "", after: "ìdi — 弟弟 little brother 👦", answer: "d", pinyinHint: "dìdi" },
          { before: "", after: "ēge — 哥哥 older brother 🧑", answer: "g", pinyinHint: "gēge" },
          { before: "", after: "údié — 蝴蝶 butterfly 🦋", answer: "h", pinyinHint: "húdié" },
          { before: "", after: "ìchē — 汽車 car 🚗", answer: "q", pinyinHint: "qìchē" },
          { before: "", after: "īguā — 西瓜 watermelon 🍉", answer: "x", pinyinHint: "xīguā" },
          { before: "", after: "ū — 豬 pig 🐷", answer: "zh", pinyinHint: "zhū" },
          { before: "", after: "á — 茶 tea 🍵", answer: "ch", pinyinHint: "chá" },
          { before: "", after: "ǒu — 手 hand ✋", answer: "sh", pinyinHint: "shǒu" },
          { before: "", after: "ān — 三 three 3️⃣", answer: "s", pinyinHint: "sān" }
        ]
      },
      {
        type: "fill-blank",
        title: "第幾聲：Which Tone?",
        instructions: "Choose the tone for each word.",
        wordBank: ["1st ˉ", "2nd ˊ", "3rd ˇ", "4th ˋ"],
        items: [
          { before: "媽 mā is", after: "tone", answer: "1st ˉ", pinyinHint: "high and flat" },
          { before: "麻 má is", after: "tone", answer: "2nd ˊ", pinyinHint: "rising" },
          { before: "馬 mǎ is", after: "tone", answer: "3rd ˇ", pinyinHint: "dips down then up" },
          { before: "罵 mà is", after: "tone", answer: "4th ˋ", pinyinHint: "falling" },
          { before: "爸 bà is", after: "tone", answer: "4th ˋ", pinyinHint: "falling" },
          { before: "魚 yú is", after: "tone", answer: "2nd ˊ", pinyinHint: "rising" }
        ]
      },
      {
        type: "read-aloud",
        title: "念一念：Say It Out Loud",
        instructions: "Tap each one, say it with the right tone, then listen to check.",
        items: ["波", "坡", "摸", "八", "媽", "他", "你", "米", "不", "兔", "麻", "馬", "罵", "媽媽騎馬，馬慢，媽媽罵馬。", "你好", "不客氣", "老虎"]
      }
    ],

    culture: {
      title: "What is pinyin? 什麼是拼音？",
      englishText: "Pinyin phonics works like English phonics: first learn the sound each letter makes (b, p, m, f...), then blend a first sound with a vowel to build a syllable — b + a = bā. Pinyin spells Mandarin with the same letters we use in English, so every character gets a pronunciation guide. In Taiwan, schools teach zhuyin (ㄅㄆㄇㄈ) instead — each pinyin sound has a zhuyin twin, and every card here shows both. Every syllable also has a tone: 1st (high and flat), 2nd (rising), 3rd (dipping), 4th (falling). The same sound with a different tone is a different word — mā is mom, má is hemp, mǎ is horse and mà means to scold. Tip: listen first, copy the sound out loud, and use the 🇬🇧 English button in the header if you want to hear what each word means."
    }
  });
})();
