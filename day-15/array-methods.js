console.log('Day 15: JavaScript Array Methods');

//? JavaScript Array Methods
// concat()
{
    const first = [1, 2, 3];
    const second = [4, 5, 6];
    const third = [7, 8, 9];

    const merged = first.concat(second, third);
    console.log(merged);

    console.log(first); // [1, 2, 3]
    console.log(second); // [4, 5, 6]

    // array.concat(arr1, arr2,..,..,..,arrN);
}

// join() , array to string using separator
{
    const emotions = ["🙂", "😍", "🙄", "😟"];

    const joined = emotions.join("<=>");
    console.log(joined); // "🙂<=>😍<=>🙄<=>😟"

    [].join(); // return ""
}

// fill() , change array values with specific index
{
    const colors = ["red", "blue", "green"];
    colors.fill("pink", 1, 3);  // 1=index, 3=length no
    console.log(colors);  // ["red", "pink", "pink"]
}

// includes()
{
    const names = ["tom", "alex", "bob", "john"];

    console.log(names.includes("tom")); // true
    console.log(names.includes("july")); // false
}

// indexOf() and lastIndexOf()
{
    const names = ["tom", "alex", "bob", "tom"];

    names.indexOf("alex"); // 1
    names.indexOf("rob"); // -1

    names.indexOf("tom"); // 0
    names.lastIndexOf("tom"); // 3
}

// reverse()
{
    const names = ["tom", "alex", "bob"];
    console.log(names.reverse());
}

// sort()
// The default sort() method converts the element types into strings
//  The default sorting order is ascending.

{
    const names = ["tom", "alex", "bob"];
    console.log("After default sorting", names.sort());

    const artists = [
        "John White Abbott",
        "Leonardo da Vinci",
        "Charles Aubrey",
        "Anna Atkins",
        "Barents Average",
    ];

    console.log("Default sorting of artists array", artists.sort());

    // Sort the artist names(Descending)
    artists.sort(function (a, b) {
        return a === b ? 0 : a > b ? -1 : 1;
    });

    console.log("Sort the artist names(Descending)", artists);

    let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

    console.log(
        "age with default sorting",
        ages.sort(function (a, b) {
            return a === b ? 0 : a > b ? 1 : -1;
        })
    );
}

// splice() , remove, replace & add
{
    // splice(start, deleteCount, item, item1, item2)

    const names = ["tom", "alex", "bob"];

    //console.log(names.splice(0, 1, "john")); // ['tom']
    //console.log(names);

    //names.splice(1, 0, 'jack');

    names.splice(2, 1, "jack");
    console.log(names);  // ['tom', 'alex', 'jack']
}

