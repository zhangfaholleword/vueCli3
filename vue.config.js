'use strict'

const pages = {}
const titles = {
  name: '主页',
}
pages["index"] = {
  entry: "./src/main.js",
  template: 'public/index.html',
  title: titles["name"],
  chunks: ['chunk-vendors', 'chunk-common', "index"]
}

module.exports = {
  pages: {
    ...pages
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap:
    false,
  // css相关配置
  css:
    {
      // 是否使用css分离插件 ExtractTextPlugin
      extract: true,
      // 开启 CSS source maps?
      sourceMap: false,
      // css预设器配置项
      loaderOptions: {},
      // 启用 CSS modules for all css / pre-processor files.
      modules: false
    }
  ,
  devServer: {
    proxy: {
      '/api':
        {
          target: 'https://wx.cq.abchina.com/wsq/api',
          changeOrigin: true,
          pathRewrite:
            {
              '^/api': ''
            }
        }
    }
  }
  ,
}
