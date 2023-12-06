/* Ternary operator - Condition ? trueValue : falseValue */
let age = 12;
let result = age > 18 ? "You can ride" : "Use bicycle";
console.log(result);

/* Guard operator - If the variable age is falsy (undefined, null, 0, false, NaN, or an empty string),
   then finalAge will be assigned the value 16. Otherwise, if age has a truthy value,
   finalAge will be assigned the value of age. This is a common pattern used in JavaScript
   to provide default values for variables */
let age1;
let finalAge1 = age1 || 16;
console.log(finalAge1);

/* Nullish coalescing operator - value ?? fallbackValue
   Use when you want to consider only null and undefined as falsy */
let age2;
let result2 = age2 ?? 12;  // Corrected the comment
console.log(result2);
