var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var routeRequest = require('./router').routeRequest;
var createChat = require('./lib/chat_server').createChat;
var app = http.createServer(routeRequest);

createChat(app);
app.listen(3000);

function handler (req, res) {
	console.log(__dirname);
  fs.readFile(__dirname + '/public/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

// function (request, response) {
//
// 	router.routeRequest(request, response);
//
// 	response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World\n');
// })




// io.sockets.on('connection', function(socket) {
// 	console.log("We're connected!!!!");
//
// 	socket.on("message", function(data) {
// 		console.log(data);
// 		socket.emit("echo", data);
// 	});
// });

console.log('Server running at http://127.0.0.1:3000/');
