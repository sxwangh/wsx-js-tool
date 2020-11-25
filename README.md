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
