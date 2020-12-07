# Common Complexity Classes
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [The seven major classes](#the-seven-major-classes)
  - [O(1) - Constant](#o1-constant)
    - [Constant growth](#constant-growth)
    - [Example Constant code](#example-constant-code)
  - [O(log(n)) - Logarithmic](#ologn-logarithmic)
    - [Logarithmic growth](#logarithmic-growth)
    - [Example logarithmic code](#example-logarithmic-code)
  - [O(n) - Linear](#on-linear)
    - [Linear growth](#linear-growth)
    - [Example linear code](#example-linear-code)
  - [O(n \* log(n)) - Loglinear](#on-logn-loglinear)
    - [Loglinear growth](#loglinear-growth)
    - [Example loglinear code](#example-loglinear-code)
  - [O(nc) - Polynomial](#onsupcsup-polynomial)
    - [Polynomial growth](#polynomial-growth)
    - [Example polynomial code](#example-polynomial-code)
  - [O(cn) - Exponential](#ocsupnsup-exponential)
    - [Exponential growth](#exponential-growth)
    - [Exponential code example](#exponential-code-example)
  - [O(n!) - Factorial](#on-factorial)
    - [Factorial growth](#factorial-growth)
    - [Factorial code example](#factorial-code-example)
- [What you've learned](#what-youve-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

Analyzing the efficiency of our code seems like a daunting task because there
are many different possibilities in how we may choose to implement something.
Luckily, most code we write can be categorized into one of a handful of common
complexity classes. In this reading, we'll identify the common classes and
explore some of the code characteristics that will lead to these classes.

When you finish this reading, you should be able to:

- name _and_ order the seven common complexity classes
- identify the time complexity class of a given code snippet

## The seven major classes

There are seven complexity classes that we will encounter most often. Below is a
list of each complexity class as well as its Big-O notation. This list is
ordered from _smallest to largest_. Bear in mind that a "more efficient"
algorithm is one with a smaller complexity class, because it requires fewer
resources.

| Big-O                                                       | Complexity Class Name                |
| ----------------------------------------------------------- | ------------------------------------ |
| O(1)                                                        | constant                             |
| O(log(n))                                                   | logarithmic                          |
| O(n)                                                        | linear                               |
| O(n \* log(n))                                              | loglinear, linearithmic, quasilinear |
| O(n<sup>c</sup>) - O(n<sup>2</sup>), O(n<sup>3</sup>), etc. | polynomial                           |
| O(c<sup>n</sup>) - O(2<sup>n</sup>), O(3<sup>n</sup>), etc. | exponential                          |
| O(n!)                                                       | factorial                            |

There are more complexity classes that exist, but these are most common. Let's
take a closer look at each of these classes to gain some intuition on what
behavior their functions define. We'll explore famous algorithms that correspond
to these classes further in the course.

For simplicity, we'll provide small, generic code examples that illustrate the
complexity, although they may not solve a practical problem.

### O(1) - Constant

Constant complexity means that the algorithm takes roughly the same number of
steps for any size input. In a constant time algorithm, there is no relationship
between the size of the input and the number of steps required. For example,
this means performing the algorithm on a input of size 1 takes the same number
of steps as performing it on an input of size 128.

#### Constant growth

The table below shows the growing behavior of a constant function. Notice that
the behavior stays _constant_ for all values of n.

| n   | O(1) |
| --- | ---- |
| 1   | ~1   |
| 2   | ~1   |
| 3   | ~1   |
| ... | ...  |
| 128 | ~1   |

#### Example Constant code

Below is are two examples of functions that have constant runtimes.

```javascript
// O(1)
function constant1(n) {
  return n * 2 + 1;
}

// O(1)
function constant2(n) {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}
```

The runtime of the `constant1` function does not depend on the size of the
input, because only two arithmetic operations (multiplication and addition) are
always performed. The runtime of the `constant2` function also does not depend
on the size of the input because one-hundred iterations are always performed,
irrespective of the input.

### O(log(n)) - Logarithmic

Typically, the hidden base of O(log(n)) is 2, meaning O(log<sub>2</sub>(n)).
Logarithmic complexity algorithms will usual display a sense of continually
"halving" the size of the input. Another tell of a logarithmic algorithm is that
we don't have to access every element of the input. O(log<sub>2</sub>(n)) means
that every time we double the size of the input, we only require one additional
step. Overall, this means that a large increase of input size will increase the
number of steps required by a small amount.

#### Logarithmic growth

The table below shows the growing behavior of a logarithmic runtime function.
Notice that doubling the input size will only require only one additional
"step".

| n   | O(log<sub>2</sub>(n)) |
| --- | --------------------- |
| 2   | ~1                    |
| 4   | ~2                    |
| 8   | ~3                    |
| 16  | ~4                    |
| ... | ...                   |
| 128 | ~7                    |

#### Example logarithmic code

Below is an example of two functions with logarithmic runtimes.

```javascript
// O(log(n))
function logarithmic1(n) {
  if (n <= 1) return;
  logarithmic1(n / 2);
}

// O(log(n))
function logarithmic2(n) {
  let i = n;
  while (i > 1) {
    i /= 2;
  }
}
```

The `logarithmic1` function has O(log(n)) runtime because the recursion will
half the argument, n, each time. In other words, if we pass 8 as the original
argument, then the recursive chain would be 8 -> 4 -> 2 -> 1. In a similar way,
the `logarithmic2` function has O(log(n)) runtime because of the number of
iterations in the while loop. The while loop depends on the variable `i`, which
will be divided in half each iteration.

### O(n) - Linear

Linear complexity algorithms will access each item of the input "once" (in the
Big-O sense). Algorithms that iterate through the input without nested loops or
recurse by reducing the size of the input by "one" each time are typically
linear.

#### Linear growth

The table below shows the growing behavior of a linear runtime function. Notice
that a change in input size leads to similar change in the number of steps.

| n   | O(n) |
| --- | ---- |
| 1   | ~1   |
| 2   | ~2   |
| 3   | ~3   |
| 4   | ~4   |
| ... | ...  |
| 128 | ~128 |

#### Example linear code

Below are examples of three functions that each have linear runtime.

```javascript
// O(n)
function linear1(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// O(n), where n is the length of the array
function linear2(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i);
  }
}

// O(n)
function linear3(n) {
  if (n === 1) return;
  linear3(n - 1);
}
```

The `linear1` function has O(n) runtime because the for loop will iterate n
times. The `linear2` function has O(n) runtime because the for loop iterates
through the array argument. The `linear3` function has O(n) runtime because each
subsequent call in the recursion will decrease the argument by one. In other
words, if we pass 8 as the original argument to `linear3`, the recursive chain
would be 8 -> 7 -> 6 -> 5 -> ... -> 1.

### O(n \* log(n)) - Loglinear

This class is a combination of both linear and logarithmic behavior, so features
from both classes are evident. Algorithms the exhibit this behavior use both
recursion and iteration. Typically, this means that the recursive calls will
halve the input each time (logarithmic), but iterations are also performed on
the input (linear).

#### Loglinear growth

The table below shows the growing behavior of a loglinear runtime function.

| n   | O(n \* log<sub>2</sub>(n)) |
| --- | -------------------------- |
| 2   | ~2                         |
| 4   | ~8                         |
| 8   | ~24                        |
| ... | ...                        |
| 128 | ~896                       |

#### Example loglinear code

Below is an example of a function with a loglinear runtime.

```javascript
// O(n * log(n))
function loglinear(n) {
  if (n <= 1) return;

  for (let i = 1; i <= n; i++) {
    console.log(i);
  }

  loglinear(n / 2);
  loglinear(n / 2);
}
```

The `loglinear` function has O(n \* log(n)) runtime because the for loop
iterates linearly (n) through the input and the recursive chain behaves
logarithmically (log(n)).

### O(n<sup>c</sup>) - Polynomial

Polynomial complexity refers to complexity of the form O(n<sup>c</sup>) where
`n` is the size of the input and `c` is some fixed constant. For example,
O(n<sup>3</sup>) is a larger/worse function than O(n<sup>2</sup>), but they
belong to the same complexity class. Nested loops are usually the indicator of
this complexity class.

#### Polynomial growth

Below are tables showing the growth for O(n<sup>2</sup>) and O(n<sup>3</sup>).

| n   | O(n<sup>2</sup>) |
| --- | ---------------- |
| 1   | ~1               |
| 2   | ~4               |
| 3   | ~9               |
| ... | ...              |
| 128 | ~16,384          |

| n   | O(n<sup>3</sup>) |
| --- | ---------------- |
| 1   | ~1               |
| 2   | ~8               |
| 3   | ~27              |
| ... | ...              |
| 128 | ~2,097,152       |

#### Example polynomial code

Below are examples of two functions with polynomial runtimes.

```javascript
// O(n^2)
function quadratic(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {}
  }
}

// O(n^3)
function cubic(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {}
    }
  }
}
```

The `quadratic` function has O(n<sup>2</sup>) runtime because there are nested
loops. The outer loop iterates n times and the inner loop iterates n times. This
leads to n \* n total number of iterations. In a similar way, the `cubic`
function has O(n<sup>3</sup>) runtime because it has triply nested loops that
lead to a total of n \* n \* n iterations.

### O(c<sup>n</sup>) - Exponential

Exponential complexity refers to Big-O functions of the form O(c<sup>n</sup>)
where `n` is the size of the input and `c` is some fixed constant. For example,
O(3<sup>n</sup>) is a larger/worse function than O(2<sup>n</sup>), but they both
belong to the exponential complexity class. A common indicator of this
complexity class is recursive code where there is a constant number of recursive
calls in each stack frame. The `c` will be the number of recursive calls made in
each stack frame. Algorithms with this complexity are considered quite slow.

#### Exponential growth

Below are tables showing the growth for O(2<sup>n</sup>) and O(3<sup>n</sup>).
Notice how these grow large, quickly.

| n   | O(2<sup>n</sup>)           |
| --- | -------------------------- |
| 1   | ~2                         |
| 2   | ~4                         |
| 3   | ~8                         |
| 4   | ~16                        |
| ... | ...                        |
| 128 | ~3.4028 \* 10<sup>38</sup> |

| n   | O(3<sup>n</sup>)           |
| --- | -------------------------- |
| 1   | ~3                         |
| 2   | ~9                         |
| 3   | ~27                        |
| 3   | ~81                        |
| ... | ...                        |
| 128 | ~1.1790 \* 10<sup>61</sup> |

#### Exponential code example

Below are examples of two functions with exponential runtimes.

```javascript
// O(2^n)
function exponential2n(n) {
  if (n === 1) return;
  exponential_2n(n - 1);
  exponential_2n(n - 1);
}

// O(3^n)
function exponential3n(n) {
  if (n === 0) return;
  exponential_3n(n - 1);
  exponential_3n(n - 1);
  exponential_3n(n - 1);
}
```

The `exponential2n` function has O(2<sup>n</sup>) runtime because each call will
make two more recursive calls. The `exponential3n` function has O(3<sup>n</sup>)
runtime because each call will make three more recursive calls.

### O(n!) - Factorial

Recall that `n! = (n) * (n - 1) * (n - 2) * ... * 1`. This complexity is
typically the largest/worst that we will end up implementing. An indicator of
this complexity class is recursive code that has a variable number of recursive
calls in each stack frame. Note that _factorial_ is worse than _exponential_
because _factorial_ algorithms have a _variable_ amount of recursive calls in
each stack frame, whereas _exponential_ algorithms have a _constant_ amount of
recursive calls in each frame.

#### Factorial growth

Below is a table showing the growth for O(n!). Notice how this has a more
aggressive growth than exponential behavior.

| n   | O(n!)                       |
| --- | --------------------------- |
| 1   | ~1                          |
| 2   | ~2                          |
| 3   | ~6                          |
| 4   | ~24                         |
| ... | ...                         |
| 128 | ~3.8562 \* 10<sup>215</sup> |

#### Factorial code example

Below is an example of a function with factorial runtime.

```javascript
// O(n!)
function factorial(n) {
  if (n === 1) return;

  for (let i = 1; i <= n; i++) {
    factorial(n - 1);
  }
}
```

The `factorial` function has O(n!) runtime because the code is _recursive_ but
the number of recursive calls made in a single stack frame depends on the input.
This contrasts with an _exponential_ function because exponential functions have
a _fixed_ number of calls in each stack frame.

You may it difficult to identify the complexity class of a given code snippet,
especially if the code falls into the loglinear, exponential, or factorial
classes. In the upcoming videos, we'll explain the analysis of these functions
in greater detail. For now, you should focus on the _relative order_ of these
seven complexity classes!

## What you've learned

In this reading, we listed the seven common complexity classes and saw some
example code for each. In order of ascending growth, the seven classes are:

1. Constant
2. Logarithmic
3. Linear
4. Loglinear
5. Polynomial
6. Exponential
7. Factorial
