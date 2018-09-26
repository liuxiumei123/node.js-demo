#!/usr/bin/node

var Dog=require('./022-dog.js');


function onBark(){
  this.energy--;
  console.log(this.name+"的能量为："+this.energy);
  if(this.energy==0){
   console.log('\033[1;32m'+this.name+" is tired !\033[1;37m");
   this.stop();
  }
}


var taidi=new Dog('taidi',8);
taidi.on('bark',onBark);

var jingba=new Dog('jingba',20);
jingba.on('bark',onBark);

