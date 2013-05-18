//global variable

// Arrow key codes
	var fizzBuzz = 38; //Up
	var fizz = 37; //Left
	var buzz = 39; //Right

var currentFizzBuzzNumber = 0;
console.log(currentFizzBuzzNumber);

// current FizzBuzz number
var fizzBuzzCount = 0;
var fizzCount = 0;
var buzzCount = 0;

//DOM variables
var currentNumber = document.createElement("div");
document.body.appendChild(currentNumber);
currentNumber.innerHTML = currentFizzBuzzNumber;

//add keyEvent listener
window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(event) {
	switch (event.keyCode) {
		case fizzBuzz:
			if (currentFizzBuzzNumber % 3 === 0 && currentFizzBuzzNumber % 5 == 0) {
			fizzBuzzCount++;
			console.log("FizzBuzzNumber " + fizzBuzzCount);
			}
			
			currentFizzBuzzNumber++;
			currentNumber.innerHTML = currentFizzBuzzNumber;
			console.log("The current number is " + currentFizzBuzzNumber);
			break;

		case fizz:
			if (currentFizzBuzzNumber % 3 === 0) {
				fizzCount++;
				console.log("FizzNumber " + fizzCount);
			}
			
			currentFizzBuzzNumber++;
			currentNumber.innerHTML = currentFizzBuzzNumber;
			console.log("The current number is " + currentFizzBuzzNumber);
			break;

		case buzz:
			if (currentFizzBuzzNumber % 5 === 0) {
				buzzCount++;
				console.log("BuzzNumber " + buzzCount);
			}

			currentFizzBuzzNumber++;
			currentNumber.innerHTML = currentFizzBuzzNumber;
			console.log("The current number is " + currentFizzBuzzNumber);
			break;
	} 
}

