// 'if' statement: Executes a block if the condition is true; skips if false.
// 'else' statement: Executes a block if the condition is false; then the next code executes.

// Syntax: if () {};

// 'if-else' ladder: Multiple 'if' and 'else if' blocks; only one block executes.

// Using a variable: Can store a value in a variable for use in an 'if' statement.

// Example of using an 'if-else' statement to check the age for permission to ride:

let age = 18;

// Check if age is less than 18
if (age < 18) {
    console.log("You can't ride"); // Output if the condition is true
} 
// Check if age is greater than 18
else if (age > 18) {
    console.log("You can ride"); // Output if the condition is true
} 
// If neither condition is true
else {
    console.log("Need permission"); // Output if no previous condition is true
}
