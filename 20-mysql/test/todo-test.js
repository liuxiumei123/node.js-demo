const  TodoList=require('../models/todo.js');

var todo=new TodoList();

todo.addItem('游泳',function(err){
  if(err){
    console.log(err);
  }
});

todo.getAll(function(err,items){
  console.log(items);
})
