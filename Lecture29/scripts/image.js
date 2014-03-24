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
}