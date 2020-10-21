# WEEK-07 DAY-5<br>*Heaps* {ignore=true}
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=2 orderedList=false} -->
________________________________________________________________________________
________________________________________________________________________________
# Graphs and Heaps

________________________________________________________________________________
# Introduction to Heaps

Let's explore the **Heap** data structure! In particular, we'll explore **Binary
Heaps**. A binary heap is a type of binary tree. However, a heap is not a binary
*search* tree. A heap is a partially ordered data structure, whereas a BST has
full order. In a heap, the root of the tree will be the maximum (max heap) or
the minimum (min heap). Below is an example of a max heap:

![max_heap](images/max_heap.png)

Notice that the heap above does not follow search tree property where all values
to the left of a node are less and all values to the right are greater or equal.
Instead, the max heap invariant is:

+ given any node, its children must be less than or equal to the node

This constraint makes heaps much more relaxed in structure compared to a search
tree. There is no guaranteed order among "siblings" or "cousins" in a heap. The
relationship only flows down the tree from parent to child. In other words, in a
max heap, a node will be greater than all of it's children, it's grandchildren,
its great-grandchildren, and so on. A consequence of this is the root being the
absolute maximum of the entire tree. We'll be exploring max heaps together, but
these arguments are symmetric for a min heap.

### Complete Trees

We'll eventually implement a max heap together, but first we'll need to take a
quick detour. Our design goal is to implement a data structure with efficient
operations. Since a heap is a type of binary tree, recall the circumstances
where we had a "best case" binary tree. We'll need to ensure our heap has
minimal height, that is, it must be a balanced tree!

Our heap implementation will not only be balanced, but it will also be
**complete**. To clarify, **every complete tree is also a balanced tree**, but
not every balanced tree is also complete. Our definition of a complete tree is:

+ a tree where all levels have the maximal number of nodes, except the bottom
  the level
+ AND the bottom level has all nodes filled as far left as possible

Here are few examples of the definition:

![complete_tree](images/complete_tree.png)

Notice that the tree is on the right fails the second point of our definition
because there is a gap in the last level. Informally, you can think about a
complete tree as packing its nodes as closely together as possible. This line of
thinking will come into play when we code heaps later.


### When to Use Heaps?

Heaps are the most useful when attacking problems that require you to "partially
sort" data. This usually takes form in problems that have us calculate the
largest or smallest n numbers of a collection. For example: What if you were
asked to find the largest 5 numbers in an array in linear time, O(n)? The
fastest sorting algorithms are O(n logn), so none of those algorithms will be
good enough. However, we can use a heap to solve this problem in linear time.

We'll analyze this in depth when we implement a heap in the next section!

One of the most common uses of a binary heap is to implement a "[priority queue]".
We learned before that a queue is a FIFO (First In, First Out) data structure.
With a priority queue, items are removed from the queue based on a priority number.
The priority number is used to place the items into the heap and pull them out
in the correct priority order!

[priority queue]:https://en.wikipedia.org/wiki/Priority_queue

________________________________________________________________________________
# Introduction to Heaps

Let's explore the **Heap** data structure! In particular, we'll explore **Binary
Heaps**. A binary heap is a type of binary tree. However, a heap is not a binary
*search* tree. A heap is a partially ordered data structure, whereas a BST has
full order. In a heap, the root of the tree will be the maximum (max heap) or
the minimum (min heap). Below is an example of a max heap:

![max_heap](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/heaps/images/max_heap.png)

Notice that the heap above does not follow search tree property where all values
to the left of a node are less and all values to the right are greater or equal.
Instead, the max heap invariant is:

+ given any node, its children must be less than or equal to the node

This constraint makes heaps much more relaxed in structure compared to a search
tree. There is no guaranteed order among "siblings" or "cousins" in a heap. The
relationship only flows down the tree from parent to child. In other words, in a
max heap, a node will be greater than all of it's children, it's grandchildren,
its great-grandchildren, and so on. A consequence of this is the root being the
absolute maximum of the entire tree. We'll be exploring max heaps together, but
these arguments are symmetric for a min heap.

