console.log("Day 23 - Promises");

// - What is a Promise in JavaScript?
// - Callback to Promise
// - Understanding Promise States
// - How promises are resolved and rejected
// - Handling Promises
// - Promise Chain
// - Handling Multiple Promises
// - How to Cancel a Promise
// - That PizzaHub App

//* Promise - A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner, avoiding callback hell and making it easier to handle asynchronous operations.

/*let promise = new Promise(function(resolve, reject){

});

// Executor function - It takes two things as arguments. The resolve and reject both are functions given by JavaScript to us.

function(resolve, reject){
    // Logic goes here
    resolve()
    reject()
    resolve()
}*/

/*
3 state - 
    pending: Initially when the executor function starts the execution.
    fulfilled: When the promise is resolved.
    rejected: When the promise is rejected.

result -
    undefined: Initially when the state value is pending.
    value: When resolve(value) is called.
    error: When reject(error) is called.
*/


//* - How promises are resolved and rejected

let promise1 = new Promise(function (resolve, reject) {
    resolve("Hey, I am done!");
});

let promise2 = new Promise(function (resolve, reject) {
    reject("Something is not right!");
});

let anotherPromise = new Promise(function (resolve, reject) {
    resolve("I am surely going to get resolved!");

    reject(new Error("Will this be ignored?")); // ignored
    resolve("Ignored?"); // ignored
});

//* - Handling Promises

// .then()
// .catch()
// .finally()

let loading = false
const promise = new Promise(function (resolve, reject) {
    loading = true;
    // Make a Network Call(API Call/IO Operation)
    resolve("I am resolved...")
});

promise.then(
    (result) => { console.log(result) }
).catch(
    (error) => { console.error(error) }
).finally(
    () => { loading = false; }
);
