
// Definition: Anonymous Function
// An anonymous function is a function without a name.
// It is often used for short-lived tasks or as a function argument.
let addNumbers = function (a, b = 0) {
    return a + b;
};

// Definition: Default Parameter
// A default parameter is a parameter in a function that has a default value assigned.
// If a value is not provided for the parameter when the function is called, the default value is used.
// In this example, the parameter 'b' has a default value of 0.
// If 'b' is not provided, it defaults to 0.
let result1 = addNumbers(5);
let result2 = addNumbers(5, 7);

// Output
console.log(result1); // Output: 5 (default value of b is used)
console.log(result2); // Output: 12 (provided value of b is used)
