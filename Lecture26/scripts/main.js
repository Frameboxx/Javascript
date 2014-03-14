window.onload = function(){
	var shelfUL = document.querySelector(".shelf_UL");
	var items = document.querySelectorAll('.items');
	var cart = document.querySelector(".cart");
	var bag = document.querySelector(".bag");
	var totalList = document.querySelector(".totalList");
	var myCart = [];

	// Shelf Event Listeners
	// When an item is dragged from the shelf, the dragstart is fired
	shelfUL.addEventListener("dragstart", dragStart)
	// After the drop is completed, the dragend is fired on the source element that was dragged.
	shelfUL.addEventListener("dragend", function(e){
		//shelfUL.removeChild(e.target);
	})

	function dragStart(e){
		if(e.target.classList.contains("items")){
			// Selects the actual element from the shelf
			var item = e.target;
			e.dataTransfer.effectAllowed = 'move';
			// The real data that gets dragged from zone A -> B is set here. 
			e.dataTransfer.setData('text/html', e.target.outerHTML);
		}
	}


	// Cart Event Listeners
	// dragenter is fired when we drag an item into the cart (when it enters the region)
	cart.addEventListener("dragenter", function(e){
		this.classList.add('drag-enter')
	});

	// dragover is fired when the item is being held inside the cart region and dragged (but not dropped)
	cart.addEventListener("dragover", function(e){
		// e.preventDefault() prevents the default action of a control
		e.preventDefault(); 
		// this merely sets the type of cursor that you see and it has to match on the drag handler's 'effectAllowed'
  		e.dataTransfer.dropEffect = 'move';  
  		
	});

	// drop is fired when the item is dropped in the drop zone (cart)
	cart.addEventListener("drop", function(e){
		// This prevents the eventlistener from bubbling up the chain to any other eventlistener on the zone
		e.stopPropagation();
		// This prevents any unwanted default behaviour that the browser may exhibit when the item is dropped
		e.preventDefault();
		// This gets the HTML Object from the drag event
		var getObj = e.dataTransfer.getData('text/html');
		// Since it is not an element yet, we extract the data-id directly via Regex match
		var itemName = getObj.match(/data-id="\w+/)[0].replace(/data-id="/,"");
		// If the item is there in the cart, do not add it visually into the cart, only into the myCart[] array.
		if(findItem(myCart,itemName).length===0){
			getObj = getObj.replace('draggable="true"','draggable="false"')
			bag.innerHTML += getObj;
		}
		// Add item to the cart. if its already there, increment the quantity
		addItem(itemName);		
		// Remove the drag-enter class
		cart.classList.remove('drag-enter')
		// Add the dropped class which provides an animated green background
		cart.classList.add('dropped')
		// We remove this after a second so it can be applied again
		setTimeout(function(){
			cart.classList.remove('dropped');
		},1000);
	});

	// if you drag and item into the cart but do not drop it and move it out of the drop zone, dragleave is fired
	cart.addEventListener("dragleave", function(e){
		this.classList.remove('drag-enter')
	});
	


	function addItem(itemName){
		if(findItem(myCart,itemName).length!==0){
			findItem(myCart,itemName)[0].quantity++;
		} else {
			myCart.push({item:itemName,quantity:1})
		}
		renderCart();
	}	

	function findItem(arr,icode){
		return arr.filter(function(id){
				return id.item === icode;
			});
	}

	function renderCart(){
		totalList.innerHTML = "";
		myCart.forEach(function(i){
			var str = '<tr>';
				str += '<td>' + i.item + '</td>';
				str += '<td>' + i.quantity + '</td>';
				str += '</tr>';
			totalList.innerHTML += str;
			var QtyUpdate = document.querySelector(".cart [data-id=" + i.item + "] .qty");
			if(i.quantity===1){
				QtyUpdate.style.visibility="visible";
			}
			QtyUpdate.innerHTML = i.quantity;
		})
		
	}


	
}