/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/



// function whereIBelong(arr, num) {
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) return i;
//   }
//   return arr.length;
// }

// function whereIBelong(arr, num) {
//   let counter = 0;
//   for (let n of arr) {
//     if (num > n) counter++;
//   }
//   return counter;
// }

// function whereIBelong(arr, num) {
//   arr.sort((a, b) => a - b);
//   let counter = 0;
//   while (num > arr[counter]) counter++;
//   return counter;
// }

// function whereIBelong(arr, num) {
//   arr.push(num);
//   arr.sort((a, b) => a - b);
//   return arr.indexOf(num);
// }

// const whereIBelong = (arr, num) => arr.filter(n => n < num).length;

const whereIBelong = (arr, num) => arr.reduce((acc, c) => c < num ? acc + 1 : acc, 0);

console.log(whereIBelong([1, 2, 3, 4], 1.5), 1);

module.exports = whereIBelong