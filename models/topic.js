var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new Schema({
  user: {
    name: { type: String, required: true },
    email: { type: String, required: true }
  },
  title: { type: String, required: true },
  content: { type: String, required: true },
  tab: { type: String, required: true },
  pv: { type: Number, default: 0 },
  comment: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});
//设置数据库索引
TopicSchema.index({tab: 1, updated_at: -1});
TopicSchema.index({'user.name': 1, updated_at: -1});
//将声明的schema转化为model
//第一个参数是定义集合的名字，第一个字母是大写，但是存在数据库中是小写，并且变为topics,也就是+s

module.exports = mongoose.model('Topic', TopicSchema);