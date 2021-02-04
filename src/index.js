import { getUrlParamByName, trim } from './tool/commonMethods';
import { getToday, getDaysAgo, getFormatDate } from './tool/date';

const wsxJsTool = {
  getUrlParamByName,
  trim,
  getToday,
  getDaysAgo,
  getFormatDate,
};

export default wsxJsTool; // 加上babel
// module.exports = wsxJsTool;
