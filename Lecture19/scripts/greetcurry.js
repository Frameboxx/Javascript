function greet(arg){
	var outStr = '';
	if(arguments.length>1){
		// custom processing
		for(var i=0;i<arguments.length;i++){
			outStr += arguments[i];
		}
		console.log(outStr);
	} else if(arguments.length===1){
		return function(message){
			console.log(arg + " " + message);
		}
	} else {
		console.log("Sorry I don't know you !");
	}
}

var m_arguments = greet("This","is","Working!") // This is Working!
var s_argument = greet("Hello!");
var no_argument = greet();

m_arguments;
s_argument("This is a curry function !");
