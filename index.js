// Simple nodejs server

const http = require('http');
const fs = require('fs');

// read local file synchronous
const html = fs.readFileSync('index.html');

// create server that listens to port
http.createServer(function (req, res) { // when client connects, execute this callback

	// write headers
	res.writeHead(200, {'Content-Type': 'text/html'});
    
    // write file contents
    res.end(html);

}).listen(8000);