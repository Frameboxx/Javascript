window.onload = function(){

	// alert("This is a message");

	//var username = prompt("Type in your name", "type your name here");
	//document.querySelector("#greet").innerHTML = "Hello " + username;

	var userinput = confirm("Do you want to continue ?");
	if(userinput==true){
		document.querySelector("#greet").innerHTML = "User wants to continue";
	} else {
		document.querySelector("#greet").innerHTML = "User does not want to continue";
	}
}