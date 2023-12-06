/*
  Accumulator Pattern:
  - A pattern to accumulate values through looping.
  - Example: Sum all the numbers in an array or create a modified copy of an array.

  Example using the Accumulator Pattern to create a modified copy of an array by squaring each element:
*/

let nums = [1, 2, 3, 4, 5, 6];
let squaredArray = [];

for (let i = 0; i < nums.length; i++) {
    squaredArray[i] = nums[i] * nums[i];
    // Alternatively, you can use push:
    // squaredArray.push(nums[i] * nums[i]);
}

console.log(squaredArray);
