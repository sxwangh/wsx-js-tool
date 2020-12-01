# 发布
npm login
npm who i am
npm publish

# 工程说明：
```asp
package.json
"main": "index.js",  -- 入口函数
"version": "1.1.0", -- npm publish 的版本号 
"name": "wsx-js-tool", -- 下载下来的npm文件夹的名字


安装：
npm install wsx-js-tool@1.1.0
import wsxJsTool from 'wsx-js-tool';
wsxJsTool.getUrlParamByName();
wsxJsTool.DateFuc.getToday();

```

# 工具类说明
```asp
--- commonMethods.js
getUrlParamByName -- 通过param的那么获取window.location.hash?后面的参数

--- date.js
DateFuc.getToday
DateFuc.getDaysAgo
DateFuc.getFormatDate -- 将Date格式 或 时间戳格式的时间 转成：'2020-11-24'
```


# webpack 压缩打包
```
v1.0.0 通过index.js 作为入口，未打包
v2.0.0 通过webpack打包成wsx-js-tool单文件，作为入口 供第三方引入
 ---npm install -D babel-loader @babel/core @babel/preset-env webpack
    (index.js :es6module export default x 或 commonjs module.exports=）
    config.output.library: `${pkg.name}`,
    config.output.libraryTarget: "umd" // 适用于任何形式的模块引入
    引用该工具包，也可以使用es6 module (import x from 'xx');
 ---npm i -D uglifyjs-webpack-plugin
    to minify js file
```
