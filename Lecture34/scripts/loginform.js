$(function(){
	var username = $("#username");
	var password = $('#password');
	var error = $("#error");

	$(document).on("click", "#login", doLogin);

	function doLogin(){
		var checkForm = username.val()==='' || password.val()==='';
			if(username.val()===''){
				username.css('background', 'rgb(233,66,66)');
			} else {
				username.css('background', 'rgb(255,255,255)');
			}

			if(password.val()===''){
				password.css('background', 'rgb(233,66,66)');
			} else {
				password.css('background', 'rgb(255,255,255)');
			}
		if(!checkForm){
			// Submit the form here !
			var user = "x1class";
			var pass = "x1js2014";
			if(username.val()===user && password.val()===pass){
				error.hide();
				window.location.href = "http://www.google.com";
			} else {
				error.show();
			}
		}
	}

})