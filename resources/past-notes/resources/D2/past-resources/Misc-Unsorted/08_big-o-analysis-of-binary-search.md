# Analysis of Binary Search

Consider the following search algorithm known as the **binary search**. This
kind of search only works if the array is already sorted.

```javascript
function binarySearch(arr, x, start, end) {
  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === x) return true;

  if (arr[mid] > x) {
    return binarySearch(arr, x, start, mid - 1);
  } else {
    return binarySearch(arr, x, mid + 1, end);
  }
}
```

For the _binary search_, you cut the search space in half every time. This means
that it reduces the number of searches you must do by half, every time. That
means the number of steps it takes to get to the desired item (if it exists in
the array), in the worst case takes the same amount of steps for every number
within a range defined by the powers of 2.

* 7 -> 4 -> 2 -> 1
* 8 -> 4 -> 2 -> 1
* 9 -> 5 -> 3 -> 2 -> 1
* 15 -> 8 -> 4 -> 2 -> 1
* 16 -> 8 -> 4 -> 2 -> 1
* 17 -> 9 -> 5 -> 3 -> 2 -> 1
* 31 -> 16 -> 8 -> 4 -> 2 -> 1
* 32 -> 16 -> 8 -> 4 -> 2 -> 1
* 33 -> 17 -> 9 -> 5 -> 3 -> 2 -> 1

So, for any number of items in the sorted array between 2<sup>n-1</sup> and
2<sup>n</sup>, it takes _n_ number of steps. That means if you have _k_ items in
the array, then it will take <i>log</i><sub><i>2</i></sub><i>k</i>.

Binary searches are <i>O</i>(<i>log</i><sub><i>2</i></sub><i>n</i>).
