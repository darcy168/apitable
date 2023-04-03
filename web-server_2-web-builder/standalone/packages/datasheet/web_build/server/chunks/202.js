"use strict";
exports.id = 202;
exports.ids = [202];
exports.modules = {

/***/ 1450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ TemplateRecommendContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
const TemplateRecommendContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    recommendData: {}
});


/***/ }),

/***/ 32070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ getBaseUrl)
/* harmony export */ });
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);

const getBaseUrl = (context)=>{
    const host = process.env.API_PROXY || `http://${context.req?.headers.host}` || "";
    return host + _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Url.BASE_URL;
};


/***/ }),

/***/ 86752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getRequestHeaders)
/* harmony export */ });
/* unused harmony export setClientCookie */
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);
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
const getRequestHeaders = (context)=>{
    const headers = {};
    const language = context.req?.headers["accept-language"];
    const cookie = context.req?.headers.cookie;
    if (language) {
        headers["Accept-Language"] = language;
    }
    if (cookie) {
        headers.cookie = cookie;
    }
    return headers;
};
/**
 * ！！！！Warning
 * The current method will only be called in getInitProps and will write the lang configuration in client/info to the cookie.
 * The lang value exists only as a request header parameter for the api and the front-end is not allowed to call
 */ const setClientCookie = (cookies, ctx)=>{
    cookies.map((item)=>{
        let key = "";
        let value = "";
        const optional = {};
        const _cookie = item.split("; ");
        _cookie.map((_item, _index)=>{
            const result = _item.split("=");
            if (_index === 0) {
                key = result[0];
                value = result[1];
            } else {
                const _k = String(result[0]).toLowerCase();
                optional[_k] = _k === "expires" ? new Date(result[1]) : result[1];
            }
        });
        /**
     * If sensorsdata2015jssdkcross is not cleared here, the following error will occur
     * Invalid character in header content ["cookie"]
     */ deleteCookie("sensorsdata2015jssdkcross", {
            req: ctx.req,
            res: ctx.res
        });
        setCookie(key, value, {
            req: ctx.req,
            res: ctx.res,
            ...optional
        });
    });
};


/***/ })

};
;