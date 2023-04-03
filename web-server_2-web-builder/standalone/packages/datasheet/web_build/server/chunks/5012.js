"use strict";
exports.id = 5012;
exports.ids = [5012];
exports.modules = {

/***/ 5012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./src/modules/shared/i18n/browserDetector/utils.js
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
 */ /* eslint-disable */ let arr = [];
let each = arr.forEach;
let slice = arr.slice;
function defaults(obj) {
    each.call(slice.call(arguments, 1), function(source) {
        if (source) {
            for(var prop in source){
                if (obj[prop] === undefined) {
                    obj[prop] = source[prop];
                }
            }
        }
    });
    return obj;
}
function extend(obj) {
    each.call(slice.call(arguments, 1), function(source) {
        for(var prop in source){
            if (source) {
                obj[prop] = source[prop];
            }
        }
    });
    return obj;
}

;// CONCATENATED MODULE: ./src/modules/shared/i18n/browserDetector/browserLookups/cookie.js
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
 */ /* eslint-disable */ let cookie = {
    create: function(name, value, minutes, domain) {
        let expires;
        if (minutes) {
            let date = new Date();
            date.setTime(date.getTime() + minutes * 60 * 1000);
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        domain = domain ? "domain=" + domain + ";" : "";
        document.cookie = name + "=" + value + expires + ";" + domain + "path=/";
    },
    read: function(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(";");
        for(let i = 0; i < ca.length; i++){
            let c = ca[i];
            while(c.charAt(0) === " "){
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    },
    remove: function(name) {
        this.create(name, "", -1);
    }
};
/* harmony default export */ const browserLookups_cookie = ({
    name: "cookie",
    lookup (options) {
        let found;
        if (options.lookupCookie && typeof document !== "undefined") {
            var c = cookie.read(options.lookupCookie);
            if (c) {
                found = c;
            }
        }
        return found;
    },
    cacheUserLanguage (lng, options) {
        if (options.lookupCookie && typeof document !== "undefined") {
            cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain);
        }
    }
});

;// CONCATENATED MODULE: ./src/modules/shared/i18n/browserDetector/browserLookups/querystring.js
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
 */ /* eslint-disable */ /* harmony default export */ const querystring = ({
    name: "querystring",
    lookup (options) {
        let found;
        if (false) {}
        return found;
    }
});

;// CONCATENATED MODULE: ./src/modules/shared/i18n/browserDetector/browserLookups/localStorage.js
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
 */ /* eslint-disable */ let hasLocalStorageSupport;
try {
    hasLocalStorageSupport = window !== "undefined" && window.localStorage !== null;
    const testKey = "i18next.translate.boo";
    window.localStorage.setItem(testKey, "foo");
    window.localStorage.removeItem(testKey);
} catch (e) {
    hasLocalStorageSupport = false;
}
/* harmony default export */ const localStorage = ({
    name: "localStorage",
    lookup (options) {
        let found;
        if (options.lookupLocalStorage && hasLocalStorageSupport) {
            const lng = window.localStorage.getItem(options.lookupLocalStorage);
            if (lng) {
                found = lng;
            }
        }
        return found;
    },
    cacheUserLanguage (lng, options) {
        if (options.lookupLocalStorage && hasLocalStorageSupport) {
            window.localStorage.setItem(options.lookupLocalStorage, lng);
        }
    }
});

;// CONCATENATED MODULE: ./src/modules/shared/i18n/browserDetector/browserLookups/navigator.js
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
 */ /* eslint-disable */ /* harmony default export */ const browserLookups_navigator = ({
    name: "navigator",
    lookup (options) {
        let found = [];
        if (typeof navigator !== "undefined") {
            if (navigator.languages) {
                for(let i = 0; i < navigator.languages.length; i++){
                    found.push(navigator.languages[i]);
                }
            }
            if (navigator.userLanguage) {
                found.push(navigator.userLanguage);
            }
            if (navigator.language) {
                found.push(navigator.language);
            }
        }
        return found.length > 0 ? found : undefined;
    }
});

;// CONCATENATED MODULE: ./src/modules/shared/i18n/browserDetector/browserLookups/htmlTag.js
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
 */ /* eslint-disable */ /* harmony default export */ const htmlTag = ({
    name: "htmlTag",
    lookup (options) {
        let found;
        let htmlTag = options.htmlTag || (typeof document !== "undefined" ? document.documentElement : null);
        if (htmlTag && typeof htmlTag.getAttribute === "function") {
            found = htmlTag.getAttribute("lang");
        }
        return found;
    }
});

;// CONCATENATED MODULE: ./src/modules/shared/i18n/browserDetector/browserLookups/path.js
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
 */ /* eslint-disable */ /* harmony default export */ const path = ({
    name: "path",
    lookup (options) {
        let found;
        if (false) {}
        return found;
    }
});

;// CONCATENATED MODULE: ./src/modules/shared/i18n/browserDetector/browserLookups/subdomain.js
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
 */ /* eslint-disable */ /* harmony default export */ const subdomain = ({
    name: "subdomain",
    lookup (options) {
        let found;
        if (false) {}
        return found;
    }
});

;// CONCATENATED MODULE: ./src/modules/shared/i18n/browserDetector/languageUtils.js
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
 */ /* eslint-disable */ // import baseLogger from './logger.js';
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
class LanguageUtil {
    constructor(options){
        this.options = options;
        this.whitelist = this.options.whitelist || false;
    // this.logger = baseLogger.create('languageUtils');
    }
    getScriptPartFromCode(code) {
        if (!code || code.indexOf("-") < 0) {
            return null;
        }
        const p = code.split("-");
        if (p.length === 2) {
            return null;
        }
        p.pop();
        return this.formatLanguageCode(p.join("-"));
    }
    getLanguagePartFromCode(code) {
        if (!code || code.indexOf("-") < 0) {
            return code;
        }
        const p = code.split("-");
        return this.formatLanguageCode(p[0]);
    }
    formatLanguageCode(code) {
        // http://www.iana.org/assignments/language-tags/language-tags.xhtml
        if (typeof code === "string" && code.indexOf("-") > -1) {
            const specialCases = [
                "hans",
                "hant",
                "latn",
                "cyrl",
                "cans",
                "mong",
                "arab"
            ];
            let p = code.split("-");
            if (this.options.lowerCaseLng) {
                p = p.map((part)=>part.toLowerCase());
            } else if (p.length === 2) {
                p[0] = p[0].toLowerCase();
                p[1] = p[1].toUpperCase();
                if (specialCases.indexOf(p[1].toLowerCase()) > -1) {
                    p[1] = capitalize(p[1].toLowerCase());
                }
            } else if (p.length === 3) {
                p[0] = p[0].toLowerCase();
                if (specialCases.indexOf(p[1].toLowerCase()) > -1) {
                    // p[1] = capitalize(p[1].toLowerCase());
                    p[1] = p[2];
                    p.pop();
                }
                // if lenght 2 guess it's a country
                if (p[1].length === 2) {
                    p[1] = p[1].toUpperCase();
                }
            // if (p[0] !== "sgn" && p[2].length === 2) {
            //   p[2] = p[2].toUpperCase();
            // }
            // if (specialCases.indexOf(p[2].toLowerCase()) > -1) {
            //   p[2] = capitalize(p[2].toLowerCase());
            // }
            }
            return p.join("_");
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
    isWhitelisted(code) {
        if (this.options.load === "languageOnly" || this.options.nonExplicitWhitelist) {
            code = this.getLanguagePartFromCode(code);
        }
        return !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(code) > -1;
    }
    getFallbackCodes(fallbacks, code) {
        if (!fallbacks) {
            return [];
        }
        if (typeof fallbacks === "string") {
            fallbacks = [
                fallbacks
            ];
        }
        if (Object.prototype.toString.apply(fallbacks) === "[object Array]") {
            return fallbacks;
        }
        if (!code) {
            return fallbacks.default || [];
        }
        // asume we have an object defining fallbacks
        let found = fallbacks[code];
        if (!found) {
            found = fallbacks[this.getScriptPartFromCode(code)];
        }
        if (!found) {
            found = fallbacks[this.formatLanguageCode(code)];
        }
        if (!found) {
            found = fallbacks.default;
        }
        return found || [];
    }
    toResolveHierarchy(code, fallbackCode) {
        const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
        const codes = [];
        const addCode = (c)=>{
            if (!c) {
                return;
            }
            if (this.isWhitelisted(c)) {
                codes.push(c);
            } else {
                // this.logger.warn(`rejecting non-whitelisted language code: ${c}`);
                // console.log(`rejecting non-whitelisted language code: ${c}`);
                throw new Error(`rejecting non-whitelisted language code: ${c}`);
            }
        };
        if (typeof code === "string" && code.indexOf("-") > -1) {
            if (this.options.load !== "languageOnly") {
                addCode(this.formatLanguageCode(code));
            }
            if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly") {
                addCode(this.getScriptPartFromCode(code));
            }
            if (this.options.load !== "currentOnly") {
                addCode(this.getLanguagePartFromCode(code));
            }
        } else if (typeof code === "string") {
            addCode(this.formatLanguageCode(code));
        }
        fallbackCodes.forEach((fc)=>{
            if (codes.indexOf(fc) < 0) {
                addCode(this.formatLanguageCode(fc));
            }
        });
        return codes;
    }
}
/* harmony default export */ const languageUtils = (LanguageUtil);

;// CONCATENATED MODULE: ./src/modules/shared/i18n/browserDetector/index.js
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
 */ /* eslint-disable */ 








const browserDetector_languageUtils = new languageUtils({
    // whiteList: true,
    currentOnly: true,
    cleanCode: true
});
function getDefaults() {
    return {
        order: [
            "querystring",
            "cookie",
            "localStorage",
            "navigator",
            "htmlTag"
        ],
        lookupQuerystring: "lang",
        lookupCookie: "vika-i18n",
        lookupLocalStorage: "vika-i18n",
        // cache user language
        caches: [
            "localStorage"
        ],
        excludeCacheFor: [
            "cimode"
        ],
        //cookieMinutes: 10,
        //cookieDomain: 'myDomain'
        checkWhitelist: true
    };
}
class Browser {
    constructor(services, options = {}){
        this.type = "languageDetector";
        this.detectors = {};
        this.init(services, options);
    }
    init(services, options = {}, i18nOptions = {}) {
        this.services = services;
        this.options = defaults(options, this.options || {}, getDefaults());
        // backwards compatibility
        if (this.options.lookupFromUrlIndex) {
            this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
        }
        this.i18nOptions = i18nOptions;
        this.addDetector(browserLookups_cookie);
        this.addDetector(querystring);
        this.addDetector(localStorage);
        this.addDetector(browserLookups_navigator);
        this.addDetector(htmlTag);
        this.addDetector(path);
        this.addDetector(subdomain);
    }
    addDetector(detector) {
        this.detectors[detector.name] = detector;
    }
    detect(detectionOrder) {
        if (!detectionOrder) {
            detectionOrder = this.options.order;
        }
        let detected = [];
        detectionOrder.forEach((detectorName)=>{
            if (this.detectors[detectorName]) {
                let lookup = this.detectors[detectorName].lookup(this.options);
                if (lookup && typeof lookup === "string") {
                    lookup = [
                        lookup
                    ];
                }
                if (lookup) {
                    detected = detected.concat(lookup);
                }
            }
        });
        let found;
        detected.forEach((lng)=>{
            if (found) {
                return;
            }
            let cleanedLng = browserDetector_languageUtils.formatLanguageCode(lng);
            if (!this.options.checkWhitelist || browserDetector_languageUtils.isWhitelisted(cleanedLng)) {
                found = cleanedLng;
            }
        });
        if (!found) {
            let fallbacks = this.i18nOptions.fallbackLng;
            if (typeof fallbacks === "string") {
                fallbacks = [
                    fallbacks
                ];
            }
            if (!fallbacks) {
                fallbacks = [];
            }
            if (Object.prototype.toString.apply(fallbacks) === "[object Array]") {
                found = fallbacks[0];
            } else {
                found = fallbacks[0] || fallbacks.default && fallbacks.default[0];
            }
        }
        return found;
    }
    cacheUserLanguage(lng, caches) {
        if (!caches) {
            caches = this.options.caches;
        }
        if (!caches) {
            return;
        }
        if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) {
            return;
        }
        caches.forEach((cacheName)=>{
            if (this.detectors[cacheName]) {
                this.detectors[cacheName].cacheUserLanguage(lng, this.options);
            }
        });
    }
}
Browser.type = "languageDetector";
/* harmony default export */ const browserDetector = (Browser);

;// CONCATENATED MODULE: ./src/modules/shared/i18n/getSupportedLang.ts
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
 */ /**
 * Fallback language
 * @param code Language identifier 1
 * @param options Configuration items
 * @param options.supportedLngs Arrays of supported languages
 * @param options.fallbackLng Fallback mapping, optional. If the match process hits, it returns the language it refers to directly
 * @param options.defaultLng Default value, none matched, return this value
 * @example fallbackLang('zh-CN-Hans', { supportedLngs: ['zh-CN'], defaultLng: 'en-US' }) // => 'zh-CN'
 */ const fallbackLang = (code, { supportedLngs , fallbackLng , defaultLng  })=>{
    if (!code) return defaultLng;
    if (!fallbackLng) fallbackLng = {};
    const p = code.split("-");
    while(p.length > 0){
        const subCode = p.join("-");
        if (supportedLngs.includes(subCode)) return subCode;
        if (subCode in fallbackLng) return fallbackLng[subCode];
        p.pop();
    }
    return defaultLng;
};
/**
 * Returns a supported language identifier
 * @param lang Language identifiers
 */ const getSupportedLang = (lang)=>{
    return fallbackLang(lang, {
        supportedLngs: [
            "zh-CN",
            "en-US"
        ],
        fallbackLng: {
            zh: "zh-CN",
            en: "en-US"
        },
        defaultLng: "en-US"
    });
};

;// CONCATENATED MODULE: ./src/modules/shared/i18n/index.ts
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

// Initialising multilingual judgements
const languageDetector = new browserDetector();
languageDetector.init();
/**
 * Get the current language status
 *
 */ function initLanguage() {
    !window.__initialization_data__ && (window.__initialization_data__ = {});
    const locale = window.__initialization_data__.locale;
    if (locale) {
        window.__initialization_data__.lang = window.__initialization_data__.locale = getSupportedLang(locale);
        return;
    }
    // Default language
    const defaultLang = window.__initialization_data__.locale;
    const lang = defaultLang || languageDetector.detect();
    if (lang !== undefined) {
        // Set the language of the system i18n config
        window.__initialization_data__.lang = getSupportedLang(lang.replace(/_/g, "-"));
    }
}

;// CONCATENATED MODULE: ./src/preIndex.ts
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
 */ // Development environment fully loaded with language packs
// if(process.env.NODE_ENV === 'development') {
//   require('@apitable/i18n-lang');
// } 

initLanguage();


/***/ })

};
;