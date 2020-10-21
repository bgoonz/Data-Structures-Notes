# WEEK-07 DAY-3<br>*Sorting Algorithms* {ignore=true}

________________________________________________________________________________
# Bubble Sort

Bubble Sort is generally the first major sorting algorithm to come up in most
introductory programming courses. Learning about this algorithm is useful
educationally, as it provides a good introduction to the challenges you face
when tasked with converting unsorted data into sorted data, such as conducting
logical comparisons, making swaps while iterating, and making optimizations.
It's also quite simple to implement, and can be done quickly.

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

Bubble sort works by performing multiple *passes* to move elements closer to
their final positions. A single pass will iterate through the entire array once.

A pass works by scanning the array from left to right, two elements at a time,
and checking if they are ordered correctly. To be ordered correctly the first
element must be less than or equal to the second. If the two elements are not
ordered properly, then we swap them to correct their order. Afterwards, it scans
the next two numbers and continue repeat this process until we have gone through
the entire array.

See one pass of bubble sort on the array `[2, 8, 5, 2, 6]`. On each step the
elements currently being scanned are in **bold**.

* [**2**, **8**, 5, 2, 6] - ordered, so leave them alone
* [2, **8**, **5**, 2, 6] - not ordered, so swap
* [2, 5, **8**, **2**, 6] - not ordered, so swap
* [2, 5, 2, **8**, **6**] - not ordered, so swap
* [2, 5, 2, 6, 8]         - the first pass is complete

Because at least one swap occurred, the algorithm knows that it wasn't sorted.
It needs to make another pass. It starts over again at the first entry and goes
to the next-to-last entry doing the comparisons, again. It only needs to go to
the next-to-last entry because the previous "bubbling" put the largest entry in
the last position.

* [**2**, **5**, 2, 6, 8] - ordered, so leave them alone
* [2, **5**, **2**, 6, 8] - not ordered, so swap
* [2, 2, **5**, **6**, 8] - ordered, so leave them alone
* [2, 2, 5, 6, 8]         - the second pass is complete

Because at least one swap occurred, the algorithm knows that it wasn't sorted.
Now, it can bubble from the first position to the last-2 position because the
last two values are sorted.

* [**2**, **2**, 5, 6, 8] - ordered, so leave them alone
* [2, **2**, **5**, 6, 8] - ordered, so leave them alone
* [2, 2, 5, 6, 8]         - the third pass is complete

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

________________________________________________________________________________
# Selection Sort

Selection Sort is very similar to Bubble Sort. The major difference between the
two is that Bubble Sort bubbles the _largest_ elements up to the end of the
array, while Selection Sort selects the _smallest_ elements of the array and
directly places them at the beginning of the array in sorted position. Selection
sort will utilize swapping just as bubble sort did. Let's carefully break this
sorting algorithm down.

## The algorithm: select the next smallest

Selection sort works by maintaining a sorted region on the left side of the
input array; this sorted region will grow by one element with every "pass" of
the algorithm. A single "pass" of selection sort will select the next smallest
element of unsorted region of the array and move it to the sorted region.
Because a single pass of selection sort will move an element of the unsorted
region into the sorted region, this means a single pass will shrink the unsorted
region by 1 element whilst increasing the sorted region by 1 element. Selection
sort is complete when the sorted region spans the entire array and the unsorted
region is empty!

![selection sort](images/SelectionSort.gif)

The algorithm can be summarized as the following:

1. Set MIN to location 0
2. Search the minimum element in the list
3. Swap with value at location MIN
4. Increment MIN to point to next element
5. Repeat until list is sorted

## The pseudocode

In pseudocode, the Selection Sort can be written as this.

```
procedure selection sort
   list  : array of items
   n     : size of list

   for i = 1 to n - 1
   /* set current element as minimum*/
      min = i

      /* check the element to be minimum */

      for j = i+1 to n
         if list[j] < list[min] then
            min = j;
         end if
      end for

      /* swap the minimum element with the current element*/
      if indexMin != i  then
         swap list[min] and list[i]
      end if
   end for
end procedure
```

________________________________________________________________________________
# Insertion Sort

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

________________________________________________________________________________
# Merge Sort

