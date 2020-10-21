// With quickSort, we are taking a pivot point and dividing the rest of our array
// into a higher and lower half.
// We can keep doing this pivot on subsequent smaller arrays until we have arrays
// of length 1 or 0, which are inherently sorted.
// After these divisions, we know our left side is then sorted as well as our
// right side, so we can concatenate all three sections together.
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
