var xJs = (function(obj){
	
	obj.fadeOut = function(){
		if(this.sel instanceof NodeList){
			var l = (this.sel).length;
			for(var i=0; i<l; i++){
				fdO(this.sel[i]);
			}
		} else {
			fdO(this.sel);
		}

		function fdO(el){
			var op = el.style.opacity || 1.0;
			(function lp(){
				el.style.opacity = op;
				op = op - 0.01;
				if(op>=0){
					setTimeout(lp,10);
				}
			})();
		}

		return this;
	}

	obj.fadeIn = function(){
		if(this.sel instanceof NodeList){
			var l = (this.sel).length;
			for(var i=0; i<l; i++){
				fdI(this.sel[i]);
			}
		} else {
				fdI(this.sel);
		}

		function fdI(el){
			var op = 0;
			(function lp(){
				el.style.opacity = op;
				op = op + 0.01;
				if(op<=1){
					setTimeout(lp, 10);
				}
			})()
		}

		return this;
	}

	return obj;
})(xJs || {})