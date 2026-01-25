console.log("Day 03");

// Operator - Symbols + - * /
// Operands - x+y, x and y are the operands.
// Expression x = 2 / 3 + 4

/** 
    1. Arithmetic Operators
    2. Assignment Operators
    3. Comparison Operators
    4. Relational Operators
    5. Logical Operators
    6. Bitwise Operators
    7. Conditional (ternary) Operator
- Grouping
- typeof
- instanceof  
*/



// Arithmetic Operators
console.log("**** Arithmetic Operators ****")
let a = 12;
let b = 5;

let f_name = "mohammad"
let l_name = "shuvo"

console.log(f_name + l_name) // don't do this!

console.log(a + b);  // 17
console.log(a - b);  // 7
console.log(b - a);  // -7
console.log(a * b);  // 60
console.log(a / b);  // 2.4
console.log(a ** b)  // (Exponentiation) a to the power b = 12^5
console.log(a % b)   // 2

// Unary operator (+ , - , ++ , --)
let count = 5;
console.log(count++) // (increase and return the value of count) 5
console.log(count)   // 6
console.log(count--) // (count = count - 1) 6
console.log(count)   // 5

console.log(++count) // (increase the value of count and return) 6
console.log(--count) // (count = count - 1) 5

// Assignment Operators
console.log("**** Assignment Operators ****")

let x = 10;
 x += 5; // x = x + 5 (15)
 x -=3; // x = x - 3 (12)
 x *= 2; // x = x * 2 (24)
 x /= 4; // x = x / 4 (6)


 // Comparison Operators
console.log("**** Comparison Operators ****")
/* 
 == (loose equality operator)
 এটা type check করে না, দরকার হলে type conversion (coercion) করে।
 === (strict equality operator)
 এটা type check করে, type একই না হলে false রিটার্ন করে।
*/

console.log(0 == false)   // loosely coupled (==) 
console.log(0 === false)  // strictly coupled (===)
console.log(3 == '3')
console.log(3 != '3')     // loosely inequality operator

console.log(3 === '3')

console.log(null === null)
console.log(undefined === undefined)

// NaN = Not a Number

let obj1 = {'name': 'shuvo'} // XX0011 (memory addresses)
let obj2 = {'name': 'shuvo'} // YY022

console.log(obj1 === obj2)   // checking memory addresses
console.log(obj1 !== obj2)

4 > 3
2 > 1
1 > 7
2 >= 2

4 < 3
2 < 7
3 <= 9


// Logical operators
console.log("**** Logical operators ****")
// && || ?? !
// op1 && op2
console.log(false && false); // false
console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false

console.log("Cow" && "Horse"); // "Horse"
/* A && B
প্রথমে A চেক করে
যদি A falsy হয় → A-ই return করে
যদি A truthy হয় → B return করে
*/

4 > 5 && 4 === 6

console.log(false || false); // false
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true

console.log("Cow" || "Horse"); // "Cow"
/*A || B
প্রথমে A চেক করে
যদি A truthy হয় → A-ই return করে
না হলে → B return করে
*/

console.log(!false)

// If left side value is (null , undefined) then execute right side
let a1 = null ?? 1; // 1
let a2 = undefined ?? 3 // 3
const a3 = false ?? "shuvo" // false
const a4 = 0 ?? "shuvo" // 0


// Conditional (ternary) operator
console.log("**** Conditional (ternary) operator ****")

// condition ? val1 : val2

let age = 23;
age >= 60 ? "Senior Citizen" : "Non Senior Citizen";


// Bitwise operators
console.log("**** Bitwise operators ****")

// 10 in decimal
// 10 in 32 bits representation of 0, 1

// & | ^ ~ << >>

15 & 9 = 9
/*  1111 & 1001 = 1001 => 1 * (2 ** 0) + 0 * (2 ** 1) + 0 * (2 ** 2) + 1 * (2 ** 3)

15 / 2 = 7 (1)
7 / 2 = 3 (1)
3 / 2 = 1 (1)

9/2 = 4 (1)
4/2 = 2 (0)
2/2 = 1 (0) */

15 | 9 = 15

1111 | 1001 = 1111

15 ^ 9 = 6
// 1111 ^ 1001 = 0110

(~(0)) = -1

9 << 2 = 36  // num<<a means num multiplied by 2^a (num * 2^a)
// 1001 << 2 = 100100

9 >> 2 = 2    // num>>a means num divided by 2^a (num / 2^a)
// 1001 >> 2 = 0010


// Grouiping (Operator Precedence Rules) | BODMAS rules
console.log("**** Grouping ****")

let p = 1;
let q = 2;
let r = 3;

console.log(p + q * r) // 1 + 2 * 3 = 1 + 6 = 7
p + (q * r) // 7

(p + q) * r // (1 + 2) * 3 = 3 * 3 = 9

p * r + q * r = 1 * 3 + 2 * 3 = 3 + 6 = 9

p * (r + q) * r


// typeof
console.log("**** typeof ****")

typeof "tapas"; // "string"
typeof false; // "boolean"

let size = 100;
typeof size; // "number"

const numbers = [1,2,3,4]
typeof numbers; // "object"

typeof null; // "object"


// instanceof
console.log("**** instanceof ****")

// object instanceof objectType