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
	// The monster's image
	image: "imgs/monsterStates.png",

	//Define the monster's states
	NORMAL: 0,
	SCARED: 1,

	//Set its initial state
	state: 0
};

// Set up the canvas and drawing surface
var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");

// Load the monster's image
var monsterImage = new Image();
monsterImage.addEventListener("load", render, false);
monsterImage.src = monster.image;

// Change the monsters state by pressing and releasing a key
window.addEventListener("keydown", keydownHandler, false);
window.addEventListener("keyup", keyupHandler, false);

function keydownHandler(event) {
	// When a key is released, change the
	// monster's state to SCARED and render it
	monster.state = monster.SCARED;
	render();
}

function keyupHandler(event) {
	// When a key is released, change the
	// monster's state to NORMAL and render it
	monster.state = monster.NORMAL;
	render();
}

function render() {
	// Render the correct state
	switch(monster.state) {
		case monster.NORMAL:
			drawingSurface.drawImage (
				monsterImage,
				0, 0, 64, 64,
				0, 0, 64, 64
			);
			break;

		case monster.SCARED:
			drawingSurface.drawImage (
				monsterImage,
				64, 0, 64, 64,
				0, 0, 64, 64
			);
			break;
				
	}
}


