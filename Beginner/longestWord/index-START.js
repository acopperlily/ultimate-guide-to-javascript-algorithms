/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



// function longestWord(text) {
//   const wordArray = text.split(' ');
//   let maxLength = 0;
//   let result = '';

//   for (let i = 0; i < wordArray.length; i++) {
//     if (wordArray[i].length > maxLength) {
//       maxLength = wordArray[i].length;
//       result = wordArray[i];
//     }
//   }
//   return result;
// }

// function longestWord(text) {
//   const wordArray = text.split(' ');
//   let result = '';

//   for (let word of wordArray) {
//     if (word.length > result.length)
//       result = word;
//   }
//   return result;
// }

// function longestWord(text) {
//   let result = text.split(' ').reduce((maxLengthWord, currentWord) => {
//     if (currentWord.length > maxLengthWord.length) {
//       return currentWord;
//     } else {
//       return maxLengthWord;
//     }
//   }, '');
//   return result;
// }

// const longestWord = text => text.split(' ').reduce((maxLengthWord, currentWord) => currentWord.length > maxLengthWord.length ? currentWord : maxLengthWord, '');

// function longestWord(text) {
//   const sortedArray = text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length);
//   return sortedArray[0];
// }

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord('Top Shelf Web Development Training on Scotch'));

module.exports = longestWord