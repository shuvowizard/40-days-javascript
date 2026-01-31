console.log('Day 11: Closure');

/**
 *! 🔒 Closure in JavaScript
 * Inner and Outer Functions
 * Scope
 * 📌 Closure = Inner Function + Lexical Scope
 * A closure allows a function to access a variables from it's outer scope, even after the outer scope finished the execution.
 * The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.
 */

// Outer Inner
function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
  };
}

const func = outer(); // outer function is invoked here
console.log(func()); // output: 10

// Count Closure
function outerCount() {
  let count = 0;

  return function innerCount() {
    count++;
    console.log(count);
  };
}

const retVal = outerCount();

retVal(); // 1
retVal(); // 2
retVal(); // 3

// Real World Example

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: (amount) => {
      balance = balance + amount;
      console.log('Deposited ', amount, ' Current Balance ', balance);
    },

    withdraw: (amount) => {
      if (amount > balance) {
        console.warn('Insufficient Fund');
      } else {
        balance = balance - amount;
        console.log('Withdrawn ', amount, ' Current Balance ', balance);
      }
    },

    checkBalance: () => console.log('Current Balance', balance),
  };
}

const myAccount = createBankAccount(100); // initial balance 100

console.log(myAccount); // { deposit: [Function: deposit], withdraw: [Function: withdraw], checkBalance: [Function: checkBalance] }

console.log(myAccount.deposit(300)); // 400

console.log(myAccount.withdraw(50)); // 350

console.log(myAccount.withdraw(20)); // 330

console.log(myAccount.withdraw(50)); // 280

console.log(myAccount.withdraw(150)); // 130

console.log(myAccount.checkBalance()); // 130

// The balance variable is private to the createBankAccount function scope and cannot be accessed directly from outside. The only way to interact with the balance is through the methods provided in the returned object (deposit, withdraw, checkBalance). This encapsulation is made possible by closures.

function dealingWithBigData() {
  let bigData = new Array(10000000).fill('*');

  return function () {
    console.log(bigData[3]);
  };
}

const variable12 = dealingWithBigData();

console.log(variable12());  // *

// Usefulness of Closure

// 1. You can keep the variables private without exposing them.
// 2. You can stop variable pollution.
// 3. You can create a function factory.
// 4. You can keep a variable alive between multiple calls.

function timer() {
  let secs = 0;

  return function () {
    secs++;
    console.log('elapsed seconds ', secs);
  };
}

const timerInstance = timer();
timerInstance(); // 1
timerInstance(); // 2
timerInstance(); // 3

// Closure in Event handler

function setupButton() {
  let clickCount = 0;

  document.getElementById('myButton').addEventListener('click', function () {
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
  });
}

setupButton();