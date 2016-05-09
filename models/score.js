/**
 * Created by liuyongsheng on 2016/5/9.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scoreSchema = new Schema({
    name:{type: String},
    score:{type: String}
});

scoreSchema.index({score:1});

module.exports = mongoose.model('Score',scoreSchema);