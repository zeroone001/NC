/**
 * Created by smzdm on 16/4/26.
 */
var Scrape = require('../models').Scrape;
exports.create = function(data){
    return Scrape.create(data);
};
exports.getAllTopics = function(tab,p){
    var query = {};
    if (tab) { query.tab = tab; }
    return Scrape.find(query).skip((p - 1) * 10).limit(10).exec();
};
exports.getScrapeCount = function(tab){
    var query = {};
    if (tab) { query.tab = tab;}
    return Scrape.count(query).exec();
};