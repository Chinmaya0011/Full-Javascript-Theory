
let obj1 = { name: "John" };
let obj2 = obj1; // obj2 now holds a reference to the same object as obj1

console.log(obj1.name); // Output: "John"
console.log(obj2.name); // Output: "John"

obj1.name = "Jane";
console.log(obj2.name); // Output: "Jane" (both obj1 and obj2 reference the same object)
