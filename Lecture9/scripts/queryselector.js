window.onload = function(){

	var title = document.querySelector("#title");
	title.style.color = "Red";

	var items = document.querySelectorAll(".item");
	for(var i in items){
		items[i].style.color = "Green";
	}
	
}