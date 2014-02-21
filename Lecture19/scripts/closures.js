window.onload = function(){
	var u = document.querySelector("#username");
	var p = document.querySelector("#password");
	// Display Elements
	var fname = document.querySelector("#fullname");
	var addr = document.querySelector("#address");
	var rank = document.querySelector("#rank");
	var photo = document.querySelector("#photo");
	// Server URL
	var serverURL = "http://localhost:9000/doLogin";

	function doLogin(u,p,callback){
		var frm = new FormData();
		frm.append('username', u);
		frm.append('password', p);

		var xhr = new XMLHttpRequest();
		xhr.open("POST", serverURL, true);
		xhr.addEventListener("load", function(){
			var output = JSON.parse(xhr.responseText);
			var gClosure = getClosure(output);
			callback(gClosure);
		});
		xhr.send(frm);
	}

	function getClosure(obj){
		var today = new Date();
		return (function(){
			return {
				showName:function(){
					return obj.fullname;
				},
				showAddress:function(){
					return obj.address + ", " + obj.city;
				},
				picture:obj.profilePhoto,
				rank:obj.rank,
				status:function(){
					if(obj===0){
						return false;
					} else {
						return true;
					}
				}
			}
		})
	}

	function doWork(c){
		if(c().status()){
			fname.innerHTML = "Name: " + c().showName();
			addr.innerHTML = "Address: " + c().showAddress();
			rank.innerHTML = "Rank: " + c().rank;
			photo.setAttribute("src", "images/" + c().picture);
			photo.style.visibility = "visible";
		} else {
			fname.innerHTML = "User Not Found !";
			addr.innerHTML = "";
			rank.innerHTML = "";
			photo.style.visibility = "hidden";
		}
	}



	document.querySelector("#login").addEventListener("click", function(){
		doLogin(u.value, p.value, doWork);
	})

}