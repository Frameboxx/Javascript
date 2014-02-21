// JSON Static Data & Web Server (Lecture 19)
// Written by Sachin Bhatnagar | 2014 | sachin@frameboxx.in

var http = require("http");
var fs = require("fs");
var formidable = require("formidable");
var host = "127.0.0.1";
var port = "9000";
var doLogin = "/doLogin";

var server = http.createServer(function(request,response){
var staticData = 	[{'username':'alan','password':'clowns','fullname':'Alan Shore','address':'#201, Marriott, Boston','city':'Boston','accountID':'ACT928100-CD','profilePhoto':'alan.jpg','rank':'Associate Partner'},{'username':'denny','password':'cocoapuffs','fullname':'Denny Crane','address':'6920, Wilshire Boulevard','city':'Boston','accountID':'ACT7819183-CD','profilePhoto':'denny.jpg','rank':'Senior Partner'}];

function findUser(db, user,pass){
	return db.filter(function(item){
		return item.username == user && item.password == pass
	});
}

if(request.url===doLogin){
		var form = new formidable.IncomingForm();
		form.parse(request, function(err, fields, files) {
     			var getU = findUser(staticData, fields.username, fields.password)[0] || 0;
     			response.writeHead(200,{"Content-type":"application/json"});
				response.end(JSON.stringify(getU));
  		  });
		
		
	} else {
			var fpath = '.' + request.url;
			if (fpath == './')
				fpath = './closures.htm';

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
	console.log('X1 JSON Data Server for Lecture 19 Started Successfully !');
	console.log('Written by Sachin Bhatnagar | 2014 | sachin@frameboxx.in');
	console.log('---------------------------------------------------------');
	console.log('Page:: To access, go to http://localhost:' + port);
	console.log('Login EndPoint URL:: http://localhost:' + port + doLogin);
	console.log("Username: alan, Password: clowns");
	console.log("Username: denny, Password: cocoapuffs");
});