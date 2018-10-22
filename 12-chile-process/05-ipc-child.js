#!/usr/bin/node

var cp=require('child_process');

console.log('I am child process PID:',process.pid);

process.on('message',function(msg){
  console.log('msg form father: ',msg);
})
process.send('I am child process pid: '+process.pid);
