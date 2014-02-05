window.onload = function(){
	console.log('OK');
	var fruits = document.getElementsByClassName("fruit");
	
	console.log(fruits[0].innerHTML);
	//fruits[0].innerHTML = "Some other fruit";

	// Loop over the array and change styles
	for(var i=0;i<fruits.length;i++){
		fruits[i].style.color = "rgb(255,0,0)";
	}
}	