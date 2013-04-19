var canvas = null;
var context = null;
var level = {};
var healthBar = {};
var hero = {};
var badGuys = [];
var myAnimation = null;
var boundsData = null; // image data for the boundary map
var images = {}; // hash of images
var leftKeyup = true;
var rightKeyup = true;
var state = states,INIT;

// == INITIALIZE == //

window.onload = function() {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");

	addKeyboardListeners();

	var sources = {
		levelBounds: "img/level_bounds.png",
		level: "img/level.png",
		heroSprites: "img/hero_sprites.png",
		heroHitSprites: "img/hero_hit_sprites.png",
		badGuySprites: "img/bad_guy_sprites.png",
		badGuyHitSprites: "img/bad_guy_hit_sprites.png",
		background: "img/background",
		readyScreen : "img/readyScreen.png",
		gameoverScreen: "img/gameoverScreen.png",
		winScreen: "img/winScreen.png"
	};
}