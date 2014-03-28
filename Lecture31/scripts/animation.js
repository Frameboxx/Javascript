window.onload = function(){
	var c = document.querySelector("#mc");
	var ct = c.getContext("2d");
	var angle = 0;

	function rotate(){
		c.width = c.width;
		// Create black BG
		ct.fillRect(0,0,c.width,c.height);
		// Rotation
		ct.translate(350,240);
		ct.rotate(angle+=0.5 * Math.PI/180);
		ct.translate(-350,-240);



		ct.shadowColor = "#FFF";
		ct.shadowBlur = 30;
		// Shape 1
		ct.beginPath();
		ct.moveTo(0,0);
		ct.lineTo(340,240);
		ct.lineTo(360,240);
		ct.lineTo(720,0);
		ct.closePath();
		var grad = ct.createLinearGradient(350,0, 350, 240);
		grad.addColorStop(0, "rgba(0,0,0,0)");
		grad.addColorStop(1, "rgba(255,255,255,0.6)");

		ct.fillStyle = grad;
		ct.fill();

		ct.beginPath();
		ct.moveTo(340,240);
		ct.lineTo(0,480);
		ct.lineTo(720,480);
		ct.lineTo(360,240);
		ct.closePath();
		var grad1 = ct.createLinearGradient(350,240,350,480);
		grad1.addColorStop(0,"rgba(255,255,255,0.6)");
		grad1.addColorStop(1,"rgba(0,0,0,0)");
		ct.fillStyle = grad1;
		ct.fill();
	}

	var a;

	function runthis(){
		a = requestAnimationFrame(runthis);
		rotate();
	}

	runthis();

	document.querySelector("#start").addEventListener("click", function(){
		cancelAnimationFrame(a);
		runthis();
	})

	document.querySelector("#stop").addEventListener("click", function(){
		cancelAnimationFrame(a);
	})

}