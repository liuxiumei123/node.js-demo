#!/usr/bin/node

var fs=require('fs');

var file=process.argv[2];
if(!file){
  file=__filename;
}

var size=fs.statSync(file).size;
var buf=new Buffer(size);


var fid=fs.openSync(file,'r');
fs.readSync(fid,buf,0,size,0);
process.stdout.write(buf.toString('utf8'));


fs.closeSync(fid);


