// MERGE SORT

// QUESTION:       Given two finite non-empty sets, find the Cartesian Product.

// NOTE:

// In mathematics, specifically set theory, the Cartesian product of two sets of A and B, denoted A x B,
// is the set of all ordered pairs (a, b) where a is in A and b is in B

// PSEUDOCODE

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  //Reduce length of array to single arrays
  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

// Removes the smallest first element between the two arrays
function merge(leftArray, rightArray) {
  const sortedArr = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArr.push(leftArray.shift());
    } else {
      sortedArr.push(rightArray.shift());
    }
  }
  return [...sortedArr, ...leftArray, ...rightArray];
}

// TIME COMPLEXITY
// WORST CASE  :   O(nlogn)  -  There is a loop (n), and also the return is an array that is divided into smaller arrays (logn)

const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr)); // [-6, -2, 4, 8, 20]
