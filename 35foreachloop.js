/* For Each Loop:
   - A method for array iteration, often preferred for readability.

   Example using forEach loop to iterate through an array of foods:
*/
// let foods = ["bread", "rice", "meat", "pizza"];
// console.log(foods);
// foods.forEach(function (food) {
//     console.log(food);
// });

// Traditional For Loop for Searching in an Array
let arr = [1, 2, 3, 4, 5, 6, 7];

function searchNum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            console.log(`Element found at index: ${i}`);
            return; // Optional: Stop searching after the first occurrence
        }
    }
    console.log(`Element ${num} not found in the array.`);
}

// Example usage
searchNum(arr, 5); // Output: Element found at index: 4
searchNum(arr, 2); // Output: Element found at index: 1
searchNum(arr, 8); // Output: Element 8 not found in the array.
