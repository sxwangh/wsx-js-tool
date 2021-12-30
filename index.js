import { getUrlParamByName, trim } from './tool/commonMethods';
import { getToday, getDaysAgo, getFormatDate } from './tool/date';
import WebsocketHeart from './tool/WebsocketHeart';

const wsxJsTool = {
  getUrlParamByName,
  trim,
  getToday,
  getDaysAgo,
  getFormatDate,
  WebsocketHeart,
};

export default wsxJsTool; // 加上babel
// module.exports = wsxJsTool;


import tool from 'wsx-js-tool-hi';
tool.getUrlParamByName();
