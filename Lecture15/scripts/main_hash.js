window.onload = function(){
	var stage = document.querySelector(".stage");
	var server = "http://localhost:9000/";
	var partials = "partials/";

	function ld(page){
		var page = page || "home";
		var xhr = new XMLHttpRequest();
		xhr.open('GET', (server+partials+page+".htm"), true);
		xhr.addEventListener("load", function(){
			stage.innerHTML = xhr.response;
		});
		xhr.send();
	}

	window.addEventListener("hashchange", function(e){
		var loc = window.location.hash.substring(2);
		ld(loc);
	});

	(function(){
		var loc = window.location.hash.substring(2);
		ld(loc);
	})();

	
}