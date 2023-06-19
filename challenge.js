// FIBONACCI SEQUENCE

// QUESTION:       Given a number 'n', find the Fibonacci of that number in an array

// Fibonnacci is the sum of the previous two numbers in an array.

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// TIME COMPLEXITY
// Big-O= O(n) - Squecnce due to the presence of a loop

console.log(fibonacci(2)); //[0,1]
console.log(fibonacci(3)); //[0,1,1]
console.log(fibonacci(7)); //[0,1,1,2,3,5,8]
