# Quick Sort
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [How does it work?](#how-does-it-work)
- [The algorithm: divide and conquer](#the-algorithm-divide-and-conquer)
  - [Partition](#partition)
- [The pseudocode](#the-pseudocode)

<!-- /code_chunk_output -->
________________________________________________________________________________

Quick Sort has a similar "divide and conquer" strategy to Merge Sort. Here are a
few key ideas that will motivate the design:

* it is easy to sort elements of an array relative to a particular target value
* an array of 0 or 1 elements is already trivially sorted

Regarding that first point, for example given `[7, 3, 8, 9, 2]` and a target of
`5`, we know `[3, 2]` are numbers less than `5` and `[7, 8, 9]` are numbers
greater than `5`.

## How does it work?

In general, the strategy is to divide the input array into two subarrays: one
with the smaller elements, and one with the larger elements. Then, it
recursively operates on the two new subarrays. It continues this process until
of dividing into smaller arrays until it reaches subarrays of length 1 or
smaller. As you have seen with Merge Sort, arrays of such length are
automatically sorted.

The steps, when discussed on a high level, are simple:

1. choose an element called "the pivot", how that's done is up to the
   implementation
2. take two variables to point left and right of the list excluding pivot
3. left points to the low index
4. right points to the high
5. while value at left is less than pivot move right
6. while value at right is greater than pivot move left
7. if both step 5 and step 6 does not match swap left and right
8. if left ≥ right, the point where they met is new pivot
9. repeat, recursively calling this for smaller and smaller arrays

Before we move forward, see if you can observe the behavior described above in
the following animation:

![quick sort](images/QuickSort.gif)

## The algorithm: divide and conquer

Formally, we want to partition elements of an array relative to a pivot value.
That is, we want elements less than the pivot to be separated from elements that
are greater than or equal to the pivot. Our goal is to create a function with
this behavior:

```javascript
let arr = [7, 3, 8, 9, 2];
partition(arr, 5);  // => [[3, 2], [7,8,9]]
```

### Partition

Seems simple enough! Let's implement it in JavaScript:

```javascript
// nothing fancy
function partition(array, pivot) {
  let left = [];
  let right = [];

  array.forEach(el => {
    if (el < pivot) {
      left.push(el);
    } else {
      right.push(el);
    }
  });

  return [ left, right ];
}

// if you fancy
function partition(array, pivot) {
  let left = array.filter(el => el < pivot);
  let right = array.filter(el => el >= pivot);
  return [ left, right ];
}
```

You don't have to use an explicit `partition` helper function in your Quick Sort
implementation; however, we will borrow heavily from this pattern. As you design
algorithms, it helps to think about key patterns in isolation, although your
solution may not feature that exact helper. Some would say we like to divide and
conquer.

## The pseudocode

It is _so_ small, this algorithm. It's amazing that it performs so well with so
little code!

```
procedure quickSort(left, right)

  if the length of the array is 0 or 1, return the array

  set the pivot to the first element of the array
  remove the first element of the array

  put all values less than the pivot value into an array called left
  put all values greater than the pivot value into an array called right

  call quick sort on left and assign the return value to leftSorted
  call quick sort on right and assign the return value to rightSorted

  return the concatenation of leftSorted, the pivot value, and rightSorted

end procedure
```
