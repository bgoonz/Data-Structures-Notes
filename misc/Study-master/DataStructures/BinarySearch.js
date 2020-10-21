function binarySearch(array, target) {
  if (!array.length) return false;

  let midIdx = Math.floor(array.length / 2);
  let left = array.slice(0, midIdx);
  let right = array.slice(midIdx + 1);

  if (target < array[midIdx]) {
    return binarySearch(left, target)
  } else if (target > array[midIdx]) {
    return binarySearch(right, target)
  } else {
    return true;
  }
}

// when we want to return the index, we can't use the same approach as above, where you slice the array 
//  and work with subarrays in each iteration. That ends up creating new arrays and resetting the indices with each iteration.
// we would lose track of the original indices, and if a target is found, would end up returning 0 each time.
// instead, we want to shrink the array in place.
// we do this by setting lowerIdx and upperIdx pointers
function binarySearchIndex(array, target, lowerIdx=0, upperIdx=array.length -1) {
  if (lowerIdx === upperIdx) return -1;

  let midIdx = Math.floor((lowerIdx + upperIdx) / 2);

  if (target < array[midIdx]) {
    return binarySearchIndex(array, target, lowerIdx, midIdx);
  } else if (target > array[midIdx]) {
    return binarySearchIndex(array, target, midIdx + 1, upperIdx);
  } else {
    return midIdx
  }
}