/*

PROBLEM DOMAIN :
Write an algorithm that performs insertion sort.


EXAMPLE :
array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

first iteration -> 99 > 44, 6, 2, 1, 5, 63, and 87 but not 283 so array = [44, 6, 2, 1, 5, 63, 87, 99, 283, 4, 0]
second iteration -> 44 > 6, 2, 1, and 5 but not 63 so array = [6, 2, 1, 5, 44, 63, 87, 99, 283, 4, 0]
third iteration -> 6 > 2, 1, and 5 but not 44 so array = [2, 1, 5, 6, 44, 63, 87, 99, 283, 4, 0]


ALGORITHM :
- For each index of the array, iterate through the array
- If the variable at that iteration's index is lower than the first variable in the array, shift the array and make it the first variable.
- Else, find where in the array it is lower than the variable to the right of it but greater than the variable to the left.
- Move to the next item in the iteration
- Return the sorted array once you reach the end of the iteration


SOLUTION :
*/
const insertionSort = (array) => {
	let length = array.length;

	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
			array.unshift(array.splice(i, 1)[0]);
		}
	}
};
