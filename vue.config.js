const path = require('path');
const webpack = require('webpack');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  lintOnSave: false,
  publicPath: './',
  transpileDependencies: [
    'quill-image-drop-module',
    'quill-image-extend-module',
  ],
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'));
    config.plugin('provide').use(webpack.ProvidePlugin, [
      {
        'window.Quill': 'quill/dist/quill.js',
        Quill: 'quill/dist/quill.js',
      },
    ]);
  },
  // css: {
  //   extract: true
  // },
  // 打包时不生成.map文件(加快打包的速度)
  productionSourceMap: false,
  // 解决跨域问题
  devServer: {
    port: 8080, // 端口
    proxy: 'http://101.133.219.6:10010',
    // proxy: 'http://192.168.31.97:8080',
    // proxy: {
    //   '/admin': {
    //     target: 'http://192.168.11.150:8080'
    //   },
    //   '/api': {
    //     target: 'http://192.168.11.150:8080'
    //   },
    //   '/application': {
    //     target: 'http://192.168.11.150:8080'
    //   },
    //   '/captcha': {
    //     target: 'http://192.168.11.150:8080', // 接口的域名
    //     changeOrigin: true // 如果接口跨域，需要进行这个参数配置
    //   }
    // }
  },
};
