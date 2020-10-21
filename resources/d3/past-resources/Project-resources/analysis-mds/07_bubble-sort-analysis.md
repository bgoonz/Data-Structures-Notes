# Bubble Sort Analysis
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

  - [Bubble Sort JS Implementation](#bubble-sort-js-implementation)
- [Time Complexity: O(n2)](#time-complexity-onsup2sup)
- [Space Complexity: O(1)](#space-complexity-o1)
- [When should you use Bubble Sort?](#when-should-you-use-bubble-sort)

<!-- /code_chunk_output -->
________________________________________________________________________________

Bubble Sort manipulates the array by swapping the position of two elements. To
implement Bubble Sort in JS, you'll need to perform this operation. It helps to
have a function to do that. A key detail in this function is that you need an
extra variable to store one of the elements since you will be overwriting them
in the array:

```js
function swap(array, idx1, idx2) {
  let temp = array[idx1];     // save a copy of the first value
  array[idx1] = array[idx2];  // overwrite the first value with the second value
  array[idx2] = temp;         // overwrite the second value with the first value
}
```

Note that the swap function does not create or return a new array. It mutates
the original array:

```js
let arr1 = [2, 8, 5, 2, 6];
swap(arr1, 1, 2);
arr1; // => [ 2, 5, 8, 2, 6 ]
```

### Bubble Sort JS Implementation

Take a look at the snippet below and try to understand how it corresponds to the
conceptual understanding of the algorithm. Scroll down to the commented version
when you get stuck.

```js
function bubbleSort(array) {
  let swapped = true;

  while(swapped) {
    swapped = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i+1]) {
        swap(array, i, i+1);
        swapped = true;
      }
    }
  }

  return array;
}
```

```js
// commented
function bubbleSort(array) {
  // this variable will be used to track whether or not we
  // made a swap on the previous pass. If we did not make
  // any swap on the previous pass, then the array must
  // already be sorted
  let swapped = true;

  // this while will keep doing passes if a swap was made
  // on the previous pass
  while(swapped) {
    swapped = false;  // reset swap to false

    // this for will perform a single pass
    for (let i = 0; i < array.length; i++) {

      // if the two value are not ordered...
      if (array[i] > array[i+1]) {

        // swap the two values
        swap(array, i, i+1);

        // since you made a swap, remember that you did so
        // b/c we should perform another pass after this one
        swapped = true;
      }
    }
  }

  return array;
}
```

## Time Complexity: O(n<sup>2</sup>)

Picture the worst case scenario where the input array is completely unsorted.
Say it's sorted in fully decreasing order, but the goal is to sort it in
increasing order:

+ n is the length of the input array
+ The inner `for` loop along contributes _O(n)_ in isolation
+ The outer while loop contributes _O(n)_ in isolation because a single
  iteration of the while loop will bring one element to its final resting
  position. In other words, it keeps running the while loop until the array is
  fully sorted. To fully sort the array we will need to bring all `n` elements
  into their final resting positions.
+ Those two loops are nested so the total time complexity is O(n * n) =
  O(n<sup>2</sup>).

It's worth mentioning that the best case scenario is when the input array is
already fully sorted. This will cause our for loop to conduct a single pass
without performing any swap, so the `while` loop will not trigger further
iterations. This means best case time complexity is _O(n)_ for bubble sort. This
best case linear time is probably the only advantage of bubble sort. Programmers
are usually interested only in the worst-case analysis and ignore best-case
analysis.

## Space Complexity: O(1)

Bubble Sort is a constant space, O(1), algorithm. The amount of memory consumed
by the algorithm does not increase relative to the size of the input array. It
uses the same amount of memory and create the same amount of variables
regardless of the size of the input, making this algorithm quite space
efficient. The space efficiency mostly comes from the fact that it mutates the
input array in-place. This is known as a **destructive sort** because it
"destroys" the positions of the values in the array.

## When should you use Bubble Sort?

Nearly never, but it may be a good choice in the following list of special
cases:

- When sorting really small arrays where run time will be negligible no matter
  what algorithm you choose.
- When sorting arrays that you expect to already be nearly sorted.
- At parties
