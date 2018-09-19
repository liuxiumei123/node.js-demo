#!/usr/bin/node

var http=require('http');

var options={
  hostname:'192.168.254.144',
  port:8080,
  path:'/',
  method:'GET'
}

var req=http.request(options,function(res){
  console.log(res.statusCode);
  console.log(JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.write('hi');
  res.on('data',function(chunk){
    console.log(chunk);
  })
})

req.end();
