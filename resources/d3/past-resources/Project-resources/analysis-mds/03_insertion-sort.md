# Insertion Sort

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Insertion Sort](#insertion-sort)
  - [The algorithm: insert into the sorted region](#the-algorithm-insert-into-the-sorted-region)
  - [The Steps](#the-steps)
  - [The pseudocode](#the-pseudocode)

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
