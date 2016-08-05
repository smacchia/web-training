var answer = "";
var yes = "yes";
var yeah = "yeah";

while (answer == null || answer == undefined ||
	(answer.indexOf(yes) == -1 && answer.indexOf(yeah) == -1)) {

	answer = prompt("Are we there yet?")
	if (answer != null) {
		answer = answer.toLowerCase();
	}
}

alert("Yay! We finally made it!");