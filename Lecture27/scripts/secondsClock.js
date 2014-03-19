window.onload = function(){
	var canvas = document.querySelector("#myCanvas");
	var context = canvas.getContext("2d");

	setInterval(updateClock, 1000);

	function updateClock(){
		// Reset the Canvas
		canvas.width = canvas.width;
		// Draw the outer ring
		context.lineWidth = "10";
		context.arc(200,200, 160, 0, (360*Math.PI/180));
		context.stroke();

		// Timed Ring
		var getSeconds = new Date().getSeconds();
		var normSeconds = getSeconds / 60;
		var deg2Radians = (normSeconds * 360) * (Math.PI/180);
		context.beginPath();
		context.arc(200,200, 150, -1.57, deg2Radians - 1.57);
		context.lineWidth = "5";
		context.strokeStyle = "Red";
		context.stroke();
		// Text
		context.font = "40px Arial";
		context.fillText(getSeconds, 180, 220);
	}

	
}