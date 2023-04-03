(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 95118:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_es_date_picker_style_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22330);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var element_closest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31937);
/* harmony import */ var element_closest__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(element_closest__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var error_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87569);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var modules_shared_player_init__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32503);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25237);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45847);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var pc_common_initializer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(12640);
/* harmony import */ var pc_components_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54106);
/* harmony import */ var pc_components_route_manager_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72932);
/* harmony import */ var pc_events__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(12806);
/* harmony import */ var pc_hooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(22829);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(50912);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(99000);
/* harmony import */ var pc_utils_env__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(85421);
/* harmony import */ var pc_worker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(58979);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(11498);
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var reportWebVitals__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(72066);
/* harmony import */ var _utils_get_initial_props__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(62977);
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(98315);
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(posthog_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var posthog_js_react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(35487);
/* harmony import */ var posthog_js_react__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(posthog_js_react__WEBPACK_IMPORTED_MODULE_28__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([error_page__WEBPACK_IMPORTED_MODULE_7__, pc_common_initializer__WEBPACK_IMPORTED_MODULE_14__, pc_components_common__WEBPACK_IMPORTED_MODULE_15__, pc_components_route_manager_router__WEBPACK_IMPORTED_MODULE_16__, pc_events__WEBPACK_IMPORTED_MODULE_17__, pc_hooks__WEBPACK_IMPORTED_MODULE_18__, pc_resource_service__WEBPACK_IMPORTED_MODULE_19__]);
([error_page__WEBPACK_IMPORTED_MODULE_7__, pc_common_initializer__WEBPACK_IMPORTED_MODULE_14__, pc_components_common__WEBPACK_IMPORTED_MODULE_15__, pc_components_route_manager_router__WEBPACK_IMPORTED_MODULE_16__, pc_events__WEBPACK_IMPORTED_MODULE_17__, pc_hooks__WEBPACK_IMPORTED_MODULE_18__, pc_resource_service__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
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
 */ // import App from 'next/app'


















































const RouterProvider = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(()=>__webpack_require__.e(/* import() */ 7792).then(__webpack_require__.bind(__webpack_require__, 98360)), {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "pc/components/route_manager/router_provider"
        ]
    },
    ssr: true
});
const ThemeWrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(null, {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "theme_wrapper"
        ]
    },
    ssr: false
});
if (!process.env.SSR && (0,pc_utils_env__WEBPACK_IMPORTED_MODULE_21__/* .getEnvVariables */ .Sy)().NEXT_PUBLIC_POSTHOG_KEY) {
    posthog_js__WEBPACK_IMPORTED_MODULE_27___default().init((0,pc_utils_env__WEBPACK_IMPORTED_MODULE_21__/* .getEnvVariables */ .Sy)().NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: (0,pc_utils_env__WEBPACK_IMPORTED_MODULE_21__/* .getEnvVariables */ .Sy)().NEXT_PUBLIC_POSTHOG_HOST,
        autocapture: false,
        capture_pageview: false,
        capture_pageleave: false,
        // Disable in development
        loaded: (posthog)=>{
            if (false) {}
        }
    });
}
const initWorker = async ()=>{
    const comlinkStore = await (0,pc_worker__WEBPACK_IMPORTED_MODULE_22__/* .initWorkerStore */ .F)();
    // Initialization functions
    (0,pc_common_initializer__WEBPACK_IMPORTED_MODULE_14__/* .initializer */ .z)(comlinkStore);
    const resourceService = (0,pc_resource_service__WEBPACK_IMPORTED_MODULE_19__/* .initResourceService */ .Rm)(comlinkStore.store);
    (0,pc_events__WEBPACK_IMPORTED_MODULE_17__/* .initEventListen */ .U4)(resourceService);
};
(()=>{
    if (!process.env.SSR) {
        console.log("start init web");
        // import('../public/file/js/sensors');
        initWorker();
    }
})();
var LoadingStatus;
(function(LoadingStatus) {
    LoadingStatus[LoadingStatus["None"] = 0] = "None";
    LoadingStatus[LoadingStatus["Start"] = 1] = "Start";
    LoadingStatus[LoadingStatus["Complete"] = 2] = "Complete";
})(LoadingStatus || (LoadingStatus = {}));
function MyApp(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const isWidget = router.asPath.includes("widget-stage");
    if (isWidget) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(props.Component, {
            ...props.pageProps
        });
    }
    return MyAppMain(props);
}
function MyAppMain({ Component , pageProps , envVars  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const env = JSON.parse(envVars);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(()=>{
        if (router.asPath.includes("widget-stage")) {
            return LoadingStatus.Complete;
        }
        return LoadingStatus.None;
    });
    const { 0: userData , 1: setUserData  } = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(null);
    const { 0: userLoading , 1: setUserLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(()=>{
        const handleStart = ()=>{
            if (loading !== LoadingStatus.None) {
                return;
            }
            setLoading(LoadingStatus.Start);
        };
        const endLoading = ()=>{
            const ele = document.querySelector(".script-loading-wrap");
            // delete loading : scale logo -> vika -> wait 1000ms -> disappear
            const logoImg = document.querySelector(".script-loading-logo-img");
            logoImg?.classList.remove("loading-static-animation");
            setTimeout(()=>ele?.classList.add("script-loading-wrap-finished"), 0);
            ele?.addEventListener("transitionend", (e)=>{
                if (e.target === logoImg && ele?.classList.contains("script-loading-wrap-finished")) {
                    ele?.classList.add("script-loading-wrap-finished");
                    setTimeout(()=>setLoading(LoadingStatus.Complete), 500);
                } else if (e.target === ele) {
                    ele?.parentNode?.removeChild(ele);
                }
            // setLoading(LoadingStatus.Complete);
            });
        // Compatible with previous loading animation, private cloud retention
        // const ldsEle = document.querySelector('.lds-ripple');
        // ldsEle?.parentNode?.removeChild(ldsEle);
        };
        const handleComplete = ()=>{
            if (loading !== LoadingStatus.Start) {
                return;
            }
            endLoading();
        };
        setTimeout(()=>{
            if (loading !== LoadingStatus.None) {
                return;
            }
            endLoading();
        }, 0);
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        return ()=>{
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
        };
    // eslint-disable-next-line
    }, [
        loading
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(()=>{
        const getUser = async ()=>{
            const res = await axios__WEBPACK_IMPORTED_MODULE_4___default().get("/client/info");
            let userInfo = JSON.parse(res.data.userInfo);
            setUserData(userInfo);
            const pathUrl = window.location.pathname;
            const { nodeId  } = (0,pc_hooks__WEBPACK_IMPORTED_MODULE_18__/* .getPageParams */ .B_)(pathUrl || "");
            const query = new URLSearchParams(window.location.search);
            const spaceId = query.get("spaceId") || "";
            let userInfoError;
            /**
       * If there is no nodeId or spaceId in the pathUrl, the userInfo returned by user/me and client/info is actually the same,
       * so there is no need to repeat the request.
       */ if (pathUrl && (pathUrl.startsWith("/workbench") || pathUrl.startsWith("/org") || pathUrl.startsWith("/notification") || pathUrl.startsWith("/management") || pathUrl.includes("/tpl") || pathUrl.includes("/space") || pathUrl.includes("/login")) && (nodeId || spaceId)) {
                const spaceId1 = (0,pc_hooks__WEBPACK_IMPORTED_MODULE_18__/* .getRegResult */ .UX)(pathUrl, pc_hooks__WEBPACK_IMPORTED_MODULE_18__/* .spaceIdReg */ .YS);
                const res1 = await _apitable_core__WEBPACK_IMPORTED_MODULE_1__.Api.getUserMe({
                    nodeId,
                    spaceId: spaceId1
                }, false);
                const { data , success , message , code  } = res1.data;
                if (success) {
                    userInfo = data;
                } else {
                    userInfoError = {
                        code,
                        message
                    };
                }
            }
            setUserLoading(false);
            if (!userInfo) return;
            if (userInfoError) {
                if (userInfoError.code === _apitable_core__WEBPACK_IMPORTED_MODULE_1__.StatusCode.INVALID_SPACE) {
                    pc_components_common__WEBPACK_IMPORTED_MODULE_15__/* .Modal.error */ .u_.error({
                        title: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_1__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.Strings.get_verification_code_err_title),
                        content: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_1__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.Strings.enter_unactive_space_err_message),
                        okText: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_1__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.Strings.submit),
                        onOk: ()=>{
                            pc_components_route_manager_router__WEBPACK_IMPORTED_MODULE_16__/* .Router.push */ .F.push(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.Navigation.HOME);
                        }
                    });
                    return;
                }
                pc_store__WEBPACK_IMPORTED_MODULE_20__/* .store.dispatch */ .h.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.StoreActions.updateUserInfoErr({
                    code: userInfoError.code,
                    msg: userInfoError.message
                }));
                return;
            }
            const _batchActions = [
                _apitable_core__WEBPACK_IMPORTED_MODULE_1__.StoreActions.setIsLogin(true),
                _apitable_core__WEBPACK_IMPORTED_MODULE_1__.StoreActions.setUserMe(userInfo),
                _apitable_core__WEBPACK_IMPORTED_MODULE_1__.StoreActions.setLoading(false),
                _apitable_core__WEBPACK_IMPORTED_MODULE_1__.StoreActions.updateUserInfoErr(null), 
            ];
            if (!(0,pc_hooks__WEBPACK_IMPORTED_MODULE_18__/* .getRegResult */ .UX)(pathUrl, pc_hooks__WEBPACK_IMPORTED_MODULE_18__/* .shareIdReg */ .Lb)) {
                // This is to avoid initializing the space resource more than once under the share route
                _batchActions.push(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.StoreActions.setActiveSpaceId(userInfo.spaceId));
            }
            pc_store__WEBPACK_IMPORTED_MODULE_20__/* .store.dispatch */ .h.dispatch((0,redux_batched_actions__WEBPACK_IMPORTED_MODULE_25__.batchActions)(_batchActions, pc_hooks__WEBPACK_IMPORTED_MODULE_18__/* .LOGIN_SUCCESS */ .XP));
            window.__initialization_data__.userInfo = userInfo;
            window.__initialization_data__.wizards = (0,lodash__WEBPACK_IMPORTED_MODULE_8__.defaultsDeep)(JSON.parse(res.data.wizards), {
                guide: _apitable_core__WEBPACK_IMPORTED_MODULE_1__.SystemConfig.guide,
                player: _apitable_core__WEBPACK_IMPORTED_MODULE_1__.SystemConfig.player
            });
        };
        getUser().then(()=>{
            __webpack_require__.e(/* import() */ 5012).then(__webpack_require__.bind(__webpack_require__, 5012));
            // Initialize the user system
            (0,modules_shared_player_init__WEBPACK_IMPORTED_MODULE_9__/* .init */ .S)();
            console.log("Current version number: " + (0,pc_utils_env__WEBPACK_IMPORTED_MODULE_21__/* .getReleaseVersion */ .bM)());
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(()=>{
        // @ts-ignore
        Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 50643, 23));
        // @ts-ignore
        Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 30339, 23));
        element_closest__WEBPACK_IMPORTED_MODULE_6___default()(window);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(()=>{
        (function() {
            const _Worker = window.Worker;
            if (typeof _Worker === "function") {
                window.Worker = function(url, opts) {
                    if (url.startsWith("//")) {
                        url = `${window.location.protocol}${url}`;
                    } else if (url.startsWith("/")) {
                        url = `${window.location.origin}${url}`;
                    }
                    const blob = new Blob([
                        "importScripts(" + JSON.stringify(url) + ")"
                    ], {
                        type: "text/javascript"
                    });
                    return new _Worker(URL.createObjectURL(blob), opts);
                };
            }
        })();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(()=>{
        document.title = (0,_apitable_core__WEBPACK_IMPORTED_MODULE_1__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.Strings.system_configuration_product_name);
        const descMeta = document.querySelector('meta[name="description"]');
        descMeta.content = (0,_apitable_core__WEBPACK_IMPORTED_MODULE_1__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.Strings.client_meta_label_desc);
    }, []);
    const curTimezone = userData?.timeZone;
    const updateUserTimeZone = (timeZone, cb)=>{
        _apitable_core__WEBPACK_IMPORTED_MODULE_1__.Api.updateUser({
            timeZone
        }).then((res)=>{
            const { success  } = res.data;
            if (success) {
                pc_store__WEBPACK_IMPORTED_MODULE_20__/* .store.dispatch */ .h.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.StoreActions.setUserTimeZone(timeZone));
                setUserData({
                    ...userData,
                    timeZone
                });
                cb?.();
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(()=>{
        const checkTimeZoneChange = ()=>{
            // https://github.com/iamkun/dayjs/blob/dev/src/plugin/timezone/index.js#L143
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const offset = (0,_apitable_core__WEBPACK_IMPORTED_MODULE_1__.getTimeZoneOffsetByUtc)(timeZone);
            if (!timeZone) return;
            // set default timeZone
            if (curTimezone === null) {
                updateUserTimeZone(timeZone);
            } else if (curTimezone && curTimezone !== timeZone) {
                updateUserTimeZone(timeZone, ()=>{
                    pc_components_common__WEBPACK_IMPORTED_MODULE_15__/* .Modal.warning */ .u_.warning({
                        title: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_1__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.Strings.notify_time_zone_change_title),
                        content: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_1__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.Strings.notify_time_zone_change_desc, {
                            time_zone: `UTC${offset > 0 ? "+" : ""}${offset}(${timeZone})`
                        }),
                        maskClosable: false,
                        onOk: ()=>{
                            window.location.reload();
                        }
                    });
                });
            }
        };
        checkTimeZoneChange();
        const interval = setInterval(checkTimeZoneChange, 15 * 1000);
        return ()=>{
            clearInterval(interval);
        };
    }, [
        curTimezone
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "APITable,datasheet,Airtable,nocode,low-code,aPaaS,hpaPaaS,RAD,web3,维格表,大数据,数字化,数字化转型,vika,vikadata,数据中台,业务中台,数据资产, 数字化智能办公,远程办公,数据工作台,区块链,人工智能,多维表格,数据库应用,快速开发工具"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "renderer",
                        content: "webkit"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width,viewport-fit=cover, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#000000"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "wpk-bid",
                        content: "dta_2_83919"
                    })
                ]
            }),
            env.DINGTALK_MONITOR_PLATFORM_ID && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_13___default()), {
                strategy: "lazyOnload",
                id: "error",
                children: `
            window.addEventListener('error', function(event) {
            if (
              event.message.includes('ResizeObserver') ||
              navigator.userAgent.toLowerCase().includes('dingtalk')
            ) {
              event.stopImmediatePropagation();
            }
          })
        `
            }),
            env.BAIDU_ANALYSE_ID && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_13___default()), {
                id: "baiduAnalyse",
                children: `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?${env.BAIDU_ANALYSE_ID}";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
          })();
        `
            }),
            env.DINGTALK_MONITOR_PLATFORM_ID && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_13___default()), {
                id: "userAgent",
                children: `
          if (navigator.userAgent.toLowerCase().includes('dingtalk')) {
            !(function(c,i,e,b){var h=i.createElement("script");
            var f=i.getElementsByTagName("script")[0];
            h.type="text/javascript";
            h.crossorigin=true;
            h.onload=function(){c[b]||(c[b]=new c.wpkReporter({bid:"${env.DINGTALK_MONITOR_PLATFORM_ID}"}));
            c[b].installAll()};
            f.parentNode.insertBefore(h,f);
            h.src=e})(window,document,"https://g.alicdn.com/woodpeckerx/jssdk??wpkReporter.js","__wpk");
          }
        `
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_13___default()), {
                id: "loadingAnimation",
                strategy: "lazyOnload",
                children: `
          window._loading = new Date().getTime();
          const logoImg = document.querySelector('.script-loading-logo-img');
          window.requestAnimationFrame(() => {
            setTimeout(() => logoImg && logoImg.classList.add('loading-static-animation'), 0)
          })
          logoImg && logoImg.addEventListener("transitionend", function() {
            const classLs = logoImg.classList
            if (classLs.contains('script-loading-wrap-finished')) {
              return
            }
            if (classLs.contains('loading-static-animation')) {
              logoImg.classList.remove('loading-static-animation')
            } else {
              logoImg.classList.add('loading-static-animation')
            }
          })
        `
            }),
            !env.DISABLE_AWSC && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_13___default()), {
                        src: "https://res.wx.qq.com/open/js/jweixin-1.2.0.js",
                        referrerPolicy: "origin"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_13___default()), {
                        src: "https://open.work.weixin.qq.com/wwopen/js/jwxwork-1.0.0.js",
                        referrerPolicy: "origin"
                    })
                ]
            }),
            env.DINGTALK_MONITOR_PLATFORM_ID && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_13___default()), {
                src: "https://g.alicdn.com/dingding/dinglogin/0.0.5/ddLogin.js"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_2__.ErrorBoundary, {
                fallback: error_page__WEBPACK_IMPORTED_MODULE_7__["default"],
                beforeCapture: beforeCapture,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "__next_main",
                    children: [
                        !userLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                opacity: loading !== LoadingStatus.Complete ? 0 : 1
                            },
                            onScroll: onScroll,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(posthog_js_react__WEBPACK_IMPORTED_MODULE_28__.PostHogProvider, {
                                client: (posthog_js__WEBPACK_IMPORTED_MODULE_27___default()),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_24__.Provider, {
                                    store: pc_store__WEBPACK_IMPORTED_MODULE_20__/* .store */ .h,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RouterProvider, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeWrapper, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                ...pageProps,
                                                userInfo: userData
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("script-loading-wrap-default", {
                                "script-loading-wrap": loading !== LoadingStatus.Complete || userLoading
                            }),
                            children: (loading !== LoadingStatus.Complete || userLoading) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "main-img-wrap",
                                style: {
                                    height: "auto"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_1__.integrateCdnHost)((0,pc_utils_env__WEBPACK_IMPORTED_MODULE_21__/* .getEnvVariables */ .Sy)().LOGO),
                                        className: "script-loading-logo-img",
                                        alt: "logo"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_1__.integrateCdnHost)((0,pc_utils_env__WEBPACK_IMPORTED_MODULE_21__/* .getEnvVariables */ .Sy)().LOGO_TEXT_LIGHT),
                                        className: "script-loading-logo-text-img",
                                        alt: "logo_text_dark"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            env.GOOGLE_ANALYTICS_ID && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_13___default()), {
                        async: true,
                        src: `https://www.googletagmanager.com/gtag/js?id=${env.GOOGLE_ANALYTICS_ID}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_13___default()), {
                        id: "googleTag",
                        children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', window.__initialization_data__.envVars.GOOGLE_ANALYTICS_ID);
          `
                    })
                ]
            })
        ]
    });
}
/**
 * When editing a cell in Safari, main will be shifted up by 7 pixels after the element is out of focus.
 * When an offset is detected, it needs to be reset manually.
 * The reason why the onBlur event is not used here is that after the editing element is out of focus,
 * other elements will be focused, and the focused element is a child of main, so onBlur will not be triggered as expected.
 * @param e
 */ const onScroll = (e)=>{
    const currentTarget = e.currentTarget;
    if (currentTarget && currentTarget.scrollTop) {
        currentTarget.scrollTop = 0;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
(0,reportWebVitals__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z)();
MyApp.getInitialProps = _utils_get_initial_props__WEBPACK_IMPORTED_MODULE_26__/* .getInitialProps */ .k;
const beforeCapture = (scope)=>{
    scope.setTag("PageCrash", true);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ APITable)
});

