#!/usr/bin/node

var fs=require('fs');

var file=process.argv[2];

fs.readFile(file,function(err,buf){
  if(err){
    console.log(err.message);
  }else{
    console.log(buf.toString('utf8'));
  }
});

