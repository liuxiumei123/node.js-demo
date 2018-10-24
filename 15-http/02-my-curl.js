#!/usr/bin/node

var http=require('http');

var url=process.argv[2]||'http://www.baidu.com/index.html';


http.get(url,res=>{
  console.log('status',res.statusCode);
  console.log('message',res.statusMessage);
  console.log('HTTP version',res.httpVersion);
  console.log();

  console.log(res.headers);
  res.pipe(process.stdout);
})