// NAMESPACE OBJECT: ./src/modules/shared/apitable_lib/nav.ts
var nav_namespaceObject = {};
__webpack_require__.r(nav_namespaceObject);
__webpack_require__.d(nav_namespaceObject, {
  "addNavButton": () => (addNavButton)
});

// EXTERNAL MODULE: ../core/dist/index.js
var dist = __webpack_require__(23440);
;// CONCATENATED MODULE: ./src/modules/shared/apitable_lib/nav.ts
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
 * Left navigation bar
 *
 * @Author: Kelly Peilin Chan (kelly@apitable.com)
 * @Date: 2020-03-21 16:07:00
 * @Last Modified by: Kelly Peilin Chan (kelly@apitable.com)
 * @Last Modified time: 2020-03-21 16:19:00
 */ // import { Player } from '@apitable/core';
function addNavButton() {
//
// Player.applyFilters('')
}

;// CONCATENATED MODULE: ./src/modules/shared/apitable_lib/index.ts
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

const APITable = {
    apphook: dist.Player.getAppHook(),
    nav: nav_namespaceObject,
    t: dist.t
};



/***/ }),

/***/ 74121:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pc_components_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54106);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50912);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99000);
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98315);
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(posthog_js__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_components_common__WEBPACK_IMPORTED_MODULE_2__, pc_resource_service__WEBPACK_IMPORTED_MODULE_3__]);
([pc_components_common__WEBPACK_IMPORTED_MODULE_2__, pc_resource_service__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
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





let lastModalDestroy = null;
const fixInnerConsistency = (datasheetId, errors, state)=>{
    const ops = (0,_apitable_core__WEBPACK_IMPORTED_MODULE_0__.generateFixInnerConsistencyChangesets)(datasheetId, errors, state);
    if (!ops.length) {
        return;
    }
    pc_resource_service__WEBPACK_IMPORTED_MODULE_3__/* .resourceService.instance.operationExecuted */ .Zc.instance.operationExecuted(ops);
    _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.captureMessage("fixInnerConsistency: Inner data inconsistency of datasheet found and attempts made to fix", {
        extra: {
            datasheetId,
            ops
        }
    });
};
const fixLinkConsistency = (error, state)=>{
    const resourceOps = (0,_apitable_core__WEBPACK_IMPORTED_MODULE_0__.generateFixLinkConsistencyChangesets)(error, state);
    if (!resourceOps) {
        return;
    }
    pc_resource_service__WEBPACK_IMPORTED_MODULE_3__/* .resourceService.instance.operationExecuted */ .Zc.instance.operationExecuted(resourceOps);
    _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.captureMessage("fixLinkConsistency: Link inconsistency found and attempts made to fix", {
        extra: {
            mainDstId: error.mainDstId,
            resourceOps
        }
    });
};
// Set user ID, logged in
_apitable_core__WEBPACK_IMPORTED_MODULE_0__.Player.bindTrigger(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.Events.app_set_user_id, (args)=>{
    posthog_js__WEBPACK_IMPORTED_MODULE_5___default().identify(args.uuid);
    _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.setUser({
        email: args.email,
        username: args.nickName,
        memberName: args.memberName,
        uuid: args.uuid,
        spaceName: args.spaceName
    });
});
// Error reporting related
_apitable_core__WEBPACK_IMPORTED_MODULE_0__.Player.bindTrigger(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.Events.app_error_logger, (args)=>{
    const { error , metaData  } = args;
    console.warn("! " + "app_error_logger", args);
    _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.captureException(error, {
        extra: metaData
    });
});
// Error reporting related
_apitable_core__WEBPACK_IMPORTED_MODULE_0__.Player.bindTrigger(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.Events.app_modal_confirm, (args)=>{
    const { key , metaData  } = args;
    switch(key){
        case _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ModalConfirmKey.FixLinkConsistency:
            {
                if (lastModalDestroy) {
                    lastModalDestroy.destroy();
                }
                lastModalDestroy = pc_components_common__WEBPACK_IMPORTED_MODULE_2__/* .Modal.confirm */ .u_.confirm({
                    title: "Oops",
                    type: "warning",
                    content: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_0__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.Strings.confirm_link_inconsistency_detected),
                    onOk: ()=>{
                        fixLinkConsistency(metaData.error, pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store.getState */ .h.getState());
                        lastModalDestroy = null;
                    }
                });
                break;
            }
        case _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ModalConfirmKey.FixInnerConsistency:
        default:
            {
                const handleOk = ()=>{
                    const { datasheetId , errors  } = metaData;
                    fixInnerConsistency(datasheetId, errors, pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store.getState */ .h.getState());
                    lastModalDestroy = null;
                };
                if (lastModalDestroy) {
                    lastModalDestroy.destroy();
                }
                lastModalDestroy = pc_components_common__WEBPACK_IMPORTED_MODULE_2__/* .Modal.confirm */ .u_.confirm({
                    title: "Oops",
                    type: "warning",
                    content: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_0__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.Strings.confirm_the_system_has_detected_a_conflict_in_document),
                    onOk: handleOk
                });
                break;
            }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apphook_trigger_commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37680);
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40931);
/* harmony import */ var enterprise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14463);
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


// @ts-ignore

// const Triggers = SystemConfig.player.trigger;
/**
 * Execute at app initialization time
 *
 * @export
 */ function init() {
    console.log("init", enterprise__WEBPACK_IMPORTED_MODULE_3__.updatePlayerConfig, enterprise__WEBPACK_IMPORTED_MODULE_3__.getPlayerHooks);
    // Get configuration file
    const HooksConfig = window.__initialization_data__.wizards;
    let config;
    /**
   * Here it is better to distinguish the environment, local debugging is convenient to read the information directly from the configuration table,
   * if not distinguish the environment, the impact on debugging will be greater
   */ if (false) {} else if (HooksConfig) {
        config = HooksConfig;
    }
    if (!config) return;
    (0,enterprise__WEBPACK_IMPORTED_MODULE_3__.updatePlayerConfig)?.(config);
    const Events = config.player.events;
    // Binding events to the trigger datasheet
    const triggers = config.player.trigger;
    // pendingBindEvents = {eventId: triggerId[]}, event and trigger are in a one-to-many relationship
    const pendingBindEvents = {};
    triggers.forEach((trigger)=>{
        // Whether to abandon
        if (trigger.suspended) return;
        const curTriggerId = trigger.id;
        const byEventId = trigger.event[0];
        if (pendingBindEvents.hasOwnProperty(byEventId)) {
            pendingBindEvents[byEventId] = [
                ...pendingBindEvents[byEventId],
                curTriggerId
            ];
        } else {
            pendingBindEvents[byEventId] = [
                curTriggerId
            ];
        }
    });
    // Start binding
    Object.keys(pendingBindEvents).forEach((eventId)=>{
        const allTriggerIds = pendingBindEvents[eventId];
        _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Player.bindTrigger(Events[eventId], (args)=>{
            // Filter out triggers that don't match rule
            const validTriggers = allTriggerIds.filter((triggerId)=>{
                const curTrigger = triggers.find((item)=>item.id === triggerId);
                if (!curTrigger) return;
                const eventMatch = (0,_rules__WEBPACK_IMPORTED_MODULE_2__/* .isEventStateMatch */ .RS)(args, curTrigger.eventState);
                const timeRulePassed = (0,_rules__WEBPACK_IMPORTED_MODULE_2__/* .isTimeRulePassed */ .kI)(curTrigger.startTime, curTrigger.endTime);
                const rulesPassed = (0,_rules__WEBPACK_IMPORTED_MODULE_2__/* .isRulesPassed */ .Om)(config?.player.rule, curTrigger.rules);
                return eventMatch && timeRulePassed && rulesPassed;
            });
            // Iterate through multiple triggers and execute the corresponding actions
            validTriggers.forEach((triggerId)=>{
                const trigger = triggers.find((item)=>item.id === triggerId);
                if (!trigger) return;
                const actions = trigger.actions || [];
                (0,_apphook_trigger_commands__WEBPACK_IMPORTED_MODULE_1__/* .startActions */ .FE)(config, actions);
            });
        });
    });
    // Bind events in steps
    const Steps = config.guide.step;
    const pendingBindEventsInSteps = [];
    Steps && Object.keys(Steps).forEach((stepId)=>{
        const curStepInfo = Steps[stepId];
        if (!curStepInfo.hasOwnProperty("byEvent")) return;
        const byEventId = curStepInfo.byEvent[0];
        if (pendingBindEventsInSteps.includes(byEventId)) return;
        pendingBindEventsInSteps.push(byEventId);
    });
    pendingBindEventsInSteps.forEach((eventId)=>{
        _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Player.bindTrigger(Events[eventId], ()=>{
            const hooks = (0,enterprise__WEBPACK_IMPORTED_MODULE_3__.getPlayerHooks)?.() || {};
            const { curGuideWizardId , triggeredGuideInfo  } = hooks;
            // Whether the user is currently in certain wizards, determine whether the user has previously triggered
            if (!triggeredGuideInfo || curGuideWizardId === -1 || !triggeredGuideInfo.hasOwnProperty(curGuideWizardId)) return;
            // The corresponding stepId of the current hooks event is Number(key), which determines whether the step before this one has been completed.
            const curStepInfo = triggeredGuideInfo[curGuideWizardId];
            if (typeof curStepInfo.steps !== "object" || curStepInfo.steps.length === curStepInfo.triggeredSteps.length) return;
            const nextStepIds = curStepInfo.steps[curStepInfo.triggeredSteps.length];
            const hasByEvents = nextStepIds.find((stepId)=>{
                const stepInfo = Steps[stepId];
                return stepInfo && "byEvent" in stepInfo && stepInfo.byEvent && stepInfo.byEvent[0] === eventId;
            });
            if (!hasByEvents) return;
            _apphook_trigger_commands__WEBPACK_IMPORTED_MODULE_1__/* .TriggerCommands.open_guide_next_step */ .uj.open_guide_next_step?.({
                clearAllPrevUi: true
            });
        });
    });
}


/***/ }),

/***/ 40931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Om": () => (/* binding */ isRulesPassed),
/* harmony export */   "RS": () => (/* binding */ isEventStateMatch),
/* harmony export */   "kI": () => (/* binding */ isTimeRulePassed)
/* harmony export */ });
/* unused harmony exports getConditionValue, getConditionArgsValue, isRulePassed */
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99000);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dot_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10701);
/* harmony import */ var dot_object__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dot_object__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pc_utils_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85421);
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





var PlayerRulesConditionType;
(function(PlayerRulesConditionType) {
    PlayerRulesConditionType["DEVICE"] = "device";
    PlayerRulesConditionType["IDENTITY"] = "identity";
    PlayerRulesConditionType["SIGN_UP_TIME"] = "sign_up_time";
    PlayerRulesConditionType["URL"] = "url";
    PlayerRulesConditionType["LABS"] = "labs";
    PlayerRulesConditionType["EDITION"] = "edition";
})(PlayerRulesConditionType || (PlayerRulesConditionType = {}));
var DeviceType;
(function(DeviceType) {
    DeviceType["Mobile"] = "mobile";
    DeviceType["PC"] = "pc";
    DeviceType["App"] = "app";
})(DeviceType || (DeviceType = {}));
var PlayerRulesConditionArgsType;
(function(PlayerRulesConditionArgsType) {
    PlayerRulesConditionArgsType["SHARE_ID"] = "shareId";
    PlayerRulesConditionArgsType["SPACE_ID"] = "spaceId";
    PlayerRulesConditionArgsType["TEMPLATE_ID"] = "templateId";
})(PlayerRulesConditionArgsType || (PlayerRulesConditionArgsType = {}));
const getConditionValue = (str)=>{
    const state = pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.getState */ .h.getState();
    const user = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.userStateSelector(state);
    const userInfo = user.info;
    const userWizards = userInfo?.wizards;
    if (str.includes(".")) {
        const tempObj = dot_object__WEBPACK_IMPORTED_MODULE_3__.object({
            [str]: null
        });
        const strKey = Object.keys(tempObj)[0];
        switch(strKey){
            case "wizard":
                {
                    const id = tempObj[strKey].findIndex((item)=>item);
                    return userWizards && userWizards.hasOwnProperty(id) ? userWizards[id] : 0;
                }
            default:
                {
                    return str;
                }
        }
    }
    switch(str){
        case PlayerRulesConditionType.DEVICE:
            {
                const width = window.innerWidth;
                if ((0,pc_utils_env__WEBPACK_IMPORTED_MODULE_5__/* .isMobileApp */ .k)()) {
                    return DeviceType.App;
                }
                return width > _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ScreenWidth.md ? DeviceType.PC : DeviceType.Mobile;
            }
        case PlayerRulesConditionType.IDENTITY:
            {
                const rulesContext = {
                    main_admin: userInfo && userInfo?.isMainAdmin,
                    sub_admin: userInfo && !userInfo.isMainAdmin && userInfo.isAdmin,
                    member: true,
                    visitor: false
                };
                return Object.keys(rulesContext).filter((key)=>rulesContext[key]);
            }
        case PlayerRulesConditionType.SIGN_UP_TIME:
            {
                return userInfo?.signUpTime;
            }
        case PlayerRulesConditionType.URL:
            {
                return window.location.href;
            }
        case PlayerRulesConditionType.LABS:
            {
                return state.labs;
            }
        case PlayerRulesConditionType.EDITION:
            {
                return (0,pc_utils_env__WEBPACK_IMPORTED_MODULE_5__/* .getInitializationData */ .HW)().env?.split("-")[0];
            }
        default:
            return str;
    }
};
const getConditionArgsValue = (str)=>{
    const state = pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.getState */ .h.getState();
    switch(str){
        case PlayerRulesConditionArgsType.SHARE_ID:
            {
                return state.pageParams.shareId;
            }
        case PlayerRulesConditionArgsType.TEMPLATE_ID:
            {
                return state.pageParams.templateId;
            }
        case PlayerRulesConditionArgsType.SPACE_ID:
            {
                return state.space.activeId;
            }
        default:
            return str;
    }
};
const isRulePassed = (conditionValue, operator, conditionArgs)=>{
    switch(operator){
        case "IS":
            {
                return Boolean(conditionValue === conditionArgs);
            }
        case "IS_BEFORE":
            {
                return dayjs__WEBPACK_IMPORTED_MODULE_2___default()(conditionValue).isBefore(conditionArgs);
            }
        case "IS_AFTER":
            {
                return dayjs__WEBPACK_IMPORTED_MODULE_2___default()(conditionValue).isAfter(conditionArgs);
            }
        case "GREATER_THAN":
            {
                return Number(conditionValue) > Number(conditionArgs);
            }
        case "GREATER_THAN_OR_EQUAL":
            {
                return Number(conditionValue) >= Number(conditionArgs);
            }
        case "LESS_THAN":
            {
                return Number(conditionValue) < Number(conditionArgs);
            }
        case "LESS_THAN_OR_EQUAL":
            {
                return Number(conditionValue) <= Number(conditionArgs);
            }
        case "EQUAL":
            {
                return Number(conditionValue) === Number(conditionArgs);
            }
        case "ONE_OF_TRUE":
            {
                const conditionArr = eval("(" + conditionArgs + ")");
                return Boolean(conditionArr.find((item)=>conditionValue.includes(item)));
            }
        case "ALL_OF_TRUE":
            {
                const conditionArr = eval("(" + conditionArgs + ")");
                return Boolean(conditionArr.every((item)=>conditionValue.includes(item)));
            }
        case "ALL_OF_FALSE":
            {
                const conditionArr = eval("(" + conditionArgs + ")");
                return Boolean(conditionArr.every((item)=>!conditionValue.includes(item)));
            }
        case "INCLUDES":
            {
                const conditionArgsValue = getConditionArgsValue(conditionArgs);
                return Boolean(String(conditionValue).includes(conditionArgsValue));
            }
        case "EXCLUDES":
            {
                const conditionArgsValue = getConditionArgsValue(conditionArgs);
                return !String(conditionValue).includes(conditionArgsValue);
            }
        default:
            return false;
    }
};
const isRulesPassed = (rulesConfig, ruleIds)=>{
    if (!ruleIds) {
        return true;
    }
    const someIsNotPass = ruleIds.find((ruleId)=>{
        const curRule = rulesConfig?.find((item)=>item.id === ruleId);
        if (!curRule) {
            return true;
        }
        const conditionValue = getConditionValue(curRule.condition);
        return !isRulePassed(conditionValue, curRule.operator, curRule.conditionArgs);
    });
    return !someIsNotPass;
};
// Determine if the current time is within the configured time interval
const isTimeRulePassed = (startTime, endTime)=>{
    if (!startTime && !endTime) {
        return true;
    }
    const cur = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().valueOf();
    const start = startTime ? dayjs__WEBPACK_IMPORTED_MODULE_2___default()(startTime).valueOf() : Number.NEGATIVE_INFINITY;
    const end = endTime ? dayjs__WEBPACK_IMPORTED_MODULE_2___default()(endTime).valueOf() : Number.POSITIVE_INFINITY;
    return cur > start && cur < end;
};
// Determine if eventState matches
const isEventStateMatch = (args, eventStatesConfig)=>{
    if (!eventStatesConfig) {
        return true;
    }
    return (0,lodash__WEBPACK_IMPORTED_MODULE_4__.isMatch)(args, JSON.parse(eventStatesConfig));
};


