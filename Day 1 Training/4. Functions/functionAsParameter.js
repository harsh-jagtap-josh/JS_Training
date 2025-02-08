// Take a function that accepts a function as a parameter (also known as callback function).
// Explore the following cases - what is printed in the console, and what gets returned:
// a. test(callbackFunc)
// b. test(callbackFunc())
// c. test(() => callbackFunc())
// d. What happens when you return callback() from the test function?
// e. What happens when you return callback from the test function?

function test(callback) {
  return callback();
}

function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}

test(callbackFunc); // Executes the Callback Function and returns a value 5
test(callbackFunc()); // returns Error - 'callback is not a function' because calling it while passing as argument itself returns a value 5, it would same as test(5), the function test further will be 'return callback()' i.e. '5()', which is invalid or 'not a function'.
test(() => callbackFunc()); // Executes callback function and returns a value 5

//=====================================================================================================================

// d. What happens when you return callback() from the test function?
// e. What happens when you return callback from the test function?

// function test2(callback) {
//   console.log("Calling test2");

//   return callback();
// }

// function test3(callback) {
//   console.log("Calling test3");
//   return callback;
// }

// function callbackFunc() {
//   console.log("Calling the callback function");
//   return 5;
// }

// test2(callbackFunc); // works fine here.. as we take callback function as an input and call the callback function returning it at the same time, which will return the value 5 which is not stored anywhere, hence only a log.
// test3(callbackFunc); // here we only take a function as input and return the same function without even executing it, hence the return value is also a function. If store this value in a variable, this variable can be called as it will basically store the callback function.

// // test3 function will be executed if we call the whole as given below:
// test3(callbackFunc)();
