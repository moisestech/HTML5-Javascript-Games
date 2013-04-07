// KEY object with keyCodes
var KEY = {
	UP: 38,
	DOWN: 40,
	W: 87,
	S: 83
}

// global variable array to store the key pressed status
// inside the pingPong object
var pingPong = {};
pingPong.pressedKeys = [];

// on DOM ready
$(function(){
	// set interval to call gameloop every 30 milliseconds
	pingPong.timer = setInterval(gameLoop, 30);

	// mark down what key is down and up into an array called
	// "pressedKeys"

	$(document).keydown(function(e) {
		pingPong.pressedKeys[e.which] = true;
	});

	$(document).keyup(function(e) {
		pingPong.pressedKeys[e.which] = true;
	});

	function gameLoop() {
		movePaddles();
	}

	function movePaddles() {
		// use our custom timer to continuously check if a key
		// is pressed.

		if (pingPong.pressedKeys[KEY.UP]) {
			// arrow-up, move the paddle B up 5 pixels
			var top = parseInt($("#paddleB").css("top"));
			$("#paddleB").css("top", top-5);
		}

		if (pingPong.pressedKeys[KEY.DOWN]) {
			// arrow-down, move the paddle B down 5 pixels
			var top = parseInt($("#paddleB").css("top"));
			$("#paddleB").css("top", top+5);
		}

		if (pingPong.pressedKeys[KEY.W]) {
			// w, move the paddle A up 5 pixels
			var top = parseInt($("#paddleA").css("top"));
			$("#paddleA").css("top", top-5);
		}

		if (pingPong.pressedKeys[KEY.S]) {
			// s, move the paddle A down 5 pixels
			var top = parseInt($("#paddleA").css("top"));
			$("#paddleA").css("top", top+5);
		}
	}
});