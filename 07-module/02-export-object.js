#!/usr/bin/node
var pi=Math.PI;
module.exports=function Circle(raduis){
  this.zhijing=function(){
    return 2*raduis;
  }

  this.area=function(){
    return pi*raduis*raduis;
  }

  this.zhouchang=function(){
    return 2*pi*raduis;
  }


}
console.log(module);
