# Curating Complexity: A Guide to Big-O Notation
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Why Big-O?](#why-big-o)
- [Big-O Notation](#big-o-notation)
  - [Simplifying Math Terms](#simplifying-math-terms)
  - [Simplifying a Product](#simplifying-a-product)
  - [Simplifying a Sum](#simplifying-a-sum)
  - [Putting it all together](#putting-it-all-together)
- [What you've learned](#what-youve-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

As software engineers, our goal is not just to solve problems. Rather, our goal
is to solve problems efficiently and elegantly. Not all solutions are made
equal! In this section we'll explore how to analyze the efficiency of algorithms
in terms of their speed (_time complexity_) and memory consumption (_space
complexity_).

> In this article, we'll use the word _efficiency_ to describe the amount of
> resources a program needs to execute. The two resources we are concerned with
> are _time_ and _space_. Our goal is to _minimize_ the amount of time and space
> that our programs use.

When you finish this article you will be able to:

- explain why computer scientists use Big-O notation
- simplify a mathematical function into Big-O notation

## Why Big-O?

Let's begin by understanding what method we should _not_ use when describing the
efficiency of our algorithms. Most importantly, we'll want to avoid using
absolute units of time when describing speed. When the software engineer
exclaims, "My function runs in 0.2 seconds, it's so fast!!!", the computer
scientist is not impressed. Skeptical, the computer scientist asks the following
questions:

1. What computer did you run it on? _Maybe the credit belongs to the hardware
   and not the software. Some hardware architectures will be better for certain
   operations than others._
2. Were there other background processes running on the computer that could have
   effected the runtime? _It's hard to control the environment during
   performance experiments._
3. Will your code still be performant if we increase the size of the input? _For
   example, sorting 3 numbers is trivial; but how about a million numbers?_

The job of the software engineer is to focus on the software detail and not
necessarily the hardware it will run on. Because we can't answer points 1 and 2
with total certainty, we'll want to avoid using concrete units like
"milliseconds" or "seconds" when describing the efficiency of our algorithms.
Instead, we'll opt for a more abstract approach that focuses on point 3. This
means that we should focus on how the performance of our algorithm is affected
by increasing the size of the input. **In other words, how does our performance
scale?**

> The argument above focuses on _time_, but a similar argument could also be
> made for _space_. For example, we should not analyze our code in terms of the
> amount of absolute kilobytes of memory it uses, because this is dependent on
> the programming language.

## Big-O Notation

In Computer Science, we use Big-O notation as a tool for describing the
efficiency of algorithms with respect to the size of the input argument(s). We
use mathematical functions in Big-O notation, so there are a few big picture
ideas that we'll want to keep in mind:

1. The function should be defined in terms of the size of the input(s).
2. A _smaller_ Big-O function is more desirable than a larger one. Intuitively,
   we want our algorithms to use a minimal amount of time and space.
3. Big-O describes the worst-case scenario for our code, also known as the
   upper bound. We prepare our algorithm for the worst case, because the
   best case is a luxury that is not guaranteed.
4. A Big-O function should be simplified to show only its most dominant
   mathematical term.

The first 3 points are conceptual, so they are easy to swallow. However, point 4
is typically the biggest source of confusion when learning the notation. Before
we apply Big-O to our code, we'll need to first understand the underlying math
and simplification process.

### Simplifying Math Terms

We want our Big-O notation to describe the performance of our algorithm with
respect to the input size and nothing else. Because of this, we should to
simplify our Big-O functions using the following rules:

- **Simplify Products:** if the function is a product of many terms, we drop the
  terms that _don't_ depend on the size of the input.
- **Simplify Sums:** if the function is a sum of many terms, we keep the term
  with the _largest_ growth rate and drop the other terms.

We'll look at these rules in action, but first we'll define a few things:

- **n** is the size of the input
- **T(f)** refers to an unsimplified mathematical **f**unction
- **O(f)** refers to the Big-O simplified mathematical **f**unction

### Simplifying a Product

If a function consists of a product of many factors, we drop the factors that
don't depend on the size of the input, n. The factors that we drop are called
constant factors because their size remains consistent as we increase the size
of the input. The reasoning behind this simplification is that we make the input
large enough, the non-constant factors will overshadow the constant ones. Below
are some examples:

| Unsimplified            | Big-O Simplified   |
| ----------------------- | ------------------ |
| T( 5 \* n<sup>2</sup> ) | O( n<sup>2</sup> ) |
| T( 100000 \* n )        | O( n )             |
| T( n / 12 )             | O( n )             |
| T( 42 \* n \* log(n) )  | O( n \* log(n) )   |
| T( 12 )                 | O( 1 )             |

Note that in the third example, we can simplify `T( n / 12 )` to `O( n )`
because we can rewrite a division into an equivalent multiplication. In other
words, `T( n / 12 ) = T( 1/12 * n ) = O( n )`.

### Simplifying a Sum

If the function consists of a sum of many terms, we only need to show the term
that grows the fastest, relative to the size of the input. The reasoning behind
this simplification is that if we make the input large enough, the fastest
growing term will overshadow the other, smaller terms. To understand which term
to keep, you'll need to recall the relative size of our common math terms from
the previous section. Below are some examples:

| Unsimplified                           | Big-O Simplified   |
| -------------------------------------- | ------------------ |
| T( n<sup>3</sup> + n<sup>2</sup> + n ) | O( n<sup>3</sup> ) |
| T( log(n) + 2<sup>n</sup> )            | O( 2<sup>n</sup> ) |
| T( n + log(n) )                        | O( n )             |
| T( n! + 10<sup>n</sup> )               | O( n! )            |

### Putting it all together

The _product_ and _sum_ rules are all we'll need to Big-O simplify any math
functions. We just apply the _product rule_ to drop all constants, then apply the
_sum rule_ to select the single most dominant term.

| Unsimplified                          | Big-O Simplified   |
| ------------------------------------- | ------------------ |
| T( 5n<sup>2</sup> + 99n )             | O( n<sup>2</sup> ) |
| T( 2n + nlog(n) )                     | O( nlog(n) )       |
| T( 2<sup>n</sup> + 5n<sup>1000</sup>) | O( 2<sup>n</sup> ) |

> Aside: We'll often omit the multiplication symbol in expressions as a form of
> shorthand. For example, we'll write _O( 5n<sup>2</sup> )_ in place of _O( 5 \*
> n<sup>2</sup> )_.

## What you've learned

In this reading we:

- explained why Big-O is the preferred notation used to describe the efficiency
  of algorithms
- used the product and sum rules to simplify mathematical functions into Big-O
  notation