/***/ }),

/***/ 23039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ getDstNetworkData)
/* harmony export */ });
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99000);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_1__);
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

/**
 * Take the specified datasheet as a starting point and obtain its network of associated reference relations.
 * @param dstId datasheet id
 */ const getDstNetworkData = (dstId)=>{
    const state = pc_store__WEBPACK_IMPORTED_MODULE_0__/* .store.getState */ .h.getState();
    const data = {
        nodes: [],
        edges: []
    };
    const dstIds = new Set();
    const fieldIds = new Set();
    // Table-to-Table Relationships
    const dstLinkIds = new Set();
    let computeRefManager = (0,_apitable_core__WEBPACK_IMPORTED_MODULE_1__.getComputeRefManager)(state);
    if (dstId) {
        computeRefManager = new _apitable_core__WEBPACK_IMPORTED_MODULE_1__.ComputeRefManager();
        const currSnapshot = _apitable_core__WEBPACK_IMPORTED_MODULE_1__.Selectors.getSnapshot(state, dstId);
        const fieldMap = currSnapshot?.meta.fieldMap;
        if (!fieldMap) return data;
        computeRefManager.computeRefMap(fieldMap, dstId, state);
    }
    // Collect all nodes
    computeRefManager.reRefMap.forEach((item, key)=>{
        const [selfDstId] = key.split("-");
        dstIds.add(selfDstId);
        fieldIds.add(key);
        item.forEach((key)=>{
            const [dstId] = key.split("-");
            dstIds.add(dstId);
            fieldIds.add(key);
            if (selfDstId !== dstId) {
                dstLinkIds.add(`${selfDstId}-${dstId}`);
            }
        });
    });
    // Collate all number datasheet nodes
    dstIds.forEach((dstId)=>{
        const datasheet = _apitable_core__WEBPACK_IMPORTED_MODULE_1__.Selectors.getDatasheet(state, dstId);
        if (datasheet) {
            data.nodes.push({
                id: dstId,
                label: `${datasheet.name}(${datasheet.id})`,
                group: "Dst"
            });
        }
    });
    // Collate all field nodes 
    fieldIds.forEach((key)=>{
        const [dstId, fieldId] = key.split("-");
        const field = _apitable_core__WEBPACK_IMPORTED_MODULE_1__.Selectors.getField(state, fieldId, dstId);
        let group = "BaseField";
        switch(field.type){
            case _apitable_core__WEBPACK_IMPORTED_MODULE_1__.FieldType.Link:
                data.edges.push({
                    from: key,
                    to: `${field.property.foreignDatasheetId}-${field.property.brotherFieldId}`,
                    dashes: true
                });
                group = "Link";
                break;
            case _apitable_core__WEBPACK_IMPORTED_MODULE_1__.FieldType.Formula:
                group = "Formula";
                break;
            case _apitable_core__WEBPACK_IMPORTED_MODULE_1__.FieldType.LookUp:
                group = "Lookup";
                break;
            default:
                group = "BaseField";
        }
        data.nodes.push({
            id: key,
            group,
            label: `${field.name}(${field.id})`
        });
    });
    fieldIds.forEach((key)=>{
        const [dstId] = key.split("-");
        data.edges.push({
            from: key,
            to: dstId,
            dashes: true
        });
    });
    dstLinkIds.forEach((key)=>{
        const [a, b] = key.split("-");
        data.edges.push({
            from: a,
            to: b
        });
    });
    // Field dependencies
    computeRefManager.reRefMap.forEach((item, key)=>{
        item.forEach((otherKey)=>{
            data.edges.push({
                from: key,
                to: otherKey
            });
        });
    });
    return data;
};


/***/ }),

/***/ 34629:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ initCronjobs)
/* harmony export */ });
/* harmony import */ var _jobs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67296);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_jobs__WEBPACK_IMPORTED_MODULE_0__]);
_jobs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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
const jobs = [
    [
        _jobs__WEBPACK_IMPORTED_MODULE_0__/* .fixData */ .o,
        300
    ]
];
const initCronjobs = (store)=>{
    jobs.forEach((jobItem)=>{
        const [job, delay] = jobItem;
        setInterval(()=>job(store), delay);
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67296:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ fixData)
/* harmony export */ });
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_utils_load_records__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77264);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23039);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_utils_load_records__WEBPACK_IMPORTED_MODULE_1__]);
pc_utils_load_records__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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
        window.getDstNetworkData = _helper__WEBPACK_IMPORTED_MODULE_2__/* .getDstNetworkData */ .j;
    }
})();
const fixData = ()=>{
    if (_apitable_core__WEBPACK_IMPORTED_MODULE_0__.dataSelfHelper.needHelper) {
        // getCellValue The cell data missing at the time of the dstId-fieldId-recordId[].
        // const _missKeys: string[] = [];
        _apitable_core__WEBPACK_IMPORTED_MODULE_0__.dataSelfHelper.dataMap.forEach((recordIdSet, key)=>{
            const [dstId] = key.split("-");
            try {
                // const missRecordIds = Array.from(recordIdSet);
                // _missKeys.push(...missRecordIds.map(recordId => `${key}-${recordId}`));
                recordIdSet.size > 0 && (0,pc_utils_load_records__WEBPACK_IMPORTED_MODULE_1__/* .loadRecords */ .d)(dstId, Array.from(recordIdSet)).then(()=>{
                // FIXME: See if you still need a refresh here
                // Array.from(recordIdSet).forEach(recordId => {
                //   const signal = `${dstId}-${recordId}-${fieldId}`;
                //   // The situation depends on the calculation cache of this field/cell through the dependency chain, chain trigger op.
                //   recomputeSignalSet.add(signal);
                // });
                // recomputeSignalSet.forEach(signal => {
                //   releaseComputeSignal(signal, state);
                // });
                });
            } catch (error) {}
        });
        _apitable_core__WEBPACK_IMPORTED_MODULE_0__.dataSelfHelper.clear();
    /**
     * FIXME: The problem also occurs with incorrectly formatted cellValue. 
     * Reducing the frequency does not reduce the amount of data being reported. Eliminate error reporting for now.
     * FIXME: Only a few self-tabling associations will have this problem, after the server-side fix. 
     * It should not come in here. If it does come in it needs to be reported as an error.
     * Because this timed task is too frequent. The frequency of reporting tasks needs to be reduced. Store it uniformly first
     */ // 
    }
    return;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ initializer)
/* harmony export */ });
/* unused harmony export redirectIfUserApplyLogout */
/* harmony import */ var _sentry_integrations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11723);
/* harmony import */ var _sentry_integrations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_integrations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_tracing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24842);
/* harmony import */ var _sentry_tracing__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sentry_tracing__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pc_components_common_modal_modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11156);
/* harmony import */ var pc_components_route_manager_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72932);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99000);
/* harmony import */ var pc_utils_env__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85421);
/* harmony import */ var _modules_shared_apphook_hook_bindings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74121);
/* harmony import */ var _cronjob__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34629);
/* harmony import */ var _store_subscribe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45583);
/* harmony import */ var _modules_shared_apitable_lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88230);
/* harmony import */ var enterprise__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14463);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_components_common_modal_modal_modal__WEBPACK_IMPORTED_MODULE_6__, pc_components_route_manager_router__WEBPACK_IMPORTED_MODULE_7__, _modules_shared_apphook_hook_bindings__WEBPACK_IMPORTED_MODULE_10__, _cronjob__WEBPACK_IMPORTED_MODULE_11__, _store_subscribe__WEBPACK_IMPORTED_MODULE_12__]);
([pc_components_common_modal_modal_modal__WEBPACK_IMPORTED_MODULE_6__, pc_components_route_manager_router__WEBPACK_IMPORTED_MODULE_7__, _modules_shared_apphook_hook_bindings__WEBPACK_IMPORTED_MODULE_10__, _cronjob__WEBPACK_IMPORTED_MODULE_11__, _store_subscribe__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
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
 * Initialization functions, used for some non-constructor type things that need to be initialized and executed at startup again
 */ 













// @ts-ignore

if (!process.env.SSR && window !== undefined) {
    window.APITable = _modules_shared_apitable_lib__WEBPACK_IMPORTED_MODULE_13__/* .APITable */ .D;
}
function hasUrlIgnore(curUrl) {
    if (!curUrl) {
        return false;
    }
    if ((0,enterprise__WEBPACK_IMPORTED_MODULE_14__.isSocialUrlIgnored)?.(curUrl)) {
        return true;
    }
    const ignoreData = [
        _apitable_core__WEBPACK_IMPORTED_MODULE_3__.Url.USER_ME,
        _apitable_core__WEBPACK_IMPORTED_MODULE_3__.Url.KEEP_TAB_BAR,
        _apitable_core__WEBPACK_IMPORTED_MODULE_3__.Url.JOIN_VIA_LINK,
        _apitable_core__WEBPACK_IMPORTED_MODULE_3__.Url.LINK_VALID, 
    ];
    for (const url of ignoreData){
        if (curUrl.includes(url) || curUrl.includes("dataPack")) {
            return true;
        }
    }
    return false;
}
function initAxios(store) {
    (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.paramsSerializer) = (params)=>{
        return Object.keys(params).filter((it)=>{
            return params.hasOwnProperty(it);
        }).reduce((pre, curr)=>{
            if (params[curr] === null || typeof params[curr] === "undefined") {
                return pre;
            }
            return (pre ? pre + "&" : "") + curr + "=" + encodeURIComponent(params[curr]);
        }, "");
    };
    axios__WEBPACK_IMPORTED_MODULE_4___default().interceptors.request.use((config)=>{
        redirectIfUserApplyLogout();
        const customHeaders = window.__initialization_data__.headers;
        if (customHeaders && Object.keys(customHeaders).length) {
            for(const k in customHeaders){
                config.headers.common[k] = customHeaders[k];
            }
        }
        return config;
    });
    axios__WEBPACK_IMPORTED_MODULE_4___default().interceptors.response.use((response)=>{
        const { success , code , data , message ="Error" ,  } = response.data;
        const IGNORE_PATH_REG = /^\/(share|template|notify|embed)/;
        if (success && data && response.config.url?.startsWith("/nest/v1/") && !IGNORE_PATH_REG.test(location.pathname)) {
            const state = store.getState();
            const activeSpaceId = _apitable_core__WEBPACK_IMPORTED_MODULE_3__.Selectors.activeSpaceId(state);
            const spaceId = data.datasheet?.spaceId || data.mirror?.spaceId || data.dashboard?.spaceId || data.form?.spaceId;
            if (spaceId && spaceId !== activeSpaceId) {
                (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.headers.common["X-Space-Id"]) = spaceId;
                // @ts-ignore
                store.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.StoreActions.getUserMe({
                    spaceId
                }));
            }
        }
        if (!success && String(code).startsWith("5")) {
            _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.captureMessage(message, {
                extra: {
                    headers: response.headers
                }
            });
        }
        if (success || hasUrlIgnore(response.config.url)) {
            return response;
        }
        switch(code){
            case _apitable_core__WEBPACK_IMPORTED_MODULE_3__.StatusCode.UN_AUTHORIZED:
                {
                    if (window.location.pathname !== "/login") {
                        pc_components_common_modal_modal_modal__WEBPACK_IMPORTED_MODULE_6__.Modal.error({
                            title: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Strings.login_status_expired_title),
                            content: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Strings.login_status_expired_content),
                            okText: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Strings.login_status_expired_button),
                            onOk: ()=>{
                                const IS_EMBED_LINK_REG = /^\/embed/;
                                const reference = !IS_EMBED_LINK_REG.test(location.pathname) ? new URLSearchParams(window.location.search).get("reference")?.toString() : window.location.href;
                                store.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.StoreActions.setUserMe(null));
                                store.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.StoreActions.setIsLogin(false));
                                pc_components_route_manager_router__WEBPACK_IMPORTED_MODULE_7__/* .Router.redirect */ .F.redirect(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Navigation.LOGIN, {
                                    query: {
                                        reference
                                    }
                                });
                            }
                        });
                    }
                    return Promise.reject();
                }
            case _apitable_core__WEBPACK_IMPORTED_MODULE_3__.StatusCode.OPERATION_FREQUENT:
                {
                    pc_components_common_modal_modal_modal__WEBPACK_IMPORTED_MODULE_6__.Modal.error({
                        title: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Strings.get_verification_code_err_title),
                        content: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Strings.get_verification_code_err_content),
                        okText: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Strings.get_verification_code_err_button)
                    });
                    return Promise.reject();
                }
            case _apitable_core__WEBPACK_IMPORTED_MODULE_3__.StatusCode.LOGIN_OUT_NUMBER:
                {
                    pc_components_common_modal_modal_modal__WEBPACK_IMPORTED_MODULE_6__.Modal.error({
                        title: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Strings.login_frequent_operation_reminder_title),
                        content: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Strings.login_frequent_operation_reminder_content),
                        okText: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Strings.login_frequent_operation_reminder_button),
                        onOk: ()=>{
                            pc_components_route_manager_router__WEBPACK_IMPORTED_MODULE_7__/* .Router.redirect */ .F.redirect(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Navigation.LOGIN);
                        }
                    });
                    return Promise.reject();
                }
            case _apitable_core__WEBPACK_IMPORTED_MODULE_3__.StatusCode.NODE_NUMBER_ERR:
                {
                    pc_components_common_modal_modal_modal__WEBPACK_IMPORTED_MODULE_6__.Modal.error({
                        title: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Strings.node_not_exist_title),
                        content: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Strings.node_number_err_content),
                        onOk: ()=>{
                            pc_components_route_manager_router__WEBPACK_IMPORTED_MODULE_7__/* .Router.redirect */ .F.redirect(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Navigation.HOME);
                        }
                    });
                    return Promise.reject();
                }
            case _apitable_core__WEBPACK_IMPORTED_MODULE_3__.StatusCode.NODE_NOT_EXIST:
                {
                    _apitable_core__WEBPACK_IMPORTED_MODULE_3__.Api.keepTabbar({});
                    return Promise.resolve(response);
                }
            case _apitable_core__WEBPACK_IMPORTED_MODULE_3__.StatusCode.NOT_PERMISSION:
                {
                    _apitable_core__WEBPACK_IMPORTED_MODULE_3__.Api.keepTabbar({});
                    return Promise.resolve(response);
                }
            case _apitable_core__WEBPACK_IMPORTED_MODULE_3__.StatusCode.PAYMENT_PLAN:
                {
                    (0,pc_components_common_modal_modal_modal__WEBPACK_IMPORTED_MODULE_6__.BillingModal)();
                    return Promise.reject();
                }
            case _apitable_core__WEBPACK_IMPORTED_MODULE_3__.StatusCode.SPACE_NOT_EXIST:
                {
                    if (window.location.pathname.search("/invite") === -1) {
                        pc_components_common_modal_modal_modal__WEBPACK_IMPORTED_MODULE_6__.Modal.error({
                            title: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Strings.no_access_space_title),
                            content: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Strings.no_access_space_descirption),
                            okText: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Strings.refresh),
                            onOk: ()=>{
                                pc_components_route_manager_router__WEBPACK_IMPORTED_MODULE_7__/* .Router.push */ .F.push(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Navigation.HOME);
                            }
                        });
                    }
                    return Promise.reject();
                }
            case _apitable_core__WEBPACK_IMPORTED_MODULE_3__.StatusCode.FRONT_VERSION_ERROR:
                {
                    window.dispatchEvent(new CustomEvent("newVersionRequired"));
                    return Promise.reject();
                }
            default:
                return Promise.resolve(response);
        }
    });
    if (true) {
        (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.headers.common["X-Front-Version"]) = (0,pc_utils_env__WEBPACK_IMPORTED_MODULE_9__/* .getReleaseVersion */ .bM)();
        const spaceId = (0,pc_utils_env__WEBPACK_IMPORTED_MODULE_9__/* .getSpaceIdFormTemplate */ .XW)();
        if (spaceId) {
            (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.headers.common["X-Space-Id"]) = spaceId;
        }
    }
}
function initBugTracker() {
    const dsn = (0,pc_utils_env__WEBPACK_IMPORTED_MODULE_9__/* .getEnvVariables */ .Sy)().SENTRY_DSN;
    // Reporting is not enabled for local development and private deployments
    if (!dsn) {
        return;
    }
    _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.init({
        enabled: true,
        dsn,
        integrations: [
            new _sentry_tracing__WEBPACK_IMPORTED_MODULE_2__.Integrations.BrowserTracing(),
            new _sentry_integrations__WEBPACK_IMPORTED_MODULE_0__.RewriteFrames()
        ],
        environment: (0,pc_utils_env__WEBPACK_IMPORTED_MODULE_9__/* .getInitializationData */ .HW)().env,
        release: (0,pc_utils_env__WEBPACK_IMPORTED_MODULE_9__/* .getReleaseVersion */ .bM)(),
        normalizeDepth: 5,
        // We recommend adjusting this value in production, or using tracesSampler
        // for finer control
        tracesSampleRate: 0.1,
        maxBreadcrumbs: 10,
        /**  Every time a page is entered, a pageload or a route change is made, a record is automatically sent to the sentry,
     *   which doesn't make much sense at the moment, so turn it off and watch it later.
     */ autoSessionTracking: false,
        ignoreErrors: [
            // It was found that all hovers where tooltip appears send a request to sentry and the exception status is this
            "ResizeObserver loop limit exceeded"
        ]
    });
}
function initDayjs(comlink) {
    let lang = (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.getLanguage)() || "zh-cn";
    lang = lang.toLowerCase().replace("_", "-");
    dayjs__WEBPACK_IMPORTED_MODULE_5___default().locale(lang);
    comlink.proxy?.initHook(lang);
}
function redirectIfUserApplyLogout() {
    const state = pc_store__WEBPACK_IMPORTED_MODULE_8__/* .store.getState */ .h.getState();
    const initData = (0,pc_utils_env__WEBPACK_IMPORTED_MODULE_9__/* .getInitializationData */ .HW)();
    const userInfo = state.user.info || initData.userInfo;
    if (userInfo && userInfo.isPaused) {
        pc_components_route_manager_router__WEBPACK_IMPORTED_MODULE_7__/* .Router.push */ .F.push(_apitable_core__WEBPACK_IMPORTED_MODULE_3__.Navigation.APPLY_LOGOUT);
    }
}
function initializer(comlink) {
    initAxios(comlink.store);
    // Initialisation Field.bindModel
    (0,_apitable_core__WEBPACK_IMPORTED_MODULE_3__.injectStore)(comlink.store);
    (0,_cronjob__WEBPACK_IMPORTED_MODULE_11__/* .initCronjobs */ .F)(comlink.store);
    initDayjs(comlink);
    initBugTracker();
}
// tslint:disable
/**
 * @description
 * @param {*} fn Scroll functions for table areas
 * @param {*} id The dom id to be rolled up for testing
 * @param {*} totalCount Number of calculations, also refers to the total time of test execution
 * @param {*} dps Distance scrolled in every 16s for blocking test
 * @returns
 */ function checkFps(fn, id, totalCount, dps) {
    return new Promise((resolve)=>{
        const element = document.getElementById(id);
        function simulatScroll() {
            return setInterval(()=>{
                dispatchScrollEvent(dps);
            }, 16);
        }
        function dispatchScrollEvent(deltaY) {
            const domRect = element.getBoundingClientRect();
            const evt = new WheelEvent("wheel", {
                deltaX: 0,
                deltaY: deltaY,
                wheelDeltaX: 0,
                wheelDeltaY: deltaY,
                pageX: domRect.left + 100,
                pageY: domRect.top + 100
            });
            fn(evt);
        }
        function showFps(totalCount) {
            window._fpsResult = {
                fps: [],
                averageFps: undefined
            };
            const result = window._fpsResult;
            let frame = 0;
            let count = 0; // Number of frame rate calculation nodes (about one second at a time)
            let time = Date.now();
            let rafId;
            const scrollTmer = simulatScroll();
            function step() {
                frame++;
                rafId = window.requestAnimationFrame(step);
            }
            rafId = window.requestAnimationFrame(step);
            const timer = setInterval(()=>{
                count++;
                const timeEscape = (Date.now() - time) / 1000;
                const fps = frame / timeEscape;
                console.log(fps);
                result.fps.push(fps);
                if (count >= totalCount) {
                    // Remove the first and last seconds
                    result.fps.shift();
                    result.fps.pop();
                    result.averageFps = result.fps.reduce((cur, prev)=>cur + prev) / result.fps.length;
                    console.log(result);
                    window.clearInterval(timer);
                    window.clearInterval(scrollTmer);
                    window.cancelAnimationFrame(rafId);
                    resolve(result);
                    return;
                }
                frame = 0;
                time = Date.now();
            }, 1000);
        }
        // Scroll to the top
        // const sheet = window.spread.getActiveSheet();
        // sheet.showCell(0, 0, 0, 0);
        showFps(totalCount);
    });
}
(()=>{
    if (!process.env.SSR) {
        window.checkFps = checkFps;
    }
})();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69059:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99000);
/* harmony import */ var pc_worker_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64350);
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



