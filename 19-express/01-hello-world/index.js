#!/usr/bin/node

const express=require('express'),
      app=express();
app.listen(8080);


app.get('/',function(req,res){
  res.end('hello world');
})
