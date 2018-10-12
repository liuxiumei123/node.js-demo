#!/usr/bin/node


var fs=require('fs');


var w=fs.watch(__dirname,console.log);

process.on('SIGINT',function(){
  w.close();
  console.log('程序还在运行，但是不在监视，10秒后自动结束程序');
  setTimeout(function(){
    process.exit(1);
  },10000);
})
