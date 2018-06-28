var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    Local: String,
    Descricao: String,
    Data: String,
  });

  module.exports = mongoose.model('Lazer', BookSchema);