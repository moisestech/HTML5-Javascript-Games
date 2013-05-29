$(document).ready(function() {
	console.log($("#gameSquare").css("width"));
	console.log("ready!");

	var widthInput = $("#widthInput");
	var heightInput = $("#heightInput");


	$("#target").submit(function() {
		alert(widthInput.val() + heightInput.val());
		return false;
	});

});

