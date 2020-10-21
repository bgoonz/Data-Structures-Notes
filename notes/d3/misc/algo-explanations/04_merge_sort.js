function merge(array1, array2) {
	// var result as array
	// while ( a and b have elements )
	//   if ( a[0] > b[0] )
	//     add b[0] to the end of result
	//     remove b[0] from b
	//   else
	//     add a[0] to the end of result
	//     remove a[0] from a
	//   end if
	// end while
	// while ( a has elements )
	//   add a[0] to the end of result
	//   remove a[0] from a
	// end while
	// while ( b has elements )
	//   add b[0] to the end of result
	//   remove b[0] from b
	// end while
	// return result
}

function mergeSort(array) {
	// if ( n == 1 ) return a
	// /* Split the array into two */
	// var l1 as array = a[0] ... a[n/2]
	// var l2 as array = a[n/2+1] ... a[n]
	// l1 = mergesort( l1 )
	// l2 = mergesort( l2 )
	// return merge( l1, l2 )
}

// The merge helper function itself has time complexity O(n) since we are iterating
// over each element passed in (where n is the total length across both arrays).
// We are also creating an array of length n, resulting in a space complexity of O(n)
function merge(array1, array2) {
	let merged = [];

	while (array1.length || array2.length) {
		let ele1 = array1.length ? array1[0] : Infinity;
		let ele2 = array2.length ? array2[0] : Infinity;

		let next;
		if (ele1 < ele2) {
			next = array1.shift();
		} else {
			next = array2.shift();
		}

		merged.push(next);
	}

	return merged;
}

// Time: O(nlogn)
// // Each call to mergeSort is going to make (2 * log n) recursive calls to itself
// // In each of those stack frames, we are going to have to look at each element
// // in order to merge them in with our merge helper function.
// // Overall, we are doing n calculations 2logn times, T(n * 2logn) = O(nlogn)
// Space: O(n)
// // With recursion, we are creating log n stack frames. At each recursive step
// // we are dealing with half of the array from the previous call. At any given
// // time we are allocating n/2 + n/4 + n/8 + n/16 + ... = n space for the arrays
// // across all frames on the call stack.
// This is a great visual representation of why we aren't dealing with n new
// elements at every stack frame: https://stackoverflow.com/a/28641693/12183155
function mergeSort(array) {
	if (array.length <= 1) {
		return array;
	}

	let midIdx = Math.floor(array.length / 2);
	let leftHalf = array.slice(0, midIdx);
	let rightHalf = array.slice(midIdx);

	let sortedLeft = mergeSort(leftHalf);
	let sortedRight = mergeSort(rightHalf);

	return merge(sortedLeft, sortedRight);
}

module.exports = {
	merge,
	mergeSort
};
