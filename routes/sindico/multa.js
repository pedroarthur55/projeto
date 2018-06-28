var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Multa = require('../../models/sindico/multa.js');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Multa.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Multa.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  Multa.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Multa.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Multa.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;