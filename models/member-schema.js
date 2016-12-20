var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
  info: {
    name: String,
    studentId: String,
    gender: String,
    phone: String,
    birthday: String,
    major: String,
    grade: String,
    email: String,
    personalId: String,
    address: String,
    beneficiary: String
  }
});

module.exports = mongoose.model('Member', memberSchema);
