/* 

PROBLEM DOMAIN : Write two functions that finds the factorial of any number. One should use recursion and the other should use a 'for loop'.

*/

const iterativeFactorial = (num) => {
	if (num === 0 || num === 1) return 1;
	for (let i = num - 1; i >= 1; i--) {
		num *= i;
	}
	return num;
};
