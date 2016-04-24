// for co-ejs，这是co-ejs的相关的配置
module.exports = {
  root: __dirname,
  layout: false,
  viewExt: 'ejs',
  cache: true,
  debug: false,
  filters: require('./helpers/filters'), //ejs过滤器
  locals: require('./helpers/locals') //全局的区域变量
};