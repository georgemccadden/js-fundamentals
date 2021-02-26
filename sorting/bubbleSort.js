/*

PROBLEM DOMAIN :
Write an algorithm that performs bubble sort.


EXAMPLE :
array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

first iteration -> 99 > 44, 6, 2, 1, 5, 63, 87, 4, and 0 so array = [44, 6, 2, 1, 5, 63, 87, 4, 283, 0, 99]
second iteration -> 44 > 6, 2, 1, 5, 4, and 0 so array = [6, 2, 1, 5, 4, 63, 87, 0, 283, 44, 99]
third iteration -> 6 > 2, 1, 5, 4, and 0 so array = [2, 1, 5, 4, 0, 63, 87, 6, 283, 44, 99]
...


ALGORITHM :
- For every index, iterate through the entire array for comparisons
- If one index is greater than the other, swap and continue
- If one index is less than the other, continue without swapping
- If indexes are equal, continue without swapping
- return the mutated array


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

/*

BIG O :

Runtime complexity -> O(n^2) quadratic time
Space complexity -> O(1) constant time

*/
