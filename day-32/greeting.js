
//* Dynamic Import
// - Dynamic imports allow you to load modules on demand, which can improve the performance of your application by reducing the initial load time. You can use the `import()` function to dynamically import a module.


const sayHi = () => {
    console.log("Hi, I am a dynamic import");
}

const sayHello = () => {
    console.log("Hello, I am a dynamic import");
}   

export { sayHi, sayHello };