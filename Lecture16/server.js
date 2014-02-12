// JSON File Data & Web Server (Lecture 16)
// Written by Sachin Bhatnagar | 2014 | sachin@frameboxx.in

var http = require("http");
var fs = require("fs");
var host = "127.0.0.1";
var port = "9000";
var jsonEndPoint = "/servedata";

var server = http.createServer(function(request,response){
	


if(request.url===jsonEndPoint){
		response.writeHead(200,{"Content-type":"application/json"});

		fs.readFile('catalog.json', 'utf8', function (err,data) {
			response.end(data);
				
				
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
	console.log('X1 JSON File Data Server for Lecture 16 Started Successfully !');
	console.log('Written by Sachin Bhatnagar | 2014 | sachin@frameboxx.in');
	console.log('---------------------------------------------------------');
	console.log('Page:: To access, go to http://localhost:' + port);
	console.log('JSON Endpoint URL:: http://localhost:' + port + jsonEndPoint);
});