/* 
PROBLEM DOMAIN :

Given a number 'N', return the index value of the Fibonacci sequence.


EXAMPLE : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144..


SOLUTION :
*/
const iterativeFibonacci = (n) => {
	let arr = [ 0, 1 ];

	for (let i = 2; i <= n; i++) {
		arr.push(arr[i - 2] + arr[i - 1]);
	}
	return arr[n];
};
