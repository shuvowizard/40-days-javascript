console.log('Day 12 - JavaScript Objects');

/**
 * Objects
 * - Object Literals
 * -- Accessing Properties
 * -- Adding & Modifying Properties
 * -- Deleting Properties
 * -- Computed Properties
 * - Constructor Function
 * - Factory Function
 * - Nested Objects
 * - for...in loop
 * - Object Reference (Shallow vs Deep Clone)
 * - Static Methods
 * - Object Destructuring
 * - Object Chaining
 * - Prototypes
 * - OOP
 */

/**
 * Introduction to Objects
 * Object is a collection of key-value pairs.
 * Keys are also called properties.
 * Keys are unique within an object.
 * functions that are properties of an object are called methods.
 * Values can be of any data type, including other objects and functions.
 * Objects are mutable, meaning their properties can be changed after creation.
 * Objects can be created using object literals, constructor functions, or the Object.create() method.
 */

//* Object Literals

let user = {
  name: 'shuvo',
  age: 40,
  'is admin': true,
};

console.log(user.name); // shuvo
console.log(user['name']); // shuvo
console.log(user.age); // 40

user.isSeniorCitizen = false;
user['movie lover'] = true;

console.log(user); // {name: 'shuvo', age: 40, is admin: true, isSeniorCitizen: false, movie lover: true}

console.log(user['is admin']); // true

user.age = 34;
user['movie lover'] = false;

// delete user["movie lover"];
// delete user.age;
console.log(user);

const someKey = 'age';

console.log(user[someKey]); // 34

/*let car = prompt("Which is your fav car?");

let favCars = {
    [car]: 5
}

console.log(favCars);*/

//* Constructor Function
function Car(name, model) {
  this.name = name;
  this.model = model;
}

const bmwCar = new Car('BMW', 'X1');
const audiCar = new Car('Audi', 'A8');
console.log(bmwCar); // Car {name: 'BMW', model: 'X1'}
console.log(audiCar);

console.log(bmwCar instanceof Car); // true
console.log(audiCar instanceof Car); // true

const person = new Object();
person.name = 'Alpha';
person.age = 76;
console.log(person);

//* factory
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(this.name);
    },
  };
}

const user1 = createUser('shuvo', 39);
console.log(user1);
user1.name;
user1.age;
user1.greet();
const user2 = createUser('bob', 32);
console.log(user2);

//* Nested Objects

let profile = {
  name: 'shuvo',
  company: 'CeroWis',
  message: function () {
    console.log(`${this.name} works at ${this.company}`);
  },
  address: {
    city: 'Mirpur',
    zip: 56032,
    state: 'Dhaka',
    country: 'Bangladesh',
    greeting: function () {
      console.log('Welcome to Bangladesh');
    },
  },
};

console.log(profile.address.country); // Bangladesh
profile.address.greeting(); // Welcome to Bangladesh
console.log(profile.name); // "shuvo"
console.log(profile.company);

profile.message();

//* for ... in

for (let key in profile) {
  console.log(key); // name, company, message, address
  console.log(profile[key]); // shuvo, CeroWis, f(), {city: 'Mirpur', zip: 56032, state: 'Dhaka', country: 'Bangladesh', greeting: f()}
}

console.log(Object.keys(profile)); // ['name', 'company', 'message', 'address']

console.log(profile.salary); // undefined

console.log('salary' in profile); // false

if (!profile.salary) {
  console.log("The salary property doesn't exist");
}

//* Object Reference
/**
 * In JavaScript, objects are reference types, which means that when you assign an object to a variable, you're actually assigning a reference (or pointer) to that object in memory, rather than the object itself.
 * `shallow copy` (copy by reference): Shallow clone শুধু উপরের লেভেল (1st level) copy করে। ভেতরের object / array গুলো same reference শেয়ার করে।
 * `deep copy` (copy by value): Deep clone সম্পূর্ণ নতুন একটি object তৈরি করে, যার সবগুলো লেভেল (all levels) আলাদা আলাদা reference থাকে।
 */
/**
 * Shallow Copy vs Deep Copy
 * - Shallow Copy: A shallow copy of an object is a new object that is a copy of the original object, but only at the first level. If the original object contains nested objects or arrays, the shallow copy will still reference those nested objects or arrays, meaning changes to them will affect both the original and the copied object.
 * - Deep Copy: A deep copy of an object is a new object that is a complete copy of the original object, including all nested objects and arrays. Changes made to the nested objects or arrays in the deep copy will not affect the original object, as they are entirely separate copies.
 */

let fruit = { name: 'mango' }; // XA01
const oneMoreFruit = { name: 'mango' }; // YB02

console.log(fruit == oneMoreFruit); // false
console.log(fruit === oneMoreFruit); // false

fruit = oneMoreFruit; // shallow copy (now both fruit and oneMoreFruit point to YB02)

console.log(fruit == oneMoreFruit); // true
console.log(fruit === oneMoreFruit); // true

//* Static Methods
/**
 * Object.assign()
 * Object.entries()
 * Object.fromEntries()
 * Object.freeze()
 * Object.seal()
 * Object.isFrozen()
 * Object.hasOwn()
 * structuredClone()
 * etc.
 */

const target = { p: 1, a: 2 };
const source = { a: 3, b: 5 };

const returnedObj = Object.assign(target, source); // merges source into target
console.log(returnedObj); // {p: 1, a: 3, b: 5}
console.log(target); // {p: 1, a: 3, b: 5}

const obj = { name: 'shuvo' };
const obj2 = Object.assign({}, obj); // shallow clone
console.log(obj2);
console.log(obj === obj2); // false

const obj3 = {
  a: 1,
  b: { c: 2 },
};
const obj4 = Object.assign({}, obj3);
console.log(obj4); // {a: 1, b: {c: 2}}

// obj4.a = 100;

// console.log(obj4.a); // 100
// console.log(obj3.a); // 1

// obj4.b.c = 3;

// console.log(obj4.b.c) // 3
// console.log(obj3.b.c) // 3

const obj5 = structuredClone(obj3); // deep clone

obj5.a = 300;
obj5.b.c = 30;

console.log(obj5.a); // 300
console.log(obj3.a); // 1

console.log(obj5.b.c); // 30
console.log(obj3.b.c); // 2

const myObj = {
  a: 'shuvo',
  b: 32,
};
const myArr = Object.entries(myObj); // Object to Array
console.log(myArr); // [['a', 'shuvo'], ['b', 32]]

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
]);
const objEntries = Object.fromEntries(entries); // Array or Map to Object
console.log(objEntries); // {foo: 'bar', baz: 42}

const emp = {
  sal: 100,
};

Object.freeze(emp); // makes emp immutable

emp.sal = 200;
emp.name = 'Alex';
delete emp.sal;

console.log(emp); // {sal: 100} (no changes made)

console.log(Object.isFrozen(emp)); // true (check if emp is frozen)

const dept = {
  name: 'finance',
};

Object.seal(dept); // allows modification but prevents addition or deletion of properties

dept.address = 'Dhaka'; // won't be added
delete dept.name;

dept.name = 'HR'; // can be modified
console.log(dept); // {name: 'HR'}

console.log(Object.hasOwn(dept, 'address')); // false
console.log(Object.hasOwn(dept, 'name')); // true