You've explored a few sorting algorithms already, all of them being quite slow
with a runtime of O(n<sup>2</sup>). It's time to level up and learn your first
time-efficient sorting algorithm! You'll explore **merge sort** in detail soon,
but first, you should jot down some key ideas for now. The following points are
not steps to an algorithm yet; rather, they are ideas that will motivate how you
can derive this algorithm.

* it is easy to merge elements of two sorted arrays into a single sorted array
* you can consider an array containing only a single element as already
  trivially sorted
* you can also consider an empty array as trivially sorted

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

________________________________________________________________________________
# Quick Sort

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

________________________________________________________________________________
# Binary Search

We've explored many ways to sort arrays so far, but why did we go through all of
that trouble? By sorting elements of an array, we are organizing the data in a
way that gives us a quick way to look up elements later on. For simplicity, we
have been using arrays of numbers up until this point. However, these sorting
concepts can be generalized to other data types. For example, it would be easy
to modify our comparison-based sorting algorithms to sort strings: instead of
leveraging facts like `0 < 1`, we can say `'A' < 'B'`.

Think of a dictionary. A dictionary contains alphabetically sorted words and
their definitions. A dictionary is pretty much only useful if it is ordered in
this way. Let's say you wanted to look up the definition of "stupendous." What
steps might you take?

+ you open up the dictionary at the roughly middle page
    + you land in the "m" section
+ you know "s" comes somewhere after "m" in the book, so you disregard all pages
  before the "m" section. Instead, you flip to the roughly middle page between
  "m" and "z"
    + you land in the "u" section
+ you know "s" comes somewhere before "u", so you can disregard all pages after
  the "u" section. Instead, you flip to the roughly middle page between the
  previous "m" page and "u"
+ ...

You are essentially using the `binarySearch` algorithm in the real world.

## The Algorithm: "check the middle and half the search space"

Formally, our `binarySearch` will seek to solve the following problem:

```
Given a sorted array of numbers and a target num, return a boolean indicating whether or not that target is contained in the array.
```

Programmatically, we want to satisfy the following behavior:

```javascript
binarySearch([5, 10, 12, 15, 20, 30, 70], 12);  // => true
binarySearch([5, 10, 12, 15, 20, 30, 70], 24);  // => false
```

Before we move on, really internalize the fact that `binarySearch` will only
work on **sorted** arrays! Obviously we can search any array, sorted or
unsorted, in `O(n)` time. But now our goal is be able to search the array with a
sub-linear time complexity (less than `O(n)`).

## The pseudocode

```
procedure binary search (list, target)
  parameter list: a list of sorted value
  parameter target: the value to search for

  if the list has zero length, then return false

  determine the slice point:
    if the list has an even number of elements,
      the slice point is the number of elements
      divided by two
    if the list has an odd number of elements,
      the slice point is the number of elements
      minus one divided by two

  create an list of the elements from 0 to the
    slice point, not including the slice point,
    which is known as the "left half"
  create an list of the elements from the
    slice point to the end of the list which is
    known as the "right half"

  if the target is less than the value in the
    original array at the slice point, then
    return the binary search of the "left half"
    and the target
  if the target is greater than the value in the
    original array at the slice point, then
    return the binary search of the "right half"
    and the target
  if neither of those is true, return true
end procedure binary search
```

________________________________________________________________________________
# Bubble Sort Analysis

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

________________________________________________________________________________
# Selection Sort Analysis

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

+ `n` is the length of the input array
+ The outer loop i contributes O(n) in isolation, this is plain to see
+ The inner loop j is more complicated, it will make one less iteration for
  every iteration of i.
    + for example, let's say we have an array of 10 elements, `n = 10`.
    + the first full cycle of `j` will have 9 iterations
    + the second full cycle of `j` will have 8 iterations
    + the third full cycle of `j` will have 7 iterations
    + ...
    + the last full cycle of `j` will have 1 iteration
    + This means that the inner loop j will contribute roughly O(n / 2) on
      average
+ The two loops are nested so our total time complexity is O(n * n / 2) =
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

________________________________________________________________________________
# Insertion Sort Analysis

Take a look at the snippet below and try to understand how it corresponds to our
conceptual understanding of the Insertion Sort algorithm. Scroll down to the
commented version when you get stuck:

```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currElement = arr[i];
    for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currElement;
  }
  return arr;
}
```

