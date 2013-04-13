// Set up the canvas and drawing surface
var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");

// store the X position in a varible
var xPosition = 150;

function draw() {


	drawingSurface.fillStyle = "cyan";
	drawingSurface.fillRect ( xPosition, 150, 20, 20);
}


