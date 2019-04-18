// Simple nodejs server
"use strict";

const http = require('http');
const fs = require('fs');
var mysql = require('mysql');

// create server that listens to port
http.createServer(function(req, response) { // when client connects, execute this callback

    let vsebina;

    if (req.url == "/" || req.url == "/favicon.ico") { // vse kar ne vemo kaj je
        debugger;
        response.writeHead(200, { 'Content-Type': 'text/html' });

    }  else if (req.url == "/app.html") { // app.html
        debugger;

        // read local file synchronous
        vsebina = fs.readFileSync('app.html');

        // write headers
        response.writeHead(200, { 'Content-Type': 'text/html' });

    } else if (req.url == "/index.html") { // index.html
        debugger;

        // read local file synchronous
        vsebina = fs.readFileSync('index.html');

        // write headers
        response.writeHead(200, { 'Content-Type': 'text/html' });

    } else if (req.url == "/mesta") {
        debugger;

        var connection = mysql.createConnection({host: 'localhost', user: 'root', password: 'p', database: 'javascript'});
        connection.connect();

        connection.query('SELECT ime FROM mesta order by ime desc LIMIT 10', function(error, results, fields) {
            // TUKAJ NADALJUJ PROGRAM KO SE QUERY IZVEDE
            if (error) throw error;
	        response.writeHead(200, { 'Content-Type': 'application/json' });
	        debugger;
 			response.end(JSON.stringify(results));  // prenesi rezultate (mysql binary data ) kot TEKST
        });

       	return; // da ne bo šel v if (vsebina)

    } else {
        debugger;

        console.log("Napaka, ne razumem zahteve. ");
        response.writeHead(500);

    }

    if (vsebina) {
        // write file contents
        response.end(vsebina);
    } else {
        response.end();
    }


}).listen(8000);
