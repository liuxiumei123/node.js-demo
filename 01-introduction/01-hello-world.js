#!/usr/bin/node
var http=require('http');
var fs=require('fs');


http.createServer(function(req,res){
 // res.setHeader('Access-Control-Allow-Origin',"*");
 var data= fs.readFileSync('dog.jpg');
 res.end(data);
}).listen(8080);

console.log("hello world");

