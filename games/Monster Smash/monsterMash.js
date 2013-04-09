// Get a reference to the canvas
//var canvas = document.querySelector("canvas");

// Get a reference to the canvas's drawing surface
//var drawingSurface = canvas.getContext("2d");

// Create a monsterImage variable to hold the new monsterImage
//var monsterImage = new Image();

// Add a listener to the image to call the 
// render function when the image has loaded
//monsterImage.addEventListener("load", loadHandler, false);

// Assign the image's src property to the image you want to load
//monsterImage.src = "imgs/monster.png";

/*function loadHandler() {
	// Draw the monsterImage onto the drawingSurface
	drawingSurface.drawImage(monsterImage, 0, 0);
}*/


var monster = {
	//Define the monster's states
	NORMAL: 0,
	SCARED: 1,

	//Set its initial state
	state: 0
};

console.log("monster's initial state: " + monster.state);

// Change the monster's state by pressing a key
window.addEventListener("keydown", keydownHandler, false);

function keydownHandler (event){
	// Change the monster's state
	monster.state = monster.SCARED;

	//Display the new state
	console.log("The monster's new state: " + monster.state);
}




