(function(root) {
	var Chat = root.Chat = ( root.Chat || {} )

	var ChatConstructor = Chat.ChatConstructor = function(socket) {
		console.log("Chat is initialized")
		this.socket = socket
	};

	ChatConstructor.prototype.sendMessage = function (text) {
		console.log("in send message")
		this.socket.emit("message", text);
	};

	// module.exports.ChatConstructor = ChatConstructor;
	// module.exports.ChatConstructor.sendMessage = sendMessage;

})(this);

// module.exports.root.Chat.ChatConstructor = ChatConstructor;
// module.exports.root.Chat.ChatConstructor.sendMessage = sendMessage;
