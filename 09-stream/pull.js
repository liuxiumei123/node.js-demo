#!/usr/bin/node

var Readable=require('stream').Readable;
var util=require('util');

var c=97;
function Mystream(){//调用基类  构造函数中的方法
  Readable.call(this);
}
//继承原型上的方法
util.inherits(Mystream,Readable);

//_read方法重载

Mystream.prototype._read=function(){
 this.push(String.fromCharCode(c++));
 if(c>'z'.charCodeAt(0)) this.push(null);
}


var rs=new Mystream();
rs.push('hello');
rs.on('data',function(chunck){
  process.stdout.write(chunck);
})


//rs.pipe(process.stdout);


//var rs=new Readable(); 
//var c=97;//a的ascii编码I
//rs._read=function(){ 
//  rs.push(String.fromCharCode(c++));
//    if(c>'z'.charCodeAt(0)) rs.push(null);
//rs._read=function(){
//  rs.pipe(process.stdout);

