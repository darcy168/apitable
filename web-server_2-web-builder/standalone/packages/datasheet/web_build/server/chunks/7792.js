"use strict";
exports.id = 7792;
exports.ids = [7792];
exports.modules = {

/***/ 67025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/workbench_account_nodata.04911888.png","height":540,"width":720,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAMFBMVEVMaXHw7vnj4Pj7+v/39v/b1/T////39v/w7vvk4Pfi3vuxqOXi3vu8tOvg3fTd2vIg8rqpAAAAD3RSTlMA/ftGK0L8tRbHk42lxeKsIqchAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVQImT2ISRIAIAiAUMv2+v9vy0tcYIBPamvkiK4ix4CpLqcApi47DtXS0wUQZACilPT1JAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 98360:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "antdConfig": () => (/* binding */ antdConfig),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57398);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ahooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(12746);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74660);
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(comlink__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96577);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pc_components_route_manager_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22907);
/* harmony import */ var pc_components_route_manager_navigation_to_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51331);
/* harmony import */ var pc_components_version_updater__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30794);
/* harmony import */ var pc_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62218);
/* harmony import */ var pc_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22829);
/* harmony import */ var pc_hooks_use_black_space__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87483);
/* harmony import */ var pc_resource_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50912);
/* harmony import */ var pc_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99000);
/* harmony import */ var pc_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70220);
/* harmony import */ var pc_utils_dnd_manager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(34092);
/* harmony import */ var pc_utils_env__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85421);
/* harmony import */ var pc_utils_os__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(39821);
/* harmony import */ var pc_utils_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(42976);
/* harmony import */ var pc_worker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(58979);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(33196);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var static_icon_workbench_workbench_account_nodata_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(67025);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_components_version_updater__WEBPACK_IMPORTED_MODULE_8__, pc_hooks__WEBPACK_IMPORTED_MODULE_10__, pc_hooks_use_black_space__WEBPACK_IMPORTED_MODULE_11__, pc_resource_service__WEBPACK_IMPORTED_MODULE_12__, pc_utils__WEBPACK_IMPORTED_MODULE_14__, pc_utils_dnd_manager__WEBPACK_IMPORTED_MODULE_15__, react_dnd__WEBPACK_IMPORTED_MODULE_21__]);
([pc_components_version_updater__WEBPACK_IMPORTED_MODULE_8__, pc_hooks__WEBPACK_IMPORTED_MODULE_10__, pc_hooks_use_black_space__WEBPACK_IMPORTED_MODULE_11__, pc_resource_service__WEBPACK_IMPORTED_MODULE_12__, pc_utils__WEBPACK_IMPORTED_MODULE_14__, pc_utils_dnd_manager__WEBPACK_IMPORTED_MODULE_15__, react_dnd__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
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

























antd__WEBPACK_IMPORTED_MODULE_24__/* .message.config */ .yw.config({
    maxCount: 1
});
const customizeRenderEmpty = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "emptyPlaceholder",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                alt: "no data",
                src: static_icon_workbench_workbench_account_nodata_png__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
                className: "img",
                width: 160,
                height: 120
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "title",
                children: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_1__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.Strings.no_data)
            })
        ]
    });
