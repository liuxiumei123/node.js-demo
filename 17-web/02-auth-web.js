#!/usr/bin/node

var http=require('http');

http.createServer(function(req,res){
  
  if(req.headers.authorization){
    var auth=req.headers.authorization;
    console.log(auth);
    console.log(new Buffer(auth,'base64').toString('utf8'));
    res.end('1234567890');
  }else{
    res.writeHead(401,{'WWW-Authenticate':'Basic'});
    res.end('who are you');
  }


}).listen(8080);
