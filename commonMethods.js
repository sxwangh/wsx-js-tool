function getUrlParamByName(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  // location.search :设置/获取url？后面的部分 （?q=123&page=1&type=note）
  let r = window.location.hash.split('#/?')[1].match(reg); // (q=123&page=1&type=note)
  if (r != null) {
    return decodeURIComponent(r[2]);
  };
  return null;
}

export {
  getUrlParamByName,
}
