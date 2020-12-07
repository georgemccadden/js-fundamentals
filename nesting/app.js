let password = 'Wishingy0uam3rrylittl3christmas!';

// Checking to see if it is a valid password
if (password.length >= 6) {
	if (password.indexOf(' ') === -1) {
		console.log(`Valid Password`);
	}
} else {
	console.log(`Password is not long enough!`);
}
