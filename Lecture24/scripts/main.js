window.onload = function(){
	// Capitalize
	xJs.s("#caps").ev("keyup", caps);
	function caps(){
		this.value = xJs.capitalize(this.value);
	}

	// E-Mail Validator
	xJs.s("#email").ev("keyup", validateForm);
	function validateForm(){
		var getVal = xJs.s("#email").validate({type:'email'});
		if(!getVal){
			xJs.s("#email").css("background", "red");
		} else {
			xJs.s("#email").css("background", "white");
		}
	}

	// Credit Card Validator
	xJs.s("#card").ev("change", cardValidate);
	function cardValidate(){
		var getVal = xJs.s("#card").validate({type:'card'});
		if(getVal){
			xJs.s("#msg").html(getVal);
		} else {
			xJs.s("#msg").html("Invalid Card Number")
		}
	}


}