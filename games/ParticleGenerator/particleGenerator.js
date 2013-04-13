// Set up the canvas and drawing surface
var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");

//create an array to store particles in
var particleArray = [];


function draw() {
	// Create a particle Object
	var particle = {
		// store the X and y position in a varible
		xPosition: 150,
		yPosition: 150,

		// create a random positive or negative integer
		randomPlusMinusX: Math.round(Math.random()) * 2 -1,
		randomPlusMinusY: Math.round(Math.random()) * 2 -1,

		// store the XSpeed and YSpeed of the square in a variable
		xSpeed: undefined,
		ySpeed: undefined,

		// calculate xSpeed and ySpeed
		findXSpeed: function() {
			this.xSpeed = Math.round(Math.random()*10) * this.randomPlusMinusX;
			return this.xSpeed;
		},
		

		findYSpeed: function() {
			this.ySpeed = Math.round(Math.random()*10) * this.randomPlusMinusY;
			return this.ySpeed;
		}
	}

	particleArray.push(particle);

	// to create an animation the screen is cleared beofre reDraw
	drawingSurface.clearRect(0, 0, 300, 300);

	//create a loop to draw each item in the particleArray
	for (var i = 0; i<particleArray.length; i++) {
		particle = particleArray[i];

		drawingSurface.fillStyle = "cyan";
		drawingSurface.fillRect ( particle.xPosition, particle.yPosition, 20, 20);
		// create a sqaure on pixel over every time
		particle.xPosition += particle.findXSpeed();
		particle.yPosition += particle.findYSpeed();
	}

}

// Call the draw function over and over using setInterval
setInterval(draw, 30);