### Complete Trees

We'll eventually implement a max heap together, but first we'll need to take a
quick detour. Our design goal is to implement a data structure with efficient
operations. Since a heap is a type of binary tree, recall the circumstances
where we had a "best case" binary tree. We'll need to ensure our heap has
minimal height, that is, it must be a balanced tree!

Our heap implementation will not only be balanced, but it will also be
**complete**. To clarify, **every complete tree is also a balanced tree**, but
not every balanced tree is also complete. Our definition of a complete tree is:

+ a tree where all levels have the maximal number of nodes, except the bottom
  the level
+ AND the bottom level has all nodes filled as far left as possible

Here are few examples of the definition:

![complete_tree](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/heaps/images/complete_tree.png)

Notice that the tree is on the right fails the second point of our definition
because there is a gap in the last level. Informally, you can think about a
complete tree as packing its nodes as closely together as possible. This line of
thinking will come into play when we code heaps later.


### When to Use Heaps?

Heaps are the most useful when attacking problems that require you to "partially
sort" data. This usually takes form in problems that have us calculate the
largest or smallest n numbers of a collection. For example: What if you were
asked to find the largest 5 numbers in an array in linear time, O(n)? The
fastest sorting algorithms are O(n logn), so none of those algorithms will be
good enough. However, we can use a heap to solve this problem in linear time.

We'll analyze this in depth when we implement a heap in the next section!

One of the most common uses of a binary heap is to implement a "[priority queue]".
We learned before that a queue is a FIFO (First In, First Out) data structure.
With a priority queue, items are removed from the queue based on a priority number.
The priority number is used to place the items into the heap and pull them out
in the correct priority order!

[priority queue]:https://en.wikipedia.org/wiki/Priority_queuer, we'll explore **Binary
Heaps**. A binary heap is a type of binary tree. However, a heap is not a binary
*search* tree. A heap is a partially ordered data structure, whereas a BST has
full order. In a heap, the root of the tree will be the maximum (max heap) or
the minimum (min heap). Below is an example of a max heap:

![max_heap](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/heaps/images/max_heap.png)

Notice that the heap above does not follow search tree property where all values
to the left of a node are less and all values to the right are greater or equal.
Instead, the max heap invariant is:

+ given any node, its children must be less than or equal to the node

This constraint makes heaps much more relaxed in structure compared to a search
tree. There is no guaranteed order among "siblings" or "cousins" in a heap. The
relationship only flows down the tree from parent to child. In other words, in a
max heap, a node will be greater than all of it's children, it's grandchildren,
its great-grandchildren, and so on. A consequence of this is the root being the
absolute maximum of the entire tree. We'll be exploring max heaps together, but
these arguments are symmetric for a min heap.

### Complete Trees

We'll eventually implement a max heap together, but first we'll need to take a
quick detour. Our design goal is to implement a data structure with efficient
operations. Since a heap is a type of binary tree, recall the circumstances
where we had a "best case" binary tree. We'll need to ensure our heap has
minimal height, that is, it must be a balanced tree!

Our heap implementation will not only be balanced, but it will also be
**complete**. To clarify, **every complete tree is also a balanced tree**, but
not every balanced tree is also complete. Our definition of a complete tree is:

+ a tree where all levels have the maximal number of nodes, except the bottom
  the level
+ AND the bottom level has all nodes filled as far left as possible

Here are few examples of the definition:

![complete_tree](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/heaps/images/complete_tree.png)

Notice that the tree is on the right fails the second point of our definition
because there is a gap in the last level. Informally, you can think about a
complete tree as packing its nodes as closely together as possible. This line of
thinking will come into play when we code heaps later.


### When to Use Heaps?

Heaps are the most useful when attacking problems that require you to "partially
sort" data. This usually takes form in problems that have us calculate the
largest or smallest n numbers of a collection. For example: What if you were
asked to find the largest 5 numbers in an array in linear time, O(n)? The
fastest sorting algorithms are O(n logn), so none of those algorithms will be
good enough. However, we can use a heap to solve this problem in linear time.

We'll analyze this in depth when we implement a heap in the next section!

