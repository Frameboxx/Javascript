// JSON Static Data & Web Server (Lecture 12)
// Written by Sachin Bhatnagar | 2014 | sachin@frameboxx.in

var http = require("http");
var fs = require("fs");
var host = "127.0.0.1";
var port = "9000";
var jsonEndPoint = "/servedata";

var server = http.createServer(function(request,response){
var staticData = 	[{"name":"Sachin Bhatnagar","email":"sachin@frameboxx.in","age":"33"},
					{"name":"Rahul Sharma","email":"rahul@gmail.com","age":"30"},
					{"name":"Pankaj Sahai","email":"pankaj@msn.com","age":"50"},
					{"name":"Rajbir Singh","email":"rajbir@oracle.com","age":"40"},
					{"name":"Amit Chawla","email":"rjc@gmail.com","age":"20"}];



if(request.url===jsonEndPoint){
		response.writeHead(200,{"Content-type":"application/json"});
		response.end(JSON.stringify(staticData));
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
	console.log('X1 JSON Data Server for Lecture 12 Started Successfully !');
	console.log('Written by Sachin Bhatnagar | 2014 | sachin@frameboxx.in');
	console.log('---------------------------------------------------------');
	console.log('Page:: To access, go to http://localhost:' + port);
	console.log('JSON Endpoint URL:: http://localhost:' + port + jsonEndPoint);
});