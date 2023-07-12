/**
 * 请求时参数去掉空值
 * @param {*} values
 * @param {忽略的值} ignoreValue
 * @returns
 */
export var formatRequestData = function (values, ignoreValue) {
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
/**
 * 手机号脱敏
 * @param {*} phone
 * @returns
 */
export var formatPhoneDisplay = function (phone) {
    return phone ? "".concat(phone).replace(/(\d{3})\d*(\d{4})/, '$1****$2') : '';
};
// 手机号脱敏
export var phoneDesensitize = formatPhoneDisplay;
export var sum = (function () {
    return function (a, b) { return a + b; };
})();
/**
 * 判断空数组
 * @param {Array} array 需要判断的数组
 * @returns {boolean}
 */
export var isEmptyArray = function (array) {
    return !Array.isArray(array) || array.length === 0;
};
/**
 * 判断空对象
 * @param {Object} object 需要判断的对象
 * @returns {boolean}
 */
export var isEmptyObject = function (object) {
    var empty = false;
    if (!(object instanceof Object)) {
        object = {};
    }
    empty = Object.keys(object).length === 0;
    return empty;
};
export var isEmptyValue = function (value) {
    return value == null || value === '';
};
/**
 * 判断一个函数是否是一个生成器函数
 * @param {Function} fn
 * @returns {Boolean}
 */
export var isGeneratorFunction = function (fn) {
    return fn && Object.prototype.toString.call(fn) === '[object GeneratorFunction]';
};
export var isNotNumber = function (value) {
    return isEmptyValue(value) || isNaN(value);
};
export var noopValidator = function (rule, value, callback) {
    callback();
};
export var patterns = {
    integer: /^[1-9]\d*$/,
    nonNegativeInteger: /^(0|[1-9]\d*)$/,
    limitedInteger: /^[1-9]\d{0,7}$/,
    cashTwo: /^(([1-9]{1}\d*)|(0{1}))(\.\d{2})?$/,
    cash: /^(([1-9]{1}\d*)|(0{1}))(\.\d{0,2})?$/,
    invalidCash: /\..{3}/,
};
export var validators = {
    isPatternMatch: function (value, pattern) {
        if (!value) {
            return true;
        }
        return pattern && pattern.test && pattern.test(value);
    },
    isNumber: function (number) {
        return !isNotNumber(number);
    },
    isBetween: function (number, min, max) {
        return validators.isNumber(number) && number >= min && number <= max;
    },
    isLessThan: function (number, targetNumber) {
        if (isNotNumber(number) || isNotNumber(targetNumber)) {
            return true;
        }
        return +number < +targetNumber;
    },
    isLessThanOrEqualTo: function (number, targetNumber) {
        if (isNotNumber(number) || isNotNumber(targetNumber)) {
            return true;
        }
        return +number <= +targetNumber;
    },
    isLargerThan: function (number, targetNumber) {
        if (isNotNumber(number) || isNotNumber(targetNumber)) {
            return true;
        }
        return +number > +targetNumber;
    },
    isLargerThanOrEqualTo: function (number, targetNumber) {
        if (isNotNumber(number) || isNotNumber(targetNumber)) {
            return true;
        }
        return +number >= +targetNumber;
    },
    isEmptyArray: isEmptyArray,
    isEmptyObject: isEmptyObject,
    isEmptyValue: isEmptyValue,
};
// url params
export var getURLParams = function (search) {
    search = search || location.search;
    var list = search.split('?');
    if (!isEmptyArray(list) && list.length > 1) {
        var item = list[1];
        var items = item.split('&');
        if (isEmptyArray(items)) {
            items = [];
        }
        var newParams_1 = {};
        items.forEach(function (rs) {
            var param = rs.split('=');
            if (!isEmptyArray(param)) {
                var key = '';
                var value = '';
                if (param.length === 1) {
                    key = param[0];
                }
                else if (param.length === 2) {
                    key = param[0];
                    value = param[1];
                }
                key && value && (newParams_1[key] = value);
            }
        });
        return newParams_1;
    }
    else {
        return {};
    }
};
export default {
    formatRequestData: formatRequestData,
    getURLParams: getURLParams,
    formatPhoneDisplay: formatPhoneDisplay,
    phoneDesensitize: phoneDesensitize,
    sum: sum,
    isEmptyArray: isEmptyArray,
    isEmptyObject: isEmptyObject,
    isEmptyValue: isEmptyValue,
    isGeneratorFunction: isGeneratorFunction,
    isNotNumber: isNotNumber,
    noopValidator: noopValidator,
    patterns: patterns,
    validators: validators,
};