One of the most common uses of a binary heap is to implement a "[priority queue]".
We learned before that a queue is a FIFO (First In, First Out) data structure.
With a priority queue, items are removed from the queue based on a priority number.
The priority number is used to place the items into the heap and pull them out
in the correct priority order!

[priority queue]:https://en.wikipedia.org/wiki/Priority_queue

________________________________________________________________________________
## Binary Heap Implementation

Now that we are familiar with the structure of a heap, let's implement one! What
may be surprising is that the usual way to implement a heap is by simply using an
array. That is, we won't need to create a node class with pointers. Instead,
each index of the array will represent a node, with the root being at index 1.
We'll avoid using index 0 of the array so our math works out nicely. From this
point, we'll use the following rules to interpret the array as a heap:

+ index `i` represents a node in the heap
+ the left child of node `i` can be found at index `2 * i`
+ the right child of code `i` can be found at index `2 * i + 1`

In other words, the array `[null, 42, 32, 24, 30, 9, 20, 18, 2, 7]` represents
the heap below. Take a moment to analyze how the array indices work out to
represent left and right children.

![max_heap](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/heaps/images/max_heap.png)

Pretty clever math right? We can also describe the relationship from child to
parent node. Say we are given a node at index `i` in the heap, then it's parent
is found at index `Math.floor(i / 2)`.

It's useful to visualize heap algorithms using the classic image of nodes and
edges, but we'll translate that into array index operations.

### Insert

What's a heap if we can't add data into it? We'll need a `insert` method
that will add a new value into the heap without voiding our heap property. In
our `MaxHeap`, the property states that a node must be greater than its
children.

#### Visualizing our heap as a tree of nodes:
1. We begin an insertion by adding the new node to the bottom leaf level of the
   heap, preferring to place the new node as far left in the level as possible.
   This ensures the tree remains complete.
2. Placing the new node there may momentarily break our heap property, so we
   need to restore it by moving the node up the tree into a legal position.
   Restoring the heap property is a matter of continually swapping the new node
   with it's parent while it's parent contains a smaller value. We refer to this
   process as `siftUp`

#### Translating that into array operations:
1. `push` the new value to the end of the array
2.  continually swap that value toward the front of the array (following our
    child-parent index rules) until heap property is restored

### DeleteMax

This is the "fetch" operation of a heap. Since we maintain heap property
throughout, the root of the heap will always be the maximum value. We want to
delete and return the root, whilst keeping the heap property.

#### Visualizing our heap as a tree of nodes:
1. We begin the deletion by saving a reference to the root value (the max) to
   return later. We then locate the right most node of the bottom level and copy
   it's value into the root of the tree. We easily delete the duplicate node at
   the leaf level. This ensures the tree remains complete.
2. Copying that value into the root may momentarily break our heap property, so
   we need to restore it by moving the node down the tree into a legal position.
   Restoring the heap property is a matter of continually swapping the node with
   the greater of it's two children. We refer to this process as `siftDown`.

#### Translating that into array operations:
1. The root is at index 1, so save it to return later. The right most node of
   the bottom level would just be the very last element of the array. Copy the
   last element into index 1, and pop off the last element (since it now appears
   at the root).
2. Continually swap the new root toward the back of the array (following our
   parent-child index rules) until heap property is restored. A node can have
   two children, so we should always prefer to swap with the greater child.


### Time Complexity Analysis

+ insert: `O(log(n))`
+ deleteMax: `O(log(n))`

Recall that our heap will be a complete/balanced tree. This means it's height is
`log(n)` where `n` is the number of items. Both `insert` and `deleteMax` have a
time complexity of `log(n)` because of `siftUp` and `siftDown` respectively. In
worst case `insert`, we will have to `siftUp` a leaf all the way to the root of
the tree. In the worst case `deleteMax`, we will have to `siftDown` the new root
all the way down to the leaf level. In either case, we'll have to traverse the
full height of the tree, `log(n)`.

#### Array Heapify Analysis

