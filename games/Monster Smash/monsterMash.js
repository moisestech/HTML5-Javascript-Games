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

    //The monster's updateAnimation method
    updateAnimation: function() {  
    	this.sourceX = Math.floor(this.currentFrame % this.COLUMNS) * this.SIZE;
    	this.sourceY = Math.floor(this.currentFrame / this.COLUMNS) * this.SIZE;
         
	    //Figure out the monster's state
	    if(this.state !== this.HIT) {
	    	if(this.waitTime > 0  || this.waitTime === undefined) {
	        	this.state = this.HIDING;
	      	} else {
	        	this.state = this.JUMPING;
	      	}
	    }
	    
	    //Change the behaviour of the animation based on the state
	    switch(this.state) {
	    	case this.HIDING:
	        	this.currentFrame = 0;
	        	this.waitTime--;
	        	break;
	        
	      	case this.JUMPING:
	        	//If the last frame has been reached, set forward to false
	    		if(this.currentFrame === this.numberOfFrames) {
	          		this.forward = false;
	        	}

	        	//If the first frame has been reached, set forward to true
	        	if(this.currentFrame === 0 && this.forward === false) {
	          		//Set forward to true, find a new waitTime,
	          		//set the state to HIDING and break the switch statement
	         		this.forward = true;
	          		this.findWaitTime();
	          		this.state = this.HIDING;
	          		break;
	        	}

	        	//Add 1 to currentFrame if forward is true, subtract 1 if it's false
	    	  	if(this.forward) {
	      	  		this.currentFrame++;
	      		} else {
	      	  		this.currentFrame--;
	      	  	}
	      		break;
	        
	      	case this.HIT:
			    //Set the current frame to the last one on the tilesheet
			    //to display the explosion image
	        	this.currentFrame = 6;
	        
	        	//Update the resetCounter by 1
			    this.resetCounter++;
			    
			    //Reset the animation if the resetCounter equals the timeToReset
			    if(this.resetCounter === this.timeToReset) {
			      	this.state = this.HIDING;
	          		this.forward = true;
	          		this.currentFrame = 0;
	          		this.resetCounter = 0;
	          		this.findWaitTime();
			    	}
	        	break;
    	}
  	}
};

// Load the animation tile sheet
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = monster.image;

// The number of rows and columns and the size of each cell
var rows = 3;
var columns = 4;
var size = monster.size;
var space = 10;

// Arrays for the monsters, their canvases and their drawing surfaces
var monsterObjects = [];
var monsterCanvases = [];
var monsterDrawingSurfaces = [];

// A variable to store the animation interval
var interval;

/* -- FUNCTIONS -- */

function loadHandler() {
	// Plot the grid of monsters
	buildMap();

	// Start the animation loop
	updateAnimation();
}

function buildMap() {
	for (var row=0; row < rows; row++) {
		for (var column=0; column < columns; column++) {

			// Create a single new monster object,
			// Give it a random time, display its
			// first frame and push it into an array
			var newMonsterObject = Object.create(monster);
			newMonsterObject.findWaitTime();
			monsterObjects.push(newMonsterObject);

			console.log("pushed new monster object");
			// Create a canvas tag for each monster
			// and add it to the <div id="stage"> tag,
			// position it, add a mousedowm listener
			// and push it into an array
			var canvas = document.createElement("canvas");
			canvas.setAttribute("width", size);
			canvas.setAttribute("height", size);
			stage.appendChild(canvas);
			canvas.style.top = row * (size + space) + "px";
			canvas.style.left = column * (size + space) + "px";
			canvas.addEventListener("mousedown", mousedownHandler, false);
			monsterCanvases.push(canvas);

			// Create a drawing surface and push
			// it into the drawingSurfaces array
			var drawingSurface = canvas.getContext("2d");
			monsterDrawingSurfaces.push(drawingSurface);
		}
	}
}

function updateAnimation() { 
  //Set a timer to call updateAnimation every 120 milliseconds
  setTimeout(updateAnimation, 120);
  
  //Loop through all the monsters in
  //the monsters array and call their
  //updateAnimation methods
  for(var i = 0; i < monsterObjects.length; i++) {
    monsterObjects[i].updateAnimation();
  }
  
  //Render the animation
  render();
}

function mousedownHandler(event) {
	// Find out which canvas was clicked
	var theCanvasThatWasClicked = event.target;

	// Search the monsterCanvases array for a
	// canvas that matches the one that's
	// been clicked
	for (var i=0; i < monsterCanvases.length; i++) {
		if (monsterCanvases[i] === theCanvasThatWasClicked) {
			var monster = monsterObjects[i]
			if (monster.state === monster.jumping) {
				monster.state = monster.hit;
			}
		}
	}
}

function render() {
	for (var i=0; i < monsterObjects.length; i++) {
		//Get reference to the current monster and drawing surface
		var monster = monsterObjects[i];
		var drawingSurface = monsterDrawingSurfaces[i];

		// Clear the current monster's canvas
		drawingSurface.clearRect(0,0, size, size);

		// Draw the monster's current animation frame
		drawingSurface.drawImage (
			image,
			monster.sourceX, monster.sourceY, size, size, 0, 0, size, size
		);
	}
}



