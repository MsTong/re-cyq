const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.dev.js');

const compiler = webpack(config);
const app = express();
const DIST_DIR = path.resolve(__dirname,'../', 'dist');

let devMiddleware =webpackDevMiddleware(compiler,{
    quiet: true,
    noInfo: true,
    stats: 'minimal'
})
let hotMiddleware = webpackHotMiddleware(compiler,{
    log:false,
    heartbeat:200
})
app.use(devMiddleware)
app.use(hotMiddleware)
// 设置访问静态文件的路径
app.use(express.static(DIST_DIR))

app.listen(8080,()=>{
    console.log("成功启动：localhost:"+8080)
})