/**
 * 动态创建script
 * importScript('xxx.js')
 */
export declare const importScript: (sSrc: string) => Promise<void>;
/**
 *
 * @param {*} values
 * @param {*} ignoreValue 忽略的值（移除值为xx的健值对）
 * @returns
 */
export declare const formatSearchValue: (values: Record<string, any>, ignoreValue?: any) => Record<string, any>;
export declare function getElementOffset(eln: HTMLElement | null): {
    top: number;
    left: number;
    width: number;
    height: number;
} | undefined;
