window.onload = function(){

	var myBtn = document.getElementById('myBtn');

	myBtn.addEventListener("click", BtnClickCallback);

	function BtnClickCallback(evt){
		console.log('Someone clicked the button !');
	}

}