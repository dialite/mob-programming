// FACTORIAL OF A NUMBER

// QUESTION:       Given an integer 'n', find the factorial of that integer

// Note: Factorial of a non-negative integer "n", denoted n!, is the product of all positive integers less than or equal to 'n'.
// Factorial zero(0) is 1 and one(1) is also 1.
//       factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// TIME COMPLEXITY
// Big-O = O(n) - Linear Time Complexity

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120
