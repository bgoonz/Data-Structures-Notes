# Tabulation
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Tabulating the Fibonacci number](#tabulating-the-fibonacci-number)
- [Aside: Refactoring for O(1) Space](#aside-refactoring-for-o1-space)
  - [The Tabulation Formula](#the-tabulation-formula)
- [What you learned](#what-you-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

Now that you are familiar with _memoization_, you can explore a related method
of algorithmic optimization: **Tabulation**. There are two main features that
comprise the Tabulation strategy:

* the function is iterative and *not* recursive
* the additional data structure used is typically an array, commonly referred to
  as the table

Many problems that can be solved with memoization can also be solved with
tabulation as long as you convert the recursion to iteration. The first example
is the canonical example of recursion, calculating the Fibonacci number for an
input. However, in the example, you'll see the iteration version of it for a
fresh start!

## Tabulating the Fibonacci number

Tabulation is all about creating a table (array) and filling it out with
elements. In general, you will complete the table by filling entries from "left
to right". This means that the first entry of the table (first element of the
array) will correspond to the smallest subproblem. Naturally, the final entry of
the table (last element of the array) will correspond to the largest problem,
which is also the final answer.

Here's a way to use tabulation to store the intermediary calculations so that
later calculations can refer back to the table.

```javascript
function tabulatedFib(n) {
  // create a blank array with n reserved spots
  let table = new Array(n);

  // seed the first two values
  table[0] = 0;
  table[1] = 1;

  // complete the table by moving from left to right,
  // following the fibonacci pattern
  for (let i = 2; i <= n; i += 1) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

console.log(tabulatedFib(7));      // => 13
```

When you initialized the table and seeded the first two values, it looked like
this:

| i          | 0   | 1   | 2 | 3 | 4 | 5 | 6 | 7 |
|------------|-----|-----|---|---|---|---|---|---|
| `table[i]` | `0` | `1` |   |   |   |   |   |   |


After the loop finishes, the final table will be:

| i          | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7    |
|------------|-----|-----|-----|-----|-----|-----|-----|------|
| `table[i]` | `0` | `1` | `1` | `2` | `3` | `5` | `8` | `13` |

Similar to the previous `memo`, by the time the function completes, the `table`
will contain the final solution as well as all sub-solutions calculated along
the way.

To compute the complexity class of this `tabulatedFib` is very straightforward
since the code is iterative. The dominant operation in the function is the loop
used to fill out the entire table. The length of the table is roughly `n`
elements long, so the algorithm will have an _O(n)_ runtime. The space taken by
our algorithm is also _O(n)_ due to the size of the table. Overall, this should
be a satisfying solution for the efficiency of the algorithm.

## Aside: Refactoring for O(1) Space

You may notice that you can cut down on the space used by the function. At any
point of the loop, the calculation really only need the previous two
subproblems' results. There is little utility to storing the full array. This
refactor is easy to do by using two variables:

```javascript
function fib(n) {
  let mostRecentCalcs = [0, 1];

  if (n === 0) return mostRecentCalcs[0];

  for (let i = 2; i <= n; i++) {
    const [ secondLast, last ] = mostRecentCalcs;
    mostRecentCalcs = [ last, secondLast + last ];
  }

  return mostRecentCalcs[1];
}
```

Bam! You now have O(n) runtime and O(1) space. This is the most optimal
algorithm for calculating a Fibonacci number. Note that this strategy is a pared
down form of tabulation, since it uses only the last two values.

### The Tabulation Formula

Here are the general guidelines for implementing the tabulation strategy. This
is just a general recipe, so adjust for taste depending on your problem:

1. Create the table array based off of the size of the input, which isn't always
   straightforward if you have multiple input values
2. Initialize some values in the table that "answer" the trivially small
   subproblem usually by initializing the first entry (or entries) of the table
3. Iterate through the array and fill in remaining entries, using previous
   entries in the table to perform the current calculation
4. Your final answer is (usually) the last entry in the table

## What you learned

You learned another way of possibly changing an algorithm of one complexity
class to a lower complexity class by using memory to store intermediate results.
This is a powerful technique to use to make sure your programs that must do
iterative calculations can benefit from running much faster.
