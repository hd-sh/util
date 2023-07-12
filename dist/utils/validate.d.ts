/**
 * 请求时参数去掉空值
 * @param {*} values
 * @param {忽略的值} ignoreValue
 * @returns
 */
export declare const formatRequestData: (values: Record<string, any>, ignoreValue?: any) => Record<string, any>;
/**
 * 手机号脱敏
 * @param {*} phone
 * @returns
 */
export declare const formatPhoneDisplay: (phone?: string) => string;
export declare const phoneDesensitize: (phone?: string) => string;
export declare const sum: (a: number, b: number) => number;
/**
 * 判断空数组
 * @param {Array} array 需要判断的数组
 * @returns {boolean}
 */
export declare const isEmptyArray: (array: any[]) => boolean;
/**
 * 判断空对象
 * @param {Object} object 需要判断的对象
 * @returns {boolean}
 */
export declare const isEmptyObject: (object: object) => boolean;
export declare const isEmptyValue: (value: any) => boolean;
/**
 * 判断一个函数是否是一个生成器函数
 * @param {Function} fn
 * @returns {Boolean}
 */
export declare const isGeneratorFunction: (fn: any) => boolean;
export declare const isNotNumber: (value: any) => boolean;
export declare const noopValidator: (rule: any, value: any, callback: () => void) => void;
export declare const patterns: {
    integer: RegExp;
    nonNegativeInteger: RegExp;
    limitedInteger: RegExp;
    cashTwo: RegExp;
    cash: RegExp;
    invalidCash: RegExp;
};
export declare const validators: {
    isPatternMatch: (value: any, pattern: RegExp) => boolean;
    isNumber: (number: any) => boolean;
    isBetween: (number: any, min: number, max: number) => boolean;
    isLessThan: (number: any, targetNumber: any) => boolean;
    isLessThanOrEqualTo: (number: any, targetNumber: any) => boolean;
    isLargerThan: (number: any, targetNumber: any) => boolean;
    isLargerThanOrEqualTo: (number: any, targetNumber: any) => boolean;
    isEmptyArray: (array: any[]) => boolean;
    isEmptyObject: (object: object) => boolean;
    isEmptyValue: (value: any) => boolean;
};
export declare const getURLParams: (search?: string) => Record<string, string>;
declare const _default: {
    formatRequestData: (values: Record<string, any>, ignoreValue?: any) => Record<string, any>;
    getURLParams: (search?: string | undefined) => Record<string, string>;
    formatPhoneDisplay: (phone?: string | undefined) => string;
    phoneDesensitize: (phone?: string | undefined) => string;
    sum: (a: number, b: number) => number;
    isEmptyArray: (array: any[]) => boolean;
    isEmptyObject: (object: object) => boolean;
    isEmptyValue: (value: any) => boolean;
    isGeneratorFunction: (fn: any) => boolean;
    isNotNumber: (value: any) => boolean;
    noopValidator: (rule: any, value: any, callback: () => void) => void;
    patterns: {
        integer: RegExp;
        nonNegativeInteger: RegExp;
        limitedInteger: RegExp;
        cashTwo: RegExp;
        cash: RegExp;
        invalidCash: RegExp;
    };
    validators: {
        isPatternMatch: (value: any, pattern: RegExp) => boolean;
        isNumber: (number: any) => boolean;
        isBetween: (number: any, min: number, max: number) => boolean;
        isLessThan: (number: any, targetNumber: any) => boolean;
        isLessThanOrEqualTo: (number: any, targetNumber: any) => boolean;
        isLargerThan: (number: any, targetNumber: any) => boolean;
        isLargerThanOrEqualTo: (number: any, targetNumber: any) => boolean;
        isEmptyArray: (array: any[]) => boolean;
        isEmptyObject: (object: object) => boolean;
        isEmptyValue: (value: any) => boolean;
    };
};
export default _default;
