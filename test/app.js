//app.js

var http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Node JS</h1>');
    res.end('<p>Hello world</p>')
}).listen(2999)
console.log("starting...")
