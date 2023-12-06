/*
  - Use the function keyword to declare.
  - Follow the same rules as variable names.
  - Use () to contain parameters.
  - Invoke by using the function name followed by ().
  - Fundamental for code organization and reusability.

  function greeting(name) {
    console.log("Namaste " + name);
  }
  greeting("Chinu");

  // Default parameter
  function greet(name = "dear") {
    console.log("Namaste " + name);
  }
  greet();

  function games(userMove, computerMove) {
    if (userMove === computerMove) {
      console.log("Game tie");
    } else if (userMove === "ball" && computerMove === "bat") {
      console.log("User won");
    } else {
      console.log("Computer won");
    }
  }
  games("bat", "ball");

  function checkNum(num) {
    if (num % 2 === 0) {
      console.log("Num is even");
    } else {
      console.log("Num is odd");
    }
  }
  checkNum(10);

  function largeNum(a, b) {
    if (a > b) {
      console.log("a is larger than b");
    } else {
      console.log("b is larger than a");
    }
  }
  largeNum(12, 1);
*/

// Conversion function
function convertVal(Celsius) {
  let Fahrenheit = (9 / 5) * Celsius + 32;
  console.log(Fahrenheit);
}
convertVal(11);
