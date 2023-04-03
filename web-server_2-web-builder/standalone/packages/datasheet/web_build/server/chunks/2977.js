"use strict";
exports.id = 2977;
exports.ids = [2977];
exports.modules = {

/***/ 62977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* binding */ getInitialProps)
});

// EXTERNAL MODULE: ./src/get_env.ts
var get_env = __webpack_require__(36991);
;// CONCATENATED MODULE: ./utils/constant.ts
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
 */ // for baidu ruliu
const FILTER_HEADERS = [
    "Staffid",
    "Staffname",
    "X-Rio-Seq",
    "x-ext-data",
    "Signature",
    "timestamp"
];

;// CONCATENATED MODULE: ./utils/get_initial_props.ts
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

const LANG_MAP = {
    en_US: "en-US",
    zh_CN: "zh-CN"
};
const filterCustomHeader = (headers)=>{
    if (!headers) return {};
    const _headers = {};
    for(const k in headers){
        if (!FILTER_HEADERS.map((item)=>item.toUpperCase()).includes(k.toUpperCase())) {
            continue;
        }
        _headers[k] = headers[k];
    }
    return _headers;
};
const getInitialProps = async (context)=>{
    const envVars = (0,get_env/* getEnvVars */.x)();
    const cookie = context.ctx.req?.headers.cookie;
    const filterHeaders = filterCustomHeader(context.ctx.req?.headers);
    const baseResponse = {
        env: process.env.ENV,
        version: process.env.WEB_CLIENT_VERSION,
        envVars: JSON.stringify(envVars)
    };
    const language = context.ctx.req?.headers["accept-language"];
    const headers = {
        ...filterHeaders
    };
    const defaultLang = envVars.SYSTEM_CONFIGURATION_DEFAULT_LANGUAGE;
    let locale = defaultLang ? LANG_MAP[defaultLang] : "zh-CN";
    if (cookie) {
        headers.cookie = cookie;
        const getCookie = (name)=>{
            const value = `; ${cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length >= 2) return parts[1].split(";").shift();
            return null;
        };
        // server lang
        const langParts = getCookie("lang");
        // client cache cookie while language toggle
        const localeParts = getCookie("client-lang");
        locale = localeParts || langParts || locale;
    }
    if (language) {
        headers["Accept-Language"] = language;
    }
    return {
        ...baseResponse,
        locale
    };
};


/***/ })

};
;