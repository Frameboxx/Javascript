window.onload = function(){
	var upload = document.querySelector("#upload");
	var output = document.querySelector(".output");
	var scale = 20;

	upload.addEventListener("change", function(){
		for(var i=0; i<this.files.length;i++){
			resizeImage(scale, this.files[i]);
		}
	})

	function resizeImage(s, image){
		var freader = new FileReader();
		var img = new Image();
		freader.readAsDataURL(image);

		freader.onload = function(e){
			img.src = e.target.result;
			img.onload = function(){
				// Create a temp canvas > put the image on the canvas and get the dataURL
				var tempCanvas = document.createElement("canvas");
				tempCanvas.width = img.width * (s/100);
				tempCanvas.height = img.height * (s/100);
				var ct = tempCanvas.getContext("2d");
				ct.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);
				var liTag = "<li><img src='" + tempCanvas.toDataURL("image/jpeg") + "'></li>";
				output.innerHTML += liTag;
			}
		}
	}
}