/**
 * 生成唯一uuid，可以指定长度和基数
 * @param {number} len 长度，默认36
 * @param {number} radix 基数，如2，8，10，16等
 */
export const generateUuid = (len, radix) => {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  var uuid = [],
    i
  radix = radix || chars.length
  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
  } else {
    var r
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join('')
}
export const isIOS = (function () {
  const u = navigator.userAgent
  const ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  const iPad = u.indexOf('iPad') > -1
  const iPhone = u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1
  if (ios || iPad || iPhone) {
    return true
  } else {
    return false
  }
})()

export const isAndroid = (function () {
  const u = navigator.userAgent
  if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
    return true
  } else {
    return false
  }
})()
export const isIE = (function () {
  if (!!window.ActiveXObject || 'ActiveXObject' in window) {
    return true
  } else {
    return false
  }
})()
/**
 * 复制到剪切板
 * @param {string} text 复制文本
 */
export const copyText = (text) => {
  const tempInput = document.createElement('textarea')

  tempInput.style.cssText = 'position:absolute;top:0;opacity:0;'
  document.body.appendChild(tempInput)
  tempInput.value = text
  tempInput.select()

  const isCopySuccess = document.execCommand('Copy')
  document.body.removeChild(tempInput)

  return isCopySuccess
}

export const delay = (timeout) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
/**
 * 延时执行
 * sleep(3000).then(()=>f1)
 */
export const sleep = delay
/**
 * 生成1～length的数组
 * @param {*} length
 * @returns [1,2,3]
 */
export const generateRange = (length) => {
  return new Array(length).fill(0).map((_, index) => index + 1)
}
/**
 * 动态创建script
 * importScript('xxx.js')
 */
export const importScript = (
  (oHead, self) => (sSrc) =>
    new Promise((resolve, reject) => {
      if (self.__cacheImportScript__ && self.__cacheImportScript__[sSrc]) {
        resolve()
      } else {
        var oScript = document.createElement('script')
        oScript.type = 'text/javascript'
        oScript.charset = 'utf-8'
        oScript.onerror = () => {
          reject(new URIError('The script ' + sSrc + ' is not accessible.'))
        }
        oScript.onload = () => {
          if (!self.__cacheImportScript__) {
            self.__cacheImportScript__ = {}
          }
          self.__cacheImportScript__[sSrc] = sSrc
          resolve()
        }
        oHead.appendChild(oScript)
        oScript.src = sSrc
      }
    })
)(document.head || document.getElementsByTagName('head')[0], window)

/**
 * 为Promise包装一个cancel方法，让其变得可取消
 * @param {Promise} promise
 * @returns {Promise}
 */
export const makeCancelablePromise = (promise) => {
  let rejectFn

  const wrappedPromise = new Promise((resolve, reject) => {
    rejectFn = reject

    Promise.resolve(promise).then(resolve).catch(reject)
  })

  wrappedPromise.cancel = () => {
    promise.__canceled = true
    rejectFn({ canceled: true })
  }

  return wrappedPromise
}
/**
 * 请求时参数去掉空值
 * @param {*} values
 * @param {忽略的值} ignoreValue
 * @returns
 */
export const formatRequestData = (values, ignoreValue) => {
  for (const key in values) {
    if (values[key] === '' || values[key] === null || values[key] === undefined) {
      delete values[key]
    }
    if (typeof values[key] === 'string' && values[key].trim() === '') {
      delete values[key]
    }

    if (ignoreValue !== undefined && values[key] === ignoreValue) {
      delete values[key]
    }

    if (typeof values[key] === 'string') {
      values[key] = values[key].trim()
    }
  }
  return values
}
/**
 * 手机号脱敏
 * @param {*} phone
 * @returns
 */
export const formatPhoneDisplay = (phone) =>
  phone ? `${phone}`.replace(/(\d{3})\d*(\d{4})/, '$1****$2') : ''

// 手机号脱敏
export const phoneDesensitize = formatPhoneDisplay
export const sum = (() => {
  return (a, b) => a + b
})()
// 节流函数
export const throttle = (() => {
  let startTime = null
  return (time, callback) =>
    new Promise((resolve, reject) => {
      let nowTime = new Date().getTime()
      if (!startTime || nowTime - startTime > time) {
        startTime = nowTime
        callback && callback instanceof Function && callback()
        resolve()
        // callback&&callback()
      }
    })
})()

