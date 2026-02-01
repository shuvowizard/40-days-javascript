console.log('Learn Object Destructuring & Optional Chaining');

const student = {
  name: 'John Williamson',
  age: 9,
  std: 3,
  subjects: ['Maths', 'English', 'EVS'],
  parents: {
    father: 'Brown Williamson',
    mother: 'Sophia',
    email: 'john-parents@abcde.com',
  },
  address: {
    street: '65/2, brooklyn road',
    city: 'Carterton',
    country: 'New Zealand',
    zip: 5791,
  },
};
// const name = student.name;
// const age = student.age;
// const meal = student.meal || "bread";
// console.log(name, age, meal);

const { name, age, meal = 'bread' } = student; // object destructuring
console.log(name, age, meal);

const { subjects, numberOfSubjects = subjects.length } = student;
console.log(numberOfSubjects); // 3

const { std: standard } = student; // property aliasing
console.log(standard); // 3

const {
  address: { zip },
} = student; // nested object destructuring
console.log(zip); // 5791

// Destructuring to function parameters
function sendEmail({ parents: { email } }) {
  console.log(`Sent an email to ${email}`);
}

sendEmail(student);

// Destructure a function return value
const getStudent = () => {
  return {
    name: 'John Williamson',
    age: 9,
    std: 3,
    subjects: ['Maths', 'English', 'EVS'],
    parents: {
      father: 'Brown Williamson',
      mother: 'Sophia',
      email: 'john-parents@abcde.com',
    },
    address: {
      street: '65/2, brooklyn road',
      city: 'Carterton',
      country: 'New Zealand',
      zip: 5791,
    },
  };
};

const { name: anotherName, subjects: anotherSubs } = getStudent();
console.log(anotherName, anotherSubs); // John Williamson [ 'Maths', 'English', 'EVS' ]

// Destructure an array of objects
const students = [
  {
    name: 'William',
    grade: 'A',
  },
  {
    name: 'Tom',
    grade: 'A+',
  },
  {
    name: 'Bob',
    grade: 'B',
  },
];

for (let { name, grade } of students) {
  console.log(name, grade);
}

//* Optional Chaining

const employee = {
  salary: {
    bonus: 300,
  },
};

console.log(employee.department); // undefined

//console.log(employee.department.empName); // Error

// const empName = employee.department && employee.department.empName

const empName = employee.department?.empName;
console.log(empName);