#!/usr/bin/node

var cp=require('child_process');
console.log('I am father process. PID:',process.pid);

console.log('cat 01-exec-file.js\n');

var child=cp.spawn('cat',['02-spawn-v1.js']);

child.stdout.pipe(process.stdout);
