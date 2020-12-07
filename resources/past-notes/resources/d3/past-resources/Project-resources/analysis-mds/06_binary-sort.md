# Binary Search
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [The Algorithm: "check the middle and half the search space"](#the-algorithm-check-the-middle-and-half-the-search-space)
- [The pseudocode](#the-pseudocode)

<!-- /code_chunk_output -->
________________________________________________________________________________

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
