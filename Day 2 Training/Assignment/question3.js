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

// ========================================================================================================================

// const testAsyncFunction = () => {
//   return Promise.reject("Test static reject");
// };

// testAsyncFunction()
//   .then((res) => {
//     console.log("Response in then block", res);
//   })
//   .catch((err) => console.log("Error in catch block", err));

// ========================================================================================================================

// const testAsyncFunction = () => {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       resolve("Test Resolve");
//     } else {
//       reject("Test Reject");
//     }
//   }).catch((err) => {
//     console.log("Error caught in testAsyncFunction", err);
//     throw new Error("Forced error");
//   });
// };

// testAsyncFunction()
//   .then((res) => {
//     console.log("Response in then block: ", res);
//   })
//   .catch((err) => console.log("Error in catch block: ", err));
