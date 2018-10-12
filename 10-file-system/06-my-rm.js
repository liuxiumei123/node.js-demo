#!/usr/bin/node

var fs=require('fs');
var join=require('path').join;
var src=process.argv[2];

if(fs.statSync(src).isFile()) fs.unlinkSync(src);

if(fs.statSync(src).isDirectory()) deleteDir(src);


function deleteDir(src){
  var files=fs.readdirSync(src);

  for(var i=0;i<files.length;i++){
    var file=join(src,files[i]);

    if(fs.statSync(file).isFile()){
      fs.unlinkSync(file);
      continue;
    }
    if(fs.statSync(file).isDirectory()){
      deleteDir(file);
    }
  }
  fs.rmdirSync(src);

}
