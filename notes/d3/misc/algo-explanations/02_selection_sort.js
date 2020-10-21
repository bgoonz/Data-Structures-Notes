// Try to implement swap on your own, this time.
function swap(arr, index1, index2) {}

function selectionSort(list) {
	// list  : array of items
	// n     : size of list
	//
	// for i = 1 to n - 1
	// /* set current element as minimum*/
	//    min = i
	//
	//    /* check the element to be minimum */
	//
	//    for j = i+1 to n
	//       if list[j] < list[min] then
	//          min = j;
	//       end if
	//    end for
	//
	//    /* swap the minimum element with the current element
	//       using the above swap function*/
	//    if indexMin != i  then
	//       swap list[min] and list[i]
	//    end if
	// end for
}

// Time: O(n^2)
// // We have nested loops that are both dependent on the size of our input array
// // The outer loop will always loop n times
// // The inner loop will first loop n times, then n-1, n-2, etc.. It is always
// // some percentage of n, averaging out to n/2
// // Inside the inner loop we have a constant number of operations
// // The combination ends up being T(n * n/2) = O(n^2)
// Space: O(1)
// // Even with all of our looping, we are only ever reassigning variables, using
// // a minIndex and temp helper variable.
// // These are constant, not relying on the input size (larger arrays do not mean
// // more variables for us), so we take up constant space.
function selectionSort(arr) {
	// the `i` loop will track the index that points to the first element of the unsorted region:
	//    this means that the sorted region is everything left of index i
	//    and the unsorted region is everything to the right of index i
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;

		// the `j` loop will iterate through the unsorted region and find the index of the smallest element
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}

		// after we find the minIndex in the unsorted region,
		// swap that minIndex with the first index of the unsorted region
		swap(arr, i, minIndex);
	}
	return arr;
}

function swap(arr, index1, index2) {
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

module.exports = {
	selectionSort,
	swap
};
