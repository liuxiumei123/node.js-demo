#!/usr/bin/node

var timeID=setInterval(loop,1000);
var count=0; 

function loop(){
  count++;
  if(count===10){
    clearInterval(timeID);
    //timeID.unref();
  }
  console.log("I will running forever!");
}


console.log(timeID);
console.log(typeof timeID);

