var createError = require('http-errors');
//menambahkan express
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//module fibonacci akan diexport dan disimpan kedalam variable fibonacciRouter
var fibonacciRouter = require('./routes/fibonacci');

//variabel app untuk menampung express
var app = express();

// view engine setup
//app set digunakan untuk melakukan setting aplikasi
//set untuk mencari template di folder views
app.set('views', path.join(__dirname, 'views'));
//diatur agar dapat menggunakan template ejs
app.set('view engine', 'ejs');

//logging is enabled using morgan request logger
app.use(logger('dev'));
//handles parsing http request bodies
app.use(express.json());
//
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//dengan ini, apabila url menggunakan /users, route akan akan diload. dalam kasus ini akan
//ditampilkan "respond with resources"
app.use('/fibonacci', fibonacciRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// middleware function
// req = request, res = response
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//membuat app menjadi module yang dapat di expo
module.exports = app;
