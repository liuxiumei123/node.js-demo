#!/usr/bin/node

var pi=require('./02-export-var.js');

console.log(pi);

var circle=require('./02-export-function.js');

console.log(circle(20).area());
console.log(circle(20).zhouchang());


var Circle=require('./02-export-object.js');

var c=new Circle(20);
console.log(c.area());
console.log(c.zhouchang());
