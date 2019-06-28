var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var compression = require('compression');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

mongoose.Promise = global.Promise;

var app = express();
app.use(compression());
// var mongoDB = 'mongodb://' + process.env.atlas_username + ':' + process.env.atlas_password + '@ozel-shard-00-00-pijd0.mongodb.net:27017,ozel-shard-00-01-pijd0.mongodb.net:27017,ozel-shard-00-02-pijd0.mongodb.net:27017/ozel?ssl=true&replicaSet=ozel-shard-0&authSource=admin&retryWrites=true';

// MongoDB Atlas kullanıcı adı ve şifreleri Heroku Config Vars olarak çekilmektdir.
var mongoDB = 'mongodb://kaan:kaan4321@ozel-shard-00-00-pijd0.mongodb.net:27017,ozel-shard-00-01-pijd0.mongodb.net:27017,ozel-shard-00-02-pijd0.mongodb.net:27017/ozel?ssl=true&replicaSet=ozel-shard-0&authSource=admin&retryWrites=true';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb bağlantı hatası'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
