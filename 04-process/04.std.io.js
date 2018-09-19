#!/usr/bin/node

var me={};

var i=0;

var msg=['name','email','qq','phone'];


   console.log(msg[i]+" : ");

   process.stdin.on('data',function(data){
     //  var cmd= 'me.'+msg[i]+'="'+data.slice(0,data.length-1)+'"';
       //console.log(cmd);
        //eval(cmd);
     me[msg[i]]=data.slice(0,data.length-1).toString();
       // me[msg[i]]=eval(data.slice(0,data.length-1));
       // console.log(me);
       
       ++i>3?console.log('请输入ctrl-d终止程序.输出 me 对象'): console.log(msg[i]+" : ");
   });

process.stdin.on('end',function(){
  console.log(me);
});

