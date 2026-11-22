// Common everyday phrases — "Can I ...?" questions kids ask at home.
// Added 2026-11-22 from the English list: Can I watch TV? / Can you help me? /
// Can I be excused? / Can I have water? / Can I have a hug?
// Taiwan-style Mandarin (Traditional characters), matching the class materials.
window.MANDARIN_LESSONS = window.MANDARIN_LESSONS || [];

(function () {
  // ---------- Pictures: simple cartoon scenes drawn as inline SVG (120 x 120) ----------
  var SKIN = "#ffd9b3", HAIR = "#5a3a1e", PANTS = "#3b4a6b", INK = "#4a3a2a";

  function scene(inner, bg) {
    return '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<rect width="120" height="120" rx="16" fill="' + bg + '"/>' + inner + "</svg>";
  }

  // A child standing with feet at (x, y). `arms` = extra SVG drawn in the child's own coordinates.
  function kid(x, y, s, shirt, arms, hair) {
    return '<g transform="translate(' + x + "," + y + ") scale(" + s + ')">' +
      '<rect x="-6" y="-9" width="5" height="9" rx="1.5" fill="' + PANTS + '"/><rect x="1" y="-9" width="5" height="9" rx="1.5" fill="' + PANTS + '"/>' +
      (arms === undefined ? '<rect x="-12" y="-26" width="4" height="15" rx="2" fill="' + SKIN + '"/><rect x="8" y="-26" width="4" height="15" rx="2" fill="' + SKIN + '"/>' : arms) +
      '<rect x="-8" y="-27" width="16" height="19" rx="5" fill="' + shirt + '"/>' +
      '<circle cx="0" cy="-35" r="9" fill="' + SKIN + '"/>' +
      '<path d="M-9.2 -36 A9.2 9.2 0 0 1 9.2 -36 Q0 -42 -9.2 -36Z" fill="' + (hair || HAIR) + '"/>' +
      '<circle cx="-3" cy="-34.5" r="1.2" fill="#333"/><circle cx="3" cy="-34.5" r="1.2" fill="#333"/>' +
      '<path d="M-3 -30.5 Q0 -28 3 -30.5" stroke="#c0504d" stroke-width="1.3" fill="none" stroke-linecap="round"/></g>';
  }

  function bubble(x, y, w, h, text, fill, ink, size) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="9" fill="' + (fill || "#fff") + '" stroke="' + INK + '" stroke-width="1.5"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + (size || 16) * 0.36) + '" font-size="' + (size || 16) + '" font-weight="800" text-anchor="middle" fill="' + (ink || INK) + '" font-family="sans-serif">' + text + "</text>";
  }

  function tv(x, y, s) {
    return '<g transform="translate(' + x + "," + y + ") scale(" + (s || 1) + ')">' +
      '<path d="M16 -2 L12 -12 M28 -2 L32 -12" stroke="#374151" stroke-width="2" stroke-linecap="round" transform="translate(0,-34)"/>' +
      '<rect x="0" y="-34" width="44" height="32" rx="5" fill="#374151"/>' +
      '<rect x="4" y="-30" width="36" height="24" rx="3" fill="#7dd3fc"/>' +
      '<circle cx="15" cy="-21" r="5" fill="#fde047"/><path d="M4 -6 L16 -15 L26 -9 L32 -13 L40 -8 L40 -6Z" fill="#4ade80"/>' +
      '<rect x="12" y="-2" width="20" height="3" rx="1.5" fill="#374151"/></g>';
  }

  function glass(x, y, s, level) {
    return '<g transform="translate(' + x + "," + y + ") scale(" + (s || 1) + ')">' +
      '<path d="M0 -34 L28 -34 L24 0 L4 0Z" fill="#e0f2fe" stroke="#64748b" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<path d="M' + (1 + (1 - level) * 3) + " " + (-34 * level) + " L" + (27 - (1 - level) * 3) + " " + (-34 * level) + ' L24 0 L4 0Z" fill="#38bdf8" opacity="0.85"/></g>';
  }

  function drop(x, y, s, fill) {
    return '<path transform="translate(' + x + "," + y + ") scale(" + (s || 1) + ')" d="M0 -22 C-3 -14 -12 -8 -12 0 A12 12 0 0 0 12 0 C12 -8 3 -14 0 -22Z" fill="' + (fill || "#38bdf8") + '" stroke="#0284c7" stroke-width="1.5" stroke-linejoin="round"/>';
  }

  function heart(x, y, s, fill) {
    return '<path transform="translate(' + x + "," + y + ") scale(" + (s || 1) + ')" d="M0 6 C-12 -4 -8 -14 0 -8 C8 -14 12 -4 0 6Z" fill="' + (fill || "#f43f5e") + '"/>';
  }

  function box(x, y, w, h) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="2" fill="#d6a45f" stroke="#8a5a2b" stroke-width="1.5"/>' +
      '<path d="M' + x + " " + (y + 5) + " h" + w + '" stroke="#8a5a2b" stroke-width="1.5"/>';
  }

  var ART = {
    // ---- the five phrases ----
    watchTv: scene(
      '<rect x="0" y="92" width="120" height="28" fill="#fde9c2"/>' +
      tv(60, 86, 1.1) + kid(30, 104, 1.05, "#f97316") +
      bubble(8, 6, 40, 26, "?", "#fff", "#f97316", 20) + '<path d="M26 32 L30 40 L34 32Z" fill="#fff" stroke="' + INK + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<rect x="25" y="31" width="10" height="3" fill="#fff"/>', "#fff7e6"),

    help: scene(
      '<rect x="0" y="92" width="120" height="28" fill="#dcfce7"/>' +
      kid(36, 104, 1.05, "#38bdf8",
        '<rect x="-12" y="-26" width="4" height="15" rx="2" fill="' + SKIN + '"/><rect x="8" y="-26" width="14" height="4" rx="2" fill="' + SKIN + '"/>') +
      box(46, 84, 24, 20) + '<path d="M54 68 q2 -6 4 0" stroke="#38bdf8" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      kid(92, 104, 1.25, "#22c55e",
        '<rect x="-12" y="-26" width="4" height="15" rx="2" fill="' + SKIN + '"/><rect x="-25" y="-26" width="17" height="4" rx="2" fill="' + SKIN + '"/>', "#2b2b2b") +
      bubble(8, 6, 40, 26, "?", "#fff", "#16a34a", 20) + '<path d="M22 32 L28 40 L34 32Z" fill="#fff" stroke="' + INK + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<rect x="21" y="31" width="14" height="3" fill="#fff"/>', "#f0fdf4"),

    excused: scene(
      '<rect x="0" y="92" width="120" height="28" fill="#fde9c2"/>' +
      '<rect x="6" y="66" width="62" height="6" rx="2" fill="#a16207"/><rect x="12" y="72" width="5" height="32" fill="#a16207"/><rect x="57" y="72" width="5" height="32" fill="#a16207"/>' +
      '<ellipse cx="37" cy="64" rx="16" ry="4" fill="#fff" stroke="#94a3b8" stroke-width="1.5"/><ellipse cx="37" cy="63.5" rx="9" ry="2" fill="#f1f5f9"/>' +
      '<rect x="14" y="59" width="2" height="7" fill="#94a3b8"/><rect x="60" y="59" width="2" height="7" fill="#94a3b8"/>' +
      '<rect x="88" y="42" width="26" height="52" rx="3" fill="#b45309"/><rect x="91" y="45" width="20" height="46" rx="2" fill="#d97706"/><circle cx="106" cy="70" r="2" fill="#fde047"/>' +
      '<path d="M70 28 L86 28" stroke="#16a34a" stroke-width="4" stroke-linecap="round"/><path d="M80 21 L88 28 L80 35" stroke="#16a34a" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
      kid(40, 106, 1.0, "#a855f7") +
      bubble(6, 6, 40, 24, "?", "#fff", "#a855f7", 20), "#faf5ff"),

    water: scene(
      '<rect x="0" y="92" width="120" height="28" fill="#dbeafe"/>' +
      kid(36, 104, 1.05, "#ef4444",
        '<rect x="-12" y="-26" width="4" height="15" rx="2" fill="' + SKIN + '"/><rect x="8" y="-26" width="14" height="4" rx="2" fill="' + SKIN + '"/>') +
      glass(66, 104, 1.1, 0.75) + drop(106, 46, 0.9) + drop(98, 66, 0.55) +
      bubble(8, 6, 40, 26, "?", "#fff", "#0284c7", 20) + '<path d="M22 32 L28 40 L34 32Z" fill="#fff" stroke="' + INK + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<rect x="21" y="31" width="14" height="3" fill="#fff"/>', "#eff6ff"),

    hug: scene(
      '<rect x="0" y="92" width="120" height="28" fill="#ffe4e6"/>' +
      kid(46, 106, 1.25, "#ec4899", '<rect x="-12" y="-26" width="4" height="15" rx="2" fill="' + SKIN + '"/><rect x="6" y="-26" width="20" height="4" rx="2" fill="' + SKIN + '"/>') +
      kid(74, 106, 1.25, "#14b8a6", '<rect x="8" y="-26" width="4" height="15" rx="2" fill="' + SKIN + '"/><rect x="-26" y="-26" width="20" height="4" rx="2" fill="' + SKIN + '"/>', "#2b2b2b") +
      heart(60, 24, 1.5) + heart(36, 34, 0.9, "#fb7185") + heart(86, 36, 0.9, "#fb7185"), "#fff1f2"),

    // ---- the key words ----
    can: scene(
      '<circle cx="60" cy="60" r="38" fill="#22c55e"/><path d="M40 62 L55 77 L82 46" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>', "#f0fdf4"),
    ma: scene(
      '<rect x="14" y="16" width="92" height="64" rx="18" fill="#fb923c"/><path d="M44 80 L38 104 L66 80Z" fill="#fb923c"/>' +
      '<text x="60" y="68" font-size="54" font-weight="900" text-anchor="middle" fill="#fff" font-family="sans-serif">?</text>', "#fff7ed"),
    tvWord: scene('<rect x="0" y="96" width="120" height="24" fill="#fde9c2"/>' + tv(14, 98, 2.0), "#fff7e6"),
    look: scene(
      '<path d="M8 60 Q60 14 112 60 Q60 106 8 60Z" fill="#fff" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>' +
      '<circle cx="60" cy="60" r="21" fill="#38bdf8"/><circle cx="60" cy="60" r="10" fill="#1e293b"/><circle cx="53" cy="53" r="4" fill="#fff"/>', "#f0f9ff"),
    helpWord: scene(
      '<rect x="0" y="96" width="120" height="24" fill="#dcfce7"/>' +
      kid(30, 106, 1.2, "#38bdf8", '<rect x="-12" y="-26" width="4" height="15" rx="2" fill="' + SKIN + '"/><rect x="8" y="-26" width="20" height="4" rx="2" fill="' + SKIN + '"/>') +
      kid(90, 106, 1.2, "#22c55e", '<rect x="8" y="-26" width="4" height="15" rx="2" fill="' + SKIN + '"/><rect x="-28" y="-26" width="20" height="4" rx="2" fill="' + SKIN + '"/>', "#2b2b2b") +
      box(44, 68, 32, 26), "#f0fdf4"),
    leave: scene(
      '<rect x="14" y="14" width="46" height="84" rx="4" fill="#b45309"/><rect x="19" y="19" width="36" height="74" rx="3" fill="#d97706"/>' +
      '<path d="M19 19 L40 26 L40 86 L19 93Z" fill="#78350f"/><circle cx="46" cy="58" r="3" fill="#fde047"/>' +
      '<path d="M70 58 L108 58" stroke="#16a34a" stroke-width="8" stroke-linecap="round"/><path d="M92 40 L110 58 L92 76" stroke="#16a34a" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>', "#faf5ff"),
    drink: scene(
      glass(40, 104, 2.0, 0.7) + '<path d="M84 22 L74 70" stroke="#f43f5e" stroke-width="5" stroke-linecap="round"/>' + drop(100, 52, 0.7) + drop(18, 40, 0.55), "#eff6ff"),
    waterWord: scene(
      drop(60, 90, 3.0) + '<path d="M10 104 q12 -9 25 0 t25 0 t25 0 t25 0" stroke="#0ea5e9" stroke-width="4" fill="none" stroke-linecap="round"/>', "#eff6ff"),
    hugWord: scene(
      // a teddy bear giving a hug
      '<circle cx="34" cy="28" r="12" fill="#c68642"/><circle cx="86" cy="28" r="12" fill="#c68642"/><circle cx="34" cy="28" r="6" fill="#f1c27d"/><circle cx="86" cy="28" r="6" fill="#f1c27d"/>' +
      '<ellipse cx="60" cy="86" rx="30" ry="28" fill="#c68642"/><circle cx="60" cy="46" r="26" fill="#c68642"/>' +
      '<ellipse cx="60" cy="86" rx="17" ry="18" fill="#f1c27d"/><ellipse cx="60" cy="54" rx="11" ry="8" fill="#f1c27d"/>' +
      '<circle cx="50" cy="42" r="3" fill="#2b2b2b"/><circle cx="70" cy="42" r="3" fill="#2b2b2b"/><ellipse cx="60" cy="52" rx="4" ry="3" fill="#2b2b2b"/>' +
      '<path d="M22 70 Q34 100 60 100 Q86 100 98 70" stroke="#a9692a" stroke-width="9" fill="none" stroke-linecap="round"/>' +
      heart(60, 82, 1.1), "#fff1f2")
  };

  // Chapter picture: a child asking five different "Can I ...?" questions.
  var HERO_TILES = [["watchTv", "看電視"], ["help", "幫忙"], ["excused", "離開"], ["water", "喝水"], ["hug", "抱抱"]];
  var HERO =
    '<svg viewBox="0 0 440 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<rect width="440" height="130" rx="18" fill="#fff7e6"/>' +
    kid(48, 120, 1.4, "#f97316") +
    bubble(8, 6, 82, 28, "可以…嗎？", "#fff", "#f97316", 15) + '<path d="M32 34 L38 44 L46 34Z" fill="#fff" stroke="' + INK + '" stroke-width="1.5" stroke-linejoin="round"/><rect x="31" y="33" width="16" height="3" fill="#fff"/>' +
    HERO_TILES.map(function (t, i) {
      var x = 104 + i * 66;
      return '<g transform="translate(' + x + ',24) scale(0.5)">' + ART[t[0]].replace(/<svg[^>]*>/, "").replace("</svg>", "") + "</g>" +
        '<text x="' + (x + 30) + '" y="102" font-size="12" font-weight="700" text-anchor="middle" fill="#8a5a2b" font-family="sans-serif">' + t[1] + "</text>";
    }).join("") +
    "</svg>";

  // ---------- From "Everyday Mandarin Phrases for Kids" (guide for ages 4 & 6) ----------
  // The guide is written in Simplified characters; they are converted here to the
  // Traditional characters used in class. `s` is the guide's "Sounds Like" column.
  function P(group, hanzi, pinyin, english, emoji, s, say) {
    var v = { hanzi: hanzi, pinyin: pinyin, english: english, emoji: emoji, group: group, soundsLike: s };
    if (say) v.say = say;
    return v;
  }
  var G1 = "👋 1. Greetings & Manners", G2 = "🆘 2. Needs & Asking for Help", G3 = "🍽️ 3. Food & Drink",
    G4 = "🧸 4. Playtime & Boundaries", G5A = "👕 5. Getting Dressed & Packing Up", G5B = "🏫 5. Heading Out & Drop-Off",
    G6A = "🛁 6. Shower Time: Washing Up", G6B = "🧼 6. Shower Time: Finishing Up", G7 = "🛏️ 7. Bedtime Routine";

  var GUIDE = [
    P(G1, "你好", "Nǐ hǎo", "Hello", "👋", "Nee how"),
    P(G1, "再見", "Zài jiàn", "Goodbye", "🚶", "Zye jyen"),
    P(G1, "謝謝", "Xiè xie", "Thank you", "🙏", "Shyeh-shyeh"),
    P(G1, "不客氣", "Bú kè qi", "You're welcome", "😊", "Boo kuh-chee"),
    P(G1, "對不起", "Duì bu qǐ", "Sorry / Excuse me", "😔", "Dway boo chee"),
    P(G1, "沒關係", "Méi guān xi", "It's okay / No problem", "👌", "May gwahn-shee"),
    P(G1, "有", "Yǒu", "Yes / Have", "✅", "Yoh"),
    P(G1, "沒有", "Méi yǒu", "No / Don't have", "❌", "May yoh"),
    P(G1, "我可以！", "Wǒ kě yǐ!", "I can do it!", "💪", "Waw kuh-yee"),
    P(G1, "太棒了！", "Tài bàng le!", "Awesome! / Great job!", "🌟", "Tye bahng luh"),
    P(G1, "我愛你", "Wǒ ài nǐ", "I love you", "❤️", "Waw eye nee"),

    P(G2, "幫我！", "Bāng wǒ!", "Help me! (short, for age 4)", "🆘", "Bahng waw"),
    P(G2, "請幫幫我", "Qǐng bāng bang wǒ", "Help me, please", "🙌", "Ching bahng-bahng waw"),
    P(G2, "我不知道", "Wǒ bù zhī dào", "I don't know", "🤷", "Waw boo jir-dow"),
    P(G2, "請打開", "Qǐng dǎ kāi", "Open it, please", "🔓", "Ching dah kye"),
    P(G2, "過來", "Guò lái", "Come here", "👋", "Gwoh lye"),
    P(G2, "我餓了", "Wǒ è le", "I'm hungry", "🍽️", "Waw uh luh"),
    P(G2, "我渴了", "Wǒ kě le", "I'm thirsty", "🥤", "Waw kuh luh"),
    P(G2, "我累了", "Wǒ lèi le", "I'm tired", "😴", "Waw lay luh"),
    P(G2, "我很開心", "Wǒ hěn kāi xīn", "I'm happy", "😄", "Waw hun kye shin"),

    P(G3, "我要吃", "Wǒ yào chī", "I want to eat", "🍚", "Waw yow chir"),
    P(G3, "我要喝水", "Wǒ yào hē shuǐ", "I want to drink water", "💧", "Waw yow huh shway"),
    P(G3, "好吃！", "Hǎo chī!", "Delicious! / Yummy!", "😋", "How chir"),
    P(G3, "還要", "Hái yào", "More, please", "➕", "High yow"),
    P(G3, "我飽了", "Wǒ bǎo le", "I'm full", "😌", "Waw bow luh"),

    P(G4, "一起玩！", "Yī qǐ wán!", "Let's play!", "🎮", "Ee-chee wahn"),
    P(G4, "我們一起玩吧！", "Wǒ men yī qǐ wán ba!", "Let's play together!", "🧸", "Waw-mun ee-chee wahn bah"),
    P(G4, "我的", "Wǒ de", "My turn (short)", "🙋", "Waw duh"),
    P(G4, "你的", "Nǐ de", "Your turn (short)", "👉", "Nee duh"),
    P(G4, "輪到我了", "Lún dào wǒ le", "My turn (full)", "🎲", "Lwun dow waw luh"),
    P(G4, "輪到你了", "Lún dào nǐ le", "Your turn (full)", "🎯", "Lwun dow nee luh"),
    P(G4, "你看！", "Nǐ kàn!", "Look! / Watch me!", "👀", "Nee kahn"),
    P(G4, "不要這樣", "Bú yào zhè yàng", "Stop / Don't do that", "✋", "Boo yow juh yahng"),
    P(G4, "收拾玩具", "Shōu shi wán jù", "Let's clean up", "🧹", "Shoh-shir wahn-joo"),

    P(G5A, "起床了！", "Qǐ chuáng le!", "Wake up!", "⏰", "Chee chwahng luh"),
    P(G5A, "穿衣服", "Chuān yī fu", "Put on clothes", "👕", "Chwahn ee-foo"),
    P(G5A, "穿鞋子", "Chuān xié zi", "Put on shoes", "👟", "Chwahn shyeh-zuh"),
    P(G5A, "書包", "Shū bāo", "Backpack", "🎒", "Shoo bow"),
    P(G5A, "水壺", "Shuǐ hú", "Water bottle", "🥤", "Shway hoo"),

    P(G5B, "我們去上學吧！", "Wǒ men qù shàng xué ba!", "Let's go to school!", "🏫", "Waw-mun chyoo shahng shweh bah"),
    P(G5B, "快走吧！", "Kuài zǒu ba!", "Let's go! / Hurry up!", "🏃", "Kwye zoh bah"),
    P(G5B, "準備好了嗎？", "Zhǔn bèi hǎo le ma?", "Are you ready?", "❓", "Jwun bay how luh mah"),
    P(G5B, "我準備好了！", "Wǒ zhǔn bèi hǎo le!", "I'm ready!", "✅", "Waw jwun bay how luh"),
    P(G5B, "上車", "Shàng chē", "Let's get in the car", "🚗", "Shahng chuh"),
    P(G5B, "玩得開心！", "Wán de kāi xīn!", "Have fun! / Play happily!", "🎉", "Wahn duh kye shin"),
    P(G5B, "聽話", "Tīng huà", "Be good / Listen well", "👂", "Ting hwah"),
    P(G5B, "待會兒見！", "Dāi huì r jiàn!", "See you later!", "🕐", "Dye hwur jyen"),
    P(G5B, "媽媽／爸爸再見！", "Mā ma / Bà ba zài jiàn!", "Bye-bye, Mom / Dad!", "👨‍👩‍👧", "Mah-mah / Bah-bah zye jyen", "媽媽再見！爸爸再見！"),

    P(G6A, "洗澡", "Xǐ zǎo", "Take a shower / bath", "🛁", "Shee zow"),
    P(G6A, "脫衣服", "Tuō yī fu", "Take off clothes", "👚", "Twoh ee-foo"),
    P(G6A, "開水", "Kāi shuǐ", "Turn on the water", "🚿", "Kye shway"),
    P(G6A, "太熱了！", "Tài rè le!", "Too hot!", "🥵", "Tye ruh luh"),
    P(G6A, "太冷了！", "Tài lěng le!", "Too cold!", "🥶", "Tye lung luh"),
    P(G6A, "洗頭髮", "Xǐ tóu fa", "Wash hair", "💆", "Shee toh-fah"),
    P(G6A, "洗臉", "Xǐ liǎn", "Wash face", "🙂", "Shee lyen"),
    P(G6A, "洗手", "Xǐ shǒu", "Wash hands", "🧼", "Shee shoh"),
    P(G6A, "洗肚子", "Xǐ dù zi", "Wash body / tummy", "🧽", "Shee doo-zuh"),
    P(G6A, "閉上眼睛！", "Bì shàng yǎn jing!", "Close your eyes!", "😑", "Bee shahng yen-jing"),

    P(G6B, "洗乾淨了！", "Xǐ gān jìng le!", "All clean!", "✨", "Shee gahn-jing luh"),
    P(G6B, "關水", "Guān shuǐ", "Turn off the water", "🚱", "Gwahn shway"),
    P(G6B, "毛巾", "Máo jīn", "Towel", "🧻", "Mow jin"),
    P(G6B, "擦乾", "Cā gān", "Dry off / Wipe body", "🌬️", "Tsah gahn"),
    P(G6B, "穿睡衣", "Chuān shuì yī", "Put on pajamas", "😴", "Chwahn shway-ee"),

    P(G7, "睡覺了", "Shuì jiào le", "Time for bed", "🛏️", "Shway jyow luh"),
    P(G7, "刷牙", "Shuā yá", "Brush teeth", "🦷", "Shwah yah"),
    P(G7, "講故事", "Jiǎng gù shi", "Read a story", "📖", "Jyahng goo-shir"),
    P(G7, "晚安", "Wǎn ān", "Goodnight", "🌙", "Wahn ahn"),
    P(G7, "做個好夢", "Zuò gè hǎo mèng", "Sweet dreams", "💭", "Zwoh guh how mung")
  ];

window.MANDARIN_LESSONS.push({
  id: "common-phrases",
  category: true,
  icon: "💬",
  bookTitle: "Everyday Phrases",
  title: "常用語",
  titlePinyin: "Chángyòngyǔ",
  titleEnglish: "Common Phrases: Everyday Mandarin for Kids",
  dateAdded: "2026-11-22",
  heroSvg: HERO,

  vocabulary: [
    { hanzi: "我可以看電視嗎？", pinyin: "Wǒ kěyǐ kàn diànshì ma?", english: "Can I watch TV?", emoji: "📺", group: "💬 Can I ...? (Asking Permission)", svg: ART.watchTv, picture: true,
      describe: { zh: "小朋友想看電視，他問：我可以看電視嗎？", en: "The child wants to watch TV, so he asks: Can I watch TV?" } },
    { hanzi: "你可以幫我嗎？", pinyin: "Nǐ kěyǐ bāng wǒ ma?", english: "Can you help me? (for age 6)", emoji: "🤝", soundsLike: "Nee kuh-yee bahng waw mah", group: "💬 Can I ...? (Asking Permission)", svg: ART.help, picture: true,
      describe: { zh: "這個箱子好重，小朋友問：你可以幫我嗎？", en: "This box is so heavy, so the child asks: Can you help me?" } },
    { hanzi: "我可以離開嗎？", pinyin: "Wǒ kěyǐ líkāi ma?", english: "Can I be excused?", emoji: "🚪", group: "💬 Can I ...? (Asking Permission)", svg: ART.excused, picture: true,
      describe: { zh: "小朋友吃飽了，他想離開餐桌，他問：我可以離開嗎？", en: "The child is full and wants to leave the table, so he asks: Can I be excused?" } },
    { hanzi: "我可以喝水嗎？", pinyin: "Wǒ kěyǐ hē shuǐ ma?", english: "Can I have water?", emoji: "💧", group: "💬 Can I ...? (Asking Permission)", svg: ART.water, picture: true,
      describe: { zh: "小朋友口渴了，他問：我可以喝水嗎？", en: "The child is thirsty, so he asks: Can I have water?" } },
    { hanzi: "我可以抱抱嗎？", pinyin: "Wǒ kěyǐ bàobào ma?", english: "Can I have a hug?", emoji: "🤗", group: "💬 Can I ...? (Asking Permission)", svg: ART.hug, picture: true,
      describe: { zh: "小朋友想要一個抱抱，他問：我可以抱抱嗎？", en: "The child would like a hug, so he asks: Can I have a hug?" } },

    { hanzi: "可以", pinyin: "kěyǐ", english: "can, may", emoji: "✅", group: "🔑 Key Words", svg: ART.can, picture: true,
      describe: { zh: "媽媽說可以，就是答應了。", en: "When Mom says kěyǐ, it means yes, you may." } },
    { hanzi: "嗎", pinyin: "ma", english: "question word (ends a yes/no question)", emoji: "❓", group: "🔑 Key Words", svg: ART.ma, picture: true,
      describe: { zh: "問問題的時候，最後說嗎。", en: "When we ask a yes-or-no question, we end it with ma." } },
    { hanzi: "電視", pinyin: "diànshì", english: "TV", emoji: "📺", group: "🔑 Key Words", svg: ART.tvWord, picture: true,
      describe: { zh: "電視裡有好看的卡通。", en: "There are fun cartoons on TV." } },
    { hanzi: "看", pinyin: "kàn", english: "to watch, to look", emoji: "👀", group: "🔑 Key Words", svg: ART.look, picture: true,
      describe: { zh: "我用眼睛看。", en: "I look with my eyes." } },
    { hanzi: "幫", pinyin: "bāng", english: "to help", emoji: "🤝", group: "🔑 Key Words", svg: ART.helpWord, picture: true,
      describe: { zh: "我幫你搬箱子。", en: "I help you carry the box." } },
    { hanzi: "離開", pinyin: "líkāi", english: "to leave (the table), to be excused", emoji: "🚪", group: "🔑 Key Words", svg: ART.leave, picture: true,
      describe: { zh: "吃飽了，我離開餐桌。", en: "I am full, so I leave the table." } },
    { hanzi: "喝", pinyin: "hē", english: "to drink", emoji: "🥤", group: "🔑 Key Words", svg: ART.drink, picture: true,
      describe: { zh: "我用杯子喝水。", en: "I drink water from a cup." } },
    { hanzi: "水", pinyin: "shuǐ", english: "water", emoji: "💧", group: "🔑 Key Words", svg: ART.waterWord, picture: true,
      describe: { zh: "水是涼涼的。", en: "Water is cool." } },
    { hanzi: "抱抱", pinyin: "bàobào", english: "a hug", emoji: "🤗", group: "🔑 Key Words", svg: ART.hugWord, picture: true,
      describe: { zh: "媽媽抱抱我，我好開心。", en: "Mom hugs me and I am so happy." } }
  ].concat(GUIDE),

  sentencePatterns: [
    { hanzi: "我可以……嗎？", pinyin: "Wǒ kěyǐ ... ma?", english: "Can I ... ? (asking permission)" },
    { hanzi: "你可以……嗎？", pinyin: "Nǐ kěyǐ ... ma?", english: "Can you ... ? (asking someone to do something)" },
    { hanzi: "可以。", pinyin: "Kěyǐ.", english: "Yes, you can." },
    { hanzi: "不可以。", pinyin: "Bù kěyǐ.", english: "No, you can't." },
    { hanzi: "請……", pinyin: "Qǐng ...", english: "Please ... (add it to be polite)" }
  ].concat([
    { hanzi: "我要……。", pinyin: "Wǒ yào ...", english: "I want ...  (我要吃, 我要喝水)" },
    { hanzi: "我……了。", pinyin: "Wǒ ... le.", english: "I am ... (right now)  (我餓了, 我渴了, 我累了, 我飽了)" },
    { hanzi: "太……了！", pinyin: "Tài ... le!", english: "Too ... !  (太熱了！太冷了！)" },
    { hanzi: "洗……", pinyin: "Xǐ ...", english: "Wash ...  (洗手, 洗臉, 洗頭髮)" },
    { hanzi: "穿……", pinyin: "Chuān ...", english: "Put on ...  (穿衣服, 穿鞋子, 穿睡衣)" },
    { hanzi: "輪到……了。", pinyin: "Lún dào ... le.", english: "It's ...'s turn.  (輪到我了, 輪到你了)" },
    { hanzi: "……吧！", pinyin: "... ba!", english: "Let's ... !  (我們一起玩吧！我們去上學吧！)" }
  ]),

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
    },
    {
      title: "上學 Going to school",
      titleEnglish: "A morning at home",
      lines: [
        { speaker: "媽媽 Mom", hanzi: "起床了！穿衣服，穿鞋子。", pinyin: "Qǐ chuáng le! Chuān yī fu, chuān xié zi.", english: "Wake up! Put on your clothes and your shoes." },
        { speaker: "小朋友 Child", hanzi: "我餓了。", pinyin: "Wǒ è le.", english: "I'm hungry." },
        { speaker: "媽媽 Mom", hanzi: "我們去上學吧！準備好了嗎？", pinyin: "Wǒ men qù shàng xué ba! Zhǔn bèi hǎo le ma?", english: "Let's go to school! Are you ready?" },
        { speaker: "小朋友 Child", hanzi: "我準備好了！", pinyin: "Wǒ zhǔn bèi hǎo le!", english: "I'm ready!" },
        { speaker: "媽媽 Mom", hanzi: "上車。", pinyin: "Shàng chē.", english: "Get in the car." },
        { speaker: "小朋友 Child", hanzi: "媽媽再見！", pinyin: "Mā ma zài jiàn!", english: "Bye-bye, Mom!" },
        { speaker: "媽媽 Mom", hanzi: "玩得開心！待會兒見！", pinyin: "Wán de kāi xīn! Dāi huì r jiàn!", english: "Have fun! See you later!" }
      ]
    },
    {
      title: "洗澡 Shower time",
      titleEnglish: "Washing up",
      lines: [
        { speaker: "媽媽 Mom", hanzi: "洗澡了！脫衣服。", pinyin: "Xǐ zǎo le! Tuō yī fu.", english: "Shower time! Take off your clothes." },
        { speaker: "小朋友 Child", hanzi: "太熱了！", pinyin: "Tài rè le!", english: "Too hot!" },
        { speaker: "媽媽 Mom", hanzi: "閉上眼睛！洗頭髮。", pinyin: "Bì shàng yǎn jing! Xǐ tóu fa.", english: "Close your eyes! Wash your hair." },
        { speaker: "小朋友 Child", hanzi: "洗乾淨了！", pinyin: "Xǐ gān jìng le!", english: "All clean!" },
        { speaker: "媽媽 Mom", hanzi: "關水。毛巾。穿睡衣。", pinyin: "Guān shuǐ. Máo jīn. Chuān shuì yī.", english: "Turn off the water. Here's your towel. Put on your pajamas." }
      ]
    },
    {
      title: "睡覺 Bedtime",
      titleEnglish: "Going to bed",
      lines: [
        { speaker: "媽媽 Mom", hanzi: "睡覺了！刷牙。", pinyin: "Shuì jiào le! Shuā yá.", english: "Time for bed! Brush your teeth." },
        { speaker: "小朋友 Child", hanzi: "我累了。", pinyin: "Wǒ lèi le.", english: "I'm tired." },
        { speaker: "媽媽 Mom", hanzi: "講故事。", pinyin: "Jiǎng gù shi.", english: "Let's read a story." },
        { speaker: "小朋友 Child", hanzi: "我愛你！", pinyin: "Wǒ ài nǐ!", english: "I love you!" },
        { speaker: "媽媽 Mom", hanzi: "晚安，做個好夢！", pinyin: "Wǎn ān, zuò gè hǎo mèng!", english: "Goodnight, sweet dreams!" }
      ]
    }
  ],

  actions: [
    { hanzi: "我可以看電視嗎？", pinyin: "Wǒ kěyǐ kàn diànshì ma?", english: "Can I watch TV?", emoji: "📺" },
    { hanzi: "你可以幫我嗎？", pinyin: "Nǐ kěyǐ bāng wǒ ma?", english: "Can you help me?", emoji: "🤝" },
    { hanzi: "我可以離開嗎？", pinyin: "Wǒ kěyǐ líkāi ma?", english: "Can I be excused?", emoji: "🚪" },
    { hanzi: "我可以喝水嗎？", pinyin: "Wǒ kěyǐ hē shuǐ ma?", english: "Can I have water?", emoji: "💧" },
    { hanzi: "我可以抱抱嗎？", pinyin: "Wǒ kěyǐ bàobào ma?", english: "Can I have a hug?", emoji: "🤗" }
  ].concat([
    { hanzi: "洗手", pinyin: "Xǐ shǒu", english: "Wash hands", emoji: "🧼" },
    { hanzi: "穿鞋子", pinyin: "Chuān xié zi", english: "Put on shoes", emoji: "👟" },
    { hanzi: "穿衣服", pinyin: "Chuān yī fu", english: "Put on clothes", emoji: "👕" },
    { hanzi: "上車", pinyin: "Shàng chē", english: "Get in the car", emoji: "🚗" },
    { hanzi: "收拾玩具", pinyin: "Shōu shi wán jù", english: "Clean up the toys", emoji: "🧹" },
    { hanzi: "關水", pinyin: "Guān shuǐ", english: "Turn off the water", emoji: "🚱" },
    { hanzi: "刷牙", pinyin: "Shuā yá", english: "Brush teeth", emoji: "🦷" },
    { hanzi: "睡覺了", pinyin: "Shuì jiào le", english: "Time for bed", emoji: "🛏️" }
  ]),

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
    },
    {
      type: "read-aloud",
      title: "念一念：Read the Daily Phrases Aloud",
      instructions: "Tap each phrase and say it out loud.",
      items: ["起床了！", "我們去上學吧！", "我準備好了！", "洗手", "洗澡", "太熱了！", "刷牙", "睡覺了", "晚安", "做個好夢"]
    },
    {
      type: "match-emoji",
      title: "配對：Match the Daily Routine",
      instructions: "Match each phrase to the picture that goes with it.",
      items: [
        { hanzi: "洗手", pinyin: "Xǐ shǒu", emoji: "🧼" },
        { hanzi: "刷牙", pinyin: "Shuā yá", emoji: "🦷" },
        { hanzi: "穿鞋子", pinyin: "Chuān xié zi", emoji: "👟" },
        { hanzi: "上車", pinyin: "Shàng chē", emoji: "🚗" },
        { hanzi: "睡覺了", pinyin: "Shuì jiào le", emoji: "🛏️" },
        { hanzi: "書包", pinyin: "Shū bāo", emoji: "🎒" }
      ]
    },
    {
      type: "listen-pick",
      title: "聽一聽：Listen and Pick the Routine",
      instructions: "Tap ▶ Listen, then choose the picture that matches what you hear.",
      items: [
        { say: "洗手", answer: 0, options: [{ emoji: "🧼", label: "Washing hands" }, { emoji: "🛏️", label: "Going to bed" }] },
        { say: "刷牙", answer: 1, options: [{ emoji: "🍚", label: "Eating" }, { emoji: "🦷", label: "Brushing teeth" }] },
        { say: "我們去上學吧！", answer: 0, options: [{ emoji: "🏫", label: "Going to school" }, { emoji: "🛁", label: "Shower time" }] },
        { say: "睡覺了", answer: 1, options: [{ emoji: "🎮", label: "Playing" }, { emoji: "🛏️", label: "Going to bed" }] },
        { say: "好吃！", answer: 0, options: [{ emoji: "😋", label: "Yummy!" }, { emoji: "😴", label: "Tired" }] }
      ]
    },
    {
      type: "fill-blank",
      title: "填一填：Action Words (洗 · 穿 · 刷 · 開)",
      instructions: "Tap 🔊 to hear the phrase, then choose the missing action word: 洗 wash, 穿 put on, 刷 brush, 開 turn on.",
      wordBank: ["洗", "穿", "刷", "開"],
      items: [
        { before: "", after: "手", say: "洗手", answer: "洗", pinyinHint: "___ shǒu (wash hands)" },
        { before: "", after: "衣服", say: "穿衣服", answer: "穿", pinyinHint: "___ yī fu (put on clothes)" },
        { before: "", after: "牙", say: "刷牙", answer: "刷", pinyinHint: "___ yá (brush teeth)" },
        { before: "", after: "水", say: "開水", answer: "開", pinyinHint: "___ shuǐ (turn on the water)" },
        { before: "", after: "臉", say: "洗臉", answer: "洗", pinyinHint: "___ liǎn (wash face)" },
        { before: "", after: "鞋子", say: "穿鞋子", answer: "穿", pinyinHint: "___ xié zi (put on shoes)" }
      ]
    },
    {
      type: "fill-blank",
      title: "填一填：How I Feel (我……了)",
      instructions: "Tap 🔊 to hear it, then choose the missing word.",
      wordBank: ["餓", "渴", "累", "飽"],
      items: [
        { before: "我", after: "了", say: "我餓了", answer: "餓", pinyinHint: "Wǒ ___ le (I'm hungry)" },
        { before: "我", after: "了", say: "我渴了", answer: "渴", pinyinHint: "Wǒ ___ le (I'm thirsty)" },
        { before: "我", after: "了", say: "我累了", answer: "累", pinyinHint: "Wǒ ___ le (I'm tired)" },
        { before: "我", after: "了", say: "我飽了", answer: "飽", pinyinHint: "Wǒ ___ le (I'm full)" }
      ]
    }
  ],

  culture: {
    title: "怎麼有禮貌地問 Asking politely + practice tips",
    englishText: "To ask permission in Mandarin, start with 我可以……嗎？ (Can I ... ?). To ask someone to do something for you, use 你可以……嗎？ (Can you ... ?). The answer is 可以 (yes, you may) or 不可以 (no). Adding 請 (qǐng, please) makes it even more polite, and don't forget to say 謝謝 (thank you) afterwards! At the table, children often ask 我可以離開嗎？ (Can I be excused?) before getting down — a polite habit in many families.\n\nThe rest of this chapter comes from the “Everyday Mandarin Phrases for Kids” guide (for ages 4 and 6): greetings and manners, asking for help, food and drink, playtime, the morning routine, shower time and bedtime. The “Sounds like” line under each phrase is an English-style hint to help parents say it — the recording is the best guide. Quick practice tips: (1) Use the “password” game — pick one phrase a day as the password to unlock a snack, open a door or start a game. (2) Let the 6-year-old be the teacher: they say the phrase first so the 4-year-old can copy. (3) Spot the action words, like 洗 (xǐ, wash) at shower time and 穿 (chuān, put on) while getting dressed. (4) Focus on 2–3 phrases a week — master one routine before adding more. Note: the guide is written in Simplified characters; here they are shown in the Traditional characters used in class."
  }
});
})();
