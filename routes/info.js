var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('info/info', {});
});

router.get('/add', function(req, res) {
  res.render('info/modify', {});
});

router.get('/modify', function(req, res) {
  res.render('info/modify', {});
});

module.exports = router;
