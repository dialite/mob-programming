// RECURSIVE FIBONACCI SEQUENCE

// QUESTION:       Given a number 'n', find the n^th element of the Fibonacci sequence.

// Note: A Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
// recursiveFibonacci(0) = 0
// recursiveFibonacci(1) = 1
// recursiveFibonacci(6) = 8

// PSEUDOCODE
// N = 8

// 6, 7  =  8
// 4, 5 = 6 and 5, 6 = 7
// 2, 3 = 4   3, 4 = 5   5, 4 = 5   4, 5 = 6

// THEREFORE
// Fn = F(n - 1) + F(n - 2);
// F(0) = 0 and F(1) = 1    ---- Base case
// F(2) = F(1) + F(0)

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// TIME COMPLEXITY
// Big-O : O(2^n) - It is 2 raise to the power of n

console.log(recursiveFibonacci(0)); // 1
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8
