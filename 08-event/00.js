#!/usr/bin/node



var EventEmitter=require('events');

var emmitter=EventEmitter.EventEmitter;

for(var i in EventEmitter){
  console.log(i);
}

for(var i in emmitter){
  console.log(i);
}
for(var i in emmitter.EventEmitter){
  console.log(i);
}