Now that we have established `O(log(n))` for a single insertion, let's analyze
the time complexity for turning an array into a heap (we call this heapify,
coming in the next project :)). The algorithm itself is simple, just perform an
`insert` for every element. Since there are `n` elements and each insert
requires `log(n)` time, our total complexity for heapify is `O(nlog(n))`... Or
is it? There is actually a tighter bound on heapify. The proof requires some
math that you won't find valuable in your job search, but do understand that the
true time complexity of heapify is amortized `O(n)`. Amortized refers to the
fact that our analysis is about performance over many insertions.

### Space Complexity Analysis

+ `O(n)`, since we use a single array to store heap data.heap, let's implement one! What
may be surprising is that the usual way to implement a heap is by simply using an
array. That is, we won't need to create a node class with pointers. Instead,
each index of the array will represent a node, with the root being at index 1.
We'll avoid using index 0 of the array so our math works out nicely. From this
point, we'll use the following rules to interpret the array as a heap:

+ index `i` represents a node in the heap
+ the left child of node `i` can be found at index `2 * i`
+ the right child of code `i` can be found at index `2 * i + 1`

In other words, the array `[null, 42, 32, 24, 30, 9, 20, 18, 2, 7]` represents
the heap below. Take a moment to analyze how the array indices work out to
represent left and right children.

![max_heap](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/heaps/images/max_heap.png)

Pretty clever math right? We can also describe the relationship from child to
parent node. Say we are given a node at index `i` in the heap, then it's parent
is found at index `Math.floor(i / 2)`.

It's useful to visualize heap algorithms using the classic image of nodes and
edges, but we'll translate that into array index operations.

### Insert

What's a heap if we can't add data into it? We'll need a `insert` method
that will add a new value into the heap without voiding our heap property. In
our `MaxHeap`, the property states that a node must be greater than its
children.

#### Visualizing our heap as a tree of nodes:
1. We begin an insertion by adding the new node to the bottom leaf level of the
   heap, preferring to place the new node as far left in the level as possible.
   This ensures the tree remains complete.
2. Placing the new node there may momentarily break our heap property, so we
   need to restore it by moving the node up the tree into a legal position.
   Restoring the heap property is a matter of continually swapping the new node
   with it's parent while it's parent contains a smaller value. We refer to this
   process as `siftUp`

#### Translating that into array operations:
1. `push` the new value to the end of the array
2.  continually swap that value toward the front of the array (following our
    child-parent index rules) until heap property is restored

### DeleteMax

This is the "fetch" operation of a heap. Since we maintain heap property
throughout, the root of the heap will always be the maximum value. We want to
delete and return the root, whilst keeping the heap property.

#### Visualizing our heap as a tree of nodes:
1. We begin the deletion by saving a reference to the root value (the max) to
   return later. We then locate the right most node of the bottom level and copy
   it's value into the root of the tree. We easily delete the duplicate node at
   the leaf level. This ensures the tree remains complete.
2. Copying that value into the root may momentarily break our heap property, so
   we need to restore it by moving the node down the tree into a legal position.
   Restoring the heap property is a matter of continually swapping the node with
   the greater of it's two children. We refer to this process as `siftDown`.

#### Translating that into array operations:
1. The root is at index 1, so save it to return later. The right most node of
   the bottom level would just be the very last element of the array. Copy the
   last element into index 1, and pop off the last element (since it now appears
   at the root).
2. Continually swap the new root toward the back of the array (following our
   parent-child index rules) until heap property is restored. A node can have
   two children, so we should always prefer to swap with the greater child.


### Time Complexity Analysis

+ insert: `O(log(n))`
+ deleteMax: `O(log(n))`

Recall that our heap will be a complete/balanced tree. This means it's height is
`log(n)` where `n` is the number of items. Both `insert` and `deleteMax` have a
time complexity of `log(n)` because of `siftUp` and `siftDown` respectively. In
worst case `insert`, we will have to `siftUp` a leaf all the way to the root of
the tree. In the worst case `deleteMax`, we will have to `siftDown` the new root
all the way down to the leaf level. In either case, we'll have to traverse the
full height of the tree, `log(n)`.

#### Array Heapify Analysis

