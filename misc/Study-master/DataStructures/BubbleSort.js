/*
- largest elements "bubbles up" to the top/end of array
- not efficient
- not commonly used / useful in production code
- Time: O(n^2)
- Space: O(1)
*/

function bubbleSort(arr) {
  if (!arr.length) return arr;

  let sorted = true;

  while (sorted) {
    sorted = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp;
        sorted = true;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([3, 1, 6, 4, 2, 5, 8, 2]))