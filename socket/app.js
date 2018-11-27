var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var io=require('socket.io')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req, res) {
   res.sendfile(__dirname + '/index.html');
});




io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world'  });
    socket.on('my other event', function (data) {
        console.log(data); 
    });

});

module.exports = app;
