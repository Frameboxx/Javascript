window.onload = function(){
	var email = document.querySelector("#email");
	var errorMsg = document.querySelector("#error");
	var regx = /\b[a-z0-9._]+@[a-z0-9-]+\.[a-z.]{2,6}/i;
	var tm;
	email.addEventListener("keyup", function(e){
		console.log('keyup fired');
		var val = e.target.value;
		var ts = regx.test(val);
		if(tm){
			clearTimeout(tm);
		} 
			tm = setTimeout(function(){
				
				// ajax to db if needed. Will be called once the person stops typing + 500ms
				
				if(!ts){
					email.style.background = "red";
					errorMsg.style.visibility = "visible";
				} else {
					email.style.background = "white";
					errorMsg.style.visibility = "hidden";
				}
			},500);
		

		
	})
}