/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const Vowels = ['a', 'e', 'i', 'o', 'u'];

// function vowelsCounter(text) {
//   let counter = 0;
//   for (let letter of text.toLowerCase()) {
//     if (Vowels.includes(letter)) counter++;
//   }
//   return counter;
// }

// const vowelsCounter = text => [...text.toLowerCase()].filter(char => Vowels.includes(char)).length;

function vowelsCounter(text) {
  let matchingInstances = text.match(/[aeiou]/gi);
  return matchingInstances.length;
}

module.exports = vowelsCounter;
