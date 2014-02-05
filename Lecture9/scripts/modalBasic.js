window.onload = function(){

	var modalCover = document.querySelector(".modal_cover");
	var modalPanel = document.querySelector(".modal");
	var confirmBtn = document.querySelector("#confirm");
	var modalText = document.querySelector("#message");

	window.modal = function(message){
		if(modalPanel.className.match('modal_open')){
			// hide the modal panel and the cover
			modalCover.style.visibility = "hidden";
			modalPanel.className = "modal";
		} else {
			// show the modal panel and cover
			modalText.innerHTML = message;
			modalCover.style.visibility = "visible";
			modalPanel.className += " modal_open";
		}
	}

	confirmBtn.addEventListener("click", modal);

}