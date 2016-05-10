//这是MVC的control层
var Comment = require('./comment');
var Topic = require('./topic');
var User = require('./user');
var Scrape = require('./scrape');
var Score = require('./score');

module.exports = {
  get $User () {
      return User;
  },

  get $Comment () {
    return Comment;
  },

  get $Topic () {
    return Topic;
  },

  get $Scrape () {
    return Scrape;
  },

  get $Score () {
    return Score;
  }


};