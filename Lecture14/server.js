// File Upload & Web Server (Lecture 14)
// Written by Sachin Bhatnagar | 2014 | sachin@frameboxx.in

var http = require("http");
var fs = require("fs");
var formidable = require("formidable")
var host = "127.0.0.1";
var port = "9000";
var uploadURL = "/upload";
var fileList = "/getlist";

var server = http.createServer(function(request,response){


if(request.url===uploadURL && request.method.toLowerCase() == 'post'){
		// response.writeHead(200,{"Content-type":"application/json"});
		// response.end(JSON.stringify(staticData));
		var nfile = '';
		var tmpFile = '';
		var newForm = new formidable.IncomingForm();
		newForm.uploadDir = "./upload";
		newForm.keepExtensions = true;
		newForm.parse(request, function(err, fields, files) {
				tmpFile = files.upload.path;
				nfile = "./upload/" + files.upload.name;
		      response.writeHead(200, {'content-type': 'text/plain'});
		      response.end();
    		});
		newForm.on('end', function() {
			fs.rename(tmpFile, nfile);
		});
	} else if(request.url === fileList){
		fs.readdir("./upload/", function(err, files){
			response.writeHead(200, {'content-type': 'text/plain'});
			response.end(JSON.stringify(files));
		});
	} else {
			var fpath = '.' + request.url;
			if (fpath == './')
				fpath = './index.htm';

			var fext = fpath.substr(fpath.lastIndexOf('.'))
			
			if(fext === '.js'){
				var ctype = 'text/javascript';
			} else if(fext === '.css'){
				var ctype = 'text/css';
			} else {
				var ctype = 'text/html';
			}
			
			fs.exists(fpath, function(file_exists) {
			
				if (file_exists) {
					fs.readFile(fpath, function(error, content) {
						if (error) {
							response.writeHead(500);
							response.end();
						}
						else {
							response.writeHead(200, { 'Content-Type': ctype });
							response.end(content, 'utf-8');
						}
					});
				}
				else {
					response.writeHead(404);
					response.end();
				}
			});
	}
	
});

server.listen(port,host,function(){
	console.log('X1 File Upload & Web Server for Lecture 14 Started Successfully !');
	console.log('Written by Sachin Bhatnagar | 2014 | sachin@frameboxx.in');
	console.log('---------------------------------------------------------');
	console.log('Page:: To access, go to http://localhost:' + port);
	console.log('Upload Endpoint URL:: http://localhost:' + port + uploadURL);
	console.log('Files List URL:: http://localhost:' + port + fileList);
});