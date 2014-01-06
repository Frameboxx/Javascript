window.onload = function(){
	var myName = "Sachin B";
	var greetOutput = document.getElementById('greet');
	
	// Function Expression
	var greetMe = function(UserName){
		var hour = new Date().getHours();

		if(hour >= 0 && hour < 12){
			return "Good Morning " + UserName;
		} else if(hour >= 12 && hour < 16){
			return "Good Afternoon " + UserName;
		} else if(hour >= 16 && hour < 20){
			return "Good Evening " + UserName;
		} else {
			return "Good Night " + UserName;
		}
	}

	greetOutput.innerHTML = greetMe(myName);
	
	
	// Function Declaration
	function saysHello(){
		console.log("Hello User !");
	}

	// Calling the function
	saysHello();

	// Function Constructor Method
	var avg = new Function('a','b','c','return (a+b+c)/3');
	console.log('Average is ' + avg(10,20,30));

	// IFFE - Immediately Invoked Function Expression (Anonymous Function that gets auto-executed)
	(function(){
		console.log('This is an Anonymous Function');
	})()  

}