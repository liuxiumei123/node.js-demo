#!/usr/bin/node

var cp=require('child_process');
var http=require('http');
console.log('I am father process. PID:',process.pid);
http.createServer(function(req,res){
  var child=cp.spawn('./02-child.js');
  child.stdout.pipe(res);
}).listen(8080);

