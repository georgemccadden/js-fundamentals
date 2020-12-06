alert('It is actually working!');

// This is an example of a performance review

// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement

let rating = 7;

if (rating === 3) {
	console.log(`You are a superstar! Your rating is ${rating}!`);
} else if (rating === 2) {
	console.log(`You meet expectations! Woohoo! Your rating is ${rating}.`);
} else if (rating === 1) {
	console.log(`You need to improve. Your rating is ${rating}..`);
} else {
	console.log(`${rating} is an invalid rating!`);
}

// This is an example of a high score

let highScore = 2000;
let userScore = 1300;

if (userScore >= highScore) {
	console.log(`Congratulations! You have a new high score of ${userScore}!`);
	highScore = userScore;
} else {
	console.log(`Good game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}
