/**
 * getToday returns Date() Obj which set date to today, and set time to 00:00:00
 * */
function getToday(withTime = false) {
  const today = new Date();
  if (!withTime) {
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
  }
  today.setMilliseconds(0);
  return today;
}

//
function getDaysAgo(day, withTime = false) {
  const daysAgo = new Date();
  daysAgo.setDate(daysAgo.getDate() - day + 1);
  if (!withTime) {
    daysAgo.setHours(0);
    daysAgo.setMinutes(0);
    daysAgo.setSeconds(0);
  }
  daysAgo.setMilliseconds(0);
  return daysAgo;
}

// 把Date类型，或时间戳 转换成2020-11-24 的字符串
function getFormatDate(date) {
  const newDate = new Date(date);
  const Y = `${newDate.getFullYear()}-`;
  const M = `${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1}-`;
  const D = `${newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()} `;
  return `${Y}${M}${D}`;
}

export {
  getToday,
  getDaysAgo,
  getFormatDate,
};
