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

const merge = (arr1, arr2) => {
	let results = [];
	let i = 0;
	let k = 0;

	while (i < arr1.length && k < arr2.length) {
		if (arr1[i] > arr2[k]) {
			results.push(arr2[k]);
			k++;
		} else {
			results.push(arr1[i]);
			i++;
		}
	}
	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}
	while (k < arr2.length) {
		result.push(arr2[k]);
	}
	return results;
};

const mergeSort = (array) => {
	if (array.length <= 1) return array; // recursion base case for divide and conquer
};
