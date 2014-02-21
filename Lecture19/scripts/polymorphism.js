function Clock(){
	this.day = new Date().getDay();
	this.showDay = function(){
		var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		console.log("Today is " + days[this.day]);
	}
}

var clock = new Clock();

clock.showDay();

clock.day = 1;

clock.showDay();

clock.showDay = function(){
	console.log("Day No. : " + this.day);
}

clock.showDay();

var newClock = Object.create(clock);

newClock.showDay();

