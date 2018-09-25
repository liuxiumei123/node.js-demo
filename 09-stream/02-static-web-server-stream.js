#!/usr/bin/node


var http=require('http');
var fs=require('fs');


http.createServer(function(req,res){
  console.log('--------------');
  console.log(req.headers);
  console.log(req.url);

var filename=__dirname+req.url;

var stream=fs.createReadStream(filename);
stream.pipe(res);
stream.on('error',function(err){
  console.log(err.message);
  stream.pipe(res);
})



}).listen(8080);


