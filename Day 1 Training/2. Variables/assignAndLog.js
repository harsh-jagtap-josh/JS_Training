// Declare a variable - let a;. On another line assign any value you like to a.
// Log the value of a before and after assignment. Try doing the same with const.

// Logging var before and after initialization using `let`
console.log(a);
let a;
a = 10;
console.log(
  "let creates a block scope variable, so if we try to access it before initialization it returns an error"
);

// Logging var before and after initialization using `const`
console.log(a1);
const a1 = 3.14;
console.log(
  `works same as let just the difference being the value stored in this variable cannot be changed.`
);

// Logging var before and after initialization using `var`
console.log(a2);
var a2;
a2 = 3.14;
console.log(`var creates a global or function scope variable, the new variable is hoisted and initialized with undefined value, 
  hence if we try to access the value before initialization it doesn't return an error, it returns an undefined value.`);
