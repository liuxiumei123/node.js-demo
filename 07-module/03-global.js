#!/usr/bin/node
var pi=Math.PI;

function circle(raduis){
  function area(){
    return pi*raduis*raduis;
  }

  function zhouchang(){
    return 2*pi*raduis;
  }
  return {
    area:area,
      zhouchang:zhouchang
  }
}




