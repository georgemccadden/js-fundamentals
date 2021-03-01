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

const mergeSort = (arr) => {
	if (arr.length === 1) return arr;

	const length = arr.length;
	const middle = Math.floor(length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
	const results = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			results.push(left[leftIndex]);
			leftIndex++;
		} else {
			results.push(right[rightIndex]);
			rightIndex++;
		}
	}
	return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};
/*

BIG O :
Runtime complexity -> O(n log n)
Space complexity -> O(n)

*/
