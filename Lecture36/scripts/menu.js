$(function(){

$(document).on("mouseover", ".menu li", function(){
	$(this).find(".submenu").show();
})

$(document).on("mouseout", ".menu li", function(){
	$(this).find(".submenu").hide();
})

})