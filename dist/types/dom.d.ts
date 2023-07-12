/**
 * 动态创建script
 * importScript('xxx.js')
 */
export declare const importScript: (sSrc: string) => Promise<void>;
/**
 *
 * @param {!!dom} ele
 * @param {*} attr
 * @returns
 */
export declare function getStyle(ele: HTMLElement, attr: string): string | null;
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
declare const _default: {
    importScript: (sSrc: string) => Promise<void>;
    getStyle: typeof getStyle;
    formatSearchValue: (values: Record<string, any>, ignoreValue?: any) => Record<string, any>;
    getElementOffset: typeof getElementOffset;
};
export default _default;
