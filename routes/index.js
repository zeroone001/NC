var Models = require('../lib/core');
var $Topic = Models.$Topic;
var $Scrape = Models.$Scrape;
//生成器函数
exports.get = function* () {
  var tab = this.query.tab;
  var p = this.query.p || 1;
  //使生成器函数暂停执行
  yield this.render('index', {
    topics: $Topic.getTopicsByTab(tab, p),
    items: $Scrape.getAllTopics(tab,p)
  });
};