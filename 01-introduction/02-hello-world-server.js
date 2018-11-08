#!/usr/bin/node

var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
   if(req.url!='/favicon.ico'){

  console.log('url',req.url);
  console.log('method',req.method);
  console.log('headers',req.headers);
  var items='';
  req.setEncoding('binary');
  req.on('data',function(data){
    items+=data;
  })
  req.on('end',function(){
    console.log('');
    fs.writeFile('a.txt', items,{encoding:'binary'}, (err) => {
        if (err) throw err;
       console.log('文件已保存！');

    });
    console.log(items);
    res.end(items);
  // res.end('hello world')
  })
  }  

}).listen(8080);
