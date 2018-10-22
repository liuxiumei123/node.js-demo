#!/usr/bin/node

var cp=require('child_process');
console.log('I am father process. PID:',process.pid);


var child=cp.spawn('./02-child.js',[],{detached:true,stdio:['ignore',1,2]});

//child.stdout.pipe(process.stdout);
//child.stderr.pipe(process.stderr);

child.unref();

setTimeout(function(){
  console.log('5 seconds over');
  process.exit(1);

},5000)
