#!/usr/bin/node

var Dog=require('./02-dog.js');


function onBark(){
  this.energy--;
  console.log(this.name+"的能量为："+this.energy);
  if(this.energy==0){
   console.log(this.name+" is tired !");
   this.stop();
  }
}


var taidi=new Dog('taidi',8);
taidi.on('bark',onBark);

var jingba=new Dog('jingba',"20");
jingba.on('bark',onBark);

