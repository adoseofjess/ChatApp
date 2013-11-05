// require ('./chat.js')
// var sendMessage = require('./chat').sendMessage
// console.log("in the chat UI page")

// var ChatConstructor = require('./chat.js').ChatConstructor;
// var sendMessage = require('./chat.js').sendMessage;

// var getMessage = function () {
// 	//get message from input form
// 	//send message to other users
// 	var text = $("#message").val();
// 	console.log(text)
// 	chat.sendMessage(text);
// 	$("#message").html("");
// };

var displayMessage = function (text) {
	console.log("displaying message")
	$(".messages").append(text+"<br>");
};

$(document).ready(function () {
	var socket = io.connect('http://localhost');
	console.log("Doc is ready")
	var chat = new Chat.ChatConstructor(socket);


	socket.on("message", function(text){
		console.log("reaching the socket")
		displayMessage(text);
	})

	$("form").submit(function (event) {
		event.preventDefault();
		var text = $(".message").val();
		chat.sendMessage(text);
		$(".message").val("");
	})




})

