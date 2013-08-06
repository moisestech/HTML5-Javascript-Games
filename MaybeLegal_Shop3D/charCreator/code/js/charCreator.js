// A $( document ).ready() block.
$( document ).ready(function() {
    
	console.log("charCreator!");

	// CHeck if jQuery and jQueryUI have loaded
	if (jQuery) {  
		console.log("jQuery is loaded"); 
	} else {
		console.log("jQuery is not loaded");
	}

	if (jQuery.ui) {
		console.log("jQueryUI is loaded");
	} else {
		console.log("UI is not loaded");
	}

	//section and subsection variables
	var sectionWidth = 500;
	var sectionHeight = 500;
	var subSectionWidth = 51;
	var subSectionHeight = 51;

	//values to keep track what row we're on
	var row_section = 0;
	var row_subSection = 0;
	var maxColumns_section = 5;
	var maxColumns_subSection = 9;
	var total = 25;
	var padding_section = 10;
	var padding_subSection = 3;

	//random pastel color
	function randomPastelColor(){
	    var r = (Math.round(Math.random()* 150) + (Math.round(Math.random()* 150) +  20)).toString(16);
	    var g = (Math.round(Math.random()* 150) + (Math.round(Math.random()* 150) + 20)).toString(16);
	    var b = (Math.round(Math.random()* 150) + (Math.round(Math.random()* 150) + 20)).toString(16);
    return '#' + r + g + b;
	}

	//append section
	for (i = 0; i < 25; i++) {

		// creates remainder
		var column_section = i % maxColumns_section; // 5
		//console.log(column_section)

		var new_top = column_section * (sectionWidth + padding_section);
		var new_left = row_section * (sectionHeight + padding_section);

		var $mainBody_Section = $('<div class="bodyPart-section"/>'); 
    	$('.mainBodyParts').append($mainBody_Section);

    	$mainBody_Section.css({"top": new_top + "px", "left": new_left});

    	if (column_section === (maxColumns_section - 1)) {
    		row_section++;
    	}
    	//append subSection
		for (j = 0; j < 81; j++) {

			// creates remainder
			var column_subSection = j % maxColumns_subSection; // 9

			var new_top_subSection = column_subSection * (subSectionWidth + padding_subSection); //51x51+3
			var new_left_subSection = row_subSection * (subSectionHeight + padding_subSection);

			//console.log("red-square: " + i + ", small-square: " + j + ", " + "top: " + new_top_subSection + ", " + "left: " + new_left_subSection);

			var $mainBodySubSectionWrapper = $('<div class="bodyPart-subSection-wrapper"/>');
			var $mainBodySubSection = $('<div class="bodyPart-subSection"/>');
			
			var pastelColor = randomPastelColor();
			//var randomColor = ('#'+Math.floor(Math.random()*16777215).toString(16));

			$mainBody_Section.append($mainBodySubSectionWrapper);
			$mainBodySubSectionWrapper.append($mainBodySubSection);

			$mainBodySubSectionWrapper.css({"top": new_top_subSection + "px", "left": new_left_subSection + "px"});
			$mainBodySubSection.css({"background-color": pastelColor});

			if (column_subSection === (maxColumns_subSection - 1)) {
    			//$mainBodySubSectionWrapper.css({"top": 0 + "px", "left": 0 + "px"});
    			row_subSection++;
			}
		}

		row_subSection = 0;
	}	

	//on Hover state
	var  $square = $(".bodyPart-subSection-wrapper");
	$square.hover(
		function () {
			//$(this).animate({height:"400px", width: "400px", margin: "-200px 0 0 -200px"}, 100);
			var thisChild = $(this).children();
			//console.log(thisChild);

			$(this).animate({height:"90px", width: "90px", marginLeft: "-18px", marginTop: "-18px", zIndex: "10"}, 80);
			$(this).addClass("subSection-shadow subSection-hover-border-radius");
			thisChild.animate({height:"80px",width: "80px", margin: "5px"}, 80);
			thisChild.addClass("subSection-hover-border-radius");
			//console.log("something");
		},
		function () {
			var thisChild = $(this).children();
			//$(this).animate({height:"200px", width: "200px", margin: "-100px 0 0 -100px"}, 100);
			$(this).animate({height:"51px", width: "51px", margin: "3px", marginRight: "0", marginBottom: "0", zIndex: "0"}, 100);
			$(this).removeClass("subSection-shadow subSection-hover-border-radius");
			thisChild.animate({height:"45px", width: "45px", margin: "3px", marginRight: "0", marginBottom: "0"}, 100);
			thisChild.removeClass("subSection-hover-border-radius");
			//console.log("something else");
		}
	);

	/*console.log($square);

	$square.click(function() {
	  alert("Handler for .click() called.");
	});*/
});



