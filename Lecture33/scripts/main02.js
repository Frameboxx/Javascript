$(function(){
	$(document).on("click", "#display", function(){
		var disp = $("#display");
		disp.toggleClass("highlight");

	})

	$(document).on("click", ".somelist li", function(){
		//$(this).toggleClass("highlight");
		// $(this).fadeOut(2000, function(){
		// 	$(this).remove();
		// });
	})


	$(".somelist li").fadeIn(2000).delay(3000).fadeOut(800);


})