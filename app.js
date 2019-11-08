var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter=require('./routes/category_route')
var SubCatRouter=require('./routes/subcategoery_router')
var SubsUbCategoryRoyter=require('./routes/subsubCategory_route')
var brandRouter=require('./routes/brand_route')
var productRouter=require('./routes/product_route')

var app = express();
var db=require('./bin/db')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/category',categoryRouter)
app.use('/api/subcategory',SubCatRouter)
app.use('/api/subsubcategory',SubsUbCategoryRoyter);
app.use('/api/brand',brandRouter);
app.use('/api/product',productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
