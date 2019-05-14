// get the http modeul:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response) {
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'}); // send data about the response
            response.write(contents); // send response body
            response.end(); // finished!
        });
    }
    // route for a second webpage
    else if (request.url === "/dojo.html") {
        fs.readFile('dojo.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    // route to read JS file -- must include "." in route
    else if (request.url === "/scripts/index.js") {
        fs.readFile('./scripts/index.js', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/javascript'});
            response.write(contents);
            response.end();
        });
    }
    // route to read CSS file -- muist inclide "." in route
    else if (request.url === "/stylesheets/style.css") {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    // request didn't math anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");