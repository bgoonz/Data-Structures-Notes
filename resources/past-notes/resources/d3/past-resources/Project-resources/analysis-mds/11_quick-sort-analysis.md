# Quick Sort

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Quicksort Sort JS Implementation](#quicksort-sort-js-implementation)
- [Quick Sort](#quick-sort)
  - [Quicksort Sort JS Implementation](#quicksort-sort-js-implementation)
  - [Time and Space Complexity Analysis](#time-and-space-complexity-analysis)
    - [Time Complexity](#time-complexity)
    - [Space Complexity](#space-complexity)
    - [When should you use Quick Sort?](#when-should-you-use-quick-sort)

<!-- /code_chunk_output -->

---

Let's begin structuring the recursion. The base case of any recursive problem is
where the input is so trivial, we immediately know the answer without
calculation. If our problem is to sort an array, what is the trivial array? An
array of 1 or 0 elements! Let's establish the code:

```javascript
function quickSort(array) {
	if (array.length <= 1) {
		return array;
	}
	// ...
}
```

If our base case pertains to an array of a very small size, then the design of
our recursive case should make progress toward hitting this base scenario. In
other words, we should recursively call `quickSort` on smaller and smaller
arrays. This is very similar to our previous `mergeSort`, except we don't just
split the array down the middle. Instead we should arbitrarily choose an element
of the array as a pivot and partition the remaining elements relative to this
pivot:

```javascript
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array.shift();
    let left = array.filter(el => el < pivot);
    let right = array.filter(el => el >= pivot);
    // ...
```

Here is what to notice about the partition step above:

1. the pivot is an element of the array; we arbitrarily chose the first element
2. we removed the pivot from the master array before we filter into the left and
   right partitions

Now that we have the two subarrays of `left` and `right` we have our
subproblems! To solve these subproblems we must sort the subarrays. I wish we
had a function that sorts an array...oh wait we do, `quickSort`! Recursively:

```javascript
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array.shift();
    let left = array.filter(el => el < pivot);
    let right = array.filter(el => el >= pivot);

    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);
    // ...
```

Okay, so we have the two sorted partitions. This means we have the two
subsolutions. But how do we put them together? Think about how we partitioned
them in the first place. Everything in `leftSorted` is **guaranteed** to be less
than everything in `rightSorted`. On top of that, `pivot` should be placed after
the last element in `leftSorted`, but before the first element in `rightSorted`.
So all we need to do is to combine the elements in the order "left, pivot,
right"!

```javascript
function quickSort(array) {
	if (array.length <= 1) {
		return array;
	}

	let pivot = array.shift();
	let left = array.filter((el) => el < pivot);
	let right = array.filter((el) => el >= pivot);

	let leftSorted = quickSort(left);
	let rightSorted = quickSort(right);

	return leftSorted.concat([pivot]).concat(rightSorted);
}
```

That last `concat` line is a bit clunky. Bonus JS Lesson: we can use the spread
`...` operator to elegantly concatenate arrays. In general:

```javascript
let one = ["a", "b"];
let two = ["d", "e", "f"];
let newArr = [...one, "c", ...two];
newArr; // =>  [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```

Utilizing that spread pattern gives us this final implementation:

```javascript
function quickSort(array) {
	if (array.length <= 1) {
		return array;
	}

	let pivot = array.shift();
	let left = array.filter((el) => el < pivot);
	let right = array.filter((el) => el >= pivot);

	let leftSorted = quickSort(left);
	let rightSorted = quickSort(right);

	return [...leftSorted, pivot, ...rightSorted];
}
```

### Quicksort Sort JS Implementation

That code was so clean we should show it again. Here's the complete code for
your reference, for when you `ctrl+F "quicksort"` the night before an interview:

```javascript
function quickSort(array) {
	if (array.length <= 1) {
		return array;
	}

	let pivot = array.shift();
	let left = array.filter((el) => el < pivot);
	let right = array.filter((el) => el >= pivot);

	let leftSorted = quickSort(left);
	let rightSorted = quickSort(right);

	return [...leftSorted, pivot, ...rightSorted];
}
```

## Time and Space Complexity Analysis

Here is a summary of the complexity.

### Time Complexity

- Avg Case: O(n log(n))
- Worst Case: O(n<sup>2</sup>)

The runtime analysis of `quickSort` is more complex than `mergeSort`

- `n` is the length of the input array
- The partition step alone is `O(n)`
- We must calculate how many recursive calls we make. The number of recursive
  calls is the number of times we must split the array to reach the base case.
  This is dependent on how we choose the pivot. Let's analyze the best and worst
  case:
  - **Best Case:** We are lucky and always choose the median as the pivot.
    This means the left and right partitions will have equal length. This will
    halve the array length at every step of the recursion. We benefit from
    this halving with `O(log(n))` recursive calls to reach the base case.
  - **Worst Case:** We are unlucky and always choose the min or max as the
    pivot. This means one partition will contain everything, and the other
    partition is empty. This will decrease the array length by 1 at every step
    of the recursion. We suffer from `O(n)` recursive calls to reach the base
    case.
- The partition step occurs in every recursive call, so our total complexities
  are:
  - **Best Case:** O(n \* log(n))
  - **Worst Case:** O(n<sup>2</sup>)

Although we typically take the worst case when describing Big-O for an
algorithm, much research on `quickSort` has shown the worst case to be an
exceedingly rare occurrence even if we choose the pivot at random. Because of
this we still consider `quickSort` an efficient algorithm. This is a common
interview talking point, so you should be familiar with the relationship between
the choice of pivot and efficiency of the algorithm.

Just in case: A somewhat common question a student may ask when studying
`quickSort` is, "If the median is the best pivot, why don't we always just
choose the median when we partition?" Don't overthink this. To know the median
of an array, it must be sorted in the first place.

### Space Complexity

Our implementation of `quickSort` uses `O(n)` space because of the partition
arrays we create. There is an in-place version of `quickSort` that uses
`O(log(n))` space. `O(log(n))` space is not huge benefit over `O(n)`. You'll
also find our version of `quickSort` as easier to remember, easier to implement.
Just know that a `O(logn)` space `quickSort` exists.

### When should you use Quick Sort?

- When you are in a pinch and need to throw down an efficient sort (on average).
  The recursive code is light and simple to implement; much smaller than
  `mergeSort`.
- When constant space is important to you, use the in-place version. This will
  of course trade off some simplicity of implementation.

If you know some constraints about dataset you can make some modifications to
optimize pivot choice. Here's some food for thought. Our implementation of
`quickSort` will always take the first element as the pivot. This means we will
suffer from the worst case time complexity in the event that we are given an
already sorted array (ironic isn't it?). If you know your input data to be
mostly already sorted, randomize the choice of pivot - this is a very easy
change. Bam. Solved like a true engineer.
