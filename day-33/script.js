console.log("Day 33: Map and Set in JavaScript");

// What will we learn today?

// ✅ Arrays and Objects 2 minutes recap
// ✅ Map in JavaScript
// ✅ How to Add values to a Map
// ✅ How to Get values from a Map in JavaScript
// ✅ All About Map Keys
// ✅ Map Properties and Methods
// ✅ MapIterator: keys(), values(), and entries()
// ✅ How to Iterate Over a Map
// ✅ Convert an Object into a Map
// ✅ Convert a Map into an Object
// ✅ Convert a Map into an Array
// ✅ Map vs. Object: When should you use them?
// ✅ Set in JavaScript
// ✅ How to Create and Initialize a Set
// ✅ Set Properties and Methods
// ✅ How to Iterate Over a Set
// ✅ Convert a Set into an array
// ✅ Unique values from an array using the Set
// ✅ Set and Object
// ✅ Set Theories
// ✅ WeakMap
// ✅ WeakSet


//* Arrays and Objects 2 minutes recap

/*
let obj = {}
obj.a = "";
obj.b = "b";
*/


//! Map in JavaScript

// 1. key can be of any type
// 2. Map remembers the original order in which the elements were added to it

{
    const map = new Map([
        ['name', 'mohammad shuvo'],
        ['type', 'YT'],
        ['owner', 'Shuvo']
    ]);

    console.log(map);
}


//* How to Add values to a Map

// set(key, value)

// create a map
const map = new Map();

map.set("name", "Shuvo Talukder");
map.set('type', 'YT');
map.set('owner', 'Shuvo');
map.set('owner', 'st');

console.log(map);


//* How to Get values from a Map

// get(key)
console.log("Type is", map.get('type'));


//* Map Keys

const funMap = new Map();

funMap.set(560, "My House Number");
funMap.set(true, "Yes, I love teaching");

let obj = { 'name': 'tapas' };
funMap.set(obj, true);

console.log(funMap);

// Create an empty object
const funObj = {};

funObj[560] = "My House Number";

console.log(funObj[560] === funObj['560']);  // true

console.log(funMap.get(560) === funMap.get("560"));  // false


//* Map Properties and Methods

console.log(funMap.size); // 3

console.log(funMap.has(560)); // true

console.log(funMap.has(360)); // false

console.log(funMap.has("560")); // false

// funMap.delete(560);  // delete only single entry
// console.log(funMap);

// funMap.clear();  // clear all the entries from the map
// console.log(funMap);


//* MapIterator: keys(), values(), and entries()

const ageMap = new Map([
    ['Jack', 20],
    ['Alan', 34],
    ['Bill', 10],
    ['Sam', 9]
]);

// Get all the keys

console.log(ageMap.keys());

const mapIterator = ageMap.keys();

mapIterator.forEach((item) => {
    console.log(item)
})

console.log(ageMap.values());

console.log(ageMap.entries());

ageMap.forEach((value, key) => {
    console.log(`${key} is ${value} years old!`);
});

for (const [key, value] of ageMap) {
    console.log(`The boy ${key} is ${value} years old!`);
}


//* Convert an Object into a Map

const address = {
    'Shuvo': 'Bangladesh',
    'James': 'Japan',
    'Silva': 'London'
};

const addressMap = new Map(Object.entries(address));
console.log(addressMap);


//* Convert a Map into an Object

const addressObj = Object.fromEntries(addressMap);
console.log(addressObj);


//* Convert a Map into an Array

{
    const map = new Map();
    map.set('milk', 200);
    map.set("tea", 300);
    map.set('coffee', 500);

    console.log(Array.from(map));

    console.log([...map]);
}

//! Set in JavaScript
//? - A Set is a collection of unique elements

{
    const set = new Set();
    console.log(set);

    const fruitSet = new Set(['🍉', '🍎', '🍈', '🍏']);
    console.log(fruitSet);

    console.log(fruitSet.size); // 4
}

const saladSet = new Set();

saladSet.add('🍅'); // tomato
saladSet.add('🥑'); // avocado
saladSet.add('🥕'); // carrot
saladSet.add('🥒'); // cucumber

console.log(saladSet); // Set(4) {"🍅", "🥑", "🥕", "🥒"}

saladSet.add('🥒');
console.log(saladSet);

console.log('Does the salad have a carrot?', saladSet.has('🥕')); // true

console.log('Does the salad have broccoli?', saladSet.has('🥦')); // false

// saladSet.delete('🥑'); // Delete only single unique element

// console.log(saladSet);

// saladSet.clear(); // Clear all the elements from the set


//* How to Iterate Over a Set

const houseNos = new Set([360, 567, 101]);

console.log(houseNos.values()); // SetIterator

console.log(houseNos.keys()); // SetIterator

console.log(houseNos.entries()); // SetIterator


//* How to Convert a Set into an array

const houseNoToArr = [...houseNos];
console.log(houseNoToArr);  // [360, 567, 101]


//* Unique values from an array using the Set
const mixedFruit = ['🍉', '🍎', '🍉', '🍈', '🍏', '🍎', '🍈'];

const mixedFruitSet = new Set(mixedFruit);
console.log(mixedFruitSet); // Set(4) {"🍉", "🍎", "🍈", "🍏"}


//* Create a set and add the object to it

{
    let person = {
        'name': 'Alex',
        'age': 32
    };

    const pSet = new Set();
    pSet.add(person);
    console.log(pSet);

    person.name = "Bob"

    person = {};

    pSet.add(person);
}


//* Set Theories

const first = new Set([1, 2, 3]);
const second = new Set([3, 4, 5]);

// Union
console.log(first.union(second));  // Set(5) {1, 2, 3, 4, 5}

const union = new Set([...first, ...second]);
console.log(union); // Set(5) {1, 2, 3, 4, 5}

// Intersection
console.log(first.intersection(second));  // Set(1) {3}

const intersection = new Set([...first].filter(elem => second.has(elem)));

// Difference
console.log(first.difference(second)); // Set(2) {1, 2}

const difference = new Set([...first].filter(elem => !second.has(elem)));


const numbers = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
const the4Table = new Set([4, 8, 12, 16]);

console.log(numbers.isSupersetOf(the4Table)); // true


//!  Difference Between Map and WeakMap

{
    let user = { 'name': 'Shuvo' };
    const allUsers = [user];

    const uMap = new Map();
    uMap.set(user, true);

    user = null;

    console.log(allUsers);
    console.log(uMap);
}

{
    let addr = { "country": "Bangladesh" };

    const wMap = new WeakMap();
    wMap.set(addr, true);

    addr = null;

    console.log(wMap);
}

//? WeakMap supports only this 4 methods:
/*
1. set
2. get
3. has
4. delete
*/

//! WeakMap

const metadata = new WeakMap();

function setMetadata(el, info) {
    metadata.set(el, info);
}

function getMetadata(el) {
    return metadata.get(el);
}

const div = document.createElement('div');
setMetadata(div, { visible: true });

console.log(getMetadata(div)); // { visible: true }

// If div is removed from the DOM and dereferenced, metadata is Garbage Collected.

//! Difference Between Set and WeakSet

//? WeakSet supports only this 4 methods:
// add
// has
// delete

const onlineUsers = new WeakSet();

let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

onlineUsers.add(user1);
onlineUsers.add(user2);
console.log(onlineUsers.has(user1));

user1 = null;

console.log(onlineUsers.has(user1));