Now that we have established `O(log(n))` for a single insertion, let's analyze
the time complexity for turning an array into a heap (we call this heapify,
coming in the next project :)). The algorithm itself is simple, just perform an
`insert` for every element. Since there are `n` elements and each insert
requires `log(n)` time, our total complexity for heapify is `O(nlog(n))`... Or
is it? There is actually a tighter bound on heapify. The proof requires some
math that you won't find valuable in your job search, but do understand that the
true time complexity of heapify is amortized `O(n)`. Amortized refers to the
fact that our analysis is about performance over many insertions.

### Space Complexity Analysis

+ `O(n)`, since we use a single array to store heap data.

________________________________________________________________________________
## Binary Heap Implementation

Now that we are familiar with the structure of a heap, let's implement one! What
may be surprising is that the usual way to implement a heap is by simply using an
array. That is, we won't need to create a node class with pointers. Instead,
each index of the array will represent a node, with the root being at index 1.
We'll avoid using index 0 of the array so our math works out nicely. From this
point, we'll use the following rules to interpret the array as a heap:

+ index `i` represents a node in the heap
+ the left child of node `i` can be found at index `2 * i`
+ the right child of code `i` can be found at index `2 * i + 1`

In other words, the array `[null, 42, 32, 24, 30, 9, 20, 18, 2, 7]` represents
the heap below. Take a moment to analyze how the array indices work out to
represent left and right children.

![max_heap](images/max_heap.png)

Pretty clever math right? We can also describe the relationship from child to
parent node. Say we are given a node at index `i` in the heap, then it's parent
is found at index `Math.floor(i / 2)`.

It's useful to visualize heap algorithms using the classic image of nodes and
edges, but we'll translate that into array index operations.

### Insert

What's a heap if we can't add data into it? We'll need a `insert` method
that will add a new value into the heap without voiding our heap property. In
our `MaxHeap`, the property states that a node must be greater than its
children.

#### Visualizing our heap as a tree of nodes:
1. We begin an insertion by adding the new node to the bottom leaf level of the
   heap, preferring to place the new node as far left in the level as possible.
   This ensures the tree remains complete.
2. Placing the new node there may momentarily break our heap property, so we
   need to restore it by moving the node up the tree into a legal position.
   Restoring the heap property is a matter of continually swapping the new node
   with it's parent while it's parent contains a smaller value. We refer to this
   process as `siftUp`

#### Translating that into array operations:
1. `push` the new value to the end of the array
2.  continually swap that value toward the front of the array (following our
    child-parent index rules) until heap property is restored

### DeleteMax

This is the "fetch" operation of a heap. Since we maintain heap property
throughout, the root of the heap will always be the maximum value. We want to
delete and return the root, whilst keeping the heap property.

#### Visualizing our heap as a tree of nodes:
1. We begin the deletion by saving a reference to the root value (the max) to
   return later. We then locate the right most node of the bottom level and copy
   it's value into the root of the tree. We easily delete the duplicate node at
   the leaf level. This ensures the tree remains complete.
2. Copying that value into the root may momentarily break our heap property, so
   we need to restore it by moving the node down the tree into a legal position.
   Restoring the heap property is a matter of continually swapping the node with
   the greater of it's two children. We refer to this process as `siftDown`.

#### Translating that into array operations:
1. The root is at index 1, so save it to return later. The right most node of
   the bottom level would just be the very last element of the array. Copy the
   last element into index 1, and pop off the last element (since it now appears
   at the root).
2. Continually swap the new root toward the back of the array (following our
   parent-child index rules) until heap property is restored. A node can have
   two children, so we should always prefer to swap with the greater child.


### Time Complexity Analysis

+ insert: `O(log(n))`
+ deleteMax: `O(log(n))`

Recall that our heap will be a complete/balanced tree. This means it's height is
`log(n)` where `n` is the number of items. Both `insert` and `deleteMax` have a
time complexity of `log(n)` because of `siftUp` and `siftDown` respectively. In
worst case `insert`, we will have to `siftUp` a leaf all the way to the root of
the tree. In the worst case `deleteMax`, we will have to `siftDown` the new root
all the way down to the leaf level. In either case, we'll have to traverse the
full height of the tree, `log(n)`.