```javascript
function insertionSort(arr) {
    // the `i` loop will iterate through every element of the array
    // we begin at i = 1, because we can consider the first element of the array as a
    // trivially sorted region of only one element
    // insertion sort allows us to insert new elements anywhere within the sorted region
    for (let i = 1; i < arr.length; i++) {
        // grab the first element of the unsorted region
        let currElement = arr[i];

        // the `j` loop will iterate left through the sorted region,
        // looking for a legal spot to insert currElement
        for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
            // keep moving left while currElement is less than the j-th element

            arr[j + 1] = arr[j];
            // the line above will move the j-th element to the right,
            // leaving a gap to potentially insert currElement
        }
        // insert currElement into that gap
        arr[j + 1] = currElement;
    }
    return arr;
}
```

There are a few key pieces to point out in the above solution before moving
forward:

1. The outer `for` loop starts at the 1st index, not the 0th index, and moves to
   the right.

2. The inner `for` loop starts immediately to the left of the current element,
   and moves to the left.

3. The condition for the inner `for` loop is complicated, and behaves similarly
   to a while loop!
    - It continues iterating to the left toward `j = 0`, _only while_ the
      `currElement` is less than `arr[j]`.
    - It does this over and over until it finds the proper place to insert
      `currElement`, and then we exit the inner loop!

4. When shifting elements in the sorted region to the right, it _does not_
   replace the value at their old index! If the input array is `[1, 2, 4, 3]`,
   and `currElement` is `3`, after comparing `4` and `3`, but before inserting
   `3` between `2` and `4`, the array will look like this: `[1, 2, 4, 4]`.

If you are currently scratching your head, that is perfectly okay because when
this one clicks, it clicks for good.

If you're struggling, you should try taking out a pen and paper and step through
the solution provided above one step at a time. Keep track of `i`, `j`,
`currElement`, `arr[j]`, and the input `arr` itself _at every step_. After going
through this a few times, you'll have your "ah HA!" moment.

## Time and Space Complexity Analysis

Insertion Sort runtime is O(n<sup>2</sup>) because:

In the **worst case scenario** where our input array is entirely unsorted, since
this algorithm contains a nested loop, its run time behaves similarly to
`bubbleSort` and `selectionSort`. In this case, we are forced to make a comparison
at each iteration of the inner loop. Not convinced? Let's derive the complexity.
We'll use much of the same argument as we did in `selectionSort`. Say we had the
worst case scenario where are input array is sorted in full decreasing order,
but we wanted to sort it in increasing order:

+ `n` is the length of the input array
+ The outer loop i contributes O(n) in isolation, this is plain to see
+ The inner loop j is more complicated. We know j will iterate until it finds an
  appropriate place to insert the `currElement` into the sorted region. However,
  since we are discussing the case where the data is already in decreasing
  order, the element must travel the maximum distance to find it's insertion
  point! We know this insertion point to be index 0, since every `currElement`
  will be the next smallest of the array. So:
    + the 1st element travels 1 distance to be inserted
    + the 2nd element travels 2 distance to be inserted
    + the 3rd element travels 3 distance to be inserted
    + ...
    + the n-1th element travels n-1 distance to be inserted
    + This means that our inner loop j will contribute roughly O(n / 2) on
      average
+ The two loops are nested so our total time complexity is O(n * n / 2) =
  O(n<sup>2</sup>)

### Space Complexity: O(1)

The amount of memory consumed by the algorithm does not increase relative to the
size of the input array. We use the same amount of memory and create the same
amount of variables regardless of the size of our input. A quick indicator of
this is the fact that we don't create any arrays.

## When should you use Insertion Sort?

Insertion Sort has one advantage that makes it absolutely supreme in one special
case. Insertion Sort is what's known as an "online" algorithm. Online algorithms
are great when you're dealing with _streaming data_, because they can sort the
data live _as it is received_.

If you must sort a set of data that is ever-incoming, for example, maybe you are
sorting the most relevant posts in a social media feed so that those posts that
are most likely to impact the site's audience always appear at the top of the
feed, an online algorithm like Insertion Sort is a great option.

Insertion Sort works well in this situation because the left side of the array
is always sorted, and in the case of nearly sorted arrays, it can run in linear
time. The absolute best case scenario for Insertion Sort is when there is only
one unsorted element, and it is located all the way to the right of the array.

