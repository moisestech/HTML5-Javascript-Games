// A $( document ).ready() block.
$( document ).ready(function() {

	console.log("enlargeImage!");

	// CHeck if jQuery and jQueryUI have loaded
	if (jQuery) {  
		console.log("jQuery is loaded"); 
	} else {
		console.log("jQuery is not loaded");
	}

	if (jQuery.ui) {
		console.log("jQueryUI is loaded");
	} else {
		console.log("UI is not loaded");
	}

	// onHover state for square

	$(".square").hover(
		function () {
			//$(this).animate({height:"400px", width: "400px", margin: "-200px 0 0 -200px"}, 100);
			$(this).animate({height:"110px", width: "110px", margin: "0"}, 100);

		},
		function () {
			//$(this).animate({height:"200px", width: "200px", margin: "-100px 0 0 -100px"}, 100);
			$(this).animate({height:"90px", width: "90px", margin: "px"}, 100);

		}
	);

	var  $square = $(".square");
	console.log($square);

});