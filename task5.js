var express = require('express');
var app = express();
var mysql = require('mysql');
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

var conn = mysql.createConnection({
    # TODO: Create remote connection to mysql on Raspberry Pi.
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/task5.html');
});

app.post('/', urlencodedParser, function (req, res){
  
  # TODO: Data querying and generate response.
  var reply='';
 
  res.send(reply);
});

server.listen(8080, function(){
    console.log('listening on *:8080');
});