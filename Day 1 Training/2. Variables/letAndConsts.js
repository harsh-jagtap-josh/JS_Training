// Use let and const to create arrays and objects. 
// Try modifying, deleting properties within the array or object. 
// What do you expect to happen in both cases? What actually happens in both cases. 
// What is the difference between an object declared as a let or a const variable? 


// Modifying Array declared as let variable
let letArray = [1,2,3,4,5]
letArray[2] = 10;
letArray.pop()
letArray.push(6)
console.log("Performing operations on Array declared using 'let':", letArray)

// Modifying Object declared as let variable
let letObject = {name: "harsh", age: 21}
letObject.age += 10
letObject.name = letObject.name.toUpperCase()
letObject.name += " Jagtap"
letObject.email = "harsh@mail.com"
console.log("Performing operations on Object declared using 'let':", letObject);

// Modifying Array declared as const variable
const constArray = [10,20,30,40,50]
constArray[2] = 10;
constArray.pop()
constArray.push(6)
console.log("Performing operations on Array declared using 'const':", constArray)

// Modifying Object declared as const variable
const constObject = {name: "John", age: 42}
constObject.age += 10
constObject.name = constObject.name.toUpperCase()
constObject.name += " Doe"
constObject.email = "john@mail.com"
console.log("Performing operations on Object declared using 'const':", constObject);

// ANSWER ==> There is no difference between an object declared using let or const, 
// just if we try to assign a new value to the const variables, it returns an error