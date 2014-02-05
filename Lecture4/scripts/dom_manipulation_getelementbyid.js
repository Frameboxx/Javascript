window.onload = function(){
	var Mytitle = document.getElementById("title");

	// This will get the contents of the tag with id as 'title'
	console.log(Mytitle.innerHTML); // Getter
	
	// This will set the contents of the tag with id as 'title'
	Mytitle.innerHTML = "Hello World !"; // Setter

	// Manipulating CSS styles with JS
	Mytitle.style.color = "rgb(0,255,0)";
	Mytitle.style.textDecoration = "Underline";
	Mytitle.style.border = "3px solid";

	console.log(Mytitle.style);

	if(Mytitle.style.color==='rgb(0, 255, 0)'){
		console.log("Yes its green !!");
	}

	var phoneNo = document.getElementById("phoneNo");
	console.log(phoneNo.value); // getter
	phoneNo.value = 10; // setter
}