#### Array Heapify Analysis

Now that we have established `O(log(n))` for a single insertion, let's analyze
the time complexity for turning an array into a heap (we call this heapify,
coming in the next project :)). The algorithm itself is simple, just perform an
`insert` for every element. Since there are `n` elements and each insert
requires `log(n)` time, our total complexity for heapify is `O(nlog(n))`... Or
is it? There is actually a tighter bound on heapify. The proof requires some
math that you won't find valuable in your job search, but do understand that the
true time complexity of heapify is amortized `O(n)`. Amortized refers to the
fact that our analysis is about performance over many insertions.

### Space Complexity Analysis

+ `O(n)`, since we use a single array to store heap data.

________________________________________________________________________________
## Heap Sort

We've emphasized heavily that heaps are a *partially ordered* data structure. However, we can still leverage heaps in a sorting algorithm to end up with fully sorted array. The strategy is simple using our previous `MaxHeap` implementation:

1. build the heap: `insert` all elements of the array into a `MaxHeap`
2. construct the sorted list: continue to `deleteMax` until the heap is empty, every deletion will return the next element in decreasing order

The code is straightforward:

```javascript
// assuming our `MaxHeap` from the previous section

function heapSort(array) {
    // Step 1: build the heap
    let heap = new MaxHeap();
    array.forEach(num => heap.insert(num));

    // Step 2: constructed the sorted array
    let sorted = [];
    while (heap.array.length > 1) {
        sorted.push(heap.deleteMax());
    }

    return sorted;
}
```

### Time Complexity Analysis: O(nlog(n))

+ `n` is the size of the input array
+ step-1 requires `O(n)` time as previously discussed
+ step-2's while loop requires `n` steps in isolation and each `deleteMax` will require `log(n)` steps to restore max heap property (due to sifting-down). This means step 2 costs `O(nlog(n))`
+ the total time complexity of the algorithm is `O(n + nlog(n)) = O(nlog(n))`

### Space Complexity Analysis:

So `heapSort` performs as fast as our other efficient sorting algorithms, but how does it fair in space complexity? Our implementation above requires an extra `O(n)` amount of space because the heap is maintained separately from the input array. If we can figure out a way to do all of these heap operations in-place we can get constant `O(1)` space! Let's work on this now.

## In-Place Heap Sort

The in-place algorithm will have the same 2 steps, but it will differ in the implementation details. Since we need to have all operations take place in a single array, we're going to have to denote two regions of the array. That is, we'll need a heap region and a sorted region. We begin by turning the entire region into a heap. Then we continually delete max to get the next element in increasing order. As the heap region shrinks, the sorted region will grow.

### Heapify

Let's focus on designing step-1 as an in-place algorithm. In other words, we'll need to reorder elements of the input array so they follow max heap property. This is usually refered to as `heapify`. Our `heapify` will use much of the same logic as `MaxHeap#siftDown`.

```javascript
// swap the elements at indices i and j of array
function swap(array, i, j) {
    [ array[i], array[j] ] = [ array[j], array[i] ];
}

// sift-down the node at index i until max heap property is restored
// n represents the size of the heap
function heapify(array, n, i) {
    let leftIdx = 2 * i + 1;
    let rightIdx = 2 * i + 2;

    let leftVal = array[leftIdx];
    let rightVal = array[rightIdx];

    if (leftIdx >= n) leftVal = -Infinity;
    if (rightIdx >= n) rightVal = -Infinity;

    if (array[i] > leftVal && array[i] > rightVal) return;

    let swapIdx;
    if (leftVal < rightVal) {
        swapIdx = rightIdx;
    } else {
        swapIdx = leftIdx;
    }
    swap(array, i, swapIdx);
    heapify(array, n, swapIdx);
}
```

We weren't kidding when we said this would be similar to `MaxHeap#siftDown`. If you are not convinced, flip to the previous section and take a look! The few differences we want to emphasize are:

