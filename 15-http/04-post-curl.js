#!/usr/bin/node

var http=require('http');
var url=require('url');
var msg=process.argv[2]||'请求结束';

var options=url.parse('http://localhost:8080');
options.method='POST';



var req=http.request(options,res=>{

  res.setEncoding('utf8');
  res.on('data',function(data){
       console.log('body: ',data);
  }).on('error',function(err){
    console.log(err.message);
  })
})

req.write(msg);
req.end();
