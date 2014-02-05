window.onload = function(){
	var smiley = document.getElementById("smiley");
	
	document.addEventListener('mousemove', function(evt){
		smiley.style.top = evt.y + "px";
		smiley.style.left = evt.x + "px";
	});
}