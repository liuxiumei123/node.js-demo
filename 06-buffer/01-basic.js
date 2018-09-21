#!/usr/bin/node

var buf1=new Buffer(256);
buf1[0]=0;
console.log("buf1的长度:%s,内容为:",buf1.length,buf1);


var buf1=new Buffer(256);
for(var i=0;i<buf1.length;i++){
  buf1[i]=i;
}
console.log("buf1的内容为:",buf1);

var buf2=buf1.slice(246,256);

console.log('buf2的长度为：%s,内容为：',buf2.length,buf2);

buf2.fill(0);

console.log('buf2的长度为：%s,内容为：',buf2.length,buf2);


var arr=[1,2,3,'he',0x12,0x02];
var buf3=new Buffer(arr);

console.log('buf3的长度为：%s,内容为：',buf3.length,buf3);

var buf4=new Buffer("hello world",'utf8');
console.log('buf4的长度为:%s，内容为:',buf4.length,buf4.toString());


buf3.copy(buf3);

console.log('buf3的长度为：%s,内容为：',buf3.length,buf3);






