var Models = require('../lib/core');
var $Topic = Models.$Topic;
var $User = Models.$User;

exports.get = function* () {
  yield this.render('create');
};

exports.post = function* () {
  var data = this.request.body;
  data.user = this.session.user;
  var topic = yield $Topic.addTopic(data);
  //每次发布一条话题，增加5积分
  yield $User.getScoreByName(data.user.name,5);

  this.flash = {success: '发布成功!'};
  this.redirect('/topic/' + topic._id);
};