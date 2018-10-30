#!/usr/bin/node

var http=require('http');

http.createServer(function(req,res){
  var body='hello world';

  //响应给客户端的信息
  res.statusCode=400;
  res.setHeader('Content-Length',Buffer.byteLength(body));
  res.setHeader('Content-type','text/plain');

  res.end(body);

  //响应给服务端的信息
  console.log(req.headers);
  console.log('');
  req.pipe(process.stdout);

  
}).listen(8080);
