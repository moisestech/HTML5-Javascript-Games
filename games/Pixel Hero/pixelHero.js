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

	setInterval(createRandomMeasurements, 5000);
	//setInterval(timerCountDown, 1000);

	countDownWidth = timer.css("width");

	countDownWidth = countDownWidth.substring(0, countDownWidth.length - 2);

	console.log(countDownWidth);
		//function timerCountDown() {
			//var countDownWidth = timer.css("width") - 10;
			//timer.animate({width: countDownWidth}, 300);
		//}

		function createRandomMeasurements() {
			var widthPixel = Math.floor(Math.random()*200);
			var heightPixel = Math.floor(Math.random()*200);

			gameSquare.animate({width: widthPixel, height: heightPixel}, 300);
		}
		



});

