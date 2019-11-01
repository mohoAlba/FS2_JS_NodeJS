try {
    const http = require("http");
const hostname = 'localhost';
const port = 999;

const server = http.createServer((req, res) => {
    //Set the response variables
    // HTTP status code 200 OK
    res.statusCode = 200;
    // HTTP header as plain text
    res.setHeader('Content-Type', 'text/plain');
    // Text to be displayed
    res.end('Hello World\n');
   });

   server.listen(port,  "localhost", () => {
    console.log(`http://${"localhost"}:${port}/`);
   });

} catch (err) {
    console.log("The requst has not been made");

}

