var User = require('../models').User;

//新建一个用户
exports.addUser = function (data) {
  return User.create(data);
};

//通过id获取用户
exports.getUserById = function (id) {
  //通过ID fields找到一个single document
  //findById(id) equal to findOne({_id: id});
  return User.findById(id).exec();
};

//通过name获取用户
exports.getUserByName = function (name) {
  return User.findOne({name: name}).exec();
};

//通过ID，更新集合
exports.findByIdAndUpdate = function (id,update_obj){
  return User.findByIdAndUpdate(id,{$set: update_obj}).exec();
};
