xJs = (function(){
	var obj = {};
	// Selector Engine
	obj.s = function(){
		if(arguments[0].indexOf("#")===0){
			// return getElementById
			this.sel = document.getElementById(arguments[0].substring(1));
		} else {
			// return querySelectorAll
			this.sel = document.querySelectorAll(arguments[0]);
		}

		return this;
	}

	// CSS Engine
	obj.css = function(){
		// if the this.sel is a NodeList (like an Array), then for loop and change the css
		// otherwise simply change the css of the element in this.sel
		if(this.sel instanceof NodeList){
			// loop over items in the NodeList and change the CSS
			var l = (this.sel).length;
			for(var i=0; i<l; i++){
				this.sel[i].style[arguments[0]] = arguments[1];
			}
		} else {
			// simply change the css
			this.sel.style[arguments[0]] = arguments[1];
		}

		return this;
	}

	// Event Listener
	obj.ev = function(){
		var fn = arguments[1];
		if(this.sel instanceof NodeList){
			// loop over items in the NodeList and attach event listeners
			var l = (this.sel).length;
			
			for(var i=0; i<l; i++){
				this.sel[i].addEventListener(arguments[0], function(){
					fn.call(this)
				})
			}
		} else {
			// simply change the css
			this.sel.addEventListener(arguments[0], function(){
					fn.call(this);
			})
		}
	}

	return obj;
})()