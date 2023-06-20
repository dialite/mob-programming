// BUBBLE SORT

// QUESTION:       Given an array of integers, sort the array.

// Note: In bubble sort, you compare adjacent elements in the array and swap the positions if they are not in the intended order.
// It checks after each iteration if there was a swap. If yes, it will then go over the array until an iteration when there is no swap.
// The highest number is takien to the top, that is why it is called bubble sort.
// Bubble sort is a poor sorting method and only used during interviews and few other reasons.

// PSEUDOCODE

// BASE CASE
// If the array is empty reurn -1 as the element cannot be found
// If the array hass ElementInternals, find the middle element in the array. If the target is equal to the middle element, return the middle element index.

// THEREFORE
// sortedArr = [-5, 2, 4, 6, 10], t = 10  =  should return 4
// sortedArr = [-5, 2, 4, 6, 10], t = 6  =  should return 3
// sortedArr = [-5, 2, 4, 6, 10], t = 20  =  should return -1

function bubbleSort(arr) {
  let sorted;
  do {
    sorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = true;
      }
    }
  } while (sorted);
}

// TIME COMPLEXITY
// Big-O : O(logn) - It is Logrithmic time complexity because the loop halves after each iteration

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]
