// We require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORTONE = 7000;
var PORTTWO = 7500;

// We need two different functions to handle requests, one for each server.
function handleRequestOne (req, res) {
  res.end("You are doing a great job!");
}
function handleRequestTwo (req, res) {
	res.end("You need to put more effort into it!");
}

// We need two different functions to handle requests, one for each server.
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// Starting our servers
serverOne.listen(PORTONE, function() {
	// Callback triggered when server is successfully listening.
	console.log("Server listening on: http://localhost:%s", PORTONE);
}); 

serverTwo.listen(PORTTWO, function() {
	// Callback triggered when server is successfully listening.
	console.log("Server listening on: http://localhost:%s", PORTTWO);
})