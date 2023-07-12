/**
 * **从本地存储中获取指定字段的值**
 * @param {string} fieldName 需要获取的本地存储数据的字段名
 * @param {boolean} needParse 是否需要对获取到的数据进行JSON解析，默认true
 * @returns {any}
 */
export declare const getStorageData: (fieldName: string, needParse?: boolean) => any;
/**
 * **设置本地存储中指定字段的值**
 * @param {string} fieldName 需要设置的本地存储数据的字段名
 * @param {any} fieldValue 需要设置的本地存储数据的字段值
 * @param {boolean} needStringify 是否需要对存储的数据进行JSON字符串化，默认为true
 */
export declare const setStorageData: (fieldName: string, fieldValue: any, needStringify?: boolean) => any;
/**
 * **从本地存储中获取指定字段的值**
 * @param {string} fieldName 需要获取的本地存储数据的字段名
 * @param {boolean} needParse 是否需要对获取到的数据进行JSON解析，默认true
 * @returns {any}
 */
export declare const getSessionData: (fieldName: string, needParse?: boolean) => any;
/**
 * **设置本地存储中指定字段的值**
 * @param {string} fieldName 需要设置的本地存储数据的字段名
 * @param {any} fieldValue 需要设置的本地存储数据的字段值
 * @param {boolean} needStringify 是否需要对存储的数据进行JSON字符串化，默认为true
 */
export declare const setSessionData: (fieldName: string, fieldValue: any, needStringify?: boolean) => any;
declare const _default: {
    getStorageData: (fieldName: string, needParse?: boolean) => any;
    setStorageData: (fieldName: string, fieldValue: any, needStringify?: boolean) => any;
    getSessionData: (fieldName: string, needParse?: boolean) => any;
    setSessionData: (fieldName: string, fieldValue: any, needStringify?: boolean) => any;
};
export default _default;
