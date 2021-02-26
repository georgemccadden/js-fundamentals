/*

PROBLEM DOMAIN :
Write an algorithm that performs selection sort.


EXAMPLE :
array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

first iteration -> 0 is the min so array = [0, 44, 6, 2, 1, 5, 63, 87, 283, 4, 99];
second iteration -> 1


ALGORITHM :
- Iterate through the array
- Create variables to keep track of minimum value and temp value
- For each index of the array, iterate through the array again to find the the minimum value
- If the minimum value of that iteration is less than index you are on, swap it with the minimum


SOLUTION:
*/
const selectionSort = (array) => {
	const length = array.length;

	for (let i = 0; i < length; i++) {
		let min = i;
		let temp = array[i];

		for (let k = i + 1; k < length; k++) {
			if (array[k] < array[min]) {
				min = k;
			}
		}
		array[i] = array[min];
		array[min] = temp;
	}
	return array;
};

/*

BIG O :

Runtime Complexity -> O(n^2) quadratic time
Space Complexity -> O(1) constant time

*/
