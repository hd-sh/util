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
export declare const getURLParams: (search?: string) => Record<string, string>;
