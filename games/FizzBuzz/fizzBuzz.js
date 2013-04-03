//global variables
var numberPicked = prompt("pick a number to FizzBuzz!");


//create gameButtons
var fizz = document.createElement("div");
fizz.innerHTML = "fizz";
fizz.addEventListener("click", fizzEvent, false);

var buzz = document.createElement("div");
buzz.innerHTML = "buzz";
buzz.addEventListener("click", buzzEvent, false);

var fizzBuzz = document.createElement("div");
fizzBuzz.innerHTML = "fizzBuzz";
fizzBuzz.addEventListener("click", fizzBuzzEvent, false);


/* functions */
var fizz = function () {
	console.log("fizz!");
}

var buzz = function () {
	console.log("buzz!");
}

var fizzBuzz = function () {
	console.log("fizzBuzz!");
}

//setInterval( "alert('Hello')", 5000 );

for (i=0; i <=numberPicked; i++) {

	var currentNumber = document.createElement("li");
	currentNumber.innerHTML = i;
	document.body.appendChild(currentNumber);



//timer
/*var timer;
var totalSeconds;

function createTimer(TimerID, Time) {
	timer = document.getElementById(TimerID);
	totalSeconds = time;

	updateTimer();
	window.setTimeout("tick()", 1000);
}

function tick() {
	totalSeconds -= 1;
	updateTimer();
	window.setTimeout("tick()", 1000);
}

function updateTimer() {
	timer.innerHTML = totalSeconds;
}*/

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
