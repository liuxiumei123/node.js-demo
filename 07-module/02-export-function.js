#!/usr/bin/node

var pi=Math.PI;

module.exports=function circle(raduis){
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



console.log(module);
