const path = require('path')

module.exports = {  

  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,  
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,  
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,  
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: 'localhost',
    //port: 8080,
    https: false,
    hotOnly: false,   
    // http 代理配置
    proxy: {      
      '/api': {
        target: 'https://apis.map.qq.com/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {          
            '^/api': ''
        }
      }
    },
    before: (app) => {}
  }, 
  // 第三方插件配置
  pluginOptions: {

  }
}