const http = require('http');
const fs = require('fs');

function readFromFile(filePath, contentType, req, res) {
    fs.readFile(filePath, function (error, content) {
        if (error) {
            if (error.code == 'ENOENT') {
                res.writeHead(404);
                res.end(error.code);
            }
            else {
                res.writeHead(500);
                res.end(error.code);
            }
        }
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
}

http.createServer(function (req, res) {

    if (req.url === '/') {
        readFromFile('./index.html', 'text/html', req, res); 
    }
    else if(req.url == '/script.js'){
        readFromFile('./script.js', 'text/javascript', req, res); 
    }
    else if (req.url === '/gettext') {
        readFromFile('./sample.txt', 'text/plain', req, res);
    } 
    else if (req.url === '/getuser') {
        readFromFile('./user.json', 'application/json', req, res);
    } 
    else if (req.url === '/getusers') {
        readFromFile('./users.json', 'application/json', req, res);
    }
    else {
        res.writeHead(404);
        res.end('restricted path');
    }
}).listen(3000, '127.0.0.1');




