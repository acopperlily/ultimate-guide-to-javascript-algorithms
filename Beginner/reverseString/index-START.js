/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// function reverseString(text) {
//   return text.split('').reverse().join('');
// }

// const reverseString = text => [...text].reverse().join('');

// function reverseString(text) {
//   let result = '';
//   for (let i = text.length - 1; i >= 0; i--)
//     result += text[i];
//   return result;
// }

// const reverseString = text => {
//   let result = '';
//   for (let char of text)
//     result = char + result;
//   return result;
// };

// function reverseString(text) {
//   if (text === '') return '';
//   return reverseString(text.substr(1)) + text[0];
// }

// const reverseString = text => text === '' ? '' : reverseString(text.slice(1)) + text[0];

// function reverseString(text) {
//   return text.split('').reduce((acc, char) => char + acc, '');
// }

const reverseString = text => [...text].reduce((acc, c) => c + acc, '');

module.exports = reverseString;
