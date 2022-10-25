const pigLatin = require('./index-START');

test('pigLatin is a function', () => {
  expect(typeof pigLatin).toEqual('function');
});

test('for words that begin with a consonant', () => {
  expect(pigLatin('pig')).toEqual('igpay');
});

test('for words that begin with a consonant cluster', () => {
  expect(pigLatin('glove')).toEqual('oveglay');
});

test('for words that begin with a vowel', () => {
  expect(pigLatin('explain')).toEqual('explainway');
});