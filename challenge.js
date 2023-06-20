// RECURSIVE BINARY SEARCH

// QUESTION:       Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// Note: Binary search only works for sorted arrays. You are sort then apply search for unsorted arrys.

// PSEUDOCODE

// BASE CASE
// If the array is empty reurn -1 as the element cannot be found
// If the array hass ElementInternals, find the middle element in the array. If the target is equal to the middle element, return the middle element index.

// SOLUTION TO THE PROBLEM
// If target is less than the middle Element, binary search left half of the array.
// If target is greater than the middle Element, binary search right half of the array.

// THEREFORE
// sortedArr = [-5, 2, 4, 6, 10], t = 10  =  should return 4
// sortedArr = [-5, 2, 4, 6, 10], t = 6  =  should return 3
// sortedArr = [-5, 2, 4, 6, 10], t = 20  =  should return -1

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

// TIME COMPLEXITY
// Big-O : O(logn) - It is Logrithmic time complexity because the loop halves after each iteration

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1
