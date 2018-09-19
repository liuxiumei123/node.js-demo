#!/usr/bin/node


var Radio=require('./03-radio.js');

var station={
  freq:'106.7',
  name:'music radio'
}

var radio=new Radio(station);
radio.on('open',function a(station){
  console.log('%s FM %s opened',station.name,station.freq);
})

radio.on('open',function b(station){
  console.log("事件名：",this.eventNames());
  console.log('open事件监听器数量：',this.listenerCount('open'));
  console.log('open事件的监听器：',this.listeners('open'));
})
radio.on('stop',function(station){
  console.log('%s FM %s stoped',station.name,station.freq);
})
