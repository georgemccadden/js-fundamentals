/*

PROBLEM DOMAIN :

Implement bubble sort


EXAMPLE :

array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

return -> [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]


ALGORITHM :

- For every index, iterate through the entire array for comparison
- If one index is greater than the other, swap and continue
- If one index is less than the other, continue
- If indexes are equal, continue
- Once you reach the end of the array, repeat from the beginning until the least and greatest variables are at the beginning and end of the array


SOLUTION :
*/

const bubbleSort = (array) => {
	let length = array.length;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
};
