try {
    var http = require("http");

function onRequest (request, response) {
    console.log("User made a request " + request.url);
    console.log(Date());
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write("Here is some data");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("server is now running...");

} catch (err) {

    console.log("Something wrong has happend");
}

