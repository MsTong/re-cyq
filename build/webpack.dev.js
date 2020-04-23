const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const devConfig = {
    devServer: {
        contentBase:path.join(__dirname, '../dist')
    },
    mode:'development',
    // entry:'./src/index.js',
    entry:{
        //实现刷新浏览器webpack-hot-middleware/client?noInfo=true&reload=true 是必填的
        main: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/index.js']
    },
    output: {
        filename: '[name].[contenthash].js',  // entry对应的key值
        chunkFilename: '[name].[contenthash].js',  // 间接引用的文件会走这个配置
    },
    devtool:"cheap-module-eval-source-map",// 开发环境配置最佳实践
    plugins: [
        new Webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
         }),
        new webpack.NamedModulesPlugin(),  //用于启动HMR时可以显示模块的相对路径
        new webpack.HotModuleReplacementPlugin(), // 开启模块热更新，热加载和模块热更新不同，热加载是整个页面刷新
    ],
    optimization:{
        useExports:true
    }
}
module.exports = merge.smart(commonConfig,devConfig)