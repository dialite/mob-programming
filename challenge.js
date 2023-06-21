// CARTESIAN PRODUCT

// QUESTION:       Given two finite non-empty sets, find the Cartesian Product.

// NOTE:

// In mathematics, specifically set theory, the Cartesian product of two sets of A and B, denoted A x B,
// is the set of all ordered pairs (a, b) where a is in A and b is in B

// PSEUDOCODE

function cartesianProduct(arr1, arr2) {
  const result = [];

  for (let a = 0; a < arr1.length; a++) {
    for (let b = 0; b < arr2.length; b++) {
      result.push([arr1[a], arr2[b]]);
    }
  }
  return result;
}
// TIME COMPLEXITY
// WORST CASE  :   O(m*n)  -  Because the length of the arrays can be different

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesianProduct(arr1, arr2)); // [-6, -2, 4, 8, 20]
