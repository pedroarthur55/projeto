var mongoose = require('mongoose');

var advertenciaSchema = new mongoose.Schema({
    motivo: String,
    descricao: String,
    anexo: String,
  });

  module.exports = mongoose.model('advertencia', advertenciaSchema);