// PRIME NUMBER

// QUESTION:       Given a natural number 'n', determine if the number is a prime or not

// Note: A prime number is a number greater than one(1) that is not a product of two(2) smaller natural numbers.
// isPrime(5) = true (1*5 or 5*1)
// isPrime(4) = false (1*4 or 2*2 or 4*1)

// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// // TIME COMPLEXITY
// // Big-O: O(n) - Linear time complexity

// FOR MORE EFFICIENCY ABOUT FOCUSING ON ONLY THE NUMBERS LESS THAN THE SQUARE ROOT OF 'n' The following can be done

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// TIME COMPLEXITY
// Big-O: O(sqrt(n)) - O of square root of n time complexity

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
