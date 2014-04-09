$(function(){
	$(document).on("click", "#login", function(){
		var doCheck = $("input[name='user']").val()==='' || $("input[name='email'").val()==='';
		if(doCheck){
			$('.error').slideDown(400);
		} else {
			$('.error').slideUp(800);
			// Submit the form
		}
	})
})