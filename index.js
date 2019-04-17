// Simple nodejs server
"use strict";

const http = require('http');
const fs = require('fs');

// create server that listens to port
http.createServer(function(req, response) { // when client connects, execute this callback

	let vsebina;

    if (req.url == "/") { // vse kar ne vemo kaj je
    	debugger;
        response.writeHead(200, { 'Content-Type': 'text/html' });

    } else if (req.url == "/index.html") { // index.html
    	debugger;

        // read local file synchronous
        vsebina = fs.readFileSync('index.html');

        // write headers
        response.writeHead(200, { 'Content-Type': 'text/html' });

    } else if (req.url == "/mesta") {
    	debugger;

        // write headers
        response.writeHead(200, { 'Content-Type': 'application/json' });

        // TODO povezi se na mysql


    } else {
    	debugger;

    	console.log("Napaka, ne razumem zahteve. ");
    	response.writeHead(500);

    }

    if (vsebina){
    	// write file contents
    	response.end(vsebina);
    }else{
    	response.end();
    }
    

}).listen(8000);
