//global variables
//var numberPicked = prompt("pick a number to FizzBuzz!");
var fizzBuzzRound = 0;

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


//setInterval( "alert('Hello')", 5000 );

/*for (i=0; i <=numberPicked; i++) {

	var currentNumber = document.createElement("li");
	currentNumber.innerHTML = i;
	document.body.appendChild(currentNumber);

	createTimer("timer", 5);
	
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz!");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}*/

/* functions */
function keydownHandler() {
	if (event.keyCode === 65) {
		resetTime();
		displayEvent("fizz");
		console.log("fizz!");
	} else if (event.keyCode === 68) {
		resetTime();
		displayEvent("buzz");
		console.log("buzz!");
	} else if (event.keyCode === 87) {
		resetTime();
		displayEvent("fizzBuzz");
		console.log("fizzBuzz!");
	}
}

function resetTime () {
	totalSeconds = 5;
	timer.innerHTML = totalSeconds;
	fizzBuzzRound++;
}

function displayEvent (event) {
	var eventMade = document.createElement("div");
	eventMade.innerHTML = event;
	document.body.appendChild(eventMade);

	window.setTimeout(function() {
		eventMade.parentNode.removeChild(eventMade);
	}, 1000);
}

//timer
var timer;
var totalSeconds;
window.onload = createTimer("timer", 5);

function createTimer(timerID, time) {
	timer = document.getElementById(timerID);
	totalSeconds = time;

	updateTimer();
	window.setTimeout("tick()", 1000);
}

function tick() {
	/*if (totalSeconds <= 0) {
	alert("Time's up!")
	return;
	}*/

	if  (totalSeconds > 0) {
		console.log("event");
	} else if (totalSeconds <= 0) {
		console.log("gameover");
		return;
	}

	totalSeconds -= 1;
	updateTimer();
	window.setTimeout("tick()", 1000);
}

function updateTimer() {
	timer.innerHTML = totalSeconds;
}
