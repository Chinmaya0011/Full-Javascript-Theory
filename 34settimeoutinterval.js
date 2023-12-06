// setTimeout: Executes a function or a specified piece of code once after a specified delay.
console.log("Start");

setTimeout(function () {
    console.log("This will be executed after 2000 milliseconds (2 seconds).");
}, 2000);

console.log("End");

// setInterval: Executes a function or a specified piece of code at specified intervals.
let counter = 0;
let intervalId = setInterval(function () {
    console.log("Interval - " + counter);

    counter++;

    if (counter === 5) {
        clearInterval(intervalId); // Stop the interval after 5 iterations
        console.log("Interval stopped after 5 iterations.");
    }
}, 1000); // Repeat every 1000 milliseconds (1 second)
