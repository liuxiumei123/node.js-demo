#!/usr/bin/node

var argv=process.argv;

console.log('length:%d',argv.length);

console.log('node位置:',argv[0]);
console.log('文件位置:',argv[1]);

//接受命令

var order=process.argv[2];
if(order=="--help"||order=="-h"){
  console.log("请输入表达式，自动求值");
}else{
  console.log(order+" = "+eval(order));
}
