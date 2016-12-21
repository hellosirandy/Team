var MemberInfo = require('../models/member-schema');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/Team');

var members = [
  new MemberInfo({
    info: {
      name: '陳毓瑋',
      studentId: '102062118',
      gender: '男',
      phone: '0932694730',
      birthday: new Date('17 December, 2016'),
      major: '資工',
      grade: '17',
      email: 'sac840711@gmail.com',
      personalId: 'E124861322',
      address: '高雄市鼓山區神農路157號12樓',
      beneficiary: '簡增祥'
    }
  }),
  new MemberInfo({
    info: {
      name: '曾勤',
      studentId: '102062223',
      gender: '女',
      phone: '0987224917',
      birthday: new Date('17 December, 2016'),
      major: '資工',
      grade: '17',
      email: 'jeanzeng123@yahoo.com.tw',
      personalId: 'A229025995',
      address: '新北市新店區華城路10巷1-5號',
      beneficiary: '曾維新'
    }
  }),
  new MemberInfo({
    info: {
      name: '朱彥睿',
      studentId: '104000057',
      gender: '男',
      phone: '0975012912',
      birthday: new Date('17 December, 2016'),
      major: '資工',
      grade: '19',
      email: 'raychu851208@gmail.com',
      personalId: 'A126660758',
      address: '臺北市松山區敦化北路120巷64號7樓',
      beneficiary: '朱力強'
    }
  })
];

var done = 0;
for (var i = 0; i < members.length; i++){
  members[i].save(function(err, result){
    done ++;
    if (done === members.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