let activeCell;
pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.subscribe */ .h.subscribe(function activeCellChange() {
    const preActiveCell = activeCell;
    const state = pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.getState */ .h.getState();
    const { viewId , datasheetId  } = state.pageParams;
    if (!viewId || !datasheetId) return;
    const activeView = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getActiveViewId(state);
    if (!activeView) return;
    activeCell = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getActiveCell(state);
    // Click on the same cell.
    if (preActiveCell && activeCell && preActiveCell.recordId === activeCell.recordId && preActiveCell.fieldId === activeCell.fieldId) {
        return;
    }
    // gridView UI Add a flag to the cache when a record is found to have moved during rendering.
    // When activating a cell horizontally, the presence of a flag is not reported as an active row.
    // gridView UI The activation line change was found in the cache and the cache was deleted.
    if (preActiveCell && activeCell && preActiveCell.recordId === activeCell.recordId) {
        return;
    }
    if (activeCell) {
        const snapshot = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getSnapshot(state, datasheetId);
        const visibleRowsIndexMap = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getVisibleRowsIndexMap(state);
        const { recordId , fieldId  } = activeCell;
        const visibleRowIndex = visibleRowsIndexMap.get(recordId);
        if (visibleRowIndex == null) {
            return;
        }
        const positionInfo = {
            fieldId,
            recordId,
            visibleRowIndex,
            isInit: false
        };
        const recordSnapshot = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getRecordSnapshot(state, datasheetId, recordId);
        if (!recordSnapshot) return;
        const fieldMap = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getFieldMap(state, datasheetId);
        const computeFieldData = {};
        const _recordSnapshot = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(recordSnapshot);
        Object.entries(fieldMap).forEach((item)=>{
            const [fieldId, field] = item;
            // The active row is recorded and the value of the calculated field is stored in recordSnapshot for subsequent pre-sorting comparisons.
            if (_apitable_core__WEBPACK_IMPORTED_MODULE_0__.Field.bindModel(field).isComputed) {
                computeFieldData[fieldId] = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getCellValue(state, snapshot, recordId, fieldId);
            }
        });
        _recordSnapshot.recordMap[recordId].data = {
            ...recordSnapshot.recordMap[recordId].data,
            ...computeFieldData
        };
        (0,pc_worker_store__WEBPACK_IMPORTED_MODULE_3__/* .dispatch */ .W)(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.setActiveRowInfo(datasheetId, {
            type: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.WhyRecordMoveType.UpdateRecord,
            positionInfo,
            recordSnapshot: _recordSnapshot
        }));
    }
});


/***/ }),

/***/ 66668:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99000);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12746);
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


let hide;
let lastStatus;
let timer;
const key = "COMPUTED_STATUS_MESSAGE";
pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.subscribe */ .h.subscribe(function computedStatusChange() {
    const state = pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.getState */ .h.getState();
    const computedStatus = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getComputedStatus(state);
    if (!computedStatus) {
        return;
    }
    const preStatus = lastStatus;
    const hasCalc = Object.values(computedStatus).some((v)=>v);
    lastStatus = hasCalc;
    if (timer && !hasCalc) {
        window.clearTimeout(timer);
    }
    if (hasCalc && !preStatus) {
        timer = setTimeout(()=>{
            hide = antd__WEBPACK_IMPORTED_MODULE_2__/* .message.loading */ .yw.loading({
                content: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_0__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.Strings.data_calculating),
                duration: 0,
                key
            });
            timer = null;
        }, 2000);
    } else if (hide && !hasCalc) {
        hide();
        hide = undefined;
    }
});


/***/ }),

/***/ 22769:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99000);
/* harmony import */ var enterprise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14463);
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
// @ts-ignore

pc_store__WEBPACK_IMPORTED_MODULE_0__/* .store.subscribe */ .h.subscribe(enterprise__WEBPACK_IMPORTED_MODULE_1__.currentStepInHook || (()=>{}));


/***/ }),

/***/ 36128:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99000);
/* harmony import */ var enterprise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14463);
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
// @ts-ignore

pc_store__WEBPACK_IMPORTED_MODULE_0__/* .store.subscribe */ .h.subscribe(enterprise__WEBPACK_IMPORTED_MODULE_1__.currentGuideWizardIdInHook || (()=>{}));


/***/ }),

/***/ 16915:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50912);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_resource_service__WEBPACK_IMPORTED_MODULE_1__]);
pc_resource_service__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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


let paramsDashboardId;
pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.subscribe */ .h.subscribe(()=>{
    const state = pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.getState */ .h.getState();
    const spaceId = state.space.activeId || state.share.spaceId || state.embedInfo?.spaceId;
    if (!spaceId && !state.pageParams.shareId && !state.pageParams.templateId && !state.pageParams.embedId) {
        return;
    }
    if (state.pageParams.embedId && (!spaceId || !pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance */ .Zc.instance?.initialized)) {
        return;
    }
    const previousParamsDashboardId = paramsDashboardId;
    paramsDashboardId = state.pageParams.dashboardId;
    if (paramsDashboardId === previousParamsDashboardId) {
        return;
    }
    if (!paramsDashboardId) {
        return;
    }
    if (!paramsDashboardId && previousParamsDashboardId) {
        // TODO: Destroy Dashboard
        return;
    }
    const widgetMapKey = Object.keys(state.widgetMap);
    if (widgetMapKey.length) {
        pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.dispatch */ .h.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.resetWidget(widgetMapKey));
    }
    pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance */ .Zc.instance?.initialized && pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance */ .Zc.instance?.switchResource({
        from: previousParamsDashboardId,
        to: paramsDashboardId,
        resourceType: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Dashboard
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95303:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75318);
/* harmony import */ var _apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50912);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_resource_service__WEBPACK_IMPORTED_MODULE_3__]);
pc_resource_service__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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




let dashboardIds = new Set();
pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store.subscribe */ .h.subscribe(()=>{
    const state = pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store.getState */ .h.getState();
    const dashboardMap = state.dashboardMap;
    if (!dashboardMap || !pc_resource_service__WEBPACK_IMPORTED_MODULE_3__/* .resourceService.instance */ .Zc.instance?.checkRoomExist()) {
        return;
    }
    const previousDashboardIds = dashboardIds;
    dashboardIds = new Set(Object.keys(dashboardMap).filter((item)=>Boolean(dashboardMap[item].dashboard)));
    if ((0,_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__.eqSet)(dashboardIds, previousDashboardIds)) {
        return;
    }
    const diffOfAdd = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.difference)([
        ...dashboardIds
    ], [
        ...previousDashboardIds
    ]);
    // If you want to delete a dashboard's data structure later, you can use the following variable judgement
    // const diffOfDelete = difference([...previousDashboardId], [...dashboardIds]);
    if (diffOfAdd.length) {
        for (const v of diffOfAdd){
            pc_resource_service__WEBPACK_IMPORTED_MODULE_3__/* .resourceService.instance.createCollaEngine */ .Zc.instance.createCollaEngine(v, _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Dashboard);
        }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41536:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50912);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99000);
/* harmony import */ var pc_utils_storage_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21863);
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11498);
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_database_expand_record_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55336);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_resource_service__WEBPACK_IMPORTED_MODULE_1__, _modules_database_expand_record_manager__WEBPACK_IMPORTED_MODULE_5__]);
([pc_resource_service__WEBPACK_IMPORTED_MODULE_1__, _modules_database_expand_record_manager__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
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





let datasheetId;
pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.subscribe */ .h.subscribe(function datasheetIdChange() {
    const state = pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.getState */ .h.getState();
    const spaceId = state.space.activeId || state.share.spaceId || state.embedInfo.spaceId;
    const { shareId , templateId , embedId  } = state.pageParams;
    if (!spaceId && !shareId && !templateId && !embedId) {
        return;
    }
    if (shareId && (!spaceId || !pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance */ .Zc.instance?.initialized)) {
        return;
    }
    if (embedId && (!spaceId || !pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance */ .Zc.instance?.initialized || !state.embedInfo?.spaceId)) {
        return;
    }
    if (state.pageParams.mirrorId) {
        // From the datasheet into the mirror, the datasheetId is present in the url, so the data is still stored here.
        // When a route jumps through the session table, it will not be triggered watchRoom
        datasheetId = undefined;
        return;
    }
    const previousDatasheetId = datasheetId;
    datasheetId = state.pageParams.datasheetId;
    if (!datasheetId || previousDatasheetId === datasheetId) {
        return;
    }
    _modules_database_expand_record_manager__WEBPACK_IMPORTED_MODULE_5__/* .expandRecordManager.destroy */ .M.destroy();
    const widgetPanelStatusMap = (0,pc_utils_storage_storage__WEBPACK_IMPORTED_MODULE_3__/* .getStorage */ .cF)(pc_utils_storage_storage__WEBPACK_IMPORTED_MODULE_3__/* .StorageName.WidgetPanelStatusMap */ .mL.WidgetPanelStatusMap);
    if (widgetPanelStatusMap) {
        const widgetPanelStatus = widgetPanelStatusMap[`${spaceId},${datasheetId}`];
        if (widgetPanelStatus) {
            pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.dispatch */ .h.dispatch((0,redux_batched_actions__WEBPACK_IMPORTED_MODULE_4__.batchActions)([
                _apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.toggleWidgetPanel(datasheetId, _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Datasheet, widgetPanelStatus.opening),
                _apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.changeWidgetPanelWidth(widgetPanelStatus.width, datasheetId, _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Datasheet),
                _apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.switchActivePanel(widgetPanelStatus.activePanelId, datasheetId, _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Datasheet), 
            ]));
        }
    }
    const widgetMapKey = Object.keys(state.widgetMap);
    if (widgetMapKey.length) {
        pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.dispatch */ .h.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.resetWidget(widgetMapKey));
    }
    setTimeout(()=>{
        pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance */ .Zc.instance?.initialized && pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance */ .Zc.instance?.switchResource({
            from: previousDatasheetId,
            to: datasheetId,
            resourceType: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Datasheet
        });
    }, 200);
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75167:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75318);
/* harmony import */ var _apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50912);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_resource_service__WEBPACK_IMPORTED_MODULE_1__]);
pc_resource_service__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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


(0,_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_0__.subscribeDatasheetMap)(pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h, pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService */ .Zc);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12212:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50912);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99000);
/* harmony import */ var _modules_space_member_stash_member_stash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85251);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_resource_service__WEBPACK_IMPORTED_MODULE_1__, _modules_space_member_stash_member_stash__WEBPACK_IMPORTED_MODULE_3__]);
([pc_resource_service__WEBPACK_IMPORTED_MODULE_1__, _modules_space_member_stash_member_stash__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
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



let embedId;
pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.subscribe */ .h.subscribe(function embedIdChange() {
    const previousEmbedId = embedId;
    const state = pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.getState */ .h.getState();
    embedId = state.pageParams.embedId;
    if (!embedId || previousEmbedId === embedId) {
        return;
    }
    console.log("init embedId: ", embedId);
    _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Api.getEmbedLinkInfo(embedId).then((res)=>{
        const { success , data  } = res.data;
        if (success) {
            // dispatch(StoreActions.setLoading(false));
            const { embedInfo , spaceId  } = data;
            const { payload: embedSetting ,  } = embedInfo;
            pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.dispatch */ .h.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.setEmbedInfo({
                ...embedSetting,
                spaceId
            }));
        } else {
            pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance.destroy */ .Zc.instance.destroy();
        }
    });
    pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance.destroy */ .Zc.instance.destroy();
    pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance.init */ .Zc.instance.init();
    _modules_space_member_stash_member_stash__WEBPACK_IMPORTED_MODULE_3__/* .memberStash.loadMemberList */ .w.loadMemberList(embedId);
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40067:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_components_expand_record__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16496);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_components_expand_record__WEBPACK_IMPORTED_MODULE_1__]);
pc_components_expand_record__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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


let preRecordId;
pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.subscribe */ .h.subscribe(function routeRecordChange() {
    const state = pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.getState */ .h.getState();
    const isLogin = state.user.isLogin;
    const { viewId , recordId , shareId , embedId  } = state.pageParams;
    // Share page to expand cards even if you are not logged in
    if (!isLogin && !shareId && !embedId) {
        return;
    }
    const isSideRecordOpen = state.space.isSideRecordOpen;
    if (!recordId) {
        preRecordId && (0,pc_components_expand_record__WEBPACK_IMPORTED_MODULE_1__/* .clearExpandModal */ .fl)();
        preRecordId = null;
        if (isSideRecordOpen) {
            pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.dispatch */ .h.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.toggleSideRecord(false)); // Close the side record card when the recordId does not exist for the route
        }
        return;
    }
    // Compatible with cases where there is no viewId but there is a recordId
    if (!viewId || preRecordId === recordId) {
        return;
    }
    preRecordId = recordId;
    if (!isSideRecordOpen && state.recordVision === _apitable_core__WEBPACK_IMPORTED_MODULE_0__.RecordVision.Side) {
        pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.dispatch */ .h.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.toggleSideRecord(true));
    }
    (0,pc_components_expand_record__WEBPACK_IMPORTED_MODULE_1__/* .expandRecordRoute */ .h1)({
        preventOpenNewModal: true
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82106:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50912);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_resource_service__WEBPACK_IMPORTED_MODULE_1__]);
pc_resource_service__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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


