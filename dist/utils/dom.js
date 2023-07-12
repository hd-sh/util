/**
 * 动态创建script
 * importScript('xxx.js')
 */
export var importScript = (function (oHead, self) {
    return function (sSrc) {
        return new Promise(function (resolve, reject) {
            if (self.__cacheImportScript__ && self.__cacheImportScript__[sSrc]) {
                resolve();
            }
            else {
                var oScript = document.createElement('script');
                oScript.type = 'text/javascript';
                oScript.charset = 'utf-8';
                oScript.onerror = function () {
                    reject(new URIError('The script ' + sSrc + ' is not accessible.'));
                };
                oScript.onload = function () {
                    if (!self.__cacheImportScript__) {
                        ;
                        self.__cacheImportScript__ = {};
                    }
                    ;
                    self.__cacheImportScript__[sSrc] = sSrc;
                    resolve();
                };
                oHead.appendChild(oScript);
                oScript.src = sSrc;
            }
        });
    };
})(document.head || document.getElementsByTagName('head')[0], window);
/**
 *
 * @param {!!dom} ele
 * @param {*} attr
 * @returns
 */
export function getStyle(ele, attr) {
    var style = window.getComputedStyle(ele);
    return style ? style.getPropertyValue(attr) : null;
}
// 过滤查询参数
/**
 *
 * @param {*} values
 * @param {*} ignoreValue 忽略的值（移除值为xx的健值对）
 * @returns
 */
export var formatSearchValue = function (values, ignoreValue) {
    for (var key in values) {
        if (values[key] === '' || values[key] === null || values[key] === undefined) {
            delete values[key];
        }
        if (typeof values[key] === 'string' && values[key].trim() === '') {
            delete values[key];
        }
        if (ignoreValue !== undefined && values[key] === ignoreValue) {
            delete values[key];
        }
        if (typeof values[key] === 'string') {
            values[key] = values[key].trim();
        }
    }
    return values;
};
// 获取元素的偏移量
export function getElementOffset(eln) {
    var parObj = eln;
    if (!parObj) {
        return;
    }
    var width = parObj.offsetWidth;
    var height = parObj.offsetHeight;
    var top = parObj.offsetTop;
    var left = parObj.offsetLeft;
    while ((parObj = parObj.offsetParent)) {
        var offsetTop = parObj.offsetTop, offsetLeft = parObj.offsetLeft;
        top += offsetTop;
        left += offsetLeft;
    }
    return {
        top: top,
        left: left,
        width: width,
        height: height,
    };
}
export default {
    importScript: importScript,
    getStyle: getStyle,
    formatSearchValue: formatSearchValue,
    getElementOffset: getElementOffset,
};
