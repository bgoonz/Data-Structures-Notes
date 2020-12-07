# Bubble Sort
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [_"But...then...why are we..."_](#_butthenwhy-are-we_)
- [The algorithm bubbles up](#the-algorithm-bubbles-up)
- [How does a pass of Bubble Sort work?](#how-does-a-pass-of-bubble-sort-work)
- [Ending the Bubble Sort](#ending-the-bubble-sort)
- [Pseudocode for Bubble Sort](#pseudocode-for-bubble-sort)

<!-- /code_chunk_output -->
________________________________________________________________________________

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
