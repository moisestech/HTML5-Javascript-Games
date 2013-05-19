// setup canvas for demo
var canvas = document.getElementById('canvas');
canvas.width = 400;
canvas.height = 400;
var context = canvas.getContext('2d');

var object1 = {x:30, y:30, width: 100, height: 100 };
var object2 = {x:10, y:30, width: 25, height: 25 };

// Place holders for mouse x,y position
var mouseX = 0;
var mouseY = 0;

// Test for collision between an object and a point
function contains(targetA, targetB) {
  return !(targetB.x > (targetA.x + targetA.width) || 
           (targetB.x + targetB.width) < targetA.x || 
           targetB.y > (targetA.x + targetA.height) ||
           (targetB.y + targetB.height) < targetA.y);
}

// Loop
setInterval(onTimerTick, 33);

// Render Loop
function onTimerTick() {
    
    // update object2 to mouse
    object2.x = mouseX - (object2.width * .5);
    object2.y = mouseY - (object2.height * .5);
    
    // Clear the canvas
    canvas.width = canvas.width;
    var collision = contains(object1, object2);
    
    context.fillStyle = "Red";
    context.font="18px sans-serif";
    context.fillText("Collision "+collision +" Mouse ("+mouseX+","+mouseY+")", 20, 20);
    
    context.fillStyle = "blue";
    context.fillRect (object1.x,object1.y,object1.width,object1.height);
    
    context.fillStyle = collision ? "red" : "green";
    context.fillRect (object2.x,object2.y,object2.width,object2.height);
}

// Update mouse position
canvas.onmousemove = function(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
}





