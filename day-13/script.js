"use strict";
console.log('Day 13: The this Keyword');

/**
 * this keyword in the global scope.
 * this keyword inside a stand alone function.
 * this keyword inside a stand alone function using the strict mode.
 * this keyword with the implicit binding in object method
 * this keyword in the arrow function .
 * this keyword in the arrow function that is within another function or object.
 * this keyword with the explicit binding with call, apply, & bind.
 * this keyword with object that created using the new keyword.
 */

//! 1️⃣ Global Context
 
// `this` keyword and window object
console.log("this at the global", this)  // refers to window

/**
 *📝 Aspect of `this` keyword
 * 1. Object context → this = object
 * 2. Function context → this = global / undefined
 */

/***
 *! 2️⃣ Inside of an Object - Implicit Binding
 * 📌 Implicit Binding = object.method() → `this` = object
 * 📌 `this` depends on how a function is called, not where it is written
 * 📌 Implicit Binding is a way in which you understand that, if a method is called on an object, using the dot(.) notation, the context of `this` is bound or associated to the object on which we have invoked the method.
 * 📌 When we invoked a method of an object of the value of `this`, it is bound to the object on which we invoked the method.
 */
const employee = {
    id: "A5778",
    firstName: "Alex",
    lastName: "B",

    returnThis: function() {
        return this;
    },

    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log("Employee Id", employee.id); // "A5778"
console.log("this inside the employee object", employee.returnThis())  // returns the employee object
 
console.log("Constructed Full Name using this", employee.getFullName());  // "Alex B"


const tom = {
    name: "Tom",
    age: 7
}

const jerry = {
    name: 'jerry',
    age: 3
}

function greetMe(obj) {
    obj.logMessage = function() {
        console.log(`${this.name} is ${this.age} years old!`)
    }

    console.log(obj);
}

greetMe(tom);
tom.logMessage();  // "Tom is 7 years old!"

greetMe(jerry);
jerry.logMessage();  // "jerry is 3 years old!"


//! 3️⃣ `this` Inside a Stand Alone Function
function sayName() {
    console.log("this inside a function", this);
}

sayName(); // Output: this inside a function, Window object

function outer(a) {
    console.log("this inside an outer function", this);

    return function inner(b) {
        console.log("this inside an inner function", this);
    }
}
const outerResult = outer(5);  // Output: Window object
outerResult(3)  // Output: Window object

// 4️⃣ `this` Inside the Arrow Function

const getFood = () => this;

console.log("this inside the arrow function defined in global scope", getFood());  // `this` refers to window object

const food = {
    name: "mango",
    color: "yellow",

    // getDesc: () => `${this.name} is ${this.color}`,
    /*getDesc: function() {
        return `${this.name} is ${this.color}`
    }*/
    getDesc: function() {
        return () => `${this.name} is ${this.color}`;
    }
}
const descFunc = food.getDesc()
console.log(descFunc())

/***
 * with global scope `this` always refer to the window object for browser environment for node environment to the global object
 * For Stand Alone Function in strict mood `this` always point to undefined and non strict mode `this` always point to window object
 * For Implicit Binding when ever you are calling the objectName.method(), you have to check what is that particular method is about, if the method is standard javascript function an non arrow function an if that function has the `this` keyword, the `this` keyword is bound to the object on which you have calling the function or the method.
 * If that function happen to be an arrow function whether it is inside an object or outside in object wherever it is, it all depends where the arrow function is lexically placed Define in your code check the parent scope of the place where Arrow function is defined because Arrow function doesn't have it's own `this`. The `this` always refer for an arrow function to the parent scope of the scope where Arrow function is defined.
 */

//! 5️⃣ Explicit Binding - call, apply, bind

//? The call method

function greeting() {
    console.log(`Hello, ${this.name} belongs to ${this.address}`);
}

const user = {
    name: 'shuvo',
    address: 'All of YOU!'
};

greeting.call(user);   // Hello, shuvo belongs to All of YOU!


const likes = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}

const person = {
    name: "Shuvo"
}

likes.call(person, "Teaching", "Blogging")  // Shuvo likes Teaching , Blogging

//? The `apply()` method  (passing an array as an argument)

const hobbiesToApply = ["Sleeping", "Eating"];

likes.apply(person, hobbiesToApply)  // Shuvo likes Sleeping , Eating

//? The `bind()` method   (creating a new function with `this` keyword bound to a specific object)
const newHobbies = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}

const officer = {
    name: 'Bob',
};

const newFn = newHobbies.bind(officer, "Dancing", "Singing");
newFn();  // Bob likes Dancing , Singing

//? The `new` binding
// Constructor function এ this.property মানে object-এর নিজের property / method
const Cartoon = function(name, animal) {
    this.name = name;
    this.animal = animal;
    this.log = function() {
        console.log(this.name +  ' is a ' + this.animal);
    }
};

const tomCartoon = new Cartoon("Tom", "Cat");
tomCartoon.log();  // Tom is a Cat

/**
 * log() call হচ্ছে tomCartoon object দিয়ে
 * তাই Implicit Binding কাজ করছে
 * this = tomCartoon
 */

const jerryCartoon = new Cartoon("Jerry", "Mouse");
jerryCartoon.log();  // Jerry is a Mouse
