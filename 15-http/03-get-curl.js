#!/usr/bin/node

var http=require('http');
//const  URL=require('url');

//var dir="http://user:pass@host.com:8080/p/a/t/h?query=string#hash";
//console.log(url.parse(dir,true,true));

//var city=process.argv[2]||'石家庄';
//Node 默认不支持中文编码,所以在生成url参数的时候  使用如下方法进行处理
var city=encodeURIComponent(process.argv[2]||'石家庄');

//var addr="http://v.juhe.cn/historyWeather/citys?key=2524407f6e43e074fe7df33456223436&province_id=15";  //历史记录
var addr ="http://v.juhe.cn/weather/index?format=2&cityname="+city+"&key=59cf6410bb5a22dd03006aba831a0fe6";//当天天气


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
