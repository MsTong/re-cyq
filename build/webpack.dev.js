const path = require('path');
const Webpack = require('webpack')
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const devConfig = {
    devServer: {
        contentBase:path.join(__dirname, '../dist'),
        hot:true
    },
    mode:'development',
    entry:'./src/index.js',
    // entry:{
    //     //实现刷新浏览器webpack-hot-middleware/client?noInfo=true&reload=true 是必填的
    //     main: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/index.js']
    // },
    output: {
        filename: 'bundle.js',  // entry对应的key值
        // chunkFilename: '[name].[contenthash].js',  // 间接引用的文件会走这个配置
    },
    devtool:"cheap-module-eval-source-map",// 开发环境配置最佳实践
    plugins: [
        // new Webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('development'),
        //  }),
        // new Webpack.NamedModulesPlugin(),  //用于启动HMR时可以显示模块的相对路径
        new Webpack.HotModuleReplacementPlugin(), // 开启模块热更新，热加载和模块热更新不同，热加载是整个页面刷新
    ],
    // optimization:{
    //     useExports:true
    // }
}
module.exports = merge.smart(commonConfig,devConfig)