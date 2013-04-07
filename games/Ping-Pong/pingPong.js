// KEY object with keyCodes
var KEY = {
	UP: 38,
	DOWN: 40,
	W: 87,
	S: 83
}

// a global object to store all global variable we use for the game
var pingPong = {}

// an array to remember which key is pressed and which is not.
pingPong.pressedKeys = [];

// a ball oject inside pingPong that stores moving key value pairs
pingPong.ball = {
	speed: 5,
	x: 150,
	y: 100,
	directionX: 1,
	directionY: 1
}

// on DOM ready
$(function(){
	// set interval to call gameloop every 30 milliseconds
	pingPong.timer = setInterval(gameLoop, 30);

	// mark down what key is down and up into an array called
	// "pressedKeys"
	$(document).keydown(function(e){
		pingPong.pressedKeys[e.which] = true;
		//console.log(pingPong.pressedKeys);
    });
    $(document).keyup(function(e){
    	pingPong.pressedKeys[e.which] = false;
    	//console.log(pingPong.pressedKeys);
	});
});

function gameLoop() {
		moveBall();
		movePaddles();
}

function moveBall() {
	//move the ball in every 30 milliseconds
	// reference useful  variables
	var playgroundHeight = parseInt($("#playground").height());
	var playgroundWidth = parseInt($("#playground").width());
	var ball = pingPong.ball;

	// check playground boundary
	// check bottom edge
	if (ball.y +ball.speed*ball.directionY > playgroundHeight) {
		ball.directionY = -1;
	}
	// check top edge
	if (ball.y +ball.speed*ball.directionY < 0) {
		ball.directionY = 1;
	}

	// check right edge
	if (ball.x + ball.speed * ball.directionX > playgroundWidth) {
		
		// player B lost
		// reset the ball
		ball.x = 250;
		ball.y = 100;
		$("#ball").css({
			"left": ball.x,
			"top": ball.y
		});
		ball.directionX = -1;
	}
	// check left edge
	if (ball.x + ball.speed * ball.directionX < 0) {
		
		// player A lost
		// reser the ball;
		ball.x = 150;
		ball.y = 100;
		$("#ball").css({
			"left": ball.x,
			"top": ball.y
		});
		ball.directionX = 1;
	}

	// check the moving paddle here, later.
	//check left paddle
	var paddleAX = parseInt($("#paddleA").css("left")) + parseInt($("#paddleA").css("width"));
	var paddleAYBottom = parseInt($("#paddleA").css("top")) + parseInt($("#paddleA").css("height"));
	var paddleAYTop = parseInt($("#paddleA").css("top"));

	if (ball.x + ball.speed * ball.directionX < paddleAX) {
		if (ball.y + ball.speed * ball.directionY <= paddleAYBottom &&
			ball.y + ball.speed * ball.directionY >= paddleAYTop) {
			ball.directionX = 1;
		}
	}

	// check right paddle
	var paddleBX = parseInt($("#paddleB").css("left"));
	var paddleBYBottom = parseInt($("#paddleB").css("top")) + parseInt($("#paddleB").css("height"));
	var paddleBYTop = parseInt($("#paddleB").css("top"));

	if (ball.x + ball.speed * ball.directionX >= paddleBX) {
		if (ball.y + ball.speed * ball.directionY <= paddleBYBottom &&
			ball.y + ball.speed * ball.directionY >= paddleBYTop) {
			ball.directionX = -1;
		}
	}

	ball.x += ball.speed * ball.directionX;
	ball.y += ball.speed * ball.directionY;

	// actually move the ball with speed and direction
	$("#ball").css({
		"left" : ball.x,
		"top" : ball.y
	});
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