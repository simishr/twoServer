// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORTONE = 7000;
var PORTTWO = 7500;

// Here we create a generic function to handle requests and responses
function handleRequestOne (req, res) {
	
 // The below statement is triggered (client-side) when the user visits the PORT URL
  res.end("You are doing a great job!");
}
// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);
	
// Here we start our server so that it can begin listening to client requests.
serverOne.listen(PORTONE, function() {

 // The below statement is triggered (server-side) when a user visits the PORT URL
console.log("Server listening on: http://localhost:%s", PORTONE);
}); 


function handleRequestTwo (req, res) {
	res.end("You need to put more effort into it!");
}

var serverTwo = http.createServer(handleRequestTwo);
serverTwo.listen(PORTTWO, function() {
	console.log("Server listening on: http://localhost:%s", PORTTWO);
})