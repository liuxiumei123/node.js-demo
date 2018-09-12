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
        console.log(msg[++i]+" : ");
   });

process.stdin.on('end',function(){
  console.log(me);
});
