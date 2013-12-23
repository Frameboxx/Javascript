window.onload = function(){
	// First Ensure DOM is loaded by using window.onLoad

	console.log('Page Loaded Properly !!');
	var fruits = ["Apple", "Orange","Mango"] // Creates an Array
	console.log(fruits[1]) // Getter. Gets the item at index number 1

	fruits.push("Kiwi"); // Adds Kiwi to the array

	//console.log(fruits[3]);

	console.log("Number of Items in the Array : " + fruits.length);

	fruits.pop(); // Removes the last item from the array

	console.log("Number of Items in the Array : " + fruits.length);

	console.log(fruits.indexOf("Orange")); // Finds index of an item

	var itemToRemove = "Apple";

	fruits.splice(fruits.indexOf(itemToRemove),1); // Removing a specific item from the array

	// fruits.forEach(function(e){
	// 	console.log(e);
	// }) // Will not work in older IE versions

	for(var i=0;i<fruits.length;i++){
		console.log(fruits[i]);
	} // Will work in all browsers


	// DOM Getters & Setters

	var title = document.getElementById("titleText"); // Getting access to an element by ID
	//console.log(title.innerHTML); // Getting the contents of that element
	title.innerHTML = "Javascript Class"; // Setter. Sets the value of that element.
	//console.log(title.innerHTML);

	var fruitList = document.getElementsByClassName("listItem"); // Getting access via class names. Returns an array
	//console.log(fruitList[1].innerHTML);
	//fruitList[1].innerHTML = "Chickoo";
	for(var i=0;i<fruitList.length;i++){
		if(fruitList[i].innerHTML === "Oranges"){
			fruitList[i].style.color="Red";
			fruitList[i].style.fontWeight = "Bold";
		}
	} // Loop over all objects with class name 'listItem' and if you find "Oranges", style them in 'red' with 'bold' text.]

	
	// console.log(fruitList[1].style); // Gets you the style definition of the item.

	// Getting element by Tag Name (such as h1, h2, p, body etc.)
	var getTag = document.getElementsByTagName("body");
	console.log(getTag); // Shows you the array returned by the above method
	getTag[0].style.backgroundColor = "rgb(190,190,190)"; // Sets CSS Style attribute 'backgroundColor'

	// Getting hold of an input tag by ID and changing its value programmatically
	var fullName = document.getElementById("fullName");
	console.log(fullName.value);
	fullName.value = "Honda Civic";

	// Getting hold of a set of radio buttons by their Name attribute and checking for the one that is checked and outputting its value to the console.
	var colors = document.getElementsByName("colors");
	for(var i = 0;i<colors.length;i++){
		if(colors[i].checked){ // Returns True if the current radio button is checked or returns false. You do not have to specifically type === true or === false. Its implied.
			console.log(colors[i].value);
		}
		
	}

	colors[2].checked = true; // Setting a radio button's checked state



}