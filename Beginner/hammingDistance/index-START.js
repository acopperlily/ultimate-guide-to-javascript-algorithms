/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




// function hammingDistance(stringA, stringB) {
//   let result = 0;
//   if (stringA.length == stringB.length) {
//     for (let i = 0; i < stringA.length; i++) {
//       if (stringA[i].toLowerCase() != stringB[i].toLowerCase())
//         result++;
//     }
//     return result;
//   } else {
//     throw new Error('Strings do not have equal length');
//   }
// }

function hammingDistance(stringA, stringB) {
  if (stringA.length !== stringB.length)
    throw new Error('Strings do not have equal length');
  
  let result = 0;
  for (let i = 0; i < stringA.length; i++) {
    if (stringA[i].toLowerCase() !== stringB[i].toLowerCase())
      result++;
  }
  return result;
}

// console.log(hammingDistance('drummer', 'dresser'));
// console.log(hammingDistance('cat', 'chat'));

module.exports = hammingDistance