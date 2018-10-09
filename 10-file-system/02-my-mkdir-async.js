#!/usr/bin/node

var fs=require('fs');

var file=process.argv[2];

fs.mkdir(file,function(err){
  if(err){
    console.log(err.message);
  }
})
