console.log('Day 06');

/* 
  - What is Function? 
        >Block of code that performs a specific task, can be invoked(call) whenever needed.
  - Defining a Function
  - Function as Expression
  - Default and Rest Parameters
  - Nested Function
  - Callback Function
  - Pure Function & HoF
  - Arrow Function
  - IIFE
  - Call Stack
  - Recursion
    - Hoisting
    - Scope
    - Closure
*/

// Define or Declare a Function
function printThis() {
  console.log('Printing...');
}

// Call or Invoke a Function
printThis();

// Function as an Expression  (variable = value(function))
let printMe = function () {
  console.log('Print Me');
};
// console.log(printMe);  // prints the function definition
printMe();

// Parameters & Arguments
function sum(a, b) {
  const result = a + b;
  //console.log(result);
  return result;
}

let result = sum(10, 9);
console.log(result);

/*
  - `Parameter`: Parameters are the placeholders of the variables that we passes as input to a function while declare or define a function.

  - `Argument`: Arguments are the actual values that wil replace those declared variables (parameters) while invoking or calling a function.
*/

function double(x) {
  return 2 * x;
}
console.log(double(result));

// Default Parameters

function calc(a = 0, b = 0) {
  return 2 * (a + b);
}

const resVar = calc();
console.log(resVar);

// Rest Parameter
function calculateThis(x, y, ...rest) {
  console.log(x, y, rest);
}

calculateThis(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Nested Function

function outer() {
  console.log('Outer');

  return function inner() {
    console.log('inner');
  };
  //inner();
}

let retFunc = outer();

console.log(retFunc());

// callback function
const toCallBuz = false;

function foo(func) {
  console.log('foo');
  if (toCallBuz) {
    func();
  }
}

const buz = function () {
  console.log('buz');
};

foo(buz);

// Pure function
let greetingMsg = 'Hola ';

function greeting(name) {
  return greetingMsg + name;
}

console.log(greeting('Hello'));
console.log(greeting('Hello'));

greetingMsg = 'Hi ';

console.log(greeting('Hello'));
console.log(greeting('Hello'));
console.log(greeting('Hello'));

// Higher Order Function

function getCamera(camera) {
  camera();
}

getCamera(function () {
  console.log('Sony');
});

function returnFunc(param) {
  return function () {
    if (param === 1) {
      console.log('Hello');
    }
  };
}

const retFun = returnFunc(3);
retFun();

// Arrow Function

let greetMe = (greetingMsg) => {
  //
  //
  return greetingMsg + ' great';
};

console.log(greetMe('Hi, there'));

// IIFE(Immediately Invoked Function Expression)
(function (count) {
  console.log('IIFE', count);
})(1);

//2nd option
(() => {
  //...
}) ();
 
//3rd option
(async () => {
  //...
}) ();

// Call Stack
function first() {
  console.log('First Function');
  console.log('First Function Ended');
}

function second() {
  console.log('Second Function');
  first();
  console.log('Second Function Ended');
}

function third() {
  console.log('Third Function');
  second();
  console.log('Third Function Ended');
}
third();


// Recursion

/*function foo() {
    foo();
}*/

function fetchWater(count) {
  console.log('Fetching Water...', count);
  if (count === 0) {
    console.log('No more water is left to fetch...');
    return;
  }
  fetchWater(count - 1);
}

fetchWater(5);
