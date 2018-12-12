#!/usr/bin/node
var http=require('http');
var url=require('url');

console.log(__dirname);
http.createServer(function(req,res){


  console.log(decodeURI(url.parse(req.url).pathname));

 res.end(url.parse(req.url).pathname);
}).listen(8080);

console.log("hello world");