const antdConfig = {
    autoInsertSpaceInButton: false,
    renderEmpty: customizeRenderEmpty
};
const RouterProvider = ({ children  })=>{
    const cacheScrollMap = (0,react__WEBPACK_IMPORTED_MODULE_20__.useRef)({});
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_22__.useDispatch)();
    const [isDesktopDevice, setIsDesktopDevice] = react__WEBPACK_IMPORTED_MODULE_20__.useState();
    (0,ahooks__WEBPACK_IMPORTED_MODULE_2__.useMount)(async ()=>{
        const isDesktop = await (0,pc_utils_os__WEBPACK_IMPORTED_MODULE_17__/* .browserIsDesktop */ .w8)();
        setIsDesktopDevice(isDesktop);
    });
    // Logging panel presentation mode - initializing redux from localStorage
    (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(()=>{
        dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.StoreActions.setRecordVision((0,pc_utils_storage__WEBPACK_IMPORTED_MODULE_18__/* .getStorage */ .cF)(pc_utils_storage__WEBPACK_IMPORTED_MODULE_18__/* .StorageName.RecordVision */ .mL.RecordVision) || _apitable_core__WEBPACK_IMPORTED_MODULE_1__.RecordVision.Center));
    }, [
        dispatch
    ]);
    // To solve the problem of routing in Feishu needs to bring a Feishu logo,
    // so the behavior of the a tag is handled together with the proxy in navigationToUrl
    (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(()=>{
        const isFeishu = navigator.userAgent.toLowerCase().indexOf("lark") > -1;
        const clickHandler = (e)=>{
            const reg = new RegExp(`^(${window.location.origin}|(http|https)://vika.cn)`);
            const paths = [
                "/user",
                "/login",
                "/org",
                "/workbench",
                "/notify",
                "/management",
                "/invite",
                "/template",
                "/share"
            ];
            let element = e.target;
            while(element && element.tagName !== "A"){
                element = element.parentNode;
            }
            const url = element?.href;
            if (!url || !isFeishu || element.tagName !== "A" || !reg.test(url)) {
                return;
            }
            const isIgnore = paths.some((item)=>url.includes(item));
            if (isIgnore) {
                return;
            }
            e.preventDefault();
            (0,pc_components_route_manager_navigation_to_url__WEBPACK_IMPORTED_MODULE_7__/* .navigationToUrl */ .S)(url, {
                method: (e.target.target || "_self") === "_self" ? pc_components_route_manager_const__WEBPACK_IMPORTED_MODULE_6__/* .Method.Push */ .n.Push : pc_components_route_manager_const__WEBPACK_IMPORTED_MODULE_6__/* .Method.NewTab */ .n.NewTab
            });
        };
        window.addEventListener("click", clickHandler);
        return ()=>{
            window.removeEventListener("click", clickHandler);
            pc_worker__WEBPACK_IMPORTED_MODULE_19__/* .comlinkStore.proxy */ .g.proxy?.[comlink__WEBPACK_IMPORTED_MODULE_4__.releaseProxy]();
            pc_worker__WEBPACK_IMPORTED_MODULE_19__/* .comlinkStore.worker */ .g.worker?.terminate();
        };
    // eslint-disable-next-line
    }, []);
    // Links for the http protocol are automatically redirected to https
    (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(()=>{
        if (!(0,pc_utils_env__WEBPACK_IMPORTED_MODULE_16__/* .getEnvVariables */ .Sy)()?.FORCE_HTTPS) {
            return;
        }
        const targetProtocol = "https:";
        const urlObj = new URL(window.location.href);
        if (urlObj.protocol !== targetProtocol) {
            urlObj.protocol = targetProtocol;
            window.location.href = urlObj.href;
        }
    }, []);
    (0,pc_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useNavigatorName */ .i)();
    (0,pc_hooks_use_black_space__WEBPACK_IMPORTED_MODULE_11__/* .useBlackSpace */ .k)();
    (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_3___default().interceptors.request.use((config)=>{
            config.headers["X-XSRF-TOKEN"] = (0,pc_utils__WEBPACK_IMPORTED_MODULE_14__/* .getCookie */ .ej)("XSRF-TOKEN");
            return config;
        }, (error)=>{
            return Promise.reject(error);
        });
    }, [
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(()=>{
        const onResize = ()=>{
            dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.StoreActions.setScreenWidth(window.innerWidth));
        };
        dispatch(_apitable_core__WEBPACK_IMPORTED_MODULE_1__.StoreActions.setScreenWidth(window.innerWidth));
        window.addEventListener("resize", onResize);
        return ()=>{
            window.removeEventListener("resize", onResize);
        };
    }, [
        dispatch
    ]);
    const changeCacheScroll = (value, dsId, vId)=>{
        if (!pc_store__WEBPACK_IMPORTED_MODULE_13__/* .store */ .h) {
            return;
        }
        const state = pc_store__WEBPACK_IMPORTED_MODULE_13__/* .store.getState */ .h.getState();
        const { datasheetId , viewId  } = state.pageParams;
        const key = `${dsId || datasheetId},${vId || viewId}`;
        const oldCacheValue = cacheScrollMap.current[key] || {};
        const next = {
            ...cacheScrollMap.current,
            [key]: {
                ...oldCacheValue,
                ...value
            }
        };
        cacheScrollMap.current = next;
    };
    const dndManager = isDesktopDevice ? pc_utils_dnd_manager__WEBPACK_IMPORTED_MODULE_15__/* .dndH5Manager */ .$ : pc_utils_dnd_manager__WEBPACK_IMPORTED_MODULE_15__/* .dndTouchManager */ .Q;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_24__/* .ConfigProvider */ .iV, {
        ...antdConfig,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(pc_resource_service__WEBPACK_IMPORTED_MODULE_12__/* .ResourceContext.Provider */ .IO.Provider, {
            value: pc_resource_service__WEBPACK_IMPORTED_MODULE_12__/* .resourceService.instance */ .Zc.instance,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_dnd__WEBPACK_IMPORTED_MODULE_21__.DndProvider, {
                    manager: dndManager,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pc_context__WEBPACK_IMPORTED_MODULE_9__/* .ScrollContext.Provider */ .$C.Provider, {
                        value: {
                            cacheScrollMap,
                            changeCacheScroll
                        },
                        children: children
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pc_components_version_updater__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RouterProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30794:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42945);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_modal__WEBPACK_IMPORTED_MODULE_2__]);
_common_modal__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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


const VersionUpdater = ()=>{
    const { 0: versionOutdated , 1: setVersionOutdated  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("newVersionRequired", onUpdateVersion);
        return ()=>{
            window.removeEventListener("newVersionRequired", onUpdateVersion);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!versionOutdated) {
            return;
        }
        _common_modal__WEBPACK_IMPORTED_MODULE_2__/* .Modal.error */ .u_.error({
            title: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_0__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.Strings.front_version_error_title),
            content: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_0__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.Strings.front_version_error_desc),
            okText: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_0__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.Strings.refresh),
            onOk: ()=>{
                window.location.reload();
            }
        });
    }, [
        versionOutdated
    ]);
    const onUpdateVersion = ()=>{
        setVersionOutdated(true);
    };
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VersionUpdater);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useBlackSpace)
/* harmony export */ });
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23440);
/* harmony import */ var _apitable_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apitable_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var enterprise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14463);
/* harmony import */ var pc_components_notification_banner_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74963);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pc_components_notification_banner_alert__WEBPACK_IMPORTED_MODULE_1__]);
pc_components_notification_banner_alert__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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