let formId;
pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.subscribe */ .h.subscribe(function formIdChange() {
    const state = pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.getState */ .h.getState();
    const spaceId = state.space.activeId || state.share.spaceId;
    const { shareId , templateId  } = state.pageParams;
    if (!spaceId && !shareId && !templateId) {
        return;
    }
    if (shareId && (!spaceId || !pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance */ .Zc.instance?.initialized)) {
        return;
    }
    const prevFormId = formId;
    formId = state.pageParams.formId;
    if (!formId || prevFormId === formId) {
        return;
    }
    pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance */ .Zc.instance?.initialized && pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance */ .Zc.instance?.switchResource({
        from: prevFormId,
        to: formId,
        resourceType: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Form
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70554:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75318);
/* harmony import */ var _apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50912);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_resource_service__WEBPACK_IMPORTED_MODULE_3__]);
pc_resource_service__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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




let formIds = new Set();
pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store.subscribe */ .h.subscribe(()=>{
    const state = pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store.getState */ .h.getState();
    const formMap = state.formMap;
    if (!formMap || !pc_resource_service__WEBPACK_IMPORTED_MODULE_3__/* .resourceService.instance */ .Zc.instance?.checkRoomExist()) {
        return;
    }
    const previousFormIds = formIds;
    formIds = new Set(Object.keys(formMap).filter((item)=>Boolean(formMap[item].form)));
    if ((0,_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__.eqSet)(previousFormIds, formIds)) {
        return;
    }
    const diffOfAdd = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.difference)([
        ...formIds
    ], [
        ...previousFormIds
    ]);
    if (diffOfAdd.length) {
        for (const v of diffOfAdd){
            pc_resource_service__WEBPACK_IMPORTED_MODULE_3__/* .resourceService.instance.createCollaEngine */ .Zc.instance.createCollaEngine(v, _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Form);
        }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45583:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _space_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63142);
/* harmony import */ var _share_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70406);
/* harmony import */ var _embed_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12212);
/* harmony import */ var _template_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89116);
/* harmony import */ var _dashboard_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16915);
/* harmony import */ var _datasheet_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41536);
/* harmony import */ var _form_id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82106);
/* harmony import */ var _user_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32940);
/* harmony import */ var _keep_id__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61126);
/* harmony import */ var _view_id__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7783);
/* harmony import */ var _current_guide_step__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22769);
/* harmony import */ var _active_cell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69059);
/* harmony import */ var _current_guide_wizard_id__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36128);
/* harmony import */ var _widget_map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39945);
/* harmony import */ var _dashboard_map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95303);
/* harmony import */ var _datasheet_map__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(75167);
/* harmony import */ var _computed_status__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(66668);
/* harmony import */ var _mirror_id__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(92512);
/* harmony import */ var _mirror_map__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(33050);
/* harmony import */ var _form_map__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(70554);
/* harmony import */ var _expand_record_id__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(40067);
/* harmony import */ var _space_domain__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(83219);
/* harmony import */ var _temporary_view__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(95048);
/* harmony import */ var _theme_name__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(96701);
/* harmony import */ var _is_side_record_open__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(34578);
/* harmony import */ var _node_id__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(1045);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_space_id__WEBPACK_IMPORTED_MODULE_0__, _share_id__WEBPACK_IMPORTED_MODULE_1__, _embed_id__WEBPACK_IMPORTED_MODULE_2__, _template_id__WEBPACK_IMPORTED_MODULE_3__, _dashboard_id__WEBPACK_IMPORTED_MODULE_4__, _datasheet_id__WEBPACK_IMPORTED_MODULE_5__, _form_id__WEBPACK_IMPORTED_MODULE_6__, _user_info__WEBPACK_IMPORTED_MODULE_7__, _view_id__WEBPACK_IMPORTED_MODULE_9__, _widget_map__WEBPACK_IMPORTED_MODULE_13__, _dashboard_map__WEBPACK_IMPORTED_MODULE_14__, _datasheet_map__WEBPACK_IMPORTED_MODULE_15__, _mirror_id__WEBPACK_IMPORTED_MODULE_17__, _mirror_map__WEBPACK_IMPORTED_MODULE_18__, _form_map__WEBPACK_IMPORTED_MODULE_19__, _expand_record_id__WEBPACK_IMPORTED_MODULE_20__, _node_id__WEBPACK_IMPORTED_MODULE_25__]);
([_space_id__WEBPACK_IMPORTED_MODULE_0__, _share_id__WEBPACK_IMPORTED_MODULE_1__, _embed_id__WEBPACK_IMPORTED_MODULE_2__, _template_id__WEBPACK_IMPORTED_MODULE_3__, _dashboard_id__WEBPACK_IMPORTED_MODULE_4__, _datasheet_id__WEBPACK_IMPORTED_MODULE_5__, _form_id__WEBPACK_IMPORTED_MODULE_6__, _user_info__WEBPACK_IMPORTED_MODULE_7__, _view_id__WEBPACK_IMPORTED_MODULE_9__, _widget_map__WEBPACK_IMPORTED_MODULE_13__, _dashboard_map__WEBPACK_IMPORTED_MODULE_14__, _datasheet_map__WEBPACK_IMPORTED_MODULE_15__, _mirror_id__WEBPACK_IMPORTED_MODULE_17__, _mirror_map__WEBPACK_IMPORTED_MODULE_18__, _form_map__WEBPACK_IMPORTED_MODULE_19__, _expand_record_id__WEBPACK_IMPORTED_MODULE_20__, _node_id__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
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













// export * from './resource_id';





// export const initSubscribe = (store: Store<any>) => {
//   datasheetMapSubscribe(store);
// };








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34578:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99000);
/* harmony import */ var pc_utils_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42976);
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


let preIsSideRecordOpen = false;
pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.subscribe */ .h.subscribe(()=>{
    const state = pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.getState */ .h.getState();
    const isSideRecordOpen = state.space.isSideRecordOpen;
    //  Opened the side record card
    if (isSideRecordOpen && !preIsSideRecordOpen) {
        // Determine if the left-hand directory tree should be closed
        const sideBarVisible = state.space.sideBarVisible;
        if (sideBarVisible && (0,pc_utils_storage__WEBPACK_IMPORTED_MODULE_2__/* .getStorage */ .cF)(pc_utils_storage__WEBPACK_IMPORTED_MODULE_2__/* .StorageName.RecordVision */ .mL.RecordVision) == _apitable_core__WEBPACK_IMPORTED_MODULE_0__.RecordVision.Side && window.innerWidth < 1920) {
            (0,pc_utils_storage__WEBPACK_IMPORTED_MODULE_2__/* .setStorage */ .po)(pc_utils_storage__WEBPACK_IMPORTED_MODULE_2__/* .StorageName.IsPanelClosed */ .mL.IsPanelClosed, false, pc_utils_storage__WEBPACK_IMPORTED_MODULE_2__/* .StorageMethod.Set */ .yK.Set);
            pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.dispatch */ .h.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.setSideBarVisible(false));
        }
    }
    preIsSideRecordOpen = isSideRecordOpen;
});


/***/ }),

/***/ 61126:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99000);
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

let folderId;
let viewId;
let dashboardId;
let mirrorId;
pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.subscribe */ .h.subscribe(function folderIdChange() {
    const previousFolderId = folderId;
    const previousViewId = viewId;
    const previousDashboard = dashboardId;
    const previousMirrorId = mirrorId;
    const state = pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.getState */ .h.getState();
    // The userInfo is not updated until it is loaded.
    if (!state.user.info) {
        return;
    }
    const datasheetId = state.pageParams.datasheetId;
    const templateId = state.pageParams.templateId;
    const shareId = state.pageParams.shareId;
    folderId = state.pageParams.folderId;
    viewId = state.pageParams.viewId;
    mirrorId = state.pageParams.mirrorId;
    dashboardId = state.pageParams.dashboardId;
    if (folderId && previousFolderId !== folderId && !templateId && !shareId) {
        _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Api.keepTabbar({
            nodeId: folderId
        });
        pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.dispatch */ .h.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.updateUserInfo({
            activeNodeId: folderId
        }));
        return;
    }
    if (dashboardId && dashboardId !== previousDashboard && !templateId && !shareId) {
        _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Api.keepTabbar({
            nodeId: dashboardId
        });
        pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.dispatch */ .h.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.updateUserInfo({
            activeNodeId: dashboardId
        }));
        return;
    }
    if (mirrorId && mirrorId !== previousMirrorId && !templateId && !shareId) {
        _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Api.keepTabbar({
            nodeId: mirrorId
        });
        pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.dispatch */ .h.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.updateUserInfo({
            activeNodeId: mirrorId
        }));
        return;
    }
    if (viewId && viewId !== previousViewId && !templateId && !shareId && !mirrorId) {
        _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Api.keepTabbar({
            nodeId: datasheetId,
            viewId
        });
        pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.dispatch */ .h.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.updateUserInfo({
            activeNodeId: datasheetId,
            activeViewId: viewId
        }));
        return;
    }
});


/***/ }),

/***/ 92512:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50912);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99000);
/* harmony import */ var pc_utils_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42976);
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11498);
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_database_expand_record_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55336);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_resource_service__WEBPACK_IMPORTED_MODULE_1__, _modules_database_expand_record_manager__WEBPACK_IMPORTED_MODULE_5__]);
([pc_resource_service__WEBPACK_IMPORTED_MODULE_1__, _modules_database_expand_record_manager__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
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





let mirrorId;
pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.subscribe */ .h.subscribe(function datasheetIdChange() {
    const state = pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.getState */ .h.getState();
    const spaceId = state.space.activeId || state.share.spaceId;
    const { shareId , templateId  } = state.pageParams;
    if (!spaceId && !shareId && !templateId) {
        return;
    }
    if (shareId && (!spaceId || !pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance */ .Zc.instance?.initialized)) {
        return;
    }
    const previousMirrorId = mirrorId;
    mirrorId = state.pageParams.mirrorId;
    if (!mirrorId || previousMirrorId === mirrorId) {
        return;
    }
    const widgetPanelStatusMap = (0,pc_utils_storage__WEBPACK_IMPORTED_MODULE_3__/* .getStorage */ .cF)(pc_utils_storage__WEBPACK_IMPORTED_MODULE_3__/* .StorageName.WidgetPanelStatusMap */ .mL.WidgetPanelStatusMap);
    if (widgetPanelStatusMap) {
        const widgetPanelStatus = widgetPanelStatusMap[`${spaceId},${mirrorId}`];
        if (widgetPanelStatus) {
            pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.dispatch */ .h.dispatch((0,redux_batched_actions__WEBPACK_IMPORTED_MODULE_4__.batchActions)([
                _apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.toggleWidgetPanel(mirrorId, _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Mirror, widgetPanelStatus.opening),
                _apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.changeWidgetPanelWidth(widgetPanelStatus.width, mirrorId, _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Mirror),
                _apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.switchActivePanel(widgetPanelStatus.activePanelId, mirrorId, _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Mirror), 
            ]));
        }
    }
    _modules_database_expand_record_manager__WEBPACK_IMPORTED_MODULE_5__/* .expandRecordManager.destroy */ .M.destroy();
    pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance */ .Zc.instance?.initialized && pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance.switchResource */ .Zc.instance.switchResource({
        from: previousMirrorId,
        to: mirrorId,
        resourceType: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Mirror
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33050:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75318);
/* harmony import */ var _apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50912);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_resource_service__WEBPACK_IMPORTED_MODULE_3__]);
pc_resource_service__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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




let mirrorIds = new Set();
pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store.subscribe */ .h.subscribe(()=>{
    const state = pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store.getState */ .h.getState();
    const mirrorMap = state.mirrorMap;
    if (!mirrorMap || !pc_resource_service__WEBPACK_IMPORTED_MODULE_3__/* .resourceService.instance */ .Zc.instance?.checkRoomExist()) {
        return;
    }
    const previousMirrorIds = mirrorIds;
    mirrorIds = new Set(Object.keys(mirrorMap).filter((item)=>Boolean(mirrorMap[item].mirror)));
    if ((0,_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_1__.eqSet)(mirrorIds, previousMirrorIds)) {
        return;
    }
    const diffOfAdd = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.difference)([
        ...mirrorIds
    ], [
        ...previousMirrorIds
    ]);
    if (diffOfAdd.length) {
        for (const v of diffOfAdd){
            pc_resource_service__WEBPACK_IMPORTED_MODULE_3__/* .resourceService.instance.createCollaEngine */ .Zc.instance.createCollaEngine(v, _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Mirror);
        }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1045:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99000);
/* harmony import */ var pc_notification_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8386);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_notification_store__WEBPACK_IMPORTED_MODULE_1__]);
pc_notification_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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

let preNodeId;
pc_store__WEBPACK_IMPORTED_MODULE_0__/* .store.subscribe */ .h.subscribe(function nodeIdChange() {
    const state = pc_store__WEBPACK_IMPORTED_MODULE_0__/* .store.getState */ .h.getState();
    const { nodeId  } = state.pageParams;
    if (!nodeId || preNodeId === nodeId) {
        return;
    }
    preNodeId = nodeId;
    // send recently browsed node message
    pc_notification_store__WEBPACK_IMPORTED_MODULE_1__/* .NotificationStore.recentlyBrowsedNode */ .X.recentlyBrowsedNode(nodeId);
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70406:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50912);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99000);
/* harmony import */ var _modules_space_member_stash_member_stash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85251);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_resource_service__WEBPACK_IMPORTED_MODULE_1__, _modules_space_member_stash_member_stash__WEBPACK_IMPORTED_MODULE_3__]);
([pc_resource_service__WEBPACK_IMPORTED_MODULE_1__, _modules_space_member_stash_member_stash__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
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



let shareId;
pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.subscribe */ .h.subscribe(function shareIdChange() {
    const previousShareId = shareId;
    const state = pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.getState */ .h.getState();
    shareId = state.pageParams.shareId;
    if (!shareId || previousShareId === shareId) {
        return;
    }
    console.log("init shareId: ", shareId);
    _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Api.readShareInfo(shareId).then((res)=>{
        const { success , data  } = res.data;
        if (success) {
            pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.dispatch */ .h.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.setShareInfo({
                spaceId: data.spaceId
            }));
        }
        pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance.destroy */ .Zc.instance.destroy();
        pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance.init */ .Zc.instance.init();
    });
    _modules_space_member_stash_member_stash__WEBPACK_IMPORTED_MODULE_3__/* .memberStash.loadMemberList */ .w.loadMemberList(shareId);
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83219:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99000);
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
pc_store__WEBPACK_IMPORTED_MODULE_0__/* .store.subscribe */ .h.subscribe(function spaceIdChange() {
    const state = pc_store__WEBPACK_IMPORTED_MODULE_0__/* .store.getState */ .h.getState();
    const spaceDomain = state.user.info?.spaceDomain;
    // A little local debugging compatibility
    if ( true && spaceDomain && spaceDomain !== window.location.host) {
        window.location.host = spaceDomain;
    }
});


/***/ }),

/***/ 63142:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50912);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99000);
/* harmony import */ var _modules_space_member_stash_member_stash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85251);
/* harmony import */ var enterprise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14463);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_resource_service__WEBPACK_IMPORTED_MODULE_1__, _modules_space_member_stash_member_stash__WEBPACK_IMPORTED_MODULE_3__]);
([pc_resource_service__WEBPACK_IMPORTED_MODULE_1__, _modules_space_member_stash_member_stash__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
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



// @ts-ignore

let spaceId;
pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.subscribe */ .h.subscribe(function spaceIdChange() {
    const state = pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.getState */ .h.getState();
    const previousSpaceId = spaceId;
    spaceId = state.space.activeId;
    const shareId = state.pageParams.shareId;
    const embedId = state.pageParams.embedId;
    if (!spaceId || previousSpaceId === spaceId || shareId || embedId) {
        return;
    }
    // notify.reset(); // Toggle the space and reset the dom element positioned by toast
    console.log("init resourceService: ", spaceId);
    _apitable_core__WEBPACK_IMPORTED_MODULE_0__.CacheManager.clear();
    pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance */ .Zc.instance?.destroy();
    pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance */ .Zc.instance?.init();
    _modules_space_member_stash_member_stash__WEBPACK_IMPORTED_MODULE_3__/* .memberStash.loadMemberList */ .w.loadMemberList(spaceId);
    pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store.dispatch */ .h.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.resetUnitInfo());
    // Request subscription information
    (0,enterprise__WEBPACK_IMPORTED_MODULE_4__.updateSubscription)?.(spaceId);
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89116:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99000);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_resource_service__WEBPACK_IMPORTED_MODULE_1__]);
pc_resource_service__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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

