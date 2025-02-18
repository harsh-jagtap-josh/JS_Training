// QUESTION ->
// 1. What is the difference between ++i and i++?

let i = 10;
console.log(i++);
console.log(i);

i = 10;
console.log(++i);
console.log(i);

// ANSWER ->
// here while i++ increments the value of i after logging it, ++i will increment the value of i first and pass this value to the logging function.

// =======================================================================================================================

// QUESTION ->
// 2. What do you think would happen if you pass an index beyond the range of the string?
// Or if you pass a negative index? Try it out.

let str1 = "HelloWorld";
console.log(str1[100]);
console.log(str1[-5]);

// ANSWER ->
// for both cases it returns `undefined`

// =======================================================================================================================

// QUESTION ->
// 3. Do you think JSON.stringify would work for arrays as well? What about nested objects?
// What happens if we pass numbers, strings, undefined, null to JSON.stringify?

console.log(JSON.stringify(123));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify({ a: "Hello" }));
console.log(JSON.stringify({ a: { a1: "Hello" }, b: { b1: "World" } }));
console.log(JSON.stringify(NaN));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));

// ANSWER ->
// It will convert all the value provided into strings even NaN and null will be converted to "null" string,
// but only for `undefined` JSON.stringify will return `undefined` type and not string.

// =======================================================================================================================

// QUESTION ->

// 4. What happens if you pass a regular/invalid JSON string to JSON.parse?
// What will happen if such an invalid function runs in the program?
// Will other parts of the code execute correctly after that?

let a = "invalidString";
let parsed = JSON.parse(a);
console.log(parsed);

// ANSWER ->
// It returns an error if we pass regular/invalid Json string to JSON.parse, thus it will stop program execution and return an error.
// No other part will executed after this code is executed.
