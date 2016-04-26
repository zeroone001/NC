/**
 * Created by smzdm on 16/4/26.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var scrapeSchema = new Schema({
    name: { type: String },
    pv: {type: String },
    comment: {type: String},
    title: {type: String},
    link: {type: String},
    imgsrc: {type: String},
    last_time: {type: String},
    tab: {type: String}
});

scrapeSchema.index({name: 1});

module.exports = mongoose.model('Scrape', scrapeSchema);

