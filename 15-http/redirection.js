#!/usr/bin/node

var http=require('http');
var url=require('url');

var addr=process.argv[2]||'http://www.sian.com';



function get(address){

  http.get(address,res=>{
    console.log('status',res.statusCode);
   // console.log('message',res.statusMessage);
   // console.log('HTTP version',res.httpVersion);
    console.log(res.headers);

    res.pipe(process.stdout);

    if(res.statusCode<400&&res.statusCode>=300){
      get(res.headers.location);
    }
  })

}


get(addr);
