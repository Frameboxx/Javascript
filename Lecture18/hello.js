function greet(message){
	// i have my own 'this' unless you override it with .call, .bind etc.
	console.log(this.hello + " " + message);
}

var ravi = {
	hello:"Namaste!"
}

var john = {
	hello:"Hi There!"
}

var emanuel = {
	hello:"Shalom!"
}

// The .call runs the greet() function and passes a reference to the 'ravi' object
// which is then available as 'this' in the greet function.
// the first argument of .call,.apply and .bind HAS to be the reference which you want the 
// function's 'this' to point to.
greet.call(ravi, "How are you today ?");
// greet.call(john, "I just arrived here!");


// Bind returns a function which you have to execute unlike .call/.apply which run the functions directly.
var myFunction = greet.bind(ravi, "How are you?");