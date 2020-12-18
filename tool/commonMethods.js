function getUrlParamByName(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = null;
  // location.search :设置/获取url？后面的部分 （?q=123&page=1&type=note）
  if (window.location.href.split('?')[1]) { // (q=123&page=1&type=note)
    r = window.location.href.split('?')[1].match(reg); // /(^|&)enterpriseId=([^&]*)(&|$)/i
  }
  if (r != null) {
    return decodeURIComponent(r[2]);
  };
  return null;
}

export {
  getUrlParamByName,
}
