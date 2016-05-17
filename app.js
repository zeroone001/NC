var app = require('koa')();//调用koa,并且初始化
var logger = require('koa-logger');
var bodyparser = require('koa-bodyparser'); //bodyParser中间件用来解析http请求体
var staticCache  = require('koa-static-cache'); //处理KOA静态服务的中间件
var errorhandler = require('koa-errorhandler'); //错误处理中间件，跟KOA配套的
var session = require('koa-generic-session'); //通用的session中间件
var MongoStore = require('koa-generic-session-mongo');
var flash = require('koa-flash');
var gzip = require('koa-gzip');
var scheme = require('koa-scheme');
var router = require('koa-frouter');
var routerCache = require('koa-router-cache');
var render = require('co-ejs');
var config = require('config-lite');
//爬取CNode社区的数据，存放到自己的数据库里面
//平时为了增加不必要的数据，是被注释掉，暂停这个功能
var _scrape = require('./scrape').scrape();

// 不放到 default.js 是为了避免循环依赖
var merge = require('merge-descriptors');
var core = require('./lib/core');
var renderConf = require(config.renderConf);
merge(renderConf.locals || {}, core, false);

//调用的是theme的package的name
//设置一个签名cookie的秘钥
app.keys = [renderConf.locals.$app.name];

//koa的上下文封装了request和response到一个对象中，平常上下文被寄存在this中
//为了使用方便许多的上下文的方法属性被委托代理到request和response对象里面了
app.use(errorhandler());
app.use(bodyparser());
app.use(staticCache(config.staticCacheConf));
app.use(logger());
app.use(session({
  store: new MongoStore(config.mongodb)
}));
//作为临时的状态，用一次就销毁,放在用户的session里面
app.use(flash());
//登录注册validate
app.use(scheme(config.schemeConf));
//路由缓存中间件
app.use(routerCache(app, config.routerCacheConf));
app.use(gzip());
app.use(render(app, renderConf));
//控制路由的中间件调用
app.use(router(app, config.routerConf));

if (module.parent) {
  module.exports = app.callback();
} else {
  app.listen(config.port, function () {
    console.log('Server listening on: ', config.port);
  });
}