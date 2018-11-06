#!/usr/bin/node

var http=require('http');

http.createServer((req,res)=>{
  var path=req.url;
  if(path=="/"){
    var html=`
  <!DOCTYPE html>
  <html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <h1>hello world</h1>
  </body>
  </html>
  `;
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.setHeader('Content-Length',Buffer.byteLength(html));
    res.end(html);
  }else{
    res.statusCode=404;
    res.end('Resource not found!');
  }




}).listen(8080);
