/**
 * Created by smzdm on 16/4/24.
 */
var Models = require('../lib/core');
exports.get = function* (){
    yield this.render('setting');
};