Well, if you have data constantly being pushed to the array, it will always be
added to the right side. If you keep your algorithm constantly running, the left
side will always be sorted. Now you have linear time sort.

Otherwise, Insertion Sort is, in general, useful in all the same situations as
Bubble Sort. It's a good option when:

- You are sorting really small arrays where run time will be negligible no
  matter what algorithm we choose.
- You are sorting an array that you expect to already be nearly sorted.

________________________________________________________________________________
# Merge Sort Analysis

You needed to come up with two pieces of code to make merge sort work.

## Full code

```javascript
function merge(array1, array2) {
  let merged = [];

  while (array1.length || array2.length) {
    let ele1 = array1.length ? array1[0] : Infinity;
    let ele2 = array2.length ? array2[0] : Infinity;

    let next;
    if (ele1 < ele2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    merged.push(next);
  }

  return merged;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}
```

## Merging two sorted arrays

Merging two sorted arrays is simple. Since both arrays are sorted, we know the
smallest numbers to always be at the front of the arrays. We can construct the
new array by comparing the first elements of both input arrays. We remove the
smaller element from it's respective array and add it to our new array. Do this
until both input arrays are empty:

```javascript
function merge(array1, array2) {
  let merged = [];

  while (array1.length || array2.length) {
    let ele1 = array1.length ? array1[0] : Infinity;
    let ele2 = array2.length ? array2[0] : Infinity;

    let next;
    if (ele1 < ele2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    merged.push(next);
  }

  return merged;
}
```

Remember the following about JavaScript to understand the above code.

+ `0` is considered a falsey value, meaning it acts like `false` when used in
  Boolean expressions. All other numbers are truthy.
+ `Infinity` is a value that is guaranteed to be greater than any other quantity
+ `shift` is an array method that removes and returns the first element

Here's the annotated version.

```javascript
// commented
function merge(array1, array2) {
  let merged = [];

  // keep running while either array still contains elements
  while (array1.length || array2.length) {
    // if array1 is nonempty, take its the first element as ele1
    // otherwise array1 is empty, so take Infinity as ele1
    let ele1 = array1.length ? array1[0] : Infinity;

    // do the same for array2, ele2
    let ele2 = array2.length ? array2[0] : Infinity;

    let next;
    // remove the smaller of the eles from it's array
    if (ele1 < ele2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    // and add that ele to the new array
    merged.push(next);
  }

  return merged;
}
```

By using `Infinity` as the default element when an array is empty, we are able to
elegantly handle the scenario where one array empties before the other. We know
that any actual element will be less than `Infinity` so we will continually take
the other element into our merged array.

In other words, we can safely handle this edge case:

```javascript
merge([10, 13, 15, 25], []);  // => [10, 13, 15, 25]
```

Nice! We now have a way to merge two sorted arrays into a single sorted array.
It's worth mentioning that `merge` will have a `O(n)` runtime where `n` is the
combined length of the two input arrays. This is what we meant when we said it
was "easy" to merge two sorted arrays; linear time is fast! We'll find fact this
useful later.

## Divide and conquer, step-by-step

Now that we satisfied the merge idea, let's handle the second point. That is, we
say an array of 1 or 0 elements is already sorted. This will be the base case of
our recursion. Let's begin adding this code:

```javascript
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    // ....
}
```

If our base case pertains to an array of a very small size, then the design of
our recursive case should make progress toward hitting this base scenario. In
other words, we should recursively call `mergeSort` on smaller and smaller
arrays. A logical way to do this is to take the input array and split it into
left and right halves.

```javascript
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx);

    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);
    // ...
}
```

Here is the part of the recursion where we do a lot of hand waving and we take
things on faith. We know that `mergeSort` will take in an array and return the
sorted version; we assume that it works. That means the two recursive calls will
return the `sortedLeft` and `sortedRight` halves.

Okay, so we have two sorted arrays. We want to return one sorted array. So
`merge` them! Using the `merge` function we designed earlier:

```javascript
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx);

    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}
```

Wow. that's it. Notice how light the implementation of `mergeSort` is. Much of
the heavy lifting (the actually comparisons) is done by the `merge` helper.

`mergeSort` is a classic example of a "Divide and Conquer" algorithm. In other
words, we keep breaking the array into smaller and smaller sub arrays. This is
the same as saying we take the problem and break it down into smaller and
smaller subproblems. We do this until the subproblems are so small that we
trivially know the answer to them (an array length 0 or 1 is already sorted).
Once we have those subanswers we can combine to reconstruct the larger problems
that we previously divided (merge the left and right subarrays).


