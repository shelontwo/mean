var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

	var html = [];
	html.push('<h1>Olá mundo</h1>'); 

	console.log(res);

	res.end(html.join(''));

}).listen(3000);