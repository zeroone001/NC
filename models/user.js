var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//集合字段类型声明
var UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true},
  password: { type: String, required: true },
  gender: { type: String, required: true },
  signature: { type: String },
  personalweb: {type: String},
  place: {type: String},
  weibo: {type:String},
  github: {type:String},
  score: {type:Number ,default: 0},
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

UserSchema.index({name: 1});

module.exports = mongoose.model('User', UserSchema);