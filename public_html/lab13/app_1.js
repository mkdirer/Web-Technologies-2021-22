var http = require('http');
var express = require('express');
const hostname = "pascal.fis.agh.edu.pl"
var app = express(hostname);
var routes = require('./routes')(app);
http.createServer(app).listen(1302, function(){
                console.log('Express server listening on port ' + 1302);
});
