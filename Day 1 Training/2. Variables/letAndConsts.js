// Use let and const to create arrays and objects.
// Try modifying, deleting properties within the array or object.
// What do you expect to happen in both cases? What actually happens in both cases.
// What is the difference between an object declared as a let or a const variable?

// Modifying Array declared as let variable
let letArray = [1, 2, 3, 4, 5];
letArray[2] = 10;
letArray.pop();
letArray.push(6);
console.log(
  "Performing operations on Array declared using 'let' return [1,2,10,4,6] as expected."
);

// Modifying Object declared as let variable
let letObject = { name: "harsh", age: 21 };
letObject.age += 10;
letObject.name = letObject.name.toUpperCase();
letObject.name += " Jagtap";
letObject.email = "harsh@mail.com";
console.log(
  `Performing operations on Object declared using 'let' returns output as expected: {name: 'HARSH Jagtap', age: '31', email: 'harsh@gmail.com'}`
);

// Modifying Array declared as const variable
const constArray = [10, 20, 30, 40, 50];
constArray[2] = 10;
constArray.pop();
constArray.push(60);
console.log(
  `Performing operations on Array declared using 'const' returns [10, 20, 10, 40, 60],
    here performing operation on a const variable dont return an error because const only returns error on reassignment and not on modification,
    thus variable holding array can be modified but we cannot reassign it new value, it return an error 'Assignment to constant variable'  
  `
);

// Modifying Object declared as const variable
const constObject = { name: "John", age: 42 };
constObject.age += 10;
constObject.name = constObject.name.toUpperCase();
constObject.name += " Doe";
constObject.email = "john@mail.com";
console.log(
  `Returns an object: {name: "JOHN Doe", age: 52, email: "john@mail.com"} as expected, similar behavior as array declared using 'const' above`
);

// An object declared using 'let' can be modified as well as reassigned a new value,
// whereas a variable created using const can only be 'modified'
