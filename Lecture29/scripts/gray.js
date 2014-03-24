window.onload = function(){
	var c = document.querySelector("#cnv");
	var ct = c.getContext("2d");
	var imageFile = "images/image01.jpg";

	document.querySelector("#load").addEventListener("click", function(){
		var image = new Image();
		image.src = imageFile;
		image.addEventListener("load", function(){
			ct.drawImage(this, 0,0);
		})
	})

	document.querySelector("#gray").addEventListener("click", function(){
		var image = new Image();
		image.src = imageFile;
		image.addEventListener("load", function(){
			ct.drawImage(this, 0,0);
			// Grayscale Conversion
			var imd = ct.getImageData(0,0, c.width, c.height);
			var px = imd.data; // Array
			var px_count = imd.width * imd.height;
			// Get the RGB Contribution from spinners
			var redCtr = document.querySelector("#red").value;
			var greenCtr = document.querySelector("#green").value;
			var blueCtr = document.querySelector("#blue").value;
			// Loop over the pixels and turn them into grayscale
			for(var i = 0; i < px_count; i++){
				var greyValue = (redCtr * px[i*4]) + (greenCtr * px[i*4 + 1]) + (blueCtr * px[i*4 + 2]);
				px[i*4] = greyValue; // 0-255
				px[i*4 + 1] = greyValue;
				px[i*4 + 2] = greyValue;
				// px[i*4] = redCtr * px[i*4];
				// px[i*4 +1] = greenCtr * px[i*4 + 1];
				// px[i*4 +2] = blueCtr * px[i*4 + 2];
			}
			ct.clearRect(0,0,c.width,c.height);
			ct.putImageData(imd, 0,0);
		})
	})

	document.querySelector("#presets").addEventListener("change", function(e){
		document.querySelector("#red").value = JSON.parse(this.value)[0];
		document.querySelector("#green").value = JSON.parse(this.value)[1];
		document.querySelector("#blue").value = JSON.parse(this.value)[2];
	})
}