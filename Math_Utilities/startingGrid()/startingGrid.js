var canvas = document.getElementById("canvas");
canvas.width = canvas.height = 400;


// get 2d context
var context = canvas.getContext("2d");

//objects
var object1 = {x:0, y:0, width: 25, height: 25, color: "red"};

//where the grid starts
var startX = 10;
var StartY = 10;

//values to keep track what row we're on
var row = 0;
var maxColumns = 10;
var total = 50;
var padding = 5;

//for to render grid
for (var i = 0; i < total; i++ ) {
//render logic
context.fillStyle = object1.color;
context.fillRect(i * (object1.width + padding), i * (object1.height + padding), object1.width, object1.height);
}