# Emoji2Smile

Version 1.2.2

A dependency-free JavaScript library and offline browser demo that converts emoji characters into text emoticons. It works in the opposite direction to the original [smile2emoji](https://github.com/emish89/smile2emoji) project.

```text
Hello 😊! That made me 😂. I love it ❤️
       ↓
Hello :)! That made me :'D. I love it <3
```

## Features

- Western keyboard emoticons and Japanese-style kaomoji.
- 254 mapped emoji/symbol forms plus supported skin-tone variants.
- Searchable “Try an example” picker with 364 selectable examples.
- Unicode code-point conversion.
- Custom mappings and conversion statistics.
- Offline browser demo; no API, server, or external dependencies.

## Browser demo

Open `demo/index.html` in a browser. It loads the library and UI controller from local files. The root `index.html` redirects to the demo.

## Install locally

```bash
npm install ../emoji2smile
```

## Usage

### ES modules

```js
import { checkText, fromUnicodeToEmoticon } from 'emoji2smile';

console.log(checkText('Good morning 😊')); // Good morning :)
console.log(checkText('I love it ❤️'));    // I love it <3
console.log(fromUnicodeToEmoticon('1F602')); // :'D
```

### Choose a style

Western ASCII-style output is the default:

```js
checkText('😀 😂 😭 👋');
// :D :'D :'( o/
```

Select Japanese-style kaomoji:

```js
checkText('😀 😂 😭 👋', { style: 'kaomoji' });
// (^_^) (*^▽^*) (;_;) (^_^)/~~~
```

`style: 'eastern'` is also accepted as an alias for `kaomoji`.

### CommonJS

```js
const { checkText } = require('emoji2smile');
console.log(checkText('That is hilarious 😂'));
```

## API

- `checkText(text, options?)`
- `convertEmojiToEmoticons(text, options?)`
- `checkTextWithAutoSuggestions(text, options?)`
- `checkTextWithAutoSuggestionsAndUnicode(text, options?)`
- `fromUnicodeToEmoticon(value, options?)`
- `getEmoticon(emoji, style?)`
- `getConversionStats(text, options?)`
- `getSupportedEmoji(style?)`
- `emojiMap`, `kaomojiMap`, `mapUnicodeToEmoticon`, `mapUnicodeToEmoticonKaomoji`

## Wikipedia mapping notes

The mappings were checked against the emoji-paired Western, Eastern, and other Eastern tables in [Wikipedia's List of emoticons](https://en.wikipedia.org/wiki/List_of_emoticons). The mappings are curated approximations, not literal translations. The 2channel section has no paired emoji column, and the Unicode section is a character chart, so those sections do not provide direct reverse mappings.

## Relationship and attribution

This repository is a reverse-direction fork/adaptation of [emish89/smile2emoji](https://github.com/emish89/smile2emoji). The original project converts text emoticons into emoji; this project converts emoji into text emoticons. The original MIT license and copyright attribution are retained in `LICENSE`. The reverse-conversion implementation, expanded mappings, tests, and browser demo are modifications made for this fork. This project is not affiliated with the original maintainer.

## Tests

```bash
npm test
```

## License

MIT. See [LICENSE](LICENSE).
