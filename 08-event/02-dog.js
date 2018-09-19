#!/usr/bin/node

var EventEmitter=require('events').EventEmitter;

function Dog(name,energy){
  this.name=name;
  this.energy=energy;
  this.stop=function(){
     clearInterval(timer);
  }

  var self=this;
  var timer=setInterval(function(){
    self.emit('bark');
  },1000);
}

Dog.prototype.__proto__=EventEmitter.prototype;


module.exports=Dog;
