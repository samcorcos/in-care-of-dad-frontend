var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'babel-polyfill',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss!sass')
      },
      {
        test: /\.icon.png$/,
        loader: "file?name=images/icons/[hash].[ext]"
      },
      {
        test: /\.(png|jpg)$/,
        exclude: [ path.resolve(__dirname, "app", "images", "icons") ],
        loader: "file?name=images/[hash].[ext]"
      }
    ]
  },
  sassLoader: {
    includePaths: [ path.resolve( __dirname, 'app', 'styles')]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  resolve: {
    extensions: [ '', '.js', '.scss', '.css' ],
    modulesDirectories: [ 'app', 'node_modules' ]
  }
}
