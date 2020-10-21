/*
Divide and conquer
need a helper function to merge two sorted arrays
Time: O(n log(n))
Space: O(n)
*/

function merge(arr1, arr2) {
  let merged = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift())
    }
  }

  return merged.concat(arr1).concat(arr2);
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let midIdx= Math.floor(arr.length / 2);

  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

console.log(mergeSort([3, 6, 4, 2, 5, 8, 2, 1]))