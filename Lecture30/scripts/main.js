window.onload = function(){
	var c = document.querySelector("#mc");
	var ct = c.getContext("2d");
	// Initialize variables to hold the position of the mouse pointer
	var mx = 0;
	var my = 0;
	// The variable drag is set to true when the mouse button is pressed
	var drag = false;
	// When dragging is set to true, the position of a layer is continually updated
	var dragging = false;
	// The layers array stores references to the refresh() function of all the layers created on the canvas
	var layers = [];

	c.addEventListener("mousedown", function(){
		drag = true;
	})

	c.addEventListener("mouseup", function(){
		drag = false;
		dragging = false;
	})

	// The mx and my are continually updated
	c.addEventListener("mousemove", function(e){
		mx = e.offsetX;
		my = e.offsetY;
	})


	function Layer(img){
		// Initial position of the new layer
		var _X = 0;
		var _Y = 0;
		// Depending on where you click on the layer, the offset between the position of 
		// the mouse pointer vs. the position point of the layer (top left corner of the layer) needs
		// to be computed or else the layer will jump to the mouse pointer. This offset is stored in the
		// initX and initY. Here we simply initialize these variables in the scope of the layer
		var initX = 0;
		var initY = 0;
		var setValue = true;
		var image = new Image();
		image.src = img;

		this.refresh = function(){
			if(drag){
				// When the mouse button is pressed

				// Top left of the layer (X)
				var left = _X;
				// Top left of the layer (Y)
				var top = _Y;
				// Top right extent of the layer (X+image.width)
				var topRight = _X + image.width;
				// Bottom Left extent of the layer (Y+image.height)
				var bottomLeft = _Y + image.height;
				// When you click and drag on the canvas and as long as the setValue is true,
				// the offset values for the layer's position vs. mouse pointer are continually updated
				// by subtracting the position of the layer from the mouse position. This is as long
				// as setValue = true. When your mouse click is in the bounding region of a layer,
				// the setValue variable is set to false, effectively locking down the last known values
				// of the initX and initY
				if(setValue){
					initX = mx - _X;
					initY = my - _Y;
				}
				// The isOverElement.. variables determine if the mouse is within the bounds of
				// a layer or not. If both these are not true, then the mouse is NOT over a layer
				// If the mouse pointer is indeed over a layer, then set dragging = true to enable
				// the continual updates to _X and _Y position of the layer. Also, at this point, 
				// the setValue is set to true which locks the last known offset value of the mouse pointer vs the position of the layer
				var isOverElementX = (mx > left) && (mx < topRight);
				var isOverElementY = (my > top) && (my < bottomLeft);

				if(isOverElementX && isOverElementY){
					// do the dragging
					dragging = true;
					setValue = false;
				}
			} else {
				setValue = true;
			} 

			// When the mouse button is pressed within the bounds of the layer, then the _X & _Y position
			// of the layer is continually updated and the ct.drawImage() then draws the layer at the new
			// position.

			if(dragging){
				_X = mx - initX;
				_Y = my - initY;
			}

			ct.drawImage(image, _X, _Y);
		}
	}

	document.querySelector(".catalog").addEventListener("click", function(e){
		// If the user clicks on an <li> with the data-image attribute present
		// then get the value of data-image which is essentially the path to the image
		// push it into a layers array as a new instance of the Layer object.
		if(e.target.getAttribute("data-image")){
			var img = e.target.getAttribute("data-image");
			var nLayer = new Layer(img);
			layers.push(nLayer.refresh);
		}
	})

	document.querySelector("#clear").addEventListener("click", function(){
		layers = [];
	})


	// To achieve dragging, we have to run the refresh function of all the layers created 
	// by the user. This is achieved by running a setInterval loop which loops over the array
	// and running all instances of the refresh() function present in the layers array.

	setInterval(function(){
		ct.clearRect(0,0,c.width,c.height);
		for(var i = 0; i < layers.length; i++){
			layers[i].apply();
		}

	},10)


}