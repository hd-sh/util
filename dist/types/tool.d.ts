/**
 * 生成唯一uuid，可以指定长度和基数
 * @param {number} len 长度，默认36
 * @param {number} radix 基数，如2，8，10，16等
 */
export declare const generateUuid: (len?: number, radix?: number) => string;
export declare const isIOS: boolean;
export declare const isAndroid: boolean;
export declare const isIE: boolean;
/**
 * 复制到剪切板
 * @param {string} text 复制文本
 */
export declare const copyText: (text: string) => boolean;
export declare const delay: (timeout: number) => Promise<unknown>;
/**
 * 延时执行
 * sleep(3000).then(()=>f1)
 */
export declare const sleep: (timeout: number) => Promise<unknown>;
/**
 * 生成1～length的数组
 * @param {*} length
 * @returns [1,2,3]
 */
export declare const generateRange: (length: number) => Array<number>;
/**
 * 为Promise包装一个cancel方法，让其变得可取消
 * @param {Promise} promise
 * @returns {Promise}
 */
export declare const makeCancelablePromise: <T>(promise: Promise<T>) => Promise<T> & {
    cancel: () => void;
};
export declare function debounce(func: (...args: any[]) => any, wait: number, immediate?: boolean): (...args: any[]) => any;
export declare const typeFn: {
    [x: string]: (obj: any) => boolean;
};
