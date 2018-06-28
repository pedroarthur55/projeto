var mongoose = require('mongoose');

var FuncionarioSchema = new mongoose.Schema({
    data: {type: String, required: true},    
    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    pauta: {type: String, required: true},
    
});

module.exports = mongoose.model('Funcionario', FuncionarioSchema);