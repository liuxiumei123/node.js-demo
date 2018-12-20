#!/usr/bin/node

var http=require('http');
var url=require('url');
var cheerio=require('cheerio');

var addr='http://edu.51cto.com/courselist/index-zh5.html';

http.get(addr,function(res){
  var html="";

  res.on('data',function(chunk){
  
    html+=chunk;
    
  });


  res.on('end',function(){
    var $=cheerio.load(html);
    var arr=[];
    $('body').find('div.main').each(function(){
      var cName=$(this).find('a').text().trim(),
          cTime=$(this).find('p.fl').text().trim(),
          cTarget=$(this).find('div.course_target').text().trim(),
          cUrl=$(this).find('a').attr('href').trim();
      if(cTime==='') return;

       arr.push([cName,cTime,cTarget,cUrl]);
    })
    console.log(arr);
  })

})

