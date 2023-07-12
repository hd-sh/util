/**
 * **从本地存储中获取指定字段的值**
 * @param {string} fieldName 需要获取的本地存储数据的字段名
 * @param {boolean} needParse 是否需要对获取到的数据进行JSON解析，默认true
 * @returns {any}
 */
export var getStorageData = function (fieldName, needParse) {
    if (needParse === void 0) { needParse = true; }
    return !needParse
        ? localStorage.getItem(fieldName)
        : JSON.parse(localStorage.getItem(fieldName) || '{}');
};
/**
 * **设置本地存储中指定字段的值**
 * @param {string} fieldName 需要设置的本地存储数据的字段名
 * @param {any} fieldValue 需要设置的本地存储数据的字段值
 * @param {boolean} needStringify 是否需要对存储的数据进行JSON字符串化，默认为true
 */
export var setStorageData = function (fieldName, fieldValue, needStringify) {
    if (needStringify === void 0) { needStringify = true; }
    localStorage.setItem(fieldName, needStringify ? JSON.stringify(fieldValue) : fieldValue);
};
/**
 * **从本地存储中获取指定字段的值**
 * @param {string} fieldName 需要获取的本地存储数据的字段名
 * @param {boolean} needParse 是否需要对获取到的数据进行JSON解析，默认true
 * @returns {any}
 */
export var getSessionData = function (fieldName, needParse) {
    if (needParse === void 0) { needParse = true; }
    return !needParse
        ? sessionStorage.getItem(fieldName)
        : JSON.parse(sessionStorage.getItem(fieldName) || '{}');
};
/**
 * **设置本地存储中指定字段的值**
 * @param {string} fieldName 需要设置的本地存储数据的字段名
 * @param {any} fieldValue 需要设置的本地存储数据的字段值
 * @param {boolean} needStringify 是否需要对存储的数据进行JSON字符串化，默认为true
 */
export var setSessionData = function (fieldName, fieldValue, needStringify) {
    if (needStringify === void 0) { needStringify = true; }
    sessionStorage.setItem(fieldName, needStringify ? JSON.stringify(fieldValue) : fieldValue);
};
export default {
    getStorageData: getStorageData,
    setStorageData: setStorageData,
    getSessionData: getSessionData,
    setSessionData: setSessionData,
};
