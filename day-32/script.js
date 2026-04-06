console.log("Day 32: JavaScript Modules");

// Modules in JavaScript, and Why to Use ?
// Exports and Imports in JavaScript Module ?
// Default and Named Module Exports in JavaScript ?
// Aliases in JavaScript Module Import ?
// Namespaces in JavaScript Module ?
// Combined Export in JavaScript Module ?
// Dynamic Import in JavaScript Module ?
// How to Handle Multiple Imports Using JavaScript Promise APIs ?
// What is Tree Shaking & How Does It Help ?


import { sum, sub } from "./calculation.js";
// import { default as myName} from "./whoami.js";
import myName from "./whoami.js";


console.log(sum(10, 20));
console.log(sub(10, 5));

console.log(myName());

//* Module Aliases
// - When importing a module, you can give it an alias using the `as` keyword. This is useful when you want to avoid naming conflicts or when you want to use a shorter name for the imported module.

// import { sum as add, sub} from "./calculation.js";

// console.log(add(10, 20));


//* Namespaces
// - A namespace is a way to group related functions, objects, or values together under a single name. In JavaScript modules, you can create a namespace by exporting an object that contains all the related functions, objects, or values.

import * as calc from "./calculation.js";

console.log(calc.sum(10, 20));
console.log(calc.sub(10, 5));


//* Combined Export
// - In JavaScript modules, you can combine both default and named exports in a single module. This allows you to export a default value along with multiple named values from the same module.

import * as combined from "./combine.js";

console.log(combined.calc.sum(10, 20));
console.log(combined.calc.sub(10, 5));
console.log(combined.myName());


//* Dynamic Import
// - Dynamic imports allow you to load modules on demand, which can improve the performance of your application by reducing the initial load time. You can use the `import()` function to dynamically import a module.
// - Dynamic imports return a promise that resolves to the module object, which you can then use to access the exported values from the module.

const { sayHi, sayHello } = await import("./greeting.js");

sayHi();
sayHello();

// This particular syntax use anywhere any place in the code and it can keep inside a block. But it is commonly used inside functions or event handlers to load modules when they are needed. This can help reduce the initial load time of your application by only loading the modules that are necessary for a particular user interaction or feature.

if (true) {
    const { sayHi } = await import("./greeting.js");
    sayHi();
}


//*  Handle Multiple Imports Using JavaScript Promise APIs

const promises = Promise.all([
    await import("./calculation.js"),
    await import("./greeting.js")
]);

// console.log(promises);

promises.then((result) => {
    console.log(result[0].sum(10, 20));
    console.log(result[0].sub(10, 5));
    console.log(result[1].sayHi());
    console.log(result[1].sayHello());
})
