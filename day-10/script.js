console.log("Day 10");


/**
 * 4 Types of Scope in JavaScript
 * 1. Global Scope
 * 2. Function Scope
 * 3. Block Scope
 * 4. Module Scope
 */



//* Global Scope
// Variables declared outside of any function or block scope are called global scope

let myName = "shuvo"; // global scope

function greet() {
    console.log(`Hello, ${myName}`); // can access myName
}

greet(); // Output: Hello, shuvo

{
    console.log(myName); // can access myName
}


//* Function Scope
// Variables declared inside a function are only accessible within that function.

function toDo() {
    let task = "I am inside a function"; // function scope
    console.log(task); // Output: I am inside a function
}

toDo();
console.log(task); // Output: Uncaught ReferenceError: task is not defined


//* Block Scope
// Variables declared using let and const inside a block (e.g., within curly braces {}). cannot be accessed outside that block.

{
    var number = 5;  // var is not block-scoped.
    let count = 10;
    console.log(count); // Output: 10
}

console.log(count); // Output: Uncaught ReferenceError: count is not defined
console.log(number); // Output: 5

/***
 * * `var`: Function-scoped. Not block-scoped.
 * * `let`: Block-scoped. Can be updated but not re-declared within the same scope.
 * * `const`: Block-scoped. Cannot be updated or re-declared. Must be initialized at declaration.
 */


//! Scope Chain

let globalVar = "I am a global variable";

function outer() {
    let outerVar = "I am an outer variable";
    console.log(innerVar); // ReferenceError

    function inner() {

        let innerVar = "I am an inner variable";
        
        console.log(innerVar); // Output: I am an inner variable
        console.log(outerVar); // Output: I am an outer variable
        console.log(globalVar); // Output: I am a global variable
    }

    inner();
}

outer();

console.log(outerVar); // Output: Uncaught ReferenceError: outerVar is not defined
console.log(innerVar); // Output: Uncaught ReferenceError: innerVar is not defined
console.log(globalVar); // Output: I am a global variable

// In this example, the inner function can access variables from its own scope (innerVar), the outer function's scope (outerVar), and the global scope (globalVar). However, the outer function cannot access innerVar, and the global scope cannot access either outerVar or innerVar.


var count = 10

function outer () {
    // var count = 20;

    function inner() {
        // var count = 30;
        console.log(count); // 30
    }

    inner();
    console.log(count); // 20
}

outer();
console.log(count); // 10

// In this example, each function has its own count variable. The inner function accesses its own count (30), the outer function accesses its own count (20), and the global scope accesses the global count (10).


//! Variable Shadowing

 let message = "I am doing great"

function situation() {
    let message = "I am not doing great"
    console.log(message); // I am not doing great
}

situation();
console.log(message); // I am doing great

