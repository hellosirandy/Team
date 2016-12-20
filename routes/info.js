var express = require('express');
var router = express.Router();
var Member = require('../models/member-schema');

router.get('/', function(req, res) {
  Member.find(function(err, members) {
    if (err) throw err;
    res.render('info/info', {members: members});
  });
});

router.get('/add', function(req, res) {
  res.render('info/modify', {});
});

router.get('/modify', function(req, res) {
  res.render('info/modify', {});
});

module.exports = router;
