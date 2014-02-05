window.onload = function(){
	var daysToAdd = document.getElementById('daysToAdd');
	var display = document.getElementById('display');
	var calbutton = document.getElementById('calculate');

	// When the 'Calculate' button on the page is clicked, the calculate() function should be executed
	calbutton.addEventListener("click", calculate);

	// This function computes and displays the future date.
	function calculate(){
		// Convert the number of days to add into milliseconds
		var future = (daysToAdd.value * (24 * 60 * 60)) * 1000;
		// Get the milliseconds value for the current date & time
		var today = new Date().getTime();
		// Add both the values
		var someDay = future + today;
		// Convert the above value (in ms) to a valid Date and display
		display.innerHTML = new Date(someDay);
	}


}