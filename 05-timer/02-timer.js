#!/usr/bin/node

var timeID=setInterval(loop,1000);

function loop(){
  count++;
  if(count===10){
    clearInterval(timeID);
  }
  console.log("I will running forever!");
}

timeID.unref();
