#!/usr/bin/node

const bodyParser=require('body-parser');
const formidable=require('formidable');
const express=require('express');
const app=express();
app.listen(8080);
var path=require('path');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser());


app.post('/upload',function(req,res){
  console.log(req.body);
  console.log('');
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files){
    if(err) return res.end('error');
    console.log('received fields:');
    console.log(fields);
    console.log('received files:');
    console.log(files);
    res.end('hello world');
  })
})
