var Models = require('../../lib/core');
var $Topic = Models.$Topic;

exports.get = function* (name) {
  //这是个人主页要显示的东西
  yield this.render('user', {
    topics: $Topic.getTopicsByName(name),
    name: name,
    items: ''
  });
};