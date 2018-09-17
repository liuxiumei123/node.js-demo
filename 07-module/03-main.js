#!/usr/bin/node

var global=require('./03-global.js');
console.log(global.pi);
console.log(global.circle(20).area());
var c=new global.Circle(20);
console.log(c.area());
