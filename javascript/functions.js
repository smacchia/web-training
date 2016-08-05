console.log("isEven(4) is ", isEven(4));
console.log("isEven(21) is ", isEven(21));
console.log("isEven(68) is ", isEven(68));
console.log("isEven(333) is ", isEven(333));
console.log("factorial(5): ", factorial(5));
console.log("factorial(2): ", factorial(2));
console.log("factorial(10): ", factorial(10));
console.log("factorial(0): ", factorial(0));
console.log("hello-world -> ", kebabToSnake("hello-world"));
console.log("dogs-are-awesome -> ", kebabToSnake("dogs-are-awesome"));
console.log("blah -> ", kebabToSnake("blah"));

function isEven(num) {
	return (num != null && num != undefined && num % 2 === 0);
}

function factorial(num) {
	// if (num == 0) return 1;

	// return num * factorial(num - 1);

	var result = 1;

	for (var i = 2; i <= num; i++) {
		result *= i;
	}

	return result;
}

function kebabToSnake(string) {
	return string.replace(/-/g, "_");
	// var copy = string;
	// for (i = 0; i < string.length; i++) {
	// 	if (copy.charAt(i) == "-") {
	// 		copy.replace(i, '_');
	// 	}
	// }

	// return copy;
}