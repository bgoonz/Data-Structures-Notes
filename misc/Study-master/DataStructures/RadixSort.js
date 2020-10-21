/*
Radix Sort can only be used to sort integer data
Need helper functions
*/

// abs(num) in case input is negative
// divide by Math.pow(10, place) will divide integer by it's place value
// *basically this will move the decimal left however many places indicated by 'place'
// floor to round away any decimals
// % 10 to get the digit of interest
const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

// Log10 asks "10 to what power gives us this number?"
// special case where num === 0, we return 1 because mathematically, log10(0) = -Infinity
const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

function getMaxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  if (!Array.isArray(arr)) return null;

  let maxDigits = getMaxDigits(arr);
  // we have to iterate as many times as there are digits in the largest number.
  for (let k = 0; k < maxDigits; k++) {
    // Array of empty arrays, a bucket for each possible digit
    let buckets = Array.from({length: 10}, () => []);

    // actual iteration through the elements in the array
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigitFrom(arr[i], k);
      buckets[digit].push(arr[i])
    }
    arr = [].concat(...buckets);
  }
  return arr;
}


/* this bit of Math:
Math.pow(10, place) basically moves the decimal place left however many 'place's
Math.abs(num) divided by the .pow just gives the number to apply the .pow to
% 10 isolates the last number
Math.floor gets rid of any decimals
*/

// for example:
// if num = 1234
// Math.floor(Math.abs(1234) / Math.pow(10, 1)) % 10 => 3
// Math.floor(Math.abs(1234) / Math.pow(10, 2)) % 10 => 2
// Math.floor(Math.abs(1234) / Math.pow(10, 3)) % 10 => 1
// Math.floor(Math.abs(1234) / Math.pow(10, 4)) % 10 => 0
// if we wanted the 4, we could just do:
// num % 10
Math.floor(Math.abs(num) / Math.pow(10, place)) % 10


/* this bit of Math:
Math.log10(num) asks: 10 to what power = this number?
for example:
if num = 800
Math.log10(Math.abs(num) => 2.903...38
if num = 80
Math.log10(Math.abs(num) => 1.903...35

We do the Math.floor to get rid of the decimals
If we add 1 to this Math.floor value, we will get the number of digits in the number.
*/
Math.log10(Math.abs(num))