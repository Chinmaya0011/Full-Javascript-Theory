/*
  Break: Allows you to stop a loop early or break out of a loop.
  Continue: Used to skip one iteration or the current iteration.

  Example using break to find the index of the first occurrence of 4334 in an array:
*/

let arr = [12, 45, 3456, 4334, 4334, 567, 456, 567, 232, 667];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4334) {
        console.log(`Found at index ${i}`);
        break; // Stops the loop once the value 4334 is found
    }
}
