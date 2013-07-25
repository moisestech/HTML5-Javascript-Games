// A $ (document).ready block
$(document).ready(function() {

	console.log("MaybeLegal Shop3D!");

	// Check if jQuery and jQueryUI have loaded
	if (jQuery) {  
		console.log("jQuery is loaded"); 
	} else {
		console.log("jQuery is not loaded");
	}

	// var shirt_index_wrapper = $('.shirt-index-wrapper');
	// console.log(shirt_index_wrapper);

	// var shirtArray = $('.shirt-index-wrapper').find('img').map(function(){
	// 	return this.src;
	// }).get();

	// var shirts = $('.shirt-index-wrapper').find('img');

	// console.log(shirts[0].src.substring(34, shirts[0].src.length));

	//$('body').load(function() {
	//	$(this).animate({"opacity": 1}, 2000);
	//});

var logoArray = [];
var gifArray = [];

// CONSTRUCTORS
function mb_logo(imgSrc, width) {
	this.width = width;
	this.imgSrc = imgSrc;
}

function mb_gif(imgSrc, totalTime) {
	this.totalTime = totalTime;
	this.imgSrc = imgSrc;
}

var mb_logos_width = [
]

var mb_logos_imgSrc = [
	"imgs/MaybeLegal_Logos/MaybeLegal_CartoonNetwork.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_Channel.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_Cocacola.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_Demonoid.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_Disney.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_DunkinDonuts.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_Ebay.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_Hermes.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_Hollister.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_IBM.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_LouisVuiton.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_Microsoft.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_Monster.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_MTV.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_Nickelodeon.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_PirateBay.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_Puma.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_UrbanOutfitters.png",
]

var mb_animGif_time = [
	6000,
	5600,
	3700,
	4000,
	5600,
	3200
]

var mb_animGif = [
	"imgs/gifs/cartoon_gif_comp1.gif",
	"imgs/gifs/cartoon_gif_comp2.gif",
	"imgs/gifs/cartoon_gif_comp3.gif",
	"imgs/gifs/cartoon_gif_comp4.gif",
	"imgs/gifs/cartoon_gif_comp5.gif",
	"imgs/gifs/cartoon_gif_comp6.gif"
]

// 

for (i = 0; i < mb_logos_imgSrc.length; i++) {
	var logo = new mb_logo(mb_logos_imgSrc[i], "200px");
	logoArray.push(logo);
}

for (i = 0; i < mb_animGif.length; i++) {
	var gif = new mb_gif(mb_animGif[i], mb_animGif_time[i]);
	gifArray.push(gif);
}

//console.log(logoArray);
console.log(gifArray);


// Select a random item from each array list
var random_mb_logo = logoArray[Math.floor(Math.random()* 18)];
var random_mb_gif = gifArray[Math.floor(Math.random()* 6)];


//replace gif animation
var currentGif_inner = $(".mb-gif");
var currentGif_wrapper = $(".mb-gif-wrapper");

currentGif_inner.attr("src", random_mb_gif.imgSrc);

console.log(currentGif_inner.src);
currentGif_inner.load( function() {
		console.log("fired");
		currentGif_inner.css({"opacity": 1}, 100);

		setTimeout( function() {
			currentGif_wrapper.animate({"opacity": 0
				, "zIndex": -20}, 200)
		}, random_mb_gif.totalTime);
	}
);




//Select the image templates from the dom tree
// and replace with random item
		var currentLogoHeight;
		var mb_menu = $(".mainMenu");

		var mb_title = $(".title");
		//mb_title.css({"backgroundImage": "url(" + random_mb_logo.imgSrc + ")"});
		
		var logo_temp_image = document.createElement("img");
		logo_temp_image.src = random_mb_logo.imgSrc;
		logo_temp_image.className = "logo-temp-Image";
		logo_temp_image.style.width = random_mb_logo.width;
		mb_title.append(logo_temp_image);
		logo_temp_jQuery = $(logo_temp_image);

		logo_temp_image.onload = function() {
    		//alert('Width: ' + logo_temp_image.width +', Height: ' + logo_temp_image.height);
    		console.log(logo_temp_jQuery.css("height"));
    		mb_menu.css({"top": (parseInt(logo_temp_jQuery.css("height")) + 20) + "px"})
    		console.log(mb_menu.css("top"));
    		//currentLogoHeight = (logo_temp_jQuery.css("height"));
		}

		
});