/**
 * Created by smzdm on 16/4/26.
 */
var cheerio = require('cheerio');
var superagent = require('superagent');
var Scrape = require('./lib/core').$Scrape;
var Score = require('./lib/core').$Score;
function _scrape(){
    superagent.get('https://cnodejs.org/').end(function(err,res){
        var $ = cheerio.load(res.text);
        var items = [],contents = [];
        $('#topic_list .cell').each(function(index,element){
            //element = this;
            var $element = $(element);
            var name = $element.find('a.user_avatar img').attr('title');
            var imgsrc = $element.find('a.user_avatar img').attr('src');
            var pv = $element.find('.reply_count .count_of_visits').text();
            var comment = $element.find('.reply_count .count_of_replies').text();
            var title = $element.find('.topic_title_wrapper .topic_title').attr('title');
            var link = $element.find('.topic_title_wrapper .topic_title').attr('href');
            var last_time = $element.find('.last_time .last_active_time').text();
            var tab = $element.find('.topic_title_wrapper>span').text();
            items.push({
                name: name,
                pv: pv,
                comment: comment,
                title: title,
                link: link,
                imgsrc: imgsrc,
                last_time: last_time,
                tab: tab
            });
        });
        for(var i = 0;i<items.length;i++){
            (function(i){
                Scrape.create(items[i]);
            })(i);
        }
        $('#sidebar .panel').eq(4).find('.inner li').each(function (index,element) {
            var _self = $(element);
            var score = _self.find('.top_score').text();
            var name = _self.find('.user_name a').text();
            contents.push({
                name:name,
                score:score
            });

        });
        for(var j = 0;j<contents.length;j++){
            (function(j){
                Scrape.create(contents[j]);
            })(j);
        }
    });
}

exports.scrape = function(){
    return _scrape();
};