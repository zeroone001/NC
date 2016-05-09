/**
 * Created by liuyongsheng on 16/5/9.
 */
var Score = require('../models').Score;

exports.create = function(data){
    return Score.create(data);
};
