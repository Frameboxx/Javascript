window.onload = function(){
	var c = document.querySelector("#mc");
	var ct = c.getContext("2d");
	var drag = false;
	var mx = 0;
	var my = 0;

	c.addEventListener("mousedown", function(){
		drag = true;
	})

	c.addEventListener("mouseup", function(){
		drag = false;
	})

	c.addEventListener("mousemove", function(e){
		if(drag){
			mx = e.offsetX;
			my = e.offsetY;
		}
	})

	function draw(){
		var bezPt = [mx,my];
		ct.clearRect(0,0,c.width,c.height);
		ct.beginPath();
		ct.strokeStyle = "red";
		ct.lineWidth = "4";
		// Create Curve
		ct.moveTo(0,240);
		ct.quadraticCurveTo(bezPt[0], bezPt[1], 720, 240);
		ct.stroke();
		// Create Bezier Pt.

		ct.beginPath();
		ct.strokeStyle = "green";
		ct.lineWidth = "1";
		ct.moveTo(0,240);
		ct.lineTo(bezPt[0], bezPt[1]);
		ct.lineTo(720,240);
		ct.stroke();
		ct.fillText(bezPt[0] + "," + bezPt[1], bezPt[0],bezPt[1])
	}

	setInterval(draw, 16); // 1000ms / 60Hz = 16.67ms
}