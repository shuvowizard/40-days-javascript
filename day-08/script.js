/**
 *! 🔷 JavaScript Execution Context কী?
 * 👉 Execution Context হলো এমন একটা environment, যেখানে JavaScript কোড চলে (execute হয়)।
 */

/**
 * * 🔷 Execution Context ৩ ধরনের 👇
 * 👉 Global Execution Context (GEC)
 * 👉 Function Execution Context (FEC)
 * 👉 Eval Execution Context
 */

/**
 * * 1️⃣ Global Execution Context (GEC).
 * 👉 যখনই কোনো JavaScript ফাইল ব্রাউজারে লোড করা হয়, তখনই সবার আগে এটা তৈরি হয়।
 * 👉 GEC হলো ডিফল্ট বা ডিফল্ট Execution Context যেখানে সমস্ত গ্লোবাল কোড (যা ফাংশনের ভিতরে নেই) চলে।
 * 👉 GEC এর মধ্যে থাকে:
    * - গ্লোবাল ভেরিয়েবল
    * - গ্লোবাল ফাংশন
    * - `this` কিওয়ার্ড → browser-এ window অবজেক্টকে রেফার করে
👉 GEC এর মধ্যে ভেরিয়েবল এবং ফাংশন ডিক্লারেশন গুলো হোইস্টিং (hoisting) হয়, যার মানে হলো এগুলোকে মেমরিতে আগে থেকে সংরক্ষণ করা হয়।
 */

/**
 * * 2️⃣ Function Execution Context (FEC).
 * 👉 যখনই কোনো ফাংশন কল করা হয়, তখন একটি নতুন Execution Context তৈরি হয়, যাকে FEC বলা হয়।
 * 👉 FEC হলো সেই Execution Context যেখানে ফাংশনের ভিতরের কোড এক্সিকিউট হয়।
 * 👉 FEC এর মধ্যে থাকে:
 * - ফাংশনের প্যারামিটার
 * - ফাংশনের ভিতরের ভেরিয়েবল
 * - `this` কিওয়ার্ড → ফাংশনের কলিং কনটেক্সট অনুযায়ী ভিন্ন ভিন্ন মান পেতে পারে
 */

/**
 * * 3️⃣ Eval Execution Context (EEC).
 * 👉 যখনই `eval()` ফাংশন ব্যবহার করা হয়, তখন একটি নতুন Execution Context তৈরি হয়।
 * 👉 EEC হলো সেই Execution Context যেখানে `eval()` ফাংশনের ভিতরের কোড এক্সিকিউট হয়।
 * 👉 বাস্তবে খুব কম ব্যবহার করা হয়
 */

/**
 * * 📌 Execution Context এর গুরুত্বপূর্ণ পয়েন্টস 👇
 * 👉 তিটা Execution Context-এ ২টা Phase থাকে
 *   - Creation Phase (memory creation)
 *   - Execution Phase (code execution)
 * 👉 Creation Phase এ, JavaScript ইঞ্জিন ভেরিয়েবল এবং ফাংশন ডিক্লারেশন গুলোকে মেমরিতে সংরক্ষণ করে।
 * 👉 Execution Phase এ, কোডটি লাইন বাই লাইন এক্সিকিউট করা হয়।
 */

//? Example:
var globalVar = 'I am a global variable';

function globalFunction() {
  console.log('I am a global function');
}

globalFunction(); // Calling global function
console.log(this); // 'this' refers to the global object (window in browsers)

/**
 * `GEC` (for the entire script)
 *  *  ├── Creation Phase
 * *  │     ├── globalVar: undefined
 * *  │     ├── globalFunction: allocated in memory
 * *  │     └── this: window object
 *  *  └── Execution Phase
 * *        ├── globalVar: "I am a global variable"
 * *        ├── globalFunction: function code executed
 * *        └── this: window object
 * `FEC` (for `globalFunction`)
 *  *  ├── Creation Phase
 * *  │     ├── No parameters
 * *  │     ├── local variables: none
 * *  │     └── this: depends on how the function is called
 *  *  └── Execution Phase
 * *        ├── `FEC` (for log() function)
 * *        │     ├── Creation Phase
 * *        │     │     ├── No parameters
 * *        │     │     ├── local variables: none
 * *        │     │     └── this: depends on how the function is called
 * *        │     └── Execution Phase
 * *        │           └── console output: "I am a global function"
 * *        └── this: depends on how the function is called
 */

