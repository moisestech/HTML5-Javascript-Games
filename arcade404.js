//disables scrolling
document.body.scroll = "no";
document.body.style.overflow = 'hidden';
document.height = window.innerHeight;


//Create blink function for working arcades
var currentBlink = "images/arcades/arcade01_Working.png";

var arcade01 = document.getElementById("arcade01");


setInterval(function() {
	arcade01.setAttribute("src", currentBlink);

	currentBlink = currentBlink === "images/arcades/arcade01_Working.png" ? "images/arcades/arcade01.png": "images/arcades/arcade01_Working.png";
}, 1000);