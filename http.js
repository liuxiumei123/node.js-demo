#!/usr/bin/node


var net=require('net');

var serve=net.createServer(function(socket){
  socket.on('data',function(data){
    socket.write('你好');
  })

  socket.on('end',function(){
    console.log('链接断开');
})
  socket.write('欢迎光临《深入浅出Node.js》');
})

serve.listen(8080,function(){
  console.log('serve bound');
})
