var canvas = document.getElementById("canvas");
canvas.width = 400;
canvas.height = 400;

//"context" where you can draw things
var context = canvas.getContext("2d");

var object1 = {x:30, y:30, width: 200, height:200, color:"red"};
var object2 = {x:0, y:0, width: 25, height:25, color:"yellow"};

// Centering the child w2 to the parent w1
//(w1 - w2) * .5
object2.x = ((object1.width - object2.width) * .5) + object1.x;
object2.y = ((object1.height - object2.height) * .5) + object1.y;
               
// draw
context.fillStyle = object1.color;
context.fillRect(object1.x, object1.y, object1.width, object1.height);

context.fillStyle = object2.color;
context.fillRect(object2.x, object2.y, object2.width, object2.height);

