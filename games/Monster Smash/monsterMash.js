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
	image: "imgs/monsterTileSheet.png",
	size: 128,
	columns: 3,

	// The numbers of the animation frames and the starting frame
	numberOfFrames: 5,
	currentFrame: 0,

	// Properties of the animation cell's x and
	// y positions on the tile sheet.
	// They're 0 when this object first loads
	sourceX: 0,
	sourceY: 0,

	// A variable to control the direction of the loop
	forward: true,

	// The monster's updateAnimation method
	updateAnimation: function() {
		// Use the currentFrame to find the correct section
		// of the tilesheet to display
		this.sourceX = Math.floor(this.currentFrame % this.columns) * this.size;
		this.sourceY = Math.floor(this.currentFrame / this.columns) * this.size;


		// If the last frame has been reached, set forward to false
		if (this.currentFrame === this.numberOfFrames) {
			this.forward = false;
		}

		// If the first frame has been reached, set forward to true
		if (this.currentFrame === 0) {
			this.forward = true;
		}

		// Add 1 to currentFrame if forward is true, subtract 1 if it's false
		if (this.forward) {
			this.currentFrame++;
		} else {
			this.currentFrame--;
		}
	}
};

// Set up the canvas and drawing surface
var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");

// Load the animation tile sheet
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = monster.image;

function loadHandler() {
	// Start the animation
	updateAnimation();
}

function updateAnimation() {
	// Set a timer to call updateAnimation every 300 milliseconds
	setTimeout(updateAnimation, 300);

	// Update the monster's animation frames
	monster.updateAnimation();

	// Render the animation
	render();
}

function render() {
	// Clear the canvas of any previous frames
	drawingSurface.clearRect(0, 0, canvas.width, canvas.height);

	// Draw the monster's current animation frame
	drawingSurface.drawImage(
		image,
		monster.sourceX, monster.sourceY, monster.size, monster.size,
		0, 0, monster.size, monster.size
	);
}