let lastTemplateId;
pc_store__WEBPACK_IMPORTED_MODULE_0__/* .store.subscribe */ .h.subscribe(function TemplateChange() {
    const previousTemplateId = lastTemplateId;
    const state = pc_store__WEBPACK_IMPORTED_MODULE_0__/* .store.getState */ .h.getState();
    const { templateId  } = state.pageParams;
    lastTemplateId = templateId;
    if (!lastTemplateId && !previousTemplateId || previousTemplateId === lastTemplateId) {
        return;
    }
    console.log("init resourceService.instance!: ", templateId);
    pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService.instance.init */ .Zc.instance.init();
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95048:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99000);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
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


let mirrorId;
let fieldMap;
pc_store__WEBPACK_IMPORTED_MODULE_0__/* .store.subscribe */ .h.subscribe(function TemplateChange() {
    const state = pc_store__WEBPACK_IMPORTED_MODULE_0__/* .store.getState */ .h.getState();
    const pageParams = state.pageParams;
    if (!pageParams.mirrorId) {
        // store The user does not have to care about changes to the cached data if they are not in the mirror
        return;
    }
    const previousMirrorId = mirrorId;
    mirrorId = pageParams.mirrorId;
    const mirror = _apitable_core__WEBPACK_IMPORTED_MODULE_1__.Selectors.getMirror(state, mirrorId);
    if (!previousMirrorId && mirrorId || previousMirrorId && mirrorId && previousMirrorId !== mirrorId) {
        return;
    }
    if (previousMirrorId && mirrorId && previousMirrorId === mirrorId) {
        if (!mirror || !mirror.temporaryView) {
            // No mirror means it's the first time you've entered the mirror, so keep the mirror and the original view in sync.
            // The logic is the same without the temporaryView
            return;
        }
        const previousFieldMap = fieldMap;
        fieldMap = _apitable_core__WEBPACK_IMPORTED_MODULE_1__.Selectors.getFieldMap(state, mirror.sourceInfo.datasheetId);
        if (!previousFieldMap) {
            return;
        }
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(Object.keys(previousFieldMap), Object.keys(fieldMap))) {
            return;
        }
        fillColumns(fieldMap, mirror.temporaryView.columns, mirrorId);
    }
});
function fillColumns(fieldMap, columns, mirrorId) {
    const fieldMapKeys = Object.keys(fieldMap);
    const columnsIds = columns.map((column)=>{
        return column.fieldId;
    });
    const deleteIds = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.difference)(columnsIds, fieldMapKeys);
    const insertIds = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.difference)(fieldMapKeys, columnsIds);
    let _columns = [
        ...columns
    ];
    if (deleteIds.length) {
        // Filtering deleted columns
        _columns = _columns.filter((column)=>{
            return !deleteIds.includes(column.fieldId);
        });
    }
    if (insertIds.length) {
        // New column
        insertIds.map((id)=>{
            _columns.push({
                fieldId: id
            });
        });
    }
    pc_store__WEBPACK_IMPORTED_MODULE_0__/* .store.dispatch */ .h.dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.StoreActions.cacheTemporaryView({
        columns: _columns
    }, mirrorId));
}


/***/ }),

/***/ 96701:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99000);
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
let preTheme;
pc_store__WEBPACK_IMPORTED_MODULE_0__/* .store.subscribe */ .h.subscribe(()=>{
    const state = pc_store__WEBPACK_IMPORTED_MODULE_0__/* .store.getState */ .h.getState();
    const theme = state.theme;
    if (theme !== preTheme) {
        preTheme = theme;
        const iframeList = Array.from(document.getElementsByTagName("iframe"));
        iframeList.forEach((v)=>{
            v.contentWindow?.postMessage({
                type: "apitable_theme",
                apitable_theme: theme
            }, "*");
        });
    }
});


/***/ }),

/***/ 32940:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99000);
/* harmony import */ var pc_notification_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8386);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_notification_store__WEBPACK_IMPORTED_MODULE_2__]);
pc_notification_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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


let userInfo;
// Synchronize redux user information to __initialization_data__.userInfo
function updateWindowUserInfo(userInfo) {
    if (!window.__initialization_data__) window.__initialization_data__ = {};
    if (!window.__initialization_data__.userInfo) {
        window.__initialization_data__.userInfo = userInfo;
    }
}
pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.subscribe */ .h.subscribe(function userInfoChange() {
    const previousUserInfo = userInfo;
    const state = pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.getState */ .h.getState();
    userInfo = state.user.info;
    if (!userInfo) {
        return;
    }
    if (!previousUserInfo || previousUserInfo.uuid !== userInfo.uuid) {
        updateWindowUserInfo(userInfo);
        _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Player.doTrigger(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.Events.app_set_user_id, userInfo);
        pc_notification_store__WEBPACK_IMPORTED_MODULE_2__/* .NotificationStore.init */ .X.init(userInfo.uuid, userInfo.spaceId);
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7783:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99000);
/* harmony import */ var pc_worker_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64350);
/* harmony import */ var pc_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22829);
/* harmony import */ var pc_utils_storage_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21863);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_hooks__WEBPACK_IMPORTED_MODULE_3__]);
pc_hooks__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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




let viewId;
let datasheetActiveViewId;
let mirrorId;
const restoreGroupExpanding = ()=>{
    // Recovering grouped expanded information in localStorage
    const datasheetId = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getActiveDatasheetId(pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.getState */ .h.getState());
    const storageGroupCollapse = (0,pc_utils_storage_storage__WEBPACK_IMPORTED_MODULE_4__/* .getStorage */ .cF)(pc_utils_storage_storage__WEBPACK_IMPORTED_MODULE_4__/* .StorageName.GroupCollapse */ .mL.GroupCollapse);
    const key = `${datasheetId},${viewId}`;
    if (!storageGroupCollapse || !storageGroupCollapse[key] || !Array.isArray(storageGroupCollapse[key])) {
        return;
    }
    (0,pc_worker_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .W)(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.setGroupingCollapse(datasheetId, storageGroupCollapse[key]));
};
pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.subscribe */ .h.subscribe(()=>{
    const state = pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.getState */ .h.getState();
    const snapshot = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getSnapshot(state);
    const previousViewId = viewId;
    const previousMirrorId = mirrorId;
    const previousDatasheetActiveViewId = datasheetActiveViewId;
    viewId = state.pageParams.viewId;
    mirrorId = state.pageParams.mirrorId;
    datasheetActiveViewId = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getActiveViewId(state);
    // Wait until the datasheet is loaded before starting the later checks
    if (!snapshot || !datasheetActiveViewId) {
        return;
    }
    const datasheetId = state.pageParams.datasheetId;
    const spaceId = state.space.activeId;
    const uniqueId = `${spaceId},${datasheetId}`;
    if (viewId && previousViewId !== viewId) {
        /**
     * Because the conditional judgement above already filters out most changes, 
     * the necessary traversal comparisons are only made when the view changes 
     * */ if (snapshot.meta.views.find((view)=>view.id === viewId)) {
            (0,pc_worker_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .W)(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.switchView(datasheetId, viewId));
            (0,pc_utils_storage_storage__WEBPACK_IMPORTED_MODULE_4__/* .setStorage */ .po)(pc_utils_storage_storage__WEBPACK_IMPORTED_MODULE_4__/* .StorageName.DatasheetView */ .mL.DatasheetView, {
                [uniqueId]: viewId
            });
        } else {
            if (mirrorId) {
                return;
            }
            // If the viewId does not exist in the datasheet, the URL needs to be corrected.
            (0,pc_hooks__WEBPACK_IMPORTED_MODULE_3__/* .changeView */ .Sv)(snapshot.meta.views[0].id);
        }
        restoreGroupExpanding();
        (0,pc_worker_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .W)(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.setDatasheetComputed({}, datasheetId));
        _apitable_core__WEBPACK_IMPORTED_MODULE_0__.compensator.clearAll();
    }
    /**
   * Purpose: If there is no viewId, then jump to the currently active view, i.e. the first view
   * 1. when viewId == null, although the intention is to jump to a particular view, 
   * the redux will be triggered frequently during the jump, resulting in multiple calls to changeView.
   * In the context of the above, the previousDatasheetActiveViewId ! == datasheetActiveViewId to reduce the number of changeView calls
   * 2. The reason is that the mirror and the original table share a copy of the data, 
   * and when jumping from the mirror to the original table, the previousDatasheetActiveViewId must be equal to
   * datasheetActiveViewId。So a new previousMirrorId && !mirrorId is added to determine 
   * if the current route is leaving from a mirror when the previous condition is false
   * (PS: In addition to the above idea, there is another way to update the data in the pageParams immediately, 
   * the reason for this problem is that the routing changes do not update the pageParams immediately, 
   * so as long as the pageParams are updated in time, this problem can also be avoided.
   * (However, in the current project, pageParams are modified via the usePageParams hook, 
   * so this solution is not used in order not to break the logic)
   */ if (!viewId && (previousDatasheetActiveViewId !== datasheetActiveViewId || previousMirrorId && !mirrorId)) {
        const nextViewId = (0,pc_utils_storage_storage__WEBPACK_IMPORTED_MODULE_4__/* .getStorage */ .cF)(pc_utils_storage_storage__WEBPACK_IMPORTED_MODULE_4__/* .StorageName.DatasheetView */ .mL.DatasheetView)?.[uniqueId] || datasheetActiveViewId;
        (0,pc_hooks__WEBPACK_IMPORTED_MODULE_3__/* .changeView */ .Sv)(nextViewId);
        return;
    }
    return;
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39945:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75318);
/* harmony import */ var _apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50912);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_resource_service__WEBPACK_IMPORTED_MODULE_1__]);
pc_resource_service__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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


(0,_apitable_widget_sdk__WEBPACK_IMPORTED_MODULE_0__.subscribeWidgetMap)(pc_store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h, pc_resource_service__WEBPACK_IMPORTED_MODULE_1__/* .resourceService */ .Zc);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ remindAggregation),
/* harmony export */   "k": () => (/* binding */ createRemindKey)
/* harmony export */ });
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99000);
/* harmony import */ var _notification_verification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41875);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_notification_verification__WEBPACK_IMPORTED_MODULE_2__]);
_notification_verification__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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


