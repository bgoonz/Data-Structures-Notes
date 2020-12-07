function quickSort(array) {
	// if the length of the array is 0 or 1, return the array
	// set the pivot to the first element of the array
	// remove the first element of the array
	// put all values less than the pivot value into an array called left
	// put all values greater than the pivot value into an array called right
	// call quick sort on left and assign the return value to leftSorted
	// call quick sort on right and assign the return value to rightSorted
	// return the concatenation of leftSorted, the pivot value, and rightSorted
}

// Quicksort is a unique when when we talk about complexities. By choosing an
// arbitrary pivot point, we are extreeeemely unlikely to have our worst case
// scenario actually occur. In reality our worst case is going to happen when we
// pick either the min or max as the pivot point each time, resulting in us having
// to a left or right array that contains every other element and the other one
// being empty. This results in n recursive calls with a partitioning step making
// n comparisons, for an overall O(n^2).
// More likely, we are going to be selecting a pivot that distributes our values
// more evenly across our two subarrays, for log n recursive calls instead of n.
// Because of thisand the research associated with it, we (and the community in
// general) often refer to the average case of O(nlogn) for quicksort instead of
// the actual worst case of O(n^2)

// Time: O(nlogn)
// // Our pivot points approximately split our arrays in half at each step, with
// // n comparisons happening at each step to create those subarrays.
// Space: O(n)
// // Each of our recursive calls creates arrays for approximately half of the
// // data from our previous calls. This follows the pattern that we've seen where
// // we are tracking n/2 + n/4 + n/8 + n/16 + ... = n total length of arrays at
// // any given point on our call stack.
function quickSort(array) {
	if (array.length <= 1) {
		return array;
	}

	let pivot = array.shift();
	let left = array.filter((el) => el < pivot);
	let right = array.filter((el) => el >= pivot);

	let leftSorted = quickSort(left);
	let rightSorted = quickSort(right);

	return [ ...leftSorted, pivot, ...rightSorted ];
}

module.exports = {
	quickSort
};
