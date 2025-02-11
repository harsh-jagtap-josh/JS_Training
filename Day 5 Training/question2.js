// Implement a Fibonacci sequence generator using a generator function in
// JavaScript.

function* generator(limit) {
  let t1 = 0;
  let t2 = 1;
  for (let i = 0; i < limit + 1; i++) {
    yield t1 + t2;
    temp = t1;
    t1 = t2;
    t2 = temp + t2;
  }
}

let NthFibonacciNumber = 10;

fibo = generator(NthFibonacciNumber);
for (let i = 0; i < NthFibonacciNumber; i++) {
  fibo.next();
}
console.log(fibo.next().value);
