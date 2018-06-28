var mongoose = require('mongoose');

var multaSchema = new mongoose.Schema({
    motivo: String,
    descricao: String,
    valores: String,
  });

  module.exports = mongoose.model('multa', multaSchema);