#!/usr/bin/node

var events=require('events');
var util=require('util');

var Radio=function(station){
  var self=this;
  setTimeout(function(){
    self.emit('open',station);
  },0);

  setTimeout(function(){
    self.emit('stop',station);
  },5000);

  for(var methodName in events.EventEmitter){
    console.log(methodName);
    this[methodName]=events.EventEmitter[methodName];
  }
}



module.exports=Radio;
