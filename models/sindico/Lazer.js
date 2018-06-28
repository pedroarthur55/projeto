var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    local: String,
    descricao: String,
    data: String,
  });

  module.exports = mongoose.model('Lazer', BookSchema);