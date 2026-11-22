// Common everyday phrases — "Can I ...?" questions kids ask at home.
// Added 2026-11-22 from the English list: Can I watch TV? / Can you help me? /
// Can I be excused? / Can I have water? / Can I have a hug?
// Taiwan-style Mandarin (Traditional characters), matching the class materials.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

window.MANDARIN_LESSONS.push({
  id: "common-phrases",
  category: true,
  icon: "💬",
  bookTitle: "Everyday Phrases",
  title: "常用語：我可以……嗎？",
  titlePinyin: "Chángyòngyǔ: Wǒ kěyǐ ... ma?",
  titleEnglish: "Common Phrases: Can I ... ?",
  dateAdded: "2026-11-22",

  vocabulary: [
    { hanzi: "我可以看電視嗎？", pinyin: "Wǒ kěyǐ kàn diànshì ma?", english: "Can I watch TV?", emoji: "📺", group: "💬 Common Phrases" },
    { hanzi: "你可以幫我嗎？", pinyin: "Nǐ kěyǐ bāng wǒ ma?", english: "Can you help me?", emoji: "🤝", group: "💬 Common Phrases" },
    { hanzi: "我可以離開嗎？", pinyin: "Wǒ kěyǐ líkāi ma?", english: "Can I be excused?", emoji: "🚪", group: "💬 Common Phrases" },
    { hanzi: "我可以喝水嗎？", pinyin: "Wǒ kěyǐ hē shuǐ ma?", english: "Can I have water?", emoji: "💧", group: "💬 Common Phrases" },
    { hanzi: "我可以抱抱嗎？", pinyin: "Wǒ kěyǐ bàobào ma?", english: "Can I have a hug?", emoji: "🤗", group: "💬 Common Phrases" },

    { hanzi: "可以", pinyin: "kěyǐ", english: "can, may", emoji: "✅", group: "🔑 Key Words" },
    { hanzi: "嗎", pinyin: "ma", english: "question word (ends a yes/no question)", emoji: "❓", group: "🔑 Key Words" },
    { hanzi: "電視", pinyin: "diànshì", english: "TV", emoji: "📺", group: "🔑 Key Words" },
    { hanzi: "看", pinyin: "kàn", english: "to watch, to look", emoji: "👀", group: "🔑 Key Words" },
    { hanzi: "幫", pinyin: "bāng", english: "to help", emoji: "🤝", group: "🔑 Key Words" },
    { hanzi: "離開", pinyin: "líkāi", english: "to leave (the table), to be excused", emoji: "🚪", group: "🔑 Key Words" },
    { hanzi: "喝", pinyin: "hē", english: "to drink", emoji: "🥤", group: "🔑 Key Words" },
    { hanzi: "水", pinyin: "shuǐ", english: "water", emoji: "💧", group: "🔑 Key Words" },
    { hanzi: "抱抱", pinyin: "bàobào", english: "a hug", emoji: "🤗", group: "🔑 Key Words" }
  ],

  sentencePatterns: [
    { hanzi: "我可以……嗎？", pinyin: "Wǒ kěyǐ ... ma?", english: "Can I ... ? (asking permission)" },
    { hanzi: "你可以……嗎？", pinyin: "Nǐ kěyǐ ... ma?", english: "Can you ... ? (asking someone to do something)" },
    { hanzi: "可以。", pinyin: "Kěyǐ.", english: "Yes, you can." },
    { hanzi: "不可以。", pinyin: "Bù kěyǐ.", english: "No, you can't." },
    { hanzi: "請……", pinyin: "Qǐng ...", english: "Please ... (add it to be polite)" }
  ],

  dialogues: [
    {
      title: "看電視 Watching TV",
      titleEnglish: "Asking to watch TV",
      lines: [
        { speaker: "小朋友 Child", hanzi: "媽媽，我可以看電視嗎？", pinyin: "Māma, wǒ kěyǐ kàn diànshì ma?", english: "Mom, can I watch TV?" },
        { speaker: "媽媽 Mom", hanzi: "可以。", pinyin: "Kěyǐ.", english: "Yes, you can." },
        { speaker: "小朋友 Child", hanzi: "謝謝媽媽！", pinyin: "Xièxie māma!", english: "Thank you, Mom!" }
      ]
    },
    {
      title: "喝水 Having water",
      titleEnglish: "Asking for water",
      lines: [
        { speaker: "小朋友 Child", hanzi: "爸爸，我可以喝水嗎？", pinyin: "Bàba, wǒ kěyǐ hē shuǐ ma?", english: "Dad, can I have water?" },
        { speaker: "爸爸 Dad", hanzi: "可以。", pinyin: "Kěyǐ.", english: "Yes, you can." },
        { speaker: "小朋友 Child", hanzi: "謝謝爸爸！", pinyin: "Xièxie bàba!", english: "Thank you, Dad!" }
      ]
    },
    {
      title: "幫忙 Asking for help",
      titleEnglish: "Asking for help",
      lines: [
        { speaker: "小朋友 Child", hanzi: "老師，你可以幫我嗎？", pinyin: "Lǎoshī, nǐ kěyǐ bāng wǒ ma?", english: "Teacher, can you help me?" },
        { speaker: "老師 Teacher", hanzi: "可以。", pinyin: "Kěyǐ.", english: "Yes, I can." },
        { speaker: "小朋友 Child", hanzi: "謝謝老師！", pinyin: "Xièxie lǎoshī!", english: "Thank you, teacher!" }
      ]
    }
  ],

  actions: [
    { hanzi: "我可以看電視嗎？", pinyin: "Wǒ kěyǐ kàn diànshì ma?", english: "Can I watch TV?", emoji: "📺" },
    { hanzi: "你可以幫我嗎？", pinyin: "Nǐ kěyǐ bāng wǒ ma?", english: "Can you help me?", emoji: "🤝" },
    { hanzi: "我可以離開嗎？", pinyin: "Wǒ kěyǐ líkāi ma?", english: "Can I be excused?", emoji: "🚪" },
    { hanzi: "我可以喝水嗎？", pinyin: "Wǒ kěyǐ hē shuǐ ma?", english: "Can I have water?", emoji: "💧" },
    { hanzi: "我可以抱抱嗎？", pinyin: "Wǒ kěyǐ bàobào ma?", english: "Can I have a hug?", emoji: "🤗" }
  ],

  writingPractice: [
    { hanzi: "可", pinyin: "kě", english: "can  (as in 可以)" },
    { hanzi: "以", pinyin: "yǐ", english: "use, with  (as in 可以)" },
    { hanzi: "水", pinyin: "shuǐ", english: "water" },
    { hanzi: "看", pinyin: "kàn", english: "to watch, to look" }
  ],

  exercises: [
    {
      type: "read-aloud",
      title: "念一念：Read the Phrases Aloud",
      instructions: "Tap each phrase and say it out loud.",
      items: ["我可以看電視嗎？", "你可以幫我嗎？", "我可以離開嗎？", "我可以喝水嗎？", "我可以抱抱嗎？"]
    },
    {
      type: "match-emoji",
      title: "配對：Match the Phrase",
      instructions: "Match each phrase to the picture that goes with it.",
      items: [
        { hanzi: "我可以看電視嗎？", pinyin: "Wǒ kěyǐ kàn diànshì ma?", emoji: "📺" },
        { hanzi: "你可以幫我嗎？", pinyin: "Nǐ kěyǐ bāng wǒ ma?", emoji: "🤝" },
        { hanzi: "我可以離開嗎？", pinyin: "Wǒ kěyǐ líkāi ma?", emoji: "🚪" },
        { hanzi: "我可以喝水嗎？", pinyin: "Wǒ kěyǐ hē shuǐ ma?", emoji: "💧" },
        { hanzi: "我可以抱抱嗎？", pinyin: "Wǒ kěyǐ bàobào ma?", emoji: "🤗" }
      ]
    },
    {
      type: "listen-pick",
      title: "聽一聽：Listen and Pick",
      instructions: "Tap ▶ Listen, then choose the picture that matches what you hear.",
      items: [
        { say: "我可以看電視嗎？", answer: 0, options: [{ emoji: "📺", label: "Watching TV" }, { emoji: "💧", label: "Having water" }] },
        { say: "我可以喝水嗎？", answer: 1, options: [{ emoji: "🤗", label: "A hug" }, { emoji: "💧", label: "Having water" }] },
        { say: "我可以抱抱嗎？", answer: 0, options: [{ emoji: "🤗", label: "A hug" }, { emoji: "🚪", label: "Leaving the table" }] },
        { say: "我可以離開嗎？", answer: 1, options: [{ emoji: "🤝", label: "Getting help" }, { emoji: "🚪", label: "Leaving the table" }] },
        { say: "你可以幫我嗎？", answer: 0, options: [{ emoji: "🤝", label: "Getting help" }, { emoji: "📺", label: "Watching TV" }] }
      ]
    },
    {
      type: "fill-blank",
      title: "填一填：Fill in the Missing Word",
      instructions: "Tap 🔊 to hear the question, then choose the missing word.",
      wordBank: ["看", "幫", "離開", "喝", "抱抱"],
      items: [
        { before: "我可以", after: "電視嗎？", say: "我可以看電視嗎？", answer: "看", pinyinHint: "Wǒ kěyǐ ___ diànshì ma?" },
        { before: "你可以", after: "我嗎？", say: "你可以幫我嗎？", answer: "幫", pinyinHint: "Nǐ kěyǐ ___ wǒ ma?" },
        { before: "我可以", after: "嗎？", say: "我可以離開嗎？", answer: "離開", pinyinHint: "Wǒ kěyǐ ___ ma?" },
        { before: "我可以", after: "水嗎？", say: "我可以喝水嗎？", answer: "喝", pinyinHint: "Wǒ kěyǐ ___ shuǐ ma?" },
        { before: "我可以", after: "嗎？", say: "我可以抱抱嗎？", answer: "抱抱", pinyinHint: "Wǒ kěyǐ ___ ma?" }
      ]
    },
    {
      type: "write-blank",
      title: "默寫：Write from Memory",
      instructions: "Tap 🔊 to hear the question, then write the missing character in the box with your finger — from memory, no tracing! (Characters: 可 以 水 看)",
      items: [
        { before: "我", after: "以喝水嗎？", answer: "可", pinyinHint: "Wǒ ___yǐ hē shuǐ ma?", say: "我可以喝水嗎？" },
        { before: "我可以", after: "電視嗎？", answer: "看", pinyinHint: "Wǒ kěyǐ ___ diànshì ma?", say: "我可以看電視嗎？" },
        { before: "我可以喝", after: "嗎？", answer: "水", pinyinHint: "Wǒ kěyǐ hē ___ ma?", say: "我可以喝水嗎？" },
        { before: "你可", after: "幫我嗎？", answer: "以", pinyinHint: "Nǐ kě___ bāng wǒ ma?", say: "你可以幫我嗎？" }
      ]
    }
  ],

  culture: {
    title: "怎麼有禮貌地問 Asking politely",
    englishText: "To ask permission in Mandarin, start with 我可以……嗎？ (Can I ... ?). To ask someone to do something for you, use 你可以……嗎？ (Can you ... ?). The answer is 可以 (yes, you may) or 不可以 (no). Adding 請 (qǐng, please) makes it even more polite, and don't forget to say 謝謝 (thank you) afterwards! At the table, children often ask 我可以離開嗎？ (Can I be excused?) before getting down — a polite habit in many families."
  }
});
