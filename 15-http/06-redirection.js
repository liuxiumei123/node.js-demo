#!/usr/bin/node

var http=require('http');
var url=require('url');

var addr=process.argv[2]||'http://www.sian.com';

function option(addr){

  var options=url.parse(addr);
  options.method='GET';
  //必须要写headers中的用户代理  但是为什么？
  options.headers={'User-Agent':'05-curl.js'};
  
  return options;

}

function get(opt){

 var head= http.get(opt,res=>{
    console.log('status',res.statusCode);
    console.log('message',res.statusMessage);
    console.log('HTTP version',res.httpVersion);
    console.log();

    res.pipe(process.stdout);

    if(res.statusCode<400&&res.statusCode>=300){
      get(option(res.headers.location));
    }
  })
 console.log('headers',head.getHeader('User-Agent'));

}


get(option(addr));
