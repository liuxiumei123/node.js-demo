#!/usr/bin/node


var http=require('http');
var fs=require('fs');


var root=__dirname+'/'+(process.argv[2]||'www');

http.createServer(function(req,res){
  console.log('--------------');
  var url='http://'+req.headers.host+req.url;
  console.log('URL为：'+url);
  console.log(req.headers);
  console.log("");

var filename=root+req.url;

var stream=fs.createReadStream(filename);
stream.pipe(res);


stream.on('error',function(err){
  console.log(err.message);
  stream.pipe(res);
})



}).listen(8080);


