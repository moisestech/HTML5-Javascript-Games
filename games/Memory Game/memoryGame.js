// a global object to hold all global variables related to the game.
//var matchingGame = {};

// all possible values for each card in deck
/*matchingGame.deck = [
	"cardAK", "cardAK",
	"cardAQ", "cardAQ",
	"cardAJ", "cardAJ",
	"cardBK", "cardBK",
	"cardBQ", "cardBQ",
	"cardBJ", "cardBJ",
];*/

//every code inside $(function(){}) will be run
// after the DOM is loaded and ready.
//$(function() {
	//shuffling the deck
	//matchingGame.deck.sort(shuffle);

	// clone 12 copies of the card
	/*for(var i=0; i<11; i++) {
		$(".card:first-child").clone().appendTo("#cards");
	}


})*/

$(function(){
	$("cards").children().each(function(index) {
		//listen the click event on each card DIV element.
		$(this).click(function(){
			//add the class "card-flipped".
			// the browser will animate the styles between current
			//state and card-flipped state.
			$(this).toggleClass("card-flipped")
		});
	});
});