window.onload = function(){
	var dropzone = document.querySelector(".dropzone");
	var output = document.querySelector("#outimage");

	dropzone.addEventListener("dragenter", function(){
		this.classList.add("drop-active");
	})

	dropzone.addEventListener("dragleave", function(){
		this.classList.remove("drop-active");
	})

	dropzone.addEventListener("dragover", function(e){
		e.stopPropagation();
		e.preventDefault();
	})

	dropzone.addEventListener("drop", function(e){
		e.stopPropagation();
		e.preventDefault();
		this.classList.remove("drop-active");

		var files = e.target.files || e.dataTransfer.files; // files[0]
		var readFile = new FileReader();
		readFile.readAsDataURL(files[0]);
		readFile.addEventListener("loadend", function(e){
			output.src = readFile.result;
		})
	})
}