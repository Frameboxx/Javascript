$(function(){

	$(document).on("mouseover", ".menu li", function(e){
		e.preventDefault();
		$(this).find('.submenu').stop().animate({
			height:'100px'
		}, 200);
	})

	$(document).on("mouseout", ".menu li", function(e){
		e.preventDefault();
		$(this).find('.submenu').stop().animate({
			height:'0px'
		}, 200);
	})



})