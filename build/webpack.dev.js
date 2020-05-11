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
    output: {
        filename: 'bundle.js',  // entry对应的key值
    },
    devtool:"cheap-module-eval-source-map",// 开发环境配置最佳实践
    plugins: [
        new Webpack.HotModuleReplacementPlugin(), // 开启模块热更新，热加载和模块热更新不同，热加载是整个页面刷新
    ],
}
module.exports = merge.smart(commonConfig,devConfig)