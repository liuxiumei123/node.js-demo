#!/usr/bin/node

console.log('进程process.id:'+process.pid);

process.stdin.resume();

process.on('SIGINT',function(){
  console.log('you press ctrl-c,good bye');
})

process.on('SIGTSTP',function(){
  console.log('you press ctrl-z,stop running');
})
