function ajax(config){
	var method = config.method || 'GET';
	var payload = config.payload || null;
	var xhr = new XMLHttpRequest();
	xhr.open(method, config.url, true);
	xhr.upload.addEventListener("progress", function(e){
			config.progress(e);
	});
	xhr.addEventListener("load", function(){
		config.success(xhr);
	});
	xhr.addEventListener("error", config.error);
	xhr.send(payload);
}

// To call the function

ajax({
	method: 'POST',
	url: 'http:localhost:9000/savedata',
	success: function(xhr){
		// process the data here
	},
	error: function(){
		// Manage your error here
	},
	payload: formData
});