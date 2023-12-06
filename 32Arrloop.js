function findElement(arr, position) {
    // Check if the position is within the valid range
    if (position >= 1 && position <= arr.length) {
        return arr[position - 1];
    } else {
        return "Position out of range";
    }
}

let arr = [12, 345, 56, 34, 7632, 5];
console.log(findElement(arr, 4)); // Output: 34
