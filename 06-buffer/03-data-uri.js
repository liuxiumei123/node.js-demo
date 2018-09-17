#!/usr/bin/node

var fs=require('fs');
var path=require('path');
var http=require('http');
var file=process.argv[2];
if(!file){
  console.log('文件格式不正确');
}

try{

var data=fs.readFileSync(file).toString('base64');
}catch(e){
  console.log('图片读取失败');
}
var mine='image/'+path.extname(file).slice(1);

var src='data:'+mine+";base64,"+data;
//console.log(src);
var html='<!DOCTYPE html></html><body><img alt="book" src="'+src+'"/></body></html>';

http.createServer(function(req,res){
  res.end(html);
}).listen(8080);





