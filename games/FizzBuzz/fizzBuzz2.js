$(document).ready(function(){

//START SCREEN
		// Entire Start Screen
		var entireStartScreen = document.getElementById("startScreen");

	//screen options
		// buttons
		var gameStart = document.getElementById("buttonPositioning1");
		var gameRules = document.getElementById("buttonPositioning2");
		//var gameSettings = document.getElementById("buttonPositioning3");

			//main game animation
			var animation1 = $("#animation1");
			var animation2 = $("#animation2");
			var animation3 = $("#animation3");

			// main game buttons
			var fizzButton1 = document.getElementById("fizzButton1");
			var fizzBuzzButton2 = document.getElementById("fizzBuzzButton2");
			var buzzButton3 = document.getElementById("buzzButton3");
			var spacebarButton4 = document.getElementById("spacebarButton4");

				//onEvent Animation
				var gameScene = $("#gameScene");


		//create clickEvent listener
		gameStart.addEventListener("click", startHandler, false);
		gameRules.addEventListener("click", rulesHandler, false);
		//gameSettings.addEventListener("click", settingsHandler, false);

	/* -- START SCREEN functions -- */
	function startHandler() {
		console.log("Start screen button clicked!");
		entireStartScreen.style.display = "none";

			//Begin Animation
			animation1.stop(true, true).animate({right:"toggle", opacity:"toggle"}, 1000).fadeOut(100, nextAnimation2);

	}
			//animation2 callback
			function nextAnimation2 () {
				console.log("next animation!");
				animation2.stop(true, true).animate({right:"toggle", opacity:"toggle"}, 1000).fadeOut(100, nextAnimation3);
			}

			//animation3 callback
			function nextAnimation3 () {
				console.log("next animation!");
				animation3.stop(true, true).animate({right:"toggle", opacity:"toggle"}, 1000).fadeOut(100, loadAddEventHandlers);
			}



	function rulesHandler() {
		console.log("Rules button clicked!");
	}

	function settingsHandler() {
		console.log("Settings screen button clicked!");
	}




/* -- MAIN GAME -- */

	//global variables
		// Arrow key codes
			var fizzBuzz = 38; //Up
			var fizz = 37; //Left
			var buzz = 39; //Right
			var spacebar = 32;

		//Displayed number on the DOM
			var currentFizzBuzzNumber = 0;
			console.log(currentFizzBuzzNumber);

		//DOM variables
			var currentNumber = document.getElementById("currentNumber");
			currentNumber.innerHTML = currentFizzBuzzNumber;

			var mainGameSettings = document.getElementById("mainGameSettings");
			var mainGameSettingsMenu = document.getElementById("mainGameSettingsMenu");
			var mainGameSettingsBackground = document.getElementById("mainGameSettingsBackground");

			var rulesDivId = $("#rulesDiv");
			var rulesDivWrapper = $("#rulesDivWrapper");
			var startMenuSettingsBackground = $("#startMenuSettingsBackground");
			var rulesDivReturn = $("#rulesDivReturn");

			var resume = document.getElementById("resume");
			var mainGameSettingsBackground = document.getElementById("mainGameSettingsBackground");
			var mainMenu = document.getElementById("mainMenu");
			var rules = document.getElementById("rules");

		//FizzBuzz individual count
			var fizzBuzzCount = 0;
			var fizzCount = 0;
			var buzzCount = 0;
			var spacebarCount = 0;

		//FizzBuzz Total count
			var totalCount = 0;
			var score = document.getElementById("scoreNumber");
			score.innerHTML = totalCount;

	

//add keyEvent listener
mainGameSettings.addEventListener("click", mainGameSettingsHandler, false);

resume.addEventListener("click", resumeHandler, false);
mainGameSettingsBackground.addEventListener("click", resumeHandler, false);
mainMenu.addEventListener("click", mainMenuHandler, false);
rules.addEventListener("click", rulesHandler, false);
startMenuSettingsBackground.click(leaveRulesHandler);
rulesDivReturn.click(leaveRulesHandler);



/* -- MAIN GAME FUNCTIONS -- */

	function loadAddEventHandlers() {
		console.log("event handlers loaded!");

		//main game  keydownHandler created
		window.addEventListener("keydown", keydownHandler, false);

		//main game buttons clickEvent listeners
		fizzButton1.addEventListener("click", fizzHandler, false);
		fizzBuzzButton2.addEventListener("click", fizzBuzzHandler, false);
		buzzButton3.addEventListener("click", buzzHandler, false);
		spacebarButton4.addEventListener("click", spacebarHandler, false);
	}

	function mainGameSettingsHandler() {
		console.log("settings clicked!");
		if (mainGameSettingsMenu.style.display === "") {
			mainGameSettingsMenu.style.display = "block";
			mainGameSettingsBackground.style.display = "block";
		} else if (mainGameSettingsMenu.style.display === "block") {
			mainGameSettingsMenu.style.display = "";
			mainGameSettingsBackground.style.display = "";

		}
	}

	function resumeHandler() {
		mainGameSettingsMenu.style.display = "";
		mainGameSettingsBackground.style.display = "";
		console.log("resume!");
	}

	function mainMenuHandler() {
		mainGameSettingsMenu.style.display = "";
		mainGameSettingsBackground.style.display = "";
		entireStartScreen.style.display = "block";
		console.log("main menu!");
	}

	function rulesHandler() {
		rulesDivId.css("display",  "block");
		rulesDivWrapper.css("display", "block");
		startMenuSettingsBackground.css("display", "block");

	}

	function leaveRulesHandler () {
		rulesDivId.css("display",  "none");
		rulesDivWrapper.css("display", "none");
		startMenuSettingsBackground.css("display", "none");
	}
		
		/* -- MAIN GAME LOGIC touch-- */
			function fizzHandler() {
				if (currentFizzBuzzNumber % 3 === 0) {
							
					//keep score
					fizzCount++;		
					totalCount++;
					score.innerHTML = totalCount;

					//onEvent Animation logic
					gameScene.append("<div class='bubble onEventAnimation' id='fizzAnimation'>Fizz!</div>");
					$("#fizzAnimation").stop(true, true).animate({top:"-=10", opacity:"toggle"}, 400).fadeOut(100, 
						function() { $(this).remove()});
				} else {
					//onEvent animation logic
					gameScene.append("<div class='bubble onEventAnimation' id='wrongAnimation'>Wrong!</div>");
					$("#wrongAnimation").stop(true, true).animate({top:"-=10", opacity:"toggle"}, 400).fadeOut(100,
						function() {$(this).remove()});

					totalCount -= 1;
					score.innerHTML = totalCount;
				}
				
				currentFizzBuzzNumber++;
				currentNumber.innerHTML = currentFizzBuzzNumber;
			}

			function fizzBuzzHandler() {
				if (currentFizzBuzzNumber % 3 === 0 && currentFizzBuzzNumber % 5 == 0) {
							
					//keep score
					fizzBuzzCount++;
					totalCount+= 2;
					score.innerHTML = totalCount;

					//onEvent animation logic
					gameScene.append("<div class='bubble onEventAnimation' id='fizzBuzzAnimation'>FizzBuzz!</div>");
					$("#fizzBuzzAnimation").stop(true, true).animate({top:"-=10", opacity:"toggle"}, 400).fadeOut(100, 
						function() { $(this).remove()});
				} else {
					//onEvent animation logic
					gameScene.append("<div class='bubble onEventAnimation' id='wrongAnimation'>Wrong!</div>");
					$("#wrongAnimation").stop(true, true).animate({top:"-=10", opacity:"toggle"}, 400).fadeOut(100,
						function() {$(this).remove()});

					totalCount -= 1;
					score.innerHTML = totalCount;
				}

				currentFizzBuzzNumber++;
				currentNumber.innerHTML = currentFizzBuzzNumber;
			}

			function buzzHandler() {
				if (currentFizzBuzzNumber % 5 === 0) {
							
					// keep score
					buzzCount++;
					totalCount++;
					score.innerHTML = totalCount;

					//onEvent Animation logic
					gameScene.append("<div class='bubble onEventAnimation' id='buzzAnimation'>Buzz!</div>");
					$("#buzzAnimation").stop(true, true).animate({top:"-=10", opacity:"toggle"}, 400).fadeOut(100, 
						function() { $(this).remove()});
				} else {
					//onEvent animation logic
					gameScene.append("<div class='bubble onEventAnimation' id='wrongAnimation'>Wrong!</div>");
					$("#wrongAnimation").stop(true, true).animate({top:"-=10", opacity:"toggle"}, 400).fadeOut(100,
						function() {$(this).remove()});

					totalCount -= 1;
					score.innerHTML = totalCount;
				}

				currentFizzBuzzNumber++;
				currentNumber.innerHTML = currentFizzBuzzNumber;
			}

			function spacebarHandler() {
				//keep score
				spacebarCount++;

				//onEvent Animation logic
				gameScene.append("<div class='bubble onEventAnimation' id='spacebarAnimation'>Skip!</div>");
				$("#spacebarAnimation").stop(true, true).animate({top:"-=10", opacity:"toggle"}, 400).fadeOut(100, 
					function() { $(this).remove()});

				currentFizzBuzzNumber++;
				currentNumber.innerHTML = currentFizzBuzzNumber;
			}


		/* -- MAIN GAME LOGIC keyboard-- */

			function keydownHandler(event) {
				switch (event.keyCode) {
					case fizzBuzz:
						if (currentFizzBuzzNumber % 3 === 0 && currentFizzBuzzNumber % 5 == 0) {
							
							//keep score
							fizzBuzzCount++;
							totalCount+= 2;
							score.innerHTML = totalCount;

							//onEvent animation logic
							gameScene.append("<div class='bubble onEventAnimation' id='fizzBuzzAnimation'>FizzBuzz!</div>");
							$("#fizzBuzzAnimation").stop(true, true).animate({top:"-=10", opacity:"toggle"}, 400).fadeOut(100, 
								function() { $(this).remove()});
						} else {
							//onEvent animation logic
							gameScene.append("<div class='bubble onEventAnimation' id='wrongAnimation'>Wrong!</div>");
							$("#wrongAnimation").stop(true, true).animate({top:"-=10", opacity:"toggle"}, 400).fadeOut(100,
								function() {$(this).remove()});

							totalCount -= 1;
							score.innerHTML = totalCount;
						}

						currentFizzBuzzNumber++;
						currentNumber.innerHTML = currentFizzBuzzNumber;
						break;

					case fizz:
						if (currentFizzBuzzNumber % 3 === 0) {
							
							//keep score
							fizzCount++;		
							totalCount++;
							score.innerHTML = totalCount;

							//onEvent Animation logic
							gameScene.append("<div class='bubble onEventAnimation' id='fizzAnimation'>Fizz!</div>");
							$("#fizzAnimation").stop(true, true).animate({top:"-=10", opacity:"toggle"}, 400).fadeOut(100, 
								function() { $(this).remove()});
						} else {
							//onEvent animation logic
							gameScene.append("<div class='bubble onEventAnimation' id='wrongAnimation'>Wrong!</div>");
							$("#wrongAnimation").stop(true, true).animate({top:"-=10", opacity:"toggle"}, 400).fadeOut(100,
								function() {$(this).remove()});

							totalCount -= 1;
							score.innerHTML = totalCount;
						}
						
						currentFizzBuzzNumber++;
						currentNumber.innerHTML = currentFizzBuzzNumber;
						break;

					case buzz:
						if (currentFizzBuzzNumber % 5 === 0) {
							
							// keep score
							buzzCount++;
							totalCount++;
							score.innerHTML = totalCount;

							//onEvent Animation logic
							gameScene.append("<div class='bubble onEventAnimation' id='buzzAnimation'>Buzz!</div>");
							$("#buzzAnimation").stop(true, true).animate({top:"-=10", opacity:"toggle"}, 400).fadeOut(100, 
								function() { $(this).remove()});
						} else {
							//onEvent animation logic
							gameScene.append("<div class='bubble onEventAnimation' id='wrongAnimation'>Wrong!</div>");
							$("#wrongAnimation").stop(true, true).animate({top:"-=10", opacity:"toggle"}, 400).fadeOut(100,
								function() {$(this).remove()});

							totalCount -= 1;
							score.innerHTML = totalCount;
						}

						currentFizzBuzzNumber++;
						currentNumber.innerHTML = currentFizzBuzzNumber;
						break;

					case spacebar:
							//keep score
							spacebarCount++;

							//onEvent Animation logic
							gameScene.append("<div class='bubble onEventAnimation' id='spacebarAnimation'>Skip!</div>");
							$("#spacebarAnimation").stop(true, true).animate({top:"-=10", opacity:"toggle"}, 400).fadeOut(100, 
								function() { $(this).remove()});

							currentFizzBuzzNumber++;
							currentNumber.innerHTML = currentFizzBuzzNumber;
							break;
				} 
			}


	// background animation

	/*var $elie = $(".background-placement"), degree = 0, timer;
    rotate();
    function rotate() {
        
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            ++degree; rotate();
        },80);
    }
    
    $("input").toggle(function() {
        clearTimeout(timer);
    }, function() {
        rotate();
    });*/


});
