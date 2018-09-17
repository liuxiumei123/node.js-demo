

var name=process.argv[2];
var passwd=process.argv[3];

if(name||passwd){
  console.log("用户名:%s,密码:%s",name,passwd);
  console.log('编码格式base64位:%s',new Buffer(name+":"+passwd).toString('base64'));
}else{
   console.log('请输入姓名和密码，用空格隔开');
}

