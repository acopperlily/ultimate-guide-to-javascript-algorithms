/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




// function palindromeChecker(text) {
//   const reversedText = text.toLowerCase().split('').reverse().join('');
//   return text.toLowerCase() === reversedText;
// }

// function palindromeChecker(text) {
//   let charArray = text.toLowerCase().split('');
//   let result = charArray.every((letter, index) => letter === charArray[charArray.length - index - 1]);
//   return result;
// }

function palindromeChecker(text) {
  text = text.toLowerCase();
  let len = text.length;
  for (let i = 0; i < len / 2; i++) {
    if (text[i] !== text[len - i - 1])
      return false;
  }
  return true;
}

module.exports = palindromeChecker;