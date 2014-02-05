window.onload = function(){
	var loadBtn = document.querySelector('#load');
	var display = document.querySelector('#display');
	var throbber = document.querySelector("#preloader");
	var errorDsp = document.querySelector("#error");
	// Server URLs
	var url = "http://localhost:9000/servedata";
	var saveURL = 'http://localhost:9000/savedata';
	var saveFormData = "http://localhost:9000/saveformdata";
	// Form Fields
	var fullname = document.getElementById("name");
	var email = document.getElementById("email");
	var age = document.getElementById("age");
	document.getElementById("add").addEventListener("click", addToDb);

	loadBtn.addEventListener("click", loadData);
	// Sorting Links
	document.querySelector("#byname").addEventListener("click", function(){
		sortBy("name");
	})

	document.querySelector("#byemail").addEventListener("click", function(){
		sortBy("email");
	})

	document.querySelector("#byage").addEventListener("click", function(){
		sortBy("age");
	})

	// Sort Function
	function sortBy(key){
		if(jsData){
			jsData.sort(function(a,b){
				if(a[key] < b[key]) return -1;
				if(a[key] > b[key]) return 1;
				return 0;
			});
		}
		showData();
	}




	var jsData = null;

	function loadData(){
		throbber.style.visibility = "visible";
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onload = function(){
				errorDsp.style.visibility = "hidden";
				throbber.style.visibility = "hidden";
				jsData = JSON.parse(xhr.responseText);
				showData();
		};
		xhr.addEventListener("error", function(){
				// Manage Error
				errorDsp.style.visibility = "visible";
			});
		xhr.send();
	}

	function jsonStructure(name,email,age){
		this.name = name;
		this.email = email;
		this.age = age;
	}

	// Add to DB
	function addToDb(){
		var isNull = fullname.value!='' && email.value!='' && age.value!='';
		if(isNull){
			throbber.style.visibility = "visible";
			// Store the data using JSON
			//	var getJS = new jsonStructure(fullname.value, email.value, age.value);
			
			// Using FormData API
			var frm = new FormData();
			frm.append("name", fullname.value);
			frm.append("email", email.value);
			frm.append("age", age.value);

			// Begin AJAX
			var xhr = new XMLHttpRequest();
			xhr.open('POST', saveFormData, true);
			xhr.addEventListener("load", function(){
				if(xhr.responseText=="1"){
					errorDsp.style.visibility = "hidden";
					throbber.style.visibility = "hidden";
					loadData();
					clearForm();
				} else {
					// manage error
				}
				
			});
			xhr.addEventListener("error", function(){
				// Manage Error
				errorDsp.style.visibility = "visible";
			});
			
			//	xhr.send(JSON.stringify(getJS));
			xhr.send(frm);
		}
	}

	function clearForm(){
		var frmF = document.querySelectorAll("input");
		for(var i in frmF){
			frmF[i].value = '';
		}
	}


	function showData(){
		display.innerHTML = '';
		for(var i in jsData){
			var str = '<tr>';
				str += '<td>' + jsData[i].name + '</td>';
				str += '<td>' + jsData[i].email + '</td>';
				str += '<td>' + jsData[i].age + '</td>';
				str += '</tr>';
			display.innerHTML += str;
		}
	}


}