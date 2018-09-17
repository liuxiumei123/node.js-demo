#!/usr/bin/node

var str=process.argv[2];


function ecode(str){
  var arr=new Buffer(str,"base64").toString('utf8').split(":");
  return {
    name:arr[0],
      passwd:arr[1]
  }
}
if(str){
  console.log("姓名和密码为:",ecode(str));
}else{
  console.log('请输入base64的账号和密码');
}
