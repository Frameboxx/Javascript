window.onload = function(){
	var c = document.querySelector("#mycanvas");
	var ct = c.getContext("2d");
	ct.fillStyle = "White";
	ct.fillRect(0,0,c.width,c.height);

	var draw = false;

	c.addEventListener("mousedown", function(){
		draw = true;
	})

	c.addEventListener("mouseup", function(){
		draw = false;
	})

	c.addEventListener("mousemove", function(e){
		if(draw){
			var x = e.offsetX;
			var y = e.offsetY;
			ct.fillStyle = getRandomColor();
			ct.fillRect(x,y,(Math.random() * 20),(Math.random() * 20));
		}
	})

	function getRandomColor(){
		// find the value of the sliders and multiply with their corresponding random values (RGB)
		function rc(n){
			return parseInt(Math.random() * n);
		}

		return "rgb(" + rc(document.querySelector("#red").value) + "," + rc(document.querySelector("#green").value) + "," + rc(document.querySelector("#blue").value) + ")";
	}


	document.querySelector("#clear").addEventListener("click", function(){
		c.width = c.width;
		// ct.clearRect(0,0,500,400);
	})

	document.querySelector("#download").addEventListener("click", function(){
		var im = c.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream"); // MIME
		document.location.href = im;
	})
}