## Time and Space Complexity Analysis

### Time Complexity: O(n log(n))

+ `n` is the length of the input array
+ We must calculate how many recursive calls we make. The number of recursive
  calls is the number of times we must split the array to reach the base case.
  Since we split in half each time, the number of recursive calls is
  `O(log(n))`.
    + for example, say we had an array of length `32`
    + then the length would change as `32 -> 16 -> 8 -> 4 -> 2 -> 1`, we have to
      split 5 times before reaching the base case, `log(32) = 5`
    + in our algorithm, **log(n)** describes how many times we must halve **n**
      until the quantity reaches 1.
+ Besides the recursive calls, we must consider the while loop within the
  `merge` function, which contributes `O(n)` in isolation
+ We call `merge` in every recursive `mergeSort` call, so the total complexity
  is **O(n * log(n))**

### Space Complexity: O(n)

Merge Sort is the first non-O(1) space sorting algorithm we've seen thus far.

The larger the size of our input array, the greater the number of subarrays we
must create in memory. These are not free! They each take up finite space, and
we will need a new subarray for each element in the original input. Therefore,
Merge Sort has a linear space complexity, O(n).

### When should you use Merge Sort?

Unless we, the engineers, have access in advance to some unique, exploitable
insight about our dataset, it turns out that O(n log n) time is _the best_ we
can do when sorting unknown datasets.

That means that Merge Sort is fast! It's way faster than Bubble Sort, Selection
Sort, and Insertion Sort. However, due to its linear space complexity, we must
always weigh the trade off between speed and memory consumption when making the
choice to use Merge Sort. Consider the following:

- If you have unlimited memory available, use it, it's fast!
- If you have a decent amount of memory available and a medium sized dataset,
  run some tests first, but use it!
- In other cases, maybe you should consider other options.

________________________________________________________________________________
# Quick Sort

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
    let left = array.filter(el => el < pivot);
    let right = array.filter(el => el >= pivot);

    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);

    return leftSorted.concat([pivot]).concat(rightSorted);
}
```

That last `concat` line is a bit clunky. Bonus JS Lesson: we can use the spread
`...` operator to elegantly concatenate arrays. In general:

```javascript
let one = ['a', 'b']
let two = ['d', 'e', 'f']
let newArr = [ ...one, 'c', ...two  ];
newArr; // =>  [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```

