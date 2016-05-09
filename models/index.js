var mongoose = require('mongoose');
//从配置里调用
var config = require('config-lite').mongodb;

mongoose.connect(config.url, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.url, err.message);
    process.exit(1);
  }
});

exports.User = require('./user');
exports.Topic = require('./topic');
exports.Comment = require('./comment');
exports.Scrape = require('./scrape');
//score集合存有积分
exports.Score = require('./score');