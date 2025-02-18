// Question 1
// a. What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break?
// b. Do statements after the loop run? What is the return value? Can we pass a return value from within a loop?
// c. Can you return from inside an if block? What impact does that have?

// ANSWER -->
// 1) a. Using a return instead of a break will directly exit the function without executing the code that may be there after loops or switch case block
// in the function itself. The return statement will lead to exit from loop as well as the whole function.
// the function will return an undefined object until something is actually returned.

const doSomethingWithBreak = (a) => {
  console.log("Start Loop for Break");
  for (let i = 0; i < a; i++) {
    console.log(i);
    if (i == 5) {
      break;
    }
  }

  console.log("Finish Loop for Break");
};

const doSomethingWithReturn = (a) => {
  console.log("Start loop for Return");
  for (let i = 0; i < a; i++) {
    console.log(i);
    if (i == 5) {
      return;
    }
  }
  console.log("Finish loop for Return");
};
doSomethingWithBreak(10);
doSomethingWithReturn(10);

// 1) b. The statements after the loop won't run, and the return value will be `undefined`. We can also return a value from within a loop.
// Code ->

let a = doSomethingWithReturn();
console.log("return value for function: ", a);

// 1) c. We can return from an if block, but if the `if` statement is executed, no code in the function will work which is after `if` statement.
// Code ->
