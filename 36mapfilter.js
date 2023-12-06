/*
Filter Method:
  Syntax: array.filter((value, index) => return true/false);
  Use: Filter elements based on a condition.

Map Method:
  Syntax: array.map((value) => return newValue);
  Use: Transform each element.
*/

// Example using the Filter Method
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let even = arr.filter((num) => {
//     return num % 2 === 0;
// });
// console.log(even); // Output: [2, 4, 6]

// Example using the Map Method
let arr = [1, 2, 3, 4, 5];
let squared = arr.map((num) => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]
