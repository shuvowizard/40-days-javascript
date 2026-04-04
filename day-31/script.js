console.log("Day 31/40 Days of JavaScript - Prototypes and Object Patterns");

//  JavaScript Object Literals Pattern
//  Ways To Extract Values From Objects
//  JavaScript Object and The const Keyword
//  JavaScript Functions vs Methods
//  The Constructor Function Pattern
//  Composing Objects and References
//  Object Prototypes
//  Prototype Chain
//  Constructor Function Visually
//  The "prototype" Property
//  Prototype To Save Memory
//  Prototype Chain(Lookup) Visually
//  JavaScript Class Pattern
//  The Object.create() Pattern
//  How To Get Prototype Of An Object
//  How To Set An Object Prototype

//  Ways To Extract Values From Objects

const user = {
    "name" : "Shuvo",
    "address": {
        "street": "123 Main St",
        "city": "Dhaka",
        "country": "Bangladesh"
    },
    "age": 30,
    "hobbies": ["coding", "traveling", "cooking"],
    "unique-number": "A0324K"
}

console.log(user.name); // Shuvo

console.log(user["unique-number"]); // A0324K

const myAge = "age";

console.log(user.age); // 30

console.log(user.myAge);  // undefined, because there is no property named "myAge" in the user object.
console.log(user[myAge]); // 30


//  JavaScript Functions vs Methods
const person = {
    name: "Shuvo",
    magicNumber: function () {
        return Math.random();
    }
};
// When an Object has a function as a property, we call it a method. In the above example, magicNumber is a method of the person object.


//  The Constructor Function Pattern
function Car(model, year, color, owner) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = owner;
    this.wheelNumber = function () {
        return 4;
    }
}

const bmw = new Car("BMW", 2020, "Black", "Jane Doe");
bmw.wheelNumber(); // 4

const tesla = new Car("Tesla", 2021, "White", "John Doe");
console.log(tesla); // Car { model: 'Tesla', year: 2021, color: 'White', owner: 'John Doe', wheelNumber: [Function] }

bmw === tesla; // false


//  Composing Objects and References
function Owner(name, age) {
    this.name = name;
    this.age = age;
}

const shuvo = new Owner("Shuvo", 30);
const shuvoBMW = new Car("BMW", 2020, "Black", shuvo);
console.log(shuvoBMW) // Car { model: 'BMW', year: 2020, color: 'Black', owner: Owner { name: 'Shuvo', age: 30 }, wheelNumber: [Function] }

shuvo.age = 55;
console.log(shuvoBMW) // Car { model: 'BMW', year: 2020, color: 'Black', owner: Owner { name: 'Shuvo', age: 55 }, wheelNumber: [Function] }


//  Object Prototypes
const ferrari = new Car("Ferrari", 2022, "Red", {}); 
console.log(ferrari); 


//  The "prototype" Property
console.log(Car.prototype);


// Prototype Chain(Lookup) Visually
console.log(ferrari.hasOwnProperty('model'));  // true, because "model" is a property of ferrari object.


//  Prototype To Save Memory
function Car2(model, year, color,) {
    this.model = model;
    this.year = year;
    this.color = color;
}

const bmw2 = new Car2("BMW", 2020, "Black");
console.log(bmw2);

Car2.prototype.wheelNumber = function () {
    return 4;
}

console.log(bmw2); 
console.log(bmw2.wheelNumber()); // 4


//  JavaScript Class Pattern
class Car3 {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
    wheelNumber() {
        return 4;
    }
}

const bmw3 = new Car3("BMW", 2020, "Black");
console.log(bmw3);


//  The Object.create() Pattern
const vehicle = {
    type: "car",
    wheelNumber: 4,
    showInfo: function () {
        return (`This is a ${this.type} and it has ${this.wheelNumber} wheels.`);

    }
}

const myCar = Object.create(vehicle);
console.log(myCar); // {}
console.log(myCar.showInfo()); // This is a car and it has 4 wheels.

myCar.name = "BMW";
myCar.color = "Black";
myCar.showInfo = true;

console.log(myCar);

const car = Object.create(vehicle, { headlight: { value: "LED" }, });
console.log(car);

//  How To Get Prototype Of An Object
console.log(Object.getPrototypeOf(bmw3)); 
console.log(Object.getPrototypeOf(myCar)); 


//  How To Set An Object Prototype
Object.setPrototypeOf(myCar, {});


//  How To Get Object Properties
console.log(Object.keys(myCar)); // [ 'name', 'color', 'showInfo' ]
console.log(Object.values(myCar)); // [ 'BMW', 'Black', true ]
console.log(Object.entries(myCar)); // [ [ 'name', 'BMW' ], [ 'color', 'Black' ], [ 'showInfo', true ] ]
