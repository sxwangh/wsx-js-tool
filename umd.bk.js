(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define([], factory);
    else if(typeof exports === 'object')
        exports["anyNameIsOk"] = factory();
    else
        root["anyNameIsOk"] = factory();
})(this, function() {
    return /******/ (() => { // webpackBootstrap
        /******/ 	"use strict";
        /******/ 	var __webpack_modules__ = ([
            /* 0 */
            /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
                    /* harmony export */ });
                /* harmony import */ var _tool_commonMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
                /* harmony import */ var _tool_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


                const wsxJsTool = {
                    getUrlParamByName: _tool_commonMethods__WEBPACK_IMPORTED_MODULE_0__.getUrlParamByName,
                    trim: _tool_commonMethods__WEBPACK_IMPORTED_MODULE_0__.trim,
                    getToday: _tool_date__WEBPACK_IMPORTED_MODULE_1__.getToday,
                    getDaysAgo: _tool_date__WEBPACK_IMPORTED_MODULE_1__.getDaysAgo,
                    getFormatDate: _tool_date__WEBPACK_IMPORTED_MODULE_1__.getFormatDate
                };
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wsxJsTool); // 加上babel
// module.exports = wsxJsTool;

                /***/ }),
            /* 1 */
            /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */   "getUrlParamByName": () => /* binding */ getUrlParamByName,
                    /* harmony export */   "trim": () => /* binding */ trim
                    /* harmony export */ });
                function getUrlParamByName(name) {
                    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                    let r = null; // location.search :设置/获取url？后面的部分 （?q=123&page=1&type=note）

                    if (window.location.href.split('?')[1]) {
                        // (q=123&page=1&type=note)
                        r = window.location.href.split('?')[1].match(reg); // /(^|&)enterpriseId=([^&]*)(&|$)/i
                    }

                    if (r != null) {
                        return decodeURIComponent(r[2]);
                    }

                    ;
                    return null;
                }

                function trim(str) {
                    // 去掉首尾两端的空格(^\s*)|(\s*$)
                    return str.replace(/(^\s*)|(\s*$)/g, '');
                }



                /***/ }),
            /* 2 */
            /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */   "getToday": () => /* binding */ getToday,
                    /* harmony export */   "getDaysAgo": () => /* binding */ getDaysAgo,
                    /* harmony export */   "getFormatDate": () => /* binding */ getFormatDate
                    /* harmony export */ });
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
                } //


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
                } // 把Date类型，或时间戳 转换成2020-11-24 的字符串


                function getFormatDate(date) {
                    const newDate = new Date(date);
                    const Y = `${newDate.getFullYear()}-`;
                    const M = `${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1}-`;
                    const D = `${newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()} `;
                    return `${Y}${M}${D}`;
                }



                /***/ })
            /******/ 	]);
        /************************************************************************/
        /******/ 	// The module cache
        /******/ 	var __webpack_module_cache__ = {};
        /******/
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
            /******/ 		// Check if module is in cache
            /******/ 		if(__webpack_module_cache__[moduleId]) {
                /******/ 			return __webpack_module_cache__[moduleId].exports;
                /******/ 		}
            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		var module = __webpack_module_cache__[moduleId] = {
                /******/ 			// no module.id needed
                /******/ 			// no module.loaded needed
                /******/ 			exports: {}
                /******/ 		};
            /******/
            /******/ 		// Execute the module function
            /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Return the exports of the module
            /******/ 		return module.exports;
            /******/ 	}
        /******/
        /************************************************************************/
        /******/ 	/* webpack/runtime/define property getters */
        /******/ 	(() => {
            /******/ 		// define getter functions for harmony exports
            /******/ 		__webpack_require__.d = (exports, definition) => {
                /******/ 			for(var key in definition) {
                    /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                        /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                        /******/ 				}
                    /******/ 			}
                /******/ 		};
            /******/ 	})();
        /******/
        /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
        /******/ 	(() => {
            /******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
            /******/ 	})();
        /******/
        /******/ 	/* webpack/runtime/make namespace object */
        /******/ 	(() => {
            /******/ 		// define __esModule on exports
            /******/ 		__webpack_require__.r = (exports) => {
                /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/ 			}
                /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
                /******/ 		};
            /******/ 	})();
        /******/
        /************************************************************************/
        /******/ 	// module exports must be returned from runtime so entry inlining is disabled
        /******/ 	// startup
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(0);
        /******/ })()
        .default;
});
