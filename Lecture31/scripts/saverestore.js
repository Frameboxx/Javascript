window.onload = function(){
	var c = document.querySelector("#mc");
	var ct = c.getContext("2d");

	// ct.shadowColor = "rgba(0,0,0,0.6)";
	// ct.shadowBlur = "30";
	ct.globalAlpha = 0.2;
	ct.translate(100,100);
	ct.fillStyle = "red";
	ct.fillRect(10,10,300,300);
	ct.save(); // Store fillstyle = red;

	ct.fillStyle = "green";
	ct.fillRect(20,20,300,300);
	ct.save(); // fillstyle = green

	ct.fillStyle = "yellow";
	ct.fillRect(30,30,300,300);
	ct.translate(0,0);
	ct.restore();
	ct.fillRect(40,40,300,300);

	ct.restore();
	ct.fillRect(50,50,300,300);
}