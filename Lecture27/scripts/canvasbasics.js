window.onload = function(){
	var canvas = document.querySelector("#myCanvas");
	var context = canvas.getContext("2d");

	//context.rect(100,100,200,100);
	context.strokeStyle = "Red";
	//context.stroke();
	context.lineWidth = "4";
	// context.strokeRect(100,100,200,100);
	// context.strokeStyle = "Green";
	// context.strokeRect(150,150,200,100);
	context.fillStyle = "Black";
	context.fillRect(10,10,200,100);
	context.strokeRect(10,10,200,100);
	// 90 * (Math.PI/180)
	context.arc(300,300, 60, 0, (180*(Math.PI/180))-1.57);
	context.stroke();


}