
//* Named Exports in JavaScript Module
// - In JavaScript, we can export multiple functions, objects, or values from a module using named exports. Each export is given a name, and we can import them using the same names in other modules.

export const sum = (a, b) => {
    return a + b;
};

export const sub = (a, b) => {
    return a - b;
}

// export { sum, sub};  
//? This is also a way to export multiple functions in JavaScript Module. We can use this syntax instead of exporting each function separately.