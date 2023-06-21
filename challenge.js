// QUICK SORT

// QUESTION:       Given an array of integers, sort the array.

// Note:
// 1) Identify the pivot element in the array.
// a) Pick first element as pivot
// b) Pick last element as pivot (Our approach)
// c) Pick a random element as pivot
// d) Pick median as pivot

// 2) Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array.

// 3) Repeat the processs for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition

// 4) Repeatedly concatenate the left Array, pivot and right array till one sorted array remains

// PSEUDOCODE

// THEREFORE
// sortedArr = [-5, 2, 4, 6, 10], t = 10  =  should return 4
// sortedArr = [-5, 2, 4, 6, 10], t = 6  =  should return 3
// sortedArr = [-5, 2, 4, 6, 10], t = 20  =  should return -1

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// TIME COMPLEXITY
// WORST CASE :   Big-O : O(n^2) - It is Quadratic time complexity because an already sorted array is split into and empty array then a full array
// AVERAGE CASE  :   O(nlogn)  -  There is a loop (n), and also the return is an array that is divided into smaller arrays (logn)

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr)); // [-6, -2, 4, 8, 20]
