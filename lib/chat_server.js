var socketio = require('socket.io')

var createChat = function(server) {
	var io = socketio.listen(server);

	io.sockets.on('connection', function (socket) {
		socket.on('message', function (data) {
			console.log("hi")
			console.log(data);
		  socket.emit('message', data);
		});
	});
};

module.exports.createChat = createChat;