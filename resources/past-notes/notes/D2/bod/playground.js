// Big O

// Common Terms

// Big O - upper bound - a value that is greater than or equal to every element 
// of a set of data

// Big Omega - lower bound 

// Big Theta - average bound

// Big O notation is ONLY concerned with performance relative to its input 
// size

// Big O notation describes an algorithm's worst case

// Big O describes how the time taken by a program scales with the amount of
// data it has to work on

// We can measure both time and space, but are mostly concerned with time
// (memory is cheap and abundant)

// O(n!) - factorial
// O(c^n) - exponential
// O(n^c) - polynomial
// O(n^2) - quadratic
// O(n * log(n)) - loglinear
// O(n) - linear
// O(log(n)) - logarithmic
// O(1) - constant

// T(5n^2) => O(n^2)

// T(1000n) => O(n)

// T(42 * n * log(n)) => O(n * log(n))

// T(12) => O(1)

// T(n^3 + n^3 * n) => O(n^3) *

// T(log(n) + 2^n) => 0(2^n)

// T(n + log(n)) => O(n)

// T(n! + 10n) => O(n!)

// T(5n^2 + 99n) => O(n^2) *

// T(2n + n * log(n)) => O(n log(n)) *

// T(2^n + 5n^1000) => O(2^n) *

const firstThing = (li) => { // constant
  return li[0];
};

const threeHundredThousandTimesLog = (name) => { // constant
  for (let i = 0; i < 300000; i++) { //300,000
    console.log(name);
  }
};

const splitInHalf = (n) => { // logarithm
  if (n <= 1) return n;

  return splitInHalf(n / 2);
}

const printAll = (li) => { // linear
  li.forEach(ele => {
    console.log(ele);
  })
};

const find = (li, value) => { // [1,2,3,4,5,6,7,8] value = 1
  for (let i = 0; i < li.length; i++) {
    if (li[i] === value) return true;
  }

  return false
};

const hmmmmm = (li) => { // O(n)
  for (let i = 0; i < li.length; i++) {
    for (let j = 0; j < 300000; j++) {
      console.log(li[i]);
    }
  }
};

const hmmmmm2 = (li, li2) => { // length of li is n, length of li2 is m => O(n * m)
  for (let i = 0; i < li.length; i++) { // n
    for (let j = 0; j < li2.length; j++) { // m
      console.log(li[i], li2[j]); // 1 step
    }
  }
};

const hmmmmm3 = (li, li2) => { // length of li is n, length of li2 is m => O(n + m) => O(n)
  for (let i = 0; i < li.length; i++) { // n
    console.log(li[i])
  }
  for (let j = 0; j < li2.length; j++) { // m
    console.log(li2[j]); // 1 step
  }
};

function constant_1(n) { // n = 1000000
  return n * 2 + 1; // T(2.2)
}

// +, - => 1 step
// / => 1.5
// * => 1.2

const splitButIterate = (li) => { // O(n * log(n))
  if (li.length < 2) return li;
  const midIdx = Math.floor(li.length / 2);

  splitButIterate(li.slice(0, midIdx));
  splitButIterate(li.slice(midIdx));

  li.forEach(ele => console.log(ele))
};

const dreadedDubs = (li) => { // O(n * n) => O(n^2)
  for (let i = 0; i < li.length; i++) {
    for (let j = 0; j < li.length; j++) {
      console.log(j);
    }
  }
}

const whatIsIt = (n) => { // O(2^n)
  if (n == 1) return n;

  whatIsIt(n - 1);
  whatIsIt(n - 1)
}

const whichOneIsThis = (n) => { // O(n!)
  if (n === 1) return n;

  for (let i = 0; i <= n; i++) {
    whichOneIsThis(n - 1);
  }
};

const fibSequence = [0,1,1,2,3,5,8,13,21]

// memoization

const nth_fibonacci = (n) => {
  if (n == 2) return 1;
  if (n == 1) return 0;

  return nth_fibonacci(n - 1) + nth_fibonacci(n - 2);
}

const nth_fibonacci = (n, cache = {1: 0, 2: 1}) => {
  if (n in cache) return cache[n];

  cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
  return cache[n];
};

// tabulation

const tabFib = (n) => { // O(n) time complexity
  const dp = new Array(n + 1);
  dp.fill(null);
  dp[0] = 0
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return table[n]
};
