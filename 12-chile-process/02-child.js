#!/usr/bin/node

var cp=require('child_process');

console.log('I am child process.porcess PID:',process.pid);

var timer=setInterval(function(){
  console.log('now time:',Date.now());

},2000);

setTimeout(function(){
  clearInterval(timer);
  console.log('16 seconds,Game over');
},16000);
