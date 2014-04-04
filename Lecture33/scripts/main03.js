$(function(){

	$(document).on("click", "#box", function(){
	
		$(this).animate({
			backgroundColor:"green",
			width:"200px"
		},2000);
		
	})
	
})