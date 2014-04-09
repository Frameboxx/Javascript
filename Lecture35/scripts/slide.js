$(function(){
	$(document).on("click", "#login", function(){
		var doCheck = $("input[name='user']").val()==='' || $("input[name='email'").val()==='';
		if(doCheck){
			showError("You did not fill up the form !")
		} 
	})

	function showError(msg){
		$('.error').html(msg).slideDown(400).delay(2000).slideUp(300);
	}
})