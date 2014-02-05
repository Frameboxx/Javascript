window.onload = function(){
	var boxes = document.getElementsByClassName('boxes');
	var boxSet = document.getElementById('boxSet');
	var score = document.getElementById('score');
	var setNum = Math.round((Math.random())*11);
	var scoreCount = 0;

	boxSet.addEventListener("click", gameFunction);

	function gameFunction(evt){
		if(evt.target.className==='boxes'){
			scoreCount++;
			var currentBox = evt.target.getAttribute('data-boxNum');
			if(currentBox == setNum) {
				// found the right box
				evt.target.style.backgroundColor = "rgb(0,255,0)";
				evt.target.style.boxShadow = '0px 0px 20px 5px rgb(0,255,0)';
				score.innerHTML = "You found the box in " + scoreCount + " attempts !";
				fadeOut(setNum);
			}
		}
	}


	function fadeOut(n){
		// This function fades out all boxes except the right one
		for(var i = 0; i<boxes.length; i++){
			if(boxes[i].getAttribute('data-boxNum') != n){
				//boxes[i].style.opacity = 0.3;
				boxes[i].className += " boxesFade";
			}
		}
	}

}