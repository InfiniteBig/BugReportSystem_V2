var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/*var index = require('./routes/index');
var users = require('./routes/users');*/
var router=require('./routes/index')
//var flash=require('connect-flash')

var app = express();

var config=require('./build/config')

var dirname=__dirname.toLowerCase()

var cons=require('consolidate')

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'html');

app.engine('html',cons.swig)
app.set('views', path.join(__dirname, 'src'))
app.set('view engine','html')

//app.use(flash())

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(config.staticDir));  //静态资源根目录配置
app.use('/dist', express.static(config.dist));
app.use(express.static(path.join(dirname, 'src')));
/*app.use('/', index);
app.use('/users', users);*/
router(app)
// catch 404 and forward to error handler
app.use((req, res, next)=>{
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next)=>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
