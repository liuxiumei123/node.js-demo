#!/usr/bin/node

var http=require('http');
const url=require('url');

var items=["吃饭","睡觉"];

http.createServer((req,res)=>{
//if(req.url==='/'&&req.headers==="GET"){
   var data=url.parse(req.url,true).query.item;
   if(data){
     items.push(data);
   }


  var html=`

 <!DOCTYPE html>
  <html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>form表单</title>
  </head>
  <body>
    <h1>Todo List</h1>
    <ul>
    ${items.map(function(item){return '<li>'+item+'</li>'}).join('\n')}
    </ul>
    <form action="/" method="GET">
      <input type="text" name="item" />
      <input type="submit" value="Add item"/>
    </form>
  </body>
  </html>

  `;
    res.end(html);

 // }


}).listen(8080);

