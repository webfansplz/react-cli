'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const prodConfig = require('./config').build;
const baseConf = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
function assetsPath(_path) {
  return path.join(prodConfig.staticPath, _path);
}
const prodConf = merge(baseConf, {
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: prodConfig.publicPath,
    filename: assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: assetsPath('js/[name].[chunkhash].js')
  },
  devtool: prodConfig.devtoolType,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader', 'postcss-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('hey,react-cli'),
    new webpack.optimize.UglifyJsPlugin({
      parallel: true,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: assetsPath('css/[name].[contenthash].css'),
      allChunks: false
    }),
    new OptimizeCSSPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        );
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      children: true,
      async: true,
      minChunks: 3
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: prodConfig.staticPath,
        ignore: ['.*']
      }
    ]),

    //生成html
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../public/index.html'),
      template: 'index.html',
      favicon: path.resolve(__dirname, '../favicon.ico'),
      //js资源插入位置,true表示插入到body元素底部
      inject: true,
      //压缩配置
      minify: {
        //删除Html注释
        removeComments: true,
        //去除空格
        collapseWhitespace: true,
        //去除属性引号
        removeAttributeQuotes: true
      },
      //根据依赖引入chunk
      chunksSortMode: 'dependency'
    })
  ]
});
module.exports = prodConf;
