window.onload = function(){
	var c = document.querySelector("#mycanvas");
	var ct = c.getContext("2d");
	var draw = false;
	var drawLine = false;

	ct.fillStyle = "white";
	ct.fillRect(0,0,500,400);

	c.addEventListener("mousedown", function(e){
		draw = true;
	})

	c.addEventListener("mouseup", function(e){
		draw = false;
		drawLine = false;
	})

	c.addEventListener("mousemove", function(e){
		if(draw) {
			var x = e.offsetX;
			var y = e.offsetY;
			ct.lineWidth = "4";
			ct.lineCap = "round";
			ct.strokeStyle = "Red";
			if(!drawLine){
				ct.beginPath();
				ct.moveTo(x,y);
				drawLine = true;
			} else {
				ct.lineTo(x,y);
				ct.stroke();
			}
		}
	})

	document.querySelector("#clear").addEventListener("click", function(){
		c.width = c.width;
		// ct.clearRect(0,0,500,400);
	})

	document.querySelector("#download").addEventListener("click", function(){
		var im = c.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream"); // MIME
		document.location.href = im;
	})
}