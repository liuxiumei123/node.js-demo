#!/usr/bin/node

const bodyParser=require('body-parser');
const formidable=require('formidable');
const fs=require('fs');
const path=require('path');
const express=require('express');
const app=express();
app.listen(8080);

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser());
app.get('/',function(req,res){
  res.sendFile('index.html')
})

app.post('/upload',function(req,res){
  console.log(req.body);
  console.log('');
  var form = new formidable.IncomingForm();
  form.uploadDir = "./upload";
  
  form.on('file', function(name, files) {
      console.log('');
      console.log(name,files);
      console.log('');
    var oldpath =__dirname + "/"+ files.path;
    var path = require("path");
    var extname = path.extname(files.name);
    var newpath = __dirname + "/upload/"+files.name;
    fs.rename(oldpath,newpath,function (err) {
      if(err){
         throw Error("改名失败");                             
      }
     res.end("success");  

    }); 
  });


  form.parse(req, function(err, fields){
    if(err) return res.end('error');
    console.log(fields);
  });
})
