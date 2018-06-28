var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var book = require('./routes/sindico/book');
var pauta = require('./routes/sindico/pauta');
var lazer = require('./routes/sindico/Lazer');
var ata = require('./routes/sindico/ata');
var comunicado = require('./routes/sindico/comunicado');
var enquete = require('./routes/sindico/enquete');
var advertencia = require('./routes/sindico/advertencia');
var multa = require('./routes/sindico/multa');
var app = express();


/**Conexao com banco de dados */
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/condominio', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('Conexao com Banco Realizada com Sucesso'))
  .catch((err) => console.error(err));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/pauta', pauta);
app.use('/lazer', lazer);
app.use('/ata', ata);
app.use('/comunicado', comunicado);
app.use('/enquete', enquete);
app.use('/advertencia', advertencia);
app.use('/multa' , multa);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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