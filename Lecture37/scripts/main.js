$(function(){
	// Add Class
	$(document).on("click", "#add", function(){
		$('.infobox').addClass("highlight", 1500, function(){
			// will be fired when the animation is complete
		});
	})

	// Remove Class
	$(document).on("click", "#rem", function(){
		$('.infobox').removeClass("highlight", 1500);
	})

	// Toggle Class
	$(document).on("click", "#toggle", function(){
		$('.infobox').toggleClass("highlight", 1500);
	})

	// Effects
	$(document).on("click", "#fx", function(){
		$('#info2').effect("bounce",{times:3}, 1000);
	})
})