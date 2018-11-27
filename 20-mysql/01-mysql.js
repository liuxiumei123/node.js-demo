#!/usr/bin/node

var mysql=require('mysql');
var http=require('http');

http.createServer(function(req,res){
var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'ddd',
      database : 'test'

});


//连接数据库
connection.connect();

//操作数据库

var sql='select * from books';
//var sql='select * from books :where id=?';
connection.query(sql,[2],function(err,result){
  if(err){
    console.log(err);
    process.exit(100);
  }
  console.log(result);
  console.log(typeof result);
  result=JSON.stringify(result);
  res.end(result)
})

}).listen(8080);

/*
//插入数据
//var sql='insert into books(id,title,status) values(4,"RESTful",3)';
var sql='insert into books(id,title,status) values(?,?,?)';
connection.query(sql,[10,"Service",2],function(err,result){

  if(err){
    console.log(err);
    process.exit(100);
  }
  console.log(result);
})

*/


/*
//更新数据
var sql='update books set title=? where id=?';
connection.query(sql,["中国",2],function(err,result){

  if(err){
    console.log(err);
    process.exit(100);
  }
  console.log(result);
})

*/


//删除数据
//var sql='delete from books where title = "Mysql"';
//connection.query(sql,["中国",2],function(err,result){

 // if(err){
//    console.log(err);
 //   process.exit(100);
 // }
 // console.log(result);
//})



//关闭数据库
//connection.end();
