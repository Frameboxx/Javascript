window.onload = function(){

	var countTo = new Date(2014,0,20,15,50,0).getTime();
	var countdownDisplay = document.getElementById('display');


	function countdown() {
		var now = new Date().getTime();
		var difference = (countTo - now) / 1000;
		var days = parseInt((difference / (24 * 60 * 60)) % 365);
		var hours = parseInt((difference / (60 * 60)) % 24);
		var minutes = parseInt((difference / 60) % 60);
		var seconds = parseInt(difference % 60);
		if(difference<=10){
			countdownDisplay.className = "blink";
		}
		displayDate(days,hours,minutes,seconds);
		trigger(days,hours,minutes,seconds);
	}

	function displayDate(days,hours,minutes,seconds){
		countdownDisplay.innerHTML = numformat(days) + ":" + numformat(hours) + ":" + numformat(minutes) + ":" + numformat(seconds);
	}

	function numformat(num){
		if(num>=0 && num<10){
			return "0" + num;
		} else if(num<0){
			return "00";
		} else {
			return num;
		}
	}

	
	var timer = setInterval(countdown, 1000);


	function trigger(days,hours,minutes,seconds){
		var check = days<=0 && hours<=0 && minutes<=0 && seconds<=0;
		if(check){
			clearInterval(timer);
			// DO anything that you want here.
			countdownDisplay.innerHTML = "LAUNCH !!";
		}
	}


}