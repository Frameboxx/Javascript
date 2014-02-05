window.onload = function(){
	var uploadFile = document.querySelector("#uploadFile");
	var progressBar = document.querySelector("#progressBar");
	var fileslist = document.querySelector("#fileslist");
	// Server URLs
	var uploadURL = "http://localhost:9000/upload";
	var getListURL = "http://localhost:9000/getlist";
	// Upload Btn
	document.querySelector("#upload").addEventListener("click", uploadNow);

	uploadFile.addEventListener("change", function(){
		getFileDetails();
	});

	// Ajax Function
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

	function getFileDetails(reset){
		var fsize = document.querySelector('.filesize');
		var ftype = document.querySelector('.filetype');
		if(!reset){
			var file = uploadFile.files[0];
			var sizeInMb = Math.ceil(((file.size/1024)/1024) * 100) / 100;
			fsize.innerHTML = sizeInMb + " Mb";
			ftype.innerHTML = file.type;
		} else {
			fsize.innerHTML = "0 Mb";
			ftype.innerHTML = "No File Selected";
		}
	}

	function uploadNow(){
		if(uploadFile.value!=''){
			var file = uploadFile.files[0];
			var form = new FormData();
			form.append("upload", file);
			ajax({
				method: 'POST',
				url: uploadURL,
				success: function(xhr){
					setTimeout(function(){
						progressBar.value = 0;
						uploadFile.value = '';
						updatelist();
						getFileDetails(true);
					}, 2000);
				},
				progress: function(e){
					if(e.lengthComputable){
						var perc = Math.round((e.loaded*100)/e.total);
						progressBar.value = perc;
					}
				},
				error: function(){
					// Do something about the error
				},
				payload: form
			});
		}
	}

	function updatelist(){
		ajax({
			method: 'GET',
			url: getListURL,
			success: function(xhr){
				var list = JSON.parse(xhr.responseText);
				fileslist.innerHTML = '';
				for(var i in list){
					fileslist.innerHTML += '<li>' + list[i] + '</li>';
				}
			},
			progress: function(e){

			},
			error: function(){

			}
		})
	}

	updatelist();
}