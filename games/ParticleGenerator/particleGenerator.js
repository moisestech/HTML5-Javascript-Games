// Set up the canvas and drawing surface
var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");

//create an array to store particles in
var particleArray = [];

// create a random positive or negative integer
function randomPlusMinusX() {
	var randomPosNegX = Math.round(Math.random()) * 2 -1;
	return randomPosNegX;
}

function randomPlusMinusY() {
	var randomPosNegY = Math.round(Math.random()) * 2 -1;
	return randomPosNegY;
}




//console.log("Speed: " + particle.xSpeed);


function draw() {
	// Create a particle Object
	var particle = {
		// store the X and y position in a varible
		xPosition: 150,
		yPosition: 150,
		size: 20,

		// store the speed of the square in a variable
		xSpeed: Math.floor(Math.random()*10 + 5) * randomPlusMinusX(),
		ySpeed: Math.floor(Math.random()*10 + 5) * randomPlusMinusY()
	}

	particleArray.push(particle);

	// to create an animation the screen is cleared beofre reDraw
	drawingSurface.clearRect(0, 0, 300, 300);

	//create a loop to draw each item in the particleArray
	for (var i = 0; i<particleArray.length; i++) {
		particle = particleArray[i];

		drawingSurface.fillStyle = "red";
		drawingSurface.fillRect ( particle.xPosition, particle.yPosition, particle.size, particle.size);
		// create a square on pixel over every time
		particle.xPosition += particle.xSpeed;
		particle.yPosition += particle.ySpeed;

		// Shrink over time
		particle.size = particle.size * 0.9;
	}

}

// Call the draw function over and over using setInterval
setInterval(draw, 30);


