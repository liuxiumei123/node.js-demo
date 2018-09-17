#!/usr/bin/node

var count=0;
module.exports=function Num(){
  this.add=function(){
    count++;
  }
  this.getCount=function(){
    return count;
  }
}


