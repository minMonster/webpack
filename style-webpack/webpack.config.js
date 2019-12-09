const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  devtool: 'cheap-inline-source-map', // 使用 inline 会把 map 文件以 baseURL 打包到 js 文件当中 ， source-map 不会建立第三方模块 映射
  // 使用 cheap 不会精确到第几行第几列 增加打包速度
  // 使用 module ，source-map 默认只会 给业务文件 建立映射，使用 module 可以把第三方库也建立映射
  // eval 是打包速度最快的一种方式
  // development 环境建议使用 cheap-module-eval-source-map
  // production 环境建议使用 cheap-module-source-map
  devServer: {
    contentBase: './dist',
    compress: true,
    open: true,
    port: 8081
  },
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images/'
          }
        }]
      },
      {
        test: /\.(eot|svg|woff|woff2|ttf)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'font/'
          }
        }]
      },
      {
        test: /\.less$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }, 'less-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }, 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new CleanWebpackPlugin()
  ],
  output: {
    // publicPath: 'http://cbd.com', 公共地址
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    auxiliaryComment: {
      root: 'asdasd'
    }
  }
}
