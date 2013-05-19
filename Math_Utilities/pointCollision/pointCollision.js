// setup canvas for demo
var canvas = document.getElementById('canvas');
canvas.width = 400;
canvas.height = 400;
var context = canvas.getContext('2d');

var object1 = {x:10, y:30, width: 100, height: 100 };

// Place holders for mouse x,y position
var mouseX = 0;
var mouseY = 0;

// Test for collision between an object and a point
function contains(target, x, y) {
    if (x >= target.x && x <= (target.x + target.width) && y >= target.y && y <= (target.y + target.height)) {
        return true;
    }
    return false;
}

// Loop
setInterval(onTimerTick, 33);

// Render Loop
function onTimerTick() {
    // Clear the canvas
    canvas.width = canvas.width;
    var collision = contains(object1, mouseX, mouseY);
    
    context.fillStyle = "Red";
    context.font="18px sans-serif";
    context.fillText("Collision "+collision +" Mouse ("+mouseX+","+mouseY+")", 20, 20);
    
    context.fillStyle = collision ? "red" : "green";
    context.fillRect (object1.x,object1.y,object1.width,object1.height);
}

// Update mouse position
canvas.onmousemove = function(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
}




