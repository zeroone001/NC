/**
 * Created by liuyongsheng on 16/4/24.
 */
var Models = require('../lib/core');
var $User = Models.$User;
var $Topic = Models.$Topic;
exports.get = function* (){
    yield this.render('setting');
};
exports.post = function* (){
    var data = this.request.body;
    var pw = data.password || '';
    var newpw = data.new_pass || '';
    if(pw && newpw){
        var userInfo = yield $User.getUserByName(data.name);
        if(!userInfo || (userInfo.password !== data.password)){
            //修改密码失败
            this.session.user = {
                name: userInfo.name,
                email: userInfo.email
            };
            this.flash = {error:'修改密码失败'};
            return this.redirect('back');
        }else{
            var up_obj = {
                password: data.new_pass
            };
            yield $User.findByIdAndUpdate(userInfo._id,up_obj);
            this.session.user = {
                name: userInfo.name,
                email: userInfo.email
            };
            this.flash = {success:'修改密码成功'};
            this.redirect('back');
        }
    }else{
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
    }


};