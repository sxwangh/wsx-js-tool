// node
const webpack = require('webpack');
const path = require('path');
const rootPath = path.resolve(__dirname, '../');
const pkg = require('../package.json');

const config = {
  // mode: 'production',
  entry: path.resolve(rootPath, 'index.js'), // 根目录下的index.js
  output: {
    // filename: `${pkg.name}.[chunkhash].min.js`,
    filename: 'wsx-js-tool.min.js',
    path: path.resolve(rootPath, 'dist'),
    // library: 'anyNameIsOk',
    libraryTarget: 'umd', // 适用于任何形式的模块引入
    libraryExport: 'default', // for commonjs  （不配置的话，引入需要如下：const wsxJSTool = require('wsx-ji-tool').default）
    globalObject: 'this', // for browser and node (self is not define) , 变更打包后的文件中 默认的self为this
    library: {
      root: "anyNameIsOk-root",
      amd: "anyNameIsOk-amd",
      commonjs: "anyNameIsOk-common"
    },
    umdNamedDefine: true // 该选项为true 会对amd模块进行命名，否则amd的define为匿名
  },
  mode: 'none',
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader"
    }],
  },
  plugins: [
  ],
};

module.exports = config; // commonJs 用require
