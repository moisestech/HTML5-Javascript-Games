// A $ (document).ready block
$(document).ready(function() {

	console.log("designGenerator!");

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

		/* -- CHARACTER -- */

			//Eye array
			var eyeArray = [
				"../../assets/character/eye/hellokitty_eye.png",
				"../../assets/character/eye/mickey_eye.png",
				"../../assets/character/eye/spongebob_eye.png"
			]

			//Head array
			var headArray = [
				"../../assets/character/head/mickey_head.png",
				"../../assets/character/head/spongebob_head.png"
			]

			//Hair array
			var hairArray = [
			]

			//Accesory array
			var accessoryArray = [
				"../../assets/character/accessory/hellokitty_accessory.png"
			]

			//Ear array
			var earArray = [
			]

			//Mouth array
			var mouthArray = [
				"../../assets/character/mouth/mickey_mouth.png",
				"../../assets/character/mouth/spongebob_mouth.png"
			]

			//Nose array 
			var noseArray = [
				"../../assets/character/nose/mickey_nose.png",
				"../../assets/character/nose/hellokitty_nose.png"
			]

			//Body array 
			var bodyArray = [
			]

	/* -- LOGO -- */
			//Logo array
			var logoArray = [
			]

	/* -- BACKGROUND -- */
			//Background array
			var backgroundArray = [
			]


	//Select a random asset from each array list
			//character
				var eye_image = eyeArray[Math.floor(Math.random()* 3)];
				var head_image = headArray[Math.floor(Math.random()* 2)];
				//var hair_image = hairArray[Math.floor(Math.random()* 8)];
				var accessory_image = accessoryArray[Math.floor(Math.random()* 1)];
				//var ear_image = earArray[Math.floor(Math.random()* 10)];
				var mouth_image = mouthArray[Math.floor(Math.random()* 2)];
				var nose_image = noseArray[Math.floor(Math.random()* 2)];
				//var body_image = bodyArray[Math.floor(Math.random()* 10)];
			//logo
				//var logo_image = logoArray[Math.floor(Math.random()* 10)];
			//background
				//var background_image = backgroundArray[Math.floor(Math.random()* 10)];



	//Select the image templates from the dom tree
	// and replace with random asset

			// append eye
			var layer1 = $(".layer1");
			layer1.attr("src", eye_image);

			// append face
			var layer2 = $(".layer2");
			layer2.attr("src", head_image);

			// append hair
			var layer3 = $(".layer3");

			// append accessory
			var layer4 = $(".layer4");
			layer4.attr("src", accessory_image);

			// append ear
			var layer5 = $(".layer5");

			// append mouth
			var layer6 = $(".layer6");
			layer6.attr("src", mouth_image);


			// append nose
			var layer7 = $(".layer7");
			layer7.attr("src", nose_image);

			// append body
			var layer8 = $(".layer8");
			//layer7.src = body_image;

			// append logo
			var layer9 = $(".layer9");
			//layer9.src = logo_image;

			//append background
			var layer10 = $(".layer10");
			//layer10.src = background_image;
});










