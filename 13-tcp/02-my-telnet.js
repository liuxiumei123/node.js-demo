#!/usr/bin/node

var net=require('net');

if(process.argv.length<4){
  console.log("Usage\n\t :./02-my-telnet.js host port");
}
var host=process.argv[2];
var port=process.argv[3];

var socket=net.connect({port:port,host:host},function(){
  console.log('connected host %s port %s',host,port);

  process.stdin.on('data',function(data){
    var txt=data.toString('utf8').slice(0,-1)+'\r\t';
    socket.write(txt);
  });

socket.pipe(process.stdout);//服务器返回结果输出
});


socket.on('end',function(){
    console.log('connected end');
    process.exit();
});

