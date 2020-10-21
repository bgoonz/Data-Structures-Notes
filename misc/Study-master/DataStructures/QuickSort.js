/* 
Divide and conquer
Time: 
avg case: O(n log(n));
worst case: O(n^2)
**even though we normally take the worst case scenario for BigO, the worst case for QuickSort has been proven 
    to be exceedingly rare. Therefore we take the avg case for this one.
Space: O(n)
*/

function quickSortClean(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr.shift();
  let left = arr.filter(el => el < pivot);
  let right = arr.filter(el => el >= pivot);

  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);

  return [...sortedLeft, pivot, ...sortedRight];
}

console.log(quickSortClean([6, 3, 4, 9, 1, 2, 7, 3, 6, 4]))



// this works but not as nice
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr.shift();
  let left = [];
  let right = [];

  while (arr.length) {
    if (arr[0] < pivot) {
      left.push(arr.shift());
    } else {
      right.push(arr.shift());
    }
  }

  return quickSort(left).concat([pivot]).concat(quickSort(right));
}

// console.log(quickSort([6, 3, 4, 9, 1, 2, 7, 3, 6, 4]))