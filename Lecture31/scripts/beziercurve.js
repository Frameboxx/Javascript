window.onload = function(){
	var c = document.querySelector("#mc");
	var ct = c.getContext("2d");

	var bezier1 = [220,50];
	var bezier2 = [320,290];

	ct.fillRect(bezier1[0], bezier1[1],10,10);
	ct.fillRect(bezier2[0], bezier2[1],10,10);
	ct.fillText(bezier1[0] + "," + bezier1[1], bezier1[0], bezier1[1]-5);
	ct.fillText(bezier2[0] + "," + bezier2[1], bezier2[0], bezier2[1]-5);


	ct.moveTo(100,200);
	ct.lineWidth = "3";
	ct.bezierCurveTo(bezier1[0], bezier1[1], bezier2[0], bezier2[1], 400,200);
	ct.stroke();

}