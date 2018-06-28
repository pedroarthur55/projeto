var mongoose = require('mongoose');

var AtaSchema = new mongoose.Schema({
    descricao: String,
    nome: String

  });

  module.exports = mongoose.model('Ata', AtaSchema);