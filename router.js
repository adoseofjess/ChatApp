var fs = require('fs')
var routeRequest = function (request, response) {
	var url = request.url;
	if (url == "/") {
		fs.readFile("public/index.html", function(err, data) {
			if (err) {
				throw err;
			}
			response.write(data);
			response.end();
		});
	} else {
		console.log("public" + url)
		fs.readFile("public" + url, {encoding: 'utf8'}, function(err, data) {
			if (err) {
				console.log(err)
			}

			if (data) {response.write(data);}
			response.end();
		})
	}
};

module.exports.routeRequest = routeRequest;