Utilizing that spread pattern gives us this final implementation:

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

    return [ ...leftSorted, pivot, ...rightSorted ];
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
    let left = array.filter(el => el < pivot);
    let right = array.filter(el => el >= pivot);

    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);

    return [ ...leftSorted, pivot, ...rightSorted ];
}
```

## Time and Space Complexity Analysis

Here is a summary of the complexity.

### Time Complexity

+ Avg Case: O(n log(n))
+ Worst Case: O(n<sup>2</sup>)

The runtime analysis of `quickSort` is more complex than `mergeSort`

+ `n` is the length of the input array
+ The partition step alone is `O(n)`
+ We must calculate how many recursive calls we make. The number of recursive
  calls is the number of times we must split the array to reach the base case.
  This is dependent on how we choose the pivot. Let's analyze the best and worst
  case:
    + **Best Case:** We are lucky and always choose the median as the pivot.
      This means the left and right partitions will have equal length. This will
      halve the array length at every step of the recursion. We benefit from
      this halving with `O(log(n))` recursive calls to reach the base case.
    + **Worst Case:** We are unlucky and always choose the min or max as the
      pivot. This means one partition will contain everything, and the other
      partition is empty. This will decrease the array length by 1 at every step
      of the recursion. We suffer from `O(n)` recursive calls to reach the base
      case.
+ The partition step occurs in every recursive call, so our total complexities
  are:
    + **Best Case:** O(n * log(n))
    + **Worst Case:** O(n<sup>2</sup>)

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

+ When you are in a pinch and need to throw down an efficient sort (on average).
  The recursive code is light and simple to implement; much smaller than
  `mergeSort`.
+ When constant space is important to you, use the in-place version. This will
  of course trade off some simplicity of implementation.

If you know some constraints about dataset you can make some modifications to
optimize pivot choice. Here's some food for thought. Our implementation of
`quickSort` will always take the first element as the pivot. This means we will
suffer from the worst case time complexity in the event that we are given an
already sorted array (ironic isn't it?). If you know your input data to be
mostly already sorted, randomize the choice of pivot - this is a very easy
change. Bam. Solved like a true engineer.

________________________________________________________________________________
# Binary Search

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

+ `n` is the length of the input array
+ We have no loops, so we must only consider the number of recursive calls it
  takes to hit the base case
+ The number of recursive calls is the number of times we must halve the array
  until it's length becomes 0. This number can be described by `log(n)`
    + for example, say we had an array of 8 elements, `n = 8`
    + the length would halve as `8 -> 4 -> 2 -> 1`
    + it takes 3 calls, `log(8) = 3`

### Space Complexity: O(n)

Our implementation uses `n` space due to half arrays we create using slice. Note
that JavaScript `slice` creates a new array, so it requires additional memory to
be allocated.


### When should we use Binary Search?

Use this algorithm when the input data is sorted!!! This is a heavy requirement,
but if you have it, you'll have an insanely fast algorithm. Of course, you can
use one of your high-functioning sorting algorithms to sort the input and _then_
perform the binary search!

________________________________________________________________________________
# Bubble Sort

This project contains a skeleton for you to implement Bubble Sort. In the
file **lib/bubble_sort.js**, you should implement the Bubble Sort. This is a
description of how the Bubble Sort works (and is also in the code file).

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

## Instructions

* Clone the project from
  https://github.com/appacademy-starters/algorithms-bubble-sort-starter.
* `cd` into the project folder
* `npm install` to install dependencies in the project root directory
* `npm test` to run the specs
* You can view the test cases in `/test/test.js`. Your job is to write code in
  the `/lib/bubble_sort.js` that implements the Bubble Sort.

________________________________________________________________________________
# Selection Sort

This project contains a skeleton for you to implement Selection Sort. In the
file **lib/selection_sort.js**, you should implement the Selection Sort. You
can use the same `swap` function from Bubble Sort; however, try to implement it
on your own, first.

The algorithm can be summarized as the following:

1. Set MIN to location 0
2. Search the minimum element in the list
3. Swap with value at location MIN
4. Increment MIN to point to next element
5. Repeat until list is sorted

This is a description of how the Selection Sort works (and is also in the code
file).

```
procedure selection sort(list)
   list  : array of items
   n     : size of list

   for i = 1 to n - 1
   /* set current element as minimum*/
      min = i

      /* check the element to be minimum */

      for j = i+1 to n
         if list[j] < list[min] then
            min = j;
         end if
      end for

      /* swap the minimum element with the current element*/
      if indexMin != i  then
         swap list[min] and list[i]
      end if
   end for
end procedure
```

## Instructions

* Clone the project from
  https://github.com/appacademy-starters/algorithms-selection-sort-starter.
* `cd` into the project folder
* `npm install` to install dependencies in the project root directory
* `npm test` to run the specs
* You can view the test cases in `/test/test.js`. Your job is to write code in
  the `/lib/selection_sort.js` that implements the Selection Sort.

________________________________________________________________________________
# Insertion Sort

This project contains a skeleton for you to implement Insertion Sort. In the
file **lib/insertion_sort.js**, you should implement the Insertion Sort.

The algorithm can be summarized as the following:

1. If it is the first element, it is already sorted. return 1;
2. Pick next element
3. Compare with all elements in the sorted sub-list
4. Shift all the elements in the sorted sub-list that is greater than the
   value to be sorted
5. Insert the value
6. Repeat until list is sorted

This is a description of how the Insertion Sort works (and is also in the code
file).

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

## Instructions

* Clone the project from
  https://github.com/appacademy-starters/algorithms-insertion-sort-starter.
* `cd` into the project folder
* `npm install` to install dependencies in the project root directory
* `npm test` to run the specs
* You can view the test cases in `/test/test.js`. Your job is to write code in
  the `/lib/insertion_sort.js` that implements the Insertion Sort.

________________________________________________________________________________
# Merge Sort

This project contains a skeleton for you to implement Merge Sort. In the
file **lib/merge_sort.js**, you should implement the Merge Sort.

The algorithm can be summarized as the following:

1. if there is only one element in the list, it is already sorted. return that
   array.
2. otherwise, divide the list recursively into two halves until it can no more
   be divided.
3. merge the smaller lists into new list in sorted order.

This is a description of how the Merge Sort works (and is also in the code
file).

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

## Instructions

* Clone the project from
  https://github.com/appacademy-starters/algorithms-merge-sort-starter.
* `cd` into the project folder
* `npm install` to install dependencies in the project root directory
* `npm test` to run the specs
* You can view the test cases in `/test/test.js`. Your job is to write code in
  the `/lib/merge_sort.js` that implements the Merge Sort.

________________________________________________________________________________
# Quick Sort

This project contains a skeleton for you to implement Quick Sort. In the
file **lib/quick_sort.js**, you should implement the Quick Sort. This is a
description of how the Quick Sort works (and is also in the code file).

```
procedure quick sort (array)
  if the length of the array is 0 or 1, return the array

  set the pivot to the first element of the array
  remove the first element of the array

  put all values less than the pivot value into an array called left
  put all values greater than the pivot value into an array called right

  call quick sort on left and assign the return value to leftSorted
  call quick sort on right and assign the return value to rightSorted

  return the concatenation of leftSorted, the pivot value, and rightSorted
