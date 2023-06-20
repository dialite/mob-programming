// BINARY SEARCH

// QUESTION:       Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// Note: Binary search only works for sorted arrays. You are sort then apply search for unsorted arrys.

// PSEUDOCODE
// If the array is empty reurn -1 as the element cannot be found
// If the array hass ElementInternals, find the middle element in the array. If the target is equal to the middle element, return the middle element index.
// If target is less than the middle Element, binary search left half of the array.
// If target is greater than the middle Element, binary search right half of the array.

// THEREFORE
// sortedArr = [-5, 2, 4, 6, 10], t = 10  =  should return 4
// sortedArr = [-5, 2, 4, 6, 10], t = 6  =  should return 3
// sortedArr = [-5, 2, 4, 6, 10], t = 20  =  should return -1

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    }
    leftIndex = middleIndex + 1;
  }
  return -1;
}

// TIME COMPLEXITY
// Big-O : O(logn) - It is Logrithmic time complexity because the loop halves after each iteration

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
