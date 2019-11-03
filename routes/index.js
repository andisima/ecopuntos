var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var x3=22;
  var x4=10;
  var suma=x3+x4;
  res.render('puntos', {nivel:suma,puntos:150, nombre:"Severo Iglesias"});
});
router.get('/login', function(req, res, next) {
  res.render('login', {});
});

module.exports = router;
