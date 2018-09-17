#!/usr/bin/node


var fs=require('fs');
var file=process.argv[2];
if(file){
fs.readFile(file,function(err,buf){
  if(err){
    console.log(err);
    process.exit(0);
  }
  if(buf.toString('utf8').slice(0,2)==="BM"){
 
    console.log('位图的宽度:%s',buf.readInt32LE(0x12));
    console.log("位图的高度:%s",buf.readInt32LE(0x16));
    console.log('位图的深度:%s',buf.readUInt16LE(0x1c));
  }
})
}else{
  console.log("请输入位图文件名");
}


//const buf = Buffer.from([0x1, 0x2, 0x3, 0x5,0x12]);

//console.log(buf);
//console.log(buf.readInt8(0));
//console.log(buf.readUInt8(0));
//console.log(buf.readIntBE(0));
//console.log(buf.readIntLE(0));
//console.log(buf.readInt16LE(0));
//console.log(buf.readInt16BE(0));
