// var: var declares a variable with global or function scope, and it can be reassigned.
// It is considered outdated and is often avoided due to its hoisting behavior and lack of block scope.
var globalVariable = "I can be reassigned";

// let: let declares a variable with block scope, which means it is limited to the block or statement that it is defined in.
// It can be reassigned within its scope.
let functionScopedVariable = "I can be reassigned within the function scope";

// const: const declares a variable with block scope, and it cannot be reassigned once it is assigned a value.
// It also provides a way to declare constants that remain unchanged throughout the program.
const constantVariable = "I cannot be reassigned";

// Example of attempting to reassign a const variable (will result in an error):
// constantVariable = "Trying to reassign will throw an error";

// Example of attempting to redeclare a const variable (will result in an error):
// const constantVariable = "Trying to redeclare will throw an error";
