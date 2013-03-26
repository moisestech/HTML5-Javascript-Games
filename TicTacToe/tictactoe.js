//Create tic-tac-toe board array
var board = [];

//Winning Combinations array
winningCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

//player variables
playerX = "X";
playerO = "O";

playerXscore = 0;
playerOscore = 0;

var playerXDiv = document.createElement("div");
playerXDiv.setAttribute("id", playerX);
playerXDiv.innerHTML = "player X score: " + playerXscore;
document.body.appendChild(playerXDiv);

var playerODiv = document.createElement("div");
playerODiv.setAttribute("id", playerO);
playerODiv.innerHTML = "player O score: " + playerOscore;
document.body.appendChild(playerODiv);



//Select board div
var boardDiv = document.querySelector("#board");

//Create nine empty spaces in the board array
for (i=0; i < 9; i++) {
	board[i] = i;
	//console.log(board);
}

//Create nine elements with an EventListener
for (i=0; i < board.length; i++) {
	var square = document.createElement("div");
	boardDiv.appendChild(square);
	square.setAttribute("id", i);
	square.setAttribute("class", "square");
	square.innerHTML = "_";
	square.addEventListener("click", clickHandler, false);
}

var turn = 0;

/* -- functions -- */


//clickHandler
function clickHandler() {
	//Check wether its playerX's turn or playerO's turn
	if (turn % 2 === 0) {
		var player = playerX;
	} else {
		var player = playerO;
	}
	turn ++;

	var arrayPosition = this.id;
	//console.log("arrayPosition from .id is: " + arrayPosition);
	board[arrayPosition] = player;
	console.log(board[arrayPosition] + " " + arrayPosition);
	this.innerHTML = player;

	//remove event listener for that square
	this.removeEventListener("click", clickHandler, false);

	checkTicTacToe();
}

function checkTicTacToe () {
	for (var i = 0; i < winningCombinations.length; i++) {
		
		//Create three variables that check if winning combinations match the board array
		var k = winningCombinations[i][0];
		var l = winningCombinations[i][1];
		var m = winningCombinations[i][2];
		//console.log( "k:" + k + " l:" + l + " m:" + m);

		if (board[k] === playerX && board[l] === playerX && board[m] === playerX) {
			var win = document.createElement("div");
			win.setAttribute("id", "win");

			document.body.appendChild(win);
			win.innerHTML = playerX + " WIN!";

			playerXscore++;
			playerXDiv.innerHTML = "player X score: " + playerXscore;
			endGame();

		} else if (board[k] === playerO && board[l] === playerO && board[m] === playerO) {
			var win = document.createElement("div");
			win.setAttribute("id", "win");

			document.body.appendChild(win);
			win.innerHTML = playerO + " WIN!";

			playerOscore++;
			playerODiv.innerHTML = "player O score: " + playerOscore;
			endGame();
		}
	}
}

function endGame() {
	// get board childNodes
	var boardNodes = document.getElementById("board").childNodes;
	
	for (i=0; i <boardNodes.length; i++) {
		boardNodes[i].removeEventListener("click", clickHandler, false);
	}
}



//create end function
//create draw function






