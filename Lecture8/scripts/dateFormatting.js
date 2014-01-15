window.onload = function(){

	var dateToFormat = new Date(); // We want to format this date
	var display = document.getElementById('display'); // We'll display the result here

	// This function formats the date, accepts a date object and a string representing the way we want our date formatted.
	function formatDate(date, format){
		// This array holds day names
		var daysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		// This array holds month names
		var monthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		// dayName stores the name of the day as per the day number (0-6)
		var dayName = daysArray[date.getDay()];
		// dayDate stores the date (e.g. 15)
		var dayDate = date.getDate();
		// month stores the name of the month as per the month number (0-11)
		var month = monthsArray[date.getMonth()];
		// year stores the current year (2014)
		var year = date.getFullYear();
		// First replace all instances of 'dd' in the format string to the value of dayDate and repeat this for all other keywords like 'DDD','MM','YYYY'
		format = format.replace("dd", dayDate);
		format = format.replace("DDD", dayName);
		format = format.replace("MM", month);
		format = format.replace("YYYY", year);
		// return the formatted date
		return format;
	}


	// display the formatted date
	display.innerHTML = formatDate(dateToFormat, "dd-MM-YYYY is a DDD");

	// formatDate(dateToFormat, "Today is DDD, dd, MM, YYYY");

}