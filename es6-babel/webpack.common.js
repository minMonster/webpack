const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    // publicPath: 'http://cbd.com', 公共地址
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    auxiliaryComment: {
      root: 'asdasd'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'
      },
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
    new CleanWebpackPlugin()
  ]
}
