window.onload = function(){
	var nav = document.querySelector(".nav");
	var stage = document.querySelector(".stage");
	var server = "http://localhost:9000/";
	var partials = "partials/";

	nav.addEventListener("click", loadContent);

	function loadContent(e){
		if(e.target.classList.contains("getFile")){
			var content = e.target.getAttribute("data-src");
			window.history.pushState(content, null, server+content);
			ld(content);
		}
	}

	function ld(page){
		var page = page || "home";
		var xhr = new XMLHttpRequest();
		xhr.open('GET', (server+partials+page+".htm"), true);
		xhr.addEventListener("load", function(){
			stage.innerHTML = xhr.response;
		});
		xhr.send();
	}

	ld();

	window.addEventListener("popstate", function(e){
		ld(e.state);
	})
}