const remindUnitRecordsMap = new Map();
class RemindAggregation {
    constructor(){
        setInterval(this.commitRemind, 1000);
    }
    commitRemind() {
        if (remindUnitRecordsMap.size) {
            const reqMap = {};
            const state = pc_store__WEBPACK_IMPORTED_MODULE_1__/* .store.getState */ .h.getState();
            for (const key of remindUnitRecordsMap.keys()){
                const { recordIds =[] , fieldIds  } = remindUnitRecordsMap.get(key) || {};
                const [isNotify, linkId, nodeId, viewId, unitId] = key.split("-");
                const reqKey = [
                    isNotify,
                    linkId,
                    nodeId,
                    viewId
                ].join("-");
                const snapshot = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getSnapshot(state, nodeId);
                const firstRecordId = recordIds[0];
                const firstFieldId = snapshot.meta.views[0].columns[0].fieldId;
                const cv = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getCellValue(state, snapshot, firstRecordId, firstFieldId);
                const primaryText = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Field.bindModel(snapshot.meta.fieldMap[firstFieldId]).cellValueToString(cv);
                const { fieldId: firstMemberFieldId  } = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getViewById(snapshot, viewId)?.columns.find(({ fieldId  })=>{
                    return fieldIds?.includes(fieldId);
                }) || {};
                const firstMemberFieldName = firstMemberFieldId && snapshot.meta.fieldMap[firstMemberFieldId]?.name;
                if (reqMap[reqKey]) {
                    reqMap[reqKey].push({
                        recordIds: recordIds,
                        unitIds: [
                            unitId
                        ],
                        recordTitle: primaryText || "",
                        fieldName: firstMemberFieldName
                    });
                } else {
                    reqMap[reqKey] = [
                        {
                            recordIds: recordIds,
                            unitIds: [
                                unitId
                            ],
                            recordTitle: primaryText || "",
                            fieldName: firstMemberFieldName
                        }
                    ];
                }
            }
            // Consume the message first, failure will not resend
            remindUnitRecordsMap.clear();
            for (const item of Object.entries(reqMap)){
                const [key1, unitRecs] = item;
                const [isNotify1, linkId1, nodeId1, viewId1] = key1.split("-");
                const mirrorId = state.pageParams.datasheetId === nodeId1 && state.pageParams.mirrorId;
                if (isNotify1 === "1") {
                    (0,_notification_verification__WEBPACK_IMPORTED_MODULE_2__/* .verificationPermission */ .ru)({
                        isNotify: isNotify1 === "1",
                        nodeId: mirrorId || nodeId1,
                        viewId: viewId1,
                        unitRecs,
                        linkId: linkId1
                    });
                }
            }
        }
    }
    /**
   * @param {string} id `${isNotify}-${nodeId}-${viewId}-${unitId}`
   * @param {*} recordId
   * @memberof RemindAggregation
   */ addRemindUnit(id, remindUnit) {
        const aggrRemind = remindUnitRecordsMap.get(id);
        if (aggrRemind) {
            aggrRemind.fieldIds = Array.from(new Set([
                ...aggrRemind.fieldIds,
                remindUnit.fieldId
            ]));
            aggrRemind.recordIds = Array.from(new Set([
                ...aggrRemind.recordIds,
                remindUnit.recordId
            ]));
        } else {
            remindUnitRecordsMap.set(id, {
                fieldIds: [
                    remindUnit.fieldId
                ],
                recordIds: [
                    remindUnit.recordId
                ]
            });
        }
    }
}
const remindAggregation = new RemindAggregation();
function createRemindKey({ isNotify , linkId , datasheetId , viewId , unitId  }) {
    return `${isNotify ? 1 : 0}-${linkId || ""}-${datasheetId}-${viewId}-${unitId}`;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12806:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U4": () => (/* reexport safe */ _init_events_listener__WEBPACK_IMPORTED_MODULE_1__.U)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85938);
/* harmony import */ var _init_events_listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73626);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_events__WEBPACK_IMPORTED_MODULE_0__, _init_events_listener__WEBPACK_IMPORTED_MODULE_1__]);
([_events__WEBPACK_IMPORTED_MODULE_0__, _init_events_listener__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
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


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73626:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ initEventListen)
/* harmony export */ });
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29810);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pc_components_expand_record__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16496);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99000);
/* harmony import */ var pc_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58979);
/* harmony import */ var pc_worker_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64350);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85938);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([immer__WEBPACK_IMPORTED_MODULE_1__, pc_components_expand_record__WEBPACK_IMPORTED_MODULE_3__, _events__WEBPACK_IMPORTED_MODULE_7__]);
([immer__WEBPACK_IMPORTED_MODULE_1__, pc_components_expand_record__WEBPACK_IMPORTED_MODULE_3__, _events__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
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







const { DATASHEET_JOT_ACTION  } = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ActionConstants;
const makeVEvent = (datasheetId, fieldId, recordId)=>{
    return {
        eventName: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.OPEventNameEnums.CellUpdated,
        scope: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Datasheet,
        realType: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.EventRealTypeEnums.REAL,
        atomType: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.EventAtomTypeEnums.ATOM,
        sourceType: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.EventSourceTypeEnums.LOCAL,
        context: {
            datasheetId,
            recordId,
            fieldId
        }
    };
};
const debounceRefreshSnapshot = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.debounce)((datasheetId)=>{
    (0,pc_worker_store__WEBPACK_IMPORTED_MODULE_6__/* .dispatch */ .W)(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.refreshSnapshot(datasheetId));
}, 500);
const removeAndUpdateCacheIfNeed = (datasheetId, fieldId, recordId)=>{
    const cellValue = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.CacheManager.getCellCache(datasheetId, fieldId, recordId);
    const isNoCache = cellValue === _apitable_core__WEBPACK_IMPORTED_MODULE_0__.NO_CACHE;
    if (!fieldId) {
        _apitable_core__WEBPACK_IMPORTED_MODULE_0__.CacheManager.removeCellCacheByRecord(datasheetId, recordId);
    } else {
        _apitable_core__WEBPACK_IMPORTED_MODULE_0__.CacheManager.removeCellCache(datasheetId, fieldId, recordId);
    }
    // TODO: No need to process the form separately, migrate it over first and delete it later
    if (pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store */ .h) {
        const state = pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store.getState */ .h.getState();
        let nextCache;
        const remotePayload = [
            datasheetId,
            fieldId,
            recordId
        ];
        if (fieldId && recordId) {
            const snapshot = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getSnapshot(state, datasheetId);
            if (snapshot && !isNoCache) {
                nextCache = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.calcCellValueAndString({
                    state,
                    snapshot,
                    recordId,
                    fieldId,
                    withError: false,
                    datasheetId,
                    ignoreFieldPermission: true
                });
            }
        }
        if (nextCache && !nextCache.ignoreCache) {
            _apitable_core__WEBPACK_IMPORTED_MODULE_0__.CacheManager.setCellCache(datasheetId, fieldId, recordId, nextCache);
            // console.log('setCellCache', datasheetId, fieldId!, recordId!, nextCache);
            remotePayload.push(nextCache);
        }
        debounceRefreshSnapshot(datasheetId);
        pc_worker__WEBPACK_IMPORTED_MODULE_5__/* .comlinkStore */ .g?.proxy?.removeCache(remotePayload);
    }
};
/**
 * Initialize the event listener and listen to it only once. After converting the op to an event stream, 
 * the business is managed here uniformly back off. The listeners here are not to be removed
 */ const initEventListen = (resourceService)=>{
    console.log("resourceService", resourceService);
    const { opEventManager , computeRefManager  } = resourceService;
    // -------- Field cell changes trigger changes in the referenced field --------
    // The record deletion event does not need to be listened to. 
    // When the record is deleted, the cellValue of the link field changes and triggers cellUpdate.
    opEventManager.addEventListener(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.OPEventNameEnums.CellUpdated, (context)=>{
        const { datasheetId , recordId , fieldId  } = context;
        removeAndUpdateCacheIfNeed(datasheetId, fieldId, recordId);
    }, {
        realType: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.EventRealTypeEnums.ALL,
        sourceType: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.EventSourceTypeEnums.ALL
    });
    // Both field deletion and field update will trigger this event. 
    // Both have the same op characteristics.
    opEventManager.addEventListener(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.OPEventNameEnums.FieldUpdated, (context)=>{
        const { datasheetId , fieldId  } = context;
        removeAndUpdateCacheIfNeed(datasheetId, fieldId);
        const state = pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store.getState */ .h.getState();
        const currSnapshot = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getSnapshot(state, datasheetId);
        const fieldMap = currSnapshot?.meta.fieldMap || {};
        computeRefManager.computeRefMap(fieldMap, datasheetId, state);
        // field updates, the impact is relatively large.
        // Now the robot is not very suitable for updating fields and converting them into cell updates.
        // Currently only the cache on the front end of the clear reference chain.
        const refKey = `${datasheetId}-${fieldId}`;
        const { hasError , effectedKeys  } = computeRefManager.getAllEffectKeysByKey(refKey);
        if (!hasError) {
            effectedKeys.forEach((key)=>{
                const [dstId, fieldId] = key.split("-");
                const snapshot = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getSnapshot(state, dstId);
                if (fieldId && snapshot) {
                    const field = snapshot.meta.fieldMap[fieldId];
                    // There may be residual reference relationships that are not cleaned up in a timely manner
                    if (!field) {
                        computeRefManager.cleanFieldRef(fieldId, dstId);
                    } else if (field.type === _apitable_core__WEBPACK_IMPORTED_MODULE_0__.FieldType.LookUp) {
                        // lookup after the formula calculation. 
                        // This time you need to clear the formula cache.
                        const expr = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Field.bindModel(field, state).getExpression();
                        if (expr) {
                            _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ExpCache.del(datasheetId, fieldId, expr);
                        }
                    }
                }
                removeAndUpdateCacheIfNeed(dstId, fieldId);
            });
        }
    });
    opEventManager.addEventListener(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.OPEventNameEnums.RecordDeleted, (context)=>{
        const { datasheetId , recordId  } = context;
        removeAndUpdateCacheIfNeed(datasheetId, undefined, recordId);
    });
    opEventManager.addEventListener(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.OPEventNameEnums.RecordMetaUpdated, ({ datasheetId , recordId , action  })=>{
        if (!("oi" in action)) return;
        const state = pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store.getState */ .h.getState();
        const fieldMap = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getFieldMap(state, datasheetId);
        const vEvents = [];
        // Created
        if ("oi" in action && !("od" in action)) {
            // The general case is: create record.
            // Special case: delete record => undo operation, in which case LastModifiedTime and LastModifiedBy need to be updated.
            const actionFields = new Set([
                _apitable_core__WEBPACK_IMPORTED_MODULE_0__.FieldType.CreatedTime,
                _apitable_core__WEBPACK_IMPORTED_MODULE_0__.FieldType.CreatedBy,
                _apitable_core__WEBPACK_IMPORTED_MODULE_0__.FieldType.LastModifiedTime,
                _apitable_core__WEBPACK_IMPORTED_MODULE_0__.FieldType.LastModifiedBy,
                _apitable_core__WEBPACK_IMPORTED_MODULE_0__.FieldType.AutoNumber
            ]);
            Object.values(fieldMap).filter((field)=>{
                return actionFields.has(field.type);
            }).forEach((field)=>{
                removeAndUpdateCacheIfNeed(datasheetId, field.id, recordId);
                vEvents.push(makeVEvent(datasheetId, field.id, recordId));
            });
        }
        // Updated
        if ("oi" in action && "od" in action) {
            const needUpdateField = [
                _apitable_core__WEBPACK_IMPORTED_MODULE_0__.FieldType.LastModifiedTime,
                _apitable_core__WEBPACK_IMPORTED_MODULE_0__.FieldType.LastModifiedBy,
                _apitable_core__WEBPACK_IMPORTED_MODULE_0__.FieldType.AutoNumber
            ];
            Object.values(fieldMap).filter((field)=>needUpdateField.includes(field.type)).forEach((field)=>{
                removeAndUpdateCacheIfNeed(datasheetId, field.id, recordId);
                vEvents.push(makeVEvent(datasheetId, field.id, recordId));
            });
        }
        // Update cells containing CREATED_TIME/LAST_MODIFIED_TIME for the Formula field type
        Object.values(fieldMap).filter((field)=>field.type === _apitable_core__WEBPACK_IMPORTED_MODULE_0__.FieldType.Formula).forEach((field)=>{
            const expression = field.property.expression;
            const fExp = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.ExpCache.get(datasheetId, field.id, expression);
            const needUpdate = fExp && !("error" in fExp) && fExp.lexer.matches.some((token)=>{
                const fnName = token.value.toLowerCase();
                return token.type === "Call" && (fnName === "created_time" || fnName === "last_modified_time");
            });
            if (needUpdate) {
                removeAndUpdateCacheIfNeed(datasheetId, field.id, recordId);
                vEvents.push(makeVEvent(datasheetId, field.id, recordId));
            }
        });
        const virtualAtomEvents = opEventManager.options.op2Event.makeVirtualEvents(vEvents, state);
        opEventManager.handleEvents(virtualAtomEvents, false);
    });
    // -------- Events triggered by changes in the content of member cells --------
    opEventManager.addEventListener(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.OPEventNameEnums.CellUpdated, ({ action , fieldId , recordId , datasheetId  })=>{
        const state = pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store.getState */ .h.getState();
        const fieldMap = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getFieldMap(state, datasheetId);
        if (!fieldMap) return;
        const field = fieldMap[fieldId];
        if (!field) return;
        const activeView = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getActiveViewId(state);
        // Listen only for changes to member fields
        if (field.type !== _apitable_core__WEBPACK_IMPORTED_MODULE_0__.FieldType.Member) return;
        if (!("oi" in action) || !recordId) return;
        const isNotify = field.property.shouldSendMsg;
        const diffMember = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.difference)(action.oi, "od" in action ? action.od : []);
        const newUnitIds = diffMember;
        newUnitIds.forEach((unitId)=>{
            const key = (0,_events__WEBPACK_IMPORTED_MODULE_7__/* .createRemindKey */ .k)({
                isNotify,
                linkId: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getLinkId(state),
                datasheetId,
                viewId: activeView,
                unitId
            });
            _events__WEBPACK_IMPORTED_MODULE_7__/* .remindAggregation.addRemindUnit */ .H.addRemindUnit(key, {
                recordId,
                fieldId
            });
        });
    }, {
        sourceType: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.EventSourceTypeEnums.LOCAL,
        realType: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.EventRealTypeEnums.REAL
    });
    opEventManager.addEventListener(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.OPEventNameEnums.RecordCreated, ({ recordId , op , datasheetId  })=>{
        if (!pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store */ .h) return;
        const state = pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store.getState */ .h.getState();
        const isSideRecordOpen = state.space.isSideRecordOpen;
        const view = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getCurrentView(state);
        const activeCell = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getActiveCell(state);
        const client = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getDatasheetClient(state);
        if (!client || !view || !recordId) return;
        const { newRecordExpectIndex: expectIndex  } = client;
        if (expectIndex == null) return;
        (0,immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, (draft)=>{
            const dstState = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getDatasheet(draft, datasheetId);
            if (dstState) {
                (0,_apitable_core__WEBPACK_IMPORTED_MODULE_0__.JOTApply)(dstState, {
                    datasheetId,
                    type: DATASHEET_JOT_ACTION,
                    payload: {
                        operations: [
                            op
                        ]
                    }
                });
            }
            const _state = (0,immer__WEBPACK_IMPORTED_MODULE_1__.current)(draft);
            const rowsMap = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getVisibleRowsIndexMap(_state);
            const newRecordId = recordId;
            const isRecordNotInView = !rowsMap.has(newRecordId);
            const newRecordIndex = rowsMap.get(newRecordId);
            const isRecordIndexMove = expectIndex !== newRecordIndex;
            const newRecordSnapshot = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getRecordSnapshot(_state, datasheetId, newRecordId);
            if (!newRecordSnapshot) {
                return;
            }
            if (isRecordNotInView || isRecordIndexMove) {
                // After adding a new row activates the cell of the new row. 
                // This time the information of activeRowInfo will be refreshed.
                (0,pc_worker_store__WEBPACK_IMPORTED_MODULE_6__/* .dispatch */ .W)(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.setActiveCell(datasheetId, {
                    recordId: newRecordId,
                    fieldId: activeCell ? activeCell.fieldId : view.columns[0].fieldId
                }));
                if (isSideRecordOpen) {
                    (0,pc_components_expand_record__WEBPACK_IMPORTED_MODULE_3__/* .expandRecordIdNavigate */ ._d)(newRecordId);
                }
                (0,pc_worker_store__WEBPACK_IMPORTED_MODULE_6__/* .dispatch */ .W)(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.setActiveRowInfo(datasheetId, {
                    type: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.WhyRecordMoveType.NewRecord,
                    positionInfo: {
                        recordId: newRecordId,
                        visibleRowIndex: expectIndex,
                        isInit: false
                    },
                    recordSnapshot: newRecordSnapshot
                }));
            }
        });
    }, {
        sourceType: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.EventSourceTypeEnums.LOCAL,
        realType: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.EventRealTypeEnums.REAL,
        beforeApply: true
    });
    opEventManager.addEventListener(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.OPEventNameEnums.RecordCreated, ({ recordId , datasheetId  })=>{
        if (!pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store */ .h || !recordId || !datasheetId) return;
        const state = pc_store__WEBPACK_IMPORTED_MODULE_4__/* .store.getState */ .h.getState();
        const viewId = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getActiveViewId(state);
        const newRecordId = recordId;
        const newRecordSnapshot = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getRecordSnapshot(state, datasheetId, newRecordId);
        if (!newRecordSnapshot) {
            return;
        }
        // Send notifications for member columns that have notifications turned on
        const memberCell = [];
        const newRecordData = newRecordSnapshot.recordMap[newRecordId].data;
        Object.keys(newRecordSnapshot.meta.fieldMap).forEach((field)=>{
            const fieldObj = newRecordSnapshot.meta.fieldMap[field];
            if (fieldObj.type === _apitable_core__WEBPACK_IMPORTED_MODULE_0__.FieldType.Member && fieldObj.property?.shouldSendMsg && newRecordData[fieldObj.id]) {
                memberCell.push({
                    id: fieldObj.id,
                    name: fieldObj.name,
                    unitIds: newRecordData[fieldObj.id]
                });
            }
        });
        memberCell.forEach((member)=>{
            const isNotify = true;
            member.unitIds.forEach((unitId)=>{
                const key = (0,_events__WEBPACK_IMPORTED_MODULE_7__/* .createRemindKey */ .k)({
                    isNotify,
                    linkId: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getLinkId(state),
                    datasheetId,
                    viewId,
                    unitId
                });
                _events__WEBPACK_IMPORTED_MODULE_7__/* .remindAggregation.addRemindUnit */ .H.addRemindUnit(key, {
                    recordId,
                    fieldId: member.id
                });
            });
        });
    }, {
        sourceType: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.EventSourceTypeEnums.LOCAL,
        realType: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.EventRealTypeEnums.REAL
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ initWorkerStore),
/* harmony export */   "g": () => (/* binding */ comlinkStore)
/* harmony export */ });
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74660);
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(comlink__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64350);
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


/**
 * comlinkStore is similar to a full-duplex socket service,
 * where the main thread can call the worker instance's methods imperatively via storeComlink.proxy.
 * At the same time the worker instance will also actively push some messages to update the redux of the main thread,
 * so as to update the UI, actively pushing the data data for a redux action
 */ const comlinkStore = {
    worker: null,
    proxy: null,
    store: null
};
async function initWorkerStore() {
    let worker, proxy;
    const useWorker = false;
    if (typeof Worker === "function" && useWorker) {
        window.useWorkerCompute = true;
        worker = new Worker("./store/store_worker", {
            type: "module",
            name: "store_worker"
        });
        proxy = await (0,comlink__WEBPACK_IMPORTED_MODULE_1__.wrap)(worker);
        worker.addEventListener("message", (e)=>{
            if (typeof e.data === "string") {
                const data = JSON.parse(e.data);
                // Some action messages sent by the worker, such as pushing some calculated data to the main thread store
                // console.log('worker data post spend time: ', Date.now() - data.postTime);
                // console.log('dispatch action from worker', data.action);
                (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .dispatch */ .W)(data.action);
                return;
            } else if (e.data?.type === "requestResource") {
                const datasheetId = e.data.datasheetId;
                if (datasheetId) {
                    const state = comlinkStore.store.getState();
                    const datasheet = _apitable_core__WEBPACK_IMPORTED_MODULE_0__.Selectors.getDatasheet(state, datasheetId);
                    if (datasheet) {
                        console.log("Replenish data from the main thread's store to the worker", datasheet);
                        comlinkStore.store.dispatch({
                            ..._apitable_core__WEBPACK_IMPORTED_MODULE_0__.StoreActions.receiveDataPack({
                                snapshot: datasheet.snapshot,
                                datasheet
                            }, {
                                isPartOfData: datasheet.isPartOfData,
                                getState: ()=>state
                            }),
                            dispatchToStore: _apitable_core__WEBPACK_IMPORTED_MODULE_0__.DispatchToStore.Remote
                        });
                    }
                }
            } else if (e.data?.type === "error_trace") {
                Promise.reject({
                    type: "worker_error",
                    message: e.data.errInfo
                });
            }
        });
    }
    const wrappedStore = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .remoteStoreWrap */ .H)(proxy);
    comlinkStore.worker = worker;
    comlinkStore.proxy = proxy;
    comlinkStore.store = wrappedStore;
    if (useWorker) {
        console.log("worker initialization successful", comlinkStore);
    }
    return comlinkStore;
}


/***/ }),

/***/ 72066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
 */ const reportWebVitals = (onPerfEntry)=>{
    if (onPerfEntry && onPerfEntry instanceof Function) {
        Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 34032, 23)).then(({ getCLS , getFID , getFCP , getLCP , getTTFB  })=>{
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportWebVitals);


/***/ }),

/***/ 22330:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ../../node_modules/antd/es/date-picker/style/index.less
var style = __webpack_require__(53739);
// EXTERNAL MODULE: ../../node_modules/antd/es/style/default.less
var es_style_default = __webpack_require__(25918);
// EXTERNAL MODULE: ../../node_modules/antd/es/button/style/index.less
var button_style = __webpack_require__(65776);
;// CONCATENATED MODULE: ../../node_modules/antd/es/button/style/index.js



// EXTERNAL MODULE: ../../node_modules/antd/es/tag/style/index.less
var tag_style = __webpack_require__(10787);
;// CONCATENATED MODULE: ../../node_modules/antd/es/tag/style/index.js



;// CONCATENATED MODULE: ../../node_modules/antd/es/date-picker/style/index.js
 // style dependencies

 // deps-lint-skip: form


/***/ }),

/***/ 65776:
/***/ (() => {



/***/ }),

/***/ 53739:
/***/ (() => {



/***/ }),

/***/ 25918:
/***/ (() => {



/***/ }),

/***/ 10787:
/***/ (() => {



/***/ }),

/***/ 45847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(20747)


/***/ }),

/***/ 34053:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/colors");

/***/ }),

/***/ 21944:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/react-slick");

/***/ }),

/***/ 30180:
/***/ ((module) => {

"use strict";
module.exports = require("@apitable/i18n");

/***/ }),

/***/ 73636:
/***/ ((module) => {

"use strict";
module.exports = require("@apitable/react-flow");

/***/ }),

/***/ 70566:
/***/ ((module) => {

"use strict";
module.exports = require("@ctrl/tinycolor");

/***/ }),

/***/ 52882:
/***/ ((module) => {

"use strict";
module.exports = require("@floating-ui/dom");

/***/ }),

/***/ 46328:
/***/ ((module) => {

"use strict";
module.exports = require("@futpib/dagre");

/***/ }),

/***/ 18878:
/***/ ((module) => {

"use strict";
module.exports = require("@huse/click-outside");

/***/ }),

/***/ 8157:
/***/ ((module) => {

"use strict";
module.exports = require("@react-spring/web");

/***/ }),

/***/ 56807:
/***/ ((module) => {

"use strict";
module.exports = require("@redux-devtools/extension");

/***/ }),

/***/ 11723:
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/integrations");

/***/ }),

/***/ 58097:
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/nextjs");

/***/ }),

/***/ 24842:
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/tracing");

/***/ }),

/***/ 40512:
/***/ ((module) => {

"use strict";
module.exports = require("@use-gesture/react");

/***/ }),

/***/ 36358:
/***/ ((module) => {

"use strict";
module.exports = require("add-dom-event-listener");

/***/ }),

/***/ 57398:
/***/ ((module) => {

"use strict";
module.exports = require("ahooks");

/***/ }),

/***/ 90643:
/***/ ((module) => {

"use strict";
module.exports = require("apphook");

/***/ }),

/***/ 99308:
/***/ ((module) => {

"use strict";
module.exports = require("attr-accept");

/***/ }),

/***/ 52167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 17618:
/***/ ((module) => {

"use strict";
module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ 69044:
/***/ ((module) => {

"use strict";
module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ 49611:
/***/ ((module) => {

"use strict";
module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ 22854:
/***/ ((module) => {

"use strict";
module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ 91228:
/***/ ((module) => {

"use strict";
module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ 77323:
/***/ ((module) => {

"use strict";
module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ 92793:
/***/ ((module) => {

"use strict";
module.exports = require("bowser");

/***/ }),

/***/ 59003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 39105:
/***/ ((module) => {

"use strict";
module.exports = require("color");

/***/ }),

/***/ 74660:
/***/ ((module) => {

"use strict";
module.exports = require("comlink");

/***/ }),

/***/ 68887:
/***/ ((module) => {

"use strict";
module.exports = require("copy-to-clipboard");

/***/ }),

/***/ 16384:
/***/ ((module) => {

"use strict";
module.exports = require("core-js-pure/es/array/includes");

/***/ }),

/***/ 40814:
/***/ ((module) => {

"use strict";
module.exports = require("core-js-pure/features/array/fill");

/***/ }),

/***/ 52729:
/***/ ((module) => {

"use strict";
module.exports = require("current-device");

/***/ }),

/***/ 17956:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/add");

/***/ }),

/***/ 69674:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/differenceInDays");

/***/ }),

/***/ 97718:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/differenceInMonths");

/***/ }),

/***/ 14384:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/format");

/***/ }),

/***/ 44038:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/isAfter");

/***/ }),

/***/ 13024:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/isBefore");

/***/ }),

/***/ 15081:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/isValid");

/***/ }),

/***/ 90986:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/max");

/***/ }),

/***/ 78542:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/min");

/***/ }),

/***/ 95358:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/subDays");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 17097:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/ar");

/***/ }),

/***/ 60226:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/de");

