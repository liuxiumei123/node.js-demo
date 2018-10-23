#!/usr/bin/node


var http=require('http');
var fs=require('fs');
var util=require('util');
var log=util.debuglog('app');


http.createServer(function(req,res){
  log('--------------');
  log(req.headers);
  log(req.url);

var filename=__dirname+req.url;

var stream=fs.createReadStream(filename);
stream.pipe(res);
stream.on('error',function(err){
  log(err.message);
  stream.pipe(res);
});



}).listen(8080);


