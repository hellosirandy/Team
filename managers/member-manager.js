module.exports = function MemberManager() {
  var Member = require('../models/member-schema');

  this.add = function(body) {
    var newMember = new Member({
      info: {
        name: body.inputName,
        studentId: body.inputStudentId,
        gender: body.genderGroup,
        phone: body.inputPhone,
        birthday: body.pickBirthday,
        major: body.inputMajor,
        grade: body.inputGrade,
        email: body.inputEmail,
        personalId: body.inputPersonalId,
        address: body.inputAddress,
        beneficiary: body.inputBeneficiary,
      }
    })
    newMember.save(function(err) {
      if (err) throw err;
    });
  }
};
