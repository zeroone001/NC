var Models = require('../../lib/core');
var $Topic = Models.$Topic;
var $Comment = Models.$Comment;
var $User = Models.$User;

exports.get = function* (id) {
  yield this.render('topic', {
    ID: id,
    topic: $Topic.getTopicById(id),
    comments: $Comment.getCommentsByTopicId(id)
  });
};

exports.post = function* (id) {
  var data = this.request.body;
  data.user = this.session.user;

  yield [
    $Comment.addComment(data),
    $Topic.incCommentById(id),
    $User.getScoreByName(data.user.name,2)
  ];

  this.flash = {success: '回复成功!'};
  this.redirect(this.query.redirect || 'back');
};