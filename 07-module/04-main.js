#!/usr/bin/node


var Num=require('./04-share.js');

var n1=new Num();
var n2=new Num();

n1.add();
n1.add();
console.log(n1.getCount());
console.log(n2.getCount());


n2.add();
console.log(n1.getCount());
console.log(n2.getCount());


