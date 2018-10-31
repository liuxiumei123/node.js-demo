#!/usr/bin/node

var http=require('http');
const  url=require('url');


var city=encodeURI(process.argv[2]||'石家庄');

var addr ="http://v.juhe.cn/weather/index?format=2&cityname="+city+"&key=59cf6410bb5a22dd03006aba831a0fe6";//当天天气
var options=url.parse(addr);
console.log(options);

http.get(options,res=>{
  var result='';
  res.on('data',function(data){
    result+=data.toString('utf8');
  })
  res.on('end',function(){
    var city=JSON.parse(result);
    console.log(city);
  })
})
