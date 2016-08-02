//alert("Hello from the JS File");
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("What is your age?");
var fullName = firstName + " " + lastName;

var greeting = "Your full name is " + fullName + "\nYou are " + age + " years old";
console.log(greeting);

var ageInDays = age * 365 + (age / 4);
console.log("You are approximately " + ageInDays + " days old");
ageInDays = age * 365.25;

if (age < 0) {
    console.log("Invalid age!");
} else {
    var oddAge = age % 2 != 0;
    var squareAge = Math.round(Math.sqrt(age)) == Math.sqrt(age);
    if (oddAge) {
        console.log("your age is odd!");
    }
    if (squareAge) {
        console.log("perfect square!");
    }
    if (age < 18) {
        console.log("Sorry, you are not old enough to go to a bar");
    } else if (age < 21) {
        console.log("You can enter the bar, but cannot drink");
    } else {
        if (age == 21) {
            console.log("Happy 21st Birthday !!");
        }
        console.log("You can enter a bar and drink!");
    }

    alert("You are approximately " + ageInDays + " days old");
    console.log("You are approximately " + ageInDays + " days old");
}

