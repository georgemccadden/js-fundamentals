/*

PROBLEM DOMAIN :
Write an algorithm that performs merge sort.


ALGORITHM :
- Break the array into halves until you have an array that has one element or one that is completely empty
- Once you have the smaller sorted arrays, merge those arrays back together until you're back to the original length of the passed in array
- Once the array has been merged, return the merged array

EXAMPLE :
array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

-> [99, 44, 6, 2, 1] and [5, 63, 87, 283, 4, 0]
-> [99], [44], [6], [2], [1], [5], [63], [87], [283], [4], [0]
-> [44] < [99], [2] < [6], [1] < [5], [63] < [87], [0] < [4] < [283]

SOLUTION :
*/
const mergeSort = (array) => {
	if (array.length === 1) return array;
	function merge(left, right) {
		let result = [];
		let i = 0;
		let k = 0;

		while (i < left.length && k < right.length) {
			if (left[i] > right[k]) {
				result.push(right[k]);
				k++;
			} else {
				result.push(left[i]);
				i++;
			}
		}
		while (i < left.length) {
			result.push(left[i]);
			i++;
		}
		while (k < right.length) {
			result.push(right[k]);
			k++;
		}
	}
};
