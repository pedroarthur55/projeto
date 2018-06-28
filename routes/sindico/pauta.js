var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pauta = require('./../../models/sindico/Pauta.js');

/* Buscar Todas as Pautas */
router.get('/', function(req, res, next) {
  Pauta.find(function (error, listaPautas) {
    console.log(listaPautas);
    if (error) return next(error);
    res.json(listaPautas);
  });
});

/* Buscar apenas Uma Pauta */
router.get('/:id', function(req, res, next) {
  Pauta.findById(req.params.id, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

/* Salvar Pauta */
router.post('/', function(req, res, next) {
  Pauta.create(req.body, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

/* Atualizar Pauta */
router.put('/:id', function(req, res, next) {
  Pauta.findByIdAndUpdate(req.params.id, req.body, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

/* Excluir Pauta */
router.delete('/:id', function(req, res, next) {
  Pauta.findByIdAndRemove(req.params.id, req.body, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

module.exports = router;