// 防抖函数
export const stabilization = (() => {
  let timer = null
  return (time, callback) => {
    return new Promise((resolve, reject) => {
      window.clearTimeout(timer)
      timer = setTimeout(() => {
        callback && callback instanceof Function && callback()
        resolve()
      }, time)
    })
  }
})()

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export const debounce = (func, wait, immediate) => {
  let timeout
  return function () {
    const context = this
    const args = [...arguments]
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }
}
/**
 * 判断空数组
 * @param {Array} array 需要判断的数组
 * @returns {boolean}
 */

const isEmptyArray = (array) => {
  return !Array.isArray(array) || array.length === 0
}

/**
 * 判断空对象
 * @param {Object} object 需要判断的对象
 * @returns {boolean}
 */
const isEmptyObject = (object) => {
  let empty = false
  if (!(object instanceof Object)) {
    object = {}
  }
  empty = Object.keys(object).length === 0
  return empty
}

const isEmptyValue = (value) => {
  return value == null || value === ''
}

/**
 * 判断一个函数是否是一个生成器函数
 * @param {Function} fn
 * @returns {Boolean}
 */
const isGeneratorFunction = (fn) => {
  return fn && Object.prototype.toString.call(fn) === '[object GeneratorFunction]'
}

const isNotNumber = (value) => {
  return isEmptyValue(value) || isNaN(value)
}

const noopValidator = (rule, value, callback) => callback()

const patterns = {
  integer: /^[1-9]\d*$/, // 整数
  nonNegativeInteger: /^(0|[1-9]\d*)$/, // 非负整数
  limitedInteger: /^[1-9]\d{0,7}$/, // 有限整数
  cashTwo: /^(([1-9]{1}\d*)|(0{1}))(\.\d{2})?$/,
  cash: /^(([1-9]{1}\d*)|(0{1}))(\.\d{0,2})?$/,
  invalidCash: /\..{3}/,
}

const validators = {
  isPatternMatch: (value, pattern) => {
    if (!value) {
      return true
    }
    return pattern && pattern.test && pattern.test(value)
  },
  isNumber: (number) => {
    return !isNotNumber(number)
  },
  isBetween: (number, min, max) => {
    return validators.isNumber(number) && number >= min && number <= max
  },
  isLessThan: (number, targetNumber) => {
    if (isNotNumber(number) || isNotNumber(targetNumber)) {
      return true
    }
    return +number < +targetNumber
  },
  isLessThanOrEqualTo: (number, targetNumber) => {
    if (isNotNumber(number) || isNotNumber(targetNumber)) {
      return true
    }
    return +number <= +targetNumber
  },
  isLargerThan: (number, targetNumber) => {
    if (isNotNumber(number) || isNotNumber(targetNumber)) {
      return true
    }
    return +number > +targetNumber
  },
  isLargerThanOrEqualTo: (number, targetNumber) => {
    if (isNotNumber(number) || isNotNumber(targetNumber)) {
      return true
    }
    return +number >= +targetNumber
  },
  isEmptyArray,
  isEmptyObject,
  isEmptyValue,
}

const typeFn = (() => {
  var utils = {}
  'Boolean|Number|String|Function|Array|Date|RegExp|Object|Error'
    .split('|')
    .forEach(function (item) {
      utils['is' + item] = function (obj) {
        return {}.toString.call(obj) == '[object ' + item + ']'
      }
    })
  console.log('utils: ', utils)
  return { ...utils }
})()

/**
 *
 * @param {!!dom} ele
 * @param {*} attr
 * @returns
 */
const getStyle = (ele, attr) => {
  var style = null
  if (window.getComputedStyle) {
    style = window.getComputedStyle(ele, null)
  } else {
    style = ele.currentStyle
  }
  return attr ? style[attr] : style
}

export default {
  isIOS,
  isAndroid,
  isIE,
  delay,
  sleep,
  generateRange,
  importScript,
  makeCancelablePromise,
  formatRequestData,
  formatPhoneDisplay,
  phoneDesensitize,
  throttle,
  stabilization,
  debounce,
  copyText,
  generateUuid,
  isEmptyArray,
  isEmptyObject,
  isEmptyValue,
  isGeneratorFunction,
  isNotNumber,
  noopValidator,
  patterns,
  validators,
  typeFn,
  sum,
  getStyle,
}
