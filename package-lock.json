export type EmoticonStyle = 'western' | 'kaomoji' | 'eastern';

export interface ConvertOptions {
  style?: EmoticonStyle;
  map?: Record<string, string>;
}
export interface ConversionStats {
  output: string;
  convertedCount: number;
}
export declare const emojiMap: Readonly<Record<string, string>>;
export declare const kaomojiMap: Readonly<Record<string, string>>;
export declare const mapUnicodeToEmoticon: Readonly<Record<string, string>>;
export declare const mapUnicodeToEmoticonKaomoji: Readonly<Record<string, string>>;
export declare function checkText(text: string, options?: ConvertOptions): string;
export declare function checkTextWithAutoSuggestions(text: string, options?: ConvertOptions): string;
export declare function checkTextWithAutoSuggestionsAndUnicode(text: string, options?: ConvertOptions): string;
export declare function fromUnicodeToEmoticon(value: string | number, options?: ConvertOptions): string;
export declare function convertEmojiToEmoticons(text: string, options?: ConvertOptions): string;
export declare function getEmoticon(emoji: string, style?: EmoticonStyle): string | undefined;
export declare function getConversionStats(text: string, options?: ConvertOptions): ConversionStats;
export declare function getSupportedEmoji(style?: EmoticonStyle): readonly string[];

declare const api: {
  checkText: typeof checkText;
  checkTextWithAutoSuggestions: typeof checkTextWithAutoSuggestions;
  checkTextWithAutoSuggestionsAndUnicode: typeof checkTextWithAutoSuggestionsAndUnicode;
  fromUnicodeToEmoticon: typeof fromUnicodeToEmoticon;
  convertEmojiToEmoticons: typeof convertEmojiToEmoticons;
  getEmoticon: typeof getEmoticon;
  getConversionStats: typeof getConversionStats;
  getSupportedEmoji: typeof getSupportedEmoji;
  emojiMap: typeof emojiMap;
  kaomojiMap: typeof kaomojiMap;
  mapUnicodeToEmoticon: typeof mapUnicodeToEmoticon;
  mapUnicodeToEmoticonKaomoji: typeof mapUnicodeToEmoticonKaomoji;
};
export default api;
