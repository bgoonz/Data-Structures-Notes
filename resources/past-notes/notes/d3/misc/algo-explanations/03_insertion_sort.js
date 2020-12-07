function insertionSort(list) {
	// for i from 1 to length(list) inclusive do:
	//   /* select value to be inserted */
	//   valueToInsert = list[i]
	//   holePosition = i
	//   /* locate hole position for the element to be inserted */
	//   while holePosition > 0 and list[holePosition-1] > valueToInsert do:
	//     list[holePosition] = list[holePosition-1]
	//     holePosition = holePosition -1
	//   end while
	//   /* insert the number at hole position */
	//   list[holePosition] = valueToInsert
	// end for
}
// // This solution utilizes var in the inner for loop to be able to use the variable
// // after the loop exits. I generally try to avoid var because of the complications
// // it can present, so I included a reworking down below that uses a while loop
// // and a variable declared with let.
// function insertionSort(arr) {
// 	// the `i` loop will iterate through every element of the array
// 	// we begin at i = 1, because we can consider the first element of the array as a
// 	// trivially sorted region of only one element
// 	// insertion sort allows us to insert new elements anywhere within the sorted region
// 	for (let i = 1; i < arr.length; i++) {
// 		// grab the first element of the unsorted region
// 		let currElement = arr[i];

// 		// the `j` loop will iterate left through the sorted region,
// 		// looking for a legal spot to insert currElement
// 		for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
// 			// keep moving left while currElement is less than the j-th element

// 			arr[j + 1] = arr[j];
// 			// the line above will move the j-th element to the right,
// 			// leaving a gap to potentially insert currElement
// 		}
// 		// insert currElement into that gap
// 		arr[j + 1] = currElement;
// 	}
// 	return arr;
// }

// The version below swaps out the for loop for a while loop to avoid using var
// Both implementations work the same, just a reworking to more familiar syntax
// Time: O(n^2)
// // In our worst case, we will have to both iterate over every element that we
// // need to insert but also check every element to the left before dropping it
// // at the beginning each time.
// // Similar to our previous sorts, this will result in n outer iterations, with
// // an average of n/2 inner iterations, or T(n * n/2) = O(n^2) overall.
// Space: O(1)
// // We again are not creating any additional variables or stack frames that depend
// // on the size of our input. We are tracking our current element and reassigning
// // it at each iteration, with swaps happening in place.
function insertionSort(arr) {
	// the `i` loop will iterate through every element of the array
	// we begin at i = 1, because we can consider the first element of the array as a
	// trivially sorted region of only one element
	// insertion sort allows us to insert new elements anywhere within the sorted region
	for (let i = 1; i < arr.length; i++) {
		// grab the first element of the unsorted region
		let currElement = arr[i];

		// the `j` loop will iterate left through the sorted region,
		// looking for a legal spot to insert currElement
		let j = i - 1;
		// keep moving left while currElement is less than the j-th element
		while (j >= 0 && currElement < arr[j]) {
			arr[j + 1] = arr[j];
			// the line above will move the j-th element to the right,
			// leaving a gap to potentially insert currElement
			// we have to remember to decrement in our while loop!
			j--;
		}
		// insert currElement into that gap
		arr[j + 1] = currElement;
	}
	return arr;
}

module.exports = {
	insertionSort
};
