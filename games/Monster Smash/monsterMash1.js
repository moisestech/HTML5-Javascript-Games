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

	// States
	hiding: 0,
	jumping: 1,
	hit: 2,
	state: this.hiding,

	// Properties needed to help reset the animation
	timeToReset: 9,
	resetCounter: 0,

	// A property to store the random time
	waitTime: undefined,

	// A method to find a random animation time
	findWaitTime: function() {
		this.waitTime = Math.ceil(Math.random() * 60);
	},

	// The monster's updateAnimation method
	updateAnimation: function() {
		// Use the currentFrame to find the correct section
		// of the tilesheet to display
		this.sourceX = Math.floor(this.currentFrame % this.columns) * this.size;
		this.sourceY = Math.floor(this.currentFrame / this.columns) * this.size;

		// Figure out the monster's state
		if (this.state !== this.hit) {
			if (this.waitTime > 0 || this.waitTime === undefined) {
				this.state = this.hiding;
			} else {
				this.state = this.jumping;
			}
		}

		// Switch the monster's action based on its state
		switch (this.state) {
			case this.hiding:
				this.currentFrame = 0;
				this.waitTime--;
				break;

			case this.jumping:
				// If the last frame has been reached, set forward to false
				if (this.currentFrame === this.numberOfFrames) {
					this.forward = false;
				}

				// If the first frame has been reached, set forward to true
				if (this.currentFrame === 0 && this.forward === false) {
					// Set forward to true, find a new waitTime,
					// set the state of hiding and break the switch statement
					this.forward = true;
					this.findWaitTime();
					this.state = this.hiding;
					break;
				}

				// Add 1 to currentFrame if forward is true, subtract 1 it's false
				if (this.forward) {
					this.currentFrame++;
				} else {
					this.currentFrame--;
				}
				break;

			case this.hit:
				// Set the current frame to the last one on the tilesheet
				// to display the explosion image
				this.currentFrame = 6;

				// Update the resetCounter by 1
				this.resetCounter++;

				// Reset the animation if the resetCounter equals the timeTiReset
				if (this.resetCounter === this.timeToReset) {
					this.state = this.hiding;
					this.forward = true;
					this.currentFrame = 0;
					this.resetCounter = 0;
					this.findWaitTime();
				}
				break;
		}
	}
};

// Set up the canvas and drawing surface
var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");

// Add a mousedown event listener to the canvas
canvas.addEventListener("mousedown", mousedownHandler, false);

// Load the animation tile sheet
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = monster.image;


/* -- FUNCTIONS -- */

function loadHandler() {
	// Find a random wait time
	monster.findWaitTime();

	// Start the animation
	updateAnimation();
}

function updateAnimation() {
	// Set a timer to call updateAnimation every 300 milliseconds
	setTimeout(updateAnimation, 120);

	// Update the monster's animation frames
	monster.updateAnimation();

	// Render the animation
	render();
}

function mousedownHandler(event) {
	if (monster.state === monster.jumping) {
		monster.state = monster.hit;
	}
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