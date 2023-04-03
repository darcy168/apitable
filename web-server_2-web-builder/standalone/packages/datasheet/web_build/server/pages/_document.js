"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 85761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ../core/dist/index.js
var dist = __webpack_require__(23440);
// EXTERNAL MODULE: ../../node_modules/next/document.js
var next_document = __webpack_require__(331);
// EXTERNAL MODULE: ../../node_modules/next/script.js
var script = __webpack_require__(45847);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./utils/get_initial_props.ts + 1 modules
var get_initial_props = __webpack_require__(62977);
;// CONCATENATED MODULE: ./utils/init_private.ts
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
(()=>{
    if (!process.env.SSR) {
        window.REACT_APP_DEPLOYMENT_MODELS = (0,dist.isPrivateDeployment)();
    }
})();

;// CONCATENATED MODULE: ./pages/_document.tsx
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






class MyDocument extends next_document["default"] {
    static async getInitialProps(ctx) {
        const initialProps = await next_document["default"].getInitialProps(ctx);
        const initData = await (0,get_initial_props/* getInitialProps */.k)({
            ctx
        });
        return {
            ...initialProps,
            ...initData
        };
    }
    render() {
        const { env , version , envVars , locale  } = this.props;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            href: (0,dist.integrateCdnHost)(JSON.parse(envVars).LOGO)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "shortcut icon",
                            href: (0,dist.integrateCdnHost)(JSON.parse(envVars).FAVICON)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:image",
                            content: (0,dist.integrateCdnHost)(JSON.parse(envVars).FAVICON)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "manifest",
                            href: "/file/manifest.json"
                        }),
                        JSON.parse(envVars).EMBED_BAIDU_CATCH_SDK && /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            src: "https://rte-fe-static.bj.bcebos.com/rte-online/rte-fe-static/MultiSheetMonitor/index.js"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            src: "/file/js/browser_check.2.js",
                            async: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            src: "/custom/custom_config.js",
                            defer: true
                        }),
                        JSON.parse(envVars).COOKIEBOT_ID && /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            id: "Cookiebot",
                            src: "https://consent.cookiebot.com/uc.js",
                            "data-cbid": JSON.parse(envVars).COOKIEBOT_ID,
                            "data-blockingmode": "auto",
                            async: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {}),
                        !JSON.parse(envVars).DISABLE_AWSC && /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                            src: "https://g.alicdn.com/AWSC/AWSC/awsc.js",
                            strategy: "beforeInteractive"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                            id: "__initialization_data__",
                            strategy: "beforeInteractive",
                            children: `
            window.__initialization_data__ = {
                env: '${env}',
                version: '${version}',
                envVars: ${envVars},
                locale:'${locale}',
                userInfo: null,
                wizards: null,
              };
            `
                        })
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const _document = (MyDocument);


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

/***/ 94140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 89716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 76368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 56724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 18743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 25485:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7105,4088,402,6791,6991,2977], () => (__webpack_exec__(85761)));
module.exports = __webpack_exports__;

})();