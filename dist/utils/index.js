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
import dom from './dom';
import storage from './storage';
import tool from './tool';
import validate from './validate';
import test from './test';
export default __assign(__assign(__assign(__assign(__assign({}, dom), storage), tool), validate), test);
