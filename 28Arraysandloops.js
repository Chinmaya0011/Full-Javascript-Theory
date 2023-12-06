/* What is an array?
   - An array is just a list of values.
   - Index starts with 0.
   - Arrays are used for storing multiple values in a single variable.

   Example array:
   let myArr = [1, "chinu", { name: "chinu" }, null, true];

   Array methods:
   - push/pop: Add or remove from the end.
   - shift/unshift: Add or remove from the front.
   - splice: Add or remove elements at specified positions.
   - toString: Convert to a string.
   - sort: Sort elements (numeric sorting may need a custom function).
   - valueOf: Get array instance.

   Arrays also use references like objects, and destructuring works for arrays.

   Example usage:
*/

let arr = [12, 1234, 35, 56, 32];

// Sort the array (based on string Unicode code points)
console.log(arr.sort());

// Both arr and arr2 reference the same array in memory
let arr2 = arr;
arr2[1] = 13;
console.log(arr);

// Destructuring assignment for arrays
let [a, b, c, d] = arr;
console.log(a + " " + b + " " + c + " " + d);
