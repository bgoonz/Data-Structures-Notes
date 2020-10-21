Bubble Sort is _almost never_ a good choice in production. simply because:

- It is not efficient
- It is not commonly used
- There is a stigma attached to using it

## _"But...then...why are we..."_

It is _quite useful_ as an educational base for you, and as a conversational
base for you while interviewing, because you can discuss how other more elegant
and efficient algorithms improve upon it. Taking naive code and improving upon
it by weighing the technical tradeoffs of your other options is 100% the name of
the game when trying to level yourself up from a junior engineer to a senior
engineer.

## The algorithm bubbles up

As you progress through the algorithms and data structures of this course,
you'll eventually notice that there are some recurring funny terms. "Bubbling
up" is one of those terms.

When someone writes that an item in a collection "bubbles up," you should infer
that:

- The item is _in motion_
- The item is moving _in some direction_
- The item _has some final resting destination_

When invoking Bubble Sort to sort an array of integers in ascending order, the
largest integers will "bubble up" to the "top" (the end) of the array, one at a
time.

The largest values are captured, put into motion in the direction defined by the
desired sort (ascending right now), and traverse the array until they arrive at
their end destination. See if you can observe this behavior in the following
animation (courtesy http://visualgo.net):

![bubble sort](images/BubbleSort.gif)

As the algorithm iterates through the array, it compares each element to the
element's right neighbor. If the current element is larger than its neighbor,
the algorithm swaps them. This continues until all elements in the array are
sorted.

## How does a pass of Bubble Sort work?

Bubble sort works by performing multiple _passes_ to move elements closer to
their final positions. A single pass will iterate through the entire array once.

A pass works by scanning the array from left to right, two elements at a time,
and checking if they are ordered correctly. To be ordered correctly the first
element must be less than or equal to the second. If the two elements are not
ordered properly, then we swap them to correct their order. Afterwards, it scans
the next two numbers and continue repeat this process until we have gone through
the entire array.

See one pass of bubble sort on the array `[2, 8, 5, 2, 6]`. On each step the
elements currently being scanned are in **bold**.

- [**2**, **8**, 5, 2, 6] - ordered, so leave them alone
- [2, **8**, **5**, 2, 6] - not ordered, so swap
- [2, 5, **8**, **2**, 6] - not ordered, so swap
- [2, 5, 2, **8**, **6**] - not ordered, so swap
- [2, 5, 2, 6, 8] - the first pass is complete

Because at least one swap occurred, the algorithm knows that it wasn't sorted.
It needs to make another pass. It starts over again at the first entry and goes
to the next-to-last entry doing the comparisons, again. It only needs to go to
the next-to-last entry because the previous "bubbling" put the largest entry in
the last position.

- [**2**, **5**, 2, 6, 8] - ordered, so leave them alone
- [2, **5**, **2**, 6, 8] - not ordered, so swap
- [2, 2, **5**, **6**, 8] - ordered, so leave them alone
- [2, 2, 5, 6, 8] - the second pass is complete

Because at least one swap occurred, the algorithm knows that it wasn't sorted.
Now, it can bubble from the first position to the last-2 position because the
last two values are sorted.

- [**2**, **2**, 5, 6, 8] - ordered, so leave them alone
- [2, **2**, **5**, 6, 8] - ordered, so leave them alone
- [2, 2, 5, 6, 8] - the third pass is complete

No swap occurred, so the Bubble Sort stops.

## Ending the Bubble Sort

During Bubble Sort, you can tell if the array is in sorted order by checking if
a swap was made during the previous pass performed. If a swap was not performed
during the previous pass, then the array must be totally sorted and the
algorithm can stop.

You're probably wondering why that makes sense. Recall that a pass of Bubble
Sort checks if any adjacent elements are **out of order** and swaps them if they
are. If we don't make any swaps during a pass, then everything must be already
**in order**, so our job is done. Let that marinate for a bit.

## Pseudocode for Bubble Sort

```
Bubble Sort: (array)
  n := length(array)
  repeat
  swapped = false
  for i := 1 to n - 1 inclusive do

      /* if this pair is out of order */
      if array[i - 1] > array[i] then

        /* swap them and remember something changed */
        swap(array, i - 1, i)
        swapped := true

      end if
    end for
  until not swapped
```

# Selection Sort Analysis

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Selection Sort Analysis](#selection-sort-analysis)
  - [Selection Sort JS Implementation](#selection-sort-js-implementation)
  - [Time Complexity Analysis](#time-complexity-analysis)
  - [Space Complexity Analysis: O(1)](#space-complexity-analysis-o1)
  - [When should we use Selection Sort?](#when-should-we-use-selection-sort)
- [Insertion Sort](#insertion-sort)
  - [The algorithm: insert into the sorted region](#the-algorithm-insert-into-the-sorted-region)
  - [The Steps](#the-steps)
  - [The pseudocode](#the-pseudocode)
- [Merge Sort](#merge-sort)
  - [The algorithm: divide and conquer](#the-algorithm-divide-and-conquer)
- [Quick Sort](#quick-sort)
  - [Quicksort Sort JS Implementation](#quicksort-sort-js-implementation)
  - [Time and Space Complexity Analysis](#time-and-space-complexity-analysis)
    - [Time Complexity](#time-complexity)
    - [Space Complexity](#space-complexity)
    - [When should you use Quick Sort?](#when-should-you-use-quick-sort)

<!-- /code_chunk_output -->

---

Since a component of Selection Sort requires us to locate the smallest value in
the array, let's focus on that pattern in isolation:

```javascript
function minumumValueIndex(arr) {
	let minIndex = 0;

	for (let j = 0; j < arr.length; j++) {
		if (arr[minIndex] > arr[j]) {
			minIndex = j;
		}
	}

	return minIndex;
}
```

Pretty basic code right? We won't use this explicit helper function to solve
selection sort, however we will borrow from this pattern soon.

## Selection Sort JS Implementation

We'll also utilize the classic swap pattern that we introduced in the bubble sort. To
refresh:

```javascript
function swap(arr, index1, index2) {
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}
```

Now for the punchline! Take a look at the snippet below and try to understand
how it corresponds to our conceptual understanding of the selection sort
algorithm. Scroll down to the commented version when you get stuck.

```javascript
function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}

		swap(arr, i, minIndex);
	}
	return arr;
}
```

```javascript
// commented
function selectionSort(arr) {
	// the `i` loop will track the index that points to the first element of the unsorted region:
	//    this means that the sorted region is everything left of index i
	//    and the unsorted region is everything to the right of index i
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;

		// the `j` loop will iterate through the unsorted region and find the index of the smallest element
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}

		// after we find the minIndex in the unsorted region,
		// swap that minIndex with the first index of the unsorted region
		swap(arr, i, minIndex);
	}
	return arr;
}
```

## Time Complexity Analysis

Selection Sort runtime is O(n<sup>2</sup>) because:

- `n` is the length of the input array
- The outer loop i contributes O(n) in isolation, this is plain to see
- The inner loop j is more complicated, it will make one less iteration for
  every iteration of i.
  - for example, let's say we have an array of 10 elements, `n = 10`.
  - the first full cycle of `j` will have 9 iterations
  - the second full cycle of `j` will have 8 iterations
  - the third full cycle of `j` will have 7 iterations
  - ...
  - the last full cycle of `j` will have 1 iteration
  - This means that the inner loop j will contribute roughly O(n / 2) on
    average
- The two loops are nested so our total time complexity is O(n \* n / 2) =
  O(n<sup>2</sup>)

You'll notice that during this analysis we said something silly like O(n / 2).
In some analyses such as this one, we'll prefer to drop the constants only at
the end of the sketch so you understand the logical steps we took to derive a
complicated time complexity.

## Space Complexity Analysis: O(1)

The amount of memory consumed by the algorithm does not increase relative to the
size of the input array. We use the same amount of memory and create the same
amount of variables regardless of the size of our input. A quick indicator of
this is the fact that we don't create any arrays.

## When should we use Selection Sort?

There is really only one use case where Selection Sort becomes superior to
Bubble Sort. Both algorithms are quadratic in time and constant in space, but
the point at which they differ is in the _number of swaps_ they make.

Bubble Sort, in the worst case, invokes a swap on every single comparison.
Selection Sort only swaps once our inner loop has completely finished traversing
the array. Therefore, Selection Sort is optimized to make the least possible
number of swaps.

Selection Sort becomes advantageous when making a swap is the most expensive
operation in your system. You will likely rarely encounter this scenario, but in
a situation where you've built (or have inherited) a system with suboptimal
write speed ability, for instance, maybe you're sorting data in a specialized
database tuned strictly for fast read speeds at the expense of slow write
speeds, using Selection Sort would save you a ton of expensive operations that
could potential crash your system under peak load.

Though in industry this situation is very rare, the insights above make for a
fantastic conversational piece when weighing technical tradeoffs while
strategizing solutions in an interview setting. This commentary may help deliver
the impression that you are well-versed in system design and technical analysis,
a key indicator that someone is prepared for a senior level position.

# Insertion Sort

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Selection Sort Analysis](#selection-sort-analysis)
  - [Selection Sort JS Implementation](#selection-sort-js-implementation)
  - [Time Complexity Analysis](#time-complexity-analysis)
  - [Space Complexity Analysis: O(1)](#space-complexity-analysis-o1)
  - [When should we use Selection Sort?](#when-should-we-use-selection-sort)
- [Insertion Sort](#insertion-sort)
  - [The algorithm: insert into the sorted region](#the-algorithm-insert-into-the-sorted-region)
  - [The Steps](#the-steps)
  - [The pseudocode](#the-pseudocode)
- [Merge Sort](#merge-sort)
  - [The algorithm: divide and conquer](#the-algorithm-divide-and-conquer)
- [Quick Sort](#quick-sort)
  - [Quicksort Sort JS Implementation](#quicksort-sort-js-implementation)
  - [Time and Space Complexity Analysis](#time-and-space-complexity-analysis)
    - [Time Complexity](#time-complexity)
    - [Space Complexity](#space-complexity)
    - [When should you use Quick Sort?](#when-should-you-use-quick-sort)

<!-- /code_chunk_output -->

---

With Bubble Sort and Selection Sort now in your tool box, you're starting to
get some experience points under your belt! Time to learn one more "naive"
sorting algorithm before you get to the efficient sorting algorithms.

## The algorithm: insert into the sorted region

Insertion Sort is similar to Selection Sort in that it gradually builds up a
larger and larger sorted region at the left-most end of the array.

However, Insertion Sort differs from Selection Sort because this algorithm does
not focus on searching for the right element to place (the next smallest in our
Selection Sort) on each pass through the array. Instead, it focuses on sorting
each element in the order they appear from left to right, regardless of their
value, and inserting them in the most appropriate position in the sorted region.

See if you can observe the behavior described above in the following animation:

![insertion sort](images/InsertionSort.gif)

## The Steps

Insertion Sort grows a sorted array on the left side of the input array by:

1. If it is the first element, it is already sorted. return 1;
2. Pick next element
3. Compare with all elements in the sorted sub-list
4. Shift all the elements in the sorted sub-list that is greater than the
   value to be sorted
5. Insert the value
6. Repeat until list is sorted

These steps are easy to confuse with selection sort, so you'll want to watch the
video lecture and drawing that accompanies this reading as always!

## The pseudocode

```
procedure insertionSort( A : array of items )
   int holePosition
   int valueToInsert

   for i = 1 to length(A) inclusive do:

      /* select value to be inserted */
      valueToInsert = A[i]
      holePosition = i

      /*locate hole position for the element to be inserted */

      while holePosition > 0 and A[holePosition-1] > valueToInsert do:
         A[holePosition] = A[holePosition-1]
         holePosition = holePosition -1
      end while

      /* insert the number at hole position */
      A[holePosition] = valueToInsert

   end for

end procedure
```

# Merge Sort

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Merge Sort](#merge-sort)
  - [The algorithm: divide and conquer](#the-algorithm-divide-and-conquer)

<!-- /code_chunk_output -->

---

You've explored a few sorting algorithms already, all of them being quite slow
with a runtime of O(n<sup>2</sup>). It's time to level up and learn your first
time-efficient sorting algorithm! You'll explore **merge sort** in detail soon,
but first, you should jot down some key ideas for now. The following points are
not steps to an algorithm yet; rather, they are ideas that will motivate how you
can derive this algorithm.

- it is easy to merge elements of two sorted arrays into a single sorted array
- you can consider an array containing only a single element as already
  trivially sorted
- you can also consider an empty array as trivially sorted

## The algorithm: divide and conquer

You're going to need a helper function that solves the first major point from
above. How might you merge two sorted arrays? In other words you want a `merge`
function that will behave like so:

```javascript
let arr1 = [1, 5, 10, 15];
let arr2 = [0, 2, 3, 7, 10];
merge(arr1, arr2); // => [0, 1, 2, 3, 5, 7, 10, 10, 15]
```

Once you have that, you get to the "divide and conquer" bit.

The algorithm for merge sort is actually _really_ simple.

1. if there is only one element in the list, it is already sorted. return that
   array.
2. otherwise, divide the list recursively into two halves until it can no more
   be divided.
3. merge the smaller lists into new list in sorted order.

The process is visualized below. When elements are moved to the bottom of the
picture, they are going through the `merge` step:

![merge sort](images/MergeSort.gif)

The pseudocode for the algorithm is as follows.

```
procedure mergesort( a as array )
   if ( n == 1 ) return a

   /* Split the array into two */
   var l1 as array = a[0] ... a[n/2]
   var l2 as array = a[n/2+1] ... a[n]

   l1 = mergesort( l1 )
   l2 = mergesort( l2 )

   return merge( l1, l2 )
end procedure

procedure merge( a as array, b as array )
   var result as array
   while ( a and b have elements )
      if ( a[0] > b[0] )
         add b[0] to the end of result
         remove b[0] from b
      else
         add a[0] to the end of result
         remove a[0] from a
      end if
   end while

   while ( a has elements )
      add a[0] to the end of result
      remove a[0] from a
   end while

   while ( b has elements )
      add b[0] to the end of result
      remove b[0] from b
   end while

   return result
end procedure
```

# Quick Sort

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Quicksort Sort JS Implementation](#quicksort-sort-js-implementation)
- [Selection Sort Analysis](#selection-sort-analysis)
  - [Selection Sort JS Implementation](#selection-sort-js-implementation)
  - [Time Complexity Analysis](#time-complexity-analysis)
  - [Space Complexity Analysis: O(1)](#space-complexity-analysis-o1)
  - [When should we use Selection Sort?](#when-should-we-use-selection-sort)
- [Insertion Sort](#insertion-sort)
  - [The algorithm: insert into the sorted region](#the-algorithm-insert-into-the-sorted-region)
  - [The Steps](#the-steps)
  - [The pseudocode](#the-pseudocode)
- [Merge Sort](#merge-sort)
  - [The algorithm: divide and conquer](#the-algorithm-divide-and-conquer)
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

# Binary Search

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Binary Search JS Implementation](#binary-search-js-implementation)
- [Binary Search](#binary-search)
  - [Binary Search JS Implementation](#binary-search-js-implementation)
  - [Time and Space Complexity Analysis](#time-and-space-complexity-analysis)
    - [Time Complexity: O(log(n))](#time-complexity-ologn)
    - [Space Complexity: O(n)](#space-complexity-on)
    - [When should we use Binary Search?](#when-should-we-use-binary-search)

<!-- /code_chunk_output -->

---

We'll implement binary search recursively. As always, we start with a base case
that captures the scenario of the input array being so trivial, that we know the
answer without further calculation. If we are given an empty array and a target,
we can be certain that the target is not inside of the array:

```javascript
function binarySearch(array, target) {
	if (array.length === 0) {
		return false;
	}
	// ...
}
```

Now for our recursive case. If we want to get a time complexity less than
`O(n)`, we must avoid touching all `n` elements. Adopting our dictionary
strategy, let's find the middle element and grab references to the left and
right halves of the sorted array:

```javascript
function binarySearch(array, target) {
	if (array.length === 0) {
		return false;
	}

	let midIdx = Math.floor(array.length / 2);
	let leftHalf = array.slice(0, midIdx);
	let rightHalf = array.slice(midIdx + 1);
	// ...
}
```

It's worth pointing out that the left and right halves do not contain the middle
element we chose.

Here is where we leverage the sorted property of the array. If the target is
less than the middle, then the target must be in the left half of the array. If
the target is greater than the middle, then the target must be in the right half
of the array. So we can narrow our search to one of these halves, and ignore the
other. Luckily we have a function that can search the half, its `binarySearch`:

```javascript
function binarySearch(array, target) {
	if (array.length === 0) {
		return false;
	}

	let midIdx = Math.floor(array.length / 2);
	let leftHalf = array.slice(0, midIdx);
	let rightHalf = array.slice(midIdx + 1);

	if (target < array[midIdx]) {
		return binarySearch(leftHalf, target);
	} else if (target > array[midIdx]) {
		return binarySearch(rightHalf, target);
	}
	// ...
}
```

We know `binarySeach` will return the correct Boolean, so we just pass that
result up by returning it ourselves. However, something is lacking in our code.
It is only possible to get a false from the literal `return false` line, but
there is no `return true`. Looking at our conditionals, we handle the cases
where the target is less than middle or the target is greater than the middle,
but what if the product is **equal** to the middle? If the target is equal to
the middle, then we found the target and should `return true`! This is easy to
add with an `else`:

```javascript
function binarySearch(array, target) {
	if (array.length === 0) {
		return false;
	}

	let midIdx = Math.floor(array.length / 2);
	let leftHalf = array.slice(0, midIdx);
	let rightHalf = array.slice(midIdx + 1);

	if (target < array[midIdx]) {
		return binarySearch(leftHalf, target);
	} else if (target > array[midIdx]) {
		return binarySearch(rightHalf, target);
	} else {
		return true;
	}
}
```

To wrap up, we have confidence of our base case will eventually be hit because
we are continually halving the array. We halve the array until it's length is 0
or we actually find the target.

### Binary Search JS Implementation

Here is the code again for your quick reference:

```javascript
function binarySearch(array, target) {
	if (array.length === 0) {
		return false;
	}

	let midIdx = Math.floor(array.length / 2);
	let leftHalf = array.slice(0, midIdx);
	let rightHalf = array.slice(midIdx + 1);

	if (target < array[midIdx]) {
		return binarySearch(leftHalf, target);
	} else if (target > array[midIdx]) {
		return binarySearch(rightHalf, target);
	} else {
		return true;
	}
}
```

## Time and Space Complexity Analysis

The complexity analysis of this algorithm is easier to explain through visuals,
so we **highly encourage** you to watch the lecture that accompanies this
reading. In any case, here is a summary of the complexity:

### Time Complexity: O(log(n))

- `n` is the length of the input array
- We have no loops, so we must only consider the number of recursive calls it
  takes to hit the base case
- The number of recursive calls is the number of times we must halve the array
  until it's length becomes 0. This number can be described by `log(n)`
  - for example, say we had an array of 8 elements, `n = 8`
  - the length would halve as `8 -> 4 -> 2 -> 1`
  - it takes 3 calls, `log(8) = 3`

### Space Complexity: O(n)

Our implementation uses `n` space due to half arrays we create using slice. Note
that JavaScript `slice` creates a new array, so it requires additional memory to
be allocated.

### When should we use Binary Search?

Use this algorithm when the input data is sorted!!! This is a heavy requirement,
but if you have it, you'll have an insanely fast algorithm. Of course, you can
use one of your high-functioning sorting algorithms to sort the input and _then_
perform the binary search!
