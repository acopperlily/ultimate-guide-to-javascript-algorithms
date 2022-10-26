// function chunkArray(arr, size) {
//   let result = [];
//   for (let value of arr) {
//     let lastArray = result[result.length - 1];
//     if (!lastArray || lastArray.length === size) {
//       result.push([value]);
//     } else {
//       lastArray.push(value);
//     }
//   }
//   return result;
// }

// function chunkArray(arr, size) {
//   let result = [];
//   let arrCopy = [...arr];
//   while (arrCopy.length > 0) {
//     result.push(arrCopy.splice(0, size));
//   }
//   return result;
// }

// function chunkArray(arr, size) {
//   let result = [];
//   for (let i = 0; i < arr.length; i += size) {
//     let chunk = arr.slice(i, i + size);
//     result.push(chunk);
//   }
//   return result;
// }

function chunkArray(arr, size) {
  if (arr.length <= size) return [arr];
  return [arr.slice(0, size), ...chunkArray(arr.slice(size), size)];
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));


module.exports = chunkArray