let password = 'DoesThisWork?';
let validPassword = false;

// Checking to see if it is a valid password
if (password.length >= 6 && password.indexOf(' ') === -1) {
	console.log(`Valid Password`);
	validPassword = true;
} else {
	console.log(`Password is not long enough!`);
}

// Automatically logging in

if (validPassword) {
	console.log(`You are currently logged in!`);
}
