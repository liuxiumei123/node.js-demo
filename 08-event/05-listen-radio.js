#!/usr/bin/node


var Radio=require('./03-radio.js');

var station={
  freq:'106.7',
  name:'music radio'
}

var radio=new Radio(station);
radio.on('open',function(station){
  console.log('%s FM %s opened',station.name,station.freq);
})

radio.on('stop',function(station){
  console.log('%s FM %s stoped',station.name,station.freq);
})
