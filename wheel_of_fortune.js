// wheel_of_fortune.js
// CoderGirl WebDev (Winter 2019) — LaunchCode

// VARIABLES /////////////////////////////////////////////////////////

// In a normal application you would ask for user input.
// In this exercise we will set the variables ourselves.

// Set a secret word!

var word = 'AMAZEBALLS'; // ALL CAPS

// Ask player if they would like to guess a letter or guess the
// solution.
console.log("Would you like to guess a letter or solve the puzzle?");

var isGuessingLetter = false; // set to false to guess solution

// SCRIPT ////////////////////////////////////////////////////////////

//if isGuessingLetter = true
var letter = ''; // UPPERCASE
//else
var wordGuess = 'AMAZEBALLS';
//for populating letter in word
var puzzle = '';

isGuessingLetter ? console.log(`Please choose a letter: ${letter}`) : console.log(`Please solve the puzzle: ${wordGuess}`);

if (isGuessingLetter && letter != "") {
	var count = 0;
	if (word.includes(letter)) {
		for (var i = 0; i < word.length; i++) {
			if (word[i] === letter) {
				count ++;
				puzzle += letter;
			} else {
				puzzle += "_";			
			}
		}
		count > 1 ? console.log(`${puzzle}\nThere are ${count} "${letter}"s.`) : console.log(`${puzzle}\nThere is ${count} "${letter}".`) 
	} else {
		console.log(`Sorry, no "${letter}"s.`);
	}
} else {
	wordGuess === word ?
		console.log("Congratulations! You won Wheel Of Fortune!") : console.log("Nope, keep trying!");
}

// End of script!
