console.log("Async JavaScript - Callback");

// Callback is a great handle is a great mechanism to handle the result of an asynchronous operation.


function great(name, callback) {
    console.log(`Hello ${name}`);
    setTimeout(() => {
        callback();
    }, 2000);
    console.log("I am still hanging here")
}

function goodBye() {
    console.log("Good Bye");
}

great("Alpha", goodBye);
