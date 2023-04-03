"use strict";
exports.id = 7569;
exports.ids = [7569];
exports.modules = {

/***/ 87569:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apitable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64754);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pc_components_route_manager_navigation_to_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51331);
/* harmony import */ var pc_utils_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85421);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apitable_components__WEBPACK_IMPORTED_MODULE_1__]);
_apitable_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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
 */ /*
 * The fallback page displayed when the React global crashes
 */ 






const ErrorPage = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        window.parent.postMessage({
            message: "pageCrash"
        }, "*");
    }, []);
    const handleClick = ()=>{
        window.location.href = "/workbench";
    };
    const handleContactUs = ()=>{
        (0,pc_components_route_manager_navigation_to_url__WEBPACK_IMPORTED_MODULE_3__/* .navigationToUrl */ .S)((0,pc_utils_env__WEBPACK_IMPORTED_MODULE_4__/* .getEnvVariables */ .Sy)().CRASH_PAGE_CONTACT_US_URL);
    };
    const handleFeedback = ()=>{
        (0,pc_components_route_manager_navigation_to_url__WEBPACK_IMPORTED_MODULE_3__/* .navigationToUrl */ .S)((0,pc_utils_env__WEBPACK_IMPORTED_MODULE_4__/* .getEnvVariables */ .Sy)().CRASH_PAGE_REPORT_ISSUES_URL);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "errorPage",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "errorText",
                children: [
                    (0,_apitable_core__WEBPACK_IMPORTED_MODULE_2__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_2__.Strings.error_boundary_crashed),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        role: "img",
                        "aria-label": "sick",
                        children: "\uD83E\uDD12"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_apitable_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                color: "primary",
                onClick: handleClick,
                children: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_2__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_2__.Strings.error_boundary_back)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_apitable_components__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
                underline: false,
                onClick: handleContactUs,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_apitable_components__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    className: "contactUs",
                    variant: "body2",
                    color: _apitable_components__WEBPACK_IMPORTED_MODULE_1__.colorVars.fc0,
                    children: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_2__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_2__.Strings.contact_us)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_apitable_components__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
                className: "errorFeedback",
                underline: true,
                color: _apitable_components__WEBPACK_IMPORTED_MODULE_1__.colorVars.fc3,
                onClick: handleFeedback,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_apitable_components__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    variant: "body2",
                    color: _apitable_components__WEBPACK_IMPORTED_MODULE_1__.colorVars.fc3,
                    children: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_2__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_2__.Strings.error_page_feedback_text)
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;