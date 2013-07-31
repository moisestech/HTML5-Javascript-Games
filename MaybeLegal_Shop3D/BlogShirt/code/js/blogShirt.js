// A $ (document).ready block
$(document).ready(function() {

	console.log("blogShirt!");

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

	/*shirtImage.click(function () {
		console.log('clicked on shirtImage!')
	});*/

	/*shirtImage.draggable({
		drag: function () {
			console.log('draging event!');
		}
	});*/

	var designsArray = [
		'../../assets/shirt_designs/CartPuff.png',
		'../../assets/shirt_designs/banana_republic.jpg',
		'../../assets/shirt_designs/BarelyLegal_Batch2_1.jpg',
		'../../assets/shirt_designs/BarelyLegal_Batch3_3.jpg',
		'../../assets/shirt_designs/BarelyLegal_Batch3_5.jpg',
		'../../assets/shirt_designs/BirdPlane.jpg',
		'../../assets/shirt_designs/cbs_eye.jpg',
		'../../assets/shirt_designs/Chimera_Design1.jpg',
		'../../assets/shirt_designs/Circle_Logos.jpg',
		'../../assets/shirt_designs/circlespotsbigCOMPRESSED.jpg',
		'../../assets/shirt_designs/Design01.jpg',
		'../../assets/shirt_designs/Design02.jpg',
		'../../assets/shirt_designs/Design03.jpg',
		'../../assets/shirt_designs/Design04.jpg',
		'../../assets/shirt_designs/Design05.jpg',
		'../../assets/shirt_designs/HelloFreaky.jpg',
		'../../assets/shirt_designs/horseslogos.jpg',
		'../../assets/shirt_designs/MickeySponge.png',
		'../../assets/shirt_designs/Monograms.jpg',
		'../../assets/shirt_designs/nikePepsi.jpg',
		'../../assets/shirt_designs/PickaSponge.jpg'
	]

	var surfaceArray_image = [
		'../../assets/templates/shirt_1/white-essential_1.png',
		'../../assets/templates/headphones/headphones.png',
	]

	var surfaceArray_overlay = [
		'../../assets/templates/shirt_1/white-essential_1_overlay.png',
		'../../assets/templates/headphones/headphones_overlay.png',
	]

	var surfaceArray_svg = [
		'../../assets/templates/shirt_1/white-essential_1_mask.svg',
		'../../assets/templates/headphones/headphones.svg',
	]

	var currentDesign = 0;
	var currentSurface = 0;

	surface = $('.layer1');
	shirtImage = $('.layer2');
	surfaceOverlay = $('.layer3');
	extraSurfaceFeature = $('.layer4');



	var mousedown = 0;

	// track cursor
	var x, y;

	var dragFunctionVar;

      shirtImage.mousedown(function() {
        console.log('mousedown');
        mousedown = 1;

        
          dragEvent();
        
          
      }).mouseup(function() {
        mousedown = 0;
        console.log('mouseup');
        dragFunctionVar.unbind('mousemove');
      }).on('mouseenter mouseleave', function(e) {
        var $that = $(this);
        /*if (e.type == 'mouseenter') {
          console.log('mouseenter');
        }*/
        if (e.type == 'mouseleave') {
          if (mousedown == 1) {
            console.log('mouseup');
            mousedown = 0;
            //console.log(mousedown);
            dragFunctionVar.unbind('mousemove');

          }
        }
      });

    function dragEvent() {

    	dragFunctionVar = $(document).mousemove(function(e){
			x = e.pageX;
			y = e.pageY;
			
			//console.log('x: ' + x + ' y: ' + y);
			//console.log('x:' + e.pageX +', y: '+ e.pageY);

			// google how to console log backgroundPosition
			// X and Y separately
			// shirtImage.css('backgroundPosition');

			shirtImage.css({'backgroundPosition': (x - 150) + 'px ' + (y - 50) + 'px'})
		});
    }

    var toolbar_image_repeat_ON = $('#radio1');
    var toolbar_image_repeat_OFF = $('#radio2');
    var toolbar_repeat_state = true;

	toolbar_image_repeat_ON.click(function() {
		toolbar_repeat_state = true;
		console.log('repeat-ON');
		checkRepeatState();
	});

	 toolbar_image_repeat_OFF.click(function() {
	 	toolbar_repeat_state = false;
	 	console.log('repeat-OFF');
	 	checkRepeatState();
    });

	function checkRepeatState() {

		if ( toolbar_repeat_state === true) {
			shirtImage.css({'backgroundRepeat': 'repeat'});
			toolbar_repeat_state = false;
			console.log(shirtImage.css('backgroundRepeat'));
    	} else {
    		shirtImage.css({'backgroundRepeat': 'no-repeat'});
    		toolbar_repeat_state = true;
    		console.log(shirtImage.css('backgroundRepeat'));
    	}
	}


	$( "#slider-range-min" ).slider({
		range: "min",
		value: 37,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			// $( "#amount" ).val( "$" + ui.value );
			shirtImage.css({'backgroundSize': ui.value + 'px'});
		}
	});
	$( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) )

	$( "#radioset1" ).buttonset();
	$("#radioset2").buttonset();
	$("#radioset3").buttonset();

	var toolbar_image_design = $('.design-image');
	var toolbar_image_surface = $('.image-surface');

	var toolbar_image_design_previous = $('#radio3');
    var toolbar_image_design_next = $('#radio4');

    var toolbar_image_surface_previous = $('#radio5');
    var toolbar_image_surface_next = $('#radio6');

	//* -- DESIGN -- *//

		toolbar_image_design_previous.click(function() {
			console.log('toolbar_image_design_previous');
			designState(-1);
		});

		toolbar_image_design_next.click(function() {
			console.log('toolbar_image_design_next');
			designState(1);
		});

	//* -- SURFACE -- *//

		toolbar_image_surface_next.click(function() {
			console.log('toolbar_image_surface_next');
			surfaceState(1);
		});

		toolbar_image_surface_previous.click(function() {
			console.log('toolbar_image_surface_previous');
			surfaceState(-1);
		});


	function designState(changer) {
		currentDesign = currentDesign + changer;
		//console.log
		shirtImage.css({'background-image': 'url(' + designsArray[currentDesign] + ')'});
		toolbar_image_design.attr('src', String(designsArray[currentDesign]));
	}

	function surfaceState(changer) {
		currentSurface = currentSurface + changer;
		shirtImage.css({'-webkit-mask-box-image': 'url(' + surfaceArray_svg[currentSurface] + ')'});
		surface.attr('src', String(surfaceArray_image[currentSurface]));
		surfaceOverlay.attr('src', String(surfaceArray_overlay[currentSurface]));
		toolbar_image_surface.attr('src', String(surfaceArray_image[currentSurface]));

		if (currentSurface === 0) {
			extraSurfaceFeature.css({'opacity': '1'});
		} else {
			extraSurfaceFeature.css({'opacity': '0'});
		}
	}
});










