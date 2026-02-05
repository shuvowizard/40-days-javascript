console.log('Day 15: JavaScript Array Master Course');

/**
 *! Array
 * Array is a data structure that is used to store a collection of items.
 */

{
  const mixedArray = [100, true, 'Shuvo', {}];

  // index = The position of an element in the array is known as its index.
  // index starts with 0
  // index end with length - 1

  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  const s = ['tomato', 'mushroom', 'pepper', 'cucumber','onion', 'carrot', 'broccoli'];

  function Car(model) {
    this.model = model;
  }

  const bmwCar = new Car('BMW X1');
  console.log(bmwCar);

  const anotherSalad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');

  console.log('Salad', salad);
  console.log('Another Salad', anotherSalad);

  console.log(salad === anotherSalad);

  const two = new Array(1, 2);
  console.log(two); // [1, 2]

  // const element = array[index]

  console.log(salad[0]); // '🍅'
  console.log(salad[2]); // '🥦'
  console.log(salad[5]); // '🥕'

  // const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

  for (let i = 0; i <= salad.length - 1; i++) {
    console.log(`Element at index ${i} is ${salad[i]}`);
  }

  // push() - end, add
  const ret = salad.push('🥜');
  console.log(ret); // 8
  console.log(salad);

  // unshift() - start, add

  const unRet = salad.unshift('🥜');
  console.log(unRet); // 9
  console.log(salad);

  // pop() - end, remove
  console.log(salad);
  const popRet = salad.pop();
  console.log(popRet); // '🥜'
  console.log(salad);

  // shift() - start, remove
  console.log(salad);
  const shiftRet = salad.shift();
  console.log(shiftRet); // '🥜'
  console.log(salad);

  //? Copy and Clone an Array
  // slice() - copy

  // salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  const saladCopy = salad.slice();
  console.log('Salad Before Copy', salad);
  console.log('Salad After Copy', saladCopy);
  console.log(salad === saladCopy); // false

  // Determine if Array
  Array.isArray(['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']); // true;
  Array.isArray('🍅'); // returns false
  Array.isArray({ tomato: '🍅' }); // returns false
  Array.isArray([]); // returns true

  const arr = [1, 2, 3, 4];
  Array.isArray(arr); // true
}

//? Array Destructuring
// const [] = []
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
{
  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

  const tomato = salad[0];
  const mushroom = salad[1];
  const carrot = salad[5];
  console.log(tomato, mushroom, carrot);
}

{
  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  const [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
}

{
  const [tomato, mushroom = '🍄'] = ['🍅'];

  console.log(tomato); // '🍅'
  console.log(mushroom); // '🍄'
}

{
  const [tomato, , carrot] = ['🍅', '🍄', '🥕'];

  console.log(tomato); // '🍅'
  console.log(carrot); // '🥕'
}

//? Nested Array Destructuring

// [1 ,2, [4, [6, 8, ['q']]]]

{
let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
const veg = fruits[4]; // ['🍅', '🍄', '🥕']
const carrot = veg[2]; // '🥕'

const singleFruit = fruits[4][2]; // '🥕'

let [,,,,[,,carrot2]] = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
}

//? Rest Parameter and Spread Operators
/** 
 * Rest Parameter: ...this three dots appears at the left side of the assignment operator. Its goes with variables.
 * Spread Operator: ...this three dots appears at the right side of the assignment operator. Its goes with array values. Its use to spread all array values.
*/
{
const [tomato, mushroom, ...rest] =  ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
console.log(rest); // ['🥦', '🥒', '🌽', '🥕', '🥑']

const mySalad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const mySaladCopy = [...mySalad]; // copy the array

console.log(mySaladCopy); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

mySalad === mySaladCopy; // false
}

//? Swapping Variables
{
let first = '😔';
let second = '🙂';

[first, second] = [second, first];

console.log(first);  // '🙂'
console.log(second); // '😔'
}

//? Merge Arrays

{
const emotions = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];

const emotionalVeggies = [...emotions, ...veggies]; // spreed all elements

console.log(emotionalVeggies); // ['🙂', '😔', '🥦', '🥒', '🌽', '🥕']
}

//? Array length

{
const arr1 = [11, 21, 73];
const arr2 = new Array(7);

console.log(arr1.length); // 3
console.log(arr2.length); // 7

// 2 ** 32 - 1 // 4294967295

// arr1.length = 0  // remove all elements, empty array []
arr1.length = 9
console.log(arr1) 
}

