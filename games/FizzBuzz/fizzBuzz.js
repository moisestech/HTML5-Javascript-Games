//global variables
//var numberPicked = prompt("pick a number to FizzBuzz!");


//create gameButtons
var fizz = document.createElement("div");
document.body.appendChild(fizz);
fizz.innerHTML = "fizz";

var buzz = document.createElement("div");
document.body.appendChild(buzz);
buzz.innerHTML = "buzz";

var fizzBuzz = document.createElement("div");
document.body.appendChild(fizzBuzz);
fizzBuzz.innerHTML = "fizzBuzz";

//gameButtons keydown event handler
window.addEventListener("keydown", keydownHandler, false);


// A=65 D=68 W=87

/* functions */
function keydownHandler() {
	if (event.keyCode === 65) {
		console.log("fizz!");
	} else if (event.keyCode === 68) {
		console.log("buzz!");
	} else if (event.keyCode === 87) {
		console.log("fizzBuzz!");
	}

	return true;
}

//setInterval( "alert('Hello')", 5000 );

for (i=0; i <=10; i++) {

	var currentNumber = document.createElement("li");
	currentNumber.innerHTML = i;
	document.body.appendChild(currentNumber);

	createTimer("timer", 5);
	
	if (totalSeconds > 0 && keydownHandler()) {
		console.log("event!");
	} else if (totalSeconds < 0 && keydownHandler()) {
		console.log("no more events allowed sorry!");
	} else {
		console.log("game over");
	}

	/*if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz!");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}*/
}


//timer

var timer;
var totalSeconds;
//window.onload = createTimer("timer", 5);

function createTimer(timerID, time) {
	timer = document.getElementById(timerID);
	totalSeconds = time;

	updateTimer();
	window.setTimeout("tick()", 1000);
}

function tick() {
	if (totalSeconds <= 0) {
	alert("Time's up!")
	return;
	}

	totalSeconds -= 1;
	updateTimer();
	window.setTimeout("tick()", 1000);
}

function updateTimer() {
	timer.innerHTML = totalSeconds;
}
