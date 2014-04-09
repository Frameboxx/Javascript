// JSON Database & Web Server (Lecture 13)
// Written by Sachin Bhatnagar | 2014 | sachin@frameboxx.in
// Before running this server for the first time :
// npm install mongojs formidable

var http = require("http"),
fs = require("fs"),
formidable = require("formidable"),
host = "127.0.0.1",
port = "9000",
jsonEndPoint = "/servedata",
saveDataEndPoint = "/savedata",
saveDataMP = "/saveformdata",
dbURL = "sachinbee:x1lectures@ds027739.mongolab.com:27739/x1lectures",
collections = ['addressBook'],
db = require("mongojs").connect(dbURL, collections);

var server = http.createServer(function(request,response){

function saveToDb(data){
	db.addressBook.save(data, function(err, saved) {
		if( err || !saved ) {
			return false;
		} else {
		  	return true;
		}
	});
}

if(request.url===jsonEndPoint){
		// Serve JSON Data from DB
		response.writeHead(200,{"Content-type":"application/json"});
		db.addressBook.find(function(err, users) {
			console.log('AddressBook Data Served ! | ' + Date());
		  	response.end(JSON.stringify(users));
		});
	} else if(request.url===saveDataEndPoint){
		 // JSON Save
		request.on('data', function(chunk) {
			var saveD = saveToDb(JSON.parse(chunk.toString()))
				if(saveD===false){
					console.log('JSON Data NOT Saved ! | ' + Date());
					response.writeHead(200, {"Content-type":"text/plain"});
					response.end("0");
				} else {
					console.log('JSON Data Saved ! | ' + Date());
					response.writeHead(200,  {"Content-type":"text/plain"});
					response.end("1");
				}
	    });
	} else if(request.url===saveDataMP){
		// Handle FormData()
		var form = new formidable.IncomingForm();
		    form.parse(request, function(err, fields, files) {
		   	var saveD = saveToDb(fields);
				if(saveD===false){
					console.log('Form Data NOT Saved ! | ' + Date());
					response.writeHead(200,  {"Content-type":"text/plain"});
					response.end("0");
				} else {
					console.log('Form Data Saved ! | ' + Date());
					response.writeHead(200,  {"Content-type":"text/plain"});
					response.end("1");
				}
	             response.end();
      	});
	} else {
		// Serve HTML Files
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
	console.log('X1 Database & Web Server for Lecture 35 Started Successfully !');
	console.log('Written by Sachin Bhatnagar | 2014 | sachin@frameboxx.in');
	console.log('---------------------------------------------------------');
	console.log('Page:: To access, go to http://localhost:' + port);
	console.log('JSON Endpoint URL:: http://localhost:' + port + jsonEndPoint);
	console.log('JSON Save to Database Endpoint :: http://localhost:' + port + saveDataEndPoint);
	console.log('FormData Save to Database Endpoint :: http://localhost:' + port + saveDataMP);
});