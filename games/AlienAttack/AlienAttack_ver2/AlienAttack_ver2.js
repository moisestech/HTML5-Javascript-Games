//Game variables
var alienX = 80;
var alienY = 20;
var guessX = 0;
var guessY = 0;
var shotsRemaining = 8;
var shotsMade = 0;
var gameState = "";
var gameWon = false;

//The game objects
var cannon = document.querySelector("#cannon");
var alien = document.querySelector("#alien");
var missile = document.querySelector("#missile");
var explosion = document.querySelector("#explosion");

//The input and output fields
var inputX = document.querySelector("#inputX");
var inputY = document.querySelector("#inputY");
var output = document.querySelector("#output");

//The button
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);


/* -- functions --*/


function clickHandler()
{
  validateInput();
}


function validateInput() {
	guessX = parseInt(inputX.value);
	guessY = parseInt(inputY.value);
	
	if (isNaN(guessX) || isNaN(guessY)) {
		output.innerHTML = "Please enter a number."
	} else if (guessX > 300 || guessY > 300){
		output.innerHTML = "Please enter a number less than 300.";
	} else {
		playGame();
	}
}

function render()
{
  //Position the alien
  alien.style.left = alienX + "px";
  alien.style.top = alienY + "px";
  
  //Position the cannon
  cannon.style.left = guessX + "px";
  
  //Position the missile
  missile.style.left = guessX + "px";
  missile.style.top = guessY + "px";
  
  if (gameWon) {
  		//Display and position the explosion
  		explosion.style.display = "block";
  		explosion.style.left = alienY + "px";
  		explosion.style.top = alienX + "px";
  		
  		//Make the alien and missile invisible
  		alien.style.display = "none";
  		missile.style.display = "none";
  }
}


function playGame()
{
  shotsRemaining = shotsRemaining - 1;
  shotsMade = shotsMade + 1;
  gameState 
    = " Shots: " + shotsMade + ", Remaining: " + shotsRemaining;
  
  guessX = parseInt(inputX.value);
  guessY = parseInt(inputY.value);
  
  //Find out whether the player's x and y guesses are inside
  //The alien's area
  
  if(guessX >= alienX && guessX <= alienX + 20)
  {
     //Yes, it's within the X range, so now let's
     //check the Y range
     
     if(guessY >= alienY  && guessY <= alienY + 20)
     {
       //It's in both the X and Y range, so it's a hit!
       gameWon = true;
       endGame();
     }
  }
  else
  {
    output.innerHTML = "Miss!" + gameState;
    
    //Check for the end of the game
    if (shotsRemaining < 1)
    {
      endGame();
    }
  }
  
  //Update the alien's position if the
  //game hasn't yet been won
  
  if(!gameWon)
  {
    //Update the alien's X position
    alienX = Math.floor(Math.random() * 281);
    
    //Add 30 to the new Y position so that
    //the alien moves down towards earth
    alienY += 30;
  } 
  
  //Render the new game state
  render();
  console.log("X: " + alienX);
  console.log("Y: " + alienY);
}

function endGame()
{
  if(gameWon)
  {
    output.innerHTML
      = "Hit! You saved the earth!" + "<br>" 
      + "It only took you " + shotsMade + " shots.";
  }
  else
  {
    output.innerHTML
      = "You lost!" + "<br>" 
      + "The earth has been invaded!";
  }
}