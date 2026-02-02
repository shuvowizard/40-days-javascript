console.log('**** Examples ****');

// Example 1
const user = {
  name: 'Tapas',
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet(); // Hello, !
// Because the inner function is not a method of the user object, it does not have access to the name property of the user object.

// Fix this example using arrow function

const user2 = {
  name: 'Tapas',
  greet: function () {
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};

user2.greet(); // Hello, Tapas!
// Because the arrow function doesn't have its own this, It will always look into parent scope. So, this inside the arrow function will point to this particular scope which is user object.

// Example 2
const obj = {
  name: 'John',
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn(); // Hello, !
greetFn.call(obj); // Hello, John!   // Explicit Binding