end procedure quick sort
```

## Instructions

* Clone the project from
  https://github.com/appacademy-starters/algorithms-quick-sort-starter.
* `cd` into the project folder
* `npm install` to install dependencies in the project root directory
* `npm test` to run the specs
* You can view the test cases in `/test/test.js`. Your job is to write code in
  the `/lib/quick_sort.js` that implements the Quick Sort.

________________________________________________________________________________
# Binary Search

This project contains a skeleton for you to implement Binary Search. In the
file **lib/binary_search.js**, you should implement the Binary Search and its
cousin Binary Search Index.

The Binary Search algorithm can be summarized as the following:

1. If the array is empty, then return false
2. Check the value in the middle of the array against the target value
3. If the value is equal to the target value, then return true
4. If the value is less than the target value, then return the binary search on
   the left half of the array for the target
5. If the value is greater than the target value, then return the binary search
   on the right half of the array for the target

This is a description of how the Binary Search works (and is also in the code
file).

```
procedure binary search (list, target)
  parameter list: a list of sorted value
  parameter target: the value to search for

  if the list has zero length, then return false

  determine the slice point:
    if the list has an even number of elements,
      the slice point is the number of elements
      divided by two
    if the list has an odd number of elements,
      the slice point is the number of elements
      minus one divided by two

  create an list of the elements from 0 to the
    slice point, not including the slice point,
    which is known as the "left half"
  create an list of the elements from the
    slice point to the end of the list which is
    known as the "right half"

  if the target is less than the value in the
    original array at the slice point, then
    return the binary search of the "left half"
    and the target
  if the target is greater than the value in the
    original array at the slice point, then
    return the binary search of the "right half"
    and the target
  if neither of those is true, return true
end procedure binary search
```

Then you need to adapt that to return _the index_ of the found item rather than
a Boolean value. The pseudocode is also in the code file.

```
procedure binary search index(list, target, low, high)
  parameter list: a list of sorted value
  parameter target: the value to search for
  parameter low: the lower index for the search
  parameter high: the upper index for the search

  if low is equal to high, then return -1 to indicate
    that the value was not found

  determine the slice point:
    if the list between the high index and the low index
    has an even number of elements,
      the slice point is the number of elements
      between high and low divided by two
    if the list between the high index and the low index
    has an odd number of elements,
      the slice point is the number of elements
      between high and low minus one, divided by two

  if the target is less than the value in the
    original array at the slice point, then
    return the binary search of the array,
    the target, low, and the slice point
  if the target is greater than the value in the
    original array at the slice point, then return
    the binary search of the array, the target,
    the slice point plus one, and high
  if neither of those is true, return the slice point
end procedure binary search index
```

## Instructions

* Clone the project from
  https://github.com/appacademy-starters/algorithms-binary-search-starter.
* `cd` into the project folder
* `npm install` to install dependencies in the project root directory
* `npm test` to run the specs
* You can view the test cases in `/test/test.js`. Your job is to write code in
  the `/lib/binary_search.js` that implements the Binary Search and Binary
  Search Index.
