#!/usr/bin/node

var server=require('net').createServer();
var fs=require('fs');

server.on('connection',function(socket){
  console.log('new connetction form',socket.remoteAddress);
  socket.setEncoding('utf8');

  socket.on('data',function(data){

    var cmd=data.slice(0,-2);
    switch(cmd){
      case 'ls':
        var files=fs.readdirSync(__dirname);
        files.forEach(f=>socket.write(f+'\r\n'));
        break;
      case 'quit':
        server.close();
        process.exit();
        break;
      default:
        console.log(socket.remoteAddress+" : "+socket.remotePort+"> "+cmd);

    }} )

  socket.on('end',function(){
    console.log(socket.remoteAddress,'disconnected');
  })
}).listen(8080,function(){
  console.log('TCP server is listening on port 8080');
})
