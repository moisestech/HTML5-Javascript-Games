//global variables

//Arrow key codes
	var fizzBuzz = 38; //UP
	var fizz = 37; //Left
	var buzz = 39; //Right


//create currentFizzBuzz number
var currentFizzBuzzNumber = 3;
console.log(currentFizzBuzzNumber);


//Add a keyboard listener
window.addEventListener("keydown", keydownHandler, false);


/* -- functions -- */
function keydownHandler(event) {
	switch(event.keyCode) {
		case fizzBuzz:
			console.log("FizzBuzz!");
			if (currentFizzBuzzNumber % 3 === 0 && currentFizzBuzzNumber % 5 === 0) {
				//Add 1 to continue to the next number
				currentFizzBuzzNumber++;
				console.log(currentFizzBuzzNumber);
			}
			break;

		case fizz:
			console.log("Fizz!");
			if (currentFizzBuzzNumber % 3 === 0) {
				//Add 1 to continue to the next number
				currentFizzBUzzNumber++;
				console.log(currentFizzBuzzNumber);
			}
			break;

		case buzz:
			console.log("Buzz!");
			if (currentFizzBuzzNumber % 5 === 0) {
				//Add 1 to continue to the next number
				currentFizzBuzzNumber++;
				console.log(currentFizzBuzzNumber);
			}
			break;
	}
}



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


//create array to store functions
var arrayOfFunctions = [];

//create function that uses the forLoop i as an argument
// and returns a function with the forLoop i in it
function createFunc(forLoopI) {
	return function() {
		console.log("My value: " + forLoopI);
	}
}

//forLoop that stores the anonymous function into
//the arrayOfFunctions
for (var i=0; i < 3; i++) {
	arrayOfFunctions[i] = createFunc(i);
}

// forLoop that fires each anonymous function stored
// inside arrayOfFunctions
for (var j=0; j < 3; j++) {
	arrayOfFunctions[j]();
}

/*for(i=0; i<=10;i++){
    setTimeout("setvalue()",2000); //This alert should display for every 2 secs only
    console.log(i);
    }

    function setvalue()
    {
     var s=i;
    }*/


// A=65 D=68 W=87


/*var loopTimer = 2000;
var loopIncrement = 1500;

for (i=0; i < 10; i++) {
	var iArray[i] = i;
	setTimeout( function() {
		loopAction();
	}, loopTimer);

	loopTimer += loopIncrement;
}

function loopAction (loopNum) {
	console.log(loopNum);
}*/

//setInterval( "alert('Hello')", 5000 );

/*for (i=0; i < numberPicked; i++) {

	/*var currentNumber = document.createElement("li");
	currentNumber.innerHTML = i;
	document.body.appendChild(currentNumber);*/
	
	/*if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz!");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}*/
//}

/*function keydownHandler() {
		if (event.keyCode === 65) {
			console.log(i);
			resetTime();
			displayEvent("fizz");
			console.log("fizz!");
		} else if (event.keyCode === 68) {
			console.log(i);
			resetTime();
			displayEvent("buzz");
			console.log("buzz!");
		} else if (event.keyCode === 87) {
			console.log(i);
			resetTime();
			displayEvent("fizzBuzz");
			console.log("fizzBuzz!");
		}
	}*/

/* functions */

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
		//console.log("event");
	} else if (totalSeconds <= 0) {
		//console.log("gameover");
		return;
	}

	totalSeconds -= 1;
	updateTimer();
	window.setTimeout("tick()", 1000);
}

function updateTimer() {
	timer.innerHTML = totalSeconds;
}
