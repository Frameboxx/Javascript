window.onload = function(){
	document.getElementById("findName").addEventListener("click", parse);

	function parse(){
		var tx = document.getElementById("inputText");
		// Find the Name
		var findName = tx.value.match(/^(?:Name|Fullname|Full Name).+/gim);
		var processName = findName[0].replace(/Name|Fullname|Full Name|[:]/gi, "").trim();
		document.getElementById("name").value = processName;

		// Find the Phone
		var findPhone = tx.value.match(/[0-9\-\+]{10,13}/g);
		document.getElementById("phone").value = findPhone[0];

		// Find the E-Mail
		var findEmail = tx.value.match(/(?:[a-z0-9._]+)@(?:[a-z0-9._]+\.[a-z]{2,6})/gi);
		document.getElementById("email").value = findEmail[0];
	}
}