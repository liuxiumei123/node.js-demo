const db=require('./database.js');

var TodoList=function(){};

TodoList.prototype.getAll=function(cb){
  const sql='SELECT * FROM todo';

  var items=[];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;
    }
    result.forEach((item)=>{ items.push(item);});
    console.log(items);
    cb(false,items);
  })
};

TodoList.prototype.addItem=function(item,cb){
  const sql='INSERT INTO todo(item) VALUES(?)';

  db.query(sql,[item],function(err){
    if(err){
      cb(true);
      return;
    }
    cb(false);
  })
};




module.exports=TodoList;
