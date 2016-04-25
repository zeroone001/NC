/**
 * Created by smzdm on 16/4/24.
 */
var Models = require('../lib/core');
var $User = Models.$User;
exports.get = function* (){
    yield this.render('setting');
};
exports.post = function* (){
    var data = this.request.body;
    var update_obj = {
        name: data.name,
        email: data.email,
        signature: data.signature,
        personalweb: data.personalweb,
        github: data.github,
        weibo: data.weibo,
        place: data.place
    };
    yield $User.findByIdAndUpdate(data._id,update_obj);

    this.session.user = {
        name: data.name,
        email: data.email
    };

    this.flash = {success:'设置成功'};
    this.redirect('back');

};