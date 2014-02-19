// All strings have a length property and can be accessed character-by-character like Arrays. 
// Since we've added the encrypt function to the String.prototype, its available to all strings
// Simply iterate over each character and convert it into its ASCII equivalent
// Finally convert the array into a string by joining all entries by a ":" delimiter
String.prototype.encrypt = function(){
	var outStr = [];
	for(var i=0;i<this.length;i++){
		outStr.push(this[i].charCodeAt(0))
	}
	return outStr.join(":");
}

// Decryption works by converting the ":" delimited string back to an array
// then we iterate over each item in the array and convert it back from ASCII
String.prototype.decrypt = function(){
	var temp = this.split(":");
	var outStr = '';
	for(var i = 0;i<temp.length;i++){
		outStr += String.fromCharCode(temp[i]);
	}
	return outStr;
}


var phrase = "Mary had a little lamb";

var encrypted = phrase.encrypt();

console.log('Encrypted: ' + encrypted);
console.log('Decrypted: ' + encrypted.decrypt());

