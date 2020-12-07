# Selection Sort
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [The algorithm: select the next smallest](#the-algorithm-select-the-next-smallest)
- [The pseudocode](#the-pseudocode)

<!-- /code_chunk_output -->
________________________________________________________________________________

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