/***/ }),

/***/ 48578:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/es");

/***/ }),

/***/ 17688:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/fr");

/***/ }),

/***/ 13820:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/hi");

/***/ }),

/***/ 37123:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/ja");

/***/ }),

/***/ 83590:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/ko");

/***/ }),

/***/ 53178:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/pt");

/***/ }),

/***/ 19161:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/ru");

/***/ }),

/***/ 4413:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/zh");

/***/ }),

/***/ 95468:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/zh-cn");

/***/ }),

/***/ 26489:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/zh-hk");

/***/ }),

/***/ 15831:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/zh-tw");

/***/ }),

/***/ 8073:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/calendar");

/***/ }),

/***/ 84125:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/customParseFormat");

/***/ }),

/***/ 98577:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/dayOfYear");

/***/ }),

/***/ 90756:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/duration");

/***/ }),

/***/ 89983:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/isoWeek");

/***/ }),

/***/ 94166:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/localeData");

/***/ }),

/***/ 67424:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/localizedFormat");

/***/ }),

/***/ 59205:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/quarterOfYear");

/***/ }),

/***/ 14195:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 53291:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 36619:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ 59912:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/weekOfYear");

/***/ }),

/***/ 80130:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/weekYear");

/***/ }),

/***/ 9416:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/weekday");

/***/ }),

/***/ 29504:
/***/ ((module) => {

"use strict";
module.exports = require("dom-align");

/***/ }),

/***/ 72264:
/***/ ((module) => {

"use strict";
module.exports = require("dom-to-image");

/***/ }),

/***/ 10701:
/***/ ((module) => {

"use strict";
module.exports = require("dot-object");

/***/ }),

/***/ 31937:
/***/ ((module) => {

"use strict";
module.exports = require("element-closest");

/***/ }),

/***/ 50643:
/***/ ((module) => {

"use strict";
module.exports = require("element-scroll-polyfill");

/***/ }),

/***/ 70715:
/***/ ((module) => {

"use strict";
module.exports = require("emoji-mart/dist/components/emoji/emoji");

/***/ }),

/***/ 45871:
/***/ ((module) => {

"use strict";
module.exports = require("emoji-mart/dist/utils/emoji-index/emoji-index");

/***/ }),

/***/ 83021:
/***/ ((module) => {

"use strict";
module.exports = require("eruda");

/***/ }),

/***/ 57641:
/***/ ((module) => {

"use strict";
module.exports = require("exceljs");

/***/ }),

/***/ 12404:
/***/ ((module) => {

"use strict";
module.exports = require("fast-deep-equal");

/***/ }),

/***/ 64175:
/***/ ((module) => {

"use strict";
module.exports = require("fast-json-stable-stringify");

/***/ }),

/***/ 28109:
/***/ ((module) => {

"use strict";
module.exports = require("file-saver");

/***/ }),

/***/ 62733:
/***/ ((module) => {

"use strict";
module.exports = require("fuse.js");

/***/ }),

/***/ 52805:
/***/ ((module) => {

"use strict";
module.exports = require("grapheme-splitter");

/***/ }),

/***/ 27318:
/***/ ((module) => {

"use strict";
module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ 40264:
/***/ ((module) => {

"use strict";
module.exports = require("html-react-parser");

/***/ }),

/***/ 7133:
/***/ ((module) => {

"use strict";
module.exports = require("immer");

/***/ }),

/***/ 44916:
/***/ ((module) => {

"use strict";
module.exports = require("intersection-observer");

/***/ }),

/***/ 40481:
/***/ ((module) => {

"use strict";
module.exports = require("is-hotkey");

/***/ }),

/***/ 21492:
/***/ ((module) => {

"use strict";
module.exports = require("is-url");

/***/ }),

/***/ 48506:
/***/ ((module) => {

"use strict";
module.exports = require("joi");

/***/ }),

/***/ 56734:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ 3792:
/***/ ((module) => {

"use strict";
module.exports = require("json-schema-merge-allof");

/***/ }),

/***/ 80539:
/***/ ((module) => {

"use strict";
module.exports = require("json-schema-traverse");

/***/ }),

/***/ 60131:
/***/ ((module) => {

"use strict";
module.exports = require("jsonpointer");

/***/ }),

/***/ 9227:
/***/ ((module) => {

"use strict";
module.exports = require("jszip");

/***/ }),

/***/ 87581:
/***/ ((module) => {

"use strict";
module.exports = require("konva");

/***/ }),

/***/ 85827:
/***/ ((module) => {

"use strict";
module.exports = require("loadjs");

/***/ }),

/***/ 3182:
/***/ ((module) => {

"use strict";
module.exports = require("localforage");

/***/ }),

/***/ 46517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 24817:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/assignWith");

/***/ }),

/***/ 90221:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/chunk");

/***/ }),

/***/ 12154:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/clamp");

/***/ }),

/***/ 59591:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 93908:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/debounce");

/***/ }),

/***/ 77047:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/difference");

/***/ }),

/***/ 90857:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/endsWith");

/***/ }),

/***/ 1712:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/get");

/***/ }),

/***/ 89699:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 40113:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ 27078:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNumber");

/***/ }),

/***/ 63385:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/keyBy");

/***/ }),

/***/ 53707:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/map");

/***/ }),

/***/ 50541:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/memoize");

/***/ }),

/***/ 61831:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ 63901:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/omit");

/***/ }),

/***/ 27479:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/padEnd");

/***/ }),

/***/ 96839:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/padStart");

/***/ }),

/***/ 1381:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/throttle");

/***/ }),

/***/ 69309:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 22217:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/without");

/***/ }),

/***/ 13890:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/xor");

/***/ }),

/***/ 95352:
/***/ ((module) => {

"use strict";
module.exports = require("lottie-web/build/player/lottie_svg");

/***/ }),

/***/ 65680:
/***/ ((module) => {

"use strict";
module.exports = require("lru-cache");

/***/ }),

/***/ 17809:
/***/ ((module) => {

"use strict";
module.exports = require("memoize-one");

/***/ }),

/***/ 59514:
/***/ ((module) => {

"use strict";
module.exports = require("mime-types");

/***/ }),

/***/ 32245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 66896:
/***/ ((module) => {

"use strict";
module.exports = require("moment/locale/zh-cn");

/***/ }),

/***/ 36607:
/***/ ((module) => {

"use strict";
module.exports = require("naming-style");

/***/ }),

/***/ 30754:
/***/ ((module) => {

"use strict";
module.exports = require("nanoid");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 25485:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 49100:
/***/ ((module) => {

"use strict";
module.exports = require("ot-json0/lib/json0");

/***/ }),

/***/ 79936:
/***/ ((module) => {

"use strict";
module.exports = require("path-browserify");

/***/ }),

/***/ 78919:
/***/ ((module) => {

"use strict";
module.exports = require("phone");

/***/ }),

/***/ 30339:
/***/ ((module) => {

"use strict";
module.exports = require("polyfill-object.fromentries");

/***/ }),

/***/ 98315:
/***/ ((module) => {

"use strict";
module.exports = require("posthog-js");

/***/ }),

/***/ 35487:
/***/ ((module) => {

"use strict";
module.exports = require("posthog-js/react");

/***/ }),

/***/ 39369:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 1121:
/***/ ((module) => {

"use strict";
module.exports = require("qrcode");

/***/ }),

/***/ 87104:
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ 62343:
/***/ ((module) => {

"use strict";
module.exports = require("raf");

/***/ }),

/***/ 44942:
/***/ ((module) => {

"use strict";
module.exports = require("rc-animate");

/***/ }),

/***/ 50969:
/***/ ((module) => {

"use strict";
module.exports = require("rc-cascader");

/***/ }),

/***/ 92090:
/***/ ((module) => {

"use strict";
module.exports = require("rc-checkbox");

/***/ }),

/***/ 63070:
/***/ ((module) => {

"use strict";
module.exports = require("rc-collapse");

/***/ }),

/***/ 93426:
/***/ ((module) => {

"use strict";
module.exports = require("rc-dialog");

/***/ }),

/***/ 45307:
/***/ ((module) => {

"use strict";
module.exports = require("rc-drawer");

/***/ }),

/***/ 79291:
/***/ ((module) => {

"use strict";
module.exports = require("rc-dropdown");

/***/ }),

/***/ 57118:
/***/ ((module) => {

"use strict";
module.exports = require("rc-field-form");

/***/ }),

/***/ 64621:
/***/ ((module) => {

"use strict";
module.exports = require("rc-field-form/lib/FieldContext");

/***/ }),

/***/ 97571:
/***/ ((module) => {

"use strict";
module.exports = require("rc-image");

/***/ }),

/***/ 54326:
/***/ ((module) => {

"use strict";
module.exports = require("rc-input");

/***/ }),

/***/ 39200:
/***/ ((module) => {

"use strict";
module.exports = require("rc-input-number");

/***/ }),

/***/ 45368:
/***/ ((module) => {

"use strict";
module.exports = require("rc-mentions");

/***/ }),

/***/ 59934:
/***/ ((module) => {

"use strict";
module.exports = require("rc-menu");

/***/ }),

/***/ 94290:
/***/ ((module) => {

"use strict";
module.exports = require("rc-motion");

/***/ }),

/***/ 50522:
/***/ ((module) => {

"use strict";
module.exports = require("rc-progress");

/***/ }),

/***/ 13116:
/***/ ((module) => {

"use strict";
module.exports = require("rc-rate");

/***/ }),

/***/ 31493:
/***/ ((module) => {

"use strict";
module.exports = require("rc-resize-observer");

/***/ }),

/***/ 3844:
/***/ ((module) => {

"use strict";
module.exports = require("rc-segmented");

/***/ }),

/***/ 32463:
/***/ ((module) => {

"use strict";
module.exports = require("rc-select");

/***/ }),

/***/ 81817:
/***/ ((module) => {

"use strict";
module.exports = require("rc-slider");

/***/ }),

/***/ 7035:
/***/ ((module) => {

"use strict";
module.exports = require("rc-steps");

/***/ }),

/***/ 74357:
/***/ ((module) => {

"use strict";
module.exports = require("rc-swipeout");

/***/ }),

/***/ 8662:
/***/ ((module) => {

"use strict";
module.exports = require("rc-switch");

/***/ }),

/***/ 73345:
/***/ ((module) => {

"use strict";
module.exports = require("rc-table");

/***/ }),

/***/ 91912:
/***/ ((module) => {

"use strict";
module.exports = require("rc-table/lib/Table");

/***/ }),

/***/ 89346:
/***/ ((module) => {

"use strict";
module.exports = require("rc-table/lib/hooks/useColumns");

/***/ }),

/***/ 55132:
/***/ ((module) => {

"use strict";
module.exports = require("rc-tabs");

/***/ }),

/***/ 18880:
/***/ ((module) => {

"use strict";
module.exports = require("rc-textarea");

/***/ }),

/***/ 93283:
/***/ ((module) => {

"use strict";
module.exports = require("rc-tooltip");

/***/ }),

/***/ 89299:
/***/ ((module) => {

"use strict";
module.exports = require("rc-tooltip/lib/placements");

/***/ }),

/***/ 94593:
/***/ ((module) => {

"use strict";
module.exports = require("rc-tree");

/***/ }),

/***/ 38531:
/***/ ((module) => {

"use strict";
module.exports = require("rc-tree-select");

/***/ }),

/***/ 48513:
/***/ ((module) => {

"use strict";
module.exports = require("rc-tree/lib/util");

/***/ }),

/***/ 10369:
/***/ ((module) => {

"use strict";
module.exports = require("rc-tree/lib/utils/conductUtil");

/***/ }),

/***/ 25451:
/***/ ((module) => {

"use strict";
module.exports = require("rc-tree/lib/utils/treeUtil");

/***/ }),

/***/ 16414:
/***/ ((module) => {

"use strict";
module.exports = require("rc-trigger");

/***/ }),

/***/ 42028:
/***/ ((module) => {

"use strict";
module.exports = require("rc-upload");

/***/ }),

/***/ 23384:
/***/ ((module) => {

"use strict";
module.exports = require("re-reselect");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 99191:
/***/ ((module) => {

"use strict";
module.exports = require("react-beautiful-dnd");

/***/ }),

/***/ 67117:
/***/ ((module) => {

"use strict";
module.exports = require("react-color");

/***/ }),

/***/ 4826:
/***/ ((module) => {

"use strict";
module.exports = require("react-contextmenu");

/***/ }),

/***/ 55833:
/***/ ((module) => {

"use strict";
module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ 23599:
/***/ ((module) => {

"use strict";
module.exports = require("react-device-detect");

/***/ }),

/***/ 37962:
/***/ ((module) => {

"use strict";
module.exports = require("react-display-name");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 7849:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/client");

/***/ }),

/***/ 78684:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ 56358:
/***/ ((module) => {

"use strict";
module.exports = require("react-dropzone");

/***/ }),

/***/ 21050:
/***/ ((module) => {

"use strict";
module.exports = require("react-grid-layout");

/***/ }),

/***/ 81848:
/***/ ((module) => {

"use strict";
module.exports = require("react-highlight-words");

/***/ }),

/***/ 6141:
/***/ ((module) => {

"use strict";
module.exports = require("react-image-crop");

/***/ }),

/***/ 95853:
/***/ ((module) => {

"use strict";
module.exports = require("react-laag");

/***/ }),

/***/ 35643:
/***/ ((module) => {

"use strict";
module.exports = require("react-lifecycles-compat");

/***/ }),

/***/ 39340:
/***/ ((module) => {

"use strict";
module.exports = require("react-multiline-clamp");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 81411:
/***/ ((module) => {

"use strict";
module.exports = require("react-sortable-hoc");

/***/ }),

/***/ 74312:
/***/ ((module) => {

"use strict";
module.exports = require("react-split-pane");

/***/ }),

/***/ 84466:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 88041:
/***/ ((module) => {

"use strict";
module.exports = require("react-virtualized-auto-sizer");

/***/ }),

/***/ 56006:
/***/ ((module) => {

"use strict";
module.exports = require("react-window");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 11498:
/***/ ((module) => {

"use strict";
module.exports = require("redux-batched-actions");

/***/ }),

/***/ 8417:
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ }),

/***/ 96814:
/***/ ((module) => {

"use strict";
module.exports = require("reselect");

/***/ }),

/***/ 66827:
/***/ ((module) => {

"use strict";
module.exports = require("resize-observer-polyfill");

/***/ }),

/***/ 30298:
/***/ ((module) => {

"use strict";
module.exports = require("resize-observer-polyfill/dist/ResizeObserver.global");

/***/ }),

/***/ 76949:
/***/ ((module) => {

"use strict";
module.exports = require("runes");

/***/ }),

/***/ 92250:
/***/ ((module) => {

"use strict";
module.exports = require("screenfull");

/***/ }),

/***/ 23324:
/***/ ((module) => {

"use strict";
module.exports = require("scroll-into-view-if-needed");

/***/ }),

/***/ 30455:
/***/ ((module) => {

"use strict";
module.exports = require("scroller");

/***/ }),

/***/ 10912:
/***/ ((module) => {

"use strict";
module.exports = require("semver");

/***/ }),

/***/ 44770:
/***/ ((module) => {

"use strict";
module.exports = require("shallowequal");

/***/ }),

/***/ 370:
/***/ ((module) => {

"use strict";
module.exports = require("slate");

/***/ }),

/***/ 59116:
/***/ ((module) => {

"use strict";
module.exports = require("slate-history");

/***/ }),

/***/ 92960:
/***/ ((module) => {

"use strict";
module.exports = require("slate-hyperscript");

/***/ }),

/***/ 79811:
/***/ ((module) => {

"use strict";
module.exports = require("slate-react");

/***/ }),

/***/ 18087:
/***/ ((module) => {

"use strict";
module.exports = require("socket.io-client");

/***/ }),

/***/ 53278:
/***/ ((module) => {

"use strict";
module.exports = require("staged-components");

/***/ }),

/***/ 63453:
/***/ ((module) => {

"use strict";
module.exports = require("store2");

/***/ }),

/***/ 29804:
/***/ ((module) => {

"use strict";
module.exports = require("string.prototype.matchall");

/***/ }),

/***/ 57518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

"use strict";
module.exports = require("styled-system");

/***/ }),

/***/ 31278:
/***/ ((module) => {

"use strict";
module.exports = require("uri-js");

/***/ }),

/***/ 83764:
/***/ ((module) => {

"use strict";
module.exports = require("urlcat");

/***/ }),

/***/ 24176:
/***/ ((module) => {

"use strict";
module.exports = require("use-long-press");

/***/ }),

/***/ 44635:
/***/ ((module) => {

"use strict";
module.exports = require("use-sync-external-store/shim");

/***/ }),

/***/ 16464:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 34032:
/***/ ((module) => {

"use strict";
module.exports = require("web-vitals");

/***/ }),

/***/ 92833:
/***/ ((module) => {

"use strict";
module.exports = require("webkit-line-clamp");

/***/ }),

/***/ 34160:
/***/ ((module) => {

"use strict";
module.exports = import("dnd-core");;

/***/ }),

/***/ 93643:
/***/ ((module) => {

"use strict";
module.exports = import("filenamify");;

/***/ }),

/***/ 29810:
/***/ ((module) => {

"use strict";
module.exports = import("immer");;

/***/ }),

/***/ 33196:
/***/ ((module) => {

"use strict";
module.exports = import("react-dnd");;

/***/ }),

/***/ 81152:
/***/ ((module) => {

"use strict";
module.exports = import("react-dnd-html5-backend");;

/***/ }),

/***/ 79238:
/***/ ((module) => {

"use strict";
module.exports = import("react-dnd-touch-backend");;

/***/ }),

/***/ 15941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5237,7105,627,4088,4523,6791,6991,2520,4106,2977,7569], () => (__webpack_exec__(95118)));
module.exports = __webpack_exports__;

})();