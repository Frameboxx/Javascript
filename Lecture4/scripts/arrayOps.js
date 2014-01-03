window.onload = function(){
	var fruits = ["Apple","Kiwi","Mango","Strawberry"];

	// Adds elements into the array
	fruits.push("Orange");
	fruits.push("Guava");

	// Removes the last element in the array
	fruits.pop();
	fruits.pop();

	//console.log(fruits.indexOf("Kiwi"));

	// Remove a specific item from the array
	var fruitToRemove = "Apple";
	fruits.splice(fruits.indexOf(fruitToRemove),1);


	// Outputs all elements of the array to console
	for(var i = 0;i < fruits.length; i++){
		console.log(fruits[i]);
	}

}