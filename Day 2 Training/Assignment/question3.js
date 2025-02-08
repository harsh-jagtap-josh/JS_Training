// What will be printed to the console when the promise resolves and when it rejects?

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction: ", err);
  });
};

testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

// ANSWER ==>

// here the answer can be random, if the 'if' condition satisfies then it will console log "Response in the block: Test Resolve",
// but if it doesn't then the catch block will handle the error, hence will console log: 'Error caught in testAsyncFunction: Test Reject'
// when the testAsyncFunction is called here it doesn't pass the error to catch block whereas the then block handles it because the error was already handled in function itself.
// however if we remove catch block from the function itself then the catch block in the function call will work..

// ========================================================================================================================

// What will be printed to the console?

const testAsyncFunction1 = () => {
  return Promise.reject("Test static reject");
};

testAsyncFunction1()
  .then((res) => {
    console.log("Response in then block", res);
  })
  .catch((err) => console.log("Error in catch block", err));

// ANSWER ==>

// here, will always return a reject because Promise return a reject and no resolve, hence catch block will handle it everytime, and console log 'Error in catch block Test static reject'

// ========================================================================================================================

// What will be printed to the console?

const testAsyncFunction2 = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction", err);
    throw new Error("Forced error");
  });
};

testAsyncFunction2()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

// ANSWER ==>

// same as question one, there will no difference if the promise is fulfilled, but when it is not here the catch block in the function will run,
// as well as the catch block in the outer function call will run because even though we are handling the reject in the catch block inside the function, there is one more error returned in the catch block,
// hence this error will be handled but the outer function catch block..
