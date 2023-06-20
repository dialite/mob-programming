// RECURSIVE FACTORIAL OF A NUMBER

// QUESTION:       Given a integer 'n', find the factorial of that integer.

// Note: A Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
// recursiveFactorial(0) = 1
// recursiveFactorial(3) = 6
// recursiveFibonacci(4) = 24

// PSEUDOCODE
// n = 5  =  5*4*3*2*1  = 5 * 4!   =   120
// n = 4  =  4*3*2*1  =  4 * 3! =  24
// n = 3  =  3*2*1  =  3 * 2!  =  6                                 n!= n*(n-1)!
// n = 2  =  2*1  =  2 * 1!  =  2
// n = 1  =  1  =  1 * 0! = 1
// n = 0  =  1

// THEREFORE
// Fn = F(n - 1) + F(n - 2);
// F(0) = 0 and F(1) = 1    ---- Base case
// F(2) = F(1) + F(0)

function recursiveFactorial(n) {
  // n! = n * (n - 1)!
  if (n === 0) {
    //Base case
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

// TIME COMPLEXITY
// Big-O : O(n) - It is Linear because the higher n is, the more the number of instructions executed of n

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(3)); // 6
console.log(recursiveFactorial(5)); // 120