const BLACK_SPACE_BANNER_ALERT = "BLACK_SPACE_BANNER_ALERT";
const _showBannerAlert = (destroyPrev = false)=>{
    (0,pc_components_notification_banner_alert__WEBPACK_IMPORTED_MODULE_1__/* .showBannerAlert */ .a)({
        content: (0,_apitable_core__WEBPACK_IMPORTED_MODULE_0__.t)(_apitable_core__WEBPACK_IMPORTED_MODULE_0__.Strings.black_space_alert),
        upgrade: true,
        destroyPrev,
        onBtnClick: enterprise__WEBPACK_IMPORTED_MODULE_4__.goToUpgrade,
        id: BLACK_SPACE_BANNER_ALERT
    });
};
const useBlackSpace = ()=>{
    const isBlackSpace = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.billing?.subscription?.blackSpace);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!isBlackSpace || location.href.includes("upgrade")) {
            return;
        }
        _showBannerAlert();
        const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        const mutationObserver = new MutationObserver((list)=>{
            list.forEach((item)=>{
                if (item.target === document.body) {
                    const result = [
                        ...item.removedNodes.values()
                    ].some((node)=>{
                        return node["id"] === BLACK_SPACE_BANNER_ALERT;
                    });
                    if (result) {
                        _showBannerAlert();
                    }
                }
                const dom = document.getElementById(BLACK_SPACE_BANNER_ALERT);
                if (dom && item.removedNodes.length && dom.contains(item.target)) {
                    _showBannerAlert(true);
                }
            });
        });
        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
        const dom = document.getElementById(BLACK_SPACE_BANNER_ALERT);
        if (!dom) {
            return;
        }
        mutationObserver.observe(dom, {
            childList: true,
            subtree: true
        });
    }, [
        isBlackSpace
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;