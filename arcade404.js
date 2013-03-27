//disables scrolling
document.body.scroll = "no";
document.body.style.overflow = 'hidden';
document.height = window.innerHeight;


//need to make function for all wroking arcades to go through

//Create blink function for working arcade01
var currentBlink = "images/arcades/arcade01_Working.png";

var arcade01 = document.getElementById("arcade01");


setInterval(function() {
	arcade01.setAttribute("src", currentBlink);

	currentBlink = currentBlink === "images/arcades/arcade01_Working.png" ? "images/arcades/arcade01.png": "images/arcades/arcade01_Working.png";
}, 1000);


//Create blink function for working arcade03
var currentBlink2 = "images/arcades/arcade03_Working.png";

var arcade03 = document.getElementById("arcade03");


setInterval(function() {
	arcade03.setAttribute("src", currentBlink2);

	currentBlink2 = currentBlink2 === "images/arcades/arcade03_Working.png" ? "images/arcades/arcade03.png": "images/arcades/arcade03_Working.png";
}, 1000);