//global variables
var numberPicked = 60;


for (i=0; i <numberPicked; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz!");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	}
}

console.log("works!")