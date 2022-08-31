//we're going to use compose and pipe
const { compose, pipe } = require("lodash/fp");

//functions are first class citizens

//we can assign them to a variable
const addTwoNumbers = function (a, b) {
  return a + b;
};

// console.log(addTwoNumbers(2, 3));
//we can pass the as argument to another function
//func passed as argument and return
//getSum is a higher order function
//exemple 1
function getSum(func) {
  return func;
}

//assign to a variable
const adder = getSum(addTwoNumbers);
// console.log(adder(10, 12));

//exemple 2
const sayHello = function () {
  return function () {
    return "Hello World!!!";
  };
};
let sayer = sayHello();
console.log(sayer());

//function composition
// lodash=> compose and pipe from lodash/fp (fp for functional programming)
let userInput = "  I need YOU   ";
let wrappedInDivs = "<div>" + userInput.trim() + "</div>";
//This works but not a functional programming way
//solve the same problem in functional prog
//1 remove space
const trimFunc = (s) => s.trim();
//2 lowercase the user input
const lowerInput = (s) => s.toLowerCase();
//3 wrap in a div
const wrapperDivs = (s) => `<div>${s}</div>`;

// let trimedS = trimFunc(userInput);
let wrappedUserInput = wrapperDivs(lowerInput(trimFunc(userInput)));
//finally we have
// console.log(wrappedUserInput);
//we have too many parentheses and also we have to read from write to left
//we can use compose and pipe from lodash to solve those issues
//simplify the suntax
// const transform = compose(wrapperDivs, lowerInput, trimFunc);
// console.log(transform(userInput));
//working but still need to read from right to left
const transform = pipe(trimFunc, lowerInput, wrapperDivs);
console.log(transform(userInput));
//by replacing compose with pipe, we are able to read function from left to right.
