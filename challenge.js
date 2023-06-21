// MERGE SORT

// QUESTION:       Given an array of integers, sort the array.

// Note:

// 1) Divide the array into sub arrays, each containing only one element (An array with one element is considered sorted).

// 2) Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array.

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
