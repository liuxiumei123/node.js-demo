#!/usr/bin/node

//var EventEmitter=require('events').EventEmitter;

function Dog(name,energy){
  this.name=name;
  this.energy=energy;
  this.listeners={};
  this.stop=function(){
     clearInterval(timer);
  }

  var self=this;
  var timer=setInterval(function(){
    self.emit('bark');
  },1000);
  this.emit=function(e,args){
   this.listeners[e].forEach(function(fn){
       fn.call(self,args);
    })
  }


  this.on=function(e,fn){
    if(typeof this.listeners[e]==='undefined'){
      this.listeners[e]=[];
    }
     this.listeners[e].push(fn);
    
  }
}

//Dog.prototype.__proto__=EventEmitter.prototype;


module.exports=Dog;
