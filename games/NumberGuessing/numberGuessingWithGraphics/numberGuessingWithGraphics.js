/*(function() {
	window.alert("The Javascript program has load it!");
}());*/

//Game variables
var mysteryNumber = Math.floor(Math.random()*100);
var playersGuess = 0;
var guessesRemaining = 10;
var guessesMade = 0;
var gameState = "";
var gameWon = false;

//The input and output fields
var input = document.querySelector('#input');
var output = document.querySelector('#output');

//The button
var button = document.querySelector("button");
button.addEventListener("click", clickHandler, false);
button.style.cursor = "pointer";

//Enter
window.addEventListener("keydown", keydownHandler, false);

//Log mystery number
console.log(mysteryNumber);

//The arrow
var arrow = document.querySelector("#arrow");


/* -- functions --*/

function render() {
	//Position the arrow
	//Multiply the players guess by 3 to get the 
	//correct pixel position on the scale
	arrow.style.left = playersGuess * 3 + "px";
}


function keydownHandler(event) {
	if (event.keyCode === 13) {
		validateInput();
	}
}


function clickHandler () {
	validateInput();	
}

function validateInput() {	
	playersGuess = parseInt(input.value);
	
	if(isNaN(playersGuess)) {
		output.innerHTML = "Please enter a number";
	} else {
		playGame();
	}
}

function playGame() {
	guessesRemaining--;
	guessesMade++;
	gameState = " Guess: " + guessesMade + ", Remaining: " + guessesRemaining;
	
	if (playersGuess > mysteryNumber) {
		output.innerHTML = "That's too high." + gameState;
		
		//Check for then end of the game
		if (guessesRemaining < 1) {
			endGame();
		} 
	} else if (playersGuess < mysteryNumber) {
		output.innerHTML = "That's too low." + gameState;
		//Check for then end of the game
		if (guessesRemaining < 1) {
			endGame();
		} 
	} else if (playersGuess === mysteryNumber) {
		gameWon = true;
		endGame();	
	}
	
	//Update the graphic display
	render();	
}

function endGame() {
	if (gameWon) {
		output.innerHTML = "Yes, it's " + mysteryNumber + "!" + "<br>" + "It only took you " + guessesMade + " guesses.";
	} else {
		output.innerHTML = "No more guesses left!" + "<br>" + "The number was: " + mysteryNumber + ".";
	}
	
	//Disable the button
	button.removeEventListener("click", clickHandler, false);
	button.disabled = true;
	
	//Disable the enter key
	window.removeEventListener("keydown", keydownHandler, false);
	
	//Disable the input field
	input.disabled = true;
}