#!/usr/bin/node

var server=require('http').createServer();


server.on('request',function(req,res){
  console.log('req.header : '+JSON.stringify(req.headers));
  req.pipe(process.stdout);
  res.end('hello world');
});

server.listen('8080',function(){
  console.log('listening port: ',this.address().port);
})