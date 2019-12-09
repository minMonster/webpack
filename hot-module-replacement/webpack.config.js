const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  devtool: 'cheap-inline-source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    open: true,
    port: 8081,
    hot: true, // 开启热加载
    hotOnly: true // 即使文件不改变也不刷新页面
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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
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
