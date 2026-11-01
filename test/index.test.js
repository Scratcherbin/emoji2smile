const test=require('node:test');const assert=require('node:assert/strict');const api=require('../src/index.js');
test('converts emoji and preserves text',()=>assert.equal(api.checkText('Hello 😊 ❤️'),'Hello :) <3'));
test('supports kaomoji style',()=>assert.equal(api.checkText('😀',{style:'kaomoji'}),'(^_^)'));
test('supports unicode input',()=>assert.equal(api.fromUnicodeToEmoticon('1F602'),":'D"));
test('lists every supported example and converts it',()=>{const all=api.getSupportedEmoji();assert.equal(all.length,364);for(const e of all){assert.equal(api.getConversionStats(e).convertedCount,1);assert.equal(api.getConversionStats(e,{style:'kaomoji'}).convertedCount,1);}});
test('keeps unsupported emoji unchanged',()=>assert.equal(api.checkText('🧿'),'🧿'));
