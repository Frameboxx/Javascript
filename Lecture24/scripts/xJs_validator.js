var xJs = (function(obj){

	obj.validate = function(config){
		var formats = {
			'email': /^[a-z0-9._]+@[a-z0-9-]+\.[a-z\.]{2,6}$/i,
			'phone': /\+\d{2,3}\-\d{10,13}/
		}

		if(config.type!='card' && this.sel.value){
			// validate everything except credit cards
			return formats[config.type].test(this.sel.value);
		} else if(config.type==='card' && this.sel.value){
			// validate the credit card
			var visa = /^4[0-9]{12}(?:[0-9]{3})?$/
			var mastercard = /^5[1-5][0-9]{14}$/
			var amex = /^3[47][0-9]{13}$/
			var prep = this.sel.value.replace(/\D+/g,"");
			if(visa.test(prep)){
				// visa card
				return "VISA";
			} else if(mastercard.test(prep)){
				return "MasterCard";
			} else if(amex.test(prep)){
				return "AMEX";
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	return obj;
})(xJs || {})