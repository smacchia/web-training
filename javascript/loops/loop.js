printNumbers(
	"PRINT ALL NUMBERS BETWEEN -1 AND 19",
	-10,
	19,
	alwaysPrint);

printNumbers(
	"PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40",
	10,
	40, 
	printEven);

printNumbers(
	"PRINT ALL ODD NUMBERS BETWEEN 300 AND 333",
	300,
	333, 
	printOdd);

printNumbers(
	"PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3, BETWEEN 5 AND 50",
	5,
	50, 
	printDivisibleBy5and3);

printNumbers();

function alwaysPrint(num) { 
	console.log(num);
}

function printEven(num) {
	if (num % 2 === 0) {
		console.log(num);
	}
}

function printOdd(num) {
	if (num % 2 === 0) return;
	console.log(num);
}

function printDivisibleBy5and3(num) {
	if (num % 5 === 0 && num % 3 === 0) {
		console.log(num);
	}
}

function printNumbers(title, start, end, numberFunc) {
	if (numberFunc == undefined) {
		console.log("printNumbers(), missing parameters");
		return -1;
	}
	console.log(title);

	// var num = start;
	// while (num <= end) {
	// 	numberFunc(num);
	// 	num++;
	// }
	for (num = start; num <= end; num++) {
		numberFunc(num);
	}
}