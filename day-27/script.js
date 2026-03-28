// JavaScript is Synchronous
// There can be async behaviors
// - With Browser APIs/Web APIs - setTimeout, setInterval
// - With Promises
// - With Event Handlers

// Event Loop
// - Call Stack
// - Web APIs
// - Callback Queue/Task Queue:
// - Job Queue/Microtask Queue:
// - Event Loop:
 

function f1() {
    console.log("f1");
}

function f2() {
    console.log("f2");
}

function main() {
    console.log("main");
    setTimeout(f1, 0);
    f2();
    console.log("End of main");
}
main();
// Output: "main" "f2" "End of main" "f1"

// Explanation:
// 1. When main() is called, it logs "main" to the console.
// 2. Then, setTimeout(f1, 0) is called, which schedules f1 to be executed after 0 milliseconds. However, it does not execute immediately; instead, it is placed in the Web APIs environment. and also placed in the Job Queue/Microtask Queue
// 3. Next, f2() is called, which logs "f2" to the console.
// 4. After that, "End of main" is logged to the console.
// 5. Once the call stack is empty (after main() finishes executing), the Event Loop checks the callback queue and finds f1 waiting to be executed. It then moves f1 from the Web APIs environment to the call stack and executes it, logging "f1" to the console.

function main2() {
    console.log("main");
    setTimeout(f1, 0);
    new Promise((resolve, reject) => {
        resolve("I am a promise!");
    }).then((resolve) => console.log(resolve));
    f2();
    console.log("End of main");
}
main2();
// Output: "main" "f2" "End of main" "I am a promise!" "f1"
 
// Explanation: if both queue are 
// 1. When main2() is called, it logs "main" to the console.
// 2. Then, setTimeout(f1, 0) is called, which schedules f1 to be executed after 0 milliseconds. However, it does not execute immediately; instead, it is placed in the Web APIs environment and also placed in the Job Queue/Microtask Queue.
// 3. Next, a Promise is created using new Promise(), which is then resolved with "I am a promise!". The .then() method is called on the Promise, which schedules the callback to log the resolved value to be executed in the Job Queue/Microtask Queue.
// 4. After that, f2() is called, which logs "f2" to the console.
// 5. Then, "End of main" is logged to the console.
// 6. Once the call stack is empty (after main2() finishes executing), the Event Loop first checks the Job Queue/Microtask Queue and finds the callback for the resolved Promise. It executes this callback, logging "I am a promise!" to the console.
// 7. Finally, the Event Loop checks the callback queue and finds f1 waiting to be executed. It then moves f1 from the Web APIs environment to the call stack and executes it, logging "f1" to the console.