# Analysis of Linear Search

Consider the following search algorithm known as **linear search**.

```javascript
function search(array, term) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == term) {
      return i;
    }
  }
  return -1;
}
```

Most Big-O analysis is done on the "worst-case scenario" and provides an upper
bound. In the worst case analysis, you calculate the upper bound on running time
of an algorithm. You must know the case that causes the maximum number of
operations to be executed.

For _linear search_, the worst case happens when the element to be searched
(`term` in the above code) is not present in the array. When `term` is not
present, the `search` function compares it with all the elements of `array` one
by one. Therefore, the worst-case time complexity of linear search would be
O(n).
