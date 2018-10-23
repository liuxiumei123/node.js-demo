#!/usr/bin/node

var fs=require('fs');
var dir=process.argv[2]||__dirname;
console.log('start');

//console.log(fs.readdirSync(dir));
//fs.readdir(dir,function(err,files){
//  console.log(files);
//})
//
function receive(data){
   console.log(data.join('   '));
}
function readdirSync(callback){
  fs.readdir(dir,function(err,files){
    if(err){
      console.log(err.message);
    }else{
      callback(files);
    }
  })
}

readdirSync(receive);
console.log('end');


