# Memoization
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Memoizing factorial](#memoizing-factorial)
- [Memoizing the Fibonacci generator](#memoizing-the-fibonacci-generator)
- [The memoization formula](#the-memoization-formula)
- [What you learned](#what-you-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

**Memoization** is a design pattern used to reduce the overall number of
calculations that can occur in algorithms that use recursive strategies to
solve.

Recall that recursion solves a large problem by dividing it into smaller
sub-problems that are more manageable. Memoization will store the results of
the sub-problems in some other data structure, meaning that you avoid duplicate
calculations and only "solve" each subproblem once. There are two features that
comprise memoization:

+ the function is recursive
+ the additional data structure used is typically an object (we refer to this as
  the memo!)

This is a trade-off between the time it takes to run an algorithm (without
memoization) and the memory used to run the algorithm (with memoization).
Usually memoization is a good trade-off when dealing with large data or
calculations.

You cannot always apply this technique to recursive problems. The problem must
have an "overlapping subproblem structure" for memoization to be effective.

Here's an example of a problem that has such a structure:

> Using pennies, nickels, dimes, and quarters, what is the smallest combination
> of coins that total 27 cents?

You'll explore this exact problem in depth later on. For now, here is some food
for thought. Along the way to calculating the smallest coin combination of 27
cents, you should also calculate the smallest coin combination of say, 25 cents
as a component of that problem. This is the essence of an overlapping subproblem
structure.

## Memoizing factorial

Here's an example of a function that computes the factorial of the number passed
into it.

```javascript
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(6);       // => 720, requires 6 calls
factorial(6);       // => 720, requires 6 calls
factorial(5);       // => 120, requires 5 calls
factorial(7);       // => 5040, requires 7 calls
```

From this plain `factorial` above, it is clear that every time you call
`factorial(6)` you should get the same result of `720` each time. The code is
somewhat inefficient because you must go down the full recursive stack for each
top level call to `factorial(6)`. It would be great if you could store the result
of `factorial(6)` the first time you calculate it, then on subsequent calls to
`factorial(6)` you simply fetch the stored result in constant time. You can
accomplish exactly this by memoizing with an object!

```javascript
let memo = {}

function factorial(n) {
  // if this function has calculated factorial(n) previously,
  // fetch the stored result in memo
  if (n in memo) return memo[n];
  if (n === 1) return 1;

  // otherwise, it havs not calculated factorial(n) previously,
  // so calculate it now, but store the result in case it is
  // needed again in the future
  memo[n] = n * factorial(n - 1);
  return memo[n]
}

factorial(6);       // => 720, requires 6 calls
factorial(6);       // => 720, requires 1 call
factorial(5);       // => 120, requires 1 call
factorial(7);       // => 5040, requires 2 calls

memo;   // => { '2': 2, '3': 6, '4': 24, '5': 120, '6': 720, '7': 5040 }
```

The `memo` object above will map an argument of `factorial` to its return
value. That is, the keys will be arguments and their values will be the
corresponding results returned. By using the memo, you are able to avoid
duplicate recursive calls!

Here's some food for thought: By the time your first call to `factorial(6)`
returns, you will not have just the argument `6` stored in the memo. Rather, you will
have _all_ arguments 2 to 6 stored in the memo.

Hopefully you sense the efficiency you can get by memoizing your functions, but
maybe you are not convinced by the last example for two reasons:

+ You didn't improve the speed of the algorithm by an order of Big-O (it is
  still O(n)).
+ The code uses some global variable, so it's kind of ugly.

Both of those points are true, so take a look at a more advanced example that
benefits from memoization.

## Memoizing the Fibonacci generator

Here's a _naive_ implementation of a function that calculates the Fibonacci
number for a given input.

```javascript
function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

fib(6);     // => 8
```

Before you optimize this, ask yourself what complexity class it falls into in
the first place.

The time complexity of this function is not super intuitive to describe because
the code branches twice recursively. Fret not! You'll find it useful to
visualize the calls needed to do this with a tree. When reasoning about the time
complexity for recursive functions, draw a tree that helps you see the calls.
Every node of the tree represents a call of the recursion:

![fib_tree](images/fib_tree.png)

In general, the height of this tree will be `n`. You derive this by following
the path going straight down the left side of the tree. You can also see that
each internal node leads to two more nodes. Overall, this means that the tree
will have roughly 2<sup>n</sup> nodes which is the same as saying that the `fib`
function has an exponential time complexity of 2<sup>n</sup>. That is very slow!
See for yourself, try running `fib(50)` -  you'll be waiting for quite a while
(it took 3 minutes on the author's machine).

Okay. So the `fib` function is slow. Is there anyway to speed it up? Take a look
at the tree above. Can you find any repetitive regions of the tree?

![fib_tree_duplicates](images/fib_tree_duplicates.png)

As the `n` grows bigger, the number of duplicate sub-trees grows exponentially.
Luckily you can fix this using memoization by using a similar object strategy as
before. You can use some JavaScript default arguments to clean things up:

```javascript
function fastFib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
  return memo[n];
}

fastFib(6);     // => 8
fastFib(50);    // => 12586269025
```

The code above can calculate the 50th Fibonacci number almost instantly! Thanks
to the `memo` object, you only need to explore a subtree fully once. Visually,
the `fastFib` recursion has this structure:

![fib_memoized](images/fib_memoized.png)

You can see the marked nodes (function calls) that access the memo in green.
It's easy to see that this version of the Fibonacci generator will do far less
computations as `n` grows larger! In fact, this memoization has brought the time
complexity down to linear `O(n)` time because the tree only branches on the left
side. This is an enormous gain if you recall the complexity class hierarchy.

## The memoization formula

Now that you understand memoization, when should you apply it? Memoization is
useful when attacking recursive problems that have many overlapping
sub-problems. You'll find it most useful to draw out the visual tree first. If
you notice duplicate sub-trees, time to memoize. Here are the hard and fast
rules you can use to memoize a slow function:

1. Write the unoptimized, brute force recursion and make sure it works.
2. Add the memo object as an additional argument to the function. The keys will
   represent unique arguments to the function, and their values will represent
   the results for those arguments.
3. Add a base case condition to the function that returns the stored value if
   the function's argument is in the memo.
4. Before you return the result of the recursive case, store it in the memo as a
   value and make the function's argument it's key.

## What you learned

You learned a secret to possibly changing an algorithm of one complexity class
to a lower complexity class by using memory to store intermediate results. This
is a powerful technique to use to make sure your programs that must do recursive
calculations can benefit from running much faster.
