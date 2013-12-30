window.onload = function(){
	var time = 2100;
	

	// if(a<b){
	// 	console.log("a is less than b");
	// } else if(a>b) {
	// 	console.log("a is greater than b");
	// } else {
	// 	console.log("a is equal to b");
	// }

	if(time>=0000&&time<1200){
		console.log("Good Morning");
	} else if(time>=1200&&time<1600){
		console.log("Good Afternoon");
	} else if(time>=1600&&time<2000){
		console.log("Good Evening");
	} else {
		console.log("Good Night");
	}

}