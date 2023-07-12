var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * 生成唯一uuid，可以指定长度和基数
 * @param {number} len 长度，默认36
 * @param {number} radix 基数，如2，8，10，16等
 */
export function generateUuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [];
    var i;
    radix = radix || chars.length;
    if (len) {
        for (i = 0; i < len; i++) {
            uuid[i] = chars[Math.floor(Math.random() * radix)];
        }
    }
    else {
        var r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | (Math.random() * 16);
                uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
}
export var isIOS = (function () {
    var u = window.navigator.userAgent;
    var ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    var iPad = u.indexOf('iPad') > -1;
    var iPhone = u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1;
    if (ios || iPad || iPhone) {
        return true;
    }
    else {
        return false;
    }
})();
export var isAndroid = (function () {
    var u = window.navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
        return true;
    }
    else {
        return false;
    }
})();
export var isIE = /Trident|MSIE/.test(navigator.userAgent);
/**
 * 复制到剪切板
 * @param {string} text 复制文本
 */
export var copyText = function (text) {
    var tempInput = document.createElement('textarea');
    tempInput.style.cssText = 'position:absolute;top:0;opacity:0;';
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    var isCopySuccess = document.execCommand('Copy');
    document.body.removeChild(tempInput);
    return isCopySuccess;
};
export var delay = function (timeout) {
    return new Promise(function (resolve) {
        setTimeout(resolve, timeout);
    });
};
/**
 * 延时执行
 * sleep(3000).then(()=>f1)
 */
export var sleep = delay;
/**
 * 生成1～length的数组
 * @param {*} length
 * @returns [1,2,3]
 */
export var generateRange = function (length) {
    return new Array(length).fill(0).map(function (_, index) { return index + 1; });
};
/**
 * 为Promise包装一个cancel方法，让其变得可取消
 * @param {Promise} promise
 * @returns {Promise}
 */
export var makeCancelablePromise = function (promise) {
    var rejectFn;
    var wrappedPromise = new Promise(function (resolve, reject) {
        rejectFn = reject;
        Promise.resolve(promise).then(resolve).catch(reject);
    });
    wrappedPromise.cancel = function () {
        ;
        promise.__canceled = true;
        rejectFn({
            canceled: true,
        });
    };
    return wrappedPromise;
};
// 节流函数
export function throttle(func, delay) {
    var timeout = null;
    var lastExecTime = 0;
    return function () {
        var _this = this;
        var currentTime = Date.now();
        var elapsed = currentTime - lastExecTime;
        var execute = function () {
            func.apply(_this);
            lastExecTime = currentTime;
        };
        if (!timeout) {
            execute();
        }
        else if (elapsed >= delay) {
            clearTimeout(timeout);
            timeout = null;
            execute();
        }
        else {
            clearTimeout(timeout);
            timeout = setTimeout(execute, delay - elapsed);
        }
    };
}
// 防抖函数
export function debounce(func, wait, immediate) {
    var timeout;
    var result;
    function debounced() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        if (timeout) {
            clearTimeout(timeout);
        }
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(function () {
                result = func.apply(context, args);
            }, wait);
            if (callNow) {
                result = func.apply(context, args);
            }
        }
        else {
            timeout = setTimeout(function () {
                result = func.apply(context, args);
            }, wait);
        }
        return result;
    }
    debounced.cancel = function () {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
    };
    return debounced;
}
export var typeFn = (function () {
    var utils = {};
    'Boolean|Number|String|Function|Array|Date|RegExp|Object|Error'
        .split('|')
        .forEach(function (item) {
        utils['is' + item] = function (obj) {
            return {}.toString.call(obj) == '[object ' + item + ']';
        };
    });
    return __assign({}, utils);
})();
export default {
    generateUuid: generateUuid,
    isIOS: isIOS,
    isAndroid: isAndroid,
    isIE: isIE,
    copyText: copyText,
    throttle: throttle,
    debounce: debounce,
    typeFn: typeFn,
};
