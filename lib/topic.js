//
var Topic = require('../models').Topic;
//var cache = require('co-cache')({
//  expire: 10000
//});

//新建一个话题
//Model.create(doc(s), [callback])
//这是快速创建一个document,并且保存的快捷键
//data是对象或者数组
exports.addTopic = function (data) {
  return Topic.create(data);
};

//通过id获取一个话题,并增加pv 1
// Model.findByIdAndUpdate(id, [update], [options], [callback])
//$inc的作用就是每次调用的时候pv,增加1，如果{$inc: {pv: －1}}，那么pv每次减1
exports.getTopicById = function (id) {
  return Topic.findByIdAndUpdate(id, {$inc: {pv: 1}}).exec();
};

//通过标签和页码获取10个话题
// Query skip(val) 跳过或者略过的意思，意思就是跳到第多少条document
// Query sort(val) 排序，默认是上升排序，如果加上－，那么就是降序
// Query#select(arg) obj or str ,如果有 － 那么，要排除（exclude）content fields(字段)
exports.getTopicsByTab = function getTopicsByTab(tab, p) {
  var query = {};
  if (tab) { query.tab = tab; }
  return Topic.find(query).skip((p - 1) * 10).sort('-updated_at').limit(10).select('-content').exec();
};

//获取用户所有话题
//exec()返回的是promises对象
exports.getTopicsByName = function (name) {
  return Topic.find({'user.name': name}).sort('-updated_at').exec();
};

//通过id增加一个话题的评论数
exports.incCommentById = function (id) {
  return Topic.findByIdAndUpdate(id, {$inc: {comment: 1}}).exec();
};

//获取5条最新未评论的话题
exports.getNoReplyTopics = function getNoReplyTopics() {
  return Topic.find({comment: 0}).sort('-updated_at').limit(5).select('title').exec();
};

//获取作者最新的话题
exports.getNewTopics = function (name){
  return Topic.find({'user.name': name}).sort('-updated_at').limit(5).select('user title').exec();
};


//获取不同标签的话题数
//count 获取不同话题的个数
exports.getTopicsCount = function getTopicsCount(tab) {
  var query = {};
  if (tab) { query.tab = tab;}
  return Topic.count(query).exec();
};