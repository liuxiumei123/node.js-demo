#!/usr/bin/node

var http=require('http');
const  URL=require('url');

//var dir="http://user:pass@host.com:8080/p/a/t/h?query=string#hash";
//console.log(url.parse(dir,true,true));

var city=process.argv[2]||'石家庄';

var addr="http://v.juhe.cn/historyWeather/citys?key=2524407f6e43e074fe7df33456223436&province_id=15";


http.get(addr,res=>{
  var result='';
  res.on('data',function(data){
    result+=data.toString('utf8');
  })
  res.on('end',function(){
    var city=JSON.parse(result);
    console.log(city);
  })
})
