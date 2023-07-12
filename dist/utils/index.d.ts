declare const _default: {
    heart: (params: any) => void;
    customLog: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
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
    generateUuid: typeof import("./tool").generateUuid;
    isIOS: boolean;
    isAndroid: boolean;
    isIE: boolean;
    copyText: (text: string) => boolean;
    throttle: typeof import("./tool").throttle;
    debounce: typeof import("./tool").debounce;
    typeFn: {
        [x: string]: (obj: any) => boolean;
    };
    getStorageData: (fieldName: string, needParse?: boolean) => any;
    setStorageData: (fieldName: string, fieldValue: any, needStringify?: boolean) => any;
    getSessionData: (fieldName: string, needParse?: boolean) => any;
    setSessionData: (fieldName: string, fieldValue: any, needStringify?: boolean) => any;
    importScript: (sSrc: string) => Promise<void>;
    getStyle: typeof import("./dom").getStyle;
    formatSearchValue: (values: Record<string, any>, ignoreValue?: any) => Record<string, any>;
    getElementOffset: typeof import("./dom").getElementOffset;
};
export default _default;
