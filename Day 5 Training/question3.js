// QUESTION -->
// Share a minimum four differentiation between regular function and arrow
// functions with one examples

// ========================================================================================================================================

// Difference 1

// The most obvious - syntax difference between both, to declare normal functions we need to mention `function` keyword

const calcSum = (a, b) => {
  return a + b;
};

function sum(a, b) {
  return a + b;
}

// ========================================================================================================================================

// Difference 2

// When we try to access members of an object using `this` keyword in an arrow function and normal function,
// normal function will return the attribute whereas arrow function will always return undefined.

let obj1 = {
  name: "harsh",
  func: function () {
    return this.name;
  },
};

let obj2 = {
  name: "harsh",
  func: () => this.name,
};

console.log(obj1.func());
console.log(obj2.func());

// ========================================================================================================================================

// Difference 3

// Hoisting - It can only be observed in normal functions and not in Arrow functions,

hoistingInNormal();
// hoistingInArrow(); // returns an error

function hoistingInNormal() {
  console.log("Hoisting in Normal Functions");
}

var hoistingInArrow = () => {
  console.log("Hoisting in Arrow Functions");
};

// ========================================================================================================================================

// Difference 4

// Constructors - Normal functions can be used as constructors whereas arrows functions cannot..

class User {
  constructor(name, email) {
    (this.name = name), (this.email = email);
  }
}

var user1 = new User("Harsh", "harsh@gmail.com");
var user2 = () => {};
