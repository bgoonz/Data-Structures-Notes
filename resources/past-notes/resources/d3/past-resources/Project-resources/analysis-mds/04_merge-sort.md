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
