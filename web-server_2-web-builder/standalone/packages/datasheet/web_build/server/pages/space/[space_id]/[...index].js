"use strict";
(() => {
var exports = {};
exports.id = 8767;
exports.ids = [8767];
exports.modules = {

/***/ 31058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/**
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */ 




const Page = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const path = router.asPath;
        const spaceId = router.query.space_id;
        if (!spaceId) {
            return;
        }
        const _path = path.split("/").slice(3).join("/");
        dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.StoreActions.setActiveSpaceId(spaceId));
        router.replace(`/${_path}`);
    // eslint-disable-next-line
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),

/***/ 30180:
/***/ ((module) => {

module.exports = require("@apitable/i18n");

/***/ }),

/***/ 90643:
/***/ ((module) => {

module.exports = require("apphook");

/***/ }),

/***/ 99308:
/***/ ((module) => {

module.exports = require("attr-accept");

/***/ }),

/***/ 52167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 39105:
/***/ ((module) => {

module.exports = require("color");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 17097:
/***/ ((module) => {

module.exports = require("dayjs/locale/ar");

/***/ }),

/***/ 60226:
/***/ ((module) => {

module.exports = require("dayjs/locale/de");

/***/ }),

/***/ 48578:
/***/ ((module) => {

module.exports = require("dayjs/locale/es");

/***/ }),

/***/ 17688:
/***/ ((module) => {

module.exports = require("dayjs/locale/fr");

/***/ }),

/***/ 13820:
/***/ ((module) => {

module.exports = require("dayjs/locale/hi");

/***/ }),

/***/ 37123:
/***/ ((module) => {

module.exports = require("dayjs/locale/ja");

/***/ }),

/***/ 83590:
/***/ ((module) => {

module.exports = require("dayjs/locale/ko");

/***/ }),

/***/ 53178:
/***/ ((module) => {

module.exports = require("dayjs/locale/pt");

/***/ }),

/***/ 19161:
/***/ ((module) => {

module.exports = require("dayjs/locale/ru");

/***/ }),

/***/ 4413:
/***/ ((module) => {

module.exports = require("dayjs/locale/zh");

/***/ }),

/***/ 95468:
/***/ ((module) => {

module.exports = require("dayjs/locale/zh-cn");

/***/ }),

/***/ 26489:
/***/ ((module) => {

module.exports = require("dayjs/locale/zh-hk");

/***/ }),

/***/ 15831:
/***/ ((module) => {

module.exports = require("dayjs/locale/zh-tw");

/***/ }),

/***/ 84125:
/***/ ((module) => {

module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ 98577:
/***/ ((module) => {

module.exports = require("dayjs/plugin/dayOfYear");

/***/ }),

/***/ 90756:
/***/ ((module) => {

module.exports = require("dayjs/plugin/duration");

/***/ }),

/***/ 89983:
/***/ ((module) => {

module.exports = require("dayjs/plugin/isoWeek");

/***/ }),

/***/ 67424:
/***/ ((module) => {

module.exports = require("dayjs/plugin/localizedFormat");

/***/ }),

/***/ 59205:
/***/ ((module) => {

module.exports = require("dayjs/plugin/quarterOfYear");

/***/ }),

/***/ 53291:
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 36619:
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ 59912:
/***/ ((module) => {

module.exports = require("dayjs/plugin/weekOfYear");

/***/ }),

/***/ 80130:
/***/ ((module) => {

module.exports = require("dayjs/plugin/weekYear");

/***/ }),

/***/ 7133:
/***/ ((module) => {

module.exports = require("immer");

/***/ }),

/***/ 48506:
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ 46517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 40113:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 27078:
/***/ ((module) => {

module.exports = require("lodash/isNumber");

/***/ }),

/***/ 63385:
/***/ ((module) => {

module.exports = require("lodash/keyBy");

/***/ }),

/***/ 13890:
/***/ ((module) => {

module.exports = require("lodash/xor");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 49100:
/***/ ((module) => {

module.exports = require("ot-json0/lib/json0");

/***/ }),

/***/ 78919:
/***/ ((module) => {

module.exports = require("phone");

/***/ }),

/***/ 39369:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 87104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 23384:
/***/ ((module) => {

module.exports = require("re-reselect");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 11498:
/***/ ((module) => {

module.exports = require("redux-batched-actions");

/***/ }),

/***/ 96814:
/***/ ((module) => {

module.exports = require("reselect");

/***/ }),

/***/ 18087:
/***/ ((module) => {

module.exports = require("socket.io-client");

/***/ }),

/***/ 29804:
/***/ ((module) => {

module.exports = require("string.prototype.matchall");

/***/ }),

/***/ 83764:
/***/ ((module) => {

module.exports = require("urlcat");

/***/ }),

/***/ 16464:
/***/ ((module) => {

module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7105,6791], () => (__webpack_exec__(31058)));
module.exports = __webpack_exports__;

})();