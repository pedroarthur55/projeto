var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comunicado = require('./../../models/sindico/Comunicado.js');

/* Buscar Todas as Comunicados */
router.get('/', function(req, res, next) {
  Comunicado.find(function (error, listaComunicado) {
    console.log(listaComunicado);
    if (error) return next(error);
    res.json(listaComunicado);
  });
});

/* Buscar apenas Uma Comunicado */
router.get('/:id', function(req, res, next) {
  Comunicado.findById(req.params.id, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

/* Salvar Comunicado */
router.post('/', function(req, res, next) {
  Comunicado.create(req.body, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

/* Atualizar Comunicado */
router.put('/:id', function(req, res, next) {
  Comunicado.findByIdAndUpdate(req.params.id, req.body, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

/* Excluir Comunicado */
router.delete('/:id', function(req, res, next) {
  Comunicado.findByIdAndRemove(req.params.id, req.body, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

module.exports = router;