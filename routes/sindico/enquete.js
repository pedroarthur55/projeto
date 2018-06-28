var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Enquete = require('./../../models/sindico/Enquete.js');


/* Buscar Enquete */
router.get('/listar-enquete', function(req, res, next) {
  Enquete.find(function (err, products) {
    console.log(products);
    if (err) return next(err);
    res.json(products);
  });
});


/* Buscar Todas as Enquetes */
router.get('/', function(req, res, next) {
  Enquete.find(function (error, listaEnquetes) {
    console.log(listaEnquetes);
    if (error) return next(error);
    res.json(listaEnquetes);
  });
});

/* Buscar apenas Uma Enquete */
router.get('/:id', function(req, res, next) {
  Enquete.findById(req.params.id, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

/* Salvar Enquete */
router.post('/', function(req, res, next) {
  Enquete.create(req.body, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

/* Atualizar Enquete */
router.put('/:id', function(req, res, next) {
  Enquete.findByIdAndUpdate(req.params.id, req.body, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

/* Excluir Enquete */
router.delete('/:id', function(req, res, next) {
  Enquete.findByIdAndRemove(req.params.id, req.body, function (error, post) {
    if (error) return next(error);
    res.json(post);
  });
});

module.exports = router;