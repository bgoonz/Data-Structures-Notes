# Analysis of Bubble Sort

Consider the following sort algorithm known as the **bubble sort**.

```javascript
function bubbleSort(items) {
  var length = items.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < (length - i - 1); j++) {
      if (items[j] > items[j + 1]) {
        var tmp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = tmp;
      }
    }
  }
}
```


For the _bubble sort_, the worst case is the same as the best case because it
always makes nested loops. So, the outer loop loops the number of times of the
items in the array. For each one of those loops, the inner loop loops again a
number of times for the items in the array. So, if there are _n_ values in the
array, then a loop inside a loop is _n_ * _n_. So, this is O(n<sup>2</sup>).
That's polynomial, which ain't that good.
