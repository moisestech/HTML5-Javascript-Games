console.log("stuff!");

//Create an array of Natural Wonders
var mb_logos = [
	"imgs/MaybeLegal_Logos/MaybeLegal_CartoonNetwork.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_Channel.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_Cocacola.png",
	"imgs/MaybeLegal_Logos/MaybeLegal_Demonoid.png",
	"imgs/MaybeLegal_LogosMaybeLegal_Disney.png",
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



//Select a random item from each array list
var random_mb_logo = mb_logos[Math.floor(Math.random()* 12)];



//Select the image templates from the dom tree
// and replace with random item 

		// wonder Image
		var mb_title = $(".title");
		console.log(mb_title);
		mb_title.css({"top": "100px"});
		// mb_title.style.backgroundColor="#f3f3f3";
		//console.log(something);








