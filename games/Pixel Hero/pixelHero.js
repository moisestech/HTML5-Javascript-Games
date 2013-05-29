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
	htmlBody.append("<div id='gameSquare'>Here you go</div>");

	var gameSquare = $("#gameSquare");

	setInterval(createRandomMeasurements, 3000);

		function createRandomMeasurements() {
			var widthPixel = Math.floor(Math.random()*200);
			var heightPixel = Math.floor(Math.random()*200);

			console.log("Width: " + widthPixel +  ", Height: " + heightPixel);
		}
		



});

