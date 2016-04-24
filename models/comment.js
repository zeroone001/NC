var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CommentSchema = new Schema({
  topic_id: { type: ObjectId, required: true },
  user: {
    name: { type: String, required: true },
    email: { type: String, required: true }
  },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

CommentSchema.index({topic_id: 1, updated_at: 1});
//var User = mongoose.model(‘User’, userSchema,’CN.User’);
//第三个参数’CN.User’ 就是实际的 collection的名称，你命名成任意你想要的合法名称都行。
//下面没有写第三个参数
module.exports = mongoose.model('Comment', CommentSchema);