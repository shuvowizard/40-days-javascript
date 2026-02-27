console.log("Day 24: Async and Await");

// - Promises: What are the problems?
// - Promise to await
// - async function
// - async/await together
// - Does await make things synchronous?
// - Error Handling with async/await
// - Project example
// - Top Level await
// - Multiple async/await
// - PizzaHub example with async and await
// - Tasks and assignments


const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("I am a promise");
    }, 1000)

});

promise.then((x) => console.log(x));

/**
 * The `async` is a keyword that usually we place before the function declaration. 
 * It is used to declare an asynchronous function. 
 * An async function always returns a Promise. 
 * The `await` keyword is used inside an async function to wait for a Promise to resolve or reject before proceeding with the execution of the code.
 * We cannot use `await` outside of an async function or a global scope. It will throw a syntax error if we try to do so.
*/

//* Returning a promise from an async function
async function foo() {
    return Promise.resolve(101);
}

async function tacklePromise() {
    const result = await foo(); // 101
    console.log(result);
}

console.log("I am after tacklePromise()");
console.log(tacklePromise());


//* Error handling with async/await
const errorPromise = new Promise((resolve, reject) => {
    reject("Error Occurred!");
})

async function handleErrorPromise() {
    try {
        await errorPromise;
    } catch (error) {
        console.error(error)
    }

}

handleErrorPromise();

// errorPromise.catch((error) => console.error(error));

//* Top level await
let stores;

(
    async () => {
        let response = await fetch('http://localhost:3000/api/pizzaburg');
        stores = await response.json();

        console.log(stores);
    }
)(); // IIFE

console.log(stores);


//* Multiple async/await

const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';



async function resolvePokemons() {
    const responses = Promise.allSettled([
        fetch(BULBASAUR_POKEMONS_URL),
        fetch(RATICATE_POKEMONS_URL),
        fetch(KAKUNA_POKEMONS_URL)
    ]);
    const results = await responses;
    console.log(results)

    const pk_1 = await results[0]?.value.json();
    const pk_2 = await results[1]?.value.json();
    const pk_3 = await results[2]?.value.json();

    console.log(pk_1);
    console.log(pk_2);
    console.log(pk_3);
}

async function resolvePokemonsV2() {
    const responses = await Promise.allSettled([
        fetch(BULBASAUR_POKEMONS_URL).then(response => response.json()),
        fetch(RATICATE_POKEMONS_URL).then(response => response.json()),
        fetch(KAKUNA_POKEMONS_URL).then(response => response.json())
    ]);

    console.log(responses);
}

resolvePokemonsV2();

