# Big-O Algorithm Complexity Cheat Sheet (Know Thy Complexities!) 

Hi there!  This webpage covers the space and time Big-O complexities of common algorithms used in Computer Science.  When preparing for technical interviews in the past, I found myself spending hours crawling the internet putting together the best, average, and worst case complexities for search and sorting algorithms so that I wouldn't be stumped when asked about them.  Over the last few years, I've interviewed at several Silicon Valley startups, and also some bigger companies, like Google, Facebook, Yahoo, LinkedIn, and Uber, and each time that I prepared for an interview, I thought to myself "Why hasn't someone created a nice Big-O cheat sheet?".  So, to save all of you fine folks a ton of time, I went ahead and created one.  Enjoy! - [Eric](https://twitter.com/ericdrowell)

[Check out El Grapho, a graph data visualization library that supports millions of nodes and edges](https://www.elgrapho.com/)

Big-O Complexity Chart
----------------------
![](poster.png)

<table id="legend"><tbody><tr><td><code>Horrible-->O(n!)</code></td><td><code>Bad--> O(2^n)</code></td><td><code>Fair--->O(n^2)</code></td><td><code>Good--->O(n log n)</code></td><td><code>Excellent</code></td></tr></tbody></table>


-------
O(log n), O(1) O(n)    Operations Elements

Common Data Structure Operations
--------------------------------

| Data Structure | Time Complexity | Space Complexity |
| --- | --- | --- |
|  | Average | Worst | Worst |
|  | Access | Search | Insertion | Deletion | Access | Search | Insertion | Deletion |  |
| [Array](http://en.wikipedia.org/wiki/Array_data_structure) | `Θ(1)` | `Θ(n)` | `Θ(n)` | `Θ(n)` | `O(1)` | `O(n)` | `O(n)` | `O(n)` | `O(n)` |
| [Stack](http://en.wikipedia.org/wiki/Stack_(abstract_data_type)) | `Θ(n)` | `Θ(n)` | `Θ(1)` | `Θ(1)` | `O(n)` | `O(n)` | `O(1)` | `O(1)` | `O(n)` |
| [Queue](http://en.wikipedia.org/wiki/Queue_(abstract_data_type)) | `Θ(n)` | `Θ(n)` | `Θ(1)` | `Θ(1)` | `O(n)` | `O(n)` | `O(1)` | `O(1)` | `O(n)` |
| [Singly-Linked List](http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists) | `Θ(n)` | `Θ(n)` | `Θ(1)` | `Θ(1)` | `O(n)` | `O(n)` | `O(1)` | `O(1)` | `O(n)` |
| [Doubly-Linked List](http://en.wikipedia.org/wiki/Doubly_linked_list) | `Θ(n)` | `Θ(n)` | `Θ(1)` | `Θ(1)` | `O(n)` | `O(n)` | `O(1)` | `O(1)` | `O(n)` |
| [Skip List](http://en.wikipedia.org/wiki/Skip_list) | `Θ(log(n))` | `Θ(log(n))` | `Θ(log(n))` | `Θ(log(n))` | `O(n)` | `O(n)` | `O(n)` | `O(n)` | `O(n log(n))` |
| [Hash Table](http://en.wikipedia.org/wiki/Hash_table) | `N/A` | `Θ(1)` | `Θ(1)` | `Θ(1)` | `N/A` | `O(n)` | `O(n)` | `O(n)` | `O(n)` |
| [Binary Search Tree](http://en.wikipedia.org/wiki/Binary_search_tree) | `Θ(log(n))` | `Θ(log(n))` | `Θ(log(n))` | `Θ(log(n))` | `O(n)` | `O(n)` | `O(n)` | `O(n)` | `O(n)` |
| [Cartesian Tree](https://en.wikipedia.org/wiki/Cartesian_tree) | `N/A` | `Θ(log(n))` | `Θ(log(n))` | `Θ(log(n))` | `N/A` | `O(n)` | `O(n)` | `O(n)` | `O(n)` |
| [B-Tree](http://en.wikipedia.org/wiki/B_tree) | `Θ(log(n))` | `Θ(log(n))` | `Θ(log(n))` | `Θ(log(n))` | `O(log(n))` | `O(log(n))` | `O(log(n))` | `O(log(n))` | `O(n)` |
| [Red-Black Tree](http://en.wikipedia.org/wiki/Red-black_tree) | `Θ(log(n))` | `Θ(log(n))` | `Θ(log(n))` | `Θ(log(n))` | `O(log(n))` | `O(log(n))` | `O(log(n))` | `O(log(n))` | `O(n)` |
| [Splay Tree](https://en.wikipedia.org/wiki/Splay_tree) | `N/A` | `Θ(log(n))` | `Θ(log(n))` | `Θ(log(n))` | `N/A` | `O(log(n))` | `O(log(n))` | `O(log(n))` | `O(n)` |
| [AVL Tree](http://en.wikipedia.org/wiki/AVL_tree) | `Θ(log(n))` | `Θ(log(n))` | `Θ(log(n))` | `Θ(log(n))` | `O(log(n))` | `O(log(n))` | `O(log(n))` | `O(log(n))` | `O(n)` |
| [KD Tree](http://en.wikipedia.org/wiki/K-d_tree) | `Θ(log(n))` | `Θ(log(n))` | `Θ(log(n))` | `Θ(log(n))` | `O(n)` | `O(n)` | `O(n)` | `O(n)` | `O(n)` |

Array Sorting Algorithms
------------------------

| Algorithm | Time Complexity | Space Complexity |
| --- | --- | --- |
|  | Best | Average | Worst | Worst |
| [Quicksort](http://en.wikipedia.org/wiki/Quicksort) | `Ω(n log(n))` | `Θ(n log(n))` | `O(n^2)` | `O(log(n))` |
| [Mergesort](http://en.wikipedia.org/wiki/Merge_sort) | `Ω(n log(n))` | `Θ(n log(n))` | `O(n log(n))` | `O(n)` |
| [Timsort](http://en.wikipedia.org/wiki/Timsort) | `Ω(n)` | `Θ(n log(n))` | `O(n log(n))` | `O(n)` |
| [Heapsort](http://en.wikipedia.org/wiki/Heapsort) | `Ω(n log(n))` | `Θ(n log(n))` | `O(n log(n))` | `O(1)` |
| [Bubble Sort](http://en.wikipedia.org/wiki/Bubble_sort) | `Ω(n)` | `Θ(n^2)` | `O(n^2)` | `O(1)` |
| [Insertion Sort](http://en.wikipedia.org/wiki/Insertion_sort) | `Ω(n)` | `Θ(n^2)` | `O(n^2)` | `O(1)` |
| [Selection Sort](http://en.wikipedia.org/wiki/Selection_sort) | `Ω(n^2)` | `Θ(n^2)` | `O(n^2)` | `O(1)` |
| [Tree Sort](https://en.wikipedia.org/wiki/Tree_sort) | `Ω(n log(n))` | `Θ(n log(n))` | `O(n^2)` | `O(n)` |
| [Shell Sort](http://en.wikipedia.org/wiki/Shellsort) | `Ω(n log(n))` | `Θ(n(log(n))^2)` | `O(n(log(n))^2)` | `O(1)` |
| [Bucket Sort](http://en.wikipedia.org/wiki/Bucket_sort "Only for integers. k is a number of buckets") | `Ω(n+k)` | `Θ(n+k)` | `O(n^2)` | `O(n)` |
| [Radix Sort](http://en.wikipedia.org/wiki/Radix_sort "Constant number of digits 'k'") | `Ω(nk)` | `Θ(nk)` | `O(nk)` | `O(n+k)` |
| [Counting Sort](https://en.wikipedia.org/wiki/Counting_sort "Difference between maximum and minimum number 'k'") | `Ω(n+k)` | `Θ(n+k)` | `O(n+k)` | `O(k)` |
| [Cubesort](https://en.wikipedia.org/wiki/Cubesort) | `Ω(n)` | `Θ(n log(n))` | `O(n log(n))` | `O(n)` |

Learn More
----------

[Source](https://www.bigocheatsheet.com/)
