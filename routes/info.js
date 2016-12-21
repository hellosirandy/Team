var express = require('express');
var router = express.Router();
var Member = require('../models/member-schema');
var MemberManager = require('../managers/member-manager');

router.get('/', function(req, res) {
  Member.find(function(err, members) {
    if (err) throw err;
    for (var i = 0; i < members.length; i++){
      members[i].info.managedBirthday = ManageDate(members[i].info.birthday);
    }
    res.render('info/info', {members: members});
  });
});

router.get('/add', function(req, res) {
  res.render('info/modify', {});
});

router.post('/add', function(req, res) {
  memberManager = new MemberManager();
  memberManager.add(req.body);
  res.redirect('/info');
});

router.get('/modify', function(req, res) {
  res.render('info/modify', {});
});

function ManageDate(date) {
  var year = date.getFullYear();
  var month = '' + (date.getMonth() + 1);
  var day = '' + date.getDate();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('/');
}

module.exports = router;
