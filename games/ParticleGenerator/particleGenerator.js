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
	
	for (i=0; i<10; i++) {
		// Create a particle Object
	var particle = {
		// store the X and y position in a varible
		xPosition: 300,
		yPosition: 300,
		size: 20,

		// store the speed of the square in a variable
		xSpeed: Math.random()*5 * randomPlusMinusX(),
		ySpeed: Math.random()*5 * randomPlusMinusY()
		}

	particleArray.push(particle);	
	}

	
	//console.log(particleArray.length);

	// to create an animation the screen is cleared beofre reDraw
	drawingSurface.clearRect(0, 0, 600, 600);

	//create a loop to draw each item in the particleArray
	for (var i = 0; i<particleArray.length; i++) {
		particle = particleArray[i];

		var Red = Math.round(Math.random()*255);
		var Green = Math.round(Math.random()*255);
		var Blue = Math.round(Math.random()*255);

		drawingSurface.fillStyle = "rgb(" + Red + "," + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + ")";
		drawingSurface.fillRect ( particle.xPosition, particle.yPosition, particle.size, particle.size);
		// create a square on pixel over every time
		particle.xPosition += particle.xSpeed;
		particle.yPosition += particle.ySpeed;

		// Shrink over time
		particle.size = particle.size * 0.98;

	}

}

// Call the draw function over and over using setInterval
setInterval(draw, 30);


