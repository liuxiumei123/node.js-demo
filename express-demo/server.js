#!/usr/bin/node

const express=require('express');
const app=express();
app.listen(8080);
var path=require('path');

app.use(express.static(path.join(__dirname,'public')));


app.get('/a',function(req,res){
   res.render('index.html');
   
})
