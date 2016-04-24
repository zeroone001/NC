/**
 * Created by smzdm on 16/4/11.
 */
var path =require('path');
var ls = require('ls-sync');
var route = require('koa-route');
var rewrite =require('koa-rewrite');

module.exports = function (app,options) {
    if(typeof options === 'string'){
        options = {
            root: options
        };
    }else if(!options || !options.root){
        throw new Error('root config required');
    }
    var wildcard = options.wildcard || '*';
    var root = options.root;
    app.use(rewrite('/','/index'));
    ls(root).forEach(function(filePath){

    })
};
function formatPath(filePath,root,wildcard){

}