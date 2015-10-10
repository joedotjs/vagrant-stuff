var express = require('express');
var server =require('http').createServer();
var app = express();

server.on('request', app);

app.get('/', function (req, res) {
    res.send('Hello, class!');
});

server.listen(80, function () {
    console.log('Server running!');
});