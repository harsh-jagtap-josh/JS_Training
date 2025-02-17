// Question -->
// Create a memoised function that returns the cached value when the same arguments
// are passed.

const factorial = (a) => {
  let ft = 1,
    itr = a;

  while (itr > 1) {
    ft *= itr;
    itr--;
  }

  return ft;
};

const memoizeFactorial = (factorial) => {
  let cache = {};
  return (input) => {
    if (cache[input] != null) {
      console.log("Returning from cache!");
      return cache[input];
    } else {
      let result = factorial(input);
      cache[input] = result;
      return result;
    }
  };
};

let getFactorial = memoizeFactorial(factorial);
console.log(getFactorial(2));
console.log(getFactorial(3));
console.log(getFactorial(2));
console.log(getFactorial(4));

// -->
// Thus, first we call getFactorial and pass 2 to it, it was return and cache its value,
// so next time if we pass the same parameter, it can return the value stored in cache instead of re-calculateing the whole.
