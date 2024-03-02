// create a web server that listens on port 3000 and serves a file called comments.html
// when a request is made to the server, it should log the request method and request url
// to the console
// Use the createServer method from the http module to create a server
// Use the fs module to read the comments.html file and serve it as the response
// Use the listen method to listen on port 3000

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  console.log(request.method);
  console.log(request.url);
  response.writeHead(200, {"Content-Type": "text/html"});
  fs.createReadStream('./comments.html').pipe(response);
});

// Listen on port 3000, IP defaults to

