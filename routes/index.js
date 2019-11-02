var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var x3=0;
  res.render('puntos', {puntos:x3, nombre:"sevix"});
});

module.exports = router;
