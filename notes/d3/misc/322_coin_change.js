/*
You're given coins of different denominations and a total amount of money.
Write a function to compute the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of coins, return -1
*/

// non-optimized solution. Too slow for large data set
var coinChange = function(coins, target) {
  // base case. Most trivial case is if there is no target
  if (!target) return 0;
  let numCoins = [];

  // iterate through each coin: 
  // first make sure it's less than the target amount (don't want to give negative change)
  // then make a recursive call. need to reduce the target in each call by the coin amount that you're checking
  // don't forget to add one on line 20. This is because the problem asks for the minimum number of coins
  //    if we don't add the one, we're not actually keeping track of how many coins we're using.
  coins.forEach(coin => {
    if (coin <= target) {
      numCoins.push(coinChange(coins, target - coin) + 1)
    }
    console.log(coins);
    console.log(numCoins);
    console.log('====');
    
  })
  console.log(...numCoins);
  
  return Math.min(...numCoins)
};

console.log(coinChange([1, 5], 11))


// memoized version which will work for larger data sets
// this function has two args. We know which one to memoize, by knowing which one is the one changing.
// coins won't change throughout calculation
// then whatever you would return in the brute force is what you want to memoize
function minChange(coins, target, memo={}) {
  if (target in memo) return memo[target];
  if (!target) return 0;

  let numCoins = [];
  coins.forEach(coin => {
    if (coin <= target) {
      numCoins.push(minChange(coins, target - coin, memo) + 1)
    }
  })
  console.log(...numCoins);
  
  memo[target] = Math.min(...numCoins)
  return memo[target]
}

// console.log(minChange([1, 5, 10, 25], 100));



