/*
- Automatic conversion of primitives to objects.
- Allows properties and methods to be used on primitives.
  Example: strings have properties and methods like length, toUpperCase, etc.

  JavaScript automatically converts primitives to objects when you try to access properties or methods on them. For example, with strings:

  let greeting = "Hello, World!";
  console.log(greeting.length); // Output: 13
  console.log(greeting.toUpperCase()); // Output: "HELLO, WORLD!"

  In these cases, JavaScript temporarily wraps the primitive value in an object, allowing you to use properties and methods. This process is known as autoboxing.

  It's important to note that these object-like operations on primitives don't permanently change the primitive itself; they create temporary objects for the operation and then discard them.
*/