/**
 *! 🔷 Call Stack কীভাবে কাজ করে?
 *👉 Execution Context গুলো Call Stack-এ থাকে
 * 👉 Stack rule: `LIFO` (Last In, First Out)
 * 👉 Call Stack হলো একটি ডাটা স্ট্রাকচার যেখানে JavaScript এক্সিকিউশন কনটেক্সটগুলোর মধ্যে ক্রমবদ্ধভাবে পরিচালনা হয়।
 * 👉 JavaScript Engine (যেমন Chrome V8) Execution Context-এর মধ্যে Call Stack-এর মাধ্যমে পরিচালনা করে।
 * 👉 Execution Context-এর মধ্যে Call Stack-এর মাধ্যমে JavaScript Engine-এর Control Flow (Control Flow) Management (Control Flow Management)
 * 👉 Execution Context-এর Creation Phase, Execution Phase, and Cleanup Phase (Execution Context Cleanup)
 * 👉 Call Stack-এর Top Element (Top Element of the Call Stack)
 * 👉 Call Stack-এর Bottom Element (Bottom Element of the Call Stack)
 */

//? Example:
console.log('Inside Global Execution Context');
var a = 5;
function testMe() {
  console.log('Inside testMe Execution context');
  var b = 10;
  var user = {
    name: 'shuvo',
    country: 'barisal',
  };
  function testAgain() {
    console.log('Inside testAgain Execution Context');
    console.log('Exiting testAgain Execution Context');
  }
  testAgain();
  console.log('Exiting testMe execution context');
}
testMe();
console.log('Exiting global execution context');

/**
 * `Call Stack` Execution Flow:
 * 1. Global Execution Context created and pushed to Call Stack
 * 2. 'Inside Global Execution Context' logged
 * 3. testMe Execution Context created and pushed to Call Stack
 * 4. 'Inside testMe Execution context' logged
 * 5. testAgain Execution Context created and pushed to Call Stack
 * 6. 'Inside testAgain Execution Context' logged
 * 7. 'Exiting testAgain Execution Context' logged
 * 8. 'Exiting testMe execution context' logged
 * 9. 'Exiting global execution context' logged
 */

/**
 * `GEC` (for the entire script)
 *  *  ├── Creation Phase
 * *  │     ├── a: undefined
 * *  │     ├── testMe:f() allocated in memory
 * *  │     └── this: window object
 * *  └── Execution Phase
 * *        ├── 'Inside Global Execution Context' logged
 * *        └── a = 5
 * *        └── testMe() called
 * `FEC` (for testMe)
 *  *  ├── Creation Phase
 * *  │     ├── b: undefined
 * *  │     ├── user: undefined
 * *  │     └── this: window object
 * *  └── Execution Phase
 * *        ├── 'Inside testMe Execution context' logged
 * *        ├── b = 10
 * *        ├── user = {name: 'shuvo', country: 'barisal'}
 * *        └── testAgain() called
 * `FEC` (for testAgain)
 *  *  ├── Creation Phase
 * *  │     └── this: window object
 * *  └── Execution Phase
 * *        ├── 'Inside testAgain Execution Context' logged
 * *        └── 'Exiting testAgain Execution Context' logged
 * *  └── Cleanup Phase
 * *        └── 'Exiting testMe execution context' logged
 * `GEC` (for the entire script)
 *  *  └── Cleanup Phase
 * *        └── 'Exiting global execution context' logged
 */


/**
 *! 🔷 Execution Context এবং Call Stack এর মধ্যে পার্থক্য কী?
 * 👉 Execution Context হলো একটি environment যেখানে JavaScript কোড এক্সিকিউট হয়, আর Call Stack হলো একটি ডাটা স্ট্রাকচার যা Execution Context গুলোকে ক্রমবদ্ধভাবে পরিচালনা করে।
 * 👉 Execution Context হলো কোড এক্সিকিউশনের জন্য প্রয়োজনীয় তথ্য ধারণ করে, যেমন ভেরিয়েবল, ফাংশন, এবং `this` কিওয়ার্ড, আর Call Stack হলো সেই স্ট্রাকচার যা Execution Context গুলোকে ট্র্যাক করে এবং তাদের মধ্যে ক্রম নির্ধারণ করে।
 */