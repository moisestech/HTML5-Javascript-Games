$(document).ready(function() {
	//console.log($("#gameSquare").css("width"));
	console.log("ready!");

	var widthInput = $("#widthInput");
	var heightInput = $("#heightInput");


	$("#target").submit(function() {
		alert(widthInput.val() + heightInput.val());
		return false;
	});

	var htmlBody = $("body");
	htmlBody.append("<div id='gameSquare'></div>");

	var gameSquare = $("#gameSquare");
	var timer = $("#timer");
	var countDownWidth = timer.css("width");
	

	//setInterval(createRandomMeasurements, 5000);
	setInterval(timerCountDown, 100);
	function timerCountDown() {
		var countDownWidth = timer.css("width");
		countDownWidth = countDownWidth.substring(0, countDownWidth.length - 2);
		countDownWidth -= 2;
		timer.animate({width: countDownWidth}, 100);
	}

	setInterval(checkTimer, 1000);
	function checkTimer () {
		if (countDownWidth < 0) {
			createRandomMeasurements();
		}		
	}

		function createRandomMeasurements() {
			var widthPixel = Math.floor(Math.random()*200);
			var heightPixel = Math.floor(Math.random()*200);

			gameSquare.animate({width: widthPixel, height: heightPixel}, 300);
		}
		



});

