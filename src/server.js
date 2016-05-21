var express = require('express');
var fs = require('fs');
var app = express();

app.get('/*', function (req, res, next){
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  next();
});

app.get('/', function (req, res){
  var path = __dirname+'/index.html';
  res.sendFile(path);
});

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  console.log(__dirname);
});
