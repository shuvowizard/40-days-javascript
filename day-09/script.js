console.log("Day 09: Hoisting");

/**
 *! 🔷 Hoisting in JavaScript
 * 👉 Hoisting হলো JavaScript-এর এমন একটা behavior যার কারণে variable এবং function declaration কোড execute হওয়ার আগে মেমোরিতে উঠে যায়। 
 * সহজ ভাষায়: JavaScript কোড চালানোর আগে declaration গুলোকে উপরে তুলে রাখে — এটাকেই Hoisting বলে।
 * ⚠️ মনে রেখো: Declaration hoist হয়, assignment নয়।
 */

 /**
  * 🔷 কেন Hoisting হয়?
  * JavaScript আগে Execution Context তৈরি করে
  * Creation phase-এ:
    * - Variable-এর জন্য memory দেয়
    * - Function পুরোটা memory-তে রাখে
  */



//! Variable Hoisting

//* `var` Hoisting
console.log('name is ', nam); // undefined
var nam;
nam = 'tom';
console.log('name is ', nam); // tom

/**
 * 👉 var hoist হয়
 * ✅ In the creation phase of Execution Context the variable is created and initialized with undefined.
 */

//* `let/const` Hoisting
console.log('age is ', age); // ReferenceError: Cannot access 'age' before initialization
let age = 25;
console.log('age is ', age); // 25

/**
 * 👉 let / const hoist হয়
 * ❌ In the creation phase of Execution Context the variable is created but not initialized with anything.
 * 📌 Temporal Dead Zone (TDZ)-এ থাকে
 * 📌 TDZ: an area where you can not access a variable until it is initialized.
 */

{
    // ==== nam variable's TDZ starts here ====
    //
    console.log(nam); // ReferenceError: Cannot access 'nam' before initialization
    //
    console.log(city); // ReferenceError
    let city = 'barisal';  // city variable's TDZ ends here
    //
    //
    let nam = 'jerry';  // TDZ ends here
    //
    console.log(nam); // jerry
    //
}


//! Function Hoisting
/**
 * 👉 Function declarations hoist হয় পুরোটা
 * 👉 In the creation phase of Execution Context the function has been define and created.
 * 👉 Function expressions hoist হয় না
 * 👉 Arrow functions hoist হয় না
 * 📌 Function declarations হল: function fname() {}
 * 📌 Function expressions হল: const fname = function() {}
 */

chase();  //Invoking the function before its declaration

//Declare a function, chase()
function chase() {
    console.log("Tom is chasing Jerry");

    caught();  // Invoking another function inside this function
}

// Declare another function, caught()
function caught() {
    console.log("Tom caught Jerry");
}


// Function Expression
test(); // TypeError: test is not a function 
// because test is undefined at this point in the Creation Phase of the Execution Context.

var test = function() {
    console.log("This is a function expression");
}