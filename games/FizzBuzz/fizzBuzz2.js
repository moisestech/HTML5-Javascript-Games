//global variable

// Arrow key codes
	var fizzBuzz = 38; //Up
	var fizz = 37; //Left
	var buzz = 39; //Right

var currentFizzBuzzNumber = 3;
console.log(currentFizzBuzzNumber);

// current FizzBuzz number
var fizzBuzzCount = 0;
var fizzCount = 0;
var buzzCount = 0;

//add keyEvent listener
window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(event) {
	switch (event.keyCode) {
		case fizzBuzz:
			fizzBuzzCount++;
			console.log("currentFizzBuzzNumber " + fizzBuzzCount);
			break;

		case fizz:
			fizzCount++;
			console.log("currentFizzNumber " + fizzCount);
			break;

		case buzz:
			buzzCount++;
			console.log("BuzzNumber " + buzzCount);
			break;
	} 
}

