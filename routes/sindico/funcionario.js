var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Funcionario = require('./../../models/sindico/Funcionario.js');

/* Buscar Todas as Funcionario */
router.get('/', function(req, res, next) {
  Funcionario.find(function (error, listaFuncionario) {
    console.log(listaFuncionario);
    if (error) return next(error);
    res.json(listaFuncionario);
  });
});

/* Buscar apenas Uma Funcionario */
router.get('/:id', function(req, res, next) {
  Funcionario.findById(req.params.id, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

/* Salvar Funcionario */
router.post('/', function(req, res, next) {
  Funcionario.create(req.body, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

/* Atualizar Funcionario */
router.put('/:id', function(req, res, next) {
  Funcionario.findByIdAndUpdate(req.params.id, req.body, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

/* Excluir Funcionario */
router.delete('/:id', function(req, res, next) {
  Funcionario.findByIdAndRemove(req.params.id, req.body, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

module.exports = router;