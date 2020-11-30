// node
// npm 工具包
const path = require('path');
const ora = require('ora');
const rm = require('rimraf');
const chalk = require('chalk');
const webpack = require('webpack');
// 本地配置文件
const config = require('./webpack.conf');
const pkg = require('../package.json');

const rootPath = path.resolve(__dirname, '../');

// 构建全量压缩包
let building = ora('building...');
building.start()
rm(path.resolve(rootPath, 'dist', `${pkg.name}.min.js`), err => {
  if (err)  throw (err);
  // webpack build  (entry:index.js)
  webpack(config, function (err, stats) {
    if (err) throw (err);

    building.stop();
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n');
    console.log(chalk.cyan('  Build complete.\n'));
  })
})

