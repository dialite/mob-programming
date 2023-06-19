// POWER OF TWO

// QUESTION:       Given a natural number 'n', determine if the number is a pOWER OF 2 or not

// Note: An integer is a power of two if there exists an integer 'x' such that 'n' === 2^x.
// isPowerOfTwo(1) = true (2^0)
// isPowerOfTwo(2) = true (2^1)
// isPowerOfTwo(5) = false

// PSEUDOCODE
// N = 8

// 8/2 = 4 (remainder 0)
// 4/2 = 2 (remainder 0)
// 2/2 = 1 (remainder 0)
// If remainder is 0 and 'n' comes down to 1 eventually, n is a power of two

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

// TIME COMPLEXITY
// Big-O : O(logn) - Size reduces by half every iteration

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false
