window.onload = function(){
	var wordInput = document.querySelector("#wordinput");
	document.querySelector("#check").addEventListener("click", function(){
		if(palindrome(wordInput.value)){
			wordInput.style.background = "green";
		} else {
			wordInput.style.background = "red";
		}
	})

	function palindrome(word){
		return word.replace(/\W/gi, "").toLowerCase() === word.split("").reverse().join("");
	}
	
}