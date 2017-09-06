var config            = require('./config')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var merge             = require('webpack-merge')
var path              = require('path')
var utils             = require('./utils')
var webpack           = require('webpack')
var env               = require('./config/prod.env')

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '../dist/',
    filename: 'build.js',
    library: 'lexi',
    libraryTarget: 'umd'
  },
  // optimization of final code :
  plugins:[
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    // While debugging, disabling uglify
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})
