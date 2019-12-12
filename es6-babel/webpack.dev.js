const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const webpack = require('webpack')
devConfig = {
  mode: 'development',
  devtool: 'cheap-inline-source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    open: true,
    port: 8081,
    hot: true, // 开启热加载
    // hotOnly: true // 即使文件不改变也不刷新页面
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
}
module.exports = merge(commonConfig, devConfig)
