// INSERTION SORT

// QUESTION:       Given an array of integers, sort the array.

// Note: In insertion sort, virtually split the array into a sorted and an unsorted part.
// Assume that the first element is already sorted and remaining elements are unsorted.
// Select an unsorted element and compare with all elements in the sorted part.
// If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part.
// Else, shift larger elements in the sorted part towards the right.
// Insert the selected element at the right index.
// Repeat till all the unsorted elements are placed in the right order.

// PSEUDOCODE

// BASE CASE
// If the array is empty reurn -1 as the element cannot be found
// If the array hass ElementInternals, find the middle element in the array. If the target is equal to the middle element, return the middle element index.

// THEREFORE
// sortedArr = [-5, 2, 4, 6, 10], t = 10  =  should return 4
// sortedArr = [-5, 2, 4, 6, 10], t = 6  =  should return 3
// sortedArr = [-5, 2, 4, 6, 10], t = 20  =  should return -1

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1; //'j' is the index of the sorted element
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
}

// TIME COMPLEXITY
// Big-O : O(n^2) - It is Quadratic time complexity because there are two loops

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]
