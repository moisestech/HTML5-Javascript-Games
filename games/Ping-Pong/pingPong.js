//create jquery dom ready function
$(function() {
	//select paddleA and paddleB divs
	$("#paddleB").css("top", "20px");
	$("#paddleA").css("top", "60px");

	//create KEY object
	var KEY = {
		UP: 38,
		DOWN: 40,
		W: 87,
		S: 83
	}

	$(document).keydown(function(e) {
		switch(e.which) {
			case KEY.UP: //arrow-up
			// get the current paddle B's top value in Int type
			var top = parseInt($("#paddleB").css("top"));
		}
	})
});