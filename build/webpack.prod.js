// const Webpack = require('webpack')
// const commonConfig = require('./webpack.common.js');

// const merge = require('webpack-merge');
// const prodConfig = {
//     mode:'production',
//     devtool:"cheap-module-source-map",// 开发环境配置最佳实践
//     entry:{
//         main:'./src/index.js'
//     },
//     output:{
//         filename:'bundle.js',
//         // chunkFilename:'[name].[contenthash]'
//     },
//     plugins: [
//         // new Webpack.DefinePlugin({
//         //     'process.env.NODE_ENV': JSON.stringify('production'),
//         //  }),
//         // new Webpack.HashedModuleIdsPlugin(),  //根据模块的相对路径生成一个四位数的hash
//         // new config.optimization.splitChunks({ // 配合上面的插件使用
//         //     name: 'runtime'
//         // })
//     ],
//     // optimization: {
//     //     splitChunks: {
//     //         chunks: "all",    // 只对异步引入代码起作用，设置all时并同时配置vendors才对两者起作用
//     //         minSize: 30000,   // 引入的库大于30kb时才会做代码分割
//     //         minChunks: 1,     // 一个模块至少被用了1次才会被分割
//     //         maxAsyncRequests: 5,     // 同时异步加载的模块数最多是5个，如果超过5个则不做代码分割
//     //         maxInitialRequests: 3,   // 入口文件进行加载时，引入的库最多分割出3个js文件
//     //         automaticNameDelimiter: '~',  // 生成文件名的文件链接符
//     //         name: true,   // 开启自定义名称效果
//     //         cacheGroups: {  // 判断分割出的代码放到那里去
//     //             vendors: {   // 配合chunks： ‘all’使用，表示如果引入的库是在node-modules中，那就会把这个库分割出来并起名为vendors.js
//     //                 test: /[\\/]node_modules[\\/]/,
//     //                 priority: -10,
//     //                 filename: 'vendors.js'
//     //             },
//     //             default: {  // 为非node-modules库中分割出的代码设置默认存放名称
//     //                 priority: -20,
//     //                 reuseExistingChunk: true, // 避免被重复打包分割
//     //                 filename: 'common.js'
//     //             }
//     //         }
//     //     }
//     // }
// }
// module.exports = merge.smart(commonConfig,prodConfig);

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

 
module.exports = {
    mode: "production",  // 只要在生产模式下， 代码就会自动压缩，自动启用 tree shaking
    devtool:"cheap-module-source-map",
    entry: {                  // 入口文件
        main: './src/index.js'
    },  
    module: {       
        rules: [{
            test:/\.js$/,
            exclude:/node_modules/,
            use: [{
                loader:'babel-loader'
            }]
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader', 'postcss-loader']
        },{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2
                    }
                }, 'sass-loader']
        },{
            test: /\.(png||jpg||gif||jpeg)$/,
            use:[{
                loader:'url-loader',
                options:{
                    name:'[name]_[hash].[ext]',
                    outputPath:'images/',
                    limit:204
                }
            }]
        }]          
    },
    plugins: [                     
        new HtmlWebpackPlugin({   
            template: 'src/index.html',
        }),
        new CleanWebpackPlugin(), 
    ],
    output: {
        publicPath: "/",
        filename: 'bundle.js',  
        path: path.resolve(__dirname, '../dist') 
    }
}
