window.onload = function(){
	//console.log('Page Loaded Properly !!');
	// var fruits = ["Apple", "Orange","Mango"]
	//console.log(fruits[1]) // Getter

	// fruits.push("Kiwi"); // Adds Kiwi to the array

	// console.log(fruits[3]);

	// console.log("Number of Items in the Array : " + fruits.length);

	// fruits.pop(); // Removes the last item from the array

	// console.log("Number of Items in the Array : " + fruits.length);

	// console.log(fruits.indexOf("Orange")); // Finds index of an item

	// var itemToRemove = "Apple";

	// fruits.splice(fruits.indexOf(itemToRemove),1);

	// fruits.forEach(function(e){
	// 	console.log(e);
	// }) // Will not work in older IE versions

	// for(var i=0;i<fruits.length;i++){
	// 	console.log(fruits[i]);
	// } // Will work in all browsers


	// var title = document.getElementById("titleText"); // Getter
	// //console.log(title.innerHTML);
	// title.innerHTML = "Javascript Class"; // Setter
	// //console.log(title.innerHTML);

	// var fruitList = document.getElementsByClassName("listItem");
	// //console.log(fruitList[1].innerHTML);
	// //fruitList[1].innerHTML = "Chickoo";
	// for(var i=0;i<fruitList.length;i++){
	// 	if(fruitList[i].innerHTML === "Oranges"){
	// 		fruitList[i].style.color="Red";
	// 		fruitList[i].style.fontWeight = "Bold";
	// 	}
	// }
	
	// console.log(fruitList[1].style);

	// var getTag = document.getElementsByTagName("body");
	// console.log(getTag);
	// getTag[0].style.backgroundColor = "rgb(190,190,190)"

	// var fullName = document.getElementById("fullName");
	// console.log(fullName.value);
	// fullName.value = "Honda Civic";

	var colors = document.getElementsByName("colors");
	for(var i = 0;i<colors.length;i++){
		if(colors[i].checked){
			console.log(colors[i].value);
		}
		
	}

	colors[2].checked = true;


}