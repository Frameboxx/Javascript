window.onload = function(){
	var server = "http://localhost:9000/servedata";
	var catalog = document.querySelector(".left");
	var cartDisplay = document.querySelector(".cartitem");
	var totalDisplay = document.querySelector("#total");
	var dat = [];
	var cart = [];
	// Event Listeners
	document.querySelector(".left").addEventListener("click", addtoCart);
	document.querySelector(".cartitem").addEventListener("click", removeFromCart);

	function ajax(config){
	var method = config.method || 'GET';
	var payload = config.payload || null;
	var xhr = new XMLHttpRequest();
	xhr.open(method, config.url, true);
	xhr.upload.addEventListener("progress", function(e){
			config.progress(e);
	});
	xhr.addEventListener("load", function(){
		config.success(xhr);
	});
	xhr.addEventListener("error", config.error);
	xhr.send(payload);
	}

	function onload(){
		ajax({
			url:server,
			method:'GET',
			success: function(xhr){
				catalog.innerHTML = '';
				dat = JSON.parse(xhr.responseText);
				for(var n in dat){
					renderCatalog(dat[n], catalog);
				}
			}
		})
	}

	function renderCatalog(obj, dom){
		var itm = '<div class="item">';
			itm += '<div class="itempic"><img src="./images/' + obj.itempic + '" alt=""></div>';
			itm +=	'<div class="itemtitle"><h4>' + obj.itemname + '</h4></div>';
			itm +=	'<div class="itemcost"><h5>Rs.' + obj.itemprice + '</h5></div>';
			itm += 	'<div class="itemdescription"><p>' + obj.itemdescription + '</p></div>';
			itm += 	'<div class="addBtn"><button class="addBtn" data-id="' + obj.itemcode + '">Add to Cart</button></div>';
			itm +=	'</div>';
		dom.innerHTML += itm;
	}

	onload();

	function addtoCart(e){
		if(e.target.classList.contains("addBtn")){
			var itcode = e.target.getAttribute("data-id");
			if(findItem(cart, itcode).length === 0){
				// add to cart
				cart.push({"itemcode":itcode, "qty":1});
			} else {
				// increment the quantity by 1
				findItem(cart, itcode)[0].qty++;
			}
			updatecart();
			// check to see if this item already exists in the cart
			// if it DOES NOT exist in the cart, then add it with the qty set to 1
			// if it EXISTS, set the qty to +1

		}
	}

	function updatecart(){
		cartDisplay.innerHTML = '';
		var total = 0;
		for(var n = 0;n<cart.length;n++){
			var getItemDetails = findItem(dat, cart[n].itemcode)[0];
			var price = getItemDetails.itemprice * cart[n].qty;
			var str = '<li><div class="n">' + getItemDetails.itemname + '</div><div class="cost">Rs.' + getItemDetails.itemprice +  ' x ' + cart[n].qty + '</div><a href="#" class="remBtn" data-id="' + cart[n].itemcode + '">Remove</a></li>';
			cartDisplay.innerHTML += str;
			total = total + price;
		}
		totalDisplay.innerHTML = "Rs. " + total;
	}

	function removeFromCart(e){
		if(e.target.classList.contains("remBtn")){
			var id = e.target.getAttribute("data-id");
			for(var n=0;n<cart.length;n++){
				if(cart[n].itemcode === id){
					cart.splice(n,1);
				}
			}
			updatecart();
		}
	}

	function findItem(arr, icode){
		return arr.filter(function(id){
			return id.itemcode === icode;
		})

		// Alternate technique :: Loop over the array, check each element's itemcode === icode and if found, return that element.
	}

}