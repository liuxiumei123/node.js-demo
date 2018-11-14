var express = require('express');
var router = express.Router();
var TodoList=require('../models/todo.js');
var todo=new TodoList();

/* GET home page. */
router.get('/', function(req, res, next) {
  todo.getAll(function(err,items){
    if(err){
      res.status(500).send('DB ERROR');
      return;
    }
    res.render('index', { items: items });
})


router.post('/',function(req,res,next){
  todo.addItem(req.body.item,function(err){
    if(err){
      console.log(err);
    }
  });


  todo.getAll(function(err,items){
    if(err){
      console.log(err);
       return;
    }
   res.render('index', { items: items });
  })

});

 


module.exports = router;
