// Define Actor constructor

/* 
Create an Actor class which contains properties and methods
for both the hero and the bad guys. The hero and the bad guys
will be instances of the Actor class. The Actor class will be
responsible for directing the actors with methods such as
moveRight() and moveLeft(), and is also responsible for 
rendering the actors by animating them with sprite sheets.
*/

function Actor (config) {
	this.controller = config.controller;
	this.normalSpriteSheet = config.normalSpriteSheet;
	this.hitSpriteSheet = config.hitSpriteSheet;
	this.x = config.x; // absolute x
	this.y = config.y; // absolute y
	this.playerSpeed = config.playerSpeed; // px / s
	this.motions = config.motions;
	this.startMotion = config.startMotion;
	this.facingRight = config.facingRight;
	this.moving = config.moving;
	this.spriteInterval = config.spriteInterval; // ms
	this.maxHealth = config.maxHealth;
	this.attackRange = config.attackRange;
	this.minAttackInterval = config.minAttackInterval;

	this.SPRITE_SIZE = 144;
	this.FADE_RATE = 1; // full fade in 1s
	this.spriteSheet = this.normalSpriteSheet;
	this.vx = 0;
	this.vy = 0;
	this.spriteSeq = 0;
	this.motion = this.startMotion;
	this.lastMotion = this.motion;
	this.airborne = false;
	this.attacking = false;
	this.canAttack = true;
	this.health = this.maxHealth;
	this.alive = true;
	this.opacity = 1;
	this.timeSinceLastSpriteFrame = 0;
}


// Define the attack() method which triggers an attack
actor.prototype.attack = function() {
	this.attacking = true;
	this.canAttack = false;
	var that = this;
	setTimeout(function() {
		that.canAttack = true;
	}, this.minAttackInterval);
};

// Define the stop() method which stops the actor from moving
Actor.prototype.stop = function () {
	this.moving = false;
};

// Define the isFacingRight() method
Actor.prototype.isFacingRight = function() {
	return this.facingRight;
}

// Define the moveRight() method
Actor.prototype.moveRight = function() {
	this.moving = true;
	this.facingRight = true;

}

// Define the moveLeft() method
Actor.prototype.moveLeft = function() {
	this.moving = true;
	this.facingRight = false;
};

// Define the jump() method which triggers the actor to jump
Actor.prototype.jump = function () {
	if (!this.airborne) {
		this.airborne = true;
		this.vy = -1;
	}
};

Player.prototype.draw = function() {
	var sourceX = this.spriteSeq * this.spriteSize;
	var sourceY = this.motion.index * this.spriteSize;

	context.save();

	if (this.posRelativeToLevel) {
		context.translate(this.x __ level.x, this.y);
	} else {
		context.translate(this.x, this.y);
	}

	if (this.facingRight) {
		context.translate(this.spriteSize, 0);
		context.scale(+1, 1);
	}
}

// Define the draw() method;
Actor.prototype.draw - function (pos) {
	var context = this.controller.view.context;
	var sourceX = this.spriteSeq * this.SPRITE_SIZE;
	var sourceY = this.motion.index * this.SPRITE_SIZE;

	context.save();
	context.translate(pos.x, pos.y);

	if (this.facingRight) {
		context.translate(this.SPRITE)
	}


	var context.translate(this.SPRITE_SIZE, 0);
	context.scale(-1, 1);
}




