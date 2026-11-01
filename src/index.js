(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  } else {
    root.Emoji2Emoticon = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // Western/sideways text emoticons. These are curated equivalents, not
  // literal translations; emoji without a useful text equivalent stay intact.
  const emojiMap = Object.freeze({
    // Happy, smiling and laughing
    '😀': ':D', '😃': ':D', '😄': ':D', '😁': ':D', '😆': 'xD',
    '😂': ":'D", '🤣': "x'D", '🙂': ':)', '😊': ':)', '☺': ':)',
    '☺️': ':)', '☺︎': ':)', '😅': ":')", '🥲': ":')", '🥹': ":')",
    '😌': ':)', '🙃': '(:', '😉': ';)', '🥳': ':D', '🤠': ':D',
    '🙂🌸': ':)✿',
    '🤓': 'B)', '🥸': '8-)', '🫠': ':S', '🫨': 'O_O', '😔': ':(',

    // Affection, kisses and playful faces
    '😍': '<3', '🥰': '<3', '😘': ':-*', '😗': ':*', '😙': ':*',
    '😚': ':*', '😻': '<3', '💋': ':-*', '😋': ':P', '😛': ':P',
    '😼': '>:3', '😏': ':J',
    '😜': ';P', '🤪': ':P', '😝': 'xP', '🤑': ':$', '🤤': ':p', '😹': "x'D",
    '😸': ':D', '😽': ':*',

    // Neutral, skeptical, embarrassed and surprised
    '🤗': ':>', '🤭': ':$', '🤫': ':X', '🤐': ':-X', '🤔': ':thinking:',
    '🤨': "',:-|", '😐': ':|', '😑': ':|', '😶': ':X',
    '😶‍🌫️': ':X', '😒': ':J', '🙄': '-_-', '😬': ':E',
    '😮': ':O', '😯': ':O', '😲': ':O', '😳': ':$', '🫣': ':$',
    '🫢': ':O', '🫡': 'o7', '😕': ':/', '🫤': ':/', '🤥': ':|',
    '🧐': ':|', '😷': ':###..', '🥵': ':S', '🥶': ':S',

    // Sad, troubled, worried, crying and shocked
    '🥺': ':(', '😦': 'D:', '😧': 'D:', '😨': 'D:', '😰': 'D:',
    '😥': ":'(", '😢': ":'(", '😭': ":'(", '😱': 'D:',
    '😖': ':(', '😣': ':(', '😞': ':(', '😟': ':(', '😓': ":'(",
    '😩': 'D:', '😫': 'D:', '☹': ':(', '☹️': ':(', '🙁': ':(',

    // Angry, mischievous, sick, tired and dizzy
    '😤': '>:(', '😡': '>:(', '😠': '>:(', '🤬': '>:(',
    '😈': '}:)', '👿': '>:)', '🤢': ':###..', '🤮': ':###..',
    '🤧': ':###..', '🤒': ':###..', '🤕': '(::[]::)', '🥱': '-_-',
    '😴': '-_-', '😪': 'B-)', '😵': 'x_x', '😵‍💫': 'x_x',
    '😺': ':3', '🐱': ':3', '😾': '>:(', '🙀': 'D:', '😿': ":'(",
    '🤯': 'O_O', '🥴': '%)', '😎': 'B)', '😇': 'O:)', '🤡': ':o)',
    '👻': ':o)', '💀': '8-X', '☠': '8-X', '☠️': '8-X',
    '🤖': ':|', '👽': '(-.-)', '👾': '>:)', '💩': ':poop:',
    '🙈': ':-$', '🙉': ':X', '🙊': ':X',

    // Western-style emoticon groupings from the reference list
    '👼': 'O:)', '🎅': '*<|:-)', '🌹': '@};-', '🌸': '✿',
    '🐟': '><>', '🐠': '><>', '🐡': '>°)))彡', '🦈': '(^^^)',
    '🐔': '~:>', '🐓': '~:>', '🐍': '~>°)～～～',
    '🐬': '>°)))彡', '🐳': '>°)))彡', '🐋': '>°)))彡',
    '🦑': '<コ:彡', '🐙': 'Ｃ:.ミ', '🦇': '~:>',
    '🍆': '8====D', '🍌': '8====D', '🌭': '8====D', '👶': "(';')",
    '🐻': 'ʕ •ᴥ•ʔ', '🧸': 'ʕ •ᴥ•ʔ', '🐼': 'ʕ •ᴥ•ʔ',
    '🐻‍❄️': 'ʕ •ᴥ•ʔ', '🦀': 'V.v.V', '🦞': 'V.v.V',
    '🩹': '(::[]::)', '❤️‍🩹': '(::[]::)', '🏴‍☠️': '8-X',

    // Hearts and affection symbols
    '❤️': '<3', '❤': '<3', '♥': '<3', '♥️': '<3',
    '🧡': '<3', '💛': '<3', '💚': '<3', '💙': '<3',
    '💜': '<3', '🖤': '<3', '🤍': '<3', '🤎': '<3',
    '💔': '</3', '💕': '<3', '💞': '<3', '💓': '<3',
    '💗': '<3', '💖': '<3', '💘': '<3', '💝': '<3',
    '❣️': '<3', '❣': '<3', '💟': '<3',

    // Gestures and reactions
    '👋': 'o/', '🤚': 'o/', '✋': 'o/', '🖐️': 'o/', '🖐': 'o/',
    '🙌': '\\o/', '👏': '*clap*', '👍': '(y)', '👎': '(n)',
    '🙏': '^5', '🤝': '=)', '👌': 'OK', '✌️': ':peace:',
    '✌': ':peace:', '🤞': ':crossed-fingers:', '🤟': '<3',
    '🤘': '\\m/', '💪': '(ง •̀_•́)ง', '👊': '>:D', '✊': '>:D',
    '🤛': '>:D', '🤜': '>:D', '🫶': '<3', '🫰': '<3',
    '🍻': '\\o/', '🥂': '\\o/', '🫡': 'o7', '🖕': '(凸ಠ益ಠ)凸',
    '🙇': 'm(_ _)m', '🙍': '(..)', '🤦': '(－‸ლ)',
    '💃': 'ᕕ( ᐛ )ᕗ', '🕺': 'ᕕ( ᐛ )ᕗ', '🤷': '¯\\_(ツ)_/¯',
    '🫂': '(づ￣ ³￣)づ', '💣': '●～*', '🧨': '●～*',

    // Symbols and small pieces of text art
    '✅': '[OK]', '❌': '[X]', '☑️': '[OK]', '☑': '[OK]',
    '❗': '!', '❕': '!', '‼️': '!!', '‼': '!!', '⁉️': '?!',
    '⁉': '?!', '❓': '?', '❔': '?', '💯': '100%',
    '🔞': '[18+]', '♻️': '[recycle]', '♻': '[recycle]',
    '🎵': '[music]', '🎶': '[music]', '☕': '[coffee]', '☕️': '[coffee]',
    '⭐': '*', '🌟': '*', '💵': '[$]', '💸': '[$]',
    '🫧': '.o○○o.', '💤': 'zzz', '🎧': '((d[-_-]b))',
    '🚬': '(^.^)y-.o○', '✍️': '( ..)φ', '✍': '( ..)φ',
    '📝': '( ..)φ', '🍵': '( ^^)_U~~', '🌠': '☆彡',
    '☄️': '☆彡', '☄': '☆彡', '💫': '☆彡'
  });

  // Japanese-style upright faces and kaomoji. This map overrides only the
  // relevant Western entries; everything else keeps its Western equivalent.
  const kaomojiOverrides = Object.freeze({
    // Happy and laughing
    '😀': '(^_^)', '😃': '(^o^)', '😄': '(＾▽＾)', '😁': '(￣ー￣)',
    '😆': '(≧∇≦)', '😂': '(*^▽^*)', '🤣': '(≧▽≦)',
    '🙂': '(◕‿◕)', '😊': '(*^_^*)', '☺': '(*^_^*)',
    '☺️': '(*^_^*)', '😅': '(^_^;)', '🥲': '(;_;)',
    '🥹': '(ノ_<。)', '😌': 'UwU', '🙃': '(¬‿¬)',
    '😉': '(^_-)', '🥳': '＼(^o^)／', '🤠': '(＾▽＾)', '🤑': '(＄▽＄)',

    // Affection and playful expressions
    '😍': '(♡‿♡)', '🥰': '(๑˃ᴗ˂)ﻭ', '😘': '(๑ˇεˇ๑)',
    '😗': '(´ε｀ )', '😙': '(*^3^)/~☆', '😚': '(づ￣ ³￣)づ',
    '😋': '(^q^)', '😛': '(>ω<)', '😜': '(^_-)',
    '🤪': '(☞ﾟヮﾟ)☞', '😝': '(≧ڡ≦)', '🤤': '(￣￢￣)',
    '🤭': '^m^', '🤫': '(￣b￣)', '🤗': '(づ｡◕‿‿◕｡)づ',
    '🥺': '(｡•́︿•̀｡)',

    // Neutral, confused, embarrassed and surprised
    '🤔': '(・・?)', '🤨': '(¬_¬)', '🤐': '(￣x￣)', '😐': '(・_・)',
    '😑': '(ー_ー)', '😶': '(・_・)', '😶‍🌫️': '(・_・)',
    '😒': '(-_-)', '🙄': '(ー_ー)', '😬': '(^_^;)',
    '😮': '(°o°)', '😯': '(°_°)', '😲': '(￣□￣;)',
    '😳': '(⁄ ⁄•⁄ω⁄•⁄ ⁄)', '🫶': '(⁄ ⁄•⁄ω⁄•⁄ ⁄)',
    '🫢': '(⊙_⊙)', '😕': '(・・?)', '🫤': '(・へ・)',
    '😟': '(-_-;)', '🧐': '(p_-)', '🫡': '(｀･ω･´)ゞ',

    // Sadness, crying, fear and anger
    '😔': '(..)', '😞': '(._.)', '😢': '(T_T)', '😭': '(;_;)',
    '😥': '(^^;)', '😓': '(；一_一)', '😰': '(；一_一)',
    '😦': '(°_°)', '😧': '(°ロ°)', '😨': '((((；ﾟДﾟ)))',
    '😱': '(ﾟДﾟ)', '😖': '(>_<)', '😣': '(>_<)',
    '😩': '(=_=)', '😫': '(=_=)', '😤': '(｀´)',
    '😡': '(╬ಠ益ಠ)', '😠': '(＃ﾟДﾟ)', '🤬': 'ヽ(`Д´)ﾉ',
    '😈': '(｀∀´)', '😇': '☜(⌒▽⌒)☞', '👿': '(凸ಠ益ಠ)凸', '🤢': '(；´Д｀)',
    '🤮': '(×_×)', '🤧': '(* >ω<)', '🤒': '(x_x)',
    '🤕': '(::[]::)', '😷': 'm(_ _)m', '🥱': '(-_-)zzz',
    '😴': '(-_-)zzz', '😪': '(=_=)', '😵': '(+_+)',
    '😵‍💫': '(@_@)', '🥴': '(~_~)', '🤯': '＼(◎o◎)／！',

    // Cat faces, other faces and special references
    '😺': '(=^・^=)', '🐱': '=ʘᆽʘ=', '😸': '(^・ω・^)', '😹': '(^._.^)ﾉ',
    '😻': '(=♡ω♡=)', '😼': '(¬‿¬)', '😽': '(๑ˇεˇ๑)',
    '🙀': '(⊙_⊙)', '😿': '(T_T)', '😾': '(｀へ´)',
    '👻': '(¬‿¬)', '💀': '(x_x)', '☠️': '(x_x)', '🏴‍☠️': '(x_x)',
    '🤖': '(・_・)', '👽': '(o_O)', '🎅': '*<|:-)',
    '🙂🌸': '(◕‿◕✿)', '🤓': '(^0_0^)', '😎': '(^0_0^)',
    '🐟': '>°)))彡', '🐠': '<°)))彡', '🐔': '~:>', '🐓': '~:>',
    '🐍': '~>°)～～～', '🍆': '8====D', '🍌': '8====D', '🌭': '8====D',
    '🦀': 'V.v.V',
    '🦞': 'V.v.V', '🦈': '(^^^)', '🦇': '～°·_·°～', '🌸': '(◕‿◕✿)',
    '👶': "(';')", '🙇': 'm(_ _)m', '🙍': '(..)', '🤦': '(－‸ლ)',
    '💃': 'ᕕ( ᐛ )ᕗ', '🕺': 'ᕕ( ᐛ )ᕗ', '🤷': '¯\\_(ツ)_/¯',
    '🫂': '(づ￣ ³￣)づ', '💣': '●～*', '🧨': '●～*', '❤️‍🩹': '(::[]::)',
    '☕️': '( ^^)_U~~', '☕': '( ^^)_U~~', '🙌': '＼(^o^)／', '✌️': '(^^)v',
    '🐻': 'ʕ •ᴥ•ʔ', '🧸': 'ʕ •ᴥ•ʔ', '🐼': 'ʕ •ᴥ•ʔ',
    '🐻‍❄️': 'ʕ •ᴥ•ʔ', '🌹': '@};-', '🩹': '(::[]::)',

    // Gestures, movement and activities
    '👋': '(^_^)/~~~', '🤚': '(^_^)/', '✋': '(^^)/',
    '🙌': '＼(^o^)／', '👏': '(ﾉ´ヮ`)ﾉ*: ･ﾟ',
    '🙏': 'm(__)m', '💪': '(ง •̀_•́)ง', '🖕': '(凸ಠ益ಠ)凸',
    '🫂': '(づ｡◕‿‿◕｡)づ', '💃': 'ᕕ( ᐛ )ᕗ',
    '🕺': 'ᕕ( ᐛ )ᕗ', '🤷': '¯\\_(ツ)_/¯',
    '🚬': '(^.^)y-.o○', '🎧': '((d[-_-]b))',
    '✍️': '( ..)φ', '✍': '( ..)φ', '📝': '( ..)φ',
    '☕': '( ^^)_U~~', '🍵': '( ^^)_U~~',
    '🫧': '.o○○o.', '⭐': '☆彡', '🌟': '☆彡',
    '🌠': '☆彡', '☄️': '☆彡', '💫': '☆彡'
  });

  const kaomojiMap = Object.freeze(Object.assign({}, emojiMap, kaomojiOverrides));

  const skinToneKeys = new Set([
    '👋', '🤚', '✋', '🖐', '👍', '👎', '👏', '🙏', '🤝',
    '👌', '🤞', '🤟', '🤘', '💪', '👊', '✊', '🤛', '🤜',
    '🙌', '🫶', '🫰', '🖕'
  ]);

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function getBaseMap(style) {
    return style === 'kaomoji' || style === 'eastern' ? kaomojiMap : emojiMap;
  }

  function getActiveMap(options) {
    const settings = options || {};
    const base = getBaseMap(settings.style);
    return settings.map && typeof settings.map === 'object'
      ? Object.assign({}, base, settings.map)
      : base;
  }

  function buildPattern(map) {
    const keys = Object.keys(map).sort(function (a, b) {
      return b.length - a.length;
    });
    const alternatives = keys.map(function (key) {
      const escaped = escapeRegExp(key);
      const hasVariationSelector = key.indexOf('\uFE0F') !== -1 || key.indexOf('\uFE0E') !== -1;
      const presentation = hasVariationSelector ? '' : '[\\uFE0E\\uFE0F]?';
      const skinTone = skinToneKeys.has(key) ? '[\\u{1F3FB}-\\u{1F3FF}]?' : '';
      return escaped + presentation + skinTone;
    });
    return alternatives.length ? new RegExp(alternatives.join('|'), 'gu') : null;
  }

  function lookupReplacement(match, map) {
    if (Object.prototype.hasOwnProperty.call(map, match)) return map[match];
    const base = match
      .replace(/[\u{1F3FB}-\u{1F3FF}]/gu, '')
      .replace(/[\uFE0E\uFE0F]/gu, '');
    return Object.prototype.hasOwnProperty.call(map, base) ? map[base] : match;
  }

  /** Convert supported emoji in a text string to emoticons. */
  function checkText(text, options) {
    if (text === null || text === undefined) return '';
    const input = String(text);
    const map = getActiveMap(options);
    const pattern = buildPattern(map);
    if (!pattern) return input;
    return input.replace(pattern, function (match) {
      return lookupReplacement(match, map);
    });
  }

  /** Return the converted string and number of emoji mappings applied. */
  function getConversionStats(text, options) {
    if (text === null || text === undefined) {
      return { output: '', convertedCount: 0 };
    }
    const input = String(text);
    const map = getActiveMap(options);
    const pattern = buildPattern(map);
    const matches = pattern ? Array.from(input.matchAll(pattern)) : [];
    return {
      output: checkText(input, options),
      convertedCount: matches.filter(function (item) {
        return lookupReplacement(item[0], map) !== item[0];
      }).length
    };
  }

  function checkTextWithAutoSuggestions(text, options) {
    return checkText(text, options);
  }

  function checkTextWithAutoSuggestionsAndUnicode(text, options) {
    return checkText(text, options);
  }

  /** Convert a Unicode code point or hyphen-separated sequence to an emoticon. */
  function fromUnicodeToEmoticon(value, options) {
    if (value === null || value === undefined) return '';
    const input = String(value).trim();
    const map = getActiveMap(options);
    if (Object.prototype.hasOwnProperty.call(map, input)) return map[input];

    const cleaned = input.replace(/^U\+/i, '').replace(/^0x/i, '');
    const parts = cleaned.split(/[-\s]+/).filter(Boolean);
    if (!parts.length || parts.some(function (part) {
      return !/^[0-9a-f]{1,6}$/i.test(part);
    })) return input;

    try {
      const emoji = String.fromCodePoint.apply(null, parts.map(function (part) {
        return parseInt(part, 16);
      }));
      const converted = lookupReplacement(emoji, map);
      return converted === emoji ? input : converted;
    } catch (error) {
      return input;
    }
  }

  function getEmoticon(emoji, style) {
    const map = getBaseMap(style);
    return Object.prototype.hasOwnProperty.call(map, emoji) ? map[emoji] : undefined;
  }

  function createUnicodeMap(map) {
    return Object.freeze(Object.keys(map).reduce(function (result, emoji) {
      const code = Array.from(emoji).map(function (character) {
        return character.codePointAt(0).toString(16).toUpperCase();
      }).join('-');
      result[code] = map[emoji];
      return result;
    }, {}));
  }

  /** Return every built-in example input, including supported skin-tone forms. */
  function getSupportedEmoji(style) {
    const map = getBaseMap(style);
    const result = Object.keys(map);
    const seen = new Set(result);
    const tones = ['🏻', '🏼', '🏽', '🏾', '🏿'];

    skinToneKeys.forEach(function (baseEmoji) {
      if (!Object.prototype.hasOwnProperty.call(map, baseEmoji)) return;
      tones.forEach(function (tone) {
        const variant = baseEmoji + tone;
        if (!seen.has(variant)) {
          seen.add(variant);
          result.push(variant);
        }
      });
    });

    return Object.freeze(result);
  }

  const unicodeMap = createUnicodeMap(emojiMap);
  const kaomojiUnicodeMap = createUnicodeMap(kaomojiMap);

  return Object.freeze({
    checkText: checkText,
    checkTextWithAutoSuggestions: checkTextWithAutoSuggestions,
    checkTextWithAutoSuggestionsAndUnicode: checkTextWithAutoSuggestionsAndUnicode,
    fromUnicodeToEmoticon: fromUnicodeToEmoticon,
    convertEmojiToEmoticons: checkText,
    getEmoticon: getEmoticon,
    getConversionStats: getConversionStats,
    getSupportedEmoji: getSupportedEmoji,
    emojiMap: emojiMap,
    kaomojiMap: kaomojiMap,
    mapUnicodeToEmoticon: unicodeMap,
    mapUnicodeToEmoticonKaomoji: kaomojiUnicodeMap
  });
});
