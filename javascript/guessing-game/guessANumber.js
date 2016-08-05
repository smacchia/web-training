var magicNumber = 7;

var tooLowString = "Your guess is too low! Guess Again.";
var tooHiString = "Your guess is too high! Guess Again.";
var promptString = "Guess the magic number:";

do {
	var guess = Number(prompt(promptString));

	if (guess < magicNumber) {
		alert(tooLowString);
	} else if (guess > magicNumber) {
		alert(tooHiString);
	} 
} while (guess !== magicNumber);
alert("You Got It !!!!");
