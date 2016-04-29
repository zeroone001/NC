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
  yield $User.getScoreByName(data.user.name);

  this.flash = {success: '发布成功!'};
  this.redirect('/topic/' + topic._id);
};