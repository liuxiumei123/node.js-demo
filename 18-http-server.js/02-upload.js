#!/usr/bin/node

var http=require('http');

http.createServer((req,res)=>{
  console.log(req.headers);
  
  if(req.url!="/"||req.method!='POST'){

   res.statusCode=404;
   res.end('Resource not found');

  }else if(req.method==='POST'){
    var items=[];
    req.on('data',function(data){
      items.push(data);
    })
    req.on('end',function(){
      var buffer= Buffer.concat(items);
      res.end(buffer);

    })


  }







}).listen(8080);
