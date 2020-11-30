// node
const webpack = require('webpack');
const path = require('path');
const rootPath = path.resolve(__dirname, '../');
const pkg = require('../package.json');

// 插件
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  mode: 'production',
  entry: path.resolve(rootPath, 'index.js'), // 根目录下的index.js
  output: {
    // filename: `${pkg.name}.[chunkhash].min.js`,
    filename: `${pkg.name}.min.js`,
    path: path.resolve(rootPath, 'dist'),
    library: `${pkg.name}`,
    libraryTarget: "umd" // 适用于任何形式的模块引入
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader"
    }],
  },
  plugins: [
  ],
  // 这压缩也不知道有用没有，看起来 min.js文件也没变啊 1.34变成了1.36？？？？
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions:{
          compress:{
            warnings: false,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ["console.log"]
          }
        }
      })
    ],
  },
};

module.exports = config; // commonJs 用require