// at() , get value by index
{
    const junkFoodILove = ["🥖", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🍿"];

    junkFoodILove.at(0); // '🥖'

    junkFoodILove.at(3); // '🍕'

    junkFoodILove.at(-1); // '🍿'

    junkFoodILove.at(-5); // '🍕'

    junkFoodILove.at(-8); // '🥖'

    junkFoodILove.at(10); // undefined
}

// copyWithin()
{
    // copyWithin(target, start, end)

    const array = [1, 2, 3, 4, 5, 6, 7];
    array.copyWithin(0, 3, 6);
    console.log(array);  // [4, 5, 6, 4, 5, 6, 7];

    const array1 = [1, 2, 3, 4, 5, 6, 7];
    array1.copyWithin(0, 4);
    console.log(array1);  // [5, 6, 7, 4, 5, 6, 7];
}

// flat() , nested array to flat (single) array
{
    const arr1 = [0, 1, 2, [3, 4]];
    console.log(arr1.flat());

    const arr2 = [0, 1, [2, [3, [4, 5]]]];
    console.log(arr2.flat(Infinity)); // [0, 1, 2, 3, 4, 5]
}

// grouping , grouping elements in Array of Objects
{
    const employees = [
        { name: "Bob", dept: "Engineering", salary: 5000 },
        { name: "Alex", dept: "HR", salary: 3000 },
        { name: "Ravin", dept: "Engineering", salary: 7000 },
        { name: "John", dept: "Engineering", salary: 1000 },
        { name: "Tom", dept: "Sales", salary: 6000 },
    ];

    const groupedByDet = Object.groupBy(employees, ({ dept }) => dept);
    console.log(groupedByDet);

    const groupedByMoreThan5000 = Object.groupBy(employees, ({ salary }) => {
        return salary >= 5000 ? "More than 5k" : "Less than 5k";
    });
    console.log(groupedByMoreThan5000);
}

// toReversed()
{
    const items = [1, 2, 3];

    const reversedItems = items.toReversed();

    console.log(reversedItems);  // [3, 2, 1]
    console.log(items);  // [1, 2, 3]
}

// toSorted()
{
    const months = ["Mar", "Jan", "Feb", "Dec"];
    const sortedMonths = months.toSorted();

    console.log(sortedMonths);
    console.log(months);
}

// toSpliced()
{
    const months = ["Jan", "Mar", "Apr", "May"];

    const months2 = months.toSpliced(1, 0, "Feb");

    console.log("Original Array", months);
    console.log("Spliced Array", months2);
}

// with() , replace array element by index
{
    const numbers = [1, 2, 3, 4, 5];

    // numbers[2] = 6;

    const newArray = numbers.with(2, 6);

    console.log(numbers); // Unchanged => [1, 2, 3, 4, 5];
    console.log(newArray); // Changed(A new copy) => [1, 2, 6, 4, 5];

    // numbers[-2] = 8 // undefined
    const anotherArray = numbers.with(-2, 8);
    console.log(numbers);
    console.log(anotherArray); // [1, 2, 3, 8, 5]
    // with(index, value)
}

//? Static Array Methods in JavaScript
// Array Like
{
    // {key: "value"} // object
    // [1,2,3] // array

    const arr_like = { 0: "I", 1: "am", 2: "array-like", length: 3 };

    console.log(arr_like);

    arr_like[2]; // 'array-like'
    arr_like.length; // 3

    console.log("is arr_like is an array?", Array.isArray(arr_like)); // false

    console.log("is arr_like is an object?", arr_like instanceof Object); // true

    function checkArgs() {
        console.log("Array Like Args", arguments);
        const argArr = [...arguments];
        console.log("Converted Array Args", argArr);
        argArr.forEach((elem) => {
            console.log(elem);
        });
    }

    checkArgs(1, 45);

    console.log(
        "HTML COllection as Array Like",
        document.getElementsByTagName("li")
    );
    const collectionArr = Array.from(document.getElementsByTagName("li"));
    console.log("Converted Array", collectionArr);
}

// fromAsync()
{
    const collectionPromise = Array.fromAsync(
        document.getElementsByTagName("li")
    );
    console.log("Converted Array", collectionPromise);

    collectionPromise.then((value) => console.log(value));

    const ret = Array.fromAsync({
        0: Promise.resolve("Microsoft"),
        1: Promise.resolve("Google"),
        2: Promise.resolve("Apple"),
        length: 3,
    }).then((value) => console.log(value));

    console.log(ret);
}

// of()
{
    const a = new Array(2, 3, 4); // [2,3,4]
    const b = [4, 5, 6]; // [4,5,6]

    const c = Array.of(2, true, "test", { name: "Alex" }, [1, 2, 3]);
    console.log("c", c);
}

//? Array Iterator Methods in JavaScript
let customers = [
  {
    id: 1,
    f_name: 'Abby',
    l_name: 'Thomas',
    gender: 'M',
    married: true,
    age: 32,
    expense: 500,
    purchased: ['Shampoo', 'Toys', 'Book'],
  },
  {
    id: 2,
    f_name: 'Jerry',
    l_name: 'Tom',
    gender: 'M',
    married: true,
    age: 64,
    expense: 100,
    purchased: ['Stick', 'Blade'],
  },
  {
    id: 3,
    f_name: 'Dianna',
    l_name: 'Cherry',
    gender: 'F',
    married: true,
    age: 22,
    expense: 1500,
    purchased: ['Lipstick', 'Nail Polish', 'Bag', 'Book'],
  },
  {
    id: 4,
    f_name: 'Dev',
    l_name: 'Curtain',
    gender: 'M',
    married: true,
    age: 82,
    expense: 90,
    purchased: ['Book'],
  },
  {
    id: 5,
    f_name: 'Maria',
    l_name: 'Gomez',
    gender: 'F',
    married: false,
    age: 7,
    expense: 300,
    purchased: ['Toys'],
  },
];

// filter() - Get 'Senior Citizens' by Filtering out other customers
// arr.filter((element, index, array) => { do something here... });

const seniorCustomers = customers.filter((customer) => {
    return customer.age >= 60;
});
console.log("Senior Customer list", seniorCustomers);

// map() - Transform to add title and full name
// arr.map((currentValue, index, array) => { do something here... });

const customersWithFullName = customers.map((customer) => {
    let title = "";

    if (customer.gender === "M") {
        title = "Mr.";
    } else if (customer.gender === "F" && customer.married) {
        title = "Mrs.";
    } else {
        title = "Miss";
    }

    customer["full_name"] = `${title} ${customer.f_name} ${customer.l_name}`;

    return customer;
});

console.log("Customer after adding fullname", customersWithFullName);

// reduce() - To deduce the arrays element values into a single value. The average age of the Customers who have purchased the Item, 'Book'.

/**
 * arr.reduce(reducer(accumulator, currentValue, index, array), initialValue);
 * A reducer function which is also called as callback function to be called on each element of the array.
 * const ret = function reducer(accumulator, currentValue, index, array) {
    do something with accumulator and current value
    You get a result
    You return that result
  };
*/
{
const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(result);
}

let count = 0;
const total = customers.reduce((accumulator, customer) => {
    if (customer.purchased.includes("Book")) {
        accumulator = accumulator + customer.age;
        count = count + 1;
    }
    return accumulator;
}, 0);

console.log("Customer Avg age Purchased Book:", Math.floor(total / count));

// reduceRight() -- To reduce from the right

let number = [100, 40, 15];

const subsResult = number.reduceRight((accumulator, current) => {
    return accumulator - current;
});

console.log("Subs", subsResult);  // -125

// some() - Do we have a one Young Customer(age less than 10 years)?

const hasYoungCustomer = customers.some((customer) => {
    return customer.age < 10;
});

console.log("Has Young Customer(Age < 10):", hasYoungCustomer); // true

// every() - Every Customer is Married?

const isAllMarried = customers.every((customer) => {
    return customer.married;
});

console.log("All Customer Married?:", isAllMarried); // false

// find() - Find the youngest customer

const foundYoungCustomer = customers.find((customer) => {
    return customer.age < 10;
});

console.log("Found Young Customer(Age < 10): ", foundYoungCustomer); // returns object

// findIndex() method - return the index
const youngCustomerIndex = customers.findIndex((customer) => {
    return customer.age < 10;
});

console.log("Found Young Customer Index: ", youngCustomerIndex);  // 4

// findLast() method - return the matching object 

const lastFoundYoungCustomer = customers.findLast((customer) => {
    return customer.age < 10;
});
console.log(
    "[find] Last Found Young Customer(Age < 10): ",
    lastFoundYoungCustomer
); // object


//? Array method Chaining

/**
 * Use Case: Get the total amount spent by Married Customers
 * filter()
 * map()
 * reduce()
 * Find all the married customers
 */

const totalExpense = customers
    .filter((customer) => {
        return customer.married;
    })
    .map((marriedCustomer) => {
        return marriedCustomer.expense;
    })
    .reduce((accumulator, expense) => {
        return accumulator + expense;
    }, 0);

console.log("Total Expense of Married Customers in INR: ", totalExpense);  // 2190

// forEach()

/**
 * forEach() method iterating over array elements and its execute a particular function that we pass as a callback to the forEach method.
 * arr.forEach(function(element, index, array) => { ... });
 * forEach() is not return any value
 * reduce() return a single value after reduction
 * map() return an array with transformation done
 * filter() return an array with filtered elements
 */

const arr = [1, 2, 3, 4, 5];

let sum = 0;
arr.forEach((elem) => {
    sum = sum + elem;
    //console.log(elem)
});
console.log("Sum using forEach", sum)  // 15

// entries() - Iterator ia a special kind of object that can be used to iterate over an array

const arrItr = arr.entries();
console.log("Array Iterator", arrItr.next().value) // [0, 1]
console.log("Array Iterator", arrItr.next().value) // [1, 2]

for(const [index, element] of arrItr) {
    console.log(index, element)
}

// values() - get only the values over iterating the array

const arrItr2  = arr.values();

for (const value of arrItr2) {
    console.log(value);
}

// flatMap()

const arr1 = [1, 2, 3, 4];

console.log("simple map", arr1.map(item => item *2));
console.log("simple flatmap", arr1.flatMap(item => item *2));

console.log("complex map", arr1.map(item => [item *2])); //[[2], [4], [6],..]
console.log("complex flat map", arr1.flatMap(item => [item *2]));

arr1.map(item => [[item *2]]);
arr1.flatMap(item => [[item *2]])