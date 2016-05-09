/**
 * Created by liuyongsheng on 16/4/26.
 */
var Scrape = require('../models').Scrape;

exports.create = function(data){
    return Scrape.create(data);
};

//获取9个话题,p代表第几页
exports.getAllTopics = function(tab,p){
    var query = {};
    if (tab) { query.tab = tab; }
    return Scrape.find(query).skip((p - 1) * 9).limit(9).exec();
};
exports.getScrapeCount = function(tab){
    var query = {};
    if (tab) { query.tab = tab;}
    return Scrape.count(query).exec();
};