+ Given a node at index `i`, it's left index is `2 * i + 1` and it's right index is `2 * i + 2`
    + Using these as our child index formulas will allow us to avoid using a placeholder element at index 0. The root of the heap will be at index 0.
+ The parameter `n` represents the number of nodes in the heap
    + You may feel that `array.length` also represents the number of nodes in the heap. That is true, but only in step-1. Later we will need to dynamically state the size of the heap. Remember, we are trying to do this without creating any extra arrays. We'll need to separate the heap and sorted regions of the array and `n` will dictate the end of the heap.
+ We created a separate `swap` helper function.
    + Nothing fancy here. Swapping will be valuable in step-2 of the algorithm as well, so we'll want to keep our code DRY (don't repeat yourself).

To correctly convert the input array into a heap, we'll need to call `heapify` on children nodes before their parents. This is easy to do, just call `heapify` on each element right-to-left in the array:

```javascript
function heapSort(array) {
    // heapify the tree from the bottom up
    for (let i = array.length - 1; i >= 0; i--) {
        heapify(array, array.length, i);
    }
    // the entire array is now a heap
    // ...
}
```

Nice! Now the elements of the array have been moved around to obey max heap property.

### Construct the Sorted Array

To put everything together, we'll need to continually "delete max" from our heap. From our previous lecture, we learned the steps for deletion are to swap the last node of the heap into the root and then sift the new root down to restore max heap property. We'll follow the same logic here, except we'll need to account for the sorted region of the array. The array will contain the heap region in the front and the sorted region at the rear:

```javascript
function heapSort(array) {
    // heapify the tree from the bottom up
    for (let i = array.length - 1; i >= 0; i--) {
        heapify(array, array.length, i);
    }
    // the entire array is now a heap

    // until the heap is empty, continue to "delete max"
    for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
        // swap the root of the heap with the last element of the heap,
        // this effecively shrinks the heap by one and grows the sorted array by one
        swap(array, endOfHeap, 0);

        // sift down the new root, but not past the end of the heap
        heapify(array, endOfHeap, 0);
    }
    return array;
}
```

You'll definitely want to watch the lecture that follows this reading to get a visual of how the array is divided into the heap and sorted regions.

### In-Place Heap Sort JavaScript Implementation

Here is the full code for your reference:

```javascript
function heapSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        heapify(array, array.length, i);
    }

    for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
        swap(array, endOfHeap, 0);
        heapify(array, endOfHeap, 0);
    }
    
    return array;
}

function heapify(array, n, i) {
    let leftIdx = 2 * i + 1;
    let rightIdx = 2 * i + 2;

    let leftVal = array[leftIdx];
    let rightVal = array[rightIdx];

    if (leftIdx >= n) leftVal = -Infinity;
    if (rightIdx >= n) rightVal = -Infinity;

    if (array[i] > leftVal && array[i] > rightVal) return;

    let swapIdx;
    if (leftVal < rightVal) {
        swapIdx = rightIdx;
    } else {
        swapIdx = leftIdx;
    }
    swap(array, i, swapIdx);
    heapify(array, n, swapIdx);
}

function swap(array, i, j) {
    [ array[i], array[j] ] = [ array[j], array[i] ];
}
```


________________________________________________________________________________
# Heaps Project

This project contains a skeleton for you to implement a max heap. This is a
test-driven project. Run the tests and read the top-most error. If it's not
clear what is failing, open the **test/test.js** file to figure out what the
test is expecting. Make the top-most test pass.

Keep making the top-most test pass until all tests pass.

## Instructions

* Clone the project from
  https://github.com/appacademy-starters/data-structures-max-heap-starter.
* `cd` into the project folder
* `npm install` to install dependencies in the project root directory
* `npm test` to run the specs
* You can view the test cases in `test/test.js`. Your job is to write code in
  * **lib/max_heap.js** to implement the `MaxHeap` class
  * **lib/is_heap.js** to implement the `isMaxHeap` function
  * **lib/leet_code_215.js** to implement the `findKthLargest` function located
    at https://leetcode.com/problems/kth-largest-element-